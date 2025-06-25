export interface FormField {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}

export interface TabData {
  id: string;
  label: string;
}

export interface FormConfig {
  prefix: string;
  fields: FormField[];
  messagePlaceholder: string;
}

export interface FormsConfig {
  [key: string]: FormConfig;
}

export const TABS: TabData[] = [
  { id: 'docente', label: 'Docente/Escuela' },
  { id: 'estudiante', label: 'Estudiante/Mentor' },
  { id: 'inversionista', label: 'Inversionista Social' }
];

export const FORM_CONFIG: FormsConfig = {
  docente: {
    prefix: 'docente',
    fields: [
      { label: 'Nombre completo', name: 'name', placeholder: 'Tu nombre' },
      { label: 'Correo electrónico', name: 'email', type: 'email', placeholder: 'tu@email.com' },
      { label: 'Teléfono/WhatsApp', name: 'phone', placeholder: '+502 1234 5678' },
      { label: 'Institución educativa', name: 'school', placeholder: 'Nombre de tu escuela' }
    ],
    messagePlaceholder: 'Cuéntanos sobre tu institución, número de estudiantes...'
  },
  estudiante: {
    prefix: 'est',
    fields: [
      { label: 'Nombre completo', name: 'name', placeholder: 'Tu nombre' },
      { label: 'Correo electrónico', name: 'email', type: 'email', placeholder: 'tu@email.com' },
      { label: 'Teléfono/WhatsApp', name: 'phone', placeholder: '+502 1234 5678' },
      { label: 'Institución educativa', name: 'school', placeholder: 'Nombre de tu colegio' }
    ],
    messagePlaceholder: 'Cuéntanos sobre ti, tu rol como mentor...'
  },
  inversionista: {
    prefix: 'inv',
    fields: [
      { label: 'Nombre completo', name: 'name', placeholder: 'Tu nombre' },
      { label: 'Correo electrónico', name: 'email', type: 'email', placeholder: 'tu@email.com' },
      { label: 'Teléfono/WhatsApp', name: 'phone', placeholder: '+502 1234 5678' },
      { label: 'Organización', name: 'org', placeholder: 'Nombre de tu fundación' }
    ],
    messagePlaceholder: 'Indica el tipo de apoyo que te interesa ofrecer...'
  }
};