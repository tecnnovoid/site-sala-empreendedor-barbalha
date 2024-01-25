export function Video() {
    return (
        <section id="video" className="flex items-center justify-center pt-20 px-4 lg:pt-44 lg:pl-20">
            <video className="h-[400px] lg:h-[80vh]" controls>
                <source src="/assets/videos/video-apresentacao.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </section>
    );
}
