game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"新武将",content:function (config,pack){
    
},precontent:function (){
    
},help:{"新武将":"<li>重铸部分三国杀武将。<li>《火影忍者》、《秦时明月》人物乱入无名杀，与三国群雄逐鹿中原！<li>【代码】Sukincen借鉴参考于各大神的代码<li>【配图】Sukincen<li>【录制配音】Sukincen"},config:{"sanguo":{"name":"三国新将","init":true},"qinshi":{"name":"秦时明月","init":true},"huoying":{"name":"火影忍者","init":true},"NO1":{"name":"注：以上三个选项开关是无效的","item":{}}},package:{
    character:{
        character:{
            itachi:["male","shen",3,["yuedu","retianzhao","xuzuo"],["des:宇智波鼬，木叶村宇智波一族的天才忍者，7岁忍校毕业，13岁当上暗部队长，忍术高超，擅长手里剑。宇智波一族少数开了万花筒写轮眼的人，左眼月读，能瞬间让对手陷入鼬控制的幻术之中，包括时间、空间、质量，让其受到极重的精神攻击，属精神攻击类幻术。右眼天照，聚焦即发出能烧毁一切的黑色火焰，烧毁目标前永不熄灭。双眼须佐能乎，拥有极强的攻击与防御力。少年鼬是名双重间谍，为了村子，在宇智波一族叛变木叶前选择灭族，后逃离加入并暗中调查晓组织。后与其弟佐助决战而死，佐助因此开了万花筒写轮眼。第4次忍界大战被兜用秽土转生术复活，然后与鸣人相遇发动最强幻术“别天神”，摆脱控制，与兜一战，发动禁术“伊邪那美”，让兜陷入循环的幻术中。"]],
            genie:["male","qun",3,["zongjian","jiansheng"],["des:国产第一动漫《秦时明月》中的角色，纵横家，剑法超绝，号称天下第一剑之剑圣。"]],
            zhujian:["male","shen",3,["mudun","qianshou","xianti"],["des:初代目火影——千手柱间，战乱时代中千手一族的首领，木叶村的建立者之一，二代火影千手扉间的兄长，六道仙人大筒木羽衣次子阿修罗上一代转世者 。擅长使用“木遁”，能瞬间使出仙术，其身体能量和回复力极其惊人，具有操控尾兽的能力；平定乱世，平均分配尾兽给五大国，并在终结之谷之战中一举击败宇智波斑，是宇智波斑唯一敬畏的忍者。因此凡见过其风采的人皆称其是“如同六道仙人一般的神话”，被忍界誉为“忍者之神”。在第四次忍界大战中一度被大蛇丸以秽土转生的形式复活，与同被复活的历代火影一起前往战场支援忍者联军。"]],
            weizhuang:["male","qun",4,["hengjian","jusha"],["des:国产第一动漫《秦时明月》中的角色，纵横家，剑圣盖聂的师弟，流沙组织首领。为人冷酷，武功极高。"]],
            gangshou:["female","shen",4,["reguaili","baihao"],["des:纲手，日本动漫《火影忍者》中的女性人物，火之国木叶隐村的第五代火影，初代火影千手柱间及其妻子漩涡水户的孙女，与自来也、大蛇丸并称传说中的“三忍”，最重要的人是恋人加藤断与弟弟绳树。擅长体术和医疗忍术，尤其是禁术创造再生•百豪之术，能迅速让伤口再生，从而达到疗伤效果，但风险就是术者会因此缩短寿命。 受自来也的请求，回村就任第五代火影。在后来的佩恩袭击等事件中保护着村子。在后来的第四次忍界大战中担任忍者联军总参谋，发挥着重大作用。"]],
            dashewan:["male","shen",3,["changsheng","wanshe"],["des:日本动漫《火影忍者》中的人物。火之国木叶村的叛忍，木叶村的“三忍”之一，与自来也、纲手同为第三代火影猿飞日斩的弟子。具有独身攻陷一个小国的强大实力，和近乎不老不死的恢复力，被认为比蛇还难缠。擅长研究忍术且渴望得到写轮眼，闻名于忍界。野心勃勃，由于目睹了太多人的死亡、知道生命是脆弱的而误入歧途，他认为人体中蕴含着一生都无法使用的力量，因此他想获得长生不老从而学习世间所有忍术，掌握世间的真理。其野心被多次阻断，在佐助与鼬一战中被鼬的十拳剑封印。后在第四次忍界大战中，从御手洗红豆和药师兜的身上看见了药师兜的失败，有所醒悟。之后被佐助复活，与历代火影和鹰小队前往战场支援忍者联军。"]],
            zhilaiye:["male","shen",4,["citan","renfa","xianren"],["des:自来也，日本漫画《火影忍者》及其衍生作品中的虚拟角色。火之国木叶隐村的“三忍”之一，三代火影猿飞日斩的弟子，四代目火影波风水门、长门、弥彦、小南、七代目火影漩涡鸣人的师父。他指导鸣人修行，在鸣人成长的道路上有着重要的作用。后在雨忍村刺探情报，死于“晓”首领佩恩之手。"]],
            zhishui:["male","shen",4,["shunsheng","reshouhu"],["forbidai","des:宇智波止水，日本动漫《火影忍者》中的人物。木叶村宇智波一族的天才忍者，年幼时和宇智波鼬齐名，两人有着不相上下的瞳术天赋，实力超常，擅长幻术和瞬身术，以“瞬身止水”之名威震天下。拥有最强幻术——别天神，被誉为“最强幻术忍者”、“宇智波最强”等。别天神可以在不被察觉的情况下直接入侵对方的大脑，并永久、彻底的改变对方的思想、意志和控制其行为。止水性格开朗温和，即使是战斗，也经常是用点到为止，很少伤人。止水的信条是守护木叶守护和平，甘愿在幕后做一名默默无名的忍者。在宇智波一族密谋发动政变的前夕，止水计划用别天神阻止宇智波的政变。但在计划实施前被志村团藏偷袭，失去右眼。为了避免别人为了抢夺他的眼睛而引发争斗，他将左眼挖出托付给鼬，佯装自毁双眼，投南贺河自尽。宇智波鼬由此开启了万花筒写轮眼。"]],
            ningchi:["male","shen",3,["xinbaiyan","guazhang","huitian"],["des:日向一族分家天才"]],
            feiduan:["male","shen",3,["rebusi","zhoushu"],["des:晓组织成员，邪教教徒，拥有不死之躯。飞段信仰邪神教，是邪神教的忠实教徒。他和角都合称“不死二人组”，被鬼鲛戏称为“僵尸二人组\"。飞段体术灵活，且拥有不死之身的能力，只需尝到对手的血，就能够通过诅咒使对手和自己承担同等的伤害！曾经和角都联手击败二尾人柱力二位由木人，杀死守护忍十二士之一的地陆和猿飞阿斯玛，最终被奈良鹿丸用计谋活埋于鹿林的深洞里。"]],
            ban:["male","shen",2,["zhenxing","lunmu","xinxuzuo","yiyuan"],["des:宇智波一族前任首领，宇智波佐助前一任的六道仙人长子因陀罗转世者。宇智波一族最强的男人，擅长使用“须佐能乎”以及可以和尾兽匹敌的“完成体须佐能乎”，被世人将其和千手柱间合称为“传说中的忍者”。 曾和千手柱间合作建立了第一个忍村，并将其命名为“木叶”。在黑绝的蛊惑下与千手柱间在终结之谷交战，败在柱间手下，普遍被世人认为已死亡，事实上在右眼植入了伊邪那岐，存活了下来并获得了柱间细胞。利用柱间细胞在死前开启轮回眼，通灵出外道魔像和上一次无限月读开启后产生的白绝，将轮回眼移植于长门身上。第三次忍界大战时期，在神无毗桥之战中救下宇智波带土，计划复活后进行月之眼计划。 第四次忍界大战时期被药师兜用秽土转生之术召唤。后利用带土施展外道·轮回天生之术成功复活，在吸收了再次复活的十尾后成为了十尾人柱力，发动无限月读后遭到黑绝背叛。大筒木辉夜被封印后由于体内尾兽被剥离即将死去，奄奄一息的他在和柱间敞开心扉后微笑地走向了人生真正的终点。"]],
            dayemu:["male","shen",3,["chendun","tiancheng"],["des:大野木，外号“两天秤”，三代目土影。虽然是一个矮小的老头，却拥有无比恐怖强大的忍术，比血界限界更高层次的血界淘汰——尘遁•原界剥离之术，此术发动简单迅速，但威力巨大得令人咋舌，能瞬间将一切物质分离成分子状态，无法复原，任何人一旦中招，瞬间灰飞烟灭。超轻岩之术令他能减轻物体重量甚至自身重量，在空中自由飞行，超重岩之术又能增加破坏力和接触到的物体包括人的压力，令其不能动弹或碎裂，两天秤称号由此而来。。。"]],
            kai:["male","shen",5,["bamen","resizhan"],["forbidai","des:木叶的苍蓝猛兽，擅长体术，绝招“八门遁甲”，曾开七门秒杀干杮鬼蛟，第四次忍界大战打开第八门死门，重创六道宇智波斑，濒死之际被鸣人用阴阳遁术救活"]],
            dou:["male","shen",3,["yizhi","xianfa","zhuansheng"],["des:《火影忍者》中的人物，颇具战斗智商。前期作为间谍卧底在木叶村，擅长医疗忍术。幼年时因受伤而失忆，被孤儿院院长药师野乃宇收留，但后来因为团藏要挟野乃宇，于是自愿的为野乃宇以及孤儿院去投靠团藏作为一个忍者活跃于木叶，从小就当间谍而游历各国，但团藏却安排兜与野乃宇自相残杀，自从误杀野乃宇后，兜就认为自己失去了生存意义，与此同时，大蛇丸找到了兜，邀请兜加入音隐村，自此之后便当了大蛇丸的得力助手。大蛇丸被十拳剑封印后，兜为了寻找真实的自己而去模仿大蛇丸的生存道路，移植获得了大蛇丸及其部下的能力，还靠自己在龙地洞修炼了仙人模式，并扬言利用他人来伪装自己，探索世界的真理。第四次忍界大战中，用秽土转生术复活了很多已死去的忍者，包括历代影、晓组织成员以及宇智波斑等高手，与忍者联军互怼。后在与佐助和鼬的战斗中陷入伊邪那美循环的幻术中。最后重拾自我，并前往战场救助佐助。战后被允许在木叶开设孤儿院，回到自己最向往的曾经的生活。"]],
            kakasi:["male","shen",3,["leique","fuzhi"],["des:木叶第一技师，佐助鸣人春野樱的老师，六代目火影，左眼的写轮眼来自队友宇智波带土“临死前”的赠予，据称卡卡西以此复制了上千种忍术，更熟练掌握了神威，另绝招雷切，能刺穿一切物体，曾切断过闪电，因此而得名。"]],
            chutian:["female","shen",3,["baiyan","rouquan"],["des:日向雏田，日向一族宗家女忍者，鸣人的妻子，拥有一双远距离无死角透视之眼，能看穿人体经络穴位并施以攻击，取人芳心于千里之外，易如反掌。同时习得八卦掌，集攻击防御于一身。曾在佩恩袭击木叶村时舍命救鸣人，身受重创，鸣人由此爆走，一度失控，差点被九尾占据，幸得四代火影的查克拉苏醒挽救。"]],
            daitu:["male","shen",3,["xishou","reshenwei","xianyan"],["des:宇智波带土，《火影忍者》中中期的反派角色，面具男的真实身份。火之国木叶村的宇智波一族成员，四代火影的弟子，卡卡西的队友，擅长时空间忍术“神威”、宇智波禁术、阴阳遁术等。其送给卡卡西的左眼能远距离扭曲空间转移物体，自身右眼能转移自身，实现吸收物体、身体虚化。神无毗桥之战重伤濒死，将左眼和守护暗恋的女孩野原琳的愿望一同托付给于挚友旗木卡卡西。后在一族原首领宇智波斑的阴谋下，带土目睹了野原琳死亡后痛不欲生，写轮眼直接从双勾玉开启至万花筒写轮眼，否认世界，从此走上黑暗之路，成为“晓”的实际操纵者，曾在鸣人出生当天，放出九尾，袭击木叶村，并害死四代火影夫妇，后协助宇智波鼬的灭族行动，并和药师兜发动了第四次忍界大战，更成为世间第二位十尾人柱力。 在第四次忍界大战中与漩涡鸣人的战斗中被逐渐感化，想起并渴望重拾曾经保护同伴的梦想。后帮助第七班的成员与大筒木辉夜进行了异空间对决，在替鸣人和卡卡西挡下了辉夜的共杀灰骨后牺牲，但剩下的查克拉仍在最后的时刻帮助卡卡西发动完全体须佐能乎，帮助第七班他们战胜了大筒木辉夜。最终在将最后的写轮眼托付给卡卡西后，没有遗憾地和小琳前往了另一个世界。"]],
            zhuozhu:["male","shen",3,["yandun","qianniao","rexuzuo"],["des:宇智波佐助，《火影忍者》男二号。火之国木叶隐村宇智波一族的天才忍者，六道仙人长子因陀罗的转世。 年幼时目睹宇智波一族被哥哥宇智波鼬所灭，从而走上复仇之路。在终结谷与漩涡鸣人大战一场后叛离村子并追随大蛇丸。三年后，佐助吸收了大蛇丸的力量并成功向鼬复仇，但在此之后却被宇智波带土告知了灭族的真相，万花筒写轮眼开眼，进而决定摧毁木叶。曾先后与迪达拉、八尾奇拉比对战，大闹五影会议后又与雷影、团藏对战，实力得到提升。后来，佐助与秽土转生的鼬重逢，合力打败兜，想法再次发生了变化，为了进一步了解忍者、家族、哥哥的过去，佐助与秽土转生的历代火影进行了对话，在听完其回答后决定继承鼬的意志守护木叶，并期望成为火影改变现有的忍者世界体制。 第四次忍界大战结束后，佐助因对于维护世界和平的道路选择和鸣人不同，而在终结之谷与鸣人进行了宿命之战，结果两人各断一条手臂。最终佐助被鸣人感动，认同了鸣人的道路，并重新成为木叶的一员。 此后佐助独自一人游历世界，继承鼬的意志，甘做一个无名忍者，在身后默默守护木叶及忍者世界。 "]],
            woailuo:["male","shen",3,["shazang","juefang"],["des:我爱罗，《火影忍者》系列中的人物。风之国·砂隐村的第五代风影。擅长控制沙，沙子形成绝对防御和绝招沙暴大（送）葬，拥有攻防一体的实力。小时候由于体内封印着一尾守鹤而被村人恐惧，又因为至亲之人的背叛而一度变得冷酷无情、喜好杀戮，但在和漩涡鸣人一战后，由于鸣人的影响而逐渐摆脱心魔。之后我爱罗成为第五代风影，领导并守护着砂隐村，但一度被“晓”抽去了一尾守鹤，失去生命，最后被千代牺牲生命复活。第四次忍界大战中，我爱罗担任忍界联军联队长与第四部队统领，并得知绝对防御是来自母亲守护他的意志使然和父亲的真相，一度哽咽。曾联手其他四影对战宇智波斑，但均被打败。战争落幕后，我爱罗仍持续担任风影的职位，还和鸣人及木叶村等维持着友好的关系。"]],
            mingren:["male","shen",3,["fenshen","xianshu","zuidun"],["des:漩涡鸣人，《火影忍者》系列的主角。火之国木叶忍村的忍者，四代目火影波风水门和漩涡玖辛奈之子，六道仙人次子阿修罗转世。刚出生时父母为保护村子而牺牲，并将强大的尾兽“九尾”封印于鸣人体内。成为孤儿的鸣人在孤独中长大，但在唯一认同他的老师海野伊鲁卡以及三代目火影鼓励下逐渐决心要成为火影，让所有人都认同他的存在。成为忍者后，同旗木卡卡西、宇智波佐助和春野樱组成第七班进行各种任务。 为实现理想，和守护伙伴们的羁绊，鸣人不断修炼，作为木叶“三忍”之一自来也的弟子，学会了父亲的忍术螺旋丸，后将之升级，加入风遁属性，练成威力强大的风遁手里剑，曾以此秒杀晓组织的高手角都；又练就仙术打败佩恩六道，拯救木叶；后又在众人帮助下练成“九尾模式”，移动速度惊人，尤如“金色闪光”再世，后先后与秽土转生的众高手、六道宇智波带土、六道宇智波斑、大筒木辉夜战斗，最后与包括九尾在内的伙伴们一同终结了战争，与佐助决斗，最终感化了佐助，为纷争不断的忍者世界带来和平，并实现自己成为火影和忍界英雄的梦想"]],
            shuimen:["male","shen",3,["luoxuan","shanjie","refengyin"],["forbidai","des:波风水门，四代目火影，鸣人的父亲，木叶村的英雄，天才忍者，外号“黄色闪光”，年纪轻轻便当上火影。自创忍术螺旋丸，凝聚查克拉无需结印即可发动。改良二代火影的“飞雷神”之术，只需在目标地留下术式，便能在术式之间瞬间移动或转移物体，速度极快，千里之外取人首级只在须臾之间，瞬间又遁迹千里之外，来无影去无踪，敌皆闻风丧胆，遇见可放弃任务，只管逃跑，曾在忍界大战以一己之力秒杀对方五十名上忍，名声由此大震。鸣人出生当晚，被宇智波带土掳走妻子，放出九尾狐，后发动禁术“尸鬼封尽”、“八卦封印”将九尾封印进鸣人体内后死去。第四次忍界大战中被大蛇丸切开“死神”腹部，释放出灵魂，然后用秽土转生术复活，后参与对抗宇智波带土和宇智波斑的战斗，发动短暂的仙人模式和九尾模式，帮助鸣人。。。"]],
            jiangboyue:["male","shu",4,["tiaoxin_jiangwei","guanxing_jiangwei"],["des:诸葛亮弟子"]],
            changmen:["male","shen",3,["tianzheng","tianyin","baoxing","lunhui"],["des:漩涡长门，漩涡一族后裔，忍界大战时的孤儿，后被自来也收为徒弟，早期与弥彦等人创立晓组织，六道佩恩的实际操控者，实力恐怖。先后杀了自来也、卡卡西等人，以一己之力毁了木叶，与鸣人一战，终被鸣人说服，发动轮回天生之术令死去的木叶忍者复活后死去。后来又被兜用秽土转生之术复活，最终被宇智波鼬的十拳剑封印"]],
            xinmenghuo:["male","qun",1,["xiongqi","xiangfu","蛮王"],["des:七擒七纵之孟获"]],
            wuren:["male","shen",3,["rechendun","wuchen"],["des:无，日本动漫《火影忍者》中的人物。土之国岩隐村的第二代土影，以阴谋和政治而闻名的“智将”，拥有令人无法感知查克拉的恐怖隐身能力——无尘迷塞，和超越于血继限界的血继淘汰——尘遁，并将其传授给徒弟第三代土影大野木，生前与二代水影同归于尽。死后被药师兜秽土转生，被迫参加第四次忍界大战，最终宇智波鼬解开了秽土转生，灵魂升天。"]],
            duan:["male","shen",3,["linghua","aiyuan"],["forbidai","des:加藤断，日本动漫《火影忍者》中的人物，纲手最初的恋人，梦想是要当火影。忍界大战上前线的前一天，断告诉纲手自己的愿望是成为在火影，纲手将祖传的项链送给断。不料在战争中，断身受重伤，即使是三忍之一的纲手也无力回天，最终身亡。纲手因此患上了恐血症，偏激地认为只有笨蛋才会想去当火影。直到后来鸣人出现才让纲手放下了过去的心理阴影。加藤断有一个恐怖的忍术——灵化之术，是能将自己灵化成活的灵魂，无视距离穿梭并杀害敌人的忍术，可以控制对方身体和进入他人精神世界。此术非常适合间谍活动，断凭借此术击败、杀死过很多忍者，并在五影和秽土斑的对战中用此术进入纲手的意识控制其已丧失意识的身体，成功救下恋人纲手，并给予纲手查克拉后灵魂升天。"]],
            guijiao:["male","shen",3,["jiaoji","jiaodan","shuilao"],["des:日本动漫《火影忍者》中的人物。晓组织成员之一，代号南（南斗），原本是雾隐村的忍者，也是“忍刀七人众”的一员，有着跟鲨鱼相像的面孔、肤色及尖锐的牙齿。擅长使用水遁及手上的异状大刀“鲛肌”（能吸取查克拉的大刀）进行攻击。由于体内拥有惊人的查克拉量，被称为“无尾之尾兽”。最终被迈特凯击败，自杀而亡。"]],
            liluoke:["male","shen",3,["relianhua","rexuanfeng","zuiquan"],["des:日本动漫《火影忍者》中的人物，也是《李洛克的青春全力忍传》的男主角。火之国木叶忍者村的忍者，自号“木叶美丽的苍蓝野兽”。小李是个“笨鸟先飞”型的热血少年，单纯而又热血，一心想成为一名优秀的忍者，并一直为此努力奋斗。他不会忍术和幻术，也没有与生俱来的特殊技能，但他有坚韧不拔的精神，面对困难从不畏惧。他起早贪黑，付出了比别人多几十倍的努力，纵然一次次失败，却始终坚信只要足够努力，照样可以成为优秀的忍者。"]],
            sanlei:["male","shen",1,["tuci","leidun"],["des:日本动漫《火影忍者》中的人物。雷之国云隐村的第三代雷影，四代目雷影之父，本名不详，称呼与第1、2、4代雷影一样为艾（A）。能够使用被称为“最强之矛”的地狱突刺·四本贯手和“最强之盾”的雷电护盾（曾经以一人之力单挑万名忍者并且大战三天三夜而死），甚至拥有着能与尾兽肉搏的强大能力（曾数次与八尾进行肉搏战并且不分胜负）。 第四次忍界大战中被药师兜秽土转生，与同样被秽土转生的二代目土影无、二代目水影鬼灯幻月和四代目风影罗砂前往战场大战我爱罗的第四部队，曾以一人之力压制住部分忍者联军，后被鸣人发现弱点后将其击败，并由联军封印。"]],
            luwan:["male","shen",4,["zhimou","yingmo"],["des:奈良鹿丸，日本动漫《火影忍者》中的人物。火之国木叶隐村的忍者，拥有出众的应敌策略，头脑冷静、随机应变，IQ超过200。曾谋划击败飞段，重挫角都。绝招是“影子模仿术”，比起或热血或摆酷的家伙们，他的性格虽然消极了点，但是想要平静的生活，擅长使用奈良一族秘传忍术。与父亲奈良鹿久一样深受历代火影信任。第四次忍界大战完结后，先后担任六代目火影·旗木卡卡西与七代目火影·漩涡鸣人的助手。"]],
            rewangyun:["male","qun",4,["huanji","rejugong","rechengmou"],["des:貂蝉的义父，详看百度百科"]],
            xiezi:["male","shen",3,["baiji","shayu","kuilei"],["des:日本动漫《火影忍者》中的人物。“晓”成员之一，代号玉（玉女）。被誉为天才傀儡师，人称“赤砂之蝎”。风之国砂隐村顾问千代之孙，幼年时其父母在执行任务时被“木叶白牙\"所杀，内心无比孤独，后来在千代的教导下习得傀儡术，曾经制作名为“父”与“母”的两具傀儡以抚慰自己内心的孤独。从小因为内心的孤独寂寞，而对傀儡有着超乎寻常的爱，是一个天才傀儡师，在自己青年的时期里就已经染指了人傀儡，把自己唯一的好友做成了傀儡。后来甚至将自己也做成了傀儡，后与春野樱和千代婆婆战斗被杀死。在秽土转生的时候，受到了勘九郎的话语感化，找到了自己内心深处真正的艺术，被唤醒了热爱傀儡的心，也找到了自己作为人类的一丝意义，明白了作为傀儡师的意义，把父母的两具傀儡托付给勘九郎，灵魂得以解脱。"]],
            relingju:["female","qun",3,["rejieyuan","refenxin"],["des:改版前备份的旧版灵雎"]],
            xiaoying:["female","shen",3,["baoli","yiliao"],["des:春野樱，日本动漫《火影忍者》中的女主角。新一代医疗忍者，五代目火影纲手的弟子，与漩涡鸣人、宇智波佐助隶属于旗木卡卡西领导的第七班。原本个性柔弱任性，在木叶忍者学校以忍术理论知识见长。在佐助离开木叶村后，拜第五代火影纲手为师，学成优秀的体术怪力和医疗忍术。第四次忍界大战中作为忍者联军第三部队以及医疗后勤部队的一员。具有良好的查克拉控制能力与清晰的脑力，擅长体术怪力与医疗忍术以及解除幻术。经过自己艰苦卓绝的努力奋斗，最终成长为一个贯彻自己座右铭“勇气”的优秀忍者。忍界大战结束若干年后，长大成人的樱已经成为木叶高层干部，并与佐助结婚，两人育有一女——宇智波佐良娜。"]],
            feijian:["male","shen",3,["jinshu","baofu","shuidun"],["forbidai","des:千手扉间，日本动漫《火影忍者》中的人物，火之国木叶村的第二代火影，是初代火影手手柱间的弟弟、木叶村的建立者之一，对村子的兴旺发达做出了杰出的贡献。扉间擅长水遁系忍术，能在干旱无水的地方发动大规模的水遁。同时善于研究开发忍术，开发了飞雷神之术、影分身之术及禁术秽土转生，声名显赫。在第一次忍界大战中和第二代雷影被金角银角暗算而阵亡。在第四次忍界大战中被大蛇丸秽土转生，前往战场支援忍者联军，将接受六道仙人馈赠的宇智波佐助送往战场，之后无限月读开启，扉间和其他三位被转生的火影并没有受到影响，并与他们一起赶赴战场。大筒木辉夜被封印以后，由六道仙人解除秽土转生，灵魂与其他先代影们一同回归净土。"]],
            zaibuzhan:["male","shen",3,["ansha","reshuilao","wuyin"],["des:桃地再不斩，日本热血漫画《火影忍者》中的人物。水之国雾隐村“忍刀七人众”之一，使用的武器是断刀“斩首大刀”。充满野心、铁血，但并不是无情无义的人。精通水遁忍术和暗杀术，因策划暗杀水影失败而逃离村子，成为叛忍，收留了白。在与卡卡西班一战中重伤，被鸣人感化后倒戈，与雇主同归于尽而死亡。"]],
            dingchi:["male","shen",3,["beihua","huadie"],["des:秋道丁次，日本漫画家岸本齐史作品《火影忍者》中的人物。火之国木叶村的中忍，他是猿飞阿斯玛的第十班中一名忠诚热心的队员，是鹿丸最要好的朋友之一，他用自己的行动证明了自己是队伍中的一个值得信赖的伙伴。常用忍术是肉弹战车、针刺肉弹战车、倍化术、局部倍化术、超级倍化术等家族秘术。"]],
            jinye:["female","shen",3,["zhuanxin","reyiliao"],["des:山中井野，日本动漫《火影忍者》中的女性角色。木叶忍者村的中忍，阿斯玛所领导的第十班的成员，队友是奈良鹿丸和秋道丁次，继承了山中一族的独特秘术心转身之术，能让自身精神占据对方身体，控制对方内心。同时基于强烈的上进心，学成医疗忍术。 第四次忍界大战中作为忍者联军第五部队（战斗特别部队）的一员。忍界大战结束若干年后，与佐井结婚并生有一子山中井阵。"]],
            xiaoyaozi:["male","qun",4,["renzhong","diedun"],["des:中国3D武侠动画《秦时明月》系列中的原创男性角色。 道家人宗掌门人，行踪飘忽，神龙见首不见尾，率领人宗弟子们与墨家等一同反秦。佩剑是剑谱十大名剑中排名第六的道家镇门之剑“雪霁”。"]],
            jiaodu:["male","shen",3,["yuanyu","zhongquan"],["des:日本动漫《火影忍者》中的人物。原泷忍者村精英成员，“晓”成员之一。飞段的搭档，拥有秘术“地怨虞”，能通过利用查克拉操控体内释放的黑色触手，从而夺取他人经络或心脏。包括自己的心脏，体内最多能够储存五个心脏，通过更换心脏来延长寿命，被称为“与天地同寿之人”。每个心脏都能变为用地怨虞形成的黑体怪物，其怪物能使用原心脏主人的术。其中有一颗心脏被卡卡西的雷切摧毁，一颗心脏被飞段摧毁，两颗心脏被鸣人的风遁.螺旋手里剑摧毁，最后一颗心脏被旗木卡卡西的雷切摧毁。第四次忍界大战中，被药师兜秽土转生复活，经过战斗后被忍者联军合力压制，最终宇智波鼬解开了秽土转生，角都灵魂升天。"]],
        },
        translate:{
            itachi:"宇智波鼬",
            genie:"盖聂",
            zhujian:"千手柱间",
            weizhuang:"卫庄",
            gangshou:"纲手",
            dashewan:"大蛇丸",
            zhilaiye:"自来也",
            zhishui:"止水",
            ningchi:"日向宁次",
            feiduan:"飞段",
            ban:"宇智波斑",
            dayemu:"大野木",
            kai:"迈特凯",
            dou:"药师兜",
            kakasi:"卡卡西",
            chutian:"日向雏田",
            daitu:"带土",
            zhuozhu:"佐助",
            woailuo:"我爱罗",
            mingren:"漩涡鸣人",
            shuimen:"波风水门",
            jiangboyue:"姜伯约",
            changmen:"漩涡长门",
            xinmenghuo:"孟获",
            wuren:"无",
            duan:"加藤断",
            guijiao:"鬼鲛",
            liluoke:"李洛克",
            sanlei:"三代雷影",
            luwan:"奈良鹿丸",
            rewangyun:"王允",
            xiezi:"赤砂之蝎",
            relingju:"灵雎",
            xiaoying:"春野樱",
            feijian:"千手扉间",
            zaibuzhan:"再不斩",
            dingchi:"秋道丁次",
            jinye:"山中井野",
            xiaoyaozi:"逍遥子",
            jiaodu:"角都",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            "蛮王":{
                mod:{
                    maxHandcard:function (player,num){
            return num+=3-player.hp;
            
        },
                },
                init:function (player){
        if(lib.config.mode=='identity'&&player.isZhu){
            player.maxHp--;
            player.update();
        }
    },
            },
            baoxing:{
                audio:"ext:新武将:2",
                usable:1,
                textAnimation:true,
                animationColor:"metal",
                animationStr:"地爆天星",
                enable:"phaseUse",
                viewAs:{
                    name:"nanman",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":10,"name":"shan","cardid":"1579919387","clone":{"name":"shan","suit":"diamond","number":10,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":14462},"original":"h","timeout":14428},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":12,"name":"huogong","nature":"fire","cardid":"3233078405","original":"h","clone":{"name":"huogong","suit":"diamond","number":12,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":12483},"timeout":12467},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":9,"name":"sha","cardid":"9862412437","clone":{"name":"sha","suit":"diamond","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":11941},"original":"h","_transform":"translateX(224px)","timeout":11884}],
                },
                filterCard:function (card,player){
        if(ui.selected.cards.length){
            return get.suit(card)==get.suit(ui.selected.cards[0]);
        }
        var cards=player.get('h');
        for(var i=0;i<cards.length;i++){
            if(card!=cards[i]){
                if(get.suit(card)==get.suit(cards[i])) return true;
            }
        }
        return false;
    },
                selectCard:2,
                check:function (card){
        return 6-ai.get.value(card);
    },
                ai:{
                    basic:{
                        order:10,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
            if(ai.get.attitude(viewer,target)>0&&target.num('h','shan')){
                if(!target.num('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    result:{
                        target:function (player,target){
                var num=0;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i].ai.shown==0) num++;
                }
                if(num>1) return 0;
                var nh=target.num('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                        respondSha:1,
                    },
                },
            },
            xiangfu:{
                skillAnimation:true,
                audio:"ext:新武将:1",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event,player){
        return player.maxHp>=7;
    },
                forced:true,
                priority:3,
                content:function (){
        player.die();
        
        game.createTrigger('phaseBegin','yinghun',player,trigger);
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            return 0.5;
        },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                var hasfriend=false;
                for(var i=0;i<game.players.length;i++){
                    if(game.players[i]!=target&&ai.get.attitude(game.players[i],target)>=0){
                        hasfriend=true;break;
                    }
                }
                if(!hasfriend) return;
                if(get.tag(card,'damage')==1&&target.hp==2&&!target.isTurnedOver()&&
                _status.currentPhase!=target&&get.distance(_status.currentPhase,target,'absolute')<=3) return [0.5,1];
            },
                    },
                },
            },
            xiongqi:{
                audio:"ext:新武将:2",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                textAnimation:true,
                animationStr:"雄起",
                animationColor:"fire",
                init:function (player){
        player.storage.xiongqi=false;
    },
                filter:function (event,player){
        if(player.storage.xiongqi) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
                content:function (){
        'step 0'
        player.gainMaxHp(1)
        player.discard(player.get('j'));
        player.hp=Math.min(9,player.maxHp);  
        player.draw(1);
        'step 1'
        
        if(player.isLinked()) player.link();
        'step 2'
        if(player.isTurnedOver()) player.turnOver();
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.storage.xiongqi) return false;
            if(player.hp>0) return false;
        },
                    save:true,
                    result:{
                        player:function (player){
                if(player.hp==0) return 10;
                if(player.hp<=2&&player.num('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function (player,target){
            if(!target.storage.xiongqi) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            "guanxing_jiangwei":{
                audio:"ext:新武将:2",
                audioname:["jiangwei"],
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                content:function (){
        "step 0"
        if(player.isUnderControl()){
            game.modeSwapPlayer(player);
        }
        var num=Math.min(4,game.countPlayer());
        if(player.hasSkill('yizhi')&&player.hasSkill('guanxing')){
            num=4;
        }
        var cards=get.cards(num);
        event.cards=cards;
        var switchToAuto=function(){
            _status.imchoosing=false;
            if(event.dialog) event.dialog.close();
            if(event.control) event.control.close();
            var top=[];
            var judges=player.node.judges.childNodes;
            var stopped=false;
            if(!player.countCards('h','wuxie')){
                for(var i=0;i<judges.length;i++){
                    var judge=get.judge(judges[i]);
                    cards.sort(function(a,b){
                        return judge(b)-judge(a);
                    });
                    if(judge(cards[0])<0){
                        stopped=true;break;
                    }
                    else{
                        top.unshift(cards.shift());
                    }
                }
            }
            var bottom;
            if(!stopped){
                cards.sort(function(a,b){
                    return get.value(b,player)-get.value(a,player);
                });
               
           
            }
            bottom=cards;
            for(var i=0;i<top.length;i++){
                ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
            }
            for(i=0;i<bottom.length;i++){
                ui.cardPile.appendChild(bottom[i]);
            }
            player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
            game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
            game.delay(2);
        };
        var chooseButton=function(online,player,cards){
            var event=_status.event;
            player=player||event.player;
            cards=cards||event.cards;
            event.top=[];
            event.bottom=[];
            event.status=true;
            event.dialog=ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）',cards);
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('pointerdiv');
            }
            event.switchToAuto=function(){
                event._result='ai';
                event.dialog.close();
                event.control.close();
                _status.imchoosing=false;
            },
            event.control=ui.create.control('ok','pileTop','pileBottom',function(link){
                var event=_status.event;
                if(link=='ok'){
                    if(online){
                        event._result={
                            top:[],
                            bottom:[]
                        }
                        for(var i=0;i<event.top.length;i++){
                            event._result.top.push(event.top[i].link);
                        }
                        for(var i=0;i<event.bottom.length;i++){
                            event._result.bottom.push(event.bottom[i].link);
                        }
                    }
                    else{
                        var i;
                        for(i=0;i<event.top.length;i++){
                            ui.cardPile.insertBefore(event.top[i].link,ui.cardPile.firstChild);
                        }
                        for(i=0;i<event.bottom.length;i++){
                            ui.cardPile.appendChild(event.bottom[i].link);
                        }
                        for(i=0;i<event.dialog.buttons.length;i++){
                            if(event.dialog.buttons[i].classList.contains('glow')==false&&
                                event.dialog.buttons[i].classList.contains('target')==false)
                            ui.cardPile.appendChild(event.dialog.buttons[i].link);
                        }
                        player.popup(get.cnNumber(event.top.length)+'上'+get.cnNumber(event.cards.length-event.top.length)+'下');
                        game.log(player,'将'+get.cnNumber(event.top.length)+'张牌置于牌堆顶');
                    }
                    event.dialog.close();
                    event.control.close();
                    game.resume();
                    _status.imchoosing=false;
                }
                else if(link=='pileTop'){
                    event.status=true;
                    event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆顶的牌';
                }
                else{
                    event.status=false;
                    event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆底的牌';
                }
              
               
              
                
                
                
            })
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            event.custom.replace.button=function(link){
                var event=_status.event;
                if(link.classList.contains('target')){
                    link.classList.remove('target');
                    event.top.remove(link);
                }
                else if(link.classList.contains('glow')){
                    link.classList.remove('glow');
                    event.bottom.remove(link);
                }
                else if(event.status){
                    link.classList.add('target');
                    event.top.unshift(link);
                }
                else{
                    link.classList.add('glow');
                    event.bottom.push(link);
                }
            }
            event.custom.replace.window=function(){
                for(var i=0;i<_status.event.dialog.buttons.length;i++){
                    _status.event.dialog.buttons[i].classList.remove('target');
                    _status.event.dialog.buttons[i].classList.remove('glow');
                    _status.event.top.length=0;
                    _status.event.bottom.length=0;
                }
            }
            game.pause();
            game.countChoose();
        };
        event.switchToAuto=switchToAuto;

        if(event.isMine()){
            chooseButton();
            event.finish();
        }
        else if(event.isOnline()){
            event.player.send(chooseButton,true,event.player,event.cards);
            event.player.wait();
            game.pause();
        }
        else{
            event.switchToAuto();
            event.finish();
        }
      
        
          player.draw();         
        
        "step 1"
        if(event.result=='ai'||!event.result){
            event.switchToAuto();
         
        }
        else{
            var top=event.result.top||[];
            var bottom=event.result.bottom||[];
            for(var i=0;i<top.length;i++){
                ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
            }
            for(i=0;i<bottom.length;i++){
                ui.cardPile.appendChild(bottom[i]);
            }
            for(i=0;i<event.cards.length;i++){
                if(!top.contains(event.cards[i])&&!bottom.contains(event.cards[i])){
                    ui.cardPile.appendChild(event.cards[i]);
                }
            }
            player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(event.cards.length-top.length)+'下');
            game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
            game.delay(2);
             
            
        }
          
           
    },
                ai:{
                    threaten:1.2,
                },
            },
            "tiaoxin_jiangwei":{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target.canUse({name:'sha'},player)&&target.countCards('he');
    },
                content:function (){
        "step 0"
        target.chooseToUse({name:'sha'},player,-1,'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true);
        "step 1"
        if(result.bool==false&&target.countCards('he')>0){
            player.discardPlayerCard(target,'he',true);
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1,
                        player:function (player,target){
                if(target.countCards('h')==0) return 0;
                if(target.countCards('h')==1) return -0.1;
                if(player.hp<=2) return -2;
                if(player.countCards('h','shan')==0) return -1;
                return -0.5;
            },
                    },
                    threaten:1.1,
                },
                audioname:["jiangwei","sp_jiangwei","xiahouba"],
            },
            retianzhao:{
                enable:"phaseUse",
                audio:"ext:新武将:2",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"fire",
                    suit:"diamond",
                    number:8,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":8,"name":"sha","cardid":"6893626279","_transform":"translateX(112px)","clone":{"name":"sha","suit":"diamond","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":851},"timeout":831,"original":"h"}],
                },
                prompt:"发动天照，你使用的杀可视为火杀",
                ai:{
                    expose:0.5,
                    threaten:1.5,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            lunhui:{
                audio:"ext:新武将:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                textAnimation:true,
                animationStr:"轮回天生",
                animationColor:"fire",
                init:function (player){
        player.storage.lunhui=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
           return game.dead.length>0;
    },
                content:function (){                
        "step 0"         
        var chat=['外道•轮回天生之术'].randomGet();
        player.say(chat);
        player.storage.lunhui=true; 
        event.current=player.next;                
                 var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }                 player.chooseButton(ui.create.dialog('选择1名角色复活',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 }); 
                "step 1"
                 player.unmarkSkill('lunhui')               
                 if(result.bool){
                     for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                     var dead=game.dead[i];
                     player.logSkill('lunhui',dead);
                     dead.revive(dead.maxHp);
                     dead.draw(dead.maxHp);
                     player.turnOver();                     
                     player.removeSkill('lunhui');
     }
     },
                direct:true,
                notarget:true,
                selectCard:2,
                filterCard:function (card) {
        if (card.name == 'tao' ) return true;
        return false;
    },
                position:"h",
                discard:false,
                prompt:"请选择两张桃",
                ai:{
                    expose:0.5,
                },
            },
            tianyin:{
                audio:"ext:新武将:2",
                textAnimation:true,
                animationStr:"万象天引",
                animationColor:"fire",
                usable:1,
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        if(player.isTurnedOver()) return true;
        var num=0;
        for(var i=0;i<game.players.length;i++){
            if(game.players[i].num('he')&&game.players[i]!=player&&
                ai.get.attitude(player,game.players[i])<=0){
                num++;
            }
            if(game.players[i].num('j')&&game.players[i]!=player&&
                ai.get.attitude(player,game.players[i])>0){
                num++;
            }
            if(num>=2) return true;
        }
        return false;
    },
                content:function (){
    "step 0"
    var targets=game.players.slice(0);
    targets.remove(player);
    targets.sort(lib.sort.seat);
    event.targets=targets;
    event.num=0;
    "step 1"    
     var chat=['万象天引'].randomGet();
            player.say(chat);    
    if(num<event.targets.length){
        var hej=event.targets[num].get('hej')
        if(hej.length){
            var card=hej.randomGet();
            player.gain(card,event.targets[num]);
            if(get.position(card)=='h'){
                event.targets[num].$give(1,player);
            }
            else{
                event.targets[num].$give(card,player);
            }
        }
        event.num++;
        event.redo();
    }
    "step 2"
    player.turnOver();
      },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 1.5;
            return 1;
        },
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkill('jueqing')) return [1,-2];
                    if(target.hp==1) return;
                    if(target.isTurnedOver()) return [0,-2];
                    var num=0;
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].num('he')&&game.players[i]!=player&&
                            ai.get.attitude(player,game.players[i])>0){
                            num++;
                        }
                        if(game.players[i].num('j')&&game.players[i]!=player&&
                            ai.get.attitude(player,game.players[i])>0){
                            num++;
                        }
                        if(num>2) return [0,1];
                        if(num==2) return [0.5,1];
                    }
                }
            },
                    },
                },
            },
            yuedu:{
                audio:"ext:新武将:3",
                usable:1,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);        
        var chat=['在月读的世界里，时间、空间、质量都由我所控','你已经中了我的幻术','原谅我，佐助，光明我取走了'].randomGet();
        player.say(chat);        
        "step 1"
        if(result.bool){          
            target.turnOver();
            player.storage.fenxun2=target;
            player.addTempSkill('fenxun2','phaseAfter');         
            target.addTempSkill('fengyin','phaseAfter');      
            target.addTempSkill('yijue2','phaseAfter');
            event.finish();
        }
    },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return 0;              
                if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
                    return -2;
                }
                return -0.5;
            },
                    },
                    order:9,
                },
            },
            xuzuo:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
    },
                content:function (){        
        var chat=['当双眼开了万花筒写轮眼，这个术便寄存其中','让你见识我最后的杀手锏吧','真正的战斗现在才开始'].randomGet();
        player.say(chat);    
        trigger.untrigger();
        trigger.finish();
    },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
                srlose:true,
                mark:true,
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            tianzheng:{
                audio:"ext:新武将:2",
                group:["tianzheng_more","tianzheng_less"],
                subSkill:{
                    more:{
                        audio:["tianzheng",2],
                        trigger:{
                            source:"damageBegin",
                        },
                        direct:true,
                        filter:function (event,player){
                if(!player.num('h',{color:'red'})) return false;
                return event.player.hp>=player.hp&&player!=event.player;
            },
                        content:function (){
                'step 0'
                var goon=(ai.get.attitude(player,trigger.player)<0);
                var next=player.chooseToDiscard(get.prompt('天征：是否弃置一张红色手牌令伤害＋1？',trigger.player),{color:'red'});
                next.set('ai',function(card){
                    if(_status.event.goon){
                        return 8-ai.get.value(card);
                    }
                    return 0;
                });
                next.set('goon',goon);
                next.logSkill=['tianzheng',trigger.player];
                'step 1'            
                 var chat=['神罗天征，弹死你哋呢班扑街','让世界感受痛苦吧！'].randomGet();
            player.say(chat);
                if(result.bool){
                    trigger.num++;
                }
            },
                        sub:true,
                    },
                    less:{
                        audio:["tianzheng",2],
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
                if(!player.num('h',{color:'black'})) return false;
                return event.source&&event.source.hp>=player.hp&&player!=event.source;
            },
                        direct:true,
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard('天征：是否弃置一张黑色手牌令伤害-1？',{color:'black'});
                next.set('ai',function(card){
                    var player=_status.event.player;
                    if(player.hp==1||_status.event.getTrigger().num>1){
                        return 9-ai.get.value(card);
                    }
                    if(player.hp==2){
                        return 8-ai.get.value(card);
                    }
                    return 7-ai.get.value(card);
                });
                next.logSkill='tianzheng';
                "step 1"                             
                 var chat=['神罗天征'].randomGet();
            player.say(chat);        
                if(result.bool){
                    game.delay();
                    trigger.num--;
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    expose:0.2,
                    threaten:1.5,
                },
            },
            baiyan:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"
        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
            return get.color(button.link)=='red';
        });                                                                   
        "step 1"         
        var chat=['别问我为何见到鸣人就脸红只钟情于他，因为我的白眼能透视看到鸣人过人的长处','鸣人君，多谢你！','给我look一下'].randomGet();
            player.say(chat);        
        if(result.bool){                           
        event.card=result.links[0];                       
        player.gain(event.card,target);
        target.$give(event.card,player);               
        }                                                
                                 
    },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            zhangshu:{
                audio:"ext:新武将:1",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original&&event.cards[i].original!='j') return true;
        }
        return false;
    },
                content:function (){
        player.draw();
    },
            },
            shanjie:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseUse",
                },
                logTarget:"target",
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                    targetInRange:function (card,player,target){
            if(card.number){
                if(get.distance(player,target)<=card.number) return true;
            }
        },
                },
            },
            luoxuan:{
                enable:"phaseUse",
                usable:1,
                audio:"ext:新武将:2",
                filter:function (card,player){
        return player.countCards('he',{type:'equip'});
    },
                chooseButton:{
                    dialog:function (){
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }                       
    return ui.create.dialog([list,'vcard']);                                        
        },
                    audio:2,
                    check:function (button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isOut()){
                    if(players[i].hp<players[i].maxHp){
                        if(get.attitude(player,players[i])>0){
                            if(players[i].hp<2){
                                lose--;
                                recover+=0.5;
                            }
                            lose--;
                            recover++;
                        }
                        else if(get.attitude(player,players[i])<0){
                            if(players[i].hp<2){
                                lose++;
                                recover-=0.5;
                            }
                            lose++;
                            recover--;
                        }
                    }
                    else{
                        if(get.attitude(player,players[i])>0){
                            lose--;
                        }
                        else if(get.attitude(player,players[i])<0){
                            lose++;
                        }
                    }
                }
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function (links,player){                   
        return {
                filterCard:true,   
                filterCard:{
                  type:"equip",
                },           
                selectCard:1,                   
                position:'he',               
                popname:true,
                viewAs:{name:links[0][2]},
            }                          
        },
                    prompt:function (links,player){           
           
            return '选择任意一张装备牌当作'+get.translation(links[0][2])+'使用';                 
        },
                },
                ai:{
                    order:8,
                    expose:0.8,
                    result:{
                        player:function (player){
                var num=0;
                var cards=player.getCards('he');                                  
                if(card.name=='bagua'&&card.name=='renwang') return 0         
                for(var i=0;i<cards.length;i++){
                    num+=Math.max(0,get.value(cards[i],player,'raw'));
                }
                num/=cards.length;
                num*=Math.min(cards.length,player.hp);
                return 12-num;
            },
                    },
                    threaten:1.5,
                },
            },
            yandun:{
                audio:"ext:新武将:3",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){                       
           player.viewHandcards(target);                  
           event.target.damage("fire");      
        }
        else{
            player.draw();
        }
    },
                ai:{
                    order:function (name,player){
            var cards=player.getCards('h');
            if(player.countCards('h','sha')==0){
                return 1;
            }
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                    return 9;
                }
            }
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },
                        target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
            },
                    },
                    threaten:1.3,
                },
            },
            rexuzuo:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
    },
                content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+1;
        },
                },
                srlose:true,
                mark:true,
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            qianniao:{
                enable:"phaseUse",
                audio:"ext:新武将:2",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                    suit:"club",
                    number:9,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":9,"name":"sha","cardid":"502041124","clone":{"name":"sha","suit":"club","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":6919},"original":"h","_transform":"translateX(0px)","timeout":6898}],
                },
                prompt:"发动千鸟，你使用的杀可附带雷属性",
                ai:{
                    expose:0.5,
                    threaten:1.5,
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            xianshu:{
                audio:"ext:新武将:2",
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw(player.hp);
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            shazang:{
                mod:{
                    globalFrom:function (from,to,distance){
            if(from.hp==1||from.num('h')==1)return distance-Infinity;
        },
                    selectTarget:function (card,player,range){ 
            if(player.hp==1||player.num('h')==1){
if(range[1]==-1) return;
if(card.name=='sha'||card.name=='juedou'||card.name=='shunshou'||card.name=='guohe') range[1]+=Infinity;}
},
                },
                audio:"ext:新武将:2",
                ai:{
                    maixie:true,
                    expose:0.5,
                    threaten:1.5,
                },
            },
            juefang:{
                audio:"ext:新武将:2",
                group:["juefang_less","juefang_more"],
                subSkill:{
                    less:{
                        audio:"ext:新武将:1",
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        filter:function (event,player){
        return event.card.name=='sha';
    },
                        content:function (){
        "step 0"
        var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.player.chooseToDiscard('绝防：弃置一张基本牌，否则此牌对'+get.translation(player)+'无效',function(card){
            return get.type(card)=='basic';
        }).set('ai',function(card){
            if(_status.event.eff>0){
                return 10-get.value(card);
            }
            return 0;
        }).set('eff',eff);
        "step 1"
        if(result.bool==false){
            trigger.finish();
            trigger.untrigger();
        }
    },
                        sub:true,
                    },
                    more:{
                        audio:"ext:新武将:1",
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        priority:15,
                        check:function (event,player){
        if(player==event.player) return true;
        return false;
    },
                        filter:function (event,player){
        return get.type(event.card,'trick')=='trick';
    },
                        content:function (){
        trigger.untrigger();
        trigger.finish();
    },
                        sub:true,
                    },
                    ai:{
                        order:10,
                        maixie:true,
                        notrick:true,
                        effect:{
                            target:function (card,player,target,current){
                if(card.name=='sha'&&get.attitude(player,target)<0){
                    if(_status.event.name=='juefang') return;
                    
                    
                    
                    
                    var bs=player.getCards('h',{type:'basic'});
                    if(bs.length<2) return 0;
                    
                    if(bs.length<=3&&player.countCards('h','sha')<=1){
                        for(var i=0;i<bs.length;i++){
                            if(bs[i].name!='sha'&&get.value(bs[i])<7){
                                return [1,0,1,-0.5];
                            }
                        }
                        return 0;
                    }
                    return [1,0,1,-0.5];
                }
            },
                        },
                        sub:true,
                    },
                },
            },
            reshenwei:{
                audio:"ext:新武将:2",
                enable:"chooseToUse",
                filterCard:{
                    type:"equip",
                },
                position:"he",
                viewAs:{
                    name:"wuxie",
                    suit:"club",
                    number:2,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":2,"name":"renwang","cardid":"8055923284","clone":{"name":"renwang","suit":"club","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1397},"original":"h","timeout":1372}],
                },
                filter:function (event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                viewAsFilter:function (player){
        return player.countCards('he',{type:'equip'})>0;
    },
                prompt:"将一张装备区内的牌当无懈可击使用（神威右眼转移自身虚化）",
                check:function (card){return 8-get.equipValue(card)},
                threaten:1.2,
                group:"reshenwei_move",
                subSkill:{
                    move:{
                        trigger:{
                            player:"turnOverEnd",
                        },
                        direct:true,
                        audio:2,
                        filter:function (event,player){
                return !player.isTurnedOver()&&player.canMoveCard();
            },
                        content:function (){
                "step 0"
                player.chooseToDiscard('he',get.prompt('reshenwei'),'弃置一张牌并移动场上的一张牌（神威左眼远距扭曲空间）',lib.filter.cardDiscardable).set('ai',function(card){
                    if(!_status.event.check) return 0;
                    return 7-get.value(card);
                }).set('check',player.canMoveCard(true)).set('logSkill','reshenwei');
                "step 1"
                if(result.bool){
                    player.moveCard(true);
                }
                else{
                    event.finish();
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            xishou:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.num('he')>0;
    },
                content:function (){
 'step 0' 
    player.chooseTarget('请选择一名目标，然后获得其所有牌',get.prompt('xishou'),function(card,player,target){
        return target!=player&&target.num('he')>0;
    }).set("ai",function(target){
            return get.damageEffect(target,player,player);
        
    });
    'step 1'
      if(result.bool){    
      player.chooseToDiscard(1,'he',true);    
        for(var i=0;i<result.targets.length;i++){
           player.logSkill('xishou',result.targets);            
           player.gainPlayerCard(999,result.targets[i],'he',true)            
    };
      };
    'step 2'
    player.turnOver()
      },
                ai:{
                    order:3,
                    result:{
                        player:function (player){
                if(player.classList.contains('turnedover')) return 10;
                return 0;
            },
                        target:function (player,target){
                if(target.countCards('h')>target.hp) return target.hp-target.countCards('h');
                return 0
            },
                    },
                    threaten:0.5,
                    effect:{
                        target:function (card){
                if(card.name=='guiyoujie') return [0,2];
            },
                    },
                },
            },
            refengyin:{
                audio:"ext:新武将:2",
                unique:true,
                mark:true,
                direct:true,
                textAnimation:true,
                animationStr:"尸鬼封尽",
                animationColor:"fire",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.hp>0;
    },
                init:function (player){
        player.storage.refengyin=false;
    },
                intro:{
                    content:"limited",
                },
                content:function (){
         "step 0"          
         player.storage.refengyin=true; 
         player.chooseTarget('请选择一名目标，弃置令其技能失效',get.prompt('refengyin'),function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
                return get.damageEffect(target,player,player);
            
        });
        'step 1'                   
                 var chat=['尸鬼封尽'].randomGet();
            player.say(chat);
         player.unmarkSkill('refengyin')          
          if(result.bool){           
            for(var i=0;i<result.targets.length;i++){
                player.logSkill('refengyin',result.targets);            
                result.targets[i].clearSkills();                                   
                player.loseHp(player.hp);
                player.removeSkill('refengyin');                                                         
        };
          };
 
    },
                ai:{
                    threaten:0.3,
                    expose:0.6,
                    result:{
                        target:function (player,target){
                return -target.hp;                              
            },
                    },
                    order:2,
                },
            },
            leique:{
                enable:"phaseUse",
                audio:"ext:新武将:2",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                    number:11,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":11,"name":"sha","cardid":"2543617317","original":"h","clone":{"name":"sha","suit":"heart","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":7129},"_transform":"translateX(0px)","timeout":7104}],
                    suit:"heart",
                },
                prompt:"发动雷切，你使用的杀无视防具，并附带雷属性",
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            yizhi:{
                audio:"ext:新武将:2",
                trigger:{
                    player:["damageBegin"],
                },
                forced:true,
                priority:20,
                unique:true,
                content:function (){


   "step 0"              

        var skills=[]; 

        for(var i in lib.character){ 

            for(var j=0;j<lib.character[i][3].length;j++){

   var info=lib.skill[lib.character[i][3][j]];

                if(info&&(info.gainable||!info.unique)){

                    skills.add(lib.character[i][3][j]); 

                }

            } 

        }

        var link=skills.randomGet();                    

        player.addSkill(link);                    

        player.mark(link,{

            name:get.translation(link),

            content:lib.translate[link+'_info']

        });

        game.log(player,'获得技能','【'+get.translation(link)+'】');        

    },
                ai:{
                    threaten:1.8,
                },
            },
            xianfa:{
                audio:"ext:新武将:2",
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw();
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            zhuansheng:{
                audio:"ext:新武将:2",
                unique:true,
                usable:1,
                textAnimation:true,
                animationStr:"秽土转生",
                animationColor:"fire",
                enable:"phaseUse",
                filter:function (event,player){
           return game.dead.length>0&&player.countCards('h','tao')>0;                                          
    },
                content:function (){                
        "step 0"         
        event.current=player.next;                
                 var list=[];
                 for(var i=0;i<game.dead.length;i++){
                     list.push(game.dead[i].name);
                 }                 player.chooseButton(ui.create.dialog('选择1名已阵亡的角色复活',[list,'character']),function(button){
                 for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
                     return ai.get.attitude(_status.event.player,game.dead[i]);
                 }); 
                "step 1"                 
                var chat=['秽土转生之术','这个术非常完美，没有风险'].randomGet();
            player.say(chat);                
                 if(result.bool){
                     for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
                     var dead=game.dead[i];                    
                     var myid=player.identity;
            if(player.identity=='zhu'){myid='zhong'};                          
                dead.identity=myid;
                dead.setIdentity();                        
                     player.logSkill('zhuansheng',dead);
                     dead.revive(2);
                     dead.draw(2);                   
                     player.loseMaxHp();   
                 }                                                                    
     },
                direct:true,
                notarget:true,
                selectCard:1,
                filterCard:function (card) {
        if (card.name == 'tao' ) return true;
        return false;
    },
                position:"h",
                discard:false,
                prompt:"请选择一张桃",
                ai:{
                    expose:0.5,
                },
            },
            fenshen:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                selectTarget:[1,3],
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                multitarget:true,
                multiline:true,
                content:function (){
        player.chooseToCompare(targets).callback=lib.skill.fenshen.callback;
    },
                init:function (player){
        player.storage.fenshen=0;
    },
                intro:{
                    name:"分身",
                    content:"mark",
                },
                chat:["万年吊车尾","木叶的灾星","别浪费查克拉了","黄头小儿","雏田是你的，佐助是我的","九尾狐狸","口遁对我没用","你是不可能当上火影的","我从未见过有如此厚顔无耻之人！"],
                callback:function (){
'step 0'
event.num1=event.card1.number;
event.num2=event.card2.number;

'step 1'
                
if(result.bool){
    if(event.num1<player.storage.fenshen){
        event.num1+=player.storage.fenshen;
    }
    else{
        player.getStat().skill.fenshen--;
    }
}
'step 2'
if(event.num1>event.num2){
    target.chooseToDiscard('he','弃置一张牌并受到一点火焰伤害，或令'+get.translation(player)+'摸两张牌并失去一点体力').set('ai',function(card){
   if(ai.get.attitude(target,player)>0) return -ai.get.value(card);
        return 6-ai.get.value(card);
    });
}
else{   
    target.chat(lib.skill.fenshen.chat[player.storage.fenshen]);
    game.delay();
    player.storage.fenshen++;
    player.markSkill('fenshen');
    if(player.storage.fenshen>=9){
        player.die();
    }
    else{
        player.chooseToDiscard('he','弃置一张牌令目标角色受到一点火焰伤害，或摸两张牌并失去一点体力').set('ai',function(){return -1;});
        }
      }
 'step 3'
 if(!result.bool){   
     player.draw(2);  
     player.loseHp();
}
        else{       
         event.target.damage(); 
        }
    },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                var num=game.countPlayer(function(current){
                    return get.attitude(player,current)<0&&current!=player&&current.countCards('h');
                });
                if(num>3) num=3;
                
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    if(get.value(hs[i])<=6){
                        switch(hs[i].number){
                            case 13:return -1;
                            case 12:if(player.storage.fenshen+num<=8) return -1;break;
                            case 11:if(player.storage.fenshen+num<=7) return -1;break;
                            default:if(hs[i].number>5&&player.storage.fenshen+num<=8) return -1;
                        }
                    }
                }
                return 0;
            },
                    },
                },
            },
            xianyan:{
                audio:"ext:新武将:2",
                srlose:true,
                trigger:{
                    player:"dieBegin",
                },
                direct:true,
                textAnimation:true,
                animationStr:"让它帮你看清未来",
                animationColor:"fire",
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('xianyan'),function(card,player,target){
            return player!=target;
        }).ai=function(target){
            var num=get.attitude(player,target);
            if(num>0){
                if(target.isDamaged()) return 2;
                return 1;
            }
            return 0;
        }
        "step 1"               
        var chat=['这只眼睛会帮你看清未来'].randomGet();
            player.say(chat);
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('xianyan',target);
            var n=[1,2].randomGet();
            if(n==1){target.addSkill("reshenwei");
            target.recover();
                    };
            if(n==2){target.addSkill("xishou");            
            target.recover();
                    };
        }
    },
                ai:{
                    expose:0.5,
                },
            },
            bamen:{
                audio:"ext:新武将:2",
                trigger:{
                    player:["phaseUseBegin","changeHp","changeMaxHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["mashu","paoxiao","fuqi","anjian"],
                content:function (){
        player.removeAdditionalSkill('bamen');
        var list=[];         
        if(player.hp<=4){
            list.push('mashu');
        }  
        if(player.hp<=3||player.maxHp<=1){
            list.push('paoxiao');
        }
        if(player.hp<=2||player.maxHp<=1){
            list.push('fuqi');
        }
        if(player.hp<=1||player.maxHp<=1){
            list.push('anjian');
        }
        if(list.length){
            player.addAdditionalSkill('bamen',list);
        }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            fuzhi:{
                audio:"ext:新武将:2",
                trigger:{
                    player:["phaseBefore","phaseEnd"],
                    global:"gameDrawAfter",
                },
                direct:true,
                content:function (){
        "step 0"
        if(player.countCards('he')){
            player.chooseTarget({
                prompt:get.prompt('fuzhi'),                                                             
                filterTarget:function(card,player,target){
                    if(target==player) return false;                    
                    var name=target.name.indexOf('unknown')==0?target.name2:target.name;
                    if(name==player.storage.fuzhi) return false;
                    var info=lib.character[name];
                    if(info){
                        var skills=info[3];
                        for(var j=0;j<skills.length;j++){
                            if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                                !lib.skill[skills[j]].unique&&!player.hasSkill(skills[j])){
                                return true;
                            }
                        }
                    }
                    return false;
                },
                ai1:function(card){
                    if(player.additionalSkills.fuzhi&&player.additionalSkills.fuzhi.length>0) return 0;
                    return 7-get.value(card);
                },
                ai2:function(target){
                    if(target.isMin()) return 0;
                    return -target.maxHp;
                }
            });
        }
        else{
            event.finish();
        }
        "step 1"
        if(result.bool){            
            var chat=['依葫芦画瓢，写轮眼－－复制','你会的忍术我也会，就问你怕未？'].randomGet();
            player.say(chat);                        
            player.unmark(player.storage.fuzhi+'_charactermark');
            player.logSkill('fuzhi',result.targets);
            var name=result.targets[0].name;
            if(name.indexOf('unknown')==0){
                name=result.targets[0].name2;
            }
            var list=[];
            var skills=lib.character[name][3];
            for(var j=0;j<skills.length;j++){
                if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                    !lib.skill[skills[j]].unique&&!player.hasSkill(skills[j])){
                    list.push(skills[j]);
                }
            }
            player.addAdditionalSkill('fuzhi',list);
            player.markCharacter(name,null,true,true);
            game.addVideo('markCharacter',player,{
                name:'写轮眼•复制',
                content:'',
                id:'fuzhi',
                target:name
            });
            player.storage.fuzhi=name;
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            resizhan:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseUseBefore",
                },
                unique:true,
                mark:true,
                textAnimation:true,
                animationStr:"燃烧吧，青春！",
                animationColor:"fire",
                init:function (player){
        player.storage.resizhan=false;
    },
                intro:{
                    content:"limited",
                },
                check:function (){return 1;},
                content:function (){
        'step 0'      
        player.storage.resizhan=true;    
        player.unmark();      
        event.cards=get.cards(8);  
        'step 1'          
        var chat=['燃烧吧，青春！','我会化为养分，来年春天定会长出新芽'].randomGet();
            player.say(chat);                                                
        player.gain(event.cards);
        player.loseMaxHp(player.maxHp-1);
        player.removeSkill('resizhan');             
    },
                ai:{
                    order:1,
                    threaten:2,
                    expose:0.8,
                },
            },
            chendun:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){               
        'step 0'
        player.chooseToCompare(target);        
        var chat=['尘遁•原界剥离之术','再见了'].randomGet();
            player.say(chat);        
        "step 1"
        if(result.bool){  
            target.loseMaxHp();
            target.draw();                                                   
        }
        else{
            target.damage();      
        }
    },
                ai:{
                    order:function (name,player){
            var cards=player.getCards('h');
            if(player.countCards('h','sha')==0){
                return 1;
            }
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                    return 9;
                }
            }
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },
                        target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
            },
                    },
                    threaten:1.3,
                },
            },
            lunmu:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.target.countCards('he')&&event.num>0);
        if(event.target.countCards('he')==0) return false;                 
      },
                content:function (){
               
        player.gainPlayerCard([1,trigger.num],get.prompt('lunmu',trigger.player),trigger.player,get.buttonValue,'he').set('logSkill',['lunmu',trigger.player]);
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
            },
            rebusi:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"dieBefore",
                },
                changeHp:true,
                forced:true,
                filter:function (event,player){return player.maxHp>0&&player.hp<=0},
                content:function (){
        "step 0"
        event.card=get.cards()[0];
        if(player.storage.rebusi==undefined) player.storage.rebusi=[];
        player.storage.rebusi.push(event.card);
        player.syncStorage('rebusi');
        player.showCards(player.storage.rebusi,'不死之身')
        player.markSkill('rebusi');
        "step 1"
        for(var i=0;i<player.storage.rebusi.length-1;i++){
            if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.rebusi[i])) return;
        }
        trigger.untrigger();
        trigger.finish();
        if(player.hp<=0){
            player.hp=2;
            player.update();
        }   
      
    },
                mod:{
                    maxHandcard:function (player,num){
            if(player.storage.rebusi&&player.storage.rebusi.length) return num-player.hp+player.storage.rebusi.length;
        },
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
            if(storage&&storage.length){
                player.$throw(storage);
                for(var i=0;i<storage.length;i++){
                    ui.discardPile.appendChild(storage[i]);
                }
                delete player.storage.rebusi;
            }
        },
                },
            },
            zhenxing:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                viewAs:{
                    name:"wanjian",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":9,"name":"sha","cardid":"7088160271","original":"h","clone":{"name":"sha","suit":"diamond","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1363},"timeout":1227},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":5,"name":"sha","cardid":"6363922298","original":"h","clone":{"name":"sha","suit":"club","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1364},"timeout":1228}],
                },
                filterCard:{
                    name:"sha",
                },
                filter:function (event,player){
        return player.countCards('h','sha')>1;
    },
                selectCard:2,
                alter:true,
                usable:1,
                ai:{
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            tiancheng:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"compare",
                    target:"compare",
                },
                direct:true,
                filter:function (event){
        return !event.iwhile;
    },
                content:function (){               
     "step 0"       
        player.chooseControl('超重岩之术','超轻岩之术','cancel2',function(){          
            if(num1<num2){
                return '超重岩之术';
            }            
            if(num1>num2){
                return '超轻岩之术';
            }
            return 'cancel2';
        });
        "step 1"        
        var num=game.countPlayer();
        if(result.control=='超重岩之术'){
 var chat=['都化成尘埃消失吧','就让你们见识下老头我的厉害'].randomGet();
            player.say(chat);   
            trigger.num1+=num;        
            player.logSkill('tiancheng');
        }
        else if(result.control=='超轻岩之术'){
 var chat=['又闪到腰了，疼。。。','真的要服老了吗？'].randomGet();
            player.say(chat);   
            trigger.num2+=num;          
            player.logSkill('tiancheng');     
    }
    },
                ai:{
                    order:7,
                },
            },
            zhoushu:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"damage",
                },
                animationStr:"你已被我诅咒了",
                textAnimation:true,
                animationColor:"fire",
                filter:function (event,player){         
        return game.players.length>1;  
        return (event.source!=undefined);        
    },
                init:function (player){
        player.storage.zhoushu=false;
    },
                intro:{
                    content:"limited",
                },
                content:function (){
        'step 0'
        player.storage.zhoushu=true;
        player.chooseTarget('选择【死司凭血】的目标',lib.translate.zhoushu_info,true,function(card,player,target){
            return target!=player&&!target.hasSkill('zhoushu2');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 1'                
        var chat=['你已经被我诅咒了','来啊！互相伤害啊！'].randomGet();
            player.say(chat);        
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            game.log(target,'成为了','【死司凭血】','的目标');
            player.storage.zhoushu2=target;
            player.addSkill('zhoushu2');          
            player.removeSkill('zhoushu');
        }                    
                         
    },
            },
            "zhoushu3":{
                trigger:{
                    global:"dieAfter",
                },
                silent:true,
                filter:function (event,player){
        return event.player==player.storage.zhoushu2;
    },
                content:function (){
        player.removeSkill('zhoushu2');      
        if(!player.hasSkill('zhoushu')){      
        player.addSkill('zhoushu');
        game.log(player,'刷新了技能','【咒术】');      
        player.update();
      }                  
    },
                forced:true,
                popup:false,
            },
            "zhoushu2":{
                mark:"character",
                intro:{
                    content:"当你受到伤害后，$受到等量的伤害",
                },
                nopop:true,
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
        return player.storage.zhoushu2&&player.storage.zhoushu2.isIn()&&event.num>0;
    },
                content:function (){
        'step 0'
        game.delay(0.5);
        var chat=['你已经被我诅咒了','来啊！互相伤害啊！'].randomGet();
            player.say(chat);                 
        'step 1'
        var target=player.storage.zhoushu2;
        player.line(target,'green');
        target.logSkill('zhoushu');
        target[trigger.name](trigger.num);
        game.delay();
    },
                group:"zhoushu3",
                onremove:true,
            },
            yiyuan:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"dying",
                },
                animationStr:"完全体须佐能乎",
                textAnimation:true,
                animationColor:"metal",
                direct:true,
                init:function (player){
        player.storage.yiyuan=false;
    },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){   
        return player.countCards('h')>0;
        return game.hasPlayer(function(current){
            return current.maxHp>player.maxHp;          
        });
    },
                filterCard:true,
                selectCard:-1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        'step 0'
        player.storage.yiyuan=true;        
        player.chooseTarget(get.prompt('yiyuan'),function(card,player,target){
            return target.maxHp>player.maxHp;
        }).set('ai',function(target){
            return (get.attitude(_status.event.player,target)-2)*target.maxHp;
        });
        'step 1'       
       var chat=['那是一个只有和平，只有胜利，只有爱的世界','我已将我的力量给了你，将来再还这个恩情','拥有森罗万象之力，开山裂海，实力堪比尾兽，就凭我宇智波斑这个完全体须佐能乎'].randomGet();
            player.say(chat);        
        if(result.bool){ 
            var cards=player.getCards('h',function(card){
                return player.countCards('h');       
            });   
            var target=result.targets[0];            
            player.logSkill('yiyuan',target);
            player.$give(cards,target);
            target.gain(cards,player);
            player.gainMaxHp(target.maxHp-player.maxHp,true);
            player.recover(target.maxHp);
            game.delay();
            player.removeSkill('yiyuan');
        }
    },
                ai:{
                    order:5,
                    maixue:true,
                },
            },
            xinxuzuo:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        if(event.nature&&player.countCards('h')) return true;
        if(!event.nature&&!player.countCards('h')) return true;
        return false;
    },
                content:function (){
        trigger.untrigger();
        trigger.finish();                
       var chat=['哪个大人会对小孩动怒？','拥有森罗万象之力，开山裂海，实力堪比尾兽，就凭我宇智波斑这个完全体须佐能乎'].randomGet();
            player.say(chat);        
    },
                mod:{
                    selectTarget:function (card,player,range){
if(card.name=='sha'&&range[1]!=-1) range[1]++;
},
                },
                srlose:true,
                mark:true,
                ai:{
                    nofire:function (player){
            return player.countCards('h')>0;
        },
                    nothunder:function (player){
            return player.countCards('h')>0;
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'natureDamage')&&target.countCards('h')>0) return 0;
                if(card.name=='tiesuo'&&target.countCards('h')>0)    return [0,0];
                if(!get.tag(card,'natureDamage')&&!target.countCards('h')) return [0,0];
            },
                    },
                },
                intro:{
                    content:function (storage,player){
            var str='';
            if(player.countCards('h')){
                str+='防止属性伤害';
            }
            else{
                str+='防止非属性伤害';
            }
            return str;
        },
                },
            },
            xinbaiyan:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                content:function (){
        "step 0"        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
            return get.color(button.link)=='black';
        });                                                                   
        "step 1"           
        var chat=['一切都逃不过我的双眼'].randomGet();
            player.say(chat);
        if(result.bool){                           
        event.card=result.links[0];                       
        player.gain(event.card,target);
        target.$give(event.card,player);               
        }                                                
                                 
    },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            rouquan:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){        
        if(player==_status.currentPhase) return false;        
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='h') num+=1;
        }
        player.draw(num);
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
            huitian:{
                audio:"ext:新武将:2",
                trigger:{
                    global:["shaBegin","juedouBegin"],
                },
                filter:function (event,player){
        return get.distance(player,event.target)<=1;
    },
                check:function (event,player){
        return get.attitude(player,event.target)>=0;
    },
                content:function (){                  
       var chat=['扑街，滚远点','回天！'].randomGet();
            player.say(chat);                
        player.draw();
    },
                ai:{
                    threaten:1.1,
                },
            },
            zuidun:{
                audio:"ext:新武将:2",
                group:["zuidun_source","zuidun_target"],
                subSkill:{
                    source:{
                        audio:1,
                        trigger:{
                            source:"damageBefore",
                        },
                        filter:function (event,player){
                return event.card&&event.card.name=='sha';
            },
                        check:function (event,player){
                if(ai.get.damageEffect(event.player,player,player)<=0) return true;
                return false;
            },
                        content:function (){
                'step 0'
                player.logSkill('zuidun');
                if(trigger.player.num('h')){
                    trigger.player.chooseToDiscard(true);
                }
                'step 1'               
                trigger.untrigger();
                trigger.finish();
            },
                        sub:true,
                    },
                    target:{
                        audio:1,
                        trigger:{
                            target:"shaBefore",
                        },
                        direct:true,
                        filter:function (event,player){
                return player.num('h');
            },
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard(get.prompt('zuidun'));
                next.set('ai',function(card){
                    var player=_status.event.player;
                    var trigger=_status.event.getTrigger();
                    if(ai.get.attitude(player,trigger.player)>0){
                        return 9-ai.get.value(card);
                    }
                    if(player.num('h',{name:'shan'})) return -1;
                    return 7-ai.get.value(card);
                });
                next.logSkill='zuidun';
                "step 1"
                if(result.bool){
                    trigger.player.draw();
                    trigger.untrigger();
                    trigger.finish();
                }
            },
                        sub:true,
                    },
                },
            },
            hengjian:{
                audio:"ext:新武将:3",
                enable:"phaseUse",
                filterCard:{
                    name:"sha",
                },
                filter:function (event,player){
        return player.countCards('h','sha')>1;
    },
                selectCard:2,
                check:function (card){
        var num=0;
        var player=_status.event.player;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            if(lib.filter.targetEnabled({name:'sha'},player,players[i])&&
            get.effect(players[i],{name:'sha'},player)>0){
                num++;
                if(num>1) return 8-get.value(card);
            }
        }
        return 0;
    },
                viewAs:{
                    name:"sha",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":9,"name":"sha","cardid":"7589100279","original":"h","_transform":"translateX(336px)","clone":{"name":"sha","suit":"diamond","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1220},"timeout":1117},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":8,"name":"sha","cardid":"4945548294","_transform":"translateX(448px)","clone":{"name":"sha","suit":"diamond","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":1221},"timeout":1118,"original":"h"}],
                },
                selectTarget:[1,Infinity],
                filterTarget:function (card,player,target){
        return lib.filter.targetEnabled({name:'sha'},player,target);
    },
                ai:{
                    order:function (){
            return get.order({name:'sha'})+0.1;
        },
                    effect:{
                        player:function (card,player){
                if(_status.currentPhase!=player) return;
                if(card.name=='sha'&&player.countCards('h','sha')<2&&!player.needsToDiscard()){
                    var num=0;
                    var player=_status.event.player;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(lib.filter.targetEnabled({name:'sha'},player,players[i])&&
                        get.attitude(player,players[i])<0){
                            num++;
                            if(num>1) return 'zeroplayertarget';
                        }
                    }
                }
            },
                    },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
                group:"luanjian2",
            },
            qianshou:{
                audio:"ext:新武将:2",
                mark:true,
                trigger:{
                    global:"useCard",
                },
                priority:5,
                filter:function (event,player){
        if(get.type(event.card)!='trick') return false;       
        if(get.info(event.card).multitarget) return false;
        if(event.targets.length<2) return false;       
        return true;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('qianshou'),
            [1,trigger.targets.length],function(card,player,target){
            return _status.event.getTrigger().targets.contains(target);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            if(game.phaseNumber>game.players.length*2&&trigger.targets.length>=game.players.length-1){
                return -get.effect(target,trigger.card,trigger.player,_status.event.player);
            }
            return -1;
        });
        "step 1"       
        var chat=['斑，住手！我们是朋友！','千手神通'].randomGet();
            player.say(chat);                      
        if(result.bool){         
            player.logSkill('qianshou',result.targets);         
            for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
            }
            game.delay();
        }
    },
                ai:{
                    order:8,
                },
            },
            xianti:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                alter:true,
                filter:function (event,player){
        if(get.is.altered('xianti')){
            return player.countCards('h')<player.hp;
        }
        else{
            return player.countCards('h')<player.maxHp;
        }
    },
                content:function (){
        if(get.is.altered('xianti')){
            player.draw(player.hp-player.countCards('h'));
            player.recover();
        }
        else{
            player.draw(player.maxHp-player.countCards('h'));
            player.recover();
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            "jusha2":{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                discard:false,
                line:true,
                prepare:"give",
                filter:function (event,player){       
        if(player.countCards('h','sha')+player.countCards('h','jiu')==0) return 0;
        return game.hasPlayer(function(target){
            return target!=player&&target.hasSkill('jusha',player);
        });
    },
                filterCard:function (card){
        return (card.name=='sha'||card.name=='jiu')
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.hasSkill('jusha',player);
    },
                usable:1,
                forceaudio:true,
                content:function (){
        target.gain(cards,player);
    },
                ai:{
                    expose:0.3,
                    order:4,
                    result:{
                        target:5,
                    },
                },
            },
            jusha:{
                audio:"ext:新武将:2",
                unique:true,
                global:"jusha2",
            },
            jiansheng:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){                              
          player.draw(player.countCards());       
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing')) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*3];
                    if(target.hp==3) return [1,get.tag(card,'damage')*2];
                    if(target.hp==2) return [1,get.tag(card,'damage')*1];
                }
            },
                    },
                },
            },
            zongjian:{
                mod:{
                    targetInRange:function (card){
            if(card.name=='sha') return true;
        },
                },
                audio:"ext:新武将:3",
                trigger:{
                    player:"shaBegin",
                },
                logTarget:"target",
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function (event,player){
        if(event.target.num('h')<player.num('h')) return true;
        if(event.target.hp>player.hp) return true;
        return false;
    },
                content:function (){
        if(trigger.target.countCards('h')<player.countCards('h')) trigger.directHit=true;
        if(trigger.target.hp>player.hp) player.addTempSkill('zongjian2','shaAfter');
    },
                ai:{
                    threaten:0.5,
                },
            },
            "zongjian2":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                audio:"ext:新武将:3",
                content:function (){
        trigger.num++;
    },
            },
            guazhang:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event,player){
        if(!event.cards||event.cards.length!=1) return false;
        if(_status.currentPhase!=player) return false;
        if(!player.storage.jianying) return false;
        return get.suit(player.storage.jianying)==get.suit(event.cards[0]);
    },
                content:function (){        
        var chat=['八卦•六十四掌'].randomGet();
            player.say(chat);                                                                
        player.draw();
    },
                intro:{
                    content:"card",
                },
                group:["jianying2","jianying3"],
            },
            reguaili:{
                audio:"ext:新武将:1",
                unique:true,
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return !player.storage.reguaili;
    },
                skillAnimation:"legend",
                animationColor:"metal",
                content:function (){
        'step 0'
        var shas=player.getCards('h','sha');
        var num;
        if(player.hp>=4&&shas.length>=3){
            num=3;
        }
        else if(player.hp>=3&&shas.length>=2){
            num=2;
        }
        else{
            num=1
        }             
        player.chooseControl('一','二','三','四','五','六',function(){
            return get.cnNumber(_status.event.goon,true);
        }).set('prompt','失去任意点体力').set('goon',num);
        'step 1'                                
        var num;
        switch(result.control){
            case '一':num=1;break;
            case '二':num=2;break;
            case '三':num=3;break;
            case '四':num=4;break;
            case '五':num=5;break;
            case '六':num=6;break;
        }        
         var chat=['女汉子没人疼，练就一身肌肉和力量','扎心了，流掉那么多血'].randomGet();
            player.say(chat);  
        player.storage.reguaili2=num;
        player.loseHp(num);
        player.draw(num);
        player.addTempSkill('reguaili2');
    },
                ai:{
                    order:2,
                    result:{
                        player:function (player){
                if(player.hp==1) return 0;
                var shas=player.getCards('h','sha');
                if(!shas.length) return 0;
                var card=shas[0];
                if(!lib.filter.cardEnabled(card,player)) return 0;
                if(lib.filter.cardUsable(card,player)) return 0;
                var mindist;
                if(player.hp>=4&&shas.length>=3){
                    mindist=4;
                }
                else if(player.hp>=3&&shas.length>=2){
                    mindist=3;
                }
                else{
                    mindist=2;
                }
                if(game.hasPlayer(function(current){
                    return (current.hp<=mindist-1&&
                        get.distance(player,current,'attack')<=mindist&&
                        player.canUse(card,current,false)&&
                        get.effect(current,card,player,player)>0);
                })){
                    return 1;
                }
                return 0;
            },
                    },
                },
            },
            "reguaili2":{
                audio:"ext:新武将:1",
                onremove:true,
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='juedou'||event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                content:function (){       
          var chat=['不是说我吹牛逼，无论人畜虾蟹，都捱不了我的一拳','去死吧，死基佬！'].randomGet();
            player.say(chat);  
        trigger.num++;
    },
                mod:{
                    cardUsable:function (card,player,num){
            if(typeof player.storage.reguaili2=='number'&&card.name=='sha'){
                return num+player.storage.reguaili2;
            }
        },
                    globalFrom:function (from,to,distance){
            if(typeof from.storage.reguaili2=='number'){
                return distance-from.storage.reguaili2;
            }
        },
                },
            },
            mudun:{
                group:["mudun_use","mudun_respond"],
                filter:function (event,player){
        return false;
    },
                viewAs:{
                    name:"wuxie",
                },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    save:true,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
                subSkill:{
                    use:{
                        enable:"chooseToUse",
                        chooseButton:{
                            dialog:function (event,player){
                    player.storage.mudun = [
                        ui.cardPile.childNodes[0],
                        ui.cardPile.childNodes[1],                                       
                    ];
                    return ui.create.dialog('木遁',player.storage.mudun,'hidden');
                },
                            filter:function (button,player){
                    var evt=_status.event.getParent();
                    if(evt&&evt.filterCard){
                        return evt.filterCard(button.link,player,evt);
                    }
                    return true;
                },
                            check:function (button){
                    var player = _status.currentPhase;
                    return game.hasPlayer(function(current){
                        return player.canUse(button.link,current,false)&&get.effect(current,button.link,player,player)>0;
                    })?get.order(button.link):0;
                },
                            backup:function (links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:links[0],
                        onuse:function(result,player){
                            delete player.storage.mudun;
                        }
                    }
                },
                            prompt:function (links,player){
                    return '选择'+get.translation(links)+'的目标';
                },
                        },
                        ai:{
                            order:4,
                            result:{
                                player:function (player){                        
                            return 1;
                        for(var i=0;i<2;i++){
                            var card = ui.cardPile.childNodes[i];
                            if(game.hasPlayer(function(current){
                                var evt=_status.event.getParent();
                                if(evt&&evt.filterCard){
                                    return evt.filterCard(button.link,player,evt)&&game.hasPlayer(function(current){
                                        return player.canUse(button.link,current,false)&&get.effect(current,card,player,player)>0;
                                    });
                                }
                                return game.hasPlayer(function(current){
                                    return get.effect(current,card,player,player)>0;
                                });
                            }))
                            return 1;
                        }
                        return 0;
                    },
                            },
                            useful:-1,
                            value:-1,
                        },
                        sub:true,
                    },
                    respond:{
                        audio:"ext:新武将:2",
                        trigger:{
                            player:"chooseToRespondBegin",
                        },
                        filter:function (event,player){
                if(event.responded) return false;
                return true;
            },
                        content:function (){
                "step 0"
                var cards=[];
                if(ui.cardPile.childNodes.length<2){
                    var discardcards=get.cards(2);
                    for(var i=0;i<discardcards.length;i++){
                        ui.discardPile.appendChild(discardcards[i]);
                    }
                }
                for(var i=0;i<2;i++){
                    cards.push(ui.cardPile.childNodes[i]);
                }
                player.chooseCardButton('木遁：选择一张卡牌打出',cards).set('filterButton',function(button){
                    return _status.event.getTrigger().filterCard(button.link);
                });
                "step 1"
                if(result.bool){                                    
                    trigger.untrigger();
                    trigger.responded=true;
                    result.links[0].remove();
                    trigger.result={bool:true,card:result.links[0]}
                }
            },
                        ai:{
                            effect:{
                                target:function (card,player,target,effect){
                        if(get.tag(card,'respondShan')) return 0.7;
                        if(get.tag(card,'respondSha')) return 0.7;
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            baihao:{
                trigger:{
                    player:["phaseUseEnd","dying"],
                },
                frequent:true,
                alter:true,
                filter:function (event,player){                           
           return player.hp<player.maxHp;           
    },
                content:function (){   
        'step 0'
        player.chooseControl('百豪','cancel2');  
        'step 1'
  var chat=['阴封印•创造再生——百豪之术'].randomGet();
            player.say(chat);  
        if(result.control=='百豪'){
             player.recover(player.maxHp-player.hp);
             player.loseMaxHp();                     
        }               
        else{
            trigger.cancel();
            }        
    },
                audio:"ext:新武将:2",
                ai:{
                    threaten:1.5,
                },
            },
            xianren:{
                audio:"ext:新武将:2",
                textAnimation:true,
                animationStr:"自来也之豪杰物语",
                animationColor:"fire",
                unique:true,
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                filter:function (event,player){
        return !player.hasSkill('xianshu')&&player.storage.renfa2&&player.storage.renfa2.length>=3;
    },
                content:function (){
        "step 0"
        player.chooseDrawRecover(2,true,function(event,player){
            if(player.hp==1&&player.isDamaged()) return 'recover_hp';
            return 'draw_card';
        });
        "step 1"                
         var chat=['今天的对手拥有轮回眼，所以不得不劳烦两位仙人出手相助','我是在妙木山修炼成仙的蛤蟆仙，自来也是也！'].randomGet();
            player.say(chat);                  
        player.loseMaxHp();
        player.addSkill('rexianshu');
        player.awakenSkill('xianren');
    },
            },
            renfa:{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                audio:"ext:新武将:2",
                init:function (player){
        player.storage.renfa=[];
        player.storage.renfa2=[];
    },
                filter:function (event,player){
        return player.countCards('h')>=0;
    },
                intro:{
                    content:"cards",
                    mark:function (dialog,content,player){
            if(content&&content.length){
                dialog.addAuto(content);
                if(player.isUnderControl(true)){
                    var str='';
                    for(var i=0;i<player.storage.renfa2.length;i++){
                        str+=get.translation(player.storage.renfa2[i]);
                        if(i<player.storage.renfa2.length-1){
                            str+='、';
                        }
                    }
                    dialog.add('<div class="text center">'+str+'</div>')
                }
            }
        },
                },
                content:function (){
        'step 0'          
        player.draw(trigger.num);
        var chat=['这个盘，我接了','被小鬼称为小鬼，看来真被瞧不起了'].randomGet();
            player.say(chat);                  
        var list1=[],list2=[],list3=[];
        for(var i=0;i<lib.inpile.length;i++){
            var type=get.type(lib.inpile[i]);
            if(type=='basic'){
                list1.push(['基本','',lib.inpile[i]]);
            }
            else if(type=='trick'){
                list2.push(['锦囊','',lib.inpile[i]]);
            }
            else if(type=='delay'){
                list3.push(['锦囊','',lib.inpile[i]]);
            }
        }
        player.chooseButton([get.prompt('renfa'),[list1.concat(list2).concat(list3),'vcard']]).set('filterButton',function(button){
            var player=_status.event.player;
            if(player.storage.renfa2&&player.storage.renfa2.contains(button.link[2])) return false;
            return true;
        }).set('ai',function(button){
            var rand=_status.event.rand*2;
            switch(button.link[2]){
                case 'sha':return 5+rand[1];
                case 'tao':return 4+rand[2];
                case 'lebu':return 3+rand[3];
                case 'shan':return 4.5+rand[4];
                case 'wuzhong':return 4+rand[5];
                case 'shunshou':return 3+rand[6];
                case 'nanman':return 2+rand[7];
                case 'wanjian':return 2+rand[8];
                default:return rand[9];
            }
        }).set('rand',[Math.random(),Math.random(),Math.random(),Math.random(),
        Math.random(),Math.random(),Math.random(),Math.random()],Math.random());
        'step 1'
        if(result.bool){
            player.storage.renfa2.push(result.links[0][2]);
            player.logSkill('renfa');
            player.chooseCard('h','选择一张手牌记录一招“忍法”',true);
            if(player.isOnline2()){
                player.send(function(storage){
                    game.me.storage.renfa2=storage;
                },player.storage.renfa2);
            }
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            var card=result.cards[0];
            player.lose(card,ui.special);
            player.storage.renfa.push(card);
            player.syncStorage('renfa');
            player.markSkill('renfa');
            player.$give(card,player);
            player.addSkill('renfa3');
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            return num+player.storage.renfa2.length;
        },
                },
                group:["renfa2"],
            },
            "renfa2":{
                trigger:{
                    global:["useCard","respondEnd"],
                },
                priority:15,
                audio:"ext:新武将:2",
                filter:function (event,player){
        if(_status.currentPhase==player) return false;
        if(event.name=='respond'){
            if(event.getParent(2).name!='sha') return false;
        }
        return player.storage.renfa2&&player.storage.renfa2.contains(event.card.name);
    },
                direct:true,
                content:function (){
        "step 0"                   
        var effect=0;
        if(trigger.card.name=='wuxie'||trigger.name=='respond'){
            if(get.attitude(player,trigger.player)<-1){
                effect=-1;
            }
        }
        else if(trigger.targets&&trigger.targets.length){
            for(var i=0;i<trigger.targets.length;i++){
                effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
            }
        }
        var str='忍法：是否令'+get.translation(trigger.player);
        if(trigger.targets&&trigger.targets.length){
            str+='对'+get.translation(trigger.targets);
        }
        str+='的'+get.translation(trigger.card)+'失效？'
        var next=player.chooseBool(str,function(){
            var player=_status.event.player;
            var trigger=_status.event.getTrigger();
            if(_status.event.effect<0){
                if(trigger.card.name=='sha'){
                    var target=trigger.targets[0];
                    if(target==player){
                        return !player.countCards('h','shan');
                    }
                    else{
                        return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
                    }
                }
                else{
                    return true;
                }
            }
            return false;
        });
        next.set('effect',effect);
        "step 1"
        if(result.bool){
            player.logSkill('renfa');
            var index=player.storage.renfa2.indexOf(trigger.card.name);
            if(index!=-1){
                var card=player.storage.renfa[index];
                ui.discardPile.appendChild(card);
                player.$throw(card);
                player.storage.renfa.splice(index,1);
                player.storage.renfa2.splice(index,1);
                if(player.storage.renfa.length==0){
                    player.unmarkSkill('renfa');
                }
                else{
                    player.syncStorage('renfa');
                    player.markSkill('renfa');
                    if(player.isOnline2()){
                        player.send(function(storage){
                            game.me.storage.renfa2=storage;
                        },player.storage.renfa2);
                    }
                }
            }
            game.delay(2);
            if(trigger.name=='respond'){
                if(trigger.parent.result){
                    trigger.parent.result.bool=false;
                }
            }
            else{
                trigger.cancel();
            }
        }
        else{
            event.finish();
        }
        "step 2"                
         var chat=['实力破一波阴谋','雕虫小技也敢在我面前耍？'].randomGet();
            player.say(chat);        
        game.broadcastAll(ui.clear);
    },
                ai:{
                    threaten:1.8,
                    expose:0.3,
                },
            },
            citan:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                unique:true,
                locked:true,
                delay:0,
                content:function (){
        "step 0"        
       var chat=['我就看看不说话','潜入成功，幸好没人发现老夫','美女，我是来取材的','大丈夫为人坦荡，看下内裤算什么？'].randomGet();
            player.say(chat);    
        var dialog=ui.create.dialog('刺探');
        for(var i=0;i<game.players.length;i++){
             if(game.players[i]==player) continue;
             if(game.players[i].num('h')){
                dialog.add(get.translation(game.players[i])+'的'+'手牌');
                var hs=game.players[i].get('h');
                dialog.add(hs);                                     
             }
        }
        event.dialog=dialog;
        if(player==game.me){
            if(event.isMine()){
                game.pause();
                ui.create.confirm('o');
                    game.countChoose();
                    event.choosing=true;
            }
            else{
                event.finish();
                    event.result='viewed';
                setTimeout(function(){
                    event.dialog.close();
                },2*lib.config.duration);
                game.delayx(2);
            }
        }
        else{
            event.finish();
        }        
        "step 1"
            event.result='viewed';
        _status.imchoosing=false;
            event.choosing=false;
        if(event.dialog) event.dialog.close();                        
    },
            },
            changsheng:{
                audio:"ext:新武将:2",
                enable:"chooseToUse",
                filter:function (event,player){
        if(event.type!='dying') return false;
        if(player!=event.dying) return false;
        if(player.maxHp<1) return false;      
        return true;
    },
                alter:true,
                filterTarget:function (card,player,target){
        return target!=player&&target.hp>0&&target.countCards('h')>0;
    },
                content:function (){
        'step 0'             
        player.chooseToCompare(target);          
          var chat=['人若死了，就什么都没了，只要活着，总会发现有趣的东西','人，真是脆弱的生命！','太完美了，果然，我还是想得到你的身体'].randomGet();
            player.say(chat);          
        'step 1'
        if(!result.bool){
            player.recover(player.maxHp-player.hp);
            player.draw();
            player.loseMaxHp();            
            player.turnOver();            
            event.finish();
        }
        else{
            event.num=target.hp-player.hp;      
        }
        'step 2'
        player.changeHp(event.num);
        player.maxHp++;            
        if(get.is.altered('changsheng')){
            event.finish();
        }
        'step 3'
        event.target.changeHp(-event.num);
        'step 4'
        if(event.target.hp<=0){
            event.target.dying({source:player});
        }
      
    },
                ai:{
                    order:1,
                    skillTagFilter:function (player){
            if(player.maxHp<1) return false;
            if(player.hp>0) return false;
         
        },
                    save:true,
                    result:{
                        target:-1,
                        player:1,
                    },
                    threaten:2,
                },
            },
            rechendun:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){               
        'step 0'
        player.chooseToCompare(target);        
        var chat=['尘遁•原界剥离之术','你已老了，大野木'].randomGet();
            player.say(chat);        
        "step 1"
        if(result.bool){  
            target.loseMaxHp();
            target.draw();                                                   
        }
        else{
            target.damage();      
        }
    },
                ai:{
                    order:function (name,player){
            var cards=player.getCards('h');
            if(player.countCards('h','sha')==0){
                return 1;
            }
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                    return 9;
                }
            }
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },
                        target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
            },
                    },
                    threaten:1.3,
                },
            },
            wuchen:{
                audio:"ext:新武将:2",
                forced:true,
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){   
        return player.countCards('h')<1;
    },
                content:function (){                
        var chat=['做人要低调，无声无息，方能闷声发大财','快让感知型忍者感知我，否则你死定了'].randomGet();
            player.say(chat);                  
    trigger.cancel();
    event.finish();
},
                ai:{
                    notrick:true,
                    nosha:true,
                    noh:true,
                    skillTagFilter:function (player,tag){
            if(tag=='noh'){
                if(player.countCards('h')!=1) return false;
            }
        },
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            rexianshu:{
                audio:"ext:新武将:2",
                srlose:true,
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function (){       
        player.draw(player.hp);
        player.recover();
    },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(target.countCards('h')==1&&card.name=='guohe') return 0.5;
                if(target.isTurnedOver()&&target.countCards('h')==1&&(card.name=='guohe'||card.name=='shunshou')) return -5;
            },
                    },
                    noh:true,
                },
            },
            shunsheng:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                changeSeat:true,
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('h',{color:'black'});
    },
                filterCard:{
                    color:"black",
                },
                check:function (card){
        return 4-get.value(card);
    },
                content:function (){        
        var chat=['老虎不发威，当老子是病猫是吧？——瞬身之术','我的瞬身之术没有实体，但同时又可以说所有的都是实体'].randomGet();
            player.say(chat);          
        game.swapSeat(player,target);
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
            },
            "renfa3":{
                enable:"phaseUse",
                usable:1,
                lose:false,
                delay:false,
                selectCard:[1,Infinity],
                filterCard:true,
                filter:function (event,player){
        return player.storage.renfa.length>0;
    },
                prompt:"用任意数量的手牌与等量的“忍”交换",
                content:function (){
        "step 0"
        player.lose(cards,ui.special)._triggered=null;
        player.storage.renfa=player.storage.renfa.concat(cards);
        player.chooseCardButton(player.storage.renfa,'选择'+cards.length+'张牌作为手牌',cards.length,true).ai=function(button){
            return get.value(button.link);
        }
        if(player==game.me&&_status.auto){
            game.delay();
        }
        "step 1"
        player.gain(result.links)._triggered=null;
        for(var i=0;i<result.links.length;i++){
            player.storage.renfa.remove(result.links[i]);
        }
        game.addVideo('storage',player,['renfa',get.cardsInfo(player.storage.renfa),'cards']);
    },
                ai:{
                    order:5,
                    result:{
                        player:1,
                    },
                },
            },
            reshouhu:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                changeControl:true,
                textAnimation:true,
                animationStr:"别天神•守护木叶",
                animationColor:"fire",
                init:function (player){
        player.storage.reshouhu=false;
    },
                intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('h',{color:'red'})&&player.identity!='zhu'&&target.identity!='zhu';
    },
                filterCard:{
                    color:"red",
                },
                check:function (card){
        return 4-get.value(card);
    },
                content:function (){          
        var chat=['在黑暗中维护和平的无名忍者，才称得上忍者','替我保护村子，还有宇智波的名号'].randomGet();
            player.say(chat);          
        player.storage.reshouhu=true;
        game.swapControl(target);        
        var myid=player.identity;
            if(player.identity=='zhu'){
                myid='zhong'
            };                                   
                target.identity=myid;
                target.setIdentity();          
        player.removeSkill('reshouhu');
        player.die();
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
            },
            linghua:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                direct:true,
                changeControl:true,
                textAnimation:true,
                animationStr:"灵化之术",
                animationColor:"fire",
                init:function (player){
        player.storage.linghua=false;
    },
                intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('h',{type:'basic'});
    },
                filterCard:{
                    type:"basic",
                },
                check:function (card){
        return 4-get.value(card);
    },
                content:function (){   
        'step 0'
        var chat=['灵化之术！！！','借你的身体用一阵子'].randomGet();
            player.say(chat);          
        player.storage.linghua=true;        
        game.swapPlayer(player,target);        
        player.addSkill('rehuihun');        
        player.turnOver();     
        player.removeSkill('linghua');  
        target.damage();     
        'step 1'
        var evt=_status.event.getParent('phase');
        if(evt){
            game.resetSkills();
            _status.event=evt;
            _status.event.finish();
            _status.event.untrigger(true);
        }
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
            },
            aiyuan:{
                audio:"ext:新武将:2",
                trigger:{
                    global:["loseHpEnd","loseMaxHpEnd"],
                },
                direct:true,
                filter:function (event,player){
        return _status.currentPhase==event.player;
    },
                content:function (){
        'step 0'
        if(player==trigger.player){
            player.chooseControl('你摸两张','其摸两张','cancel2',function(){
                return '其摸两张';
            }).set('prompt',get.prompt('aiyuan'));
            event.single=true;
        }
        else{
            player.chooseTarget(get.prompt('aiyuan'),function(card,player,target){
                return target==_status.event.player||target==_status.event.target;
            }).set('target',trigger.player).set('ai',function(target){
                var player=_status.event.player;
                if(player==target) return 1;
                return get.attitude(player,target)-1.5;
            });
        }
        'step 1'
        if(event.single){
            if(result.control!='cancel2'){
                player.logSkill('aiyuan',player);
                if(result.control=='你摸两张'){
                    player.draw(2);
                }
                else{
                    player.draw(2);
                    player.storage.aiyuan=player;
                }
            }
        }
        else if(result.bool){
            var target=result.targets[0];
            player.logSkill('aiyuan',target);
            if(target==player){
                target.draw(2);
            }
            else{
                target.draw(2);
                if(target.storage.aiyuan){
                    target.storage.aiyuan.add(player);
                }
                else{
                    target.storage.aiyuan=[player];
                }
            }
        }
    },
                ai:{
                    expose:0.1,
                },
            },
            rehuihun:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                changePlayer:true,
                filterTarget:function (player,target){
        return player.name=='duan';
    },
                content:function (){          
        var chat=['灵化之术————归位！！！','终于回来了，刚才真危险啊！'].randomGet();
            player.say(chat);                       
        game.swapPlayer(player,game.player);  
        player.addSkill('linghua');           
        player.removeSkill('rehuihun');      
    },
                mod:{
                    globalTo:function (from,to,distance){
            return distance+1;
        },
                },
            },
            jiaoji:{
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                filter:function (event,player){
        return player!=event.player&&event.num>0;
    },
                direct:true,
                audio:"ext:新武将:2",
                content:function (){
        'step 0'
        event.num=trigger.num;
        'step 1'               
        player.chooseDrawRecover(get.prompt('jiaoji')).set('logSkill','jiaoji');                  
        'step 2'          
        var chat=['我的大屌……噢，不好意思，刚才不小心瞎说大实话了……是我的大刀早已饥渴难耐了','我的鲛肌能削掉查克拉，并且吃掉'].randomGet();
            player.say(chat);   
        Player.storage.jiaoji;    
        if(result.control!='cancel2'){
            event.num--;            
        }
    },
            },
            shuilao:{
                audio:"ext:新武将:2",
                trigger:{
                    global:"phaseBegin",
                },
                check:function (event,player){
        if(get.attitude(player,event.player)<-2){
            var cards=player.getCards('h');
            if(cards.length>player.hp) return true;
            for(var i=0;i<cards.length;i++){
                var useful=get.useful(cards[i]);
                if(useful<5) return true;
                if(cards[i].number>9&&useful<7) return true;
            }
        }
        return false;
    },
                logTarget:"player",
                filter:function (event,player){
        return player.hp<=player.countCards('e')&&event.player!=player&&
            player.countCards('h')>0&&event.player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(trigger.player);
        "step 1"
        if(result.bool){            
            var chat=['给我老实呆着吧，水遁•水牢之术','同为雾忍村忍者，却要残杀同伴，我究竟算什么人？目的是什么？唯一的切身体会只有虚假'].randomGet();
            player.say(chat);              
            trigger.player.addTempSkill('zishou2');
        }
    },
            },
            relianhua:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){        
    var chat=['我要贯彻我的忍道：只要努力，即使不会忍术也能打败天才！','这招本来是为了打败宁次而准备的，今天破例让你见识见识'].randomGet();
        player.say(chat);              
        trigger.num+=game.roundNumber-1;
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcard:function (player,num){
            if(player.hp<player.maxHp) return num+player.maxHp-player.hp;
        },
                },
            },
            rexuanfeng:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.isMaxHandcard(true);
    },
                content:function (){        
    var chat=['凯老师，请你认同我吧！','在木叶村的下忍中，目前我是最强的'].randomGet();
        player.say(chat);           
        trigger.num++;
    },
            },
            jiaodan:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.hasSkill('jiaodan2')==false;
    },
                filterCard:function (){
        if(ui.selected.targets.length) return false;
        return true;
    },
                position:"he",
                selectCard:[1,Infinity],
                complexSelect:true,
                complexCard:true,
                filterTarget:function (card,player,target){
        return target!=player&&ui.selected.cards.length==target.hp;
    },
                check:function (card){
        switch(ui.selected.cards.length){
            case 0:return 7-get.value(card);
            case 1:return 6-get.value(card);
            case 2:return 3-get.value(card);
            default:return 0;
        }
    },
                content:function (){
        "step 0"        
        var chat=['不吹不黑，忍刀七人众里，我最牛逼','吃我一招，水遁•水鲛弹之术','对手越强大，我就会变得更强大，不会疲倦也不会倒下'].randomGet();
            player.say(chat);      
        player.addSkill('jiaodan3');
        target.damage();
        "step 1"
        if(!player.hasSkill('jiaodan3')){
            player.addSkill('jiaodan2');
            player.draw();
        }
        else{
            player.removeSkill('jiaodan3');
        }
    },
                ai:{
                    order:2,
                    result:{
                        target:function (player,target){
                return get.damageEffect(target,player);
            },
                    },
                    threaten:1.5,
                    expose:0.3,
                },
            },
            "jiaodan2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                audio:"ext:新武将:false",
                content:function (){
        player.removeSkill('jiaodan2');
    },
            },
            "jiaodan3":{
                audio:"ext:新武将:1",
                trigger:{
                    global:"dying",
                },
                priority:15,
                silent:true,
                filter:function (event,player){
        return event.reason&&event.reason.getParent().name=='jiaodan';
    },
                content:function (){
        player.removeSkill('jiaodan3');
    },
                forced:true,
                popup:false,
            },
            leidun:{
                audio:"ext:新武将:1",
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                unique:true,
                content:function (){        
    var chat=['这里是哪里？我怎么会在这？','老子当年曾肉搏单挑八尾尾兽，也曾以一敌万'].randomGet();
            player.say(chat);  
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]==player) continue;  
            var num=game.players[i].maxHp;
            var num2=Math.floor(num/2);            
            player.maxHp+=num2;            
        }
        player.hp=player.maxHp;
        player.update();
    },
                ai:{
                    threaten:0.8,
                },
            },
            tuci:{
                enable:"phaseUse",
                audio:"ext:新武将:2",
                filterCard:function (card){
        return card.name=='sha'&&!card.nature;
    },
                filter:function (event,player){
        return player.countCards('h','sha')>0
    },
                unique:true,
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                },
                prompt:"发动地狱突刺，你使用的杀无视防具，并附带雷属性",
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            yingmo:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player;
    },
                content:function (){      
    var chat=['影子模仿术，成功得手','真麻烦！'].randomGet();
        player.say(chat);  
        var skill=trigger.player.skills.randomGet()
        player.addTempSkill(skill,{player:'phaseUseBegin'});
    },
            },
            zhimou:{
                group:["zhimou1","zhimou2","zhimou3","zhimou4","zhimou5","zhimou6","zhimou7"],
            },
            "zhimou1":{
                audio:"ext:新武将:1",
                enable:"chooseToUse",
                usable:1,
                prompt:function (){
        return '仁慈：将'+get.cnNumber(Math.max(1,1))+'张红桃牌当作无中生有使用';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"wuzhong",
                    suit:"heart",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":5,"name":"qilin","cardid":"1155988392","_transform":"translateX(112px)","clone":{"name":"qilin","suit":"heart","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":4721},"timeout":4686,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'heart'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='heart';
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "zhimou2":{
                audio:"ext:新武将:1",
                enable:"chooseToUse",
                usable:1,
                prompt:function (){
        return '勇敢：将'+get.cnNumber(Math.max(1,1))+'张方片当作决斗使用';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"juedou",
                    suit:"diamond",
                    number:3,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":3,"name":"shan","cardid":"7565680288","clone":{"name":"shan","suit":"diamond","number":3,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true},"original":"h","_transform":"translateX(112px)","timeout":6421}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'diamond'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                ai:{
                    basic:{
                        order:5,
                        useful:1,
                        value:4.5,
                    },
                    result:{
                        target:-1.5,
                        player:function (player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
            },
            "zhimou3":{
                audio:"ext:新武将:1",
                enable:["chooseToUse","chooseToRespond"],
                prompt:function (){
        return '破解：将'+get.cnNumber(Math.max(1,1))+'张黑桃牌当作无懈可击使用';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 7-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"wuxie",
                    suit:"spade",
                    number:2,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":2,"name":"tengjia","nature":"fire","cardid":"6175659371","_transform":"translateX(336px)","clone":{"name":"tengjia","suit":"spade","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":3999},"timeout":3960,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'spade'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='spade';
    },
                ai:{
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
            "zhimou4":{
                audio:"ext:新武将:1",
                enable:"chooseToUse",
                usable:1,
                prompt:function (){
        return '冷静：将'+get.cnNumber(Math.max(1,1))+'张梅花牌当作过河拆桥打出';
    },
                position:"he",
                check:function (card,event){
        if(_status.event.player.hp>0) return 0;
        return 10-get.value(card);
    },
                selectCard:function (){
        return Math.max(1,1);
    },
                viewAs:{
                    name:"guohe",
                    suit:"club",
                    number:5,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":5,"name":"dilu","cardid":"3346191394","_transform":"translateX(112px)","clone":{"name":"dilu","suit":"club","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":5755},"timeout":5725,"original":"h"}],
                },
                filter:function (event,player){
        return player.countCards('he',{suit:'club'})>=1;
    },
                filterCard:function (card){
        return get.suit(card)=='club';
    },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 2;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.length==1&&es[0].name=='baiyin'&&target.isDamaged());
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            "zhimou5":{
                audio:"ext:新武将:1",
                enable:["chooseToUse","chooseToRespond"],
                filterCard:function (card){
        return get.type(card)=='basic';
    },
                viewAs:{
                    name:"sha",
                    suit:"heart",
                    number:12,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":10,"name":"shan","cardid":"5867706405","_transform":"translateX(0px)","clone":{"name":"shan","suit":"diamond","number":10,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":5407},"timeout":5360,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{type:'basic'})) return false;
    },
                filter:function (event,player){
        return player.countCards('h',{type:'basic'})>=1;
    },
                prompt:"报仇：将一张基本牌当杀使用或打出",
                ai:{
                    threaten:1.5,
                    respondSha:true,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                    order:function (){
            if(_status.event.player.hasSkillTag('presha',true,null,true)) return 10;
            return 3;
        },
                    result:{
                        target:function (player,target){
                if(player.hasSkill('jiu')&&!target.getEquip('baiyin')){
                    if(get.attitude(player,target)>0){
                        return -6;
                    }
                    else{
                        return -3;
                    }
                }
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function (card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function (card){
                if(card.nature) return 1;
            },
                        fireDamage:function (card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function (card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function (card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "zhimou6":{
                audio:"ext:新武将:1",
                enable:"chooseToRespond",
                filterCard:function (card){
        return get.type(card)=='equip';
    },
                viewAs:{
                    name:"shan",
                    suit:"club",
                    number:2,
                },
                position:"he",
                viewAsFilter:function (player){
        if(!player.countCards('he',{type:'equip'})) return false;
    },
                filter:function (event,player){
        return player.countCards('he',{type:'equip'})>=1;
    },
                prompt:"闪避：将一张装备牌当闪打出",
                ai:{
                    threaten:1.5,
                    respondShan:true,
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                },
            },
            zuiquan:{
                audio:"ext:新武将:2",
                enable:"chooseToUse",
                filterCard:{
                    color:"black",
                },
                selectCard:2,
                complexCard:true,
                viewAs:{
                    name:"jiu",
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":9,"name":"sha","cardid":"6009999303","_transform":"translateX(0px)","clone":{"name":"sha","suit":"club","number":9,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"fixed":true,"timeout":387},"timeout":379,"original":"h"},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":1,"name":"juedou","cardid":"4394234272","_transform":"translateX(448px)","clone":{"name":"juedou","suit":"spade","number":1,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":395},"timeout":380,"original":"h"}],
                },
                prompt:"将两张黑色手牌当酒使用",
                ai:{
                    basic:{
                        useful:function (card,i){
                if(_status.event.player.hp>1){
                    if(i==0) return 4;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                        value:function (card,player,i){
                if(player.hp>1){
                    if(i==0) return 5;
                    return 1;
                }
                if(i==0) return 7.3;
                return 3;
            },
                    },
                    order:function (){
            return get.order({name:'sha'})+0.2;
        },
                    result:{
                        target:function (player,target){
                if(target&&target.isDying()) return 2;
                if(lib.config.mode=='stone'&&!player.isMin()){
                    if(player.getActCount()+1>=player.actcount) return 0;
                }
                var shas=player.getCards('h','sha');
                if(shas.length>1&&player.getCardUsable('sha')>1){
                    return 0;
                }
                var card;
                if(shas.length){
                    for(var i=0;i<shas.length;i++){
                        if(lib.filter.filterCard(shas[i],target)){
                            card=shas[i];break;
                        }
                    }
                }
                else if(player.hasSha()&&player.needsToDiscard()){
                    if(player.countCards('h','hufu')!=1){
                        card={name:'sha'};
                    }
                }
                if(card){
                    if(game.hasPlayer(function(current){
                        return (get.attitude(target,current)<0&&
                            target.canUse(card,current,true,true)&&
                            !current.getEquip('baiyin')&&
                            get.effect(current,card,target)>0);
                    })){
                        return 1;
                    }
                }
                return 0;
            },
                    },
                    tag:{
                        save:1,
                    },
                },
            },
            "zhimou7":{
                audio:"ext:新武将:1",
                enable:"chooseToUse",
                usable:1,
                filterCard:function (card){
        return get.type(card)=='trick';
    },
                filter:function (event,player){
        return player.countCards('h',{type:'trick'})>=1;
    },
                viewAs:{
                    name:"shunshou",
                    suit:"club",
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":7,"name":"nanman","cardid":"6751146377","_transform":"translateX(224px)","clone":{"name":"nanman","suit":"club","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":4499},"timeout":4476,"original":"h"}],
                },
                viewAsFilter:function (player){
        if(!player.countCards('h',{type:'trick'})) return false;
    },
                prompt:"影缚：将一张锦囊牌当顺手牵羊使用",
                check:function (card){     
        return 4-get.value(card);
    },
                ai:{
                    threaten:1.5,
                    order:8,
                    wuxie:function (target,card,player,viewer){
            if(get.attitude(viewer,player)>0&&get.attitude(viewer,target)>0){
                return 0;
            }
        },
                    basic:{
                        order:7.5,
                        useful:4,
                        value:9,
                    },
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)<=0) return (target.countCards('he')>0)?-1.5:1.5;
                var js=target.getCards('j');
                if(js.length){
                    var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                    if(jj.name=='shunshou') return 3;
                    if(js.length==1&&get.effect(target,jj,target,player)>=0){
                        return -1.5;
                    }
                    return 3;
                }
                return -1.5;
            },
                        player:function (player,target){
                if(get.attitude(player,target)<0&&!target.countCards('he')){
                    return 0;
                }
                if(get.attitude(player,target)>1){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='shunshou') return 1;
                        if(js.length==1&&get.effect(target,jj,target,player)>=0){
                            return 0;
                        }
                        return 1;
                    }
                    return 0;
                }
                return 1;
            },
                    },
                    tag:{
                        loseCard:1,
                        gain:1,
                    },
                },
            },
            huanji:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function (){
        'step 0'
        player.chooseCard('h','连计：将1张牌置于'+get.translation(target)+'的武将牌上',true).set('ai',function(card){
            if(get.attitude(_status.event.player,_status.event.getParent().player)>0){
                return 7-get.value(card);
            }
            return -get.value(card);
        });
        'step 1'
        if(result.bool){
            player.$give(result.cards,target);
            player.lose(result.cards,ui.special);
            target.storage.huanji_1=result.cards;
            target.storage.huanji_1_source=target;
            target.syncStorage('huanji_1');
            target.addSkill('huanji_1');
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                if(get.attitude(player,target)>0){
                    return Math.sqrt(target.countCards('he'));
                }
                return 0;
            },
                        player:1,
                    },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        mark:true,
                        intro:{
                            content:"cards",
                        },
                        content:function (){
                'step 0'
                var cards=player.storage.huanji_1;
                if(cards){
                    player.gain(cards,'gain2');
                   }                  
                  player.storage.huanji_1=0;                                            
             
                'step 1'            
            if(player.sex=='male')player.addTempSkill('wushuang');                                  
            if(player.sex=='female')player.addTempSkill('lijian');
                player.removeSkill('huanji_1');                                    
            },
                        sub:true,
                    },
                },
            },
            rechengmou:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                frequent:true,
                filter:function (event,player){        
                            return player.storage.rejugong.length>0;
    },
                content:function (){
       'step 0'
       if(player.storage.rejugong.length>2)player.loseHp();
           'step 1'
       var cards=player.storage.rejugong;
       
       if(cards){                    
       player.gain(cards,'gain2');                    
             }                             
       player.storage.rejugong=[];
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      
    },
            },
            rejugong:{
                audio:"ext:新武将:2",
                trigger:{
                    global:"damageEnd",
                },
                usable:1,
                frequent:true,
                locked:false,
                notemp:true,
                init:function (player){
        player.storage.rejugong=[];
    },
                filter:function (event,player){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink()                
 &&_status.currentPhase!=player;
   
    },
                content:function (){
        "step 0"
        player.draw();
        "step 1"
        if(player.countCards('h')){
            player.chooseCard('将'+get.cnNumber(1)+'张手牌置于武将牌上作为“功”',1,true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special);
            player.storage.rejugong=player.storage.rejugong.concat(result.cards);
            player.syncStorage('rejugong');
            player.markSkill('rejugong');
            game.log(player,'将',result.cards,'置于武将牌上作为“功”');
        }
    },
                intro:{
                    content:"cards",
                },
                group:"rejugong_1",
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){        
                            return player.storage.rejugong.length>1;
    },
                        content:function (){
    'step 0'  
      player.chooseCardButton('移去两张“功”',2,player.storage.rejugong,true);
                'step 1'
                 if(event.directresult||result.bool){
            player.logSkill('rejugong');
            var links=event.directresult||result.links;
            for(var i=0;i<links.length;i++){
                player.storage.rejugong.remove(links[i]);
            }
            player.syncStorage('rejugong');
            if(!player.storage.rejugong.length){
                player.unmarkSkill('rejugong');
            }
            else{
               player.markSkill('rejugong');
            }
            player.$throw(links);
            game.log(player,'被移去了',links);
            for(var i=0;i<links.length;i++){
                ui.discardPile.appendChild(links[i]);}
            }
    'step 2'
    trigger.untrigger();
      trigger.finish();
       
    
},
                        sub:true,
                    },
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    threaten:0.8,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
                    if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
                    if(target.hp==3) return [0.5,get.tag(card,'damage')*1];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
                    },
                },
            },
            wanshe:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"chooseCardBegin",
                },
                check:function (event,player){
        return player.hasCard(function(card){
            var val=get.value(card);
            return val<0||(val<=4&&card.number>=11);
        });
    },
                filter:function (event){
        return event.type=='compare'&&!event.directresult;
    ;
    },
                content:function (){                
          var chat=['万蛇，助我一臂之力','养蛇千日，用在一时'].randomGet();
            player.say(chat);           
        var cards=get.cards();
        ui.discardPile.appendChild(cards[0]);
        cards[0].vanishtag.add('wanshe');
        trigger.directresult=cards;
        trigger.untrigger();
    },
                group:"wanshe_number",
                subSkill:{
                    number:{
                        trigger:{
                            player:"compare",
                            target:"compare",
                        },
                        filter:function (event,player){
                if(event.iwhile) return false;
                if(event.player==player){
                    return get.color(event.card1)=='black'&&event.card1.vanishtag.contains('wanshe');
                }
                else{
                    return get.color(event.card2)=='black'&&event.card2.vanishtag.contains('wanshe');
                }
            },
                        silent:true,
                        content:function (){                
  var chat=['太给力了'].randomGet();
            player.say(chat);   
                game.log(player,'拼点牌点数视为13');
                if(player==trigger.player){
                    trigger.num1=13;
                }
                else{
                    trigger.num2=13;
                }
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            kuilei:{
                audio:"ext:新武将:2",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                silent:true,
                unique:true,
                filter:function (event,player){
        return event.player.isDead();
    },
                content:function (){                  
          var chat=['永恒的，才是艺术','下一个艺术品，就是你了'].randomGet();
            player.say(chat);                   
        trigger.player.storage.kuilei=true;
        var skills=[];
        for(var i=0;i<game.dead.length;i++){
            var skill=game.dead[i].get('s',false,false).randomGet();
            skills.push(skill);
        }
        player.addAdditionalSkill('kuilei',skills);
    },
            },
            baiji:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                frequent:true,
                content:function (){        
         var chat=['我曾用这个术，毁灭一个国家！','赤秘技•百机操演'].randomGet();
            player.say(chat);         player.gain(get.cardPile(function(card){
            return get.type(card,'equip')=='equip';
        }),'gain2');
    },
                ai:{
                    order:6,
                    threaten:1.3,
                },
            },
            shayu:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                content:function (){        
         var chat=['尝尝三代风影的砂铁时雨之术','三代风影号称最强风影，这是我最得意的傀儡'].randomGet();
            player.say(chat); 
        if(result.bool){ 
        target.chooseToDiscard('he',true);          
        } 
        else{
        var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e') num+=1;
        }
        player.draw(num);
        }
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
            refenxin:{
                mode:["identity"],
                trigger:{
                    source:"dieBegin",
                },
                init:function (player){
        player.storage.refenxin=false;
    },
                intro:{
                    content:"limited",
                },
                skillAnimation:"epic",
                audio:"ext:新武将:2",
                mark:true,
                filter:function (event,player){
        if(player.storage.refenxin) return false;
        return event.player.identity!='zhu'&&player.identity!='zhu'&&
            player.identity!='mingzhong'&&event.player.identity!='mingzhong';
    },
                check:function (event,player){
        if(player.identity==event.player.identity) return Math.random()<0.5;
        var stat=get.situation();
        switch(player.identity){
            case 'fan':
                if(stat<0) return false;
                if(stat==0) return Math.random()<0.6;
                return true;
            case 'zhong':
                if(stat>0) return false;
                if(stat==0) return Math.random()<0.6;
                return true;
            case 'nei':
                if(event.player.identity=='fan'&&stat<0) return true;
                if(event.player.identity=='zhong'&&stat>0) return true;
                if(stat==0) return Math.random()<0.7;
                return false;
        }
    },
                prompt:function (event,player){
        return '焚心：是否与'+get.translation(event.player)+'交换身份？';
    },
                content:function (){
        game.broadcastAll(function(player,target,shown){
            var identity=player.identity;
            player.identity=target.identity;
            if(shown||player==game.me){
                player.setIdentity();
            }
            target.identity=identity;
        },player,trigger.player,trigger.player.identityShown);
        player.line(trigger.player,'green');
        player.storage.refenxin=true;
        player.awakenSkill('refenxin');
    },
            },
            shuidun:{
                audio:"ext:新武将:2",
                trigger:{
                    global:"damageBefore",
                },
                filter:function (event){
        return event.nature=='fire';
    },
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                content:function (){                             
        var chat=['大禹也治不了我的水遁。让你见识一下木叶村第一水逼的厉害','我不是针对谁，我是说……在座的各位，都是垃圾！'].randomGet();
            player.say(chat);      
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.tag(card,'fireDamage')) return 0;
            },
                    },
                },
            },
            yiliao:{
                trigger:{
                    global:"dying",
                },
                priority:6,
                audio:"ext:新武将:2",
                filter:function (event,player){
        return event.player.hp<=0&&event.player.countCards('he')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var check;
        if(trigger.player.isUnderControl(true,player)){
            check=player.hasCard(function(card){
                return get.type(card)=='equip';
            });
        }
        else{
            check=(get.attitude(player,trigger.player)>0);
        }
        player.choosePlayerCard(trigger.player,get.prompt('yiliao',trigger.player),'he').set('ai',function(button){
            if(!_status.event.check) return 0;
            if(_status.event.target.isUnderControl(true,_status.event.player)){
                if(get.type(button.link)=='equip'){
                    return 10-get.value(button.link);
                }
                return 0;
            }
            else{
                return Math.random();
            }
        }).set('check',check).set('filterButton',function(button){
            if(_status.event.player==_status.event.target){
                return lib.filter.cardDiscardable(button.link,_status.event.player);
            }
            return true;
        });
        "step 1"        
         var chat=['趁你病，要你病','你不能死，有我在，我绝不会让你轻易死的','你的梦想就要实现了，要给我坚持住！'].randomGet();
            player.say(chat);    
        if(result.bool){
            player.logSkill('yiliao',trigger.player);
            event.card=result.links[0];
            player.showCards([event.card],get.translation(player)+'展示的手牌');
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.type(event.card)=='equip'){
            trigger.player.recover(1-trigger.player.hp);
            trigger.player.discard(event.card);                 
        }
        else{
            player.gain(event.card);
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            jinshu:{
                audio:"ext:新武将:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                popup:false,
                content:function (){
    var chat=['影分身术、飞雷神、秽土转生，这些禁术都是我搞出来的玩意好嘛！','我二代火影博学多才，岂是徒有虚名？'].randomGet();
            player.say(chat);    
        player.removeSkill(player.storage.jinshu);
        switch(Math.floor(Math.random()*3)){
            case 0:if(lib.skill.fenshen){player.addSkill('fenshen'); player.storage.jinshu='fenshen';player.popup('fenshen');}break;
            case 1:if(lib.skill.shanjie){player.addSkill('shanjie'); player.storage.jinshu='shanjie';player.popup('shanjie');}break;
            case 2:if(lib.skill.zhuansheng){player.addSkill('zhuansheng'); player.storage.jinshu='zhuansheng';player.popup('zhuansheng');}break;                       
        }
    },
            },
            baoli:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')>0;
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        var chat=['我是纲手的弟子，力量与脾气一样大','鸣人、佐助都玩拼点，怎能少了我？'].randomGet();
            player.say(chat);           
        if(result.bool){                       
           player.addTempSkill('baoli2',{player:'phaseBefore'});
           player.addTempSkill('baoli3',{player:'phaseBefore'});
           trigger.cancel();     
        }       
    },
                ai:{
                    order:function (name,player){
            var cards=player.getCards('h');
            if(player.countCards('h','sha')==0){
                return 1;
            }
            for(var i=0;i<cards.length;i++){
                if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
                    return 9;
                }
            }
            return get.order({name:'sha'})-1;
        },
                    result:{
                        player:function (player){
                if(player.countCards('h','sha')>0) return 0;
                var num=player.countCards('h');
                if(num>player.hp) return 0;
                if(num==1) return -2;
                if(num==2) return -1;
                return -0.7;
            },
                        target:function (player,target){
                var num=target.countCards('h');
                if(num==1) return -1;
                if(num==2) return -0.7;
                return -0.5
            },
                    },
                    threaten:1.3,
                },
            },
            "baoli2":{
                audio:"ext:新武将:1",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
    },
                forced:true,
                content:function (){       
         var chat=['颤抖吧！这是来自少女的力量','女汉子，当自强'].randomGet();
            player.say(chat);   
        trigger.num++;
    },
            },
            "baoli3":{
                audio:"ext:新武将:1",
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
    return event.target.countCards('he')>0;
    },
                check:function (event,player){
    return ai.get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function (){
  player.discardPlayerCard(trigger.target,1,'he',true);
    },
                ai:{
                    threaten:1.5,
                },
            },
            "baofu1":{
                audio:"ext:新武将:2",
                usable:1,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        var chat=['放个炮仗庆贺一下','互乘起爆符！'].randomGet();
            player.say(chat);  
        target.damage("fire");
    },
                ai:{
                    order:4,
                    result:{
                        target:-1,
                    },
                },
            },
            "baofu2":{
                audio:"ext:新武将:2",
                trigger:{
                    global:"damageAfter",
                },
                direct:true,
                filter:function (event,player){
        return event.nature=='fire'&&player.countCards('he',{suit:'diamond'})>0;
    },
                content:function (){
        "step 0"
        player.chooseCardTarget({
            filterCard:function(card){
                return get.suit(card)=='diamond';
            },
            filterTarget:function(card,player,target){
                return get.distance(trigger.player,target)<=1;
            },
            ai1:function(card){
                return 6-get.value(card);
            },
            ai2:function(target){
                return get.damageEffect(target,player,player,'fire');
            },
            position:'he',
            prompt:'互乘起爆符之术：弃置一张方片牌对目标或与其距离为1以内的目标造成等量火焰伤害'
        });
        "step 1"       
         var chat=['炸死你哋呢班扑街烂坦','这个禁术，我也是第一次亲自近距离使用'].randomGet();
            player.say(chat);   
         if(result.bool){
            player.logSkill('baofu2',result.targets[0],'fire');
            player.discard(result.cards[0]);
            result.targets[0].damage('fire',trigger.num);
        }
    },
            },
            baofu:{
                group:["baofu1","baofu2"],
            },
            rejieyuan:{
                group:["rejieyuan_more","rejieyuan_less"],
                subSkill:{
                    more:{
                        audio:"ext:新武将:1",
                        trigger:{
                            source:"damageBegin",
                        },
                        direct:true,
                        filter:function (event,player){
                if(!player.hasSkill('fenxin_nei')){
                    if(!player.countCards('h',{color:'black'})) return false;
                }
                return (event.player.hp>=player.hp||player.hasSkill('fenxin_fan'))&&player!=event.player;
            },
                        content:function (){
                'step 0'
                var goon=(get.attitude(player,trigger.player)<0);
                var next=player.chooseToDiscard(get.prompt('rejieyuan',trigger.player));
                if(!player.hasSkill('fenxin_nei')){
                    next.set('filterCard',function(card){
                        return get.color(card)=='black';
                    });
                    next.set('prompt2','弃置一张黑色手牌令伤害+1');
                }
                else{
                    next.set('prompt2','弃置一张手牌令伤害+1');
                }
                next.set('ai',function(card){
                    if(_status.event.goon){
                        return 8-get.value(card);
                    }
                    return 0;
                });
                next.set('goon',goon);
                next.logSkill=['rejieyuan_more',trigger.player];
                'step 1'
                if(result.bool){
                    trigger.num++;
                }
            },
                        sub:true,
                    },
                    less:{
                        audio:"ext:新武将:1",
                        trigger:{
                            player:"damageBegin",
                        },
                        filter:function (event,player){
                if(!player.hasSkill('fenxin_nei')){
                    if(!player.countCards('h',{color:'red'})) return false;
                }
                return event.source&&(event.source.hp>=player.hp||player.hasSkill('fenxin_zhong'))&&player!=event.source;
            },
                        direct:true,
                        content:function (){
                "step 0"
                var next=player.chooseToDiscard(get.prompt('rejieyuan'),{color:'red'});
                if(!player.hasSkill('fenxin_nei')){
                    next.set('filterCard',function(card){
                        return get.color(card)=='red';
                    });
                    next.set('prompt2','弃置一张红色手牌令伤害-1');
                }
                else{
                    next.set('prompt2','弃置一张手牌令伤害-1');
                }
                next.set('ai',function(card){
                    var player=_status.event.player;
                    if(player.hp==1||_status.event.getTrigger().num>1){
                        return 9-get.value(card);
                    }
                    if(player.hp==2){
                        return 8-get.value(card);
                    }
                    return 7-get.value(card);
                });
                next.logSkill='rejieyuan_less';
                "step 1"
                if(result.bool){
                    trigger.num--;
                }
            },
                        sub:true,
                    },
                },
                ai:{
                    expose:0.2,
                    threaten:1.5,
                },
            },
            wuyin:{
                audio:"ext:新武将:2",
                forced:true,
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
        return player.isTurnedOver();
    },
                content:function (){                
        var chat=['隐身于雾中，杀人于无形','在这片大雾里，无影无踪，没人能发现我'].randomGet();
            player.say(chat);                  
    trigger.cancel();
    event.finish();
},
                ai:{
                    order:5,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='trick'&&get.tag(card,'damage')){
                    return 'zeroplayertarget';
                }
            },
                    },
                },
            },
            ansha:{
                audio:"ext:新武将:2",
                usable:1,
                srlose:true,
                enable:"phaseUse",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('he')>0&&!target.hasSkill('fengyin');
    },
                content:function (){
        'step 0'    
        target.chooseToDiscard('he',true);           
        var chat=['早就看你不顺眼了','来啊，来打我呀，不服气是吧？','和我一起沉睡吧'].randomGet();
            player.say(chat);   
        player.turnOver();
        target.turnOver();  
        target.addTempSkill('fengyin');
          'step 1'
        player.chooseCardTarget({
            prompt:get.prompt('ansha'),
            ai1:function(card){
                return 6-get.value(card);
            },
            ai2:function(target){
                return get.effect(target,{name:'sha'},player);
            },
            filterTarget:function(card,player,target){
                return lib.filter.targetEnabled({name:'sha'},player,target);
            },
        });  
        'step 2'
        if(result.bool){                  
        player.logSkill('ansha');
        player.discard(result.cards);          
        player.useCard({name:'sha'},result.targets,false);              
         var chat=['作为一名忍者，暗杀是一种手段，也是一种生存方式','我叫桃地再不斩，以无声杀人术闻名于忍界'].randomGet();
            player.say(chat); 
        }
        else{
            event.finish();
        }
    },
                ai:{
                    order:9,
                    result:{
                        player:function (player){
                if(ui.selected.cards.length>0){
                    if(player.isTurnedOver()) return 3;
                    if(!player.isTurnedOver()) return -4
                }
                if(ui.selected.cards.length==0){
                    if(player.isTurnedOver()) return 4;
                    if(!player.isTurnedOver()) return -3;
                }
            },
                        target:function (target,player){
                if(ui.selected.cards.length>0){
                    if(target.isTurnedOver()) return 3;
                    if(!target.isTurnedOver()) return -4
                }
                if(ui.selected.cards.length==0){
                    if(target.isTurnedOver()) return 4;
                    if(!target.isTurnedOver()) return -3;
                }
            },
                    },
                },
            },
            reshuilao:{
                audio:"ext:新武将:2",
                trigger:{
                    global:"phaseBegin",
                },
                check:function (event,player){
        if(get.attitude(player,event.player)<-2){
            var cards=player.getCards('h');
            if(cards.length>player.hp) return true;
            for(var i=0;i<cards.length;i++){
                var useful=get.useful(cards[i]);
                if(useful<5) return true;
                if(cards[i].number>9&&useful<7) return true;
            }
        }
        return false;
    },
                logTarget:"player",
                filter:function (event,player){
        return player.isTurnedOver()&&event.player!=player&&
            player.countCards('h')>0&&event.player.countCards('h')>0;;
    },
                content:function (){
        "step 0"
        player.chooseToCompare(trigger.player);
        "step 1"
        if(result.bool){           
            var chat=['呼～终于恢复自由身，差点闷死自己','给我老实呆着吧，水遁•水牢之术','既然那么想进牢里，那就别想出来了'].randomGet();
            player.say(chat); 
            player.turnOver();
            trigger.player.addTempSkill('zishou2');
        }
    },
            },
            "新沙雨":{
                audio:"ext:新武将:2",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('he')>0;
    },
                content:function (){               
     "step 0"       
        player.chooseControl('弃牌','摸牌','cancel2',function(){          
            if(player.countCards('h')>3){
                return '弃牌';
            }            
            if(player.countCards('h')<=3){
                return '摸牌';
            }
            return 'cancel2';
        });
        "step 1"                
        if(result.control=='弃牌'){
 var chat=['尝尝三代风影的砂铁时雨之术','三代风影号称最强风影，这是我最得意的傀儡'].randomGet();
            player.say(chat); 
            player.chooseTarget();
            player.discardPlayerCard(event.target,true); 
        }
        else if(result.control=='摸牌'){
 var chat=['尝尝三代风影的砂铁时雨之术','三代风影号称最强风影，这是我最得意的傀儡'].randomGet();
            player.say(chat);   
             var num=0;
        for(var i=0;i<trigger.cards.length;i++){
            if(trigger.cards[i].original=='e') num+=1;
        }
        player.draw(num);
        }       
    },
                ai:{
                    order:7,
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                },
            },
            huadie:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return player.isMaxHandcard(true);
    },
                content:function (){        
    var chat=['多少遍了？不要再说我肥','不要抢走我的薯片'].randomGet();
        player.say(chat);           
        trigger.num++;
    },
            },
            beihua:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:3,
                filter:function (event,player){
        return player.hp>0;
    },
                check:function (event,player){
        if(player.hp>0){            
        return true;
        }
    },
                init:function (player){
        player.storage.beihua=0;
    },
                content:function (){
        "step 0"
        player.storage.beihua++;
        event.cards=get.cards(player.storage.beihua);
        player.showCards(event.cards);
        "step 1"
        var num=0;
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club'){
                num++;
                
               
            }
        }
        if(num){
            player.recover(num);
        }
        "step 2"
