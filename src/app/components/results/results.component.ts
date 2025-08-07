import { Component } from '@angular/core';
import { PlatosSideBarComponent } from '../platos-side-bar/platos-side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [CommonModule, PlatosSideBarComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  array = Array(10);

  platos = [
    {
      nombre: 'Paella Valenciana',
      descripcion: 'Arroz tradicional con mariscos, pollo y verduras.',
      restaurante: 'Casa Valencia',
      ubicacion: 'Valencia, España',
      lat: 39.4699,
      lng: -0.3763,
      imagen:
        'https://olorahierbabuena.com/wp-content/uploads/2019/10/paella-caracoles-m.jpg',
    },
    {
      nombre: 'Arepas Rellenas',
      descripcion: 'Arepas de maíz rellenas de carne mechada y queso.',
      restaurante: 'Sabor Venezolano',
      ubicacion: 'Madrid, España',
      lat: 40.4168,
      lng: -3.7038,
      imagen:
        'https://imag.bonviveur.com/arepas-venezolanas-caseras-rellenas.webp',
    },
    {
      nombre: 'Tacos al Pastor',
      descripcion: 'Tacos de cerdo marinado con piña, cebolla y cilantro.',
      restaurante: 'Taquería El Güero',
      ubicacion: 'Ciudad de México, México',
      lat: 19.4326,
      lng: -99.1332,
      imagen:
        'https://lomaculinaria.com/wp-content/uploads/2023/08/Tacos-al-Pastor-Culinary-Hill-1200x800-1.webp',
    },
    {
      nombre: 'Ramen Tonkotsu',
      descripcion: 'Caldo espeso de cerdo con fideos, huevo y alga nori.',
      restaurante: 'Ichiraku Ramen',
      ubicacion: 'Tokio, Japón',
      lat: 35.6895,
      lng: 139.6917,
      imagen:
        'https://www.seriouseats.com/thmb/IBikLAGkkP2QVaF3vLIk_LeNqHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe-Diana-Chistruga-hero-6d318fadcca64cc9ac3e1c40fc7682fb.JPG',
    },
    {
      nombre: 'Pizza Napolitana',
      descripcion: 'Pizza clásica con tomate, mozzarella y albahaca.',
      restaurante: 'Trattoria Napoli',
      ubicacion: 'Nápoles, Italia',
      lat: 40.8518,
      lng: 14.2681,
      imagen: 'https://imag.bonviveur.com/pizza-napolitana.jpg',
    },
    {
      nombre: 'Ceviche de Pescado',
      descripcion: 'Pescado marinado en limón con cebolla y cilantro.',
      restaurante: 'El Mar Peruano',
      ubicacion: 'Lima, Perú',
      lat: -12.0464,
      lng: -77.0428,
      imagen:
        'https://www.laylita.com/recetas/wp-content/uploads/Ceviche-de-pescado-receta.jpg',
    },
    {
      nombre: 'Sushi Variado',
      descripcion: 'Selección de nigiris, makis y sashimi frescos.',
      restaurante: 'Sakura Sushi',
      ubicacion: 'Osaka, Japón',
      lat: 34.6937,
      lng: 135.5023,
      imagen:
        'https://diaridigital.urv.cat/wp-content/uploads/2021/06/sushi-354628_1920-1024x683.jpg',
    },
    {
      nombre: 'Moussaka',
      descripcion: 'Cazuela griega con berenjena, carne y bechamel.',
      restaurante: 'Taverna Athena',
      ubicacion: 'Atenas, Grecia',
      lat: 37.9838,
      lng: 23.7275,
      imagen:
        'https://www.mygreekdish.com/wp-content/uploads/2013/05/Moussaka-recipe-Traditional-Greek-Moussaka-with-Eggplants.jpg',
    },
    {
      nombre: 'Falafel con Hummus',
      descripcion: 'Croquetas de garbanzo acompañadas con hummus casero.',
      restaurante: 'Sabores del Medio Oriente',
      ubicacion: 'Jerusalén, Israel',
      lat: 31.7683,
      lng: 35.2137,
      imagen:
        'https://images.aws.nestle.recipes/original/2024_10_28T11_39_05_badun_images.badun.es_0a602989ffe1_falafel_con_hummus_de_garbanzos_y_crudites_de_verduras.jpg',
    },
    {
      nombre: 'Croissant de Jamón y Queso',
      descripcion:
        'Croissant recién horneado relleno de jamón serrano y queso manchego.',
      restaurante: 'Café París',
      ubicacion: 'París, Francia',
      lat: 48.8566,
      lng: 2.3522,
      imagen:
        'https://s1.elespanol.com/2015/03/11/cocinillas/cocinillas_17258321_115820176_1706x1280.jpg',
    },
  ];
}
