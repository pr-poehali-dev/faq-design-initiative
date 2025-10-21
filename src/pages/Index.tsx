import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Question {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const questionsData: Question[] = [
  {
    id: '1',
    category: 'Технические',
    question: 'Как начать работу с платформой?',
    answer: 'Для начала работы зарегистрируйтесь в системе, подтвердите email и войдите в личный кабинет. В панели управления вы найдете пошаговое руководство для новых пользователей.',
  },
  {
    id: '2',
    category: 'Технические',
    question: 'Какие браузеры поддерживаются?',
    answer: 'Платформа полностью совместима с современными версиями Chrome, Firefox, Safari и Edge. Рекомендуем использовать последние версии браузеров для оптимальной работы.',
  },
  {
    id: '3',
    category: 'Безопасность',
    question: 'Как защищены мои данные?',
    answer: 'Мы используем шифрование данных по стандарту AES-256, регулярное резервное копирование и двухфакторную аутентификацию. Все данные хранятся в защищенных дата-центрах с сертификацией ISO 27001.',
  },
  {
    id: '4',
    category: 'Безопасность',
    question: 'Можно ли настроить права доступа?',
    answer: 'Да, система поддерживает гибкую настройку прав доступа на уровне пользователей и групп. Вы можете создавать роли с различными уровнями доступа к функциям и данным.',
  },
  {
    id: '5',
    category: 'Интеграция',
    question: 'Есть ли API для интеграции?',
    answer: 'Да, мы предоставляем REST API с подробной документацией. API поддерживает все основные операции и позволяет интегрировать нашу платформу с вашими системами.',
  },
  {
    id: '6',
    category: 'Интеграция',
    question: 'Поддерживается ли экспорт данных?',
    answer: 'Вы можете экспортировать данные в форматах CSV, Excel, JSON и PDF. Также доступен автоматический экспорт по расписанию с отправкой на email или в облачное хранилище.',
  },
  {
    id: '7',
    category: 'Оплата',
    question: 'Какие есть тарифные планы?',
    answer: 'Предлагаем три тарифа: Базовый (бесплатно), Профессиональный (2990₽/месяц) и Корпоративный (индивидуальная цена). Каждый тариф включает разный набор функций и лимитов.',
  },
  {
    id: '8',
    category: 'Оплата',
    question: 'Можно ли оплачивать ежегодно?',
    answer: 'Да, при годовой оплате предоставляется скидка 20%. Оплата принимается банковскими картами, по счету для юридических лиц или через электронные кошельки.',
  },
  {
    id: '9',
    category: 'Поддержка',
    question: 'Как связаться с технической поддержкой?',
    answer: 'Служба поддержки доступна через чат на сайте (24/7), email support@platform.com и телефон 8-800-XXX-XX-XX. Среднее время ответа - 15 минут в рабочие часы.',
  },
  {
    id: '10',
    category: 'Поддержка',
    question: 'Проводите ли обучение пользователей?',
    answer: 'Мы предоставляем бесплатные видео-уроки, документацию и проводим еженедельные вебинары. Для корпоративных клиентов доступно индивидуальное обучение команд.',
  },
];

const categories = ['Все', 'Технические', 'Безопасность', 'Интеграция', 'Оплата', 'Поддержка'];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredQuestions = questionsData.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryCount = (cat: string) => {
    if (cat === 'Все') return questionsData.length;
    return questionsData.filter((q) => q.category === cat).length;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            База знаний
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Найдите ответы на часто задаваемые вопросы о нашей платформе
          </p>
        </div>

        <div className="mb-10">
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <Input
              type="text"
              placeholder="Поиск по вопросам и ответам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base bg-card shadow-sm border-border"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="FolderOpen" size={20} className="text-muted-foreground" />
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Категории
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="rounded-full h-10 px-5 transition-all hover-scale"
              >
                {category}
                <Badge
                  variant={selectedCategory === category ? 'secondary' : 'outline'}
                  className="ml-2 rounded-full"
                >
                  {categoryCount(category)}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="HelpCircle" size={18} />
            <span>
              Найдено: <span className="font-semibold text-foreground">{filteredQuestions.length}</span> {filteredQuestions.length === 1 ? 'вопрос' : 'вопросов'}
            </span>
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-2xl border border-border">
            <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ничего не найдено
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или выбрать другую категорию
            </p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredQuestions.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden animate-fade-in"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="HelpCircle" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="mb-2 rounded-full">
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Icon name="CheckCircle2" size={24} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="mt-16 text-center bg-card rounded-2xl border border-border p-8 shadow-sm">
          <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Не нашли ответ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Свяжитесь с нашей службой поддержки, и мы поможем решить ваш вопрос
          </p>
          <Button size="lg" className="rounded-full px-8">
            <Icon name="Send" size={18} className="mr-2" />
            Связаться с поддержкой
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
