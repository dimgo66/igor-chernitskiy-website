import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Film, BookOpen, Music, Calendar, Award, ExternalLink } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("biography");
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to main content when changing tabs
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const photoGallery = [
    {
      src: "/igor-modern.jpg",
      caption: "Художественный руководитель киностудии ЧЕРОМАФИЛЬМ",
      year: "2020-е годы"
    },
    {
      src: "/igor-portrait-1.jpg",
      caption: "Режиссёр Игорь Черницкий на съёмках",
      year: "2010-е годы"
    },
    {
      src: "/igor-portrait-2.jpg",
      caption: "Интервью о патриотическом кино",
      year: "2022 год"
    },
    {
      src: "/igor-young.jpg",
      caption: "Молодой актёр в Киевском театре",
      year: "1970-е годы"
    },
    {
      src: "/v-toi-oblasti-nebes.jpg",
      caption: "Постер фильма 'В той области небес...'",
      year: "1992 год"
    },
    {
      src: "/proshchalnoe-echo.jpg",
      caption: "Кадр из фильма 'Прощальное эхо'",
      year: "2003 год"
    },
    {
      src: "/ivin-a.jpg",
      caption: "Кадр из дебютного режиссёрского фильма 'Ивин А.'",
      year: "1990 год"
    },
    {
      src: "/teatr-lesi-ukrainki.webp",
      caption: "Киевский театр им. Леси Украинки, где работал актёром",
      year: "1975-1983 гг."
    },
    {
      src: "/yunkera-poster.jpg",
      caption: "Постер знаменитого фильма 'Юнкера'",
      year: "2007 год"
    },
    {
      src: "/yunkera-shooting-1.jpg",
      caption: "Кадр из сериала 'Юнкера'",
      year: "2007 год"
    },
    {
      src: "/yunkera-actors.jpg",
      caption: "Режиссёр и актёры на съёмках 'Юнкера'",
      year: "2007 год"
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-2.5 h-2.5 bg-purple-300/25 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-700/50 glass-effect animate-slide-up">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h1 className="text-xl font-bold text-white md:text-2xl">
                Игорь Михайлович Черницкий
              </h1>
              <p className="text-sm text-slate-300">
                Кинорежиссёр • Сценарист • Актёр • Писатель
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:flex md:gap-2 animate-slide-up">
              <Button 
                variant={activeSection === "biography" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionChange("biography")}
                className={`transition-all duration-300 hover:scale-105 ${activeSection === "biography" ? "bg-blue-600 text-white animate-glow hover:bg-blue-700" : "text-slate-300 hover:bg-slate-700/80 hover:text-white border-0"}`}
              >
                Биография
              </Button>
              <Button 
                variant={activeSection === "filmography" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionChange("filmography")}
                className={`transition-all duration-300 hover:scale-105 ${activeSection === "filmography" ? "bg-purple-600 text-white animate-glow hover:bg-purple-700" : "text-slate-300 hover:bg-slate-700/80 hover:text-white border-0"}`}
              >
                Фильмография
              </Button>
              <Button 
                variant={activeSection === "literature" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionChange("literature")}
                className={`transition-all duration-300 hover:scale-105 ${activeSection === "literature" ? "bg-pink-600 text-white animate-glow hover:bg-pink-700" : "text-slate-300 hover:bg-slate-700/80 hover:text-white border-0"}`}
              >
                Литература
              </Button>
              <Button 
                variant={activeSection === "music" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionChange("music")}
                className={`transition-all duration-300 hover:scale-105 ${activeSection === "music" ? "bg-green-600 text-white animate-glow hover:bg-green-700" : "text-slate-300 hover:bg-slate-700/80 hover:text-white border-0"}`}
              >
                Музыка
              </Button>
              <Button 
                variant={activeSection === "gallery" ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionChange("gallery")}
                className={`transition-all duration-300 hover:scale-105 ${activeSection === "gallery" ? "bg-indigo-600 text-white animate-glow hover:bg-indigo-700" : "text-slate-300 hover:bg-slate-700/80 hover:text-white border-0"}`}
              >
                Галерея
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-16 md:py-24 animate-fade-in" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 animate-float parallax-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-purple-900/10 animate-glow" />
        {/* Hero decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-blue-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border border-purple-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4 hero-text">
                <Badge variant="secondary" className="w-fit animate-fade-in stagger-1 animate-glow bounce-gentle">
                  <Award className="mr-2 h-3 w-3" />
                  Лауреат международных кинофестивалей
                </Badge>
                <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-slide-up">
                  Игорь Михайлович
                  <span className="block text-gradient animate-glow pulse-slow">
                    Черницкий
                  </span>
                </h2>
                <p className="text-lg text-slate-300 md:text-xl animate-slide-up stagger-2">
                  Выдающийся российский кинорежиссёр, сценарист, актёр и писатель. 
                  Член Союза кинематографистов России, создатель киностудии «ЧЕРОМАФИЛЬМ».
                </p>
                <div className="flex flex-wrap gap-2 animate-slide-up stagger-3">
                  <Badge variant="outline" className="text-white border-slate-600 tab-highlight">
                    <Calendar className="mr-1 h-3 w-3" />
                    14 декабря 1953 г.
                  </Badge>
                  <Badge variant="outline" className="text-white border-slate-600 tab-highlight">
                    Пермь
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex justify-center hero-image">
              <div className="relative animate-float">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur animate-glow pulse-slow"></div>
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-float" style={{animationDelay: '1s', animationDuration: '8s', transform: `translateY(${scrollY * 0.05}px)`}}></div>
                <img 
                  src="/i.webp" 
                  alt="Игорь Черницкий" 
                  className="relative h-80 w-64 rounded-lg object-cover shadow-2xl md:h-96 md:w-80 transition-transform duration-300 hover:scale-105 image-overlay shimmer-effect"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeSection} onValueChange={handleSectionChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-effect md:grid-cols-6 animate-slide-up border border-slate-600">
            <TabsTrigger value="biography" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300 hover:text-white tab-highlight transition-all duration-300 hover:scale-105">
              <BookOpen className="mr-1 h-4 w-4 md:mr-2" />
              <span className="hidden sm:inline">Биография</span>
              <span className="sm:hidden">Био</span>
            </TabsTrigger>
            <TabsTrigger value="filmography" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-slate-300 hover:text-white tab-highlight transition-all duration-300 hover:scale-105">
              <Film className="mr-1 h-4 w-4 md:mr-2" />
              <span className="hidden sm:inline">Фильмография</span>
              <span className="sm:hidden">Фильмы</span>
            </TabsTrigger>
            <TabsTrigger value="literature" className="data-[state=active]:bg-pink-600 data-[state=active]:text-white text-slate-300 hover:text-white tab-highlight transition-all duration-300 hover:scale-105">
              <BookOpen className="mr-1 h-4 w-4 md:mr-2" />
              <span className="hidden sm:inline">Литература</span>
              <span className="sm:hidden">Книги</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="data-[state=active]:bg-green-600 data-[state=active]:text-white text-slate-300 hover:text-white tab-highlight transition-all duration-300 hover:scale-105">
              <Music className="mr-1 h-4 w-4 md:mr-2" />
              <span className="hidden sm:inline">Музыка</span>
              <span className="sm:hidden">Песни</span>
            </TabsTrigger>
            <TabsTrigger value="gallery" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-slate-300 hover:text-white tab-highlight transition-all duration-300 hover:scale-105">
              <Film className="mr-1 h-4 w-4 md:mr-2" />
              <span className="hidden sm:inline">Галерея</span>
              <span className="sm:hidden">Фото</span>
            </TabsTrigger>
            <TabsTrigger value="awards" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white text-slate-300 hover:text-white hidden md:flex tab-highlight transition-all duration-300 hover:scale-105">
              <Award className="mr-2 h-4 w-4" />
              Награды
            </TabsTrigger>
          </TabsList>

          {/* Biography Tab */}
          <TabsContent value="biography" className="mt-8 content-section">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700 card-hover animate-slide-up">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">
                      Биография
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Жизненный и творческий путь
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-slate-200 animate-fade-in">
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-white animate-fade-in stagger-1">Образование</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            1975
                          </Badge>
                          <span>Окончил русское отделение актёрского факультета Киевского института театрального искусства им. Карпенко-Карого</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            1999
                          </Badge>
                          <span>Окончил Высшие Литературные Курсы при Московском Литературном институте им. А.М. Горького</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator className="bg-slate-700" />
                    
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-white animate-fade-in stagger-2">Театральная деятельность</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            1975-1983
                          </Badge>
                          <span>Актёр в Киевском государственном академическом театре русской драмы имени Леси Украинки</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            1983-1989
                          </Badge>
                          <span>Актёр Театра-студии киноактера при киностудии им. А. Довженко</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator className="bg-slate-700" />
                    
                    <div>
                      <h3 className="mb-3 text-lg font-semibold text-white animate-fade-in stagger-3">Кинематографическая карьера</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            1988-2004
                          </Badge>
                          <span>Режиссёр-постановщик Национальной киностудии художественных фильмов имени Александра Довженко</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            2002-2003
                          </Badge>
                          <span>Режиссёр-постановщик киностудии «Арк-фильм» киноконцерна «Мосфильм»</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0 text-xs border-slate-600 text-slate-300">
                            с 2005
                          </Badge>
                          <span>Режиссёр-постановщик, генеральный продюсер, художественный руководитель киностудии «ЧЕРОМАФИЛЬМ»</span>
                        </li>
                      </ul>
                    </div>
                    
                    <Separator className="bg-slate-700" />
                    
                    <div className="rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 card-hover animate-glow">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 shrink-0 text-yellow-400 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white">Благодарность Президента РФ</h4>
                          <p className="text-sm text-slate-300">
                            Распоряжением Президента РФ (№ 193-рп от 23.06.2014 г.) за достигнутые трудовые успехи, 
                            заслуги в гуманитарной сфере, активную общественную деятельность и многолетнюю 
                            добросовестную работу объявлена благодарность Президента РФ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-slate-800/50 border-slate-700 card-hover animate-slide-up" style={{animationDelay: '0.2s'}}>
                  <CardHeader>
                    <CardTitle className="text-white animate-fade-in">Фотогалерея</CardTitle>
                    <CardDescription className="text-slate-300">
                      Фотографии разных лет
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 animate-fade-in stagger-2">
                    <div className="space-y-2 group shimmer-effect">
                      <img src="/igor-portrait-1.jpg" alt="Игорь Черницкий" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                      <p className="text-xs text-slate-400 text-center">Режиссёр и продюсер Игорь Черницкий</p>
                    </div>
                    
                    <div className="space-y-2 group shimmer-effect">
                      <img src="/igor-portrait-2.jpg" alt="Игорь Черницкий" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                      <p className="text-xs text-slate-400 text-center">На съёмках фильма</p>
                    </div>
                    
                    <div className="space-y-2 group shimmer-effect">
                      <img src="/igor-young.jpg" alt="Игорь Черницкий в молодости" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                      <p className="text-xs text-slate-400 text-center">Молодой актёр, 1970-е годы</p>
                    </div>
                    
                    <div className="space-y-2 group shimmer-effect">
                      <img src="/igor-modern.jpg" alt="Игорь Черницкий" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                      <p className="text-xs text-slate-400 text-center">Художественный руководитель «ЧЕРОМАФИЛЬМ»</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Filmography Tab */}
          <TabsContent value="filmography" className="mt-8 content-section">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Film className="h-6 w-6" />
                  Фильмография режиссёра-постановщика
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Основные работы в кинематографе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-700 p-4 card-hover group animate-fade-in" style={{animationDelay: '0.1s'}}>
                      <h3 className="font-semibold text-white">«Ивин А.»</h3>
                      <p className="text-sm text-slate-400">1990 г.</p>
                      <img src="/ivin-a.jpg" alt="Кадр из фильма Ивин А." className="mt-2 w-full rounded transition-transform duration-300 group-hover:scale-105 image-overlay" />
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover group animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <h3 className="font-semibold text-white">«В той области небес...»</h3>
                      <p className="text-sm text-slate-400">2 серии, 1992 г.</p>
                      <img src="/v-toi-oblasti-nebes.jpg" alt="Постер фильма В той области небес" className="mt-2 w-full rounded transition-transform duration-300 group-hover:scale-105 image-overlay" />
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover group animate-fade-in" style={{animationDelay: '0.3s'}}>
                      <h3 className="font-semibold text-white">«Прощальное эхо»</h3>
                      <p className="text-sm text-slate-400">12 серий, 2003 г.</p>
                      <img src="/proshchalnoe-echo.jpg" alt="Кадр из фильма Прощальное эхо" className="mt-2 w-full rounded transition-transform duration-300 group-hover:scale-105 image-overlay" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-700 p-4 card-hover group animate-fade-in" style={{animationDelay: '0.1s'}}>
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/3">
                          <img 
                            src="/yunkera-poster.jpg" 
                            alt="Постер фильма Юнкера" 
                            className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" 
                          />
                        </div>
                        <div className="md:w-2/3 space-y-3">
                          <div>
                            <h3 className="font-semibold text-white text-lg">«Юнкера»</h3>
                            <p className="text-sm text-slate-400">12 серий, 2007 г. • Полнометражный фильм, 2009 г.</p>
                            <p className="text-xs text-slate-500 mt-1">Один из самых известных фильмов режиссёра</p>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            <img src="/yunkera-shooting-1.jpg" alt="Кадр из фильма Юнкера" className="rounded hover:scale-105 transition-transform image-overlay" />
                            <img src="/yunkera-actors.jpg" alt="Актёры на съёмках Юнкера" className="rounded hover:scale-105 transition-transform image-overlay" />
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            <a 
                              href="https://www.kinopoisk.ru/series/405611/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                              aria-label="Смотреть сериал Юнкера на Кинопоиске"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Смотреть сериал
                            </a>
                            <a 
                              href="https://www.afisha.ru/movie/yunkera-193698/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
                              aria-label="Смотреть полнометражный фильм Юнкера на Афише"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Смотреть фильм
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover group animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <h3 className="font-semibold text-white">«Маменькин сынок»</h3>
                      <p className="text-sm text-slate-400">2 серии, 2010 г.</p>
                      <p className="text-xs text-slate-500 mt-1">Комедия о взаимоотношениях матери и сына</p>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <img src="/mamenkin-synok-1.jpg" alt="Кадр из фильма Маменькин сынок" className="rounded hover:scale-105 transition-transform image-overlay" />
                        <img src="/mamenkin-synok-2.jpg" alt="Кадр из фильма Маменькин сынок" className="rounded hover:scale-105 transition-transform image-overlay" />
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.3s'}}>
                      <h3 className="font-semibold text-white">«Подпоручикъ Ромашовъ»</h3>
                      <p className="text-sm text-slate-400">2012 г.</p>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.4s'}}>
                      <h3 className="font-semibold text-white">«Крестный ход под облаками»</h3>
                      <p className="text-sm text-slate-400">Документальный фильм, 2008 г.</p>
                      <p className="text-xs text-slate-500 mt-1">Духовно-познавательный фильм</p>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.5s'}}>
                      <h3 className="font-semibold text-white">«За кремовыми шторами»</h3>
                      <p className="text-sm text-slate-400">Фильм-спектакль, 2010 г.</p>
                      <p className="text-xs text-slate-500 mt-1">Вечер офицерского романса</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Literature Tab */}
          <TabsContent value="literature" className="mt-8 content-section">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Библиография
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Литературные произведения и публикации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.1s'}}>
                      <h3 className="font-semibold text-white">«Мы последняя нежность войны»</h3>
                      <p className="text-sm text-slate-400">2017, сборник сценариев</p>
                      <p className="text-xs text-slate-500">Издательство «У Никитских ворот»</p>
                      <div className="mt-2">
                        <a href="#" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          <ExternalLink className="h-3 w-3" />
                          Читать отрывки
                        </a>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <h3 className="font-semibold text-white">«Мелодия грозы»</h3>
                      <p className="text-sm text-slate-400">2016, сборник песен</p>
                      <p className="text-xs text-slate-500">Издательство «У Никитских ворот»</p>
                      <div className="mt-2">
                        <a href="#" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          <ExternalLink className="h-3 w-3" />
                          Послушать отрывки
                        </a>
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 border border-purple-700/50 card-hover animate-glow animate-fade-in" style={{animationDelay: '0.3s'}}>
                      <h3 className="font-semibold text-white mb-2">Публикации в журнале «Вторник»</h3>
                      <p className="text-sm text-slate-300 mb-3">
                        Литературные произведения и статьи автора в известном литературном журнале.
                      </p>
                      <a href="https://www.vtornik.online/autors/черницкий-" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Читать произведения в журнале «Вторник»
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.1s'}}>
                      <h3 className="font-semibold text-white">«Жила-была любовь под соломенной крышей»</h3>
                      <p className="text-sm text-slate-400">2012, художественно-документальный роман</p>
                      <p className="text-xs text-slate-500">О людях ХХ века, тираж 2000 экз., издательство «У Никитских ворот»</p>
                      <div className="mt-2">
                        <a href="#" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          <ExternalLink className="h-3 w-3" />
                          Заказать книгу
                        </a>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.2s'}}>
                      <h3 className="font-semibold text-white">«Айэмэнэкта»</h3>
                      <p className="text-sm text-slate-400">Повесть, опубликована в журнале «Москва», ноябрь 2003 г.</p>
                      <div className="mt-2">
                        <a href="https://litmir.club/br/?b=72409" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          <ExternalLink className="h-3 w-3" />
                          Читать онлайн
                        </a>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.3s'}}>
                      <h3 className="font-semibold text-white">«Врач вечной молодости»</h3>
                      <p className="text-sm text-slate-400">Рассказы</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Music Tab */}
          <TabsContent value="music" className="mt-8 content-section">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Music className="h-6 w-6" />
                  Дискография
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Песенные альбомы на стихи Игоря Черницкого
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Я вернусь", year: "2001", format: "CD-альбом" },
                    { title: "Пред образом", year: "2001", format: "CD-альбом" },
                    { title: "Офицерский вальс", year: "2003", format: "CD-альбом" },
                    { title: "Живи, страна!", year: "2003", format: "CD-альбом" },
                    { title: "За кремовыми шторами. Вечер офицерского романса", year: "2010", format: "DVD-альбом" },
                    { title: "Поёт Николай Романов", year: "2010", format: "DVD-альбом" },
                    { title: "Песня на два голоса", year: "2016", format: "CD-альбом" },
                    { title: "Ночной романс", year: "2016", format: "CD-альбом" },
                    { title: "Мелодия грозы", year: "2016", format: "CD-альбом" },
                    { title: "Киноконцерт", year: "2016", format: "DVD-альбом" }
                  ].map((album, index) => (
                    <div key={index} className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <h3 className="font-semibold text-white text-sm shimmer-effect">«{album.title}»</h3>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs animate-fade-in bounce-gentle" style={{animationDelay: `${index * 0.05}s`}}>{album.year}</Badge>
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-300 animate-fade-in" style={{animationDelay: `${index * 0.05 + 0.1}s`}}>{album.format}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="mt-8 content-section">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Film className="h-6 w-6" />
                  Фотогалерея
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Фотографии разных лет, кадры из фильмов и со съёмочных площадок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {photoGallery.map((photo, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg border border-slate-700 card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={photo.src} 
                          alt={photo.caption} 
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 image-overlay"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-medium">{photo.caption}</p>
                        <p className="text-xs text-slate-300">{photo.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="bg-slate-700 my-8" />
                
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white">Кадры из фильмов</h3>
                  
                  <div className="space-y-6">
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.6s'}}>
                      <h4 className="font-semibold text-white mb-3">«Маменькин сынок» (2010)</h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2 group">
                          <img src="/mamenkin-synok-1.jpg" alt="Кадр из фильма Маменькин сынок" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                          <p className="text-xs text-slate-400">Комедийная сцена с главными героями</p>
                        </div>
                        <div className="space-y-2 group">
                          <img src="/mamenkin-synok-2.jpg" alt="Кадр из фильма Маменькин сынок" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                          <p className="text-xs text-slate-400">Вечерняя сцена в ресторане</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-slate-700 p-4 card-hover animate-fade-in" style={{animationDelay: '0.7s'}}>
                      <h4 className="font-semibold text-white mb-3">Театр им. Леси Украинки, Киев</h4>
                      <div className="space-y-2 group">
                        <img src="/teatr-lesi-ukrainki.webp" alt="Киевский театр им. Леси Украинки" className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105 image-overlay" />
                        <p className="text-xs text-slate-400">
                          Интерьер знаменитого театра, где Игорь Черницкий служил актёром с 1975 по 1983 годы
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="awards" className="mt-8 content-section">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    Награды и признание
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 border border-yellow-700/50 card-hover animate-glow">
                    <div className="flex items-start gap-3">
                      <Award className="h-6 w-6 text-yellow-400 mt-1 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white text-lg">Благодарность Президента РФ</h3>
                        <p className="text-sm text-slate-300 mt-1">Распоряжение Президента РФ № 193-рп от 23.06.2014 г.</p>
                        <p className="text-sm text-slate-400 mt-2">
                          За достигнутые трудовые успехи, заслуги в гуманитарной сфере, активную общественную деятельность 
                          и многолетнюю добросовестную работу.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 border border-blue-700/50 card-hover animate-fade-in" style={{animationDelay: '0.1s'}}>
                    <h3 className="font-semibold text-white mb-3">Лауреат международных кинофестивалей</h3>
                    <p className="text-sm text-slate-300">
                      Автор многих песен, киносценариев и литературных произведений, 
                      признанный мастер российского кинематографа.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-white">Членство в творческих союзах:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 p-2 rounded border border-slate-700">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Союз кинематографистов России</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded border border-slate-700">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Союз театральных деятелей России</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded border border-slate-700">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Союз писателей России</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded border border-slate-700">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Гильдия кинорежиссёров России</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded border border-slate-700">
                        <Award className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-slate-300">Гильдия киноактёров России</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Киностудия «ЧЕРОМАФИЛЬМ»
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    С 2005 года — художественный руководитель
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-slate-700 p-4">
                    <h4 className="font-semibold text-white mb-2">Должности в студии:</h4>
                    <ul className="space-y-1 text-sm text-slate-300">
                      <li>• Режиссёр-постановщик</li>
                      <li>• Генеральный продюсер</li>
                      <li>• Художественный руководитель</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border border-slate-700 p-4">
                    <h4 className="font-semibold text-white mb-2">Полезные ссылки:</h4>
                    <div className="space-y-2">
                      <a href="https://www.kino-teatr.ru/kino/acter/m/ros/4728/" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-3 w-3" />
                        Кино-Театр.Ру профиль
                      </a>
                      <a href="https://www.film.ru/person/igor-chernickiy" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-3 w-3" />
                        Film.ru страница
                      </a>
                      <a href="https://ru.wikipedia.org/wiki/Черницкий,_Игорь_Михайлович" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="h-3 w-3" />
                        Википедия
                      </a>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gradient-to-r from-green-900/30 to-teal-900/30 p-4 border border-green-700/50 card-hover animate-glow pulse-slow">
                    <h4 className="font-semibold text-white mb-2">Контактная информация</h4>
                    <p className="text-sm text-slate-300">Киностудия «ЧЕРОМАФИЛЬМ»</p>
                    <p className="text-xs text-slate-400 mt-1">Москва, Россия</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 glass-effect py-8 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                Союз кинематографистов России
              </Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                Союз театральных деятелей
              </Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                Союз писателей России
              </Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                Гильдия кинорежиссёров России
              </Badge>
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                Гильдия киноактёров России
              </Badge>
            </div>
            <p className="text-sm text-slate-400 animate-fade-in">
              © 2024 Официальный сайт Игоря Михайловича Черницкого
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-glow"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
