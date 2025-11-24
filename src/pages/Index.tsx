import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const schools = [
    { id: 1, name: 'Школа №1, г. Ижевск', lat: 56.85, lng: 53.21, students: 45 },
    { id: 2, name: 'Гимназия №24, г. Ижевск', lat: 56.84, lng: 53.19, students: 32 },
    { id: 3, name: 'Лицей №41, г. Воткинск', lat: 57.05, lng: 53.99, students: 28 },
    { id: 4, name: 'Школа №18, г. Сарапул', lat: 56.47, lng: 53.80, students: 25 },
    { id: 5, name: 'Гимназия №56, г. Можга', lat: 56.44, lng: 52.21, students: 20 },
  ];

  const documents = [
    { title: 'Концепция психолого-педагогических классов', type: 'PDF', size: '2.4 МБ', icon: 'FileText' },
    { title: 'Проект нормативно-правовых документов', type: 'DOCX', size: '1.8 МБ', icon: 'FileCheck' },
    { title: 'Дорожная карта реализации проекта', type: 'PDF', size: '3.1 МБ', icon: 'Map' },
    { title: 'Макет соглашения о сотрудничестве', type: 'DOCX', size: '856 КБ', icon: 'FileSignature' },
  ];

  const news = [
    { 
      id: 1, 
      title: 'Открытие психолого-педагогических классов в 5 школах',
      date: '15 ноября 2024',
      category: 'Новости',
      excerpt: 'В Удмуртской Республике открылись первые психолого-педагогические классы в пяти образовательных организациях.'
    },
    { 
      id: 2, 
      title: 'Семинар для педагогов педклассов',
      date: '8 ноября 2024',
      category: 'Мероприятия',
      excerpt: 'Состоялся республиканский семинар по методике преподавания в психолого-педагогических классах.'
    },
    { 
      id: 3, 
      title: 'Экскурсия в педагогический университет',
      date: '2 ноября 2024',
      category: 'События',
      excerpt: 'Учащиеся педклассов посетили УдГУ и познакомились с факультетом психологии и педагогики.'
    },
  ];

  const courses = [
    { 
      title: 'Основы педагогики',
      duration: '36 часов',
      level: 'Базовый',
      description: 'Введение в педагогическую науку, основные понятия и принципы обучения.'
    },
    { 
      title: 'Психология развития',
      duration: '48 часов',
      level: 'Средний',
      description: 'Изучение особенностей психического развития детей и подростков.'
    },
    { 
      title: 'Методика воспитательной работы',
      duration: '32 часа',
      level: 'Базовый',
      description: 'Практические методы и приёмы организации воспитательного процесса.'
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Педклассы Удмуртии
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Курсы
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Блог
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">Образование будущего</Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Психолого-педагогические классы
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Проект развития педагогического образования в Удмуртской Республике. 
              Готовим будущих учителей и психологов с современными знаниями и практическими навыками.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('courses')}>
                <Icon name="BookOpen" size={20} className="mr-2" />
                Изучить курсы
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="animate-scale-in hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={40} className="text-primary mb-3" />
                <CardTitle>Профориентация</CardTitle>
                <CardDescription>
                  Помогаем определиться с выбором педагогической профессии
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Brain" size={40} className="text-secondary mb-3" />
                <CardTitle>Развитие мягких навыков</CardTitle>
                <CardDescription>
                  Коммуникация, эмпатия, работа в команде и лидерские качества
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Award" size={40} className="text-accent mb-3" />
                <CardTitle>Профессиональная проба</CardTitle>
                <CardDescription>
                  Практический опыт работы в образовательных учреждениях
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Карта педклассов Удмуртии
            </h3>
            <p className="text-gray-600 text-lg">
              География реализации проекта в республике
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-yellow-100 to-red-100 p-8 md:p-12 relative min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 800 600">
                    <circle cx="400" cy="200" r="4" fill="#B91C1C" />
                    <circle cx="380" cy="210" r="4" fill="#B91C1C" />
                    <circle cx="450" cy="350" r="4" fill="#B91C1C" />
                    <circle cx="350" cy="320" r="4" fill="#B91C1C" />
                    <circle cx="340" cy="430" r="4" fill="#B91C1C" />
                  </svg>
                </div>
                <div className="relative z-10 grid md:grid-cols-2 gap-6 w-full">
                  {schools.map((school) => (
                    <Card key={school.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">{school.name}</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {school.students} учащихся
                            </CardDescription>
                          </div>
                          <Icon name="MapPin" size={20} className="text-primary" />
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Документы проекта
            </h3>
            <p className="text-gray-600 text-lg">
              Нормативная база и методические материалы
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:flex md:justify-center mb-8">
              <TabsTrigger value="all">Все документы</TabsTrigger>
              <TabsTrigger value="normative">НПА</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon name={doc.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <Badge variant="outline">{doc.type}</Badge>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      <Icon name="Download" size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="normative" className="grid md:grid-cols-2 gap-6">
              {documents.slice(1, 2).map((doc, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon name={doc.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <Badge variant="outline">{doc.type}</Badge>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      <Icon name="Download" size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Курсы и программы
            </h3>
            <p className="text-gray-600 text-lg">
              Образовательные программы для учащихся педклассов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={idx === 1 ? 'default' : 'secondary'}>{course.level}</Badge>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <CardTitle className="text-xl mb-3">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant={idx === 1 ? 'default' : 'outline'}>
                    <Icon name="BookOpen" size={18} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Новости и мероприятия
            </h3>
            <p className="text-gray-600 text-lg">
              Актуальные события в мире педклассов
            </p>
          </div>

          <div className="space-y-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge>{item.category}</Badge>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base">{item.excerpt}</CardDescription>
                    </div>
                    <Icon name="ArrowRight" size={24} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Остались вопросы о психолого-педагогических классах? Напишите нам, и мы обязательно ответим.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">pedclass@udmurt.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (3412) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-600">г. Ижевск, ул. Университетская, 1</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Задайте вопрос или оставьте заявку</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Опишите ваш вопрос..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <h4 className="font-bold text-lg">Педклассы Удмуртии</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Развитие педагогического образования в регионе
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-white transition-colors">Курсы</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-white transition-colors">Блог</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Документы</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Концепция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">НПА</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дорожная карта</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>г. Ижевск</li>
                <li>+7 (3412) 123-45-67</li>
                <li>pedclass@udmurt.edu</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Психолого-педагогические классы Удмуртской Республики
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;