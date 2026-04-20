import type { Request, Response } from "express";
import {
  deleteOpenPosition,
  getOpenPositionById,
  getOpenPositions,
  updateOpenPositions,
} from "../services/open-positions.service.js";
import type { OpenPosition } from "../types/open-position.js";

type OpenPositionParams = {
  id: string;
};

function isValidOpenPosition(position: Partial<OpenPosition>): boolean {
  return (
    typeof position.id === "string" &&
    typeof position.title === "string" &&
    typeof position.company === "string" &&
    typeof position.type === "string" &&
    typeof position.location === "string" &&
    typeof position.deadline === "string" &&
    typeof position.summary === "string" &&
    typeof position.description === "string" &&
    (typeof position.logo === "string" || typeof position.logo === "undefined") &&
    typeof position.applyUrl === "string" &&
    typeof position.isPublished === "boolean" &&
    typeof position.order === "number"
  );
}

export async function listPublicOpenPositions(_req: Request, res: Response) {
  try {
    const positions = await getOpenPositions();
    return res.status(200).json(positions);
  } catch (error) {
    console.error("listPublicOpenPositions error:", error);
    return res.status(500).json({ message: "Failed to load open positions." });
  }
}

export async function getPublicOpenPosition(
  req: Request<OpenPositionParams>,
  res: Response
) {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Position id is required." });
    }

    const position = await getOpenPositionById(id);

    if (!position || !position.isPublished) {
      return res.status(404).json({ message: "Open position not found." });
    }

    return res.status(200).json(position);
  } catch (error) {
    console.error("getPublicOpenPosition error:", error);
    return res.status(500).json({ message: "Failed to load open position." });
  }
}

export async function listAdminOpenPositions(_req: Request, res: Response) {
  try {
    const positions = await getOpenPositions({ includeUnpublished: true });
    return res.status(200).json(positions);
  } catch (error) {
    console.error("listAdminOpenPositions error:", error);
    return res.status(500).json({ message: "Failed to load open positions." });
  }
}

export async function putAdminOpenPositions(req: Request, res: Response) {
  try {
    const positions = req.body as Partial<OpenPosition>[];

    if (!Array.isArray(positions)) {
      return res.status(400).json({ message: "Open positions payload must be an array." });
    }

    const invalid = positions.some((position) => !isValidOpenPosition(position));
    if (invalid) {
      return res.status(400).json({ message: "Invalid open positions payload." });
    }

    const saved = await updateOpenPositions(positions as OpenPosition[]);
    return res.status(200).json(saved);
  } catch (error) {
    console.error("putAdminOpenPositions error:", error);
    return res.status(500).json({ message: "Failed to save open positions." });
  }
}

export async function removeAdminOpenPosition(
  req: Request<OpenPositionParams>,
  res: Response
) {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Position id is required." });
    }

    const nextPositions = await deleteOpenPosition(id);
    return res.status(200).json(nextPositions);
  } catch (error) {
    console.error("removeAdminOpenPosition error:", error);

    if (error instanceof Error && error.message === "Open position not found.") {
      return res.status(404).json({ message: error.message });
    }

    return res.status(500).json({ message: "Failed to delete open position." });
  }
}