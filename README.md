    第一个React 项目
    聊天的SPA软件，前后端分离

    接口文档
    # 接口文档

    ## 目录：
    [1、注册](#1注册)<br/>
    [2、登陆](#2登陆)<br/>
    [3、更新用户信息](#3更新用户信息)<br/>
    [4、获取当前的user(根据cookie)](#4获取当前的user(根据cookie))<br/>
    [5、获取用户列表](#5获取用户列表)<br/>
    [6、获取当前用户的聊天消息列表](#6获取当前用户的聊天消息列表)<br/>
    [7、 修改指定消息为已读](#7修改指定消息为已读)<br/>

    ## 1、注册

    ### 请求URL：
    	localhost:4001/register

    ### 请求方式：
    	POST

    ### 参数类型

    	|参数		|是否必选 |类型     |说明
    	|username    |Y       |string   |用户名
    	|password    |Y       |string   |密码

    ### 返回示例：
    	成功:
    	    {
    	      "code": 0,
    	      "data": {
    	        "_id": "5ae133e621388d262c8d91a6",
    	        "username": "ds2",
    	      }
    	    }
    	失败
    	    {
    	      "code": 1,
    	      "msg": "此用户已存在"
    	    }

    ## 2、登陆

    ### 请求URL：
    	localhost:4001/login

    ### 请求方式：
    	POST

    ### 参数类型

    	|参数		|是否必选 |类型     |说明
    	|username    |Y       |string   |用户名
    	|password    |Y       |string   |密码

    ### 返回示例：
    	成功:
    	    {
    	      "code": 0,
    	      "data": {
    	        "_id": "5ae1338a21388d262c8d91a5",
    	        "username": "ds1",
    	        "__v": 0
    	      }
    	    }
    	失败
    	    {
    	      "code": 1,
    	      "msg": "用户名或密码错误"
    	    }

    ## 3、更新用户信息

    ### 请求URL：
    	localhost:4001/update

    ### 请求方式：
    	POST

    ### 参数类型：

    	|参数		|是否必选 |类型     |说明
    	|header    |Y       |string   |头像名称
    	|info      |N       |string   |介绍

    ### 返回示例：
    	成功:
    	    {
    		    "code": 0,
    		    "data": {
    		        "header": "头像2",
    		        "info": "react/vue",
    		        "_id": "5ae1f088d37a442b749fc143",
    		        "username": "laoban1",
    		    }
    		}
    	失败
    	    {
    	      "code": 1,
    	      "msg": "请先登陆"
    	    }

    ## 4、获取当前的user(根据cookie)

    ### 请求URL：
    	localhost:4001/user

    ### 请求方式：
    	GET

    ### 参数类型

    	无

    ### 返回示例：
    	成功:
    	    {
    		    "code": 0,
    		    "data": {
    		        "_id": "5ae1f088d37a442b749fc143",
    		        "username": "laoban1",
    		        "__v": 0,
    		        "info": "react/vue",
    		        "header": "头像2"
    		    }
    		}
    	失败
    	    {
    	      "code": 1,
    	      "msg": "请先登陆"
    	    }


    ## 5、获取用户列表

    ### 请求URL：
    	localhost:4001/userlist

    ### 请求方式：
    	GET

    ### 参数类型:
    无

    ### 返回示例：
    	{
    	    "code": 0,
    	    "data": [
    	        {
    	            "_id": "5ae1d5d19151153d30e008fd",
    	            "username": "ds2",
    	            "__v": 0,
    	             "info": "Rect/Vue",
                     "header": "头像1"
    	        },
    	        {
    	            "_id": "5ae1ddd99ca58023d82351ae",
    	            "username": "aa",
    	            "__v": 0,
    	            "info": "Rect/Vue",
    	            "header": "头像1"
    	        }
    	    ]
    	}


    ## 6、获取当前用户的聊天消息列表

    ### 请求URL：
    	localhost:4001/msglist

    ### 请求方式：
    	GET

    ### 参数类型
    	无

    ### 返回示例：
    	{
    	    "code": 0,
    	    "data": {
    	        "users": {
    	            "5ae1d5d19151153d30e008fd": {
    	                "username": "ds2"
    	            },
    	            "5ae1ddd99ca58023d82351ae": {
    	                "username": "aa",
    	                "header": "头像1"
    	            },
    	            "5ae1df049ca58023d82351af": {
    	                "username": "aa2"
    	            },
    	            "5ae1e72aa072c522e024b18e": {
    	                "username": "bb",
    	                "header": "头像3"
    	            },
    	            "5ae1f088d37a442b749fc143": {
    	                "username": "laoban1",
    	                "header": "头像2"
    	            }
    	        },
    	        "chatMsgs": [
    				{
    	                "read": false,
    	                "_id": "5ae1f3c3a95eb824841199f1",
    	                "from": "5ae1f088d37a442b749fc143",
    	                "to": "5ae1ddd99ca58023d82351ae",
    	                "content": "aa",
    	                "create_time": 1524757443374,
    	                "__v": 0
    	            }
    			]
    	    }
    	}

    ## 7、 修改指定消息为已读
    ### 请求URL：
    	localhost:4001/readmsg

    ### 请求方式：
    	post

    ### 参数类型
    	|参数		|是否必选 |类型     |说明
    	|from       |Y       |string   |发送消息用户的id
    ### 返回示例：
    	{code: 0, data: 2}



    技术选型

