import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 Sai Kumar Dasam
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              3rd Year B.Tech — CSE (core) | University of Hyderabad
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Tatiparthi, Pitapuram, Andhra Pradesh
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ dasamsaikumar@gmail.com | 📞 +91 6303444914
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              4th-year B.Tech AI student experienced in ML, DL, and computer vision.
              Skilled in Python, TensorFlow, PyTorch, and Scikit-learn. Passionate about
              building impactful AI systems and seeking opportunities to contribute to
              real-world AI projects.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Internships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>🧑‍💼 Internships</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: "14px 16px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <strong style={{ color: "#e5e5e5" }}>
                Nimoy IT Solutions Pvt. Ltd. (NIMOY.AI) — Intern – AI Engineer
              </strong>
              <div style={{ color: "#aaa", marginTop: 4 }}>July 20, 2025 – September 22, 2025</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", lineHeight: 1.7, color: "#ccc" }}>
                <li>
                  ✓ Contributed to the AI/ML Platform Team on Nimoy's in-house
                  <em style={{ color: "#00b4ff" }}> Database Agentic</em> solution.
                </li>
                <li>
                  ✓ Demonstrated strong technical expertise, problem‑solving, ownership, and timely delivery of tasks.
                </li>
                <li>
                  ✓ Recognized for punctuality, quick learning, keen interest, solid grasping ability, and commendable communication skills.
                </li>
              </ul>
              <div style={{ fontSize: 13, color: "#8fbfe7" }}>
                Reference: Internship Experience Letter (Nimoy IT Solutions Pvt. Ltd.)
              </div>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: "14px 16px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <strong style={{ color: "#e5e5e5" }}>
                Infosys Springboard — Internship 6.0 (B1): Agri Yield Predictor
              </strong>
              <div style={{ color: "#aaa", marginTop: 4 }}>August 6, 2025 – October 10, 2025</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "10px 0", lineHeight: 1.7, color: "#ccc" }}>
                <li>
                  ✓ Developed an application to forecast crop yield using environmental and soil data.
                </li>
                <li>
                  ✓ Focused on data preparation, model building and evaluation, and application integration for practical analytics.
                </li>
              </ul>
              <div style={{ fontSize: 13, color: "#8fbfe7" }}>
                Reference: Certificate of Completion (Infosys Springboard)
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ AgriYield – Crop Yield Prediction & Analytics (ML + Flask)</li>
            <li>2️⃣ Game Club Platform – Interactive Games & Quiz Web App</li>
            <li>3️⃣ Habit Tracker – React-Based Habit Tracking & Analytics (IITM Project)</li>
            <li>4️⃣ Parking Management App – Full-Stack Parking System</li>
          </ul>
        </motion.div>


        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science and Engineering</strong> — UOH
              (University of Hyderabad), 2023–2028 <br />
              <span style={{ color: "#aaa" }}>GPA: 7.5</span>
            </li>
            <li>
              <strong>B.S in Data Science</strong> — IITM
              (Indian Institute of Technology Madras), 2023–2028 <br />
              <span style={{ color: "#aaa" }}>GPA: 7.0</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — Aditya Educational Institution</strong> (CBSE, 2023) <br />
              <span style={{ color: "#aaa" }}>Percentage: 78%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Sri Chaitanya Techno School</strong> (Andhra Pradesh Board, 2021)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 99%</span>
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Python",
              "C",
              "C++",
              "Java",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "OpenCV",
              "YOLO",
              "Streamlit",
              "React",
              "MySQL",
              "MongoDB",
              "Git",
              "NLP",
              "Explainable AI (XAI)",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/u/sai4806/" },
            { name: "💻 GitHub", link: "https://github.com/Saikumar4806" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/sai-kumar-dasam-a26735375/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Sai Kumar Dasam Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
