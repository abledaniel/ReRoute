"use client";
import React from "react";
import Link from "next/link";
import '@/styles/base.css';

const FAQPage = () => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(to right, #1e3c72, #2a5298)", 
      padding: "16px",
      color: "white"
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>REROUTE</h1>
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <Link href="/map" style={{ textDecoration: "none" }}>

            </Link>
          </div>
        </div>

        <div style={{ 
          background: "rgba(0, 0, 0, 0.3)", 
          borderRadius: "10px", 
          padding: "24px",
          marginBottom: "24px"
        }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Frequently Asked Questions</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.6" }}>
            ReRoute is a transit web application that provides real-time information about bus routes, stops, and vehicles. 
            Our goal is to help you navigate the transit system more efficiently with up-to-date information and predictions.
          </p>
        </div>

        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "16px" 
        }}>
          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>What is ReRoute?</h3>
            <p style={{ lineHeight: "1.6" }}>
              ReRoute is a transit web application that uses the transit system&apos;s API to display and process real-time information about bus routes, stops, and vehicles. 
              It helps users quickly access the latest transit information to plan their journeys more effectively.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How does ReRoute work?</h3>
            <p style={{ lineHeight: "1.6" }}>
              ReRoute connects to the transit system&apos;s API to fetch real-time data about bus routes, stops, and vehicles. 
              This data is processed and displayed in an easy-to-use interface. As more data is collected, machine learning models 
              will be used to predict the most likely arrival times for buses at specific stops.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>What features does ReRoute offer?</h3>
            <ul style={{ lineHeight: "1.6", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "8px" }}>Real-time bus tracking and location information</li>
              <li style={{ marginBottom: "8px" }}>Interactive maps showing bus routes and stops</li>
              <li style={{ marginBottom: "8px" }}>Detailed information about bus stops and routes</li>
              <li style={{ marginBottom: "8px" }}>Trip planning with directions between locations</li>
              <li style={{ marginBottom: "8px" }}>Predicted arrival times based on historical data</li>
            </ul>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How do I find a specific bus route?</h3>
            <p style={{ lineHeight: "1.6" }}>
              On the map page, you can see all nearby bus routes. Click on a route to view detailed information about it, 
              including all stops and current vehicle positions. You can also move around the map to find routes in the area.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How do I plan a trip?</h3>
            <p style={{ lineHeight: "1.6" }}>
              To plan a trip, enter your starting location and destination in the search fields on the map page. 
              ReRoute will show you the available transit options, including bus routes, estimated travel times, and walking directions to and from bus stops.
            </p>
          </div>


          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How often is the data updated?</h3>
            <p style={{ lineHeight: "1.6" }}>
              Bus location data is updated in real-time from the transit system&apos;s API. Route and stop information is updated regularly to reflect any changes in the transit system.
            </p>
          </div>

        </div>

        <div style={{ 
          marginTop: "32px", 
          textAlign: "center", 
          padding: "20px",
          background: "rgba(0, 0, 0, 0.3)", 
          borderRadius: "10px"
        }}>
          <p style={{ marginBottom: "16px" }}>
            ReRoute is a project created by Abel to improve public transit navigation.
          </p>
          <p>
            © {new Date().getFullYear()} ReRoute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
