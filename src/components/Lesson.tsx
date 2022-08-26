import { CheckCircle, Lock } from 'phosphor-react'
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'Live' | 'class'
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = false;
    return (
        <a href="">
            <span className="text-gray-300">
                {props.availableAt.toString()}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between ">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium items-center flex gap-2">
                            <CheckCircle size={20} />
                            Conteudo liberado
                        </span>
                    )
                        : (
                            <span className="text-sm text-orange-500 font-medium items-center flex gap-2">
                                <Lock size={20} />
                               Em Breve
                            </span>
                        )}
                    <span className="text-xs rounded py-[2px] px-2 border border-green-300 font-bold ">
                        {props.type === 'Live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>


    )
}