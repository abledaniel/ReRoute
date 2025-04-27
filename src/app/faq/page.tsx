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
              <button
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "none",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
              >
                Back to Map
              </button>
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
              ReRoute is a transit web application that uses the transit system's API to display and process real-time information about bus routes, stops, and vehicles. 
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
              ReRoute connects to the transit system's API to fetch real-time data about bus routes, stops, and vehicles. 
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
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How accurate are the arrival predictions?</h3>
            <p style={{ lineHeight: "1.6" }}>
              ReRoute uses real-time data from the transit system's API to provide current information about bus locations. 
              As more historical data is collected, machine learning models will be implemented to improve arrival time predictions, 
              taking into account factors such as traffic patterns, time of day, and day of the week.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Is my location data used?</h3>
            <p style={{ lineHeight: "1.6" }}>
              ReRoute only uses your location when you explicitly allow it, such as when finding nearby bus routes or planning a trip from your current location. 
              Your location data is not stored or shared with third parties.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How often is the data updated?</h3>
            <p style={{ lineHeight: "1.6" }}>
              Bus location data is updated in real-time from the transit system's API. Route and stop information is updated regularly to reflect any changes in the transit system.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>Can I use ReRoute on my mobile device?</h3>
            <p style={{ lineHeight: "1.6" }}>
              Yes, ReRoute is designed to be responsive and work well on both desktop and mobile devices. You can access it through any web browser on your smartphone or tablet.
            </p>
          </div>

          <div style={{ 
            background: "rgba(0, 0, 0, 0.3)", 
            borderRadius: "10px", 
            padding: "20px"
          }}>
            <h3 style={{ fontSize: "18px", marginBottom: "12px" }}>How can I report an issue or provide feedback?</h3>
            <p style={{ lineHeight: "1.6" }}>
              If you encounter any issues or have suggestions for improving ReRoute, please contact us through the feedback form or email us at support@reroute.com.
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
