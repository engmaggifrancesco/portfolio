import { Images, Weight } from 'lucide-react';
import { Project } from '../types';

// Qui puoi modificare i progetti esistenti o aggiungerne di nuovi
// Per aggiungere un video, aggiungi la proprietà videoUrl con l'URL del tuo video
// Puoi anche aggiungere immagini locali mettendole nella cartella public e usando il percorso '/nome-immagine.jpg'

export const projects: Project[] = [
  {
    id: 1,
    title: "Wonderpapa 3D Commercial Campaign",
    category: "3D Commercial",
    description: "3D Advertising Campaign for Wonderpapa, an innovative company specializing in strollers designed with a strong focus on ergonomic structure and advanced mechanical engineering. This campaign highlights Wonderpapa's core values: maximum safety, protection, and comfort. The 3D visuals emphasize the product's solid frame and precision mechanics, aligning with the brand's commitment to cutting-edge design and user-centered innovation.",
    client: "Wonderpapa",
    year: 2025,
    imageUrl: "/data/videos/final7.mp4",
    videoUrl: "/data/videos/final7.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],
    overview: `<p>I independently developed the entire advertising campaign from scratch, starting with the concept and scene design to highlight the exceptional quality of the product. Each scene was carefully tailored to reflect the brand's core values and the lifestyle of its target audience, ensuring a customized and emotionally resonant visual experience.
    <br><br>The campaign includes over 30 seconds of detailed 3D animation, featuring a variety of scenes with dynamic zooms and close-ups—even down to fabric textures—to deliver a comprehensive and immersive 360-degree view of the product's design and craftsmanship.</p>
    `,
  },
  {
    id: 2,
    title: "Dolce Gabbana 3D Web Design",
    category: "3D Design",
    description: "This is a 3D website inspired by the Dolce & Gabbana Blue Ceramic Sofa. Users can interact with the website, rotate the model, and view the details of the chair.",
    client: "Personal Project for Dolce Gabbana",
    year: 2025,
    imageUrl: "/data/videos/video8.mp4",
    videoUrl: "/data/videos/video8.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],
    overview: `
    <p>This is a 3D website inspired by the Dolce & Gabbana Blue Ceramic Sofa. <br> Users can interact with the website, rotate the model, and view the details of the chair. <br> This represents a highly promising future shopping method, where users can directly inspect product details on a shopping website before making a purchase. <br> The 3D model can also be used in mall advertisements, large interactive projections, or display screens. </p> <p> If you're interested, you can check out the original 3D website: https://siyangjiangart.github.io/dolcegabbana3D/. Thank you!
    </p>
    `,
  },
  {
    id: 3,
    title: "B3 Commercial Work",
    category: "Motion Design",
    description: "Executed a commercial Motion Design project for B3, a U.S. company",
    client: "B3",
    year: 2025,
    imageUrl: "/data/videos/video16.mp4",
    videoUrl: "/data/videos/video16.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],

    additionalVideos: [
      {
        sectionTitle: "Project in depth",
        url: "/data/videos/video17.mp4",
        description: "The second part of the B3 Motion Design project continues to explore innovative motion graphics and brand visualization techniques."},
      {
        url: "/data/videos/video19.mp4",
        description: "Further exploration of motion design elements and brand identity through dynamic visual storytelling."
      },
      {
        url: "/data/videos/video20.mp4",
        description: "Advanced animation techniques and creative visual solutions for brand communication."},
      {
        url: "/data/videos/video21.mp4",
        description: "Integration of complex motion graphics with brand messaging and visual identity."},
      {
        url: "/data/videos/video22.mp4",
        description: "Experimental approaches to motion design and visual storytelling for brand enhancement."
      },
      {
        url: "/data/videos/video23.mp4",
        description: "Innovative use of typography and motion in brand communication."
      },
      {
        url: "/data/videos/video24.mp4",
        description: "Advanced visual effects and motion graphics for brand storytelling."
      },
      {
        url: "/data/videos/video25.mp4",
        description: "Culmination of the motion design project, bringing together all elements in a cohesive visual narrative."
      }
    ],
    
  },
  {
    id: 4,
    title: "North Pad VR Experience - Escape the Rising Tide",
    category: "VR Experience",
    description: "This immersive VR experience combines cinematic storytelling with interactive gameplay, placing users in a race against time as they navigate through rising sea levels. In this three-minute survival challenge, participants must adapt and find escape routes while witnessing the dramatic impact of climate change firsthand.",
    client: "Personal Project",
    year: 2025,
    imageUrl: "/data/videos/video18.mp4",
    videoUrl: "/data/videos/video18.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],
    overview: `
    <p> This project addresses one of the most pressing environmental challenges of our time. Current scientific data shows that global sea levels are rising at an unprecedented rate of 3.7 mm per year, primarily due to:
    <li>Thermal expansion of warming ocean waters</li>
    <li>Melting of glaciers and ice sheets</li>
    <li>Changes in land water storage</li>
By 2100, sea levels are projected to rise between 0.3 to 2.5 meters, threatening coastal communities worldwide. This VR experience aims to transform these abstract statistics into a tangible, personal experience that motivates action on climate change.`,
    additionalVideos: [
      {
        sectionTitle: "Key Features",
        type: "text",
        description: `
        <ol>
          <li>Dynamic Environment: Experience constantly shifting sea levels that create an ever-changing landscape, challenging players to think quickly and adapt their strategies.
          <li>Immersive Storytelling: Blend of game mechanics and cinematic elements that create a compelling narrative about climate change's immediate impact.
          <li>Environmental Awareness: Through direct experience, users gain a visceral understanding of rising sea levels and their devastating effects on our planet.
        `
      },
      {
        sectionTitle: "Interactive Elements",
        type: "image",
        url: "/data/images/image13.jpeg",
        secondImage: "/data/images/image14.jpeg",
        thirdImage: "/data/images/image15.jpeg",
        description: `
          <li>Real-time weather system simulation</li>
          <li>Physics-based water mechanics</li>
          <li>Multiple escape routes with varying difficulties</li>
          <li>Environmental storytelling through visual and audio cues</li>
        `
      },
    ],
  },
  {
    id: 5,
    title: "North Pad UI/UX Design",
    category: "UI/UX Design",
    description: "This is a presentation of a UI/UX design project. In this work, I focused on user experience and interface design, creating an intuitive and visually appealing interactive interface. Through in-depth user research and iterative design, I achieved a solution that is both aesthetically pleasing and functional.",
    client: "Personal Project",
    year: 2024,
    imageUrl: "/data/videos/video15.mp4",
    videoUrl: "/data/videos/video15.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],
    overview: `
    <p> <b>The product:</b> A mobile app which allows users to donate money for polar bears, obtaining in exchange prizes such as gadgets that allow the users to personalize a small digital bear

    <br><br><b>Project duration:</b> 27/10/2024 to 27/10/2025

    <br><br><b>The problem:</b> Donating for polar bears is not very intuitive given that there are no mobile apps specifically for this purpose but only websites which are not very user friendly on mobile even in their design. Furthermore, there is often a need to donate a minimum amount of money, and this prevents even those who would like to donate smaller amounts from donating

    <br><br><b>The goal:</b> NorthPad will let users donate, even small amounts of money, which will affect donations from all over the world for polar bears by creating an interaction with users and allowing personalization of a small digital white bear. We will measure effectiveness by comparing the number of users and the number of donations made</p>
    `,
    additionalVideos: [
      {
        sectionTitle: "User Research",
        url: "/data/images/image6.jpeg",
        type: "image",
        description: `
        <ol>
          <li>1) As a young professional, I want to make small but frequent donations to help polar bears, so that I can contribute to conservation efforts within my budget constraints</li>
          <li>2) As an animal lover, I want to see the direct impact of my donations, so that I know my contribution is making a real difference</li>
          <li>3) As a mobile user, I want an intuitive and engaging donation experience, so that I can easily support the cause while enjoying the process</li>
          <li>4) As a social media enthusiast, I want to share my digital bear and donation achievements, so that I can inspire others to join the cause</li>
          <li>5) As a busy person, I want a quick and simple donation process, so that I can contribute without spending too much time</li>
        </ol>
        `
      },
      {
        sectionTitle: "Problem Statement",
        type: "text",
        description: `
        <ol>
          <li>1)  Sarah is a young environmentally conscious professional who needs an engaging and flexible way to contribute to polar bear conservation because traditional donation platforms don't accommodate small, frequent donations or provide meaningful feedback on impact</li>
          <li>2)  Michael is a busy social media user who needs a quick and shareable way to support wildlife causes because he wants to make a difference while inspiring his network to join the movement</li>
          <li>3)  Emma is a student animal lover who needs an affordable and interactive donation experience because she wants to feel personally connected to the cause despite her limited budget</li>
        </ol>
        `
      },
      {
        sectionTitle: "",
        subtitle: "Solution Hypothesis",
        type: "text",
        description: `
        <ol>
          <li>1)  If we provide a mobile app with customizable digital bears and flexible donation options, then users will be more likely to make regular contributions and stay engaged with the cause
          <li>2)  If we implement social sharing features and visual progress tracking, then users will feel more connected to the impact of their donations and spread awareness
          <li>3)  If we create an intuitive, gamified donation experience, then users will find it easier and more enjoyable to support polar bear conservation</li>
        </ol>
        `
      },
      {
        sectionTitle: "Storyboard",
        url: "/data/images/image12.png",
        type: "image",
        description: `
        <p>The storyboard is a visual representation of the user journey, showing the sequence of screens and interactions that users will experience when using the NorthPad app. It helps us understand the flow of the app and identify potential pain points or areas for improvement.</p>
        `
      },
      {
        sectionTitle: "Sitemap",
        url: "/data/images/image9.png",
        type: "image",
        description: `
        <p>The sitemap illustrates the core functionalities and navigation structure of the NorthPad app, including:
        <li>User authentication and profile management</li>
        <li>Donation system and payment processing</li>
        <li>Digital bear customization features</li>
        <li>Social sharing and community engagement</li>
        <li>Progress tracking and achievement system</li>
        `
      },
      {
        sectionTitle: "Our Logo Design",
        url: "/data/images/image10.png",
        type: "image",
        description: `
        <p>Our logo design represents a powerful fusion of concepts that embodies our mission:<li>User authentication and profile management</li>
        <li>The polar bear silhouette merges with melting ice patterns, symbolizing the urgent impact of global warming on Arctic habitats
        <li>The typography integrates seamlessly with the visual elements, creating a cohesive design that represents both the problem and our commitment to solution</li>
        <li>The minimalist approach emphasizes the simplicity of our message: every small action counts in the fight against climate change and wildlife conservation</li>
        <li>The design elements flow together to create a sense of movement, representing the ongoing nature of our conservation efforts and the continuous support from our community</li>
        `
      },
      {
        sectionTitle: "Our Icon Design",
        url: "/data/images/image11.png",
        type: "image",
        description: `
        <p>Our icon design features a brand ambassador that embodies our mission while maintaining an approachable and engaging presence:<li>The polar bear silhouette merges with melting ice patterns, symbolizing the urgent impact of global warming on Arctic habitats
        <li>The cute polar bear mascot serves as a friendly face for our serious cause, making the donation experience more appealing and accessible to users of all ages
        <li>The playful design approach helps transform the act of donation into an engaging and rewarding experience, particularly attracting younger generations to participate in wildlife conservation
        <li>While maintaining its adorable appearance, the mascot subtly reminds users of the urgent environmental challenges facing polar bears, creating an emotional connection that encourages long-term engagement
        <li>The character's expressive design allows for various emotional states and interactions, making the app experience more dynamic and personally connecting with users</li>
        <li>The simplicity of the design ensures it works well across different platforms and sizes while maintaining its charm and recognition</li>
        `
      },
      {
        sectionTitle: "Mockups",
        type: "text",
        description: `
        <p>Our mockups demonstrate the key features and user interface of the NorthPad app:</p>
        `
      },
      {
        sectionTitle: "Goal Statement",
        type: "image",
        url: "/data/images/image8.png",
        secondImage: "/data/images/image7.png",
        description: `<p>Our mobile application will let users make micro-donations and personalize digital polar bears, which will affect both wildlife conservation efforts and global awareness by creating an engaging, gamified experience that connects users directly with the cause. We will measure effectiveness by tracking:
        <li>Number of active users and frequency of donations</li>
        <li>Total amount of donations and average donation size</li>
        <li>User engagement metrics with digital bear customization</li>
        <br>This is an ongoing project with partial feature demonstrations. Stay tuned for the official launch...
        `
      },
    ],
  },
  {
    id: 6,
    title: "YSL Rouge Velours Parfums",
    category: "Motion Design",
    description: "YSL Advertisement Production",
    client: "Personal Project for YSL",
    year: 2025,
    imageUrl: "/data/videos/video14.mp4",
    videoUrl: "/data/videos/video14.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],

    process: `
    <p>This video showcases the complete production pipeline of the YSL advertisement.</p>
    
    <ul>
      <li>1) 3D Modeling: Creating detailed product models in ZBrush</li>
      <li>2) Hair System Development: Implementing sophisticated hair dynamics in Blender</li>
      <li>3) Physics Simulation: Setting up realistic material behavior and movement</li>
      <li>4) Lighting Design: Creating professional studio-quality lighting setups</li>
      <li>5) Final Rendering: Achieving high-end commercial quality output</li>
    </ul>
    <p>Each step demonstrates the technical expertise required in luxury brand advertising, merging artistic vision with technical precision to create a compelling visual narrative.</p>
    `,
  },
  {
    id: 7,
    title: "Sign",
    category: "CG Short Film",
    description: "A 3D reinterpretation of Bentham's Panopticon: from a shadowy cell to a glowing screen, where Novalis's words flicker ephemeral, yet emotionally charged",
    client: "Personal Project",
    year: 2024,
    imageUrl: "/data/videos/video2.mp4",
    videoUrl: "/data/videos/video2.mp4",
    
    overview: `This CG short film offers a poetic 3D reinterpretation of Bentham's Panopticon, tracing a vertical journey through layers of surveillance, emotion, and perception. The camera moves from a cold, oppressive cell on the first floor to the symbolic heart of control on the second, culminating in a surreal and organic transformation on the third. Through shifting architecture, color, and texture, the film explores themes of visibility, power, transformation, and inner liberation. The integration of a Novalis poem adds a lyrical thread, connecting the emotional atmosphere of each level to a broader meditation on human experience.`,
    
    process: `The creative process began with researching Bentham's original Panopticon concept and its philosophical implications on surveillance and control. From there, each floor was imagined as a symbolic state of being—confinement, power, and transcendence. Inspiration was drawn from Romantic literature, contemporary digital aesthetics, and classical architecture. 3D modeling, texturing, and lighting were developed iteratively, emphasizing contrast between organic and mechanical elements. The piece relied heavily on moodboards, sound design sketches, and visual metaphors to maintain emotional and thematic cohesion throughout.`,
    
    challenges: `A primary challenge was conveying abstract emotional states through purely visual and spatial design. Avoiding literal representations, especially when working with dense philosophical ideas, required restraint and creative subtlety. Technically, achieving realistic yet stylized lighting effects—such as the moonlike dimness or the artificial sunlight—required complex shader and rendering solutions. Another difficulty was balancing symbolism with accessibility: ensuring the work could evoke meaning without relying on exposition or narration, allowing viewers to feel rather than analyze.`,
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],

    additionalVideos: [
      {
        url: "/data/videos/video3.mp4",
        description: "First floor: This level represents confinement and isolation. The camera moves through a cold, oppressive cell illuminated only by dim, bluish light filtering through a small window. The space is minimal and claustrophobic, with rough concrete walls and sparse furnishings."
      },
      {
        url: "/data/videos/video4.mp4",
        description: "Second floor: This level represents power and surveillance. The camera ascends to reveal the central observation tower—the heart of the Panopticon. The space is more open but clinical, dominated by screens and monitoring equipment. The lighting shifts to a stark, artificial brightness."
      },
      {
        url: "/data/videos/video5.mp4",
        description: "Third floor: This level represents transformation and liberation. The camera continues upward to an unexpected space where the rigid architecture begins to dissolve into organic, flowing forms. Natural light bathes the scene, and plant life emerges from the structure itself."
      },
      {
        url: "/data/videos/panopticon 4.mp4",
        description: "Transition sequence showing the movement between floors, emphasizing the vertical journey as a metaphor for shifting states of consciousness."
      },
      {
        url: "/data/videos/video9.mp4",
        description: "Close-up details of the architectural elements that define each level, highlighting the contrast between mechanical and organic forms."
      },
      {
        url: "/data/videos/video10.mp4",
        description: "Visualization of the Novalis poem as text that appears and dissolves within the environment, becoming part of the architecture itself."
      },
      {
        url: "/data/videos/video11.mp4",
        description: "Final sequence showing the complete transformation of the Panopticon structure, suggesting the possibility of transcending systems of control."
      },
      {
        url: "/data/videos/video12.mp4",
        description: "Behind-the-scenes footage showing the development of key visual elements and technical challenges overcome during production."
      }
    ],
    
    gallery: [
      {
        url: "/data/images/image4.png",
        description: "Floor plan and 3D model of the Panopticon"
      },
      {
        url: "/data/images/image5.png",
        description: "Floor plan and 3D model of the Panopticon"
      }
    ]
  },
  {
    id: 8,
    title: "Look At",
    category: "3D Animation",
    description: "Virtual eye, modeled and rendered, displayed on a screen",
    client: "Personal Project",
    year: 2023,
    imageUrl: "/data/videos/video1.mp4",
    videoUrl: "/data/videos/video1.mp4",
    
    technologies: [
      "Blender", 
      "Cinema 4D", 
      "Houdini", 
      "Octane Render", 
      "After Effects", 
      "Substance Designer"
    ],

    additionalVideos: [
      {
        url: "/data/videos/video13.mp4",
        sectionTitle: "Production Workflow",
        description: `This video demonstrates the complete Maya 3D production pipeline:

<ol>
  <li> 1) Modeling: Creating the base 3D mesh and detailed geometry</li>
  <li> 2) UV Unwrapping: Preparing the model's surface for texturing</li>
  <li> 3) Material Development: Applying and adjusting materials and textures</li>
  <li> 4) XGen Hair/Fur System: Implementing realistic hair and fur effects</li>
  <li> 5) Rigging: Setting up the skeletal structure for animation</li>
  <li> 6) Animation: Creating character movement and expressions</li>
  <li> 7) Weight Painting: Fine-tuning the skin binding for smooth deformation</li>
</ol>

Each step showcases the technical expertise required in professional 3D character creation, from initial concept to final animation.`
      }
    ]
  }
];


