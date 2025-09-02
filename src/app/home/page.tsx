import Image from 'next/image';
import ShipCargo from '../../../public/img/ship-cargo.jpg';
import { ServiceCard } from '@/app/components/home/service-card';
const services = [
    {
        title: 'Consejero de seguridad',
        icon: '',
        description:
            'Asesoramiento experto para el cumplimiento de la normativa ADR/IMDG/IATA y la redacción del informe anual.',
        features: ['Informe Anual', 'Planes de protección', 'Capacitación del personal'],
    },
    {
        title: 'Gestión de Auditorías SQAS',
        icon: '',
        description:
            'Preparación y gestión completa para superar con éxito las auditorías SQAS (Safety & Quality Assessment).',
        features: ['Análisis de vulnerabilidades', 'Planes de acción', 'Informe detallado'],
    },
    {
        title: 'Soporte Tecnico Isotank',
        icon: '',
        description: 'Soporte técnico especializado para la gestión, mantenimiento y operación segura de isotanques.',
        features: ['Inspecciones periódicas', 'Gestión de reparaciones', 'Asesoramiento'],
    },
    {
        title: 'Inspector de Mercancías',
        icon: '',
        description: 'Inspección y verificación in situ para asegurar el cumplimiento normativo antes del transporte.',
        features: ['Certificados de Trincaje', 'Revisión documental', 'Recogida de muestras'],
    },
];
export default function Home() {
    return (
        <div>
            <div className="h-96 relative">
                <Image alt={'cargo-ship'} fill src={ShipCargo} className="object-cover" />
            </div>
            <section>
                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>
        </div>
    );
}
