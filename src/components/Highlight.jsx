function Highlight() {

    return(
        <section className="bg-black py-20 px-6 " id="design">
            <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">
                            Design Revolucionário
                        </h2>
                        <p className="text-xl text-gray-400"> Cada detalhe foi pensado para criar a melhor experiência</p>
                    </div>
                <div className="grid grid-cols-2 gap-8 mb-16 text-center">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="src/assets/img/titanium-design.jpg" alt="iphone-titanium" />
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. O smartphone mais forte e leve.</p>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="src/assets/img/ios-features.jpg" alt="ios 2025" />
                        <h3 className="font-bold mb-2 text-3xl">ios 26</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um Smartphone</p>
                    <img className="w-full rounded-2xl mb-4" src="src/assets/img/chip-a18-pro.jpg" alt="chip-a18" />

                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rápida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Highlight