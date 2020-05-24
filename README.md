#command generator for all languages thing
This is a command generator for Minecraft Bedrock function makers who struggle to detect a specified dropped item because we all know Bedrock sucks.
##what to use this for
For example, if you wanna detect dropped apple:
```mcfunction
testfor @e[type=item,name=Apple]
```
Now, if you want this to work on all languages, you will need to do one for all languages:
```mcfunction
testfor @e[type=item,name=Ябълка]
testfor @e[type=item,name=Æble]
testfor @e[type=item,name=Μήλο]
testfor @e[type=item,name=Apfel]
testfor @e[type=item,name=Apple]
#.....
```
It is very stupid but you still have to do it. Thats why I created this node script that helps you generate these commands.
##setting up environment
All you need to do is to install node.js [here](https://nodejs.org/zh-cn/). Then, download the repo and extract everything into a folder.  
##configuration
Open `config.json` to change settings.  
**identifier** The identifier of the string. E.g: `item.apple.name`.  
**command** The command where you want to put the string in, use %s to represent the identifier. Leave blank if you want the texts only. E.g: `execute @e[type=item,name=%s] ~~~ say who dropped apple aaaaa`.
##run script
**Windows** In the folder where you extrated the code, right click on a blank space, and click "open command prompt here" or "open powershell here" depending on your system version. Then, type `node index.js` into the command prompt and wait till the script ends.  
**Non-Windows** idk  
  
Open `output.text` to get your output. You have to clear it each time before use bc im lazy.
##Non-vanilla texts
If you need this for an addon with custom items, this also provides a script that converts your lang file into program readable data. Note it might not work if your file is too big and its very buggy. Simply put the contents of `addon/resource/texts` into `repo/converter/texts`, and run the script. It will take 2 minutes, and if `data.json` is empty, increase the time and try again.