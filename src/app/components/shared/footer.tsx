import Image from 'next/image';
import Logo from '../../../../public/img/serhaz-logo.png';

export function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content rounded">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Image alt={'Logo'} width={40} height={40} src={Logo} />

                            <div>
                                <h3 className="text-2xl font-bold">Serhaz</h3>
                                <p className="text-gray-400">Especialistas en transporte seguro</p>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Líderes en asesoramiento para el transporte de mercancías peligrosas y gestión aduanera.
                            Garantizamos el cumplimiento normativo y la seguridad en cada operación.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">{/*add icon*/} Consejero de Seguridad</li>
                            <li className="flex items-center gap-2">{/*add icon*/} Auditorías SQAS</li>
                            <li className="flex items-center gap-2">{/*add icon*/} Soporte Isotank</li>
                            <li className="flex items-center gap-2">{/*add icon*/} Inspector de Mercancías</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center gap-2">
                                {/*add icon*/}
                                <span>+34 900 123 456</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/*add icon*/}
                                <span>info@logisecure.es</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/*add icon*/} <span>Madrid, España</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 LogiSecure. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
