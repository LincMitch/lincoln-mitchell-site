import { NextResponse } from "next/server"
import PDFDocument from "pdfkit"

export async function GET() {
  // Create a document
  const doc = new PDFDocument({ margin: 50 })

  // Set up the PDF content
  const buffers: Buffer[] = []
  doc.on("data", buffers.push.bind(buffers))

  // Add content to the PDF
  doc.fontSize(24).text("Lincoln Mitchell", { align: "center" })
  doc.fontSize(14).text("Innovation & Design Systems Leader", { align: "center" })
  doc.moveDown()
  doc
    .fontSize(10)
    .text(
      "Brooklyn, NSW 2083, Australia | 0414 286 433 | contact@lincolnmitchell.com | linkedin.com/in/mitchelllincoln",
      { align: "center" },
    )

  doc.moveDown(2)
  doc.fontSize(16).text("PROFESSIONAL SUMMARY")
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "Visionary Innovation and Design Systems Leader with over 20 years of experience bridging design and development to create game-changing prototypes and products. Specialized in enabling creative individuals to prototype Northstar concepts that drive executive decision-making and product strategy. Expert in implementing code-based Design Systems that accelerate delivery by 50-85% while maintaining design integrity.",
      { align: "justify" },
    )

  doc.moveDown(1.5)
  doc.fontSize(16).text("CORE COMPETENCIES")
  doc.moveDown(0.5)
  const competencies = [
    "Northstar Concept Development & Prototyping",
    "Innovation Leadership & Strategic Vision",
    "Design Systems Architecture & Implementation",
    "Cross-functional Team Leadership",
    "Executive Communication & Influence",
    "Code-based Design Tools (Plasmic, Framer, UX Pin Merge)",
    "React & Next.js Development",
    "Design Tokens & Multi-brand Theming",
  ]

  let x = 50
  let y = doc.y
  const columnWidth = 250

  competencies.forEach((competency, index) => {
    if (index === 4) {
      x = 300
      y = doc.y - 4 * 15
    }

    doc.fontSize(11).text(`• ${competency}`, x, index < 4 ? y + index * 15 : y + (index - 4) * 15)
  })

  doc.moveDown(5)
  doc.fontSize(16).text("PROFESSIONAL EXPERIENCE")
  doc.moveDown(0.5)

  // PenCS
  doc.fontSize(14).text("PenCS")
  doc.fontSize(11).text("Design Systems Lead, Design Lead & Innovation Lead (July 2023 - Aug 2024)")
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "Led innovation initiatives and design system implementation for a healthcare technology company, focusing on creating Northstar prototypes that communicated future vision to executives and stakeholders.",
      { align: "justify" },
    )
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "• Innovation Leadership: Created Northstar prototypes in Plasmic that visualized future product direction, gaining executive buy-in for strategic initiatives.",
    )
  doc
    .fontSize(11)
    .text(
      "• Design System Implementation: Developed a world-class Design System based on Chakra UI and Token Studio within Plasmic, reducing development time by 60%.",
    )
  doc
    .fontSize(11)
    .text(
      "• Cross-functional Collaboration: Worked directly with executive leadership to translate strategic vision into tangible prototypes and implementation plans.",
    )

  doc.moveDown(1)

  // Dentsu
  doc.fontSize(14).text("Dentsu (Merkle)")
  doc.fontSize(11).text("Design Associate Director (May 2022 - June 2023)")
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "Led a global Design System initiative connecting Australian and German offices, implementing innovative approaches to multi-brand and multi-themed websites.",
      { align: "justify" },
    )
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "• Global Innovation: Pioneered the use of Design Tokens for the authoring experience in AEM, creating a seamless workflow between design and content management.",
    )
  doc
    .fontSize(11)
    .text(
      "• Multi-brand Strategy: Developed a token-based theming system that supported multiple brands while maintaining design consistency and development efficiency.",
    )
  doc
    .fontSize(11)
    .text(
      "• Mentorship & Leadership: Guided UI designers in the use of Design Tokens for complex multi-brand websites, fostering a culture of innovation and technical excellence.",
    )

  doc.moveDown(1)

  // Breville
  doc.fontSize(14).text("Breville")
  doc.fontSize(11).text("Design Systems Lead / Senior UX Design (May 2021 - April 2022)")
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "Led the initiative to create a code-based design system that addressed quality control, speed of execution, and rapid innovation for a global appliance manufacturer.",
      { align: "justify" },
    )
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "• Innovative Approach: Placed production-ready React components in Framer rather than StoryBook, creating a seamless bridge between design and development.",
    )
  doc
    .fontSize(11)
    .text(
      "• Technical Leadership: Implemented ESModules with AWS pipeline, ensuring high-quality, production-ready components that could be used directly in prototypes.",
    )
  doc
    .fontSize(11)
    .text(
      "• Organizational Change: Inspired all developers to adopt Framer as the design system platform, creating a unified source of truth for design and development.",
    )

  doc.moveDown(1)

  // Telstra Health
  doc.fontSize(14).text("Telstra Health")
  doc.fontSize(11).text("Senior Product Designer / Design Systems / Prototyper (Oct 2020 - Jan 2021)")
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text("Part of a new team focused on increasing innovation and big-picture thinking for healthcare applications.", {
      align: "justify",
    })
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "• Innovation Leadership: Led the initiative to place the code base in Framer X, enabling realistic prototyping of Northstar concepts.",
    )
  doc
    .fontSize(11)
    .text(
      "• Process Innovation: Contributed to a new Design Process that incorporated Northstar prototyping as a key step in product development.",
    )
  doc
    .fontSize(11)
    .text(
      "• Strategic Collaboration: Worked with stakeholders on a Medication Management module, driving changes at the application and platform level.",
    )

  doc.moveDown(1)

  // Medical Director
  doc.fontSize(14).text("Medical Director (now Telstra Health)")
  doc.fontSize(11).text("Chief Design Officer (CDO) (Jun 2014 – Nov 2016)")
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "Promoted to Chief Design Officer to create a design-led culture and provide vision for bringing desirability to a fear-based health industry.",
      { align: "justify" },
    )
  doc.moveDown(0.5)
  doc
    .fontSize(11)
    .text(
      "• Strategic Vision: Developed a visionary approach to healthcare technology that was presented to Apple for their patient Health platform.",
    )
  doc
    .fontSize(11)
    .text(
      '• Executive Leadership: Received feedback that "This is the type of thought leadership we need... the types of Apple and Google think this way."',
    )
  doc
    .fontSize(11)
    .text(
      "• Organizational Transformation: Shifted the company from a delivery/developer culture to a design-led approach focused on innovation and user experience.",
    )

  doc.moveDown(1.5)
  doc.fontSize(16).text("SKILLS & TECHNOLOGIES")
  doc.moveDown(0.5)

  // Skills in two columns
  const skills = {
    "Leadership & Strategy": [
      "Innovation Leadership",
      "Design Systems Strategy",
      "Executive Communication",
      "Cross-functional Team Leadership",
      "Northstar Vision Development",
      "Design Thinking Facilitation",
    ],
    "Design & Prototyping": [
      "High-fidelity Prototyping",
      "UX/UI Design",
      "Design Systems Architecture",
      "User Research Integration",
      "Design Tokens & Theming",
      "Multi-brand Design Systems",
    ],
    "Technical Skills": [
      "React & Next.js",
      "Chakra UI & Component Libraries",
      "Design Tokens & Style Dictionary",
      "Plasmic.app",
      "Framer & UX Pin Merge",
      "Figma & Design Tool Integration",
    ],
    Methodologies: [
      "Design Thinking",
      "Lean UX",
      "Agile/Scrum",
      "Design Sprints",
      "Jobs-to-be-Done Framework",
      "User-Centered Design",
    ],
  }

  x = 50
  y = doc.y

  let categoryIndex = 0
  for (const [category, skillList] of Object.entries(skills)) {
    const xPos = categoryIndex < 2 ? 50 : 300
    const yPos = categoryIndex < 2 ? y + categoryIndex * 120 : y + (categoryIndex - 2) * 120

    doc.fontSize(12).text(category, xPos, yPos)
    doc.moveDown(0.2)

    skillList.forEach((skill, index) => {
      doc.fontSize(10).text(`• ${skill}`, xPos, yPos + 15 + index * 12)
    })

    categoryIndex++
  }

  doc.moveDown(10)
  doc.fontSize(16).text("EDUCATION & PROFESSIONAL DEVELOPMENT")
  doc.moveDown(0.5)

  const education = [
    { title: "Token Studio Online Course", year: "2023" },
    { title: "XD Conf", year: "July 2020" },
    { title: "React Training", year: "Learn React Design & Design Code" },
    { title: 'Jeff Patton "Passionate Product Owner Workshop"', year: "Australia" },
    { title: "Interaction Design Practicum & Communicating Design, Cooper U", year: "USA" },
    { title: "Associate's Degree in Multi-Media Design", year: "CMC TAFE - Australia" },
  ]

  education.forEach((edu) => {
    doc.fontSize(12).text(edu.title)
    doc.fontSize(10).text(edu.year)
    doc.moveDown(0.5)
  })

  // Finalize the PDF
  doc.end()

  // Combine the buffers
  const pdfBuffer = Buffer.concat(buffers)

  // Return the PDF as a response
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=lincoln-mitchell-resume.pdf",
    },
  })
}

