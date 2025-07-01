// Simple data structures for demo purposes
// Database integrations have been removed

export interface Project {
  id: string
  title: string
  description?: string
  customUrl: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  createdAt: Date
}

// In-memory storage for demo purposes
const projects: Map<string, Project> = new Map()
const contactMessages: Map<string, ContactMessage> = new Map()

// Project operations
export const projectDb = {
  create: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Project => {
    const id = generateId()
    const newProject: Project = {
      ...project,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    projects.set(id, newProject)
    return newProject
  },

  findById: (id: string): Project | undefined => {
    return projects.get(id)
  },

  findByCustomUrl: (customUrl: string): Project | undefined => {
    return Array.from(projects.values()).find(project => project.customUrl === customUrl)
  },

  getAll: (): Project[] => {
    return Array.from(projects.values())
  }
}

// Contact message operations
export const contactDb = {
  create: (message: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage => {
    const id = generateId()
    const newMessage: ContactMessage = {
      ...message,
      id,
      createdAt: new Date(),
    }
    contactMessages.set(id, newMessage)
    return newMessage
  },

  getAll: (): ContactMessage[] => {
    return Array.from(contactMessages.values())
  }
}

// Utility function to generate IDs
function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Generate custom URL for projects
export function generateCustomUrl(): string {
  return Math.random().toString().substring(2, 9) // 7-digit number
}