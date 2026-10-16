from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/hello/')
@app.route('/Привет/')
def hello():
    context = {
        'posts' : [
        {
            'title' : 'Первый пост',
            'content' : 'Содержание первого поста',
            'date' : '12.05.2026',
        },
        {
            'title': 'Второй пост',
            'content': 'Содержание второго поста',
            'date': '15.05.2026',
        },
        {
            'title': 'Третий пост',
            'content': 'Содержание третьего поста',
            'date': '18.05.2026',
            }
        ]
    }
    return render_template('blog.html', **context)
    #return 'Привет, незнакомец'

@app.route('/bye/')
def bye():
    return 'Пока'

@app.route('/goodday/')
def goodday():
    return 'Хорошего дня'

#@app.route('/<number>/')
#def say_number(number):
#    return f'Ты выбрал число {number}'

@app.route('/name/<name>/')
def hello_name(name=None):
    if name is None:
        return 'Доступ запрещен'
    return f'Привет, {name.title()}'

@app.route('/game/')
def game():
    return 'ИГрыыыыыыыыыы'

@app.route('/python/')
def python():
    return '@app.route(/python/) def bye():'
@app.route('/index/')
def index():
    context = {
        'title' : 'Мой сайт',
        'name' : 'Марк',
    }
    return render_template('index6.html', **context)






if __name__ == '__main__':
    app.run()
