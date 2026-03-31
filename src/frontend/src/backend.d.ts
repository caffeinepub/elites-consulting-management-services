import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Volunteer {
    name: string;
    email: string;
    interestArea: string;
    timestamp: Time;
    phone: string;
    location: string;
}
export interface ContactSubmission {
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllVolunteers(): Promise<Array<Volunteer>>;
    submitContact(name: string, phone: string, email: string, subject: string, message: string): Promise<void>;
    submitVolunteer(name: string, phone: string, email: string, location: string, interestArea: string): Promise<void>;
}
