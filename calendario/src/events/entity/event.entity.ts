import { UUID } from "crypto";

export class Event {
    name: string;
    id: UUID;
    description?: string;
    startTime: Date;
    endTime: Date;
}