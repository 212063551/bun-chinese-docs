# 作用域和注册表

默认注册表是 registry.npmjs.org。可以在 bunfig.toml 中全局配置：

```sh
[install]
# 将默认注册表设置为字符串
registry = "https://registry.npmjs.org"
# 设置令牌
registry = { url = "https://registry.npmjs.org", token = "123456" }
# 设置用户名/密码
registry = "https://username:password@registry.npmjs.org"
```

要配置范围为特定组织的专用注册表，请执行以下操作：

```sh
[install.scopes]
# 字符串形式的注册表
"@myorg1" = "https://username:password@registry.myorg.com/"

# 使用用户名/密码的注册表
# 您可以引用环境变量
"@myorg2" = { username = "myusername", password = "$NPM_PASS", url = "https://registry.myorg.com/" }

# 具有令牌的注册表
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }

```

## `.npmrc`

Bun 当前不读取.npmrc 文件。对于私有注册表，按照上面的说明将注册表配置迁移到 bunfig.toml。
