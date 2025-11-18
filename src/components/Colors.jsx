function Colors() {
    const colors = [
        {id:'blue', name:'Titânio Azul', image:'src/assets.img/iphone-blue.jpg', colorClass:'bg-blue-500' },
        {id:'silver', name:'Titânio Natural', image:'src/assets.img/iphone-silver.jpg', colorClass:'bg-gray-300' }, 
        {id:'orange', name:'Titânio Laranja', image:'src/assets.img/iphone-orange.jpg', colorClass:'bg-orange-500' }
    ]

    const models = [
        {name:'Pro Max', sreen:'6.9 polegadas', storage:'256GB, 512GB ou 1TB', battery:'33h de vídeo', weight:'221g' },
        {name:'Pro', sreen:'6.3 polegadas', storage:'128GB, 256GB ou 512TB', battery:'29h de vídeo', weight:'119g' },

    ]

    return (
        <section id="colors" className="bg-black py-20 px-8">
           <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                <h2 className="text-5xl md:text-4xl font-bold mb-4">Escolha sua cor</h2>
                <p className="text-xl text-gray-400">Quatro acabamentos em titânio lindos</p>
                </div>
           </div>
        </section>
    )
}

export default Colors