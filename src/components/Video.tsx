import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, FileImage, Lightning } from "phosphor-react";
import "@vime/core/themes/default.css"

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId="5RLpiJi4bwg" />
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto ">
                <div className="flex  items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold ">Aula 01 - abertura do ignite lab</h1>
                        <p className="mt-4 text-gray-200">Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar
                            o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.</p>

                        {/* Foto e Nome e Profissao */}
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src="https://www.github.com/nycollaspontes.png"
                                className="h-16 w-16 rounded-full border-blue-500" />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Nycollas Pontes</strong>
                                <span className="text-gray-200 text-sm block ">Front-end Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade Do Discord
                        </a>
                        <a href="" className="p-4 text-sm text-blue-500 border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors ">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className='gap-8 mt-20 grid grid-cols-2 '>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-strecht gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex place-items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="flex items-center h-full p-6">
                            <CaretRight size={24} />

                        </div>
                    </a>
                    {/* Second Complementar  */}
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-strecht gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex place-items-center">
                            <FileImage size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers exclusivos </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="flex items-center h-full p-6">
                            <CaretRight size={24} />

                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}