// Esempio di come aggiungere un nuovo progetto con tutti i campi personalizzati
// {
//   id: 6, // Assicurati che l'ID sia unico e incrementale
//   title: "Il Tuo Nuovo Progetto",
//   category: "La Tua Categoria",
//   description: "Breve descrizione che appare nella pagina dei progetti",
//   client: "Nome del Cliente (opzionale)",
//   year: 2025,
//   imageUrl: "/tua-immagine.jpg", // Immagine principale nella cartella public
//   videoUrl: "https://www.youtube.com/embed/tuo-video-id", // Video principale (opzionale)
//   
//   // Campi personalizzati per la pagina di dettaglio
//   overview: `
//     <p>Puoi inserire HTML per formattare il testo. Questo è il primo paragrafo della panoramica del progetto.</p>
//     <p>Questo è un secondo paragrafo con <strong>testo in grassetto</strong> e <em>testo in corsivo</em>.</p>
//     <p>Puoi anche aggiungere elenchi:</p>
//     <ul>
//       <li>Primo punto</li>
//       <li>Secondo punto</li>
//       <li>Terzo punto</li>
//     </ul>
//   `,
//   
//   process: `
//     <p>Descrivi qui il processo creativo e le fasi di sviluppo del progetto.</p>
//     <p>Puoi spiegare le metodologie utilizzate, le decisioni prese e l'evoluzione del progetto.</p>
//   `,
//   
//   challenges: `
//     <p>Descrivi le sfide affrontate durante lo sviluppo del progetto e come le hai superate.</p>
//   `,
//   
//   technologies: [
//     "Cinema 4D", "Blender", "Unreal Engine", "After Effects", "Photoshop"
//   ],
//   
//   gallery: [
//     "/gallery-image-1.jpg",
//     "/gallery-image-2.jpg",
//     "/gallery-image-3.jpg",
//     "/gallery-image-4.jpg"
//   ],
//   
//   additionalVideos: [
//     "https://www.youtube.com/embed/video-id-1",
//     "https://player.vimeo.com/video/video-id-2"
//   ],
//   
//   customSections: [
//     {
//       title: "Titolo Sezione Personalizzata 1",
//       content: `<p>Contenuto della prima sezione personalizzata. Puoi aggiungere quante sezioni vuoi.</p>`
//     },
//     {
//       title: "Titolo Sezione Personalizzata 2",
//       content: `<p>Contenuto della seconda sezione personalizzata.</p>`
//     }
//   ]
// }