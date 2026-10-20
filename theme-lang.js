/* =========================================================
   LA MIMBRE RESTAURANTE - MODO OSCURO Y MULTI-IDIOMA
   Archivo: theme-lang.js
   ========================================================= */

const translations = {
    es: {
        // NAVEGACIÓN
        "nav.home": "INICIO",
        "nav.menu": "MENÚ",
        "nav.about": "NOSOTROS",
        "nav.reservations": "RESERVA",
        "nav.contact": "CONTACTO",

        // INICIO
        "home.hero_btn": "RESERVA TU MESA",
        "home.dishes_title": "NUESTROS PLATOS",
        "home.dishes_desc": "Nuestros platos están elaborados siguiendo las recetas familiares y adaptándolas a la actualidad culinaria. Nuestros productos son de primera calidad y elaborados al día, todo nuestro pescado es de los mejores proveedores y nuestra carne Halal de primera calidad. Tenemos la enorme suerte en Granada de tener una mezcla de culturas, y aún más en la entrada de un monumento tan importante y visitado internacionalmente como es la Alhambra, que no hace otra cosa más que enriquecer nuestros platos y nuestra manera de hacer las cosas.",
        "home.env_title": "NUESTRO ENTORNO",
        "home.env_desc": "Como se puede ver tenemos el enorme privilegio de estar situados en uno de los lugares más impresionantes y bonitos de la ciudad, la Alhambra. El restaurante La Mimbre se sitúa justo en la entrada del mirador que sube desde Dalila, da parada de taxis y a unos escasos metros de las taquillas de la Alhambra, aunque la parte que a nosotros siempre nos ha gustado más, es que desde nuestro jardín-comedor puedes estar viendo la torre y el arco del Agua, parte del monumento y a su misma vez formar parte de los frondosos bosques que rodean el complejo. Es el oasis perfecto donde resguardarse antes o después de la visita.",
        "home.team_title": "NUESTRO EQUIPO",
        "home.team_p1": "A lo largo de los años han trabajado en el Restaurante La Mimbre mucha gente; familiares, amigos y personas que han pasado a formar parte de la familia del restaurante.",
        "home.team_p2": "Actualmente la 6ª generación del restaurante empieza a tomar las riendas del negocio familiar acompañado de un maravilloso equipo sin el que no se podría continuar con la labor que llevamos desempeñando casi 150 años.",
        "home.quote_text": "«Hoy he subido a la Mimbre, por la cuesta del Rey “Chico” mi mente se abre al recuerdo, por los espacios perdidos. ¡Oh, adarves Alhivatas!, del ciprés y el arrayán, del jazmín y del geranio, del castaño y del nogal. Ya, por los Siete Suelos, junto a los Puentes del Agua, debajo de unas mimbres masus y duendes te embriagan. Recordando aquel Quiosco, de tonos azul y plata que fue refugio de artistas siendo orgullo de Granada. Hoy, en mi paseo del viento, el recuerdo ensalza el alma. Aquí con mi amigo Félix, y la sonrisa en la cara, nos tomamos unas copas en la montaña más clara. Que no se puede aguantar, un rincón con más solera que el Quiosco de la Mimbre del de la Alhambra canela. Y pegaito al Generalife, con olor a hierbabuena, parece que suenan guitarras del Sacromonte y sus cuevas».",
        "home.quote_dedication": "A mi amigo Félix afectuosamente",
        "home.quote_author": "Atalfo Barroso Jiménez, Granada 2003",
        "home.history_banner": "DESDE 1890 EN LA ALHAMBRA COMPARTIENDO NUESTRA TRADICIÓN FAMILIAR EN LA MESA",

        // CARTA DE MENÚ
        "menu.title": "MENÚ",
        "menu.starters": "Entrantes",
        "menu.mains": "Principal",
        "menu.desserts": "Postres",
        "menu.drinks": "Bebidas",
        "menu.specialty": "Especialidad de la Casa",
        "menu.dish1": "Sopa de Picadillo",
        "menu.dish2": "Gazpacho con picadillo de hortalizas",
        "menu.dish3_title": "Sopa Andalusí",
        "menu.dish4": "Jamón Serrano de Trevélez Alpujarras Cortado a Cuchillo (100 gr.)",
        "menu.dish5": "Queso Curado Boffard reserva etiqueta roja (125 gr.)",
        "menu.dish6": "Jamón Serrano con Melón",
        "menu.dish7": "Entrecot de ternera a la plancha acompañado de patatas fritas",
        "menu.dish8": "Puntas de solomillo de cerdo a la Miel de Romero",
        "menu.dish9": "Pechugas de pollo a la plancha acompañado de Arroz Nazarí",
        "menu.dish10": "Chuletillas de cordero lechal acompañado de cous-cous con cebolla caramelizada",
        "menu.dish11": "Calamaritos fritos",
        "menu.dish12": "Salmón a la plancha",
        "menu.dish13": "Bacalao frito con tomate",
        "menu.dish14": "Choto -cabrito- al Ajillo en salsa",
        "menu.dish15": "Piononos “Casa Ysla” con helado de Leche Merengada",
        "menu.dish16": "Tarta de Chocolate",
        "menu.dish17": "Tarta de queso con mermelada de frutos rojos",
        "menu.dish18_title": "Sorbete de limón al cava",
        "menu.dish19": "Vino Tinto Rioja Crianza (Copa / Botella)",
        "menu.dish20": "Cerveza Alhambra Reserva 1925",
        "menu.dish21": "Agua Mineral con o sin gas (50 cl)",
        "menu.dish22": "Refrescos y Zumos variados",

        // NOSOTROS
        "about.tagline": "Desde 1890 en la Alhambra dando refrigerios a los caminantes",
        "about.intro_p1": "La Mimbre se redefine como un refugio gastronómico donde la herencia artesanal de Granada y la sofisticación orgánica convergen en un entorno histórico inigualable.",
        "about.intro_p2": "Situado bajo la sombra del Generalife, el restaurante ofrece una experiencia sensorial que celebra la calma y el respeto por el producto local. La nueva propuesta no solo se vive a través del paladar, sino a través de una atmósfera de 'lujo relajado' que invita al comensal a desconectar en un espacio donde los materiales naturales, la luz de la Alhambra y la tradición artesana se entrelazan para crear momentos inolvidables en el corazón del patrimonio granadino.",
        "about.heading_history": "¿Quieres probar una parte de la historia de granada?",
        "about.history_intro": "En el año 1890 nacía La Mimbre, negocio que después de cuatro generaciones continúa vivo, en la actualidad es el más antiguo de Granada con 130 años de historia.",
        "about.period1_title": "PERÍODO 1890-1965",
        "about.period1_p1": "La Familia Ballesteros montó un pequeño quiosco de madera sin más pretensiones que saciar la sed a los viajeros y terminó siendo punto de encuentro de artistas y bohemios que trasnochaban al frescor del Bosque Alhambreño.",
        "about.period1_p2": "La familia nació y vivió en las Huertas del Generalife 'Fuente Peña', en aquel entonces a finales del siglo XIX, los propietarios eran los 'Marqueses de Campotejar'... gracias a las gestiones de un caballero que fue D. Enrique Gómez Colón, propietario de Villa Paulina concedieron levantar un quiosco en su propiedad.",
        "about.period1_p3": "La Mimbre, era un ventorrillo de madera en el camino del cementerio, sin más deseo que atender a los viandantes, al poco tiempo, los asistentes a los entierros realizaban una parada al regreso, en la cual se detenían para tomar una copa y una copla ya lo decía:",
        "about.period1_quote": "\"El que va a un entierro y no bebe sino el suyo viene de camino\".",

        // RESERVAS
        "booking.title": "RESERVAS",
        "booking.date": "Fechas:",
        "booking.time": "Horario:",
        "booking.select_time": "Selecciona una hora",
        "booking.guests": "Comensales:",
        "booking.guests_ph": "Número de comensales",
        "booking.phone": "Teléfono:",
        "booking.phone_ph": "Tu número de teléfono",
        "booking.email": "Correo electrónico:",
        "booking.notes": "Observaciones:",
        "booking.privacy_text": "La Mimbre Restaurante S.L. Finalidad: Gestionar su reserva de mesa, enviarle la confirmación y avisarle de cualquier incidencia. Legitimación: Ejecución del servicio de reserva y consentimiento del usuario. Destinatarios: No se cederán datos a terceros, salvo obligación legal o proveedores técnicos necesarios para el funcionamiento de la web. Derechos: Puedes acceder, rectificar, limitar y suprimir tus datos enviando un email a info@lamimbrerestaurante.es.",
        "booking.submit_btn": "Solicitar reserva",
        "booking.success_main": "¡Genial! Ya hemos separado tu cita a La Mimbre Restaurante.",
        "booking.success_sub": "Hemos enviado el voucher y comprobante de validación a tu correo electrónico:",

        // CONTACTO
        "contact.title": "Contacto",
        "contact.address_label": "Dirección:",
        "contact.phone_label": "Teléfono:",
        "contact.map_title": "MAPA",
        "contact.open_maps": "📍 Abrir ubicación en Google Maps",
        "contact.how_to_get_title": "Cómo llegar",
        "contact.how_to_get_intro": "Si ya estás en el recinto de la Alhambra, el Restaurante está situado justo detrás de las taquillas de entrada al complejo monumental, también conocida como entrada del Generalife. Si estás en la ciudad pero quieres ir al Restaurante La Mimbre, tienes que saber que está ubicado en plenos Bosques de la Alhambra. Para llegar te recomendamos algunas maneras:",
        "contact.route_walk_title": "Andando (Rutas a pie)",
        "contact.route_walk_p1": "Es la mejor opción para disfrutar del entorno.",
        "contact.route_walk_sub1": "Desde Plaza Nueva (centro):",
        "contact.route_walk_li1": "Sube por la Cuesta de Gomérez.",
        "contact.route_walk_li2": "Continúa subiendo por la carretera Gomérez pasando junto a la Puerta de Bibarrambla.",
        "contact.route_walk_li3": "Al llegar al bosque de la Alhambra, continúa recto hasta el final del paseo.",
        "contact.route_walk_li4": "El restaurante lo encontrarás a la izquierda del camino.",
        "contact.route_walk_sub2": "Desde el Realejo:",
        "contact.route_walk_li5": "Sube por el Paseo de las Palmas o la Cuesta del Caldero para conectar con el Paseo del Generalife.",
        "contact.route_walk_li6": "El restaurante lo encontrarás a la izquierda del camino.",
        "contact.route_bus_title": "Autobús Urbano",
        "contact.route_bus_li1": "Las líneas C30 y C32 de Transportes Rober te dejarán muy cerca.",
        "contact.route_bus_li2": "Sube en Plaza Nueva y bájate en la parada «Generalife».",
        "contact.route_bus_li3": "Encontrarás el Restaurante justo en la parada del autobús.",
        "contact.route_car_title": "Coche / Taxi",
        "contact.route_car_p1": "Si prefieres no caminar, toma la Ronda Sur (A-395) y sigue las indicaciones hacia el Párking de la Alhambra (Parking 1. Parking Privado).",
        "contact.route_car_p2": "Desde el aparcamiento, camina en dirección a la entrada del Generalife (menos de 5 minutos).",
        "contact.route_train_title": "Tren Turístico (Granada City Tour)",
        "contact.route_train_p1": "Puedes utilizar el Tren Turístico que recorre la ciudad y cuenta con parada en el área de la Alhambra, ideal si estás haciendo un recorrido panorámico previo.",
        "contact.route_train_p2": "Encontrarás el Restaurante en la parada «Generalife».",
        "contact.call_btn": "📞 Llamar al restaurante",
        "contact.wsp_btn": "💬 Contactar por WhatsApp",

        // FOOTER
        "footer.tagline": "Desde 1890 en la Alhambra compartiendo nuestra tradición familiar en la mesa",
        "footer.contact_title": "CONTÁCTANOS:",
        "footer.phone": "Teléfono:",
        "footer.address": "Dirección:",
        "footer.rights": "Todos los derechos reservados."
    },
    en: {
        // NAVIGATION
        "nav.home": "HOME",
        "nav.menu": "MENU",
        "nav.about": "ABOUT US",
        "nav.reservations": "RESERVATIONS",
        "nav.contact": "CONTACT",

        // HOME
        "home.hero_btn": "BOOK A TABLE",
        "home.dishes_title": "OUR DISHES",
        "home.dishes_desc": "Our dishes are prepared following traditional family recipes while adapting them to modern culinary standards. We use top-quality products prepared fresh daily, featuring fresh fish from premier suppliers and high-grade Halal meats. In Granada, we are fortunate to embrace a rich mix of cultures—especially located right at the entrance of a renowned international landmark like the Alhambra—which enriches our culinary creations and our approach to hospitality.",
        "home.env_title": "OUR ENVIRONMENT",
        "home.env_desc": "We enjoy the privilege of being located in one of Granada's most breathtaking settings: the Alhambra. La Mimbre Restaurant is situated right by the viewpoint path coming from Dalila, next to the taxi stand and just steps away from the Alhambra ticket offices. What we cherish most is that from our garden dining space, guests can view the landmark's Water Tower and Arch while being surrounded by lush forests. It is the perfect oasis to unwind before or after your visit.",
        "home.team_title": "OUR TEAM",
        "home.team_p1": "Over the years, many people—family members, close friends, and dedicated colleagues—have contributed to La Mimbre and become part of our extended family.",
        "home.team_p2": "Today, the 6th generation leads our family business alongside a wonderful team, continuing a tradition of hospitality that spans nearly 150 years.",
        "home.quote_text": "«Today I walked up to La Mimbre via Cuesta del Rey Chico, my mind wandering through cherished memories. Among cypress, myrtle, jasmine, and walnut trees near the Alhambra walls, under the shade of osiers, the charm of this place captivates the soul. Remembering the iconic blue and silver kiosk that welcomed artists as a pride of Granada, we raise a glass in the mountain air—a timeless corner right beside the Generalife where the spirit of Sacromonte lingers in the breeze.»",
        "home.quote_dedication": "Affectionately to my friend Félix",
        "home.quote_author": "Atalfo Barroso Jiménez, Granada 2003",
        "home.history_banner": "SINCE 1890 AT THE ALHAMBRA SHARING OUR FAMILY TRADITION AT THE TABLE",

        // MENU CARD
        "menu.title": "MENU",
        "menu.starters": "Starters",
        "menu.mains": "Main Courses",
        "menu.desserts": "Desserts",
        "menu.drinks": "Drinks",
        "menu.specialty": "House Specialty",
        "menu.dish1": "Traditional 'Picadillo' Noodle & Meat Soup",
        "menu.dish2": "Chilled Andalusian Gazpacho with Minced Vegetables",
        "menu.dish3_title": "Andalusian Soup",
        "menu.dish4": "Hand-Cut Trevélez Alpujarras Cured Serrano Ham (100g)",
        "menu.dish5": "Aged Boffard Red Label Cured Cheese (125g)",
        "menu.dish6": "Cured Serrano Ham with Fresh Melon",
        "menu.dish7": "Grilled Beef Sirloin Steak served with French Fries",
        "menu.dish8": "Pork Tenderloin Tips in Rosemary Honey Sauce",
        "menu.dish9": "Grilled Chicken Breast served with Nasrid Rice",
        "menu.dish10": "Suckling Lamb Chops served with Couscous and Caramelized Onion",
        "menu.dish11": "Crispy Fried Baby Squid",
        "menu.dish12": "Grilled Salmon Fillet",
        "menu.dish13": "Pan-Fried Cod with Rich Tomato Sauce",
        "menu.dish14": "Sautéed Milk-Fed Kid Goat in Garlic Sauce ('Choto al Ajillo')",
        "menu.dish15": "Traditional 'Casa Ysla' Piononos with Meringue Milk Ice Cream",
        "menu.dish16": "Decadent Chocolate Cake",
        "menu.dish17": "Classic Cheesecake with Red Berry Jam",
        "menu.dish18_title": "Lemon Sorbet with Cava",
        "menu.dish19": "Rioja Crianza Red Wine (Glass / Bottle)",
        "menu.dish20": "Alhambra Reserva 1925 Premium Beer",
        "menu.dish21": "Still or Sparkling Mineral Water (50 cl)",
        "menu.dish22": "Assorted Soft Drinks & Fruit Juices",

        // ABOUT US
        "about.tagline": "Since 1890 in the Alhambra offering refreshments to travelers",
        "about.intro_p1": "La Mimbre redefines itself as a gastronomic haven where Granada's artisanal heritage and organic sophistication converge in an unmatched historical setting.",
        "about.intro_p2": "Nestled under the shade of the Generalife, the restaurant offers a sensory experience celebrating tranquility and respect for local produce. The new concept is experienced not only through taste, but also through a 'relaxed luxury' atmosphere inviting diners to disconnect where natural materials, Alhambra's light, and artisan tradition weave together to create unforgettable moments in the heart of Granada's heritage.",
        "about.heading_history": "Would you like to taste a piece of Granada's history?",
        "about.history_intro": "In 1890 La Mimbre was born, a business that after four generations remains alive today, making it Granada's oldest restaurant with over 130 years of history.",
        "about.period1_title": "PERIOD 1890-1965",
        "about.period1_p1": "The Ballesteros Family set up a small wooden kiosk with no other aim than quenching the thirst of travelers, eventually becoming a gathering place for artists and bohemians enjoying the cool air of the Alhambra Woods.",
        "about.period1_p2": "The family was born and raised in the Generalife Orchards ('Fuente Peña'). Back in the late 19th century, the land belonged to the Marquises of Campotejar... thanks to Mr. Enrique Gómez Colón, owner of Villa Paulina, permission was granted to build a small kiosk on the property.",
        "about.period1_p3": "La Mimbre was a humble wooden tavern on the road to the cemetery, created simply to serve passersby. Soon, funeral attendees stopped on their return journey for a drink, as an old popular verse went:",
        "about.period1_quote": "\"He who goes to a funeral and drinks nothing but his own sorrow is merely on his way.\"",

        // RESERVATIONS
        "booking.title": "RESERVATIONS",
        "booking.date": "Date:",
        "booking.time": "Time:",
        "booking.select_time": "Select a time",
        "booking.guests": "Guests:",
        "booking.guests_ph": "Number of guests",
        "booking.phone": "Phone:",
        "booking.phone_ph": "Your phone number",
        "booking.email": "Email address:",
        "booking.notes": "Notes / Special Requests:",
        "booking.privacy_text": "La Mimbre Restaurante S.L. Purpose: Manage your table reservation, send confirmation and notify you of any issues. Legal basis: Service execution and user consent. Recipients: No data will be shared with third parties, except legal obligation or necessary technical providers. Rights: You can access, rectify, limit and delete your data by emailing info@lamimbrerestaurante.es.",
        "booking.submit_btn": "Request Reservation",
        "booking.success_main": "Great! We have reserved your appointment at La Mimbre Restaurante.",
        "booking.success_sub": "We have sent the confirmation voucher to your email address:",

        // CONTACT
        "contact.title": "Contact",
        "contact.address_label": "Address:",
        "contact.phone_label": "Phone:",
        "contact.map_title": "MAP",
        "contact.open_maps": "📍 Open location in Google Maps",
        "contact.how_to_get_title": "How to get here",
        "contact.how_to_get_intro": "If you are already within the Alhambra grounds, the restaurant is located right behind the main ticket entrance, also known as the Generalife entrance. If you are coming from the city center, La Mimbre is nestled within the Alhambra Woods. Here are the recommended ways to arrive:",
        "contact.route_walk_title": "Walking (On Foot Routes)",
        "contact.route_walk_p1": "The best option to enjoy the natural surroundings.",
        "contact.route_walk_sub1": "From Plaza Nueva (city center):",
        "contact.route_walk_li1": "Walk up Cuesta de Gomérez.",
        "contact.route_walk_li2": "Continue along Gomérez road passing through the Bibarrambla Gate.",
        "contact.route_walk_li3": "Upon entering the Alhambra woods, walk straight until the end of the avenue.",
        "contact.route_walk_li4": "You will find the restaurant on the left side of the path.",
        "contact.route_walk_sub2": "From the Realejo district:",
        "contact.route_walk_li5": "Walk up Paseo de las Palmas or Cuesta del Caldero to connect with Paseo del Generalife.",
        "contact.route_walk_li6": "You will find the restaurant on the left side of the path.",
        "contact.route_bus_title": "City Bus",
        "contact.route_bus_li1": "Bus lines C30 and C32 (Transportes Rober) drop you off right nearby.",
        "contact.route_bus_li2": "Board at Plaza Nueva and get off at the «Generalife» stop.",
        "contact.route_bus_li3": "The restaurant is located right at the bus stop.",
        "contact.route_car_title": "Car / Taxi",
        "contact.route_car_p1": "If you prefer not to walk, take Ronda Sur (A-395) and follow the signs toward Alhambra Parking (Parking 1. Private Parking).",
        "contact.route_car_p2": "From the parking lot, walk toward the Generalife entrance (less than a 5-minute walk).",
        "contact.route_train_title": "Tourist Train (Granada City Tour)",
        "contact.route_train_p1": "You can take the Tourist Train traversing the city, which features a stop at the Alhambra area—ideal for a scenic city tour.",
        "contact.route_train_p2": "You will find the restaurant at the «Generalife» stop.",
        "contact.call_btn": "📞 Call the restaurant",
        "contact.wsp_btn": "💬 Contact via WhatsApp",

        // FOOTER
        "footer.tagline": "Since 1890 at the Alhambra sharing our family tradition at the table",
        "footer.contact_title": "CONTACT US:",
        "footer.phone": "Phone:",
        "footer.address": "Address:",
        "footer.rights": "All rights reserved."
    }
};

