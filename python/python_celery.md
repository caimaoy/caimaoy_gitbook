# Python celery

`celery` 的介绍和基本使用我这里就不说了 `google`  
我说说它基于的 `AMQP` - Advanced Message Queuing Protocol  
关键解决一下看不懂的 `celery` config

```
from kombu import Queue
# CELERY_QUEUES = ( # 定义任务队列
task_queues = (
Queue('default', routing_key='tasks.#'), # 路由键以“task.”开头的消息都进default队列
Queue('mock_tasks', routing_key='mock.#'), # 路由键以“mock.”开头的消息都进mock_tasks队列
)


# CELERY_ROUTES = {
task_routes = {
    'celery_proj.mock_tasks.*': { # celery_proj.mock_tasks.* 的消息会进入mock_tasks 队列
    'queue': 'mock_tasks',
    'routing_key': 'mock.#',  # 在上面设置之后，好像没有什么用
    },
    'celery_proj.tasks.*': {
    'queue': 'default',
    'routing_key': 'tasks.#',
    }
}
```

关键就是解决一下 `AMQP messaging` 中的基本概念，也就是下面一篇文章<http://www.openstack.cn/?p=4702>

同时文中提到：
> 这里也推荐给想要了解 `RabbitMQ` 的同学一个网站，<http://tryrabbitmq.com> ，它提供在线 `RabbitMQ` 模拟器，可以帮助理解Exchange／queue／binding概念
