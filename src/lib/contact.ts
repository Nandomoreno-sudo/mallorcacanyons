// Datos de contacto centralizados: un único sitio que editar si cambia el número, el email o el usuario de Instagram.
export const WHATSAPP_NUMBER = '34667551286';
export const INSTAGRAM_URL = 'https://www.instagram.com/mallorcacanyons/';
export const EMAIL_ADDRESS = 'info@mallorcacanyons.com';

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string): string {
  return `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}`;
}