document.addEventListener("DOMContentLoaded", () => {

    // 1. MODO OSCURO (DARK MODE)
    const themeToggle = document.getElementById("themeToggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const esOscuro = document.body.classList.contains("dark-mode");
            
            themeToggle.textContent = esOscuro ? "☀️" : "🌙";
            localStorage.setItem("theme", esOscuro ? "dark" : "light");
        });
    }

    // 2. SISTEMA MULTI-IDIOMA (TEXTOS Y PLACEHOLDERS)
    const langEsBtn = document.getElementById("langEs");
    const langEnBtn = document.getElementById("langEn");
    const currentLang = localStorage.getItem("lang") || "es";

    const cambiarIdioma = (idioma) => {
        // Reemplazo de texto general
        document.querySelectorAll("[data-i18n]").forEach(elemento => {
            const clave = elemento.getAttribute("data-i18n");
            if (translations[idioma] && translations[idioma][clave]) {
                elemento.textContent = translations[idioma][clave];
            }
        });

        // Reemplazo de placeholders en inputs
        document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {
            const clave = elemento.getAttribute("data-i18n-placeholder");
            if (translations[idioma] && translations[idioma][clave]) {
                elemento.setAttribute("placeholder", translations[idioma][clave]);
            }
        });

        if (idioma === "es") {
            if (langEsBtn) langEsBtn.classList.add("active");
            if (langEnBtn) langEnBtn.classList.remove("active");
        } else {
            if (langEnBtn) langEnBtn.classList.add("active");
            if (langEsBtn) langEsBtn.classList.remove("active");
        }

        localStorage.setItem("lang", idioma);
    };

    cambiarIdioma(currentLang);

    if (langEsBtn) langEsBtn.addEventListener("click", () => cambiarIdioma("es"));
    if (langEnBtn) langEnBtn.addEventListener("click", () => cambiarIdioma("en"));
});