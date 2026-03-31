import Text "mo:core/Text";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  module Volunteer {
    public func compare(v1 : Volunteer, v2 : Volunteer) : Order.Order {
      Text.compare(v1.name, v2.name);
    };
  };

  type Volunteer = {
    name : Text;
    phone : Text;
    email : Text;
    location : Text;
    interestArea : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(c1 : ContactSubmission, c2 : ContactSubmission) : Order.Order {
      Text.compare(c1.name, c2.name);
    };
  };

  type ContactSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let volunteers = Map.empty<Text, Volunteer>();
  let contactSubmissions = Map.empty<Text, ContactSubmission>();

  public shared ({ caller }) func submitVolunteer(name : Text, phone : Text, email : Text, location : Text, interestArea : Text) : async () {
    let volunteer : Volunteer = {
      name;
      phone;
      email;
      location;
      interestArea;
      timestamp = Time.now();
    };
    volunteers.add(email, volunteer);
  };

  public shared ({ caller }) func submitContact(name : Text, phone : Text, email : Text, subject : Text, message : Text) : async () {
    let contact : ContactSubmission = {
      name;
      phone;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(email, contact);
  };

  public query ({ caller }) func getAllVolunteers() : async [Volunteer] {
    volunteers.values().toArray().sort();
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };
};