var chat=['猥琐发育一发','这叫强壮不是胖！再说胖子就揍死你'].randomGet();
            player.say(chat); 
        if(event.cards.length){
            player.gain(event.cards);
            player.$gain2(event.cards);
            game.delay();
        }
    },
                ai:{
                    order:6,
                    result:{
                        player:function (player){
                if(player.countCards('h')<2*player.getHandcardLimit()){
                    return 1;
                }
                return 0;
            },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
            return num-player.storage.beihua;
        },
                },
                group:["beihua2"],
            },
            "beihua2":{
                trigger:{
                    player:"phaseAfter",
                },
                silent:true,
                content:function (){
        player.storage.beihua=0;
    },
                forced:true,
                popup:false,
            },
            zhuanxin:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                changeControl:true,
                textAnimation:true,
                animationStr:"心转心之术",
                animationColor:"fire",
                filterTarget:function (card,player,target){
        return player!=target&&player.countCards('h',{suit:'heart'});
    },
                filterCard:{
                    suit:"heart",
                },
                check:function (card){
        return 4-get.value(card);
    },
                content:function (){          
        var chat=['心转心之术','剩下的就让我来替你完成吧'].randomGet();
            player.say(chat);          
     
        player.swapHandcards(target);        
       
    },
                ai:{
                    order:5,
                    result:{
                        player:function (player,target){
                var att=get.attitude(player,target);
                if(target==player.previous&&att>0) return att;
                if(target==player.next&&att<0) return -att;
                var att2=get.attitude(player,player.next);
                if(target==player.next.next&&att<0&&att2<0) return -att-att2;
                return 0;
            },
                    },
                },
            },
            reyiliao:{
                trigger:{
                    global:"dying",
                },
                priority:6,
                audio:"ext:新武将:2",
                filter:function (event,player){
        return event.player.hp<=0&&event.player.countCards('he')>0;
    },
                direct:true,
                content:function (){
        "step 0"
        var check;
        if(trigger.player.isUnderControl(true,player)){
            check=player.hasCard(function(card){
                return get.type(card)=='equip';
            });
        }
        else{
            check=(get.attitude(player,trigger.player)>0);
        }
        player.choosePlayerCard(trigger.player,get.prompt('reyiliao',trigger.player),'he').set('ai',function(button){
            if(!_status.event.check) return 0;
            if(_status.event.target.isUnderControl(true,_status.event.player)){
                if(get.type(button.link)=='equip'){
                    return 10-get.value(button.link);
                }
                return 0;
            }
            else{
                return Math.random();
            }
        }).set('check',check).set('filterButton',function(button){
            if(_status.event.player==_status.event.target){
                return lib.filter.cardDiscardable(button.link,_status.event.player);
            }
            return true;
        });
        "step 1"        
         var chat=['趁你病，要你病','你不能死，有我在，我绝不会让你轻易死的'].randomGet();
            player.say(chat);    
        if(result.bool){
            player.logSkill('reyiliao',trigger.player);
            event.card=result.links[0];
            player.showCards([event.card],get.translation(player)+'展示的手牌');
        }
        else{
            event.finish();
        }
        "step 2"
        if(get.type(event.card)=='equip'){
            trigger.player.recover(1-trigger.player.hp);
            trigger.player.discard(event.card);                 
        }
        else{
            player.gain(event.card);
        }
    },
                ai:{
                    threaten:1.4,
                },
            },
            diedun:{
                mod:{
                    globalTo:function (from,to,distance){
            if(from.hp<2)return distance+=Infinity;
        },
                },
                audio:"ext:新武将:2",
                ai:{
                    maixie:true,
                    expose:0.5,
                    threaten:1.5,
                },
            },
            renzhong:{
                audio:"ext:新武将:2",
                enable:"phaseUse",
                usable:1,
                unique:true,
                skillAnimation:true,
                animationStr:"天人合一",
                animationColor:"water",
                filterTarget:function (card,player,target){
        return player!=target;
    },
                multitarget:true,
                multiline:true,
                selectTarget:-1,
                filter:function (event,player){
        return player.hp>0;
    },
                check:function (event,player){
        var num=game.countPlayer(function(current){
            if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
                return true;
            }
            if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
                return true;
            }
        });
        return num>=2;
    },
                content:function (){
        "step 0"
        var targets=game.filterPlayer();
        targets.remove(player);
        targets.sort(lib.sort.seat);
        event.targets=targets;
        event.num=0;       
        player.line(targets,'green');
        "step 1"    
        event.current=player.next;
        if(num<event.targets.length){
            if(event.targets[num].countCards('hej')){
                player.gainPlayerCard(event.targets[num],'hej',true);
            }
            event.num++;
            event.redo();
        }
        "step 2"    
        var chat=['人宗入世，为的是泽济苍生','万物回春'].randomGet();
        player.say(chat); 
        var maxh=true;       
        if(maxh){
            player.chooseCard('选择一张手牌交给'+get.translation(event.current),true).ai=function(card){
                if(get.attitude(player,event.current)>0)
                    return get.value(card);
                return -get.value(card);
            }
        }                       
        "step 3"
        if(result.bool){
            event.current.gain(result.cards[0]);
            player.$give(1,event.current);
            if(event.current.next!=player&&event.current.next.isAlive()){
                event.current=event.current.next;
            }
            else{
                event.finish();
            }
            event.goto(2);
        }
     
    },
                ai:{
                    order:4.5,
                },
            },
            yuanyu:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"dieAfter",
                },
                forced:true,
                popup:false,
                silent:true,
                unique:true,
                filter:function (event,player){
        return event.player.isDead();
    },
                content:function (){                  
          var chat=['我跟初代火影PK过，能活到现在，就靠这个术','你的这个心脏，从现在起，就是属于我的了'].randomGet();
            player.say(chat);                   
        trigger.player.storage.yuanyu=true;
var skill=trigger.player.skills.randomGet()
        player.addSkill(skill);
        if(player.maxHp<5){
        player.maxHp++;
        }
        player.recover();
       
    },
            },
            zhongquan:{
                audio:"ext:新武将:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return !player.isMaxHp();
    },
                content:function (){        
    var chat=['吃我一拳，看是你的骨头硬还是我的拳头硬','点解？点解？点解要逼我出手？'].randomGet();
        player.say(chat);   
        if(!player.isMaxHp()){
        player.addTempSkill('unequip','useCardAfter');
        trigger.num++;
        }
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player,tag,arg){
            if(arg&&arg.name=='sha') return true;
            return false;
        },
                },
            },
        },
        translate:{
            "蛮王":"蛮王",
            "蛮王_info":"锁定技，你的手牌上限为3，你当主公时不增加体力上限。",
            baoxing:"爆星",
            "baoxing_info":"（地爆天星）出牌阶段限一次，你可将两张相同花色的手牌当[南蛮入侵]使用",
            xiangfu:"降服",
            "xiangfu_info":"觉醒技，回合开始阶段，若你的体力上限为7，你立即死亡。",
            xiongqi:"雄起",
            "xiongqi_info":"非限定技，当你处于濒死状态时，你可以丢弃你判定区里的牌，并重置你的武将牌，然后摸1张牌且体力回至体力上限，然后加一体力上限。",
            "guanxing_jiangwei":"继志",
            "guanxing_jiangwei_info":"每当你受到一次伤害后，你可以观看牌堆顶的4张牌，并将其以任意顺序置于牌堆项或牌堆底，然后你摸一张牌。",
            "tiaoxin_jiangwei":"挑衅",
            "tiaoxin_jiangwei_info":"出牌阶段，你可以指定一名使用【杀】能攻击到你的角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉他的一张牌，每回合限一次。",
            retianzhao:"天照",
            "retianzhao_info":"出牌阶段你可将普通杀当火杀使用",
            lunhui:"轮回",
            "lunhui_info":"（轮回天生）限定技，出牌阶段你可弃置两张[桃]并选择一名已阵亡角色，令其复活，其体力回复至X，并摸X张的牌（X为该角色的体力上限），然后你将你的武将牌翻面",
            tianyin:"天引",
            "tianyin_info":"（万象天引）回合结束阶段限一次，你可以随机获得每名角色区域内的一张牌，然后你将你的武将牌翻面",
            yuedu:"月读",
            "yuedu_info":"出牌阶段限一次，你可选择一名角色进行拼点，若你赢，则该角色翻面，并且直到回合结束，你与该角色距离为1，其非锁定技失效，不能使用或打出牌。",
            xuzuo:"须佐",
            "xuzuo_info":"锁定技，你的防御距离+1，当你有手牌时，防止受到属性伤害，无手牌时，防止受到非属性伤害。",
            tianzheng:"天征",
            "tianzheng_info":"（神罗天征）当你即将受到伤害，若伤害来源体力比你高，你可弃置一张黑色手牌令伤害-1，当你即将造成伤害，若对方体力值比你高，你可弃置一张红色手牌令此伤害+1",
            baiyan:"白眼",
            "baiyan_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张红色手牌",
            zhangshu:"掌术",
            "zhangshu_info":"你的回合外，每当你使用、打出、失去或被弃置一张牌时，你立即摸一张牌。",
            shanjie:"闪捷",
            "shanjie_info":"（飞雷神）锁定技，你的防御距离始终+1。回合内你使用的牌可选择距离不大于此牌点数的目标",
            luoxuan:"螺旋",
            "luoxuan_info":"出牌阶段，你可以将任意一张装备牌当做任意一张普通锦囊牌使用，每阶段限一次。",
            yandun:"炎遁",
            "yandun_info":"出牌阶段限一次，你可与一名有手牌的角色进行拼点，若你赢，你观看其手牌并对目标角色造成一点火焰伤害。若你没赢，你可以摸一张牌（这招既可能破鼬的须佐能乎，又可能会被鼬防止，手足羁绊，千丝万缕） ",
            rexuzuo:"须佐",
            "rexuzuo_info":"锁定技，你的手牌上限+1，当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害。",
            qianniao:"千鸟",
            "qianniao_info":"出牌阶段，你使用的普通杀可附带雷属性",
            xianshu:"仙术",
            "xianshu_info":"锁定技，当你失去最后的手牌时，你可以摸牌补至你当前体力的张数，然后回复一点体力。",
            shazang:"沙葬",
            "shazang_info":"（沙暴大葬）当你起码满足以下两个条件之一时：1、使用的牌为最后一张手牌；2、你的体力值为1。（一尾守鹤）你使用的牌可无视距离，并且此时你使用的【杀】【决斗】【过河拆桥】【顺手牵羊】可指定任意名目标角色。",
            juefang:"绝防",
            "juefang_info":"锁定技，当其他玩家使用【杀】指定你为目标时，需额外弃掉一张基本牌，否则该牌对你无效。你防止受到锦囊牌造成的伤害",
            reshenwei:"神威",
            "reshenwei_info":"你可以将任意一张装备牌当【无懈可击】使用（右眼虚化）；当你从背面翻至正面时，你可以弃置一张牌，然后移动场上的一张牌（左眼远距离扭曲空间转移物体）。（四代火影波风水门以装备牌发动锦囊，而宇智波带土以装备牌无懈之，冥冥之中形成克制）",
            xishou:"吸收",
            "xishou_info":"回合结束阶段限一次，你可以弃置一张牌并将你的武将牌翻面，若如此做，你指定一名角色，获得其所有牌。",
            refengyin:"封印",
            "refengyin_info":"（尸鬼封尽）限定技，回合结束阶段你可令任意一名角色永久失去当前的所有技能，然后你进入濒死状态。",
            leique:"雷切",
            "leique_info":"出牌阶段，你可以将一张普通【杀】当雷【杀】使用，你使用的雷【杀】可无视目标角色的防具",
            yizhi:"移植",
            "yizhi_info":"锁定技，每当受到伤害时，你随机获得未加入本局游戏的武将的一个技能（主公技、觉醒技除外）。",
            xianfa:"仙法",
            "xianfa_info":"锁定技，当你失去最后的手牌时，你可以摸一张牌，然后回复一点体力。",
            zhuansheng:"转生",
            "zhuansheng_info":"（秽土转生）出牌阶段限一次，你可弃置一张【桃】并选择一名已阵亡角色，令其复活，其体力回复至2，摸两张的牌，并且身份阵营与你一致（若你为主公则视阵营为忠臣），然后你失去一点体力上限",
            fenshen:"分身",
            "fenshen_info":"出牌阶段限一次，你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌并受到你造成的一点伤害；2.令你摸两张牌，然后你失去一点体力。若拼点没赢的角色是你，你可选择摸两张牌并失去一点体力或弃置一张牌并对目标造成一点伤害，并且你获得一个“影分身”标记（表示你发动的影分身已阵亡，若你有9个或以上的影分身标记时，你因耗尽九尾的查克拉而立即死亡）",
            xianyan:"献眼",
            "xianyan_info":"当你死亡时，可令一名其他角色随机获得你的除此技能外的另一项其他技能，然后该角色回复一点体力。",
            bamen:"八门",
            "bamen_info":"锁定技，出牌阶段开始时，若你的体力值为4或更少，你视为拥有技能“马术”（朝孔雀，孔雀开屏战八方）；若你的体力值为3或更少，你视为拥有技能“咆哮”（昼虎，虎哮山林敌胆寒）；若你的体力值为2或更少；你视为拥有技能“伏骑”（夕象，骑象伏击何人挡？）；若你的体力值为1，你视为拥有技能“暗箭”（夜凯，暗夜放箭凯旋归）",
            fuzhi:"复制",
            "fuzhi_info":"游戏开始所有角色摸牌后、准备阶段开始前和结束阶段，你可以选择一名存活角色，获得其所有技能，直到下一次更改（主公技、限定技、觉醒技、部分能引起冲突（比如时机冲突）的技能除外）",
            resizhan:"死战",
            "resizhan_info":"（八门遁甲之死门）限定技，出牌阶段开始前，你可以摸8张牌，然后你的体力上限调整至1",
            chendun:"尘遁",
            "chendun_info":"出牌阶段限一次，你可与一名有手牌的角色进行拼点，若你赢，目标角色失去一点体力上限，并摸一张牌。若你没赢，目标角色受到一点伤害",
            lunmu:"轮墓",
            "lunmu_info":"（轮墓边狱）你每造成1点伤害后，可以立即获得受到伤害的角色的一张牌。",
            rebusi:"邪徒",
            "rebusi_info":"（不死之身）锁定技，在你死亡前，若你的体力值不大于0，亮出牌堆顶的一张牌并置于你的武将牌上，若此牌的点数与你武将牌上已有的牌点数均不同，则你回复体力至2，若出现重复点数则你死亡。只要你的武将牌上有牌，你的手牌上限便与这些牌数量相等",
            zhenxing:"震星",
            "zhenxing_info":"天碍震星，陨石天降，众忍皆闪。出牌阶段限一次，你可以将两张【杀】当作【万箭齐发】使用",
            tiancheng:"天秤",
            "tiancheng_info":"当你亮出拼点牌后，你可令此牌点数+X（超重岩之术）或点数－X（超轻岩之术）。（X为存活角色数）",
            zhoushu:"咒术",
            "zhoushu_info":"（死司凭血）当你造成伤害时，你可选择标记任意一名其他角色，然后该技能进入冷却状态，直到被诅咒的该角色死亡方可再次发动。当你受到伤害后，同时被诅咒的角色视为受到来源为你的等量的伤害，直到其死亡",
            "zhoushu3":"咒",
            "zhoushu3_info":"",
            "zhoushu2":"咒",
            "zhoushu2_info":"",
            yiyuan:"遗愿",
            "yiyuan_info":"（老年宇智波斑遗愿嘱托带土、秽土斑临封印前爆发完全体须佐能乎）限定技，濒死阶段，若你有手牌，你可以将所有手牌交给一名体力上限大于你的其他角色，调整你的体力上限至与该角色相同，然后回复体力至体力上限（此乃完全体须佐能乎！实力堪比尾兽。小克大野木尘遁）",
            xinxuzuo:"须佐",
            "xinxuzuo_info":"锁定技，出牌阶段你使用的【杀】可指定的目标上限+1（双头须佐能乎）。当你有手牌时，防止受到属性伤害，无手牌时防止受到非属性伤害。",
            xinbaiyan:"白眼",
            "xinbaiyan_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后你可以获得其中一张黑色手牌",
            rouquan:"柔拳",
            "rouquan_info":"回合外每当你因使用、打出或被弃置等方式失去一张手牌时，你立即摸一张牌（类似鸣人的仙术）",
            huitian:"回天",
            "huitian_info":"每当你距离1以内的角色成为杀或决斗的目标后，你可以摸一张牌。",
            zuidun:"嘴遁",
            "zuidun_info":"每当你使用【杀】对目标角色造成伤害时，你可以令其弃置一张手牌，然后防止此次伤害；当你成为【杀】的目标时，你可以弃置一张手牌使之无效，然后该【杀】的使用者摸一张牌",
            hengjian:"横剑",
            "hengjian_info":"横贯八方。出牌阶段，你可以将两张杀当杀使用，此杀无视距离，可以指定任意名目标",
            qianshou:"千手",
            "qianshou_info":"（千手神通）当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。（能阻止我的，只有千手柱间。——宇智波斑）",
            xianti:"仙体",
            "xianti_info":"锁定技，结束阶段，你可以将手牌数补至体力上限，然后回复一点体力",
            "jusha2":"聚散流沙",
            "jusha2_info":"其他角色可在他们各自的回合里给你一张【杀】。",
            jusha:"流沙",
            "jusha_info":"聚散流沙，生死无踪。其他角色可在他们各自的回合里交给你一张【杀】或【酒】。",
            jiansheng:"剑圣",
            "jiansheng_info":"每当你受到一点伤害，你可以摸X张牌（X为你触发此技能时的现存手牌数）",
            zongjian:"纵剑",
            "zongjian_info":"一刃断喉，百步飞剑。你使用的【杀】无距离限制；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于你的手牌数，此【杀】不可被【闪】响应 2.其体力值大于你的体力值，此【杀】伤害+1",
            "zongjian2":"百步飞剑",
            "zongjian2_info":"目标角色的体力值大于等于你的体力值，你可令此【杀】伤害+1",
            guazhang:"卦掌",
            "guazhang_info":"（八卦掌）每当你于出牌阶段内使用的牌与此阶段你使用的上一张牌的花色相同时，你可以摸一张牌",
            reguaili:"怪力",
            "reguaili_info":"出牌阶段限一次，你可以失去任意点体力并摸X张牌，然后直到回合结束，你使用的【杀】或【决斗】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】（X为你以此法失去的体力值）",
            "reguaili2":"爆发",
            "reguaili2_info":"出牌阶段限一次，你可以失去任意点体力并摸X张牌，然后直到回合结束，你使用的【杀】或【决斗】造成的伤害+1，你的进攻距离+X，且你可以额外使用X张【杀】（X为你以此法失去的体力值）",
            mudun:"木遁",
            "mudun_info":"当你需要使用或打出牌时，你可以观看牌堆顶的两张牌，若其中有你可以使用或打出的牌，则你可以使用或打出之（初代火影的木遁能瞬间凭空创造出一片森林）",
            baihao:"百豪",
            "baihao_info":"（百豪之术）出牌阶段结束或濒死状态时，若你已受伤，你可选择回复体力至体力上限，然后失去一点体力上限（创造再生•百豪之术是能提高自愈能力但会减少寿命的禁术）",
            xianren:"仙人",
            "xianren_info":"（自称蛤蟆仙人）觉醒技，准备阶段开始时，若你的“忍”的数量不小于3，你减1点体力上限，选择一项：1、回复1点体力；2、摸两张牌。然后你获得技能“仙术”。（自来也发动仙术须先通灵两个蛤蟆仙人到自己的身体上，所以发动需忍耐很长的时间）",
            renfa:"忍法",
            "renfa_info":"你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"，你的手牌上限+X（X为“忍”的数量）",
            "renfa2":"忍法",
            "renfa2_info":"你每受到一点伤害时，你可以摸一张牌并将一张手牌移出游戏，称为\"忍\"。然后为\"忍\"记录一个基本牌或锦囊牌名称（须与其他\"忍\"记录的名称均不同）。你的回合外，当有其他角色使用与你记录的\"忍\"牌名相同的牌时，你可以令此牌无效，然后移去该\"忍\"",
            citan:"刺探",
            "citan_info":"（偷窥美女、潜入雨忍村）出牌阶段开始时，你可以潜入偷窥其他角色的手牌",
            changsheng:"永生",
            "changsheng_info":"濒死阶段，若你有手牌，你可以与一名有手牌的其他角色拼点，若你赢，你与该角色交换体力值（伤害来源转为你）并增加一点体力上限；若你没手牌或拼点没赢，你回复体力至体力上限并摸一张牌，然后你失去一点体力上限并翻面",
            rechendun:"尘遁",
            "rechendun_info":"出牌阶段限一次，你可与一名有手牌的角色进行拼点，若你赢，目标角色失去一点体力上限，并摸一张牌。若你没赢，目标角色受到一点伤害",
            wuchen:"无尘",
            "wuchen_info":"（无尘迷塞）锁定技，当你没有手牌时，你防止受到任何伤害",
            rexianshu:"仙术",
            "rexianshu_info":"锁定技，当你失去最后的手牌时，你可以摸牌补至你当前体力的张数，然后回复一点体力。",
            shunsheng:"瞬身",
            "shunsheng_info":"（瞬身止水）出牌阶段限一次，你可以弃置一张黑色手牌，和一名存活的角色交换位置。",
            "renfa3":"忍法",
            "renfa3_info":"出牌阶段，你可以用任意数量的手牌与等量的“忍”交换，每阶段限一次。",
            reshouhu:"守护",
            "reshouhu_info":"（守护木叶！最强幻术——别天神）限定技，出牌阶段，你可以弃置一张红色手牌，选择一名存活的非主公角色，令其身份与你一致（你不为主公），并且其之后的一切行动受你控制，然后你（止水）自杀身亡（无伤害来源）",
            linghua:"灵化",
            "linghua_info":"（灵化之术）出牌阶段，你可弃置一张基本牌，选择一名存活角色，令其与你交换角色（仅游戏玩家交换），然后你（加藤断）翻面，失去此技能，获得技能【回魂】，并对目标造成一点伤害，结算完后当前回合立即结束",
            aiyuan:"爱愿",
            "aiyuan_info":"当一名角色流失体力或失去体力上限时，你可以选择一项：1、你摸两张牌；2、令该角色摸两张牌（配合纲手的技能） ",
            rehuihun:"回魂",
            "rehuihun_info":"锁定技，你的防御距离+1。回合开始阶段，你与游戏玩家交换角色（即使游戏玩家角色已阵亡），然后失去此技能，获得技能【灵化】（灵体归位，此忍者适合单机，不适合联机！）",
            jiaoji:"鲛肌",
            "jiaoji_info":"（无尾尾兽）每名角色的回合限一次，当一名其他角色受到一次伤害，你可以选择回复1点体力或摸一张牌",
            shuilao:"水牢",
            "shuilao_info":"（水牢之术）一名其他角色的准备阶段，若你的体力值不大于你的装备区的牌数，你可以与该角色拼点，若你赢，该角色本回合使用的牌不能指定除该角色外的角色为目标（类似队友鼬的月读封锁对方行动）",
            relianhua:"莲华",
            "relianhua_info":"锁定技，摸牌阶段摸牌时，你额外摸X-1张牌（X为游戏轮数）；你的手牌上限等于体力上限。",
            rexuanfeng:"旋风",
            "rexuanfeng_info":"（木叶旋风）锁定技，若你的手牌数是全场唯一最多的，你造成的伤害+1",
            jiaodan:"鲛弹",
            "jiaodan_info":"（水遁•水鲛弹之术）出牌阶段限一次，你可以弃置X张牌对一名其他角色造成1点伤害(X为该角色的体力值)。若你以此法令该角色进入濒死状态，则濒死状态结算后你摸一张牌",
            "jiaodan2":"鲛",
            "jiaodan2_info":"",
            "jiaodan3":"弹",
            "jiaodan3_info":"",
            leidun:"雷盾",
            "leidun_info":"（最强之盾）锁定技，游戏开始时，你的体力上限改为X或X-1（X为其他角色的体力上限之和的一半（向下取整））",
            tuci:"突刺",
            "tuci_info":"（最强之矛 • 地狱突刺）出牌阶段，你可以将一张普通【杀】当雷【杀】使用，你使用的雷【杀】可无视目标角色的防具",
            yingmo:"影模",
            "yingmo_info":"（影子模仿术）当你造成一次伤害，可随机获得此受伤害角色的一项技能，直到你下个出牌阶段开始才解除",
            zhimou:"智谋",
            "zhimou_info":"你可将一张牌按以下规则使用或打出：破解：黑桃当【无懈可击】；仁慈：红桃当【无中生有】；冷静：梅花当【过河拆桥】；勇敢：方片当【决斗】；影缚：你可将你的任意一张锦囊牌当【顺手牵羊】使用；闪避：你可将你的任意一张装备牌当【闪】打出；报仇：你可将你的任意一张基本牌当【杀】使用或打出。除“破解”、“闪避”外，其他项每回合各限一次。",
            "zhimou1":"仁慈",
            "zhimou1_info":"",
            "zhimou2":"勇敢",
            "zhimou2_info":"",
            "zhimou3":"破解",
            "zhimou3_info":"",
            "zhimou4":"冷静",
            "zhimou4_info":"",
            "zhimou5":"报仇",
            "zhimou5_info":"你可将你的任意一张基本牌当【杀】使用或打出",
            "zhimou6":"闪避",
            "zhimou6_info":"你可将你的任意一张装备牌当【闪】打出",
            zuiquan:"醉拳",
            "zuiquan_info":"你可将你的任意两张黑色手牌当【酒】使用",
            "zhimou7":"影缚",
            "zhimou7_info":"你可将你的任意一张锦囊牌当【顺手牵羊】使用。",
            huanji:"环计",
            "huanji_info":"出牌阶段限一次，你可以选择一名其他角色并将一张手牌置于其武将牌上。目标角色于摸牌阶段开始时，获得此牌。若其为男性角色，则获得技能【无双】，若其为女性角色，则获得技能【离间】，直到回合结束。",
            rechengmou:"逞谋",
            "rechengmou_info":"摸牌阶段开始时，若你有“功”牌，你获得之，若你所获得的“功”牌多于两张，你须失去一点体力。",
            rejugong:"居功",
            "rejugong_info":"回合外每名角色的回合限一次，每当场上有角色因受到【杀】或【决斗】造成的伤害，你可以摸一张牌并且将一张手牌置于你的武将牌上，称之为“功”。在你即将受到伤害时，你可以弃置两张“功”，防止此伤害。",
            wanshe:"万蛇",
            "wanshe_info":"（通灵万蛇）你拼点时，可以改为用牌堆顶的一张牌进行拼点；当你拼点的牌亮出后，若此牌颜色为黑色，则点数视为K",
            kuilei:"傀儡",
            "kuilei_info":"（傀儡术）当其他角色阵亡后，你获得阵亡角色的随机一个技能，每当有角色阵亡可随机变动获得的技能",
            baiji:"百机",
            "baiji_info":"（赤秘技•百机操演）每当你造成或受到一次伤害，你可随机获得一张装备牌",
            shayu:"砂雨",
            "shayu_info":"（砂铁时雨）每当你失去一张装备牌，可以摸一张牌",
            refenxin:"焚心",
            "refenxin_info":"限定技，当你杀死一名非主公角色时，在其翻开身份牌之前，你可以与该角色交换身份牌。（你的身份为主公时不能发动此技能）",
            shuidun:"水遁",
            "shuidun_info":"当一名角色受到火属性伤害时，你可防止此伤害（类似柱间的千手防御技）",
            yiliao:"医疗",
            "yiliao_info":"当有角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之。",
            jinshu:"禁术",
            "jinshu_info":"（禁术宗师）锁定技，回合开始阶段，你随机获得技能【分身】（鸣人）、【闪捷】（波风水门）、【转生】（药师兜）中的一个，直到下一次回合开始。",
            baoli:"爆力",
            "baoli_info":"出牌阶段限一次，你可与一名角色拼点，若你赢，你获得以下技能效果：1、直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1；2、你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
            "baoli2":"爆力",
            "baoli2_info":"直到你的下回合开始，你为伤害来源的【杀】或【决斗】造成的伤害+1。",
            "baoli3":"爆力",
            "baoli3_info":"当你使用【杀】指定一名角色为目标后，你可以弃置该角色一张牌。",
            "baofu1":"爆符",
            "baofu1_info":"出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。",
            "baofu2":"爆符",
            "baofu2_info":"（互乘起爆符）当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1以内的一名角色造成等量的火焰伤害。（单张起爆符即可无限连续通灵出起爆符集中于一点无限连续爆炸）",
            baofu:"爆符",
            "baofu_info":"出牌阶段限一次，你可以对一名其他角色造成1点火焰伤害。每当一名角色受到火焰伤害后，你可以弃置一张方片花色的牌，然后对该角色或与其距离为1的一名角色造成等量的火焰伤害。（单张起爆符即可无限连续通灵出起爆符集中于一点无限连续爆炸）",
            rejieyuan:"竭缘",
            "rejieyuan_info":"当你对一名其他角色造成伤害时，若其体力值大于或等于你的体力值，你可弃置一张黑色手牌令此伤害+1；当你受到一名其他角色造成的伤害时，若其体力值大于或等于你的体力值，你可弃置一张红色手牌令此伤害-1。",
            wuyin:"雾隐",
            "wuyin_info":"（雾隐之术）锁定技，当你的武将牌背面朝上时，你防止受到任何伤害",
            ansha:"暗杀",
            "ansha_info":"出牌阶段限一次，你可以选择一名有牌的其他角色，令其弃置一张牌，若如此做，你与其依次将武将牌翻面，直到该回合结束，其非锁定技失效。（水龙弹之术）然后你可以弃置一张手牌视为对任意一名角色使用一张不计入次数限制的无距离限制的【杀】",
            reshuilao:"水牢",
            "reshuilao_info":"（水牢之术）一名其他角色的准备阶段，若你的武将牌背面朝上，你可以与该角色拼点，若你赢，你将你的武将牌翻面，该角色本回合使用的牌不能指定除该角色外的角色为目标",
            "新沙雨":"新沙雨",
            "新沙雨_info":"当你亮出拼点牌后，你可令此牌点数+X（超重岩之术）或点数－X（超轻岩之术）。（X为存活角色数）",
            huadie:"化蝶",
            "huadie_info":"锁定技，若你的手牌数是全场唯一最多的，你造成的伤害+1",
            beihua:"倍化",
            "beihua_info":"（三色药丸）出牌阶段限3次，你可以展示牌堆顶的X张牌，其中每有一张梅花牌，你回复1点体力（梅花引蝶）然后你将这些牌收入手牌，并且弃牌阶段你的手牌上限－X（X为你发动倍化的次数）",
            "beihua2":"倍化",
            "beihua2_info":"",
            zhuanxin:"转心",
            "zhuanxin_info":"（心转心之术）出牌阶段限一次，你可以弃置一张红桃手牌，选择一名存活的其他角色，令其与你交换手牌",
            reyiliao:"医疗",
            "reyiliao_info":"当有角色进入濒死状态时，你可以展示该角色的一张牌：若此牌为装备牌，则该角色弃掉这张牌并回复体力至1，若为非装备牌，你获得之。",
            diedun:"蝶遁",
            "diedun_info":"（梦蝶之遁）当你的体力值小于2时，其他角色计算与你的距离为无限远",
            renzhong:"人宗",
            "renzhong_info":"（万物回春）出牌阶段限一次，你可以获得所有其他角色区域内的一张牌，然后你须为所有存活的角色每人逐个派发一张手牌",
            yuanyu:"怨虞",
            "yuanyu_info":"（地怨虞）你每杀死一名角色后，你永久获得该角色的随机一项技能，然后你依次回复一点体力上限（不得超过5）和一点体力",
            zhongquan:"重拳",
            "zhongquan_info":"锁定技，若你的体力不是全场最高（含之一），你无视对方的防具，并且造成的伤害+1",
        },
    },
    intro:"本扩展包含部分三国改版新武将和秦时明月、火影忍者等作品的人物，强度略高，基本上都有配音，使用前请先打开兼容模式。",
    author:"Sukincen",
    diskURL:"",
    forumURL:"https://tieba.baidu.com/p/5288180800?share=9105&fr=share&see_lz=0&sfc=qqfriend&client_type=2&client_version=8.9.0.0&st=1510983198&unique=F72066C71DBA30E5FEAC1F522434D98E",
    version:"20171118",
},files:{"character":["jiaodu.jpg"],"card":[],"skill":[]}}})