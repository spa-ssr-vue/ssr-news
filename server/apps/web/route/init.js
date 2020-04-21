module.exports = app => {
  const Channel = require("./../../../libs/db/models/Channel");
  const Tag = require("./../../../libs/db/models/Tag");
  const Article = require("./../../../libs/db/models/Article");
  const User = require("./../../../libs/db/models/User");

  app.use("/web/api/init/:flag", async (req, res, next) => {
    const flag = req.params.flag;
    switch (flag) {
      case "channel":
        let name = [
          "广东",
          "广州",
          "深圳",
          "北京",
          "上海",
          "武汉",
          "福建",
          "成都",
          "杭州",
          "重庆",
          "石家庄",
          "河北",
          "河南",
          "西安",
          "江苏",
          "辽宁",
          "浙江",
          "海南",
          "天津",
          "银川",
        ];
        let userList = [
          "_l_guangdong|广东",
          "_l_guangzhou|广州",
          "_l_shenzhen|深圳",
          "_l_beijing|北京",
          "_l_shanghai|上海",
          "_l_wuhan|武汉",
          "_l_fujian|福建",
          "_l_chengdu|成都",
          "_l_hangzhou|杭州",
          "_l_chongqing|重庆",
          "_l_shijiazhuang|石家庄",
          "_l_hebei|河北",
          "_l_henan|河南",
          "_l_xian|西安",
          "_l_jiangsu|江苏",
          "_l_liaoning|辽宁",
          "_l_zhejiang|浙江",
          "_l_hainan|海南",
          "_l_tianjin|天津",
          "_l_ningxia|银川",
        ];
        let ret = userList.map((item, index) => {
          return {
            alias: item.split("|").shift().slice(3),
            name: name[index],
          };
        });
        // const items = await Channel.insertMany(ret);
        res.send(items);
        break;

      case "news":
        let news = [
          {
            app_id: "20200421A03XD300",
            article_type: 0,
            category: "world",
            category2_chn: "国际",
            category2_id: "5601",
            category_chn: "时政",
            category_id: "56",
            cmsid: "20200421A03XD300",
            comment_id: "5114308149",
            comment_num: 3,
            ctr_score: 0.024721792,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A03XD3",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620959507_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_870492/0",
            },
            intro:
              "美国约翰斯·霍普金斯大学发布的实时统计数据显示，截至北京时间4月21日7时30分左右，全球累计确诊新冠肺炎病例2470410例，累计死亡169595例。新冠病毒持续蔓延，许多国家的疫情形势仍不容乐观……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620959507_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "56;5601;5109679;84265|175700360|158189|337723;1;0;34;3592;7;0;3;1;3;0;1;337723|837792|175700360|158189|115228|4489091|85903|87418|84265|121754;662|187|348",
            item_stat:
              "187.00000;3568.00000;0.04929;187.00000;3568.00000;0.04929;187.00000;3568.00000;0.04929;2.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "纽约;疫情;特朗普",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1698372703_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11620956139/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620956140/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620956141/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 08:01:45",
            report:
              '{"ext":"0+3"+"all":";;;10327+485"+"3h":"1454168+88584;875428+59039;world:177550+8637;10327+485;207445+11194"+"app":";;;16543+994;;5;0;5;84934;85.44668;0.06009;5.13414"+"day":"2939426+185281;1791503+120436;world:419309+19722;10327+485;305748+17053"}',
            showtype: "article",
            source: "北京日报客户端",
            source_id: "5109679",
            strategy: 306,
            strategy_pos: 5,
            strategy_score: 0.1291,
            surl: "http://kuaibao.qq.com/s/20200421A03XD300",
            tag_cluster: "",
            tag_label: [
              ["纽约", "84265"],
              ["疫情", "158189"],
              ["特朗普", "337723"],
            ],
            tags: "纽约;新冠肺炎;疫情;特朗普",
            terms:
              "84265:0.357771,175700360:0.162663,158189:0.127224,337723:0.069891",
            title:
              "纽约油价首次跌入负值！全球确诊247万，世卫警告：最糟糕时刻即将到来",
            title_simhash: 0,
            ts: 1587427305,
            update_time: "2020-04-21 08:50:15",
            url: "https://xw.qq.com/cmsid/20200421A03XD300",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A03XD300.html",
          },
          {
            app_id: "20200420A0TPS100",
            article_type: 0,
            category: "ent",
            category2_chn: "中国娱乐",
            category2_id: "112",
            category_chn: "娱乐",
            category_id: "1",
            cmsid: "20200420A0TPS100",
            comment_id: "5113091381",
            comment_num: 56,
            ctr_score: 0.104822285,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0TPS1",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619694000_640330/0",
            img_count: 12,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619711181_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11619711181_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_870492/0",
            },
            intro:
              "明星权力榜用数据说话 与粉丝同行“总裁，夫人她...”“哦？她知道错了？”“不是！是夫人她发微博了！”“发的什么？”“她把您和张总的事儿给捅出来了！”等等别划走，你没进错片场！以上是榜妹脑补出的总裁……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619711181_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619711182_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619711183_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11619711181_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619711182_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619711183_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619694000_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "1;112;5061935;297288|122768894|634135;11;0;10;2266;12;0;2;3;3;0;0;297288|634135|84015|81320|99757|96530|89492|81547|86231;444|900",
            item_stat:
              "3631.00000;35986.00000;0.09150;2823.00000;28528.00000;0.08985;1286.00000;12413.00000;0.09341;45.00000;1888.00000;13838.00000;0.13644;0.00000;6.00000;1.00000;144.91154;19.77114;273593.00000",
            keywords: "张大奕;蒋凡",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/193644050_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619690402/641",
              "https://inews.gtimg.com/newsapp_bt/0/11609892247/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619690404/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 22:08:44",
            report:
              '{"ext":"0+56"+"all":";;;40689+4036"+"3h":"2552381+207280;1627759+134416;ent:989712+72771;11436+1112;14962+1348"+"app":";;;18785+2589;;1;0;12;378269;146.10622;0.13782;20.13676"+"day":"5291619+419265;3362529+269214;ent:1883327+137656;33231+3228;40431+3634"}',
            showtype: "article",
            source: "明星权力榜",
            source_id: "5061935",
            strategy: 102,
            strategy_pos: 3,
            strategy_score: 0.9936,
            surl: "http://kuaibao.qq.com/s/20200420A0TPS100",
            tag_cluster: "",
            tag_label: [
              ["张大奕", "297288"],
              ["蒋凡", "634135"],
            ],
            tags: "张大奕;董花花;蒋凡",
            terms: "297288:0.2142,122768894:0.202392,634135:0.175846",
            title: "她这次是真的凉凉了…",
            title_simhash: 0,
            ts: 1587391724,
            update_time: "2020-04-21 01:24:48",
            url: "https://xw.qq.com/cmsid/20200420A0TPS100",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0TPS100.html",
          },
          {
            app_id: "20200419A0FTWS00",
            article_type: 0,
            category: "health",
            category2_chn: "天地奇观",
            category2_id: "3724",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200419A0FTWS00",
            comment_id: "5105731369",
            comment_num: 42,
            ctr_score: 0.07773851,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0FTWS",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612737663_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_870492/0",
            },
            intro:
              "（健康时报记者 王振雅）健康时报记者注意到，近一个月来广州频繁出现境外输入关联确诊病例。从3月21日，广州出现第一例境外输入关联确诊病例至今，广州已累计境外输入关联确诊病例26例。成为中国大陆境外输……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612737663_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3724;5636595;183719154|435272;41;1;29;1240;1;0;2;1;3;0;0;181570415|82739|115228|837792|109927|85752|783563|83968|182601|85626;494",
            item_stat:
              "645.00000;12092.00000;0.05048;83.00000;969.00000;0.07465;59.00000;698.00000;0.07235;42.00000;21293.00000;293858.00000;0.07246;0.00000;120.00000;602.00000;81.41375;5.89925;1733543.00000",
            keywords: "中国疾控中心",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1712900080_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612728475/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 16:38:58",
            report:
              '{"ext":"0+42"+"all":";;;12159+649"+"3h":"3230715+225872;3664+174;health:1304+61#foshan:0+0#zhongshan:0+0#gdyf:0+0#dg:0+0#gz:0+0#gdsw:0+0#jieyang:0+0#jm:0+0#gdmz:0+0#gdcz:0+0#gdsg:0+0#gdzq:0+0#gdzh:0+0#gdhy:0+0#huizhou:0+0#gdmm:0+0#shantou:0+0;657+56;9450+323"+"app":";;;293858+21293;;602;0;120;1733543;81.41375;0.07246;5.89925"+"day":"6859463+496587;6127+278;health:3873+198#foshan:0+0#zhongshan:0+0#gdyf:0+0#dg:0+0#gz:0+0#gdsw:0+0#jieyang:0+0#jm:0+0#gdmz:0+0#gdcz:0+0#gdsg:0+0#gdzq:0+0#gdzh:0+0#gdhy:0+0#huizhou:0+0#gdmm:0+0#shantou:0+0;1036+87;23162+797"}',
            showtype: "article",
            source: "健康时报客户端",
            source_id: "5636595",
            strategy: 11,
            strategy_pos: 17,
            strategy_score: 0.04665601,
            surl: "http://kuaibao.qq.com/s/20200419A0FTWS00",
            tag_cluster: "",
            tag_label: [["中国疾控中心", "435272"]],
            tags: "绿松石小酒馆;中国疾控中心",
            terms: "183719154:0.223393,435272:0.116504",
            title: "一个月26例境外传染本地！广州成境外输入关联病例最多的地区",
            title_simhash: 0,
            ts: 1587285538,
            update_time: "2020-04-21 00:13:30",
            url: "https://xw.qq.com/cmsid/20200419A0FTWS00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0FTWS00.html",
          },
          {
            app_id: "20200420A03R3M00",
            article_type: 0,
            category: "finance",
            category2_chn: "宏观经济",
            category2_id: "3909",
            category_chn: "财经",
            category_id: "39",
            cmsid: "20200420A03R3M00",
            comment_id: "5108484759",
            comment_num: 99,
            ctr_score: 0.076402254,
            ext: {
              tonality_score: 3,
              news_score: 4,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A03R3M",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615554389_640330/0",
            img_count: 9,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11615230630_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_870492/0",
            },
            intro:
              "美国商务部和劳工部等多部门最新公布的数据显示美国经济正在快速下坠，3月份的零售额暴跌了8.7％，创历史新高，工业生产环比下降了5.4％，高盛现在预计美国第二季度标准普尔盈利将暴跌123％，美国的金融……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615554390_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615554391_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11615230630_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615231032_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615231356_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615554390_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615554391_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615554389_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "39;3909;5100221;111502676|215050|243745|112045|180381;25;1;32;2087;9;0;3;3;4;0;1;243745|81353|208444|207725|176557882|180381|112045|255551|94275;209",
            item_stat:
              "8337.00000;114200.00000;0.06801;2199.00000;26608.00000;0.07618;1129.00000;12806.00000;0.08066;87.00000;70354.00000;358428.00000;0.19628;2.00000;151.00000;108.00000;148.58060;29.16413;10453239.00000",
            keywords: "美国国债;美国经济;美联储;美国财政部",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1299670925_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11548266272/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615225624/641",
              "https://inews.gtimg.com/newsapp_bt/0/11500506791/641",
            ],
            news_level: 4,
            publish_time: "2020-04-20 08:09:44",
            report:
              '{"ext":"0+99"+"all":";;;118049+8710"+"3h":"1222968+66499;136369+8142;finance:204958+10571;10880+957;114138+9633"+"app":";;;427016+83756;;135;2;183;12476692;148.96475;0.19614;29.21832"+"day":"2381161+138378;257783+16604;finance:448926+22845;30457+2572;248823+21270"}',
            showtype: "article",
            source: "BWC中文网",
            source_id: "5100221",
            strategy: 125,
            strategy_pos: 20,
            strategy_score: 0.038135592,
            surl: "http://kuaibao.qq.com/s/20200420A03R3M00",
            tag_cluster: "",
            tag_label: [
              ["美国国债", "215050"],
              ["美国经济", "243745"],
              ["美联储", "112045"],
            ],
            tags: "美国_财经;美国国债;美国经济;美联储;美国财政部",
            terms:
              "111502676:0.329998,215050:0.269011,243745:0.173636,112045:0.079223,180381:0.055669",
            title:
              "116万亿或将从美国撤离，美国违约风险有多大？中国持续抛千亿美债",
            title_simhash: 0,
            ts: 1587341384,
            update_time: "2020-04-20 15:32:13",
            url: "https://xw.qq.com/cmsid/20200420A03R3M00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A03R3M00.html",
          },
          {
            app_id: "20200421A029CL00",
            article_type: 0,
            category: "ent",
            category2_chn: "中国娱乐",
            category2_id: "112",
            category_chn: "娱乐",
            category_id: "1",
            cmsid: "20200421A029CL00",
            comment_id: "5113928261",
            comment_num: 1,
            ctr_score: 0.07499432,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A029CL",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620589505_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11620587796_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_870492/0",
            },
            intro:
              "4月21日，据港媒报道，周迅在早年还未成名前，曾做过人体模特，网上流传了一组周迅的人像油画作品，油画的造型大胆，更有一张衣不蔽体的作品，港媒在报道中则称周迅是为艺术献身。港媒在报道中称有一幅名为《阳……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620589506_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620589508_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11620587796_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620586012_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620586014_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620589506_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620589508_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620589505_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "1;112;5379507;102807|262363|147832909|651114|117473|81529;4;0;30;491;7;0;2;3;3;0;0;102807|262363|651114|124290|84015|114055|160320|147832909|110189|81793;827|629|431|420",
            item_stat:
              "64.00000;683.00000;0.07910;64.00000;683.00000;0.07910;61.00000;653.00000;0.07862;0.00000;208.00000;1620.00000;0.12840;0.00000;0.00000;0.00000;35.43750;4.55000;7371.00000",
            keywords: "周迅;人体模特;潘鸿海;油画;造型",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2633385156_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11620552586/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620556078/641",
              "https://inews.gtimg.com/newsapp_bt/0/2247705782/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 04:48:41",
            report:
              '{"ext":"0+1"+"all":";;;1430+106"+"3h":"2552381+207280;1627759+134416;ent:989712+72771;1307+93;5387+377"+"app":";;;6228+688;;0;0;0;21647;31.46366;0.11047;3.47575"+"day":"5291619+419265;3362529+269214;ent:1883327+137656;1430+106;11584+722"}',
            showtype: "article",
            source: "报告大王",
            source_id: "5379507",
            strategy: 100,
            strategy_pos: 8,
            strategy_score: 0.21600002,
            surl: "http://kuaibao.qq.com/s/20200421A029CL00",
            tag_cluster: "",
            tag_label: [
              ["周迅", "102807"],
              ["人体模特", "262363"],
              ["潘鸿海", "651114"],
            ],
            tags: "周迅;人体模特;阳光下的少女;潘鸿海;油画;造型",
            terms:
              "102807:0.260125,262363:0.231516,147832909:0.172495,651114:0.124757,117473:0.123820,81529:0.087288",
            title:
              "为艺术献身！港媒曝周迅曾做人体模特，造型大胆的油画已升值千万",
            title_simhash: 0,
            ts: 1587415721,
            update_time: "2020-04-21 04:56:43",
            url: "https://xw.qq.com/cmsid/20200421A029CL00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A029CL00.html",
          },
          {
            app_id: "20200419A0A9WR00",
            article_type: 0,
            category: "finance",
            category2_chn: "沪深主板",
            category2_id: "3945",
            category_chn: "财经",
            category_id: "39",
            cmsid: "20200419A0A9WR00",
            comment_id: "5104626920",
            comment_num: 10,
            ctr_score: 0.06285263,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0A9WR",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612606682_640330/0",
            img_count: 20,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611941619_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11611941619_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_870492/0",
            },
            intro:
              "导读：传言四起的同时，蒋凡终于在18日作出回应。一名阿里内部员工向21记者证实，蒋凡在阿里内网，就网络传言带来的不好影响对公司和同事道歉，并请求公司对自己展开调查。图片来源 / 张大奕抖音4月17日……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611941619_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611941620_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611941621_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11611941619_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611941620_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611941621_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612606682_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "39;3945;5003434;297288|634135|658451|89834|10150048;45;1;35;5260;20;0;3;1;3;0;1;297288|634135|658451|86231|84015|82894|110774|10150048|119053|3846715;900|444|627",
            item_stat:
              "1410.00000;32768.00000;0.04122;29.00000;1034.00000;0.02752;10.00000;383.00000;0.02637;10.00000;2309.00000;44843.00000;0.05149;0.00000;8.00000;12.00000;123.04288;6.33557;284106.00000",
            keywords: "张大奕;蒋凡;如涵控股;阿里巴巴;淘宝店",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/72150801_100100/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11609762930/641",
              "https://inews.gtimg.com/newsapp_bt/0/11608095525/641",
              "https://inews.gtimg.com/newsapp_bt/0/11608095527/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 12:33:34",
            report:
              '{"ext":"0+10"+"all":";;;32828+1414"+"3h":"1192853+66499;140520+8281;finance:204958+10571#stock:32182+1199#lic:4554+119#tech:28776+879;358+11;487+19"+"app":";;;44926+2310;;12;0;8;284317;123.08095;0.05142;6.32856"+"day":"2351046+138378;323764+20264;finance:448926+22845#stock:94487+3279#lic:11902+332#tech:61633+1866;1094+33;1335+49"}',
            showtype: "article",
            source: "网贷之家",
            source_id: "5003434",
            strategy: 10,
            strategy_pos: 15,
            strategy_score: 0.003696556,
            surl: "http://kuaibao.qq.com/s/20200419A0A9WR00",
            tag_cluster: "",
            tag_label: [
              ["张大奕", "297288"],
              ["蒋凡", "634135"],
              ["如涵控股", "658451"],
            ],
            tags: "张大奕;蒋凡;如涵控股;阿里巴巴;淘宝店",
            terms:
              "297288:0.202707,634135:0.191478,658451:0.158795,89834:0.10846,10150048:0.0884",
            title:
              "天猫总裁夫人手撕网红后续：蒋凡道歉并恳请公司调查，张大奕身家缩水超4亿",
            title_simhash: 0,
            ts: 1587270814,
            update_time: "2020-04-19 16:11:36",
            url: "https://xw.qq.com/cmsid/20200419A0A9WR00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0A9WR00.html",
          },
          {
            app_id: "20200420A0L5KX00",
            article_type: 0,
            category: "tech",
            category2_chn: "科技大佬",
            category2_id: "610",
            category_chn: "科技",
            category_id: "6",
            cmsid: "20200420A0L5KX00",
            comment_id: "5111359710",
            comment_num: 31,
            ctr_score: 0.046848472,
            ext: {
              tonality_score: 3,
              news_score: 5,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0L5KX",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618083432_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618061357_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11618061357_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_870492/0",
            },
            intro:
              "乐视网创始人  贾跃亭4月20日消息，据澎湃新闻报道，法拉第未来（下称“FF”）获得美国薪酬保障计划916万美元现金援助。澎湃新闻援引FF中国相关员工介绍称，该款项系政府对本土企业的现金援助。申请企……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618061357_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618062879_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618064572_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11618061357_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618062879_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618064572_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618083432_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "6;610;5465158;107158|102272|100575|88554|97899135|283670;16;0;35;1227;5;0;3;1;5;0;1;97899135|89658|89931|107158|88554|89929|393326|114629|233634|804304;119|920|750|49|444|581",
            item_stat:
              "131.00000;4836.00000;0.02645;24.00000;668.00000;0.03409;5.00000;140.00000;0.03265;30.00000;10705.00000;147283.00000;0.07268;0.00000;45.00000;7.00000;62.45904;4.53972;668624.00000",
            keywords: "贾跃亭;风向标;薪酬;创始人;梁建章",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3296601716_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618003444/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617899069/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617907206/641",
            ],
            news_level: 5,
            publish_time: "2020-04-20 17:12:07",
            report:
              '{"ext":"0+31"+"all":";;;4854+131"+"3h":"704045+47055;63517+6494;tech:29560+900;118+5;7208+361"+"app":";;;153480+11144;;7;0;46;702491;63.0376;0.07261;4.57708"+"day":"1553259+104915;95598+8476;tech:62417+1887;686+24;16373+836"}',
            showtype: "article",
            source: "AI财经社",
            source_id: "5465158",
            strategy: 11,
            strategy_pos: 11,
            strategy_score: 0.21600002,
            surl: "http://kuaibao.qq.com/s/20200420A0L5KX00",
            tag_cluster: "",
            tag_label: [
              ["贾跃亭", "107158"],
              ["风向标", "102272"],
              ["薪酬", "100575"],
            ],
            tags: "贾跃亭;风向标;薪酬;创始人;沈义人;梁建章",
            terms:
              "107158:0.301904,102272:0.226275,100575:0.147673,88554:0.131987,97899135:0.1134,283670:0.062274",
            title:
              "大佬风向标：贾跃亭获美薪酬保障计划916万美元援助，按要求使用无需偿还",
            title_simhash: 0,
            ts: 1587373927,
            update_time: "2020-04-20 19:54:25",
            url: "https://xw.qq.com/cmsid/20200420A0L5KX00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0L5KX00.html",
          },
          {
            app_id: "20200420A03O0J00",
            article_type: 0,
            category: "picture",
            category2_chn: "国际",
            category2_id: "5601",
            category_chn: "时政",
            category_id: "56",
            cmsid: "20200420A03O0J00",
            comment_id: "5108458593",
            comment_num: 6,
            ctr_score: 0.042070247,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A03O0J",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615400374_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_870492/0",
            },
            intro:
              "英国的哈里王子和妻子梅根已经脱离了英国王室，去到美国洛杉矶开始新生活。据《每日邮报》当地时间4月19日报道，哈里王子在接受采访时称，其实现在英国的疫情并没有媒体报道的那么严重，遭到英国媒体的“群殴”……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615400375_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615400376_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615400375_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615400376_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615400374_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "56;5601;5107634;226861|111520560|4086574|254555|234276;24;1;30;759;5;0;2;3;3;0;0;226861|125009|234276|87142|169896|83934|230557|85946|158189|254555;494|565",
            item_stat:
              "535.00000;9131.00000;0.05509;97.00000;1590.00000;0.05596;40.00000;679.00000;0.05250;6.00000;476.00000;9077.00000;0.05244;0.00000;6.00000;0.00000;81.86975;4.29327;38970.00000",
            keywords: "哈里王子;鲍里斯·约翰逊;世界卫生组织;梅根",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/252951997_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613888305/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613896125/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613889992/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 08:47:38",
            report:
              '{"ext":"0+6"+"all":";;;9262+539"+"3h":"1454168+86195;875428+57363;picture:0+0;451+20;6775+508"+"app":";;;9990+515;;0;0;7;41485;80.5534;0.05155;4.15265"+"day":"2939426+182892;1791503+118760;picture:0+0;1721+101;11786+857"}',
            showtype: "article",
            source: "译言",
            source_id: "5107634",
            strategy: 11,
            strategy_pos: 21,
            strategy_score: 0.016796164,
            surl: "http://kuaibao.qq.com/s/20200420A03O0J00",
            tag_cluster: "",
            tag_label: [
              ["哈里王子", "226861"],
              ["鲍里斯·约翰逊", "4086574"],
              ["世界卫生组织", "254555"],
            ],
            tags: "哈里王子;英国_社会;鲍里斯·约翰逊;世界卫生组织;梅根",
            terms:
              "226861:0.282363,111520560:0.187326,4086574:0.114551,254555:0.076501,234276:0.070809",
            title: "哈里称英媒夸大疫情规模，遭“群殴”：除了抛弃国家你做了什么？",
            title_simhash: 0,
            ts: 1587343658,
            update_time: "2020-04-21 08:48:25",
            url: "https://xw.qq.com/cmsid/20200420A03O0J00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A03O0J00.html",
          },
          {
            app_id: "20200419A0L2ZZ00",
            article_type: 0,
            category: "society",
            category2_chn: "国际社会",
            category2_id: "3710",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200419A0L2ZZ00",
            comment_id: "5106893672",
            comment_num: 0,
            ctr_score: 0.034271333,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0L2ZZ",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613734291_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_870492/0",
            },
            intro:
              "西班牙卫生部应急与预警协调中心主任费尔南多·西蒙在19日举行的新闻发布会上表示，自新冠肺炎疫情发生以来，西班牙共有30663名医护人员感染新冠病毒。来源：人民日报客户端|作者 姜波编辑：杨萌流程编辑……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613734291_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3710;5109679;176557882|174842539|111725648;36;1;18;102;1;0;2;1;3;0;0;176557882|174842539|145430|201750|155939|120067|85157|118040|237619|111725648;",
            item_stat:
              "134.00000;2546.00000;0.04928;12.00000;278.00000;0.03846;4.00000;100.00000;0.03431;0.00000;72.00000;1430.00000;0.05035;1.00000;1.00000;0.00000;21.50000;1.08252;1548.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1698372703_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11339476724/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 20:47:46",
            report:
              '{"ext":"0+0"+"all":";;;2587+134"+"3h":"3230715+225872;765996+70515;society:0+0;130+3;203094+10996"+"app":";;;1430+73;;0;1;1;1582;21.67123;0.05105;1.10629"+"day":"6859463+496587;1577019+145748;society:0+0;319+12;301397+16855"}',
            showtype: "article",
            source: "北京日报客户端",
            source_id: "5109679",
            strategy: 10,
            strategy_pos: 20,
            strategy_score: 0.010077699,
            surl: "http://kuaibao.qq.com/s/20200419A0L2ZZ00",
            tag_cluster: "",
            tag_label: [],
            tags: "新冠病毒;西班牙卫生部;西班牙_社会",
            terms: "176557882:0.348426,174842539:0.255894,111725648:0.109389",
            title: "西班牙超过3万名医护人员感染新冠病毒",
            title_simhash: 0,
            ts: 1587300466,
            update_time: "2020-04-20 19:30:10",
            url: "https://xw.qq.com/cmsid/20200419A0L2ZZ00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0L2ZZ00.html",
          },
          {
            app_id: "20200420A0TEVF00",
            article_type: 0,
            category: "twentyf",
            category2_chn: "国内",
            category2_id: "5602",
            category_chn: "时政",
            category_id: "56",
            cmsid: "20200420A0TEVF00",
            comment_id: "5113016526",
            comment_num: 379,
            ctr_score: 0.041904956,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0TEVF",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619667216_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_870492/0",
            },
            intro:
              "撰文 |  余晖 艾恬这几天的一个反腐大事，就是公安部副部长孙力军被查了。4月19日，中央纪委国家监委官网发布消息，孙力军涉嫌严重违纪违法，目前正接受中央纪委国家监委纪律审查和监察调查。昨天晚上，国……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619667216_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "56;5602;5013601;2523259|10321450|114501|1042755;11;0;22;1903;5;0;3;1;3;0;1;10321450|2523259|114501|139030|82714|127241|128705|113182|165218244;80|996|492",
            item_stat:
              "59066.00000;1167227.00000;0.04816;32954.00000;780126.00000;0.04053;10619.00000;223110.00000;0.04543;138.00000;591569.00000;5015716.00000;0.11794;0.00000;1762.00000;1016.00000;145.81210;17.19753;86257928.00000",
            keywords: "孙力军;入党介绍人;公安部;孟宏伟",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/92129029_100100/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619604809/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619570478/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619570479/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 22:02:45",
            report:
              '{"ext":"0+379"+"all":";;;1205247+61060"+"3h":"1454168+88584;147793+7467;twentyf:0+0#news:342906+10861#msh:0+0;120103+6596;32886+1646"+"app":";;;5354962+625520;;1071;0;1865;91031074;145.52864;0.11681;16.99939"+"day":"2939426+185281;329071+16975;twentyf:0+0#news:737408+24171#msh:0+0;818146+34948;95574+4615"}',
            showtype: "article",
            source: "政知圈",
            source_id: "5013601",
            strategy: 304,
            strategy_pos: 11,
            strategy_score: 1587391400,
            surl: "http://kuaibao.qq.com/s/20200420A0TEVF00",
            tag_cluster: "",
            tag_label: [
              ["孙力军", "2523259"],
              ["入党介绍人", "10321450"],
              ["公安部", "114501"],
            ],
            tags: "孙力军;入党介绍人;公安部;孟宏伟",
            terms:
              "2523259:0.366727,10321450:0.217751,114501:0.162024,1042755:0.051433",
            title: "孙力军的最后几次公开亮相，还带来一个遗留问题",
            title_simhash: 0,
            ts: 1587391365,
            update_time: "2020-04-21 08:20:35",
            url: "https://xw.qq.com/cmsid/20200420A0TEVF00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0TEVF00.html",
          },
          {
            app_id: "20200421A03M4000",
            article_type: 0,
            category: "society",
            category2_chn: "心理",
            category2_id: "1410",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200421A03M4000",
            comment_id: "5114237539",
            comment_num: 23,
            ctr_score: 0.03063096,
            ext: {
              tonality_score: 2,
              news_score: 4,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A03M40",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620885120_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_870492/0",
            },
            intro:
              "刘云急剧增胖后身体多处出现裂纹。当事人 供图山东费县女子刘云（化名）指其前夫“对其注射激素导致怪病”，已报案近三年，警方的立案程序一直难以推进。费县公安局一名办案民警近日向澎湃新闻（www.thep……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620885121_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620885122_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620885121_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620885122_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620885120_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1410;5007264;160414|205209|219629|103631;1;0;28;4018;5;0;2;3;4;0;0;219629|400601|205209|393326|298710|84015|156319291|86182|160414;485|448|468|543",
            item_stat:
              "360.00000;9777.00000;0.03546;360.00000;9777.00000;0.03546;360.00000;9777.00000;0.03546;5.00000;106.00000;1506.00000;0.07039;1.00000;1.00000;0.00000;27.35849;1.92563;2900.00000",
            keywords: "激素;地塞米松;刘云;糖尿病",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/87129268_100100/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11620883624/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620883625/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620883626/641",
            ],
            news_level: 4,
            publish_time: "2020-04-21 07:33:07",
            report:
              '{"ext": "0+23"+ "all": ";;;73534+2843"+ "3h": "549544+32235;129536+5530;society:0+0#legal:531+10#health:1313+61#sdly:0+0#sd:0+0;73534+2843;190569+6710"+ "app": ";;;23642+2119;;4;2;20;359084;169.45918;0.08963;15.18839"+ "day": "1117444+69916;236591+11473;society:0+0#legal:2005+38#health:3882+198#sdly:0+0#sd:0+0;73534+2843;353696+12700"}',
            showtype: "article",
            source: "澎湃新闻",
            source_id: "5007264",
            strategy: 306,
            strategy_pos: 2,
            strategy_score: 0.287,
            surl: "http://kuaibao.qq.com/s/20200421A03M4000",
            tag_cluster: "",
            tag_label: [
              ["激素", "160414"],
              ["地塞米松", "205209"],
              ["刘云", "219629"],
            ],
            tags: "激素;地塞米松;刘云;糖尿病",
            terms:
              "160414:0.37864,205209:0.293902,219629:0.248153,103631:0.079306",
            title: "女子称被前夫注射激素致病致残难立案，警方：鉴定机构不受理",
            title_simhash: 0,
            ts: 1587425587,
            update_time: "2020-04-21 10:09:07",
            url: "https://xw.qq.com/cmsid/20200421A03M4000",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A03M4000.html",
          },
          {
            app_id: "20200420A074R200",
            article_type: 0,
            category: "edu",
            category2_chn: "小学教育",
            category2_id: "3503",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200420A074R200",
            comment_id: "5109144879",
            comment_num: 34,
            ctr_score: 0.14302076,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A074R2",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615863602_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615806185_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11615806185_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_870492/0",
            },
            intro:
              "哈喽，阿笑又来和你们聊生活中的新鲜事儿了。最近因为受到特殊情况的影响，很多学校都推迟了开学时间，大部分学校都是在近几周才让学生陆续返校，除此之外一些学校因为突发情况突然停下开学脚步，而另一些学校则是……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615806185_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615806209_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615808197_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11615806185_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615806209_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615808197_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615863602_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3503;11008376;84730|84678|345320|244263|195848;23;0;27;492;3;0;2;1;3;0;0;159985|114663|85967|84730|244263|85158|86369|84678|195848;249|181",
            item_stat:
              "11699.00000;171258.00000;0.06393;4204.00000;51632.00000;0.07521;2473.00000;30195.00000;0.07556;33.00000;19942.00000;83321.00000;0.23934;0.00000;28.00000;41.00000;44.59823;10.67412;889378.00000",
            keywords: "幼儿园;高校;西交利物浦大学;南京农业大学;华中科技大学",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/5060822009_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/5870507814/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615799215/641",
              "https://inews.gtimg.com/newsapp_bt/0/11371232633/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 10:32:01",
            report:
              '{"ext":"0+34"+"all":";;;177861+12111"+"3h":"1418524+96816;369266+23511;edu:9102+433;27942+2058;28890+2180"+"app":";;;83321+19942;;41;0;28;889378;44.59823;0.23934;10.67412"+"day":"2602199+185875;629779+42960;edu:18804+944;58235+4616;61346+4904"}',
            showtype: "article",
            source: "汇美说生活",
            source_id: "11008376",
            strategy: 125,
            strategy_pos: 13,
            strategy_score: 0.033653848,
            surl: "http://kuaibao.qq.com/s/20200420A074R200",
            tag_cluster: "",
            tag_label: [
              ["幼儿园", "84730"],
              ["高校", "84678"],
              ["西交利物浦大学", "345320"],
            ],
            tags: "幼儿园;高校;西交利物浦大学;南京农业大学;华中科技大学",
            terms:
              "84730:0.266134,84678:0.191052,345320:0.171215,244263:0.06991,195848:0.028356",
            title: "正式确定！这些高校幼儿园本学期不开学，家长学生心情复杂",
            title_simhash: 0,
            ts: 1587349921,
            update_time: "2020-04-21 05:08:40",
            url: "https://xw.qq.com/cmsid/20200420A074R200",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A074R200.html",
          },
          {
            app_id: "20200420A0QSX100",
            article_type: 0,
            category: "ent",
            category2_chn: "中国娱乐",
            category2_id: "112",
            category_chn: "娱乐",
            category_id: "1",
            cmsid: "20200420A0QSX100",
            comment_id: "5112343013",
            comment_num: 3,
            ctr_score: 0.14262328,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 1,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0QSX1",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619055973_640330/0",
            img_count: 15,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_870492/0",
            },
            intro:
              "点击观看：十点x西瓜视频x吴晓波频道《在场》x《地标70年》比肩李佳琦，稳坐淘宝一姐：4小时卖2亿的女人有多厉害？别总说拼命很累闲着其实更累作者 / 山叔来源 /不山大叔ID/ouba798……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619055973_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "1;112;5611174;105982031|392645|129691|286115|127168310;14;0;22;2426;15;1;2;1;3;0;0;105982031|392645|254760|96204|132189|83129|158708|148378022|129691|81830;785|104|222|627",
            item_stat:
              "6360.00000;57110.00000;0.10009;4312.00000;40507.00000;0.09606;2416.00000;21130.00000;0.10230;3.00000;3688.00000;30140.00000;0.12236;0.00000;1.00000;23.00000;140.42299;17.18248;517880.00000",
            keywords: "李佳琦;罗永浩;许知远",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1874630503_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/1883996888/641",
              "https://inews.gtimg.com/newsapp_bt/0/11551481118/641",
              "https://inews.gtimg.com/newsapp_bt/0/11528693729/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 19:51:36",
            report:
              '{"ext":"0+3"+"all":";;;61267+6768"+"3h":"2552381+207280;1627759+134416;ent:989712+72771;18711+2044;18713+2044"+"app":";;;37326+4561;;32;0;1;637195;139.70511;0.12219;17.07108"+"day":"5291619+419265;3362529+269214;ent:1883327+137656;44664+4720;44669+4723"}',
            showtype: "article",
            source: "十点视频",
            source_id: "5611174",
            strategy: 102,
            strategy_pos: 9,
            strategy_score: 0.9926,
            surl: "http://kuaibao.qq.com/s/20200420A0QSX100",
            tag_cluster: "",
            tag_label: [
              ["李佳琦", "392645"],
              ["罗永浩", "129691"],
              ["许知远", "286115"],
            ],
            tags: "薇娅;李佳琦;罗永浩;许知远;火箭_军事武器",
            terms:
              "105982031:0.397461,392645:0.114577,129691:0.079809,286115:0.079463,127168310:0.053587",
            title: "35岁薇娅私生活曝光：这世界，不是你想的那样",
            title_simhash: 0,
            ts: 1587383496,
            update_time: "2020-04-21 01:31:25",
            url: "https://xw.qq.com/cmsid/20200420A0QSX100",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0QSX100.html",
          },
          {
            app_id: "20200419A0L72L00",
            article_type: 0,
            category: "health",
            category2_chn: "学术健康",
            category2_id: "1425",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200419A0L72L00",
            comment_id: "5106924098",
            comment_num: 8,
            ctr_score: 0.13000421,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0L72L",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613771590_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613754585_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11613754585_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_870492/0",
            },
            intro:
              "据深圳卫健委报道，4月18日深圳再次新增1例来自湖北的输入性新冠肺炎确诊病例，累计报告境内病例422例，境外39例，共461例。除此之外，18日还新增2例来自湖北的无症状感染者。可能很多网友感到奇怪……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613754585_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613755105_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613755489_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11613754585_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613755105_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613755489_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613771590_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1425;17459750;175700360;36;1;30;966;5;0;2;1;3;0;0;176581844|837792|175700360|91936|81434|176557882|104949|129857|82714|113452;",
            item_stat:
              "12067.00000;135603.00000;0.08168;3113.00000;33122.00000;0.08576;1823.00000;19670.00000;0.08456;8.00000;45.00000;595.00000;0.07563;0.00000;0.00000;0.00000;62.64444;4.73782;2819.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/10293805873_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613692538/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613701387/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613707874/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 20:54:47",
            report:
              '{"ext":"0+8"+"all":";;;140831+12454"+"3h":"532238+31355;130682+7344;health:1304+61#kepu:4518+218;17866+1512;17577+1513"+"app":";;;595+45;;0;0;0;2819;62.64444;0.07563;4.73782"+"day":"1100138+69036;302629+17005;health:3873+198#kepu:18284+878;38350+3500;38139+3506"}',
            showtype: "article",
            source: "王成大夫",
            source_id: "17459750",
            strategy: 125,
            strategy_pos: 11,
            strategy_score: 0.04368932,
            surl: "http://kuaibao.qq.com/s/20200419A0L72L00",
            tag_cluster: "",
            tag_label: [],
            tags: "新冠肺炎",
            terms: "175700360:0.124885",
            title:
              "深圳很受伤，再增湖北输入，为何湖北人在家没事，来到深圳就确诊",
            title_simhash: 0,
            ts: 1587300887,
            update_time: "2020-04-19 21:55:32",
            url: "https://xw.qq.com/cmsid/20200419A0L72L00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0L72L00.html",
          },
          {
            app_id: "20200420A06NTG00",
            article_type: 0,
            category: "visit",
            category2_chn: "旅游风光",
            category2_id: "1220",
            category_chn: "旅行",
            category_id: "12",
            cmsid: "20200420A06NTG00",
            comment_id: "5109064497",
            comment_num: 2,
            ctr_score: 0.12572469,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A06NTG",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616506739_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11615730218_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_870492/0",
            },
            intro:
              "如今，随着国家的不断发展和建筑业的不断完善，高层建筑无处不在，已成为现代城市的重要特征之一。随着各种建筑物的不断崛起，各种高层建筑已不再满足于自身的高度，许多建筑物仍在建造中，为了能够在各种建筑物中……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616506740_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616506741_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11615730218_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615730238_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615730239_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616506740_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616506741_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616506739_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "12;1220;10755966;125627;23;0;31;615;0;0;2;3;3;0;0;84295|97856|134915|125627|116539|654222|157736|10275500|143655;680",
            item_stat:
              "8722.00000;159896.00000;0.05171;6804.00000;119421.00000;0.05388;3873.00000;45980.00000;0.07759;2.00000;2.00000;20.00000;0.10000;0.00000;0.00000;0.00000;82.00000;8.20000;164.00000",
            keywords: "高层建筑",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/4501495154_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11615726289/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615726284/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615726323/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 10:16:47",
            report:
              '{"ext":"0+2"+"all":";;;166475+9262"+"3h":"403855+31988;114498+8136;visit:700+19;45673+3774;45138+3737"+"app":";;;20+2;;0;0;0;164;82.0;0.1;8.2"+"day":"910265+70414;287012+17426;visit:1613+43;126000+7344;126580+7386"}',
            showtype: "article",
            source: "大伟乐说科技",
            source_id: "10755966",
            strategy: 104,
            strategy_pos: 9,
            strategy_score: 0.25881705,
            surl: "http://kuaibao.qq.com/s/20200420A06NTG00",
            tag_cluster: "",
            tag_label: [["高层建筑", "125627"]],
            tags: "高层建筑",
            terms: "125627:0.13037",
            title: "世界上4大最“丑”建筑！螃蟹一样也就算了，最后一个“太过分”！",
            title_simhash: 0,
            ts: 1587349007,
            update_time: "2020-04-20 12:49:06",
            url: "https://xw.qq.com/cmsid/20200420A06NTG00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A06NTG00.html",
          },
          {
            app_id: "20200420A0D4M400",
            article_type: 0,
            category: "kepu",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0D4M400",
            comment_id: "5110165542",
            comment_num: 0,
            ctr_score: 0.12211414,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0D4M4",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616816727_640330/0",
            img_count: 2,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_870492/0",
            },
            intro:
              "| 撰文：薛宇（华中科大生命科学与技术学院教授）今儿得按惯例，上来先啰嗦个几句。2月5日上午我在写这篇博文，刚写了一小半看见朋友们在转Dr. James Lyons-Weiler的博文，当时评估了一……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616816727_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;5135248;98338|175984832|1524440|92402;20;0;13;3831;0;0;3;1;3;0;0;102814|176557882|175984832|104484|133982|264703|94998|92402|118371|85631;84|187",
            item_stat:
              "425.00000;6236.00000;0.06330;229.00000;3550.00000;0.05981;128.00000;1864.00000;0.06262;0.00000;368.00000;1790.00000;0.20559;0.00000;0.00000;3.00000;80.21739;16.49162;29520.00000",
            keywords: "艾滋病;吕克·蒙塔尼;蜜汁",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/274413520_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11616806511/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616806512/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 13:47:03",
            report:
              '{"ext":"0+0"+"all":";;;6468+447"+"3h":"299029+19131;75979+4059;kepu:4604+223;1476+115;3588+196"+"app":";;;2243+449;;3;0;3;35262;78.53452;0.20018;15.72091"+"day":"634096+40926;167310+10530;kepu:18370+883;3782+251;9159+521"}',
            showtype: "article",
            source: "中国生物技术网",
            source_id: "5135248",
            strategy: 102,
            strategy_pos: 14,
            strategy_score: 0.9879,
            surl: "http://kuaibao.qq.com/s/20200420A0D4M400",
            tag_cluster: "",
            tag_label: [
              ["艾滋病", "98338"],
              ["吕克·蒙塔尼", "1524440"],
              ["蜜汁", "92402"],
            ],
            tags: "艾滋病;新冠;吕克·蒙塔尼;蜜汁",
            terms:
              "98338:0.475741,175984832:0.19809,1524440:0.146896,92402:0.09694",
            title: "艾滋病毒与新冠的蜜汁相似！",
            title_simhash: 0,
            ts: 1587361623,
            update_time: "2020-04-20 13:55:27",
            url: "https://xw.qq.com/cmsid/20200420A0D4M400",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0D4M400.html",
          },
          {
            app_id: "20200420A0U90L00",
            article_type: 0,
            category: "emotion",
            category2_chn: "婚姻",
            category2_id: "6502",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200420A0U90L00",
            comment_id: "5113247198",
            comment_num: 24,
            ctr_score: 0.1217314,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0U90L",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619908283_640330/0",
            img_count: 16,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619835389_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_870492/0",
            },
            intro:
              '天猫总裁后院起火，正室叫跌网红公司1.5亿股价，终于迎来反转？4月17日，天猫总裁蒋凡夫人在ID为"花花董花花"的微博上发声，发文直接点名千万直播网红张大奕："这是第一次也是最后一次警告你，再来招惹……',
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619908284_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619908285_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619835389_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619835385_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619835388_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619908284_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619908285_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619908283_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6502;5756273;634135|115857|297288|89834|658451|84015;10;0;29;2668;16;0;2;3;3;0;0;634135|297288|84015|96530|115857|81320|658451|89834|92511|82894;900|403|444",
            item_stat:
              "841.00000;10434.00000;0.07420;785.00000;9978.00000;0.07254;390.00000;5087.00000;0.07047;21.00000;48.00000;881.00000;0.05448;0.00000;0.00000;0.00000;152.14583;8.28944;7303.00000",
            keywords: "蒋凡;天猫;张大奕;阿里巴巴;如涵控股;微博",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3649757459_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619826602/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619826603/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619826605/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 22:57:43",
            report:
              '{"ext":"0+24"+"all":";;;11846+939"+"3h":"358092+35388;175674+16584;emotion:2549+54;5179+372;5179+372"+"app":";;;1016+63;;0;0;0;9450;150.0;0.06201;9.30118"+"day":"679405+61144;314367+28465;emotion:8862+191;11390+883;11390+883"}',
            showtype: "article",
            source: "关子陌能量小屋",
            source_id: "5756273",
            strategy: 117,
            strategy_pos: 9,
            strategy_score: 0.05184,
            surl: "http://kuaibao.qq.com/s/20200420A0U90L00",
            tag_cluster: "",
            tag_label: [
              ["蒋凡", "634135"],
              ["天猫", "115857"],
              ["张大奕", "297288"],
            ],
            tags: "蒋凡;天猫;张大奕;阿里巴巴;如涵控股;微博",
            terms:
              "634135:0.273186,115857:0.185611,297288:0.069267,89834:0.069175,658451:0.069155,84015:0.065923",
            title: "天猫总裁蒋凡道歉，夫人手撕网红背后疑点重重：枪响后没有赢家",
            title_simhash: 0,
            ts: 1587394663,
            update_time: "2020-04-21 01:51:14",
            url: "https://xw.qq.com/cmsid/20200420A0U90L00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0U90L00.html",
          },
          {
            app_id: "20200419A0D1MT00",
            article_type: 0,
            category: "edu",
            category2_chn: "教育之高考",
            category2_id: "3505",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200419A0D1MT00",
            comment_id: "5105184682",
            comment_num: 126,
            ctr_score: 0.11934091,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0D1MT",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612271700_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_870492/0",
            },
            intro:
              "近几十年来，我们取得了举世瞩目的发展，与世界各国的关系日益密切。随着在世界上的影响力不断增强，越来越多的国家与我们合作。为了便于交流，许多国家开始学习汉语。或许在不久的将来，汉语也将成为一种通用语言……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612271700_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3505;8840061;87873|131532102|94928|90939|107899|102124;43;1;29;400;4;0;3;1;3;0;0;87873|87418|90939|81249|204566|81483|184140|131532102|276739|229446;727|491|395",
            item_stat:
              "14999.00000;192542.00000;0.07225;10109.00000;138227.00000;0.06812;5459.00000;60272.00000;0.08297;117.00000;43305.00000;292556.00000;0.14802;0.00000;136.00000;48.00000;50.09768;7.41561;2169480.00000",
            keywords: "汉语;高考;考生;英语;考试",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3360537709_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612212876/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612212877/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612212879/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 14:42:33",
            report:
              '{"ext":"0+126"+"all":";;;202730+15735"+"3h":"1373859+94144;461120+27111;edu:9102+433;58613+5151;78087+6985"+"app":";;;292556+43305;;48;0;136;2169480;50.09768;0.14802;7.41561"+"day":"2557534+183203;848744+54984;edu:18804+944;148415+10845;225437+17319"}',
            showtype: "article",
            source: "秋老师聊科技",
            source_id: "8840061",
            strategy: 125,
            strategy_pos: 8,
            strategy_score: 0.048672568,
            surl: "http://kuaibao.qq.com/s/20200419A0D1MT00",
            tag_cluster: "",
            tag_label: [
              ["汉语", "87873"],
              ["高考", "94928"],
              ["考生", "107899"],
            ],
            tags: "汉语;俄罗斯_教育;高考;考生;英语;考试",
            terms:
              "87873:0.320281,131532102:0.249788,94928:0.216358,107899:0.061811,90939:0.061811,102124:0.016389",
            title: "俄罗斯正式把汉语归入“高考”，看看这些题目都开始怀疑自己了",
            title_simhash: 0,
            ts: 1587278553,
            update_time: "2020-04-20 21:24:05",
            url: "https://xw.qq.com/cmsid/20200419A0D1MT00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0D1MT00.html",
          },
          {
            app_id: "20200419A0HD0W00",
            article_type: 0,
            category: "emotion",
            category2_chn: "婚姻",
            category2_id: "6502",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200419A0HD0W00",
            comment_id: "5106023509",
            comment_num: 4,
            ctr_score: 0.12043695,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0HD0W",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613023024_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_870492/0",
            },
            intro:
              "新闻回放：淘宝天猫总裁蒋凡在阿里内网发帖，表达两个主要观点：第一，因为家人在微博上的言论和一些不实网络传言给公司带来了非常不好的影响，深表歉意；第二，他恳请公司对自己展开相关调查。由于资本的力量强大……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613023024_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6502;5058392;87194|634135|82450;40;1;26;1067;0;0;2;1;3;0;0;84015|634135|334893|669697|81203|87204|188264|490701|291511|82024;316|424|444",
            item_stat:
              "3591.00000;55509.00000;0.06071;149.00000;2685.00000;0.05181;56.00000;997.00000;0.05117;4.00000;182.00000;2548.00000;0.07143;0.00000;0.00000;0.00000;78.01099;5.57221;14198.00000",
            keywords: "原配;蒋凡;出轨",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/305174385_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613014646/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 17:35:10",
            report:
              '{"ext":"0+4"+"all":";;;55744+3602"+"3h":"344207+34143;168069+15946;emotion:2470+53;1060+57;1018+57"+"app":";;;2548+182;;0;0;0;14198;78.01099;0.07143;5.57221"+"day":"665520+59899;306762+27827;emotion:8783+190;2920+160;2878+160"}',
            showtype: "article",
            source: "律师谢友林",
            source_id: "5058392",
            strategy: 117,
            strategy_pos: 19,
            strategy_score: 0.075902,
            surl: "http://kuaibao.qq.com/s/20200419A0HD0W00",
            tag_cluster: "",
            tag_label: [
              ["原配", "87194"],
              ["蒋凡", "634135"],
              ["出轨", "82450"],
            ],
            tags: "原配;蒋凡;出轨",
            terms: "87194:0.366439,634135:0.235802,82450:0.102213",
            title: "明明是男人犯错却责怪原配言论不当 蒋凡你的道歉不真诚",
            title_simhash: 0,
            ts: 1587288910,
            update_time: "2020-04-20 19:13:03",
            url: "https://xw.qq.com/cmsid/20200419A0HD0W00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0HD0W00.html",
          },
          {
            app_id: "20200420A0MRDB00",
            article_type: 0,
            category: "lic",
            category2_chn: "沪深主板",
            category2_id: "3945",
            category_chn: "财经",
            category_id: "39",
            cmsid: "20200420A0MRDB00",
            comment_id: "5111595800",
            comment_num: 0,
            ctr_score: 0.115150005,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0MRDB",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618331966_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_870492/0",
            },
            intro:
              "A股再添一“仙股”！股价低至0.92元，暴跌近90%背后，5万股民拾得一地鸡毛！4月20日，*ST飞马(002210)跌停，股价报收0.92元，当日成交2606万元。在2019年清空(退市)一批“仙……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618331966_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "39;3945;5061740;106561|272201|114462|111568134|97483933;16;0;33;1744;4;0;2;1;3;0;1;82894|311668|111568134|272201|82996|94375|239910|106561|113393|123997;383|191",
            item_stat:
              "4954.00000;117713.00000;0.04038;2824.00000;29864.00000;0.08622;1829.00000;20142.00000;0.08300;0.00000;13017.00000;71477.00000;0.18211;0.00000;10.00000;13.00000;57.84566;10.53454;752977.00000",
            keywords: "A股;仙股;股价",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/193515077_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618311623/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618311624/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618311625/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:40:04",
            report:
              '{"ext":"0+0"+"all":";;;119417+5062"+"3h":"1222968+68089;143439+8436;lic:4651+121#stock:32584+1217;14880+1254;14879+1254"+"app":";;;71477+13017;;13;0;10;752977;57.84566;0.18211;10.53454"+"day":"2381161+139968;326683+20419;lic:11999+334#stock:94889+3297;31568+2932;31570+2932"}',
            showtype: "article",
            source: "问理财网",
            source_id: "5061740",
            strategy: 125,
            strategy_pos: 18,
            strategy_score: 0.033980582,
            surl: "http://kuaibao.qq.com/s/20200420A0MRDB00",
            tag_cluster: "",
            tag_label: [
              ["A股", "106561"],
              ["仙股", "272201"],
              ["股价", "114462"],
            ],
            tags: "a股;仙股;股价;归属净利润;公司控股股东",
            terms:
              "106561:0.285696,272201:0.231496,114462:0.219076,111568134:0.101454,97483933:0.06541",
            title: "A股再添一“仙股”：股价低至0.92元 暴跌90％背后坑惨5万股民",
            title_simhash: 0,
            ts: 1587375604,
            update_time: "2020-04-21 10:00:58",
            url: "https://xw.qq.com/cmsid/20200420A0MRDB00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0MRDB00.html",
          },
          {
            app_id: "20200420A0LQ8200",
            article_type: 0,
            category: "society",
            category2_chn: "奇闻趣事",
            category2_id: "3719",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200420A0LQ8200",
            comment_id: "5111444559",
            comment_num: 3,
            ctr_score: 0.028608615,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0LQ82",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618187998_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_870492/0",
            },
            intro:
              "最近，家住海淀区海淀南路北社区9号楼的居民惊喜地发现，电梯按钮上多了一道“高科技装置”：只要手指对准“识别区域”，3秒内该楼层指示灯就会被点亮，手不用直接接触电梯按钮，减少了交叉感染的风险。这套“零……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618187999_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618188000_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618187999_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618188000_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618187998_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3719;5109679;82109;2;0;26;713;3;0;2;3;3;0;0;82109|122287|87513|484496|141537296|126353|105558|111812|277154|105922;56",
            item_stat:
              "3666.00000;71028.00000;0.04905;3575.00000;69081.00000;0.04918;3568.00000;68936.00000;0.04918;3.00000;5.00000;617.00000;0.00810;1.00000;0.00000;0.00000;35.20000;0.28525;176.00000",
            keywords: "电梯",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1698372703_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618152710/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618152711/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618152712/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 07:59:16",
            report:
              '{"ext":"0+3"+"all":";;;84599+4280"+"3h":"3323707+231518;106968+5283;society:0+0#bj:0+0;82484+4180;207445+11194"+"app":";;;1487+58;;0;1;0;2401;41.39655;0.039;1.61466"+"day":"6952455+502233;152898+7200;society:0+0#bj:0+0;82652+4189;305748+17053"}',
            showtype: "article",
            source: "北京日报客户端",
            source_id: "5109679",
            strategy: 306,
            strategy_pos: 6,
            strategy_score: 0.1291,
            surl: "http://kuaibao.qq.com/s/20200420A0LQ8200",
            tag_cluster: "",
            tag_label: [["电梯", "82109"]],
            tags: "电梯",
            terms: "82109:0.275151",
            title: "高科技！海淀居民用3D打印技术自制零接触电梯按钮装置",
            title_simhash: 0,
            ts: 1587427156,
            update_time: "2020-04-21 08:02:19",
            url: "https://xw.qq.com/cmsid/20200420A0LQ8200",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0LQ8200.html",
          },
          {
            app_id: "20200419A0M14E00",
            article_type: 0,
            category: "visit",
            category2_chn: "出境游",
            category2_id: "1219",
            category_chn: "旅行",
            category_id: "12",
            cmsid: "20200419A0M14E00",
            comment_id: "5107166145",
            comment_num: 3,
            ctr_score: 0.13159324,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0M14E",
            img: "https://inews.gtimg.com/newsapp_ls/0/11614299057_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613937963_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11613937963_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_870492/0",
            },
            intro:
              "缅甸丰富多姿的“夜生活”，是富人们的天堂，也是女孩们的“地狱”！缅甸是东南亚的一个比较贫穷落后的国家，但也保留着淳朴的人文风情和古老建筑，长期在高压形态下的现代人都愿意去到这个国家旅游放松。随着外来……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613937963_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613937969_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613937970_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11613937963_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613937969_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613937970_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11614299057_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "12;1219;9016489;111525200|104855|131478;36;1;32;871;0;0;2;1;3;0;0;107606|104855|90819|85271|182957|87261|86496|131478|83432|93377;848|985",
            item_stat:
              "19032.00000;196883.00000;0.08812;8543.00000;99178.00000;0.07926;4437.00000;51530.00000;0.07919;3.00000;165.00000;1414.00000;0.11669;0.00000;0.00000;1.00000;66.75758;7.78996;11015.00000",
            keywords: "夜生活;贫富差距",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/7229242251_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613937417/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613937418/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613937419/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 21:44:03",
            report:
              '{"ext":"0+3"+"all":";;;209762+20110"+"3h":"393643+31116;265054+22206;visit:700+19;47747+3862;46578+3862"+"app":";;;1567+186;;1;0;0;12163;65.39247;0.1187;7.76197"+"day":"900053+69542;576632+50114;visit:1613+43;112057+9621;110887+9621"}',
            showtype: "article",
            source: "陪你一起嗨",
            source_id: "9016489",
            strategy: 125,
            strategy_pos: 20,
            strategy_score: 0.03982301,
            surl: "http://kuaibao.qq.com/s/20200419A0M14E00",
            tag_cluster: "",
            tag_label: [
              ["夜生活", "104855"],
              ["贫富差距", "131478"],
            ],
            tags: "缅甸_旅游;夜生活;贫富差距",
            terms: "111525200:0.323536,104855:0.285305,131478:0.082251",
            title:
              "缅甸丰富多姿的“夜生活”，是富人们的天堂，也是女孩们的“地狱”！",
            title_simhash: 0,
            ts: 1587303843,
            update_time: "2020-04-19 23:31:57",
            url: "https://xw.qq.com/cmsid/20200419A0M14E00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0M14E00.html",
          },
          {
            app_id: "20200420V0UPCJ00",
            article_type: 56,
            category: "ent",
            category2_chn: "综艺",
            category2_id: "103",
            category_chn: "其它",
            category_id: "54",
            cmsid: "20200420V0UPCJ00",
            comment_id: "5113385875",
            comment_num: 0,
            ctr_score: 0.11919787,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 2,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420V0UPCJ",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619975090_196130/0",
            img_count: 0,
            img_special: 0,
            img_type: 2,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619975090_294195/0",
            },
            intro:
              "李佳琦直播完全插不上嘴，金靖的嘴太能说，遭李佳琦咆哮驱赶快走",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619975090_294195/0",
              ],
            },
            is_org: 0,
            item_base:
              "54;103;5625413;;10;0;30;30;0;0;2;2;3;56;0;392645|402342;",
            item_stat:
              "1807.00000;17142.00000;0.09502;1807.00000;17142.00000;0.09502;1516.00000;14017.00000;0.09717;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1679812774_200200/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-20 23:38:16",
            report:
              '{"ext":"0+0"+"all":";;;22148+2208"+"3h":"1512442+114257;200173+16723;ent:989712+72771;17527+1756;45093+3668"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"2818826+218516;350061+27166;ent:1883327+137656;22148+2208;77443+6185"}',
            showtype: "article",
            source: "娱评圈内外",
            source_id: "5625413",
            strategy: 104,
            strategy_pos: 21,
            strategy_score: 0.23454913,
            surl: "http://kuaibao.qq.com/s/20200420V0UPCJ00",
            tag_cluster: "",
            tag_label: [],
            tags: "",
            terms: "",
            title:
              "李佳琦直播完全插不上嘴，金靖的嘴太能说，遭李佳琦咆哮驱赶快走",
            title_simhash: 0,
            ts: 1587397096,
            update_time: "2020-04-21 02:18:06",
            url: "https://xw.qq.com/cmsid/20200420V0UPCJ00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420V0UPCJ00.html",
          },
          {
            app_id: "20200420A093TM00",
            article_type: 0,
            category: "kepu",
            category2_chn: "学术健康",
            category2_id: "1425",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200420A093TM00",
            comment_id: "5109488661",
            comment_num: 26,
            ctr_score: 0.11815814,
            ext: {
              tonality_score: 2,
              news_score: 4,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A093TM",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616191909_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_870492/0",
            },
            intro:
              "新冠疫情发展至今，有 2 个问题一直被大家热议：已治愈的新冠病毒感染者会不会存在二次感染的风险？疫苗会不会不起作用？如今，疫情在全球已成燎原之势，这两个问题更为关键。截至 4 月 19 日，据约翰·……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616191909_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1425;6053704;104085|273048|176557882;22;0;30;1489;4;0;2;1;4;0;0;10415534|273048|91936|93892|250002|98659|4489091|449152|142739;187|511",
            item_stat:
              "1084.00000;13034.00000;0.07645;687.00000;8982.00000;0.07063;285.00000;4107.00000;0.06411;21.00000;26442.00000;220677.00000;0.11982;0.00000;62.00000;149.00000;106.84994;12.80299;2825326.00000",
            keywords: "疫苗;抗体",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11459061333_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11616138393/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616138394/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616138395/641",
            ],
            news_level: 4,
            publish_time: "2020-04-20 11:30:28",
            report:
              '{"ext":"0+26"+"all":";;;13773+1146"+"3h":"549544+32235;135134+7608;kepu:4604+223;3358+249;3344+245"+"app":";;;224598+26953;;153;0;62;2885442;107.05458;0.12001;12.84714"+"day":"1117444+69916;307081+17269;kepu:18370+883;9721+749;9776+745"}',
            showtype: "article",
            source: "阿源医生",
            source_id: "6053704",
            strategy: 10,
            strategy_pos: 18,
            strategy_score: 0.0013996804,
            surl: "http://kuaibao.qq.com/s/20200420A093TM00",
            tag_cluster: "",
            tag_label: [
              ["疫苗", "104085"],
              ["抗体", "273048"],
            ],
            tags: "疫苗;抗体;新冠病毒",
            terms: "104085:0.244267,273048:0.244186,176557882:0.196484",
            title: "疫苗研发恐有难关！最新研究发现抗体可与新冠病毒共存 36 天",
            title_simhash: 0,
            ts: 1587353428,
            update_time: "2020-04-21 00:34:07",
            url: "https://xw.qq.com/cmsid/20200420A093TM00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A093TM00.html",
          },
          {
            app_id: "20200419A0NB0R00",
            article_type: 0,
            category: "jiangsu",
            category2_chn: "摄影作品",
            category2_id: "7903",
            category_chn: "摄影",
            category_id: "79",
            cmsid: "20200419A0NB0R00",
            comment_id: "5107519891",
            comment_num: 293,
            ctr_score: 0.1095707,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0NB0R",
            img: "https://inews.gtimg.com/newsapp_ls/0/11614293635_640330/0",
            img_count: 12,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_870492/0",
            },
            intro:
              "2020年4月19日，距许可馨发表不当言论86天，距苏州市纪委监委回应后19天，还没有处理结果！2020年4月4日，许可馨挑战全网键盘侠。2020年3月31日，苏州市纪委监委通过其官方微博“廉石声音……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11614293635_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "79;7903;18418428;114336124|259071;34;1;11;396;12;0;2;1;3;0;0;114336124|84015|259071|144207433|182870570|146724|111154|91147|224592|88346;0",
            item_stat:
              "2747.00000;24813.00000;0.09942;2681.00000;24373.00000;0.09884;2368.00000;23448.00000;0.09149;287.00000;17259.00000;56920.00000;0.30322;1.00000;317.00000;12.00000;102.35877;31.03672;1766610.00000",
            keywords: "中国药科大学",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11608818468_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11614252049/641",
              "https://inews.gtimg.com/newsapp_bt/0/11614252051/641",
              "https://inews.gtimg.com/newsapp_bt/0/11614252052/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 23:26:28",
            report:
              '{"ext":"0+293"+"all":";;;37346+3659"+"3h":"32209+2567;30554+2555;jiangsu:0+0#suz:0+0;30983+2612;29400+2494"+"app":";;;60998+17853;;12;1;331;1826258;102.29418;0.29268;29.93964"+"day":"41405+3665;37790+3604;jiangsu:0+0#suz:0+0;36906+3593;35323+3475"}',
            showtype: "article",
            source: "键盘侠的名义",
            source_id: "18418428",
            strategy: 104,
            strategy_pos: 3,
            strategy_score: 0.33665928,
            surl: "http://kuaibao.qq.com/s/20200419A0NB0R00",
            tag_cluster: "",
            tag_label: [["中国药科大学", "259071"]],
            tags: "许可馨;中国药科大学",
            terms: "114336124:0.524393,259071:0.220026",
            title: "许可馨事件处理结果跟踪",
            title_simhash: 0,
            ts: 1587309988,
            update_time: "2020-04-21 09:16:16",
            url: "https://xw.qq.com/cmsid/20200419A0NB0R00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0NB0R00.html",
          },
          {
            app_id: "20200420A0Q25C00",
            article_type: 0,
            category: "visit",
            category2_chn: "出境游",
            category2_id: "1219",
            category_chn: "旅行",
            category_id: "12",
            cmsid: "20200420A0Q25C00",
            comment_id: "5112174713",
            comment_num: 0,
            ctr_score: 0.106007695,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0Q25C",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618940273_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11618877912_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_870492/0",
            },
            intro:
              "现在我们国家发展迅速，国民生活水平得到了快速的提高，人们的收入不仅能够解决日常的衣食住行，而且还会有很多的闲钱，很多人会用这些闲钱进行投资或者追求更高的生活品质，比如出国旅游，这就是很多人的首选。但……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618940274_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618940276_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11618877912_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618877913_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618877919_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618940274_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618940276_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618940273_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "12;1219;16372082;111516315|257745;14;0;28;669;4;0;2;3;3;0;0;85752|257745|100591|90819|87523|131629|121794|81431|93128|93664;427",
            item_stat:
              "5062.00000;43450.00000;0.10419;4703.00000;41189.00000;0.10232;3113.00000;28117.00000;0.09946;0.00000;983.00000;8543.00000;0.11506;0.00000;0.00000;1.00000;37.48932;4.31371;36852.00000",
            keywords: "出国旅游",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/7283088563_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618868713/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618869082/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618869827/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 19:26:51",
            report:
              '{"ext":"0+0"+"all":";;;52831+6210"+"3h":"403855+31988;271507+22840;visit:703+19;25947+2896;27327+2987"+"app":";;;13341+1528;;1;0;0;59584;38.99476;0.11453;4.46623"+"day":"910265+70414;583085+50748;visit:1616+43;50570+5851;52740+5998"}',
            showtype: "article",
            source: "yue看世界",
            source_id: "16372082",
            strategy: 125,
            strategy_pos: 17,
            strategy_score: 0.04017857,
            surl: "http://kuaibao.qq.com/s/20200420A0Q25C00",
            tag_cluster: "",
            tag_label: [["出国旅游", "257745"]],
            tags: "非洲_旅游;出国旅游",
            terms: "111516315:0.561026,257745:0.251393",
            title: "中国无偿捐赠的旧衣服，运到非洲后变成啥了，看完你还捐不捐",
            title_simhash: 0,
            ts: 1587382011,
            update_time: "2020-04-21 09:32:59",
            url: "https://xw.qq.com/cmsid/20200420A0Q25C00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0Q25C00.html",
          },
          {
            app_id: "20200419A0HSYB00",
            article_type: 0,
            category: "anhui",
            category2_chn: "重大民生",
            category2_id: "5604",
            category_chn: "时政",
            category_id: "56",
            cmsid: "20200419A0HSYB00",
            comment_id: "5106108623",
            comment_num: 2,
            ctr_score: 0.10184083,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0HSYB",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613105668_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_870492/0",
            },
            intro:
              "根据安徽省煤田地质局的消息，近日，在安徽省淮南市潘集煤矿外围，发现一处特大型煤矿床。新发现煤炭资源量48.57亿吨，均为优质炼焦用煤。此外，还探明煤系天然气地质资源总量近980亿立方米。这一成果，有……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613105668_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "56;5604;6397360;10398139|86079|116008;40;1;26;290;1;0;3;1;3;0;1;114603|116008|131054|113333|123318|86079|215682|686813|274653;708|682|834",
            item_stat:
              "2512.00000;27993.00000;0.08218;2129.00000;25543.00000;0.07677;1222.00000;15053.00000;0.07481;2.00000;1591.00000;10512.00000;0.15135;0.00000;5.00000;1.00000;35.06725;5.30746;55792.00000",
            keywords: "煤炭资源;安徽;煤矿",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2654088743_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613099845/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 17:54:58",
            report:
              '{"ext":"0+2"+"all":";;;30473+2666"+"3h":"1410433+86195;81247+3386;anhui:0+0#ahhf:0+0;12216+942;12058+942"+"app":";;;10529+1591;;1;0;5;55792;35.06725;0.15111;5.29889"+"day":"2895691+182892;158481+7523;anhui:0+0#ahhf:0+0;28023+2283;27871+2283"}',
            showtype: "article",
            source: "舒城新闻网",
            source_id: "6397360",
            strategy: 125,
            strategy_pos: 13,
            strategy_score: 0.033333335,
            surl: "http://kuaibao.qq.com/s/20200419A0HSYB00",
            tag_cluster: "",
            tag_label: [
              ["煤炭资源", "10398139"],
              ["安徽", "86079"],
              ["煤矿", "116008"],
            ],
            tags: "煤炭资源;安徽;煤矿",
            terms: "10398139:0.303483,86079:0.245081,116008:0.169187",
            title: "安徽发现一处特大型煤矿床，煤炭资源量48.57亿吨！",
            title_simhash: 0,
            ts: 1587290098,
            update_time: "2020-04-19 18:04:30",
            url: "https://xw.qq.com/cmsid/20200419A0HSYB00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0HSYB00.html",
          },
          {
            app_id: "20200420A0HDMO00",
            article_type: 0,
            category: "kepu",
            category2_chn: "太空",
            category2_id: "7801",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0HDMO00",
            comment_id: "5110800619",
            comment_num: 36,
            ctr_score: 0.10035612,
            ext: {
              tonality_score: 3,
              news_score: 5,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0HDMO",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618718326_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617473412_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_870492/0",
            },
            intro:
              "目前中国的最高楼是上海中心大厦，它的高度是632米；世界最高楼是迪拜的哈利法塔，这栋楼的高度为828米，虽然这些高楼都很高，但是它们的高是相对的，如果把这些高楼与地球最高峰珠穆朗玛峰相比就不值得一提……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618718328_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618718330_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617473412_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617475132_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617476331_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618718328_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618718330_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618718326_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7801;5494965;10393894;14;0;28;1600;5;0;3;3;5;0;0;115607|10393894|218920|87698|287729|236131|196604|115261|82464|82436;345",
            item_stat:
              "296.00000;3001.00000;0.08802;220.00000;2360.00000;0.08321;146.00000;1448.00000;0.08796;32.00000;14747.00000;139410.00000;0.10578;0.00000;30.00000;14.00000;166.16933;17.57764;2450499.00000",
            keywords: "马里亚纳海沟",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1230046204_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617440166/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617429657/641",
              "https://inews.gtimg.com/newsapp_bt/0/11387939622/641",
            ],
            news_level: 5,
            publish_time: "2020-04-20 18:50:40",
            report:
              '{"ext":"0+36"+"all":";;;3681+376"+"3h":"299029+19131;54694+5156;kepu:4604+223;1805+191;15307+1472"+"app":";;;167280+17489;;16;0;38;2866382;163.89628;0.10455;17.13523"+"day":"634096+40926;87340+7823;kepu:18370+883;3040+300;26093+2505"}',
            showtype: "article",
            source: "覃小懒聊天文",
            source_id: "5494965",
            strategy: 14,
            strategy_pos: 5,
            strategy_score: 0.0021600001,
            surl: "http://kuaibao.qq.com/s/20200420A0HDMO00",
            tag_cluster: "",
            tag_label: [["马里亚纳海沟", "10393894"]],
            tags: "马里亚纳海沟",
            terms: "10393894:0.368718",
            title: "把一块砖头丢到马里亚纳海沟，多久沉到海底？这里告诉你答案",
            title_simhash: 0,
            ts: 1587379840,
            update_time: "2020-04-21 06:31:08",
            url: "https://xw.qq.com/cmsid/20200420A0HDMO00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0HDMO00.html",
          },
          {
            app_id: "20200419A0M46X00",
            article_type: 0,
            category: "edu",
            category2_chn: "教育之高考",
            category2_id: "3505",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200419A0M46X00",
            comment_id: "5107190546",
            comment_num: 2,
            ctr_score: 0.09860919,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0M46X",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613966392_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_870492/0",
            },
            intro:
              "每年的高考，都是一年里紧张的热讨话题，尤其是芊芊学子的考生们更是进入紧张备战状态，家长时刻加油打气。而2020年的今天也同样如此，和往年的高考相比，今年高考的总结概括为一个“难”字。一场新冠肺炎疫情……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613966392_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3505;18307466;94928|94168|90939;35;1;33;1337;1;0;2;1;3;0;0;116836|211475|94168|116674|114663|158189|91692|82714|83968|136582;7|727",
            item_stat:
              "15486.00000;378537.00000;0.03930;11093.00000;323854.00000;0.03312;7697.00000;284216.00000;0.02637;1.00000;216.00000;678.00000;0.31858;0.00000;0.00000;1.00000;58.80093;18.73304;12701.00000",
            keywords: "高考;高三;英语",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11510552712_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11439252145/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 21:49:44",
            report:
              '{"ext":"0+2"+"all":";;;392207+16072"+"3h":"1373859+94144;461120+27111;edu:9102+433;231211+5592;232346+5734"+"app":";;;841+257;;1;0;0;15146;58.93385;0.30559;18.00951"+"day":"2557534+183203;848744+54984;edu:18804+944;337524+11679;342135+12002"}',
            showtype: "article",
            source: "高考必胜站",
            source_id: "18307466",
            strategy: 125,
            strategy_pos: 9,
            strategy_score: 0.045081966,
            surl: "http://kuaibao.qq.com/s/20200419A0M46X00",
            tag_cluster: "",
            tag_label: [
              ["高考", "94928"],
              ["高三", "94168"],
              ["英语", "90939"],
            ],
            tags: "高考;高三;英语",
            terms: "94928:0.465536,94168:0.256399,90939:0.154113",
            title:
              "2020届高考难：广州27岁英语老师确诊，高三师生全封闭至高考结束",
            title_simhash: 0,
            ts: 1587304184,
            update_time: "2020-04-19 21:52:11",
            url: "https://xw.qq.com/cmsid/20200419A0M46X00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0M46X00.html",
          },
          {
            app_id: "20200420A0LDIY00",
            article_type: 0,
            category: "workplace",
            category2_chn: "法律财务",
            category2_id: "8009",
            category_chn: "职场",
            category_id: "80",
            cmsid: "20200420A0LDIY00",
            comment_id: "5111391703",
            comment_num: 13,
            ctr_score: 0.09777775,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0LDIY",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618166306_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_870492/0",
            },
            intro:
              "在谈及工资的时候，老板经常会对员工说一句话，公司给你多少工资，是看你为公司带来了多少收益。对于加薪，很多人都感觉难以启齿，但是他们觉得只要付出就一定有回报，所以他们一直勤勤恳恳的工作，希望有一天老板……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618166306_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "80;8009;6006392;88310|104900|107648;16;0;33;655;0;0;2;1;3;0;0;85367|82866|92087|99659|104900|82894|81732|82261|140504;581",
            item_stat:
              "9230.00000;131248.00000;0.06568;4169.00000;51129.00000;0.07531;1908.00000;23093.00000;0.07613;10.00000;2036.00000;10872.00000;0.18727;0.00000;3.00000;1.00000;79.21464;14.83453;161281.00000",
            keywords: "工资;工作量;离职",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/4345040808_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618093504/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618093506/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618093508/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:16:34",
            report:
              '{"ext":"0+13"+"all":";;;136016+9511"+"3h":"165616+12834;82368+5022;workplace:0+0;24046+1804;33187+2476"+"app":";;;10872+2036;;1;0;3;161281;79.21464;0.18727;14.83453"+"day":"344890+26165;196552+13542;workplace:0+0;55897+4450;70660+5598"}',
            showtype: "article",
            source: "如娱随行",
            source_id: "6006392",
            strategy: 104,
            strategy_pos: 14,
            strategy_score: 0.2468839,
            surl: "http://kuaibao.qq.com/s/20200420A0LDIY00",
            tag_cluster: "",
            tag_label: [
              ["工资", "88310"],
              ["工作量", "104900"],
              ["离职", "107648"],
            ],
            tags: "工资;工作量;离职",
            terms: "88310:0.370064,104900:0.193418,107648:0.140959",
            title:
              "男子工作7年老板未涨薪，提一次加薪还被拒绝，无奈跳槽后老板措手不及",
            title_simhash: 0,
            ts: 1587374194,
            update_time: "2020-04-21 09:32:36",
            url: "https://xw.qq.com/cmsid/20200420A0LDIY00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0LDIY00.html",
          },
          {
            app_id: "20200421A060W600",
            article_type: 0,
            category: "society",
            category2_chn: "社会百态",
            category2_id: "3722",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200421A060W600",
            comment_id: "5114766157",
            comment_num: 2,
            ctr_score: 0.017395329,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A060W6",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621348183_640330/0",
            img_count: 8,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_870492/0",
            },
            intro:
              "   央视网消息：春天来了，刘智明家的阳台上，花开得正盛。所有的花都是刘智明买回来的，但曾身为武汉市武昌医院院长，他浇水的时间并不多。几个月来，花花草草都由刘智明的小儿子照顾。他每天都会给花浇……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621348184_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621348185_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621348184_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621348185_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621348183_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3722;5278151;177387082|554113|176018366|2342626;0;0;26;2302;0;0;2;3;3;0;0;176018366|554113|177387082|187520|87889|175700360|89635|100190;",
            item_stat:
              "0.00000;0.00000;0.03000;0.00000;0.00000;0.03000;0.00000;0.00000;0.03000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "刘智明;武汉市第三医院",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/511182887_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11621328453/641",
              "https://inews.gtimg.com/newsapp_bt/0/11621328455/641",
              "https://inews.gtimg.com/newsapp_bt/0/11621328457/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 09:41:49",
            report:
              '{"ext":"0+2"+"all":";;;4013+112"+"3h":"3323707+231518;574853+44543;society:0+0#hb:0+0#hubtm:0+0#wuhan:0+0;4013+112;634+31"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"6952455+502233;1159289+89151;society:0+0#hb:0+0#hubtm:0+0#wuhan:0+0;4013+112;2313+95"}',
            showtype: "article",
            source: "央视网新闻",
            source_id: "5278151",
            strategy: 306,
            strategy_pos: 3,
            strategy_score: 0.2644,
            surl: "http://kuaibao.qq.com/s/20200421A060W600",
            tag_cluster: "",
            tag_label: [
              ["刘智明", "554113"],
              ["武汉市第三医院", "2342626"],
            ],
            tags: "武昌医院;刘智明;蔡利萍;武汉市第三医院",
            terms:
              "177387082:0.326478,554113:0.320811,176018366:0.202767,2342626:0.066972",
            title: "武昌医院院长刘智明走后两个月，他放在阳台上的花都开了",
            title_simhash: 0,
            ts: 1587433309,
            update_time: "2020-04-21 09:59:35",
            url: "https://xw.qq.com/cmsid/20200421A060W600",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A060W600.html",
          },
          {
            app_id: "20200420A0I5UC00",
            article_type: 0,
            category: "chengdu",
            category2_chn: "小学教育",
            category2_id: "3503",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200420A0I5UC00",
            comment_id: "5110924088",
            comment_num: 10,
            ctr_score: 0.13359393,
            ext: {
              tonality_score: 3,
              news_score: 4,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0I5UC",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617726801_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617607638_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617607638_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_870492/0",
            },
            intro:
              "情最新动态：截至4月20日11:00，全球累计确诊病例约240万例。截至4月19日24时，我国据31个省（自治区、直辖市）和新疆生产建设兵团报告，现有确诊病例1031例（其中重症病例81例），累计治……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617607638_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617496535_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617496550_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617607638_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617496535_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617496550_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617726801_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3503;5389237;85795|85293|83101|307836|306441|849810;17;0;31;8406;4;0;3;1;4;0;0;114663|3266433|130373|106810|306441|849810|84730|96102|88007|581175;682|181|346|904",
            item_stat:
              "9145.00000;103102.00000;0.08143;3463.00000;36308.00000;0.08693;1481.00000;16772.00000;0.08086;10.00000;44404.00000;188167.00000;0.23598;0.00000;21.00000;62.00000;70.08211;16.53811;3111926.00000",
            keywords: "山东;广东;四川;特教学校;山东省教育厅;成都市教育局",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/876028730_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11483562108/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617429733/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617429734/641",
            ],
            news_level: 4,
            publish_time: "2020-04-20 16:04:56",
            report:
              '{"ext":"0+10"+"all":";;;105518+9370"+"3h":"1418524+96816;369266+23511;chengdu:0+0#sd:0+0#cd:0+0#edu:9302+448;15934+1361;16078+1351"+"app":";;;188167+44404;;62;0;21;3111926;70.08211;0.23598;16.53811"+"day":"2602199+185875;629779+42960;chengdu:0+0#sd:0+0#cd:0+0#edu:19004+959;38724+3688;38868+3678"}',
            showtype: "article",
            source: "天星教育",
            source_id: "5389237",
            strategy: 125,
            strategy_pos: 19,
            strategy_score: 0.033333335,
            surl: "http://kuaibao.qq.com/s/20200420A0I5UC00",
            tag_cluster: "",
            tag_label: [
              ["山东", "85795"],
              ["广东", "85293"],
              ["四川", "83101"],
            ],
            tags: "山东;广东;四川;特教学校;山东省教育厅;成都市教育局",
            terms:
              "85795:0.265207,85293:0.246971,83101:0.177051,307836:0.125161,306441:0.101576,849810:0.084035",
            title:
              "开学紧急叫停！广东、山东、四川多地再次延迟开！附开学时间调整表",
            title_simhash: 0,
            ts: 1587369896,
            update_time: "2020-04-20 21:32:41",
            url: "https://xw.qq.com/cmsid/20200420A0I5UC00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0I5UC00.html",
          },
          {
            app_id: "20200421A05L3Y00",
            article_type: 0,
            category: "ent",
            category2_chn: "中国娱乐",
            category2_id: "112",
            category_chn: "娱乐",
            category_id: "1",
            cmsid: "20200421A05L3Y00",
            comment_id: "5114684672",
            comment_num: 0,
            ctr_score: 0.120864324,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A05L3Y",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621489466_640330/0",
            img_count: 10,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621490058_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11621268305_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11621490058_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_870492/0",
            },
            intro:
              "张馨予应该是活的最真实的女星了，宅家期间张馨予解锁多重身份，她化身俏厨娘做了各种各样的美食，每一样单品都让网友垂涎欲滴，网友也在线羡慕何捷，张馨予长得漂亮，还如此优秀，厨艺精湛太贤惠。除此之外张馨予……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621490058_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621490059_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621490061_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11621268305_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621268291_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621268324_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11621490058_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621490059_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11621490061_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621489466_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "1;112;5140802;81761;0;0;30;779;0;0;2;3;3;0;0;81761|10400368|87875|260503|92951|131272|84553|81611|10563365|187597;629",
            item_stat:
              "49.00000;300.00000;0.11581;49.00000;300.00000;0.11581;49.00000;300.00000;0.11581;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "张馨予",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1912463524_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11621236121/641",
              "https://inews.gtimg.com/newsapp_bt/0/11621236077/641",
              "https://inews.gtimg.com/newsapp_bt/0/11621237833/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 10:10:51",
            report:
              '{"ext": "0+0"+ "all": ";;;845+103"+ "3h": "2624037+212481;1671248+137714;ent:1020864+74816;845+103;17513+1358"+ "app": ";;;0+0;;0;0;0;0;0;0;0"+ "day": "5363275+424466;3406018+272512;ent:1914479+139701;845+103;49464+3296"}',
            showtype: "article",
            source: "90后小青",
            source_id: "5140802",
            strategy: 304,
            strategy_pos: 10,
            strategy_score: 1587432400,
            surl: "http://kuaibao.qq.com/s/20200421A05L3Y00",
            tag_cluster: "",
            tag_label: [["张馨予", "81761"]],
            tags: "张馨予",
            terms: "81761:0.634477",
            title:
              "张馨予清晨化身时尚花农，睡裤配雨靴花园喷药，挽裤腿秀细长小腿",
            title_simhash: 0,
            ts: 1587435051,
            update_time: "2020-04-21 10:10:55",
            url: "https://xw.qq.com/cmsid/20200421A05L3Y00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A05L3Y00.html",
          },
          {
            app_id: "20200420A0F3X800",
            article_type: 0,
            category: "kepu",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0F3X800",
            comment_id: "5110460814",
            comment_num: 2,
            ctr_score: 0.1174984,
            ext: {
              tonality_score: 2,
              news_score: 4,
              img_type: 0,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0F3X8",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618095290_640330/0",
            img_count: 0,
            img_special: 0,
            img_type: 0,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_870492/0",
            },
            intro:
              "每经编辑：毕陆名据环球时报，据英国《星期日泰晤士报》消息，比利时一项新的研究报告说，羊驼血液中的抗体有助于消灭新冠病毒。据比利时弗拉姆斯生物技术研究所（Vlaams Institute for Bi……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618095290_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;5005722;176557882|273048|180726;18;0;31;1082;0;0;2;0;4;0;0;176557882|180726|273048|81028|2321812|109128|99981|393326|86148;511|303",
            item_stat:
              "222.00000;3238.00000;0.06320;102.00000;1640.00000;0.05700;38.00000;749.00000;0.04622;2.00000;1467.00000;45534.00000;0.03222;0.00000;4.00000;8.00000;52.39809;1.68815;76868.00000",
            keywords: "抗体;羊驼",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/314983738_200200/0",
            multi_imgs: [],
            news_level: 4,
            publish_time: "2020-04-20 14:38:33",
            report:
              '{"ext":"0+2"+"all":";;;3635+248"+"3h":"299029+19131;75979+4059;kepu:4604+223#finance:210889+10878;844+48;51389+1479"+"app":";;;50427+1763;;10;0;4;90406;51.27964;0.03496;1.79281"+"day":"634096+40926;167310+10530;kepu:18370+883#finance:454857+23152;2037+128;95849+3436"}',
            showtype: "article",
            source: "每日经济新闻",
            source_id: "5005722",
            strategy: 10,
            strategy_pos: 21,
            strategy_score: 0.000302331,
            surl: "http://kuaibao.qq.com/s/20200420A0F3X800",
            tag_cluster: "",
            tag_label: [
              ["抗体", "273048"],
              ["羊驼", "180726"],
            ],
            tags: "新冠病毒;抗体;羊驼",
            terms: "176557882:0.301117,273048:0.222505,180726:0.178537",
            title:
              "“神兽”羊驼立功？新研究报告称羊驼血液中抗体有助于消灭新冠病毒",
            title_simhash: 0,
            ts: 1587364713,
            update_time: "2020-04-20 17:55:36",
            url: "https://xw.qq.com/cmsid/20200420A0F3X800",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0F3X800.html",
          },
          {
            app_id: "20200420A0QM7O00",
            article_type: 0,
            category: "foshan",
            category2_chn: "小学教育",
            category2_id: "3503",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200420A0QM7O00",
            comment_id: "5112295965",
            comment_num: 0,
            ctr_score: 0.10864961,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0QM7O",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619132654_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619006819_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619006819_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_870492/0",
            },
            intro:
              "广东官宣了开学时间，无缘决赛圈4月27日，高三、初三学生回校。5月11日后，根据疫情情况，中小学生陆续回校。5月份开始，小学生们都纷纷开学了！牛叔盼星星盼月亮，终于盼到了开学时间……广东人不愧是广东……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619006819_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619006818_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619006816_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619006819_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619006818_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619006816_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619132654_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3503;17526110;85293;14;0;24;584;7;0;2;1;3;0;0;114663|87005|85224|85293|249442|283443|419188|142507|91066|1180802;682",
            item_stat:
              "1232.00000;14088.00000;0.08009;623.00000;8154.00000;0.07052;223.00000;3550.00000;0.05835;0.00000;1023.00000;6376.00000;0.16045;0.00000;0.00000;7.00000;62.61193;10.04580;64052.00000",
            keywords: "广东",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11391805980_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11563998447/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619001231/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619001232/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 19:50:56",
            report:
              '{"ext":"0+0"+"all":";;;14687+1272"+"3h":"1418524+96816;369266+23511;foshan:0+0#edu:9302+448;3488+218;3488+218"+"app":";;;6376+1023;;7;0;0;64052;62.61193;0.16045;10.0458"+"day":"2602199+185875;629779+42960;foshan:0+0#edu:19004+959;8753+663;8753+663"}',
            showtype: "article",
            source: "职展未来职业说",
            source_id: "17526110",
            strategy: 125,
            strategy_pos: 13,
            strategy_score: 0.033980582,
            surl: "http://kuaibao.qq.com/s/20200420A0QM7O00",
            tag_cluster: "",
            tag_label: [["广东", "85293"]],
            tags: "广东",
            terms: "85293:0.496108",
            title: "广东开学时间定了！神兽终于归笼了，老师却哭了……",
            title_simhash: 0,
            ts: 1587383456,
            update_time: "2020-04-20 22:56:36",
            url: "https://xw.qq.com/cmsid/20200420A0QM7O00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0QM7O00.html",
          },
          {
            app_id: "20200421A042VE00",
            article_type: 0,
            category: "health",
            category2_chn: "学术健康",
            category2_id: "1425",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200421A042VE00",
            comment_id: "5114345870",
            comment_num: 0,
            ctr_score: 0.09807625,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 1,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A042VE",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621044308_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_870492/0",
            },
            intro:
              "近期，军方援鄂前方专家组组长、解放军总医院呼吸科专家刘又宁接受中央电视台《新闻1+1》栏目白岩松的连线采访，透露了一个新发现：现在已经发现有个别健康人是携带病毒的，称之为健康病毒携带者。新冠病毒受温……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621044308_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1425;9935874;176557882|91936|84712|686649|4847562|271429;1;0;17;1652;4;1;2;1;3;0;0;84917|176557882|91936|170300|177051|10192729|2817885|333205|4847562|244301;187|879|94|366",
            item_stat:
              "238.00000;1859.00000;0.10970;238.00000;1859.00000;0.10970;238.00000;1859.00000;0.10970;0.00000;0.00000;1.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "病毒;央视;玛丽·梅伦;刘又宁;伤寒",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/10968722783_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11547849618/641",
              "https://inews.gtimg.com/newsapp_bt/0/11348627288/641",
              "https://inews.gtimg.com/newsapp_bt/0/11551363657/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 08:03:32",
            report:
              '{"ext":"0+0"+"all":";;;8477+766"+"3h":"549544+32235;135134+7608;health:1313+61;8477+766;8518+766"+"app":";;;1+0;;0;0;0;0;0.0;0.0;0.0"+"day":"1117444+69916;307081+17269;health:3882+198;8477+766;8572+767"}',
            showtype: "article",
            source: "今日闵行",
            source_id: "9935874",
            strategy: 10,
            strategy_pos: 8,
            strategy_score: 0.36,
            surl: "http://kuaibao.qq.com/s/20200421A042VE00",
            tag_cluster: "",
            tag_label: [
              ["病毒", "91936"],
              ["央视", "84712"],
              ["玛丽·梅伦", "686649"],
            ],
            tags: "新冠病毒;病毒;央视;玛丽·梅伦;刘又宁;伤寒",
            terms:
              "176557882:0.445646,91936:0.24459,84712:0.083392,686649:0.075653,4847562:0.075611,271429:0.075109",
            title: "央视曝光新冠病毒最新发现！太可怕了",
            title_simhash: 0,
            ts: 1587427412,
            update_time: "2020-04-21 08:55:24",
            url: "https://xw.qq.com/cmsid/20200421A042VE00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A042VE00.html",
          },
          {
            app_id: "20200420A0JDQ700",
            article_type: 0,
            category: "emotion",
            category2_chn: "婚姻",
            category2_id: "6502",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200420A0JDQ700",
            comment_id: "5111105451",
            comment_num: 3,
            ctr_score: 0.09649274,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0JDQ7",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617842898_640330/0",
            img_count: 6,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_870492/0",
            },
            intro:
              "淘宝天猫总裁蒋凡夫人怒撕小三张大奕，很快演变成一场沸沸扬扬的八点半狗血剧。本应该三个当事人私下解决的纠葛，引爆成全网的一场舆论狂欢。总裁夫人那条做好鱼死网破准备的微博，把本来只想给无趣的中年生活添点……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617842901_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617842902_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617842901_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617842902_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617842898_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6502;17831954;256944|634135|264901|105996145;17;0;34;1744;6;0;2;3;3;0;0;256944|634135|86457|104909|124189|82047|81320|87819|105996145|84015;851|940|444",
            item_stat:
              "1745.00000;22137.00000;0.07289;341.00000;4420.00000;0.07077;172.00000;2095.00000;0.07393;3.00000;73.00000;1235.00000;0.05911;0.00000;1.00000;1.00000;134.69862;7.96194;9833.00000",
            keywords: "林凤娇;蒋凡;于成龙",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11022290569_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617400968/641",
              "https://inews.gtimg.com/newsapp_bt/0/11609483144/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617402979/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 16:33:47",
            report:
              '{"ext":"0+3"+"all":";;;22616+1796"+"3h":"358092+35388;175674+16584;emotion:2549+54;2003+171;2003+171"+"app":";;;1344+92;;2;0;2;13368;145.30435;0.06845;9.94643"+"day":"679405+61144;314367+28465;emotion:8862+191;4899+392;4899+392"}',
            showtype: "article",
            source: "某潇妈",
            source_id: "17831954",
            strategy: 102,
            strategy_pos: 18,
            strategy_score: 0.9866,
            surl: "http://kuaibao.qq.com/s/20200420A0JDQ700",
            tag_cluster: "",
            tag_label: [
              ["林凤娇", "256944"],
              ["蒋凡", "634135"],
              ["于成龙", "264901"],
            ],
            tags: "林凤娇;蒋凡;于成龙;龙嫂",
            terms:
              "256944:0.51332,634135:0.072631,264901:0.060512,105996145:0.059595",
            title:
              "天猫总裁夫人VS林凤娇：婚姻这事，忍不住，半路出局；忍得住，终得圆满",
            title_simhash: 0,
            ts: 1587371627,
            update_time: "2020-04-20 17:45:42",
            url: "https://xw.qq.com/cmsid/20200420A0JDQ700",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0JDQ700.html",
          },
          {
            app_id: "20200419A0J4O200",
            article_type: 0,
            category: "kepu",
            category2_chn: "计算机科学",
            category2_id: "7812",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200419A0J4O200",
            comment_id: "5106395279",
            comment_num: 1,
            ctr_score: 0.09646713,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0J4O2",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613358480_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_870492/0",
            },
            intro:
              "世间万物都逃不过生死，人类害怕死亡，害怕死亡的到来。每个人都想尽可能的延长自己的生命，两千多年前的秦始皇就是最典型的例子，他派人到国外去寻找长生不老的灵丹妙药。但现在大家都清楚地知道，所谓的长生不老……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613358481_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613358482_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613358481_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613358482_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613358480_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7812;5047049;156776018|98659|349506;39;1;25;1042;0;0;3;3;3;0;0;109052636|98659|349506|86148|350094|145051|130947|103106|100656|105682;511|381",
            item_stat:
              "66.00000;845.00000;0.06825;13.00000;168.00000;0.05694;8.00000;88.00000;0.05612;1.00000;45.00000;551.00000;0.08167;0.00000;2.00000;2.00000;76.04444;6.21053;3422.00000",
            keywords: "细胞;纳米机器人",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2573015187_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613351011/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613351012/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613351013/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 19:00:08",
            report:
              '{"ext":"0+1"+"all":";;;850+67"+"3h":"289940+18488;221+13;kepu:4518+218;78+8;280+25"+"app":";;;551+45;;2;0;2;3422;76.04444;0.08167;6.21053"+"day":"625007+40283;564+24;kepu:18284+878;173+14;434+32"}',
            showtype: "article",
            source: "说三道势",
            source_id: "5047049",
            strategy: 117,
            strategy_pos: 10,
            strategy_score: 0.055556,
            surl: "http://kuaibao.qq.com/s/20200419A0J4O200",
            tag_cluster: "",
            tag_label: [
              ["细胞", "98659"],
              ["纳米机器人", "349506"],
            ],
            tags: "雷-库兹韦尔;细胞;纳米机器人",
            terms: "156776018:0.277884,98659:0.245827,349506:0.15031",
            title: "人类2029年开始永生之旅 2045年将有不死之身",
            title_simhash: 0,
            ts: 1587294008,
            update_time: "2020-04-19 19:08:40",
            url: "https://xw.qq.com/cmsid/20200419A0J4O200",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0J4O200.html",
          },
          {
            app_id: "20200419A0GLI200",
            article_type: 0,
            category: "history",
            category2_chn: "明清史",
            category2_id: "6403",
            category_chn: "历史",
            category_id: "64",
            cmsid: "20200419A0GLI200",
            comment_id: "5105884346",
            comment_num: 11,
            ctr_score: 0.094202965,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0GLI2",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612886997_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612867979_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11612867979_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_870492/0",
            },
            intro:
              "《三国演义》中的刘备曾说过一句有名的话：“兄弟如手足，女人如衣服。”虽然这样的价值观非常落后，但不可否认，自古以来无数男子的思想真就是如此，如果谁将女人看得比兄弟重要，多半要被嘲一句贪恋美色。今天要……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612867979_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612868885_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612868473_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11612867979_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612868885_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612868473_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612886997_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "64;6403;5250154;212497|643563|122651778|219821;40;1;30;1054;5;0;3;1;3;0;0;212497|122651778|643563|109362|184700|81986|219821|90830|237222|167453;339|700",
            item_stat:
              "25255.00000;294457.00000;0.07898;6345.00000;74983.00000;0.07796;3803.00000;49597.00000;0.07114;11.00000;63.00000;836.00000;0.07536;0.00000;0.00000;0.00000;93.63492;7.05622;5899.00000",
            keywords: "李烈钧;龚永;武宁县",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/455611870_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612849776/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612849777/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612849778/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 17:10:41",
            report:
              '{"ext":"0+11"+"all":";;;298227+25652"+"3h":"367162+33460;152352+13325;history:4181+504;39698+2869;48940+3850"+"app":";;;842+63;;0;0;0;5913;93.85714;0.07482;7.02257"+"day":"829007+74458;344693+30614;history:15717+1442;78753+6742;99061+8773"}',
            showtype: "article",
            source: "蜀山笔侠",
            source_id: "5250154",
            strategy: 125,
            strategy_pos: 17,
            strategy_score: 0.03301887,
            surl: "http://kuaibao.qq.com/s/20200419A0GLI200",
            tag_cluster: "",
            tag_label: [
              ["李烈钧", "212497"],
              ["龚永", "643563"],
              ["武宁县", "219821"],
            ],
            tags: "李烈钧;龚永;华世琦;武宁县",
            terms:
              "212497:0.328333,643563:0.199114,122651778:0.15144,219821:0.132503",
            title: "他处死自己兄弟，娶兄弟美貌遗孀，与其生10个孩子，死后享国葬",
            title_simhash: 0,
            ts: 1587287441,
            update_time: "2020-04-20 15:10:41",
            url: "https://xw.qq.com/cmsid/20200419A0GLI200",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0GLI200.html",
          },
          {
            app_id: "20200420A0MY9V00",
            article_type: 0,
            category: "finance",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200420A0MY9V00",
            comment_id: "5111625602",
            comment_num: 993,
            ctr_score: 0.09417514,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0MY9V",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618374042_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_870492/0",
            },
            intro:
              "导读：深圳楼市近期热度飙升，与投资需求入市、市场做多炒作有关。来   源丨21世纪经济报道（ID：jjbd21）记   者丨张晓玲,申楚源,谢丽婷,辛继召,张敏编   辑丨李清宇,曾芳,黎雨桐“8秒……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618374042_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;1233;219792|81434|106956|111866|105019;10;0;28;5004;5;0;3;1;3;0;0;219792|81434|105019|106531|90672|158189|84963|109321|275781|158042518;829|522",
            item_stat:
              "27995.00000;131197.00000;0.17577;4789.00000;28060.00000;0.14544;1979.00000;10579.00000;0.15658;911.00000;232253.00000;637715.00000;0.36420;0.00000;2415.00000;2315.00000;193.44826;70.45300;44928936.00000",
            keywords: "深圳楼市;深圳;炒房客;中介;开发商",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/8774516139_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618343600/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618343602/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618343603/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 00:02:02",
            report:
              '{"ext":"0+993"+"all":";;;132688+28214"+"3h":"736726+41348;556925+30302;finance:210889+10878#house:19337+828#shantou:0+0#housesz:0+0;10801+1847;46193+2852"+"app":";;;637715+232253;;2315;0;2415;44928937;193.44825;0.3642;70.453"+"day":"1726267+99259;1341428+73673;finance:454857+23152#house:46707+2053#shantou:0+0#housesz:0+0;29551+5008;92826+6323"}',
            showtype: "article",
            source: "21世纪经济报道",
            source_id: "1233",
            strategy: 125,
            strategy_pos: 11,
            strategy_score: 0.033653848,
            surl: "http://kuaibao.qq.com/s/20200420A0MY9V00",
            tag_cluster: "",
            tag_label: [
              ["深圳楼市", "219792"],
              ["深圳", "81434"],
              ["炒房客", "106956"],
            ],
            tags: "深圳楼市;深圳;炒房客;中介;开发商",
            terms:
              "219792:0.321449,81434:0.282448,106956:0.195987,111866:0.077292,105019:0.052048",
            title: "炒房客懵了！救企业的钱被用于深圳炒房？ 央行紧急通知：查",
            title_simhash: 0,
            ts: 1587398522,
            update_time: "2020-04-21 09:48:02",
            url: "https://xw.qq.com/cmsid/20200420A0MY9V00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0MY9V00.html",
          },
          {
            app_id: "20200420A0RTWI00",
            article_type: 0,
            category: "news",
            category2_chn: "政策法规",
            category2_id: "4011",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200420A0RTWI00",
            comment_id: "5112603012",
            comment_num: 6,
            ctr_score: 0.022483917,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0RTWI",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621138938_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_870492/0",
            },
            intro:
              "【京津冀区域最新隔离政策，10问答】1.河北的，健康码无异常，要到北京常驻了，到京后不用隔离了吧？不用了，出示健康码。2.河北的，没核酸证明，能直接进北京小区居住吗？能。3.北京的，健康码无异常，去……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621138938_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4011;5215397;106763|82297|82413|167040588;0;0;28;435;0;0;3;1;3;0;0;82297|106763|82413|167040588|176604770|122108|399214|88779|100463|83149;823|387",
            item_stat:
              "0.00000;0.00000;0.03000;0.00000;0.00000;0.03000;0.00000;0.00000;0.03000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "京津冀;河北;北京",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2726453329_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619252822/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619252949/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619252950/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 08:57:28",
            report:
              '{"ext":"0+6"+"all":";;;8138+204"+"3h":"736726+41348;152962+9853;news:342906+10861;8138+204;55642+2979"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"1726267+99259;330981+22811;news:737408+24171;8138+204;91424+5340"}',
            showtype: "article",
            source: "光明网",
            source_id: "5215397",
            strategy: 306,
            strategy_pos: 3,
            strategy_score: 0.2655,
            surl: "http://kuaibao.qq.com/s/20200420A0RTWI00",
            tag_cluster: "",
            tag_label: [
              ["京津冀", "106763"],
              ["河北", "82297"],
              ["北京", "82413"],
            ],
            tags: "京津冀;河北;北京;北京朝阳区",
            terms:
              "106763:0.212655,82297:0.180823,82413:0.142172,167040588:0.088979",
            title: "津冀进京是否要隔离？朝阳区人能否外出？你想知道的都在这里",
            title_simhash: 0,
            ts: 1587430648,
            update_time: "2020-04-21 09:55:04",
            url: "https://xw.qq.com/cmsid/20200420A0RTWI00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0RTWI00.html",
          },
          {
            app_id: "20200420A0IRK200",
            article_type: 0,
            category: "baby",
            category2_chn: "有娃家庭",
            category2_id: "4316",
            category_chn: "育儿",
            category_id: "43",
            cmsid: "20200420A0IRK200",
            comment_id: "5111013382",
            comment_num: 161,
            ctr_score: 0.11491749,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0IRK2",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617729110_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617699435_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617699435_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_870492/0",
            },
            intro:
              "还记得当年那个从一出生就闻名全世界的黑婴儿吗？5年前她出生在南非，由于她全身黝黑，就连眼球都没有一点白色，从呱呱坠地的那一天起她的照片在网上就传遍了，当时被网友称为国宝级人物！不过一开始他出生的时候……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617699435_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617699454_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617699439_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617699435_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617699454_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617699439_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617729110_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "43;4316;10154194;83432;17;0;34;912;4;0;2;1;3;0;0;83432|83597|111850|114788|81985|83129|101610|81220|106090|93708;",
            item_stat:
              "11028.00000;118827.00000;0.08488;3762.00000;39497.00000;0.08683;2093.00000;20885.00000;0.09082;145.00000;20.00000;297.00000;0.06734;0.00000;0.00000;0.00000;74.80000;5.03704;1496.00000",
            keywords: "孩子",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3961240973_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617687334/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617687335/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617687337/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 16:19:01",
            report:
              '{"ext":"0+161"+"all":";;;127642+11941"+"3h":"377360+34752;41304+4002;baby:172+15;22496+2322;22514+2323"+"app":";;;343+21;;0;0;0;1661;79.09524;0.06122;4.84257"+"day":"758174+62362;87264+7893;baby:813+42;48312+4675;48442+4680"}',
            showtype: "article",
            source: "宝贝听听",
            source_id: "10154194",
            strategy: 125,
            strategy_pos: 21,
            strategy_score: 0.033653848,
            surl: "http://kuaibao.qq.com/s/20200420A0IRK200",
            tag_cluster: "",
            tag_label: [["孩子", "83432"]],
            tags: "孩子",
            terms: "83432:0.456679",
            title:
              "还记得那个黑的掉进煤堆也认不出来的“黑婴儿”吗？如今她长成了这副模样",
            title_simhash: 0,
            ts: 1587370741,
            update_time: "2020-04-20 17:15:08",
            url: "https://xw.qq.com/cmsid/20200420A0IRK200",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0IRK200.html",
          },
          {
            app_id: "20200420A0OV7K00",
            article_type: 0,
            category: "kepu",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0OV7K00",
            comment_id: "5111944584",
            comment_num: 0,
            ctr_score: 0.109238684,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0OV7K",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618679312_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_870492/0",
            },
            intro:
              "据外媒报道，当世界上大部分人都在关注新冠病毒时很容易忘记掉人类还面对着其他的致命病毒，比如说埃博拉。 近日，研究人员在动物身上测试了一种新埃博拉候选疫苗，这种疫苗不含活载体并且似乎对感染人类的所有四……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;1882;267114|104085;16;0;23;763;1;0;2;1;3;0;0;267114|104085|222489|91936|118746|115722|214783|476499|114276|86148;187",
            item_stat:
              "196.00000;3555.00000;0.05167;140.00000;2842.00000;0.04640;56.00000;1026.00000;0.04992;0.00000;24.00000;199.00000;0.12060;0.00000;0.00000;0.00000;30.62500;3.69347;735.00000",
            keywords: "埃博拉病毒;疫苗",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/4343352990_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618670236/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:53:04",
            report:
              '{"ext":"0+0"+"all":";;;3607+200"+"3h":"299029+19131;75979+4059;kepu:4604+223;858+48;9438+619"+"app":";;;199+24;;0;0;0;735;30.625;0.1206;3.69347"+"day":"634096+40926;167310+10530;kepu:18370+883;2894+144;25176+1742"}',
            showtype: "article",
            source: "太平洋电脑网",
            source_id: "1882",
            strategy: 117,
            strategy_pos: 18,
            strategy_score: 0.046926,
            surl: "http://kuaibao.qq.com/s/20200420A0OV7K00",
            tag_cluster: "",
            tag_label: [
              ["埃博拉病毒", "267114"],
              ["疫苗", "104085"],
            ],
            tags: "埃博拉病毒;疫苗",
            terms: "267114:0.292417,104085:0.252361",
            title: "科学家开发出新埃博拉病毒疫苗：对所有种类都有效",
            title_simhash: 0,
            ts: 1587376384,
            update_time: "2020-04-20 20:59:51",
            url: "https://xw.qq.com/cmsid/20200420A0OV7K00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0OV7K00.html",
          },
          {
            app_id: "20200420A0G2SB00",
            article_type: 0,
            category: "baby",
            category2_chn: "二胎",
            category2_id: "4317",
            category_chn: "育儿",
            category_id: "43",
            cmsid: "20200420A0G2SB00",
            comment_id: "5110604349",
            comment_num: 2,
            ctr_score: 0.10719893,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0G2SB",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617291000_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_870492/0",
            },
            intro:
              "国内对于国籍的选择可以说是很宽容的，如果你愿意加入另一个国家就加入，但是只有一次机会，接下来想回到中国就难如登天了。虽然国家对于国籍问题比较宽容，但是网友们却很严格。大家一致认为如果没有特殊原因，将……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617291002_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617291003_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617291002_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617291003_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617291000_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "43;4317;14975200;10214258|111504770;18;0;31;647;0;0;2;3;3;0;0;198853|83432|762402|156613|81547|118137|82130|81713|101794|81353;",
            item_stat:
              "2251.00000;23379.00000;0.08760;1851.00000;19648.00000;0.08584;915.00000;10224.00000;0.08168;2.00000;84.00000;704.00000;0.11932;0.00000;0.00000;0.00000;38.45238;4.58807;3230.00000",
            keywords: "摩根·霍尔德",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/7457208413_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617264371/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617264365/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617264376/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 15:12:55",
            report:
              '{"ext":"0+2"+"all":";;;23856+2299"+"3h":"377360+34752;91088+8464;baby:172+15;10701+963;40899+3525"+"app":";;;704+84;;0;0;0;3230;38.45238;0.11932;4.58807"+"day":"758174+62362;189322+16108;baby:813+42;20125+1899;96998+7347"}',
            showtype: "article",
            source: "游戏鲜评",
            source_id: "14975200",
            strategy: 125,
            strategy_pos: 10,
            strategy_score: 0.04621849,
            surl: "http://kuaibao.qq.com/s/20200420A0G2SB00",
            tag_cluster: "",
            tag_label: [["摩根·霍尔德", "10214258"]],
            tags: "摩根·霍尔德;美国_社会",
            terms: "10214258:0.233953,111504770:0.217334",
            title:
              "她出生于中国，入美籍代美国称霸赛场！不愿见中国父母却被网友支持",
            title_simhash: 0,
            ts: 1587366775,
            update_time: "2020-04-20 15:51:33",
            url: "https://xw.qq.com/cmsid/20200420A0G2SB00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0G2SB00.html",
          },
          {
            app_id: "20200420A0DMAN00",
            article_type: 0,
            category: "edu",
            category2_chn: "初中教育",
            category2_id: "3519",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200420A0DMAN00",
            comment_id: "5110242751",
            comment_num: 33,
            ctr_score: 0.09674633,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0DMAN",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617040414_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_870492/0",
            },
            intro:
              "不好了，全国首现中学生无症状感染，教师确诊，你还期待开学，欢呼小神兽们归笼吗？看到湖北宣布开学了真是忧心忡忡，不过这个地方宣布推迟开学时间病毒传播力超强，哈尔滨1传50，源头”四次检测未确诊，如今哈……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617040414_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3519;5543581;176581844|113437;19;0;25;1160;1;0;2;1;3;0;0;114663|113437|85967|837792|285972|159123|104949|256354|316879|176581844;835",
            item_stat:
              "24388.00000;291386.00000;0.07722;21790.00000;234730.00000;0.08492;17321.00000;192862.00000;0.08238;28.00000;5727.00000;15666.00000;0.36557;0.00000;13.00000;41.00000;94.16256;34.42289;539269.00000",
            keywords: "哈尔滨",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1878907910_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11616877651/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 14:07:07",
            report:
              '{"ext":"0+33"+"all":";;;322011+26028"+"3h":"1418524+96816;410956+33492;edu:9302+448;157973+12712;152963+12498"+"app":";;;21933+7627;;61;0;19;703887;92.28884;0.34774;32.0926"+"day":"2602199+185875;761027+61911;edu:19004+959;265355+23430;260345+23216"}',
            showtype: "article",
            source: "微莆田网",
            source_id: "5543581",
            strategy: 104,
            strategy_pos: 16,
            strategy_score: 0.23977087,
            surl: "http://kuaibao.qq.com/s/20200420A0DMAN00",
            tag_cluster: "",
            tag_label: [["哈尔滨", "113437"]],
            tags: "无症状感染者;哈尔滨",
            terms: "176581844:0.262047,113437:0.115135",
            title: "全国首现中学生无症状感染，教师确诊，你还期待开学吗",
            title_simhash: 0,
            ts: 1587362827,
            update_time: "2020-04-21 07:31:38",
            url: "https://xw.qq.com/cmsid/20200420A0DMAN00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0DMAN00.html",
          },
          {
            app_id: "20200421V03EB900",
            article_type: 56,
            category: "ent",
            category2_chn: "其它",
            category2_id: "54",
            category_chn: "其它",
            category_id: "54",
            cmsid: "20200421V03EB900",
            comment_id: "5114173569",
            comment_num: 65,
            ctr_score: 0.09418057,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 2,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421V03EB9",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620840347_196130/0",
            img_count: 0,
            img_special: 0,
            img_type: 2,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620840347_294195/0",
            },
            intro:
              "李佳琦惨遭职业滑铁卢，遇到金靖完全插不上话，急得喊你快点走！",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840347_294195/0",
              ],
            },
            is_org: 0,
            item_base:
              "54;54;17235401;;1;0;31;0;0;0;2;2;3;56;0;392645|402342|160999;",
            item_stat:
              "42.00000;611.00000;0.05976;42.00000;611.00000;0.05976;42.00000;611.00000;0.05976;11.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/9608432749_200200/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-21 08:07:42",
            report:
              '{"ext":"0+65"+"all":";;;41941+1739"+"3h":"1512442+114257;1512442+114257;ent:989712+72771;41941+1739;130293+9394"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"2818826+218516;2818826+218516;ent:1883327+137656;41941+1739;230229+17409"}',
            showtype: "article",
            source: "抓马星闻",
            source_id: "17235401",
            strategy: 1,
            strategy_pos: 11,
            strategy_score: 0.444,
            surl: "http://kuaibao.qq.com/s/20200421V03EB900",
            tag_cluster: "",
            tag_label: [],
            tags: "",
            terms: "",
            title: "金靖自曝3个礼拜胖到115斤，李佳琦在旁边笑到崩溃完全插不上话",
            title_simhash: 0,
            ts: 1587427662,
            update_time: "2020-04-21 08:08:16",
            url: "https://xw.qq.com/cmsid/20200421V03EB900",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421V03EB900.html",
          },
          {
            app_id: "20200419A0JX1X00",
            article_type: 0,
            category: "ningxia",
            category2_chn: "国内",
            category2_id: "5602",
            category_chn: "时政",
            category_id: "56",
            cmsid: "20200419A0JX1X00",
            comment_id: "5106580149",
            comment_num: 1,
            ctr_score: 0.091731034,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0JX1X",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613510631_640330/0",
            img_count: 2,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_870492/0",
            },
            intro:
              "履新宁夏回族自治区政府副主席半个多月后，赖蛟的职务分工披露。据宁夏回族自治区人民政府官网显示，赖蛟负责自治区商务、文化旅游、外事、市场管理等方面的工作。分管自治区商务厅（经济技术合作局、政府口岸办公……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613510631_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "56;5602;11626;128104|4735111|85234|314712|116198;37;1;16;1440;2;0;3;1;3;0;1;131918|4735111|118945679|10357944|162618582|109710|128104|127049;682|418|79|996",
            item_stat:
              "6280.00000;94143.00000;0.06250;1307.00000;19926.00000;0.06141;602.00000;8918.00000;0.06289;1.00000;1742.00000;14913.00000;0.11681;1.00000;2.00000;7.00000;86.66533;10.12345;150971.00000",
            keywords: "县委书记;赖蛟;重庆;新加坡南洋理工大学;宁夏",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/58748546_100100/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613508674/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613508675/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 19:41:53",
            report:
              '{"ext":"0+1"+"all":";;;96116+6436"+"3h":"1410433+86195;142917+7262;ningxia:0+0#cq:0+0;7342+504;19523+1325"+"app":";;;15297+1805;;8;1;2;157525;87.27147;0.118;10.29777"+"day":"2895691+182892;324195+16770;ningxia:0+0#cq:0+0;21899+1463;50382+3469"}',
            showtype: "article",
            source: "政事儿",
            source_id: "11626",
            strategy: 125,
            strategy_pos: 18,
            strategy_score: 0.033653848,
            surl: "http://kuaibao.qq.com/s/20200419A0JX1X00",
            tag_cluster: "",
            tag_label: [
              ["县委书记", "128104"],
              ["赖蛟", "4735111"],
              ["重庆", "85234"],
            ],
            tags: "县委书记;赖蛟;重庆;新加坡南洋理工大学;宁夏",
            terms:
              "128104:0.324882,4735111:0.207674,85234:0.160976,314712:0.109777,116198:0.050402",
            title: "正厅县委书记升副部后，他分工明确",
            title_simhash: 0,
            ts: 1587296513,
            update_time: "2020-04-21 09:14:13",
            url: "https://xw.qq.com/cmsid/20200419A0JX1X00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0JX1X00.html",
          },
          {
            app_id: "20200419A0M76400",
            article_type: 0,
            category: "fashion",
            category2_chn: "整形",
            category2_id: "5509",
            category_chn: "女性",
            category_id: "55",
            cmsid: "20200419A0M76400",
            comment_id: "5107214810",
            comment_num: 26,
            ctr_score: 0.090103574,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0M764",
            img: "https://inews.gtimg.com/newsapp_ls/0/11614221863_640330/0",
            img_count: 27,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11613973759_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_870492/0",
            },
            intro:
              "吃瓜观众们这几天非常热闹。评论区和后台也收到了很多粉丝读者的信息。有人表示，就喜欢总裁夫人的贵族气质，看着就像大家闺秀，富态十足。也有网友嘲笑，1988年出生的32岁总裁夫人，为什么看起来像保养的好……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614221864_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614221865_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11613973759_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613974447_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613975186_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614221864_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614221865_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11614221863_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "55;5509;17593915;81814|106096;35;1;33;1362;27;0;2;3;3;0;0;81250|82119|106096|82008|81320|231135|81790|89592|96530|86139;401",
            item_stat:
              "2110.00000;26222.00000;0.07432;802.00000;13534.00000;0.05576;492.00000;9448.00000;0.04930;24.00000;2648.00000;19125.00000;0.13846;0.00000;7.00000;1.00000;111.94789;15.50003;296438.00000",
            keywords: "发型;针织衫",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/10654849360_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613951854/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613951855/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613951856/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 21:55:21",
            report:
              '{"ext":"0+26"+"all":";;;28117+2193"+"3h":"234083+18173;31043+2427;fashion:11025+588;8008+383;9094+464"+"app":";;;19125+2648;;1;0;7;296438;111.94789;0.13846;15.50003"+"day":"541941+41141;63598+5045;fashion:24574+1361;15429+885;17831+1043"}',
            showtype: "article",
            source: "个人形象讲师安宁",
            source_id: "17593915",
            strategy: 117,
            strategy_pos: 3,
            strategy_score: 0.095674,
            surl: "http://kuaibao.qq.com/s/20200419A0M76400",
            tag_cluster: "",
            tag_label: [
              ["发型", "81814"],
              ["针织衫", "106096"],
            ],
            tags: "发型;针织衫",
            terms: "81814:0.167038,106096:0.130621",
            title: "32岁“总裁夫人”为什么被网友嘲笑成 50岁大妈？是4个地方不对劲",
            title_simhash: 0,
            ts: 1587304521,
            update_time: "2020-04-21 04:30:28",
            url: "https://xw.qq.com/cmsid/20200419A0M76400",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0M76400.html",
          },
          {
            app_id: "20200420A0R9BU00",
            article_type: 0,
            category: "auto",
            category2_chn: "汽车导购",
            category2_id: "4204",
            category_chn: "汽车",
            category_id: "42",
            cmsid: "20200420A0R9BU00",
            comment_id: "5112452744",
            comment_num: 17,
            ctr_score: 0.08973379,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0R9BU",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619137176_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619133087_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_870492/0",
            },
            intro:
              "随着中国工业科技的发展，人们从1994年仅可以打电话和发信息的2G手机，发展到了能实时视频通话、远程教育的3G、4G手机，如今步入了2020年，比4G网络快近100倍的5G网络手机也已经开始广泛的生……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619137177_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619137178_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619133087_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619133093_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619133085_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619137177_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619137178_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619137176_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "42;4204;8514940;107396|287278|100694|103783155;13;0;31;568;0;0;3;3;3;0;0;4143974|105439|83950|108306|113347|117556|81409|187943|130522;479",
            item_stat:
              "4088.00000;49575.00000;0.07609;2667.00000;31743.00000;0.07737;1206.00000;13606.00000;0.08108;17.00000;305.00000;1321.00000;0.23089;0.00000;0.00000;0.00000;33.44590;7.72218;10201.00000",
            keywords: "MPV;合资车;SUV",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3222762751_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619104266/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619105733/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619106421/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 20:16:25",
            report:
              '{"ext":"0+17"+"all":";;;50266+4167"+"3h":"643956+46974;158237+13345;auto:43459+2617;10221+973;10538+996"+"app":";;;1321+305;;0;0;0;10201;33.4459;0.23089;7.72218"+"day":"1386780+101871;363579+32183;auto:113378+7057;32434+2746;33727+2825"}',
            showtype: "article",
            source: "车行专评",
            source_id: "8514940",
            strategy: 125,
            strategy_pos: 12,
            strategy_score: 0.033980582,
            surl: "http://kuaibao.qq.com/s/20200420A0R9BU00",
            tag_cluster: "",
            tag_label: [
              ["MPV", "107396"],
              ["合资车", "287278"],
              ["SUV", "100694"],
            ],
            tags: "mpv;合资车;suv;沃兰多",
            terms:
              "107396:0.258786,287278:0.237493,100694:0.23301,103783155:0.138316",
            title: "从11.99万跌至7.99万，媲美7座MPV，被称最划算合资车",
            title_simhash: 0,
            ts: 1587384985,
            update_time: "2020-04-20 20:17:33",
            url: "https://xw.qq.com/cmsid/20200420A0R9BU00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0R9BU00.html",
          },
          {
            app_id: "20200419A0N1WA00",
            article_type: 0,
            category: "emotion",
            category2_chn: "婚姻",
            category2_id: "6502",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200419A0N1WA00",
            comment_id: "5107445725",
            comment_num: 18,
            ctr_score: 0.08963732,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0N1WA",
            img: "https://inews.gtimg.com/newsapp_ls/0/11614407885_640330/0",
            img_count: 8,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614186029_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11614186029_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_870492/0",
            },
            intro:
              "开封尉氏县小辉找到调解员，希望能帮忙调解一下他跟妻子晶晶的矛盾。小辉今年30岁，跟妻子晶晶已经结婚9年了，有一个8岁的儿子。调解员来到小辉家了解情况，看到调解员的到来，晶晶直接回了卧室，并关上了房门……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614186029_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614147457_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614184919_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11614186029_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614147457_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614184919_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11614407885_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6502;16562628;98219|177175;35;1;30;1331;0;0;2;1;3;0;0;177175|311782|208699|91982|94095|86496|98219|352022|87889|87724;942|424",
            item_stat:
              "1289.00000;10727.00000;0.10664;832.00000;7863.00000;0.09494;462.00000;4653.00000;0.08917;12.00000;12360.00000;67839.00000;0.18220;1.00000;12.00000;2.00000;176.12338;32.08899;2176885.00000",
            keywords: "儿媳;晶晶",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/7933325299_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11614142680/641",
              "https://inews.gtimg.com/newsapp_bt/0/11614142682/641",
              "https://inews.gtimg.com/newsapp_bt/0/11614142684/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 22:54:21",
            report:
              '{"ext":"0+18"+"all":";;;12686+1460"+"3h":"344207+34143;168069+15946;emotion:2470+53;5857+544;5616+525"+"app":";;;67839+12360;;2;1;12;2176885;176.12338;0.1822;32.08899"+"day":"665520+59899;306762+27827;emotion:8783+190;9822+1003;9581+984"}',
            showtype: "article",
            source: "沐木聊娱乐",
            source_id: "16562628",
            strategy: 104,
            strategy_pos: 18,
            strategy_score: 0.23576643,
            surl: "http://kuaibao.qq.com/s/20200419A0N1WA00",
            tag_cluster: "",
            tag_label: [
              ["儿媳", "98219"],
              ["晶晶", "177175"],
            ],
            tags: "儿媳;晶晶",
            terms: "98219:0.373434,177175:0.253603",
            title: "儿媳嫁进门9年嫌厕所脏 从没上过厕所 邻居：每天在屋里大小便",
            title_simhash: 0,
            ts: 1587308061,
            update_time: "2020-04-21 09:52:33",
            url: "https://xw.qq.com/cmsid/20200419A0N1WA00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0N1WA00.html",
          },
          {
            app_id: "20200421A04J0600",
            article_type: 0,
            category: "world",
            category2_chn: "国际社会",
            category2_id: "3710",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200421A04J0600",
            comment_id: "5114455185",
            comment_num: 1,
            ctr_score: 0.01322803,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A04J06",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621097154_640330/0",
            img_count: 0,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_870492/0",
            },
            intro:
              "来源：海外网日本放送协会（NHK）报道截图【海外网4月21日|战疫全时区】据日本放送协会（NHK）报道，20日，日本12个都道府县共报告新增新冠肺炎死亡病例25例，这是自疫情以来，日本单日新增死亡人……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621097154_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3710;1979;114398|175700360|111504222|146048575;1;0;30;224;0;0;2;1;3;0;0;175700360|115228|146048575|4168550|352823|268150|125489|82144|371353|114331;",
            item_stat:
              "10.00000;556.00000;0.01952;10.00000;556.00000;0.01952;10.00000;556.00000;0.01952;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "NHK",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/36252763_100100/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-21 08:32:27",
            report:
              '{"ext":"0+1"+"all":";;;1388+41"+"3h":"3323707+231518;790327+72318;world:177550+8637;1388+41;109982+4058"+"app":";;;5918+145;;0;0;0;2763;19.05517;0.0245;0.46688"+"day":"6952455+502233;1601350+147551;world:419309+19722;1388+41;264544+10520"}',
            showtype: "article",
            source: "海外网",
            source_id: "1979",
            strategy: 306,
            strategy_pos: 5,
            strategy_score: 0.1282,
            surl: "http://kuaibao.qq.com/s/20200421A04J0600",
            tag_cluster: "",
            tag_label: [["NHK", "114398"]],
            tags: "nhk;新冠肺炎;日本_社会;钻石公主",
            terms:
              "114398:0.303519,175700360:0.274118,111504222:0.191883,146048575:0.105579",
            title: "日本国内新冠肺炎病例11155例 单日新增死亡人数达最大增幅",
            title_simhash: 0,
            ts: 1587429147,
            update_time: "2020-04-21 08:55:47",
            url: "https://xw.qq.com/cmsid/20200421A04J0600",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A04J0600.html",
          },
          {
            app_id: "20200419A0FYUO00",
            article_type: 0,
            category: "emotion",
            category2_chn: "恋爱",
            category2_id: "6501",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200419A0FYUO00",
            comment_id: "5105757270",
            comment_num: 42,
            ctr_score: 0.14585285,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0FYUO",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613895575_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612758720_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11612758720_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_870492/0",
            },
            intro:
              "离异美女跟程序员相亲，结果自我介绍完就被秒删：三无送个儿这几年中国的离婚率每年都在逐年增加，越来越多的年轻人婚姻维持不了7年，而且有少部分人都是闪婚闪离，为什么离婚率会越来越高，应该跟现在年轻人的思……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612758720_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612758727_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612758724_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11612758720_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612758727_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612758724_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613895575_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6501;17752691;109831|92881|88971;40;1;28;895;0;0;2;1;3;0;0;109831|81547|82111|102144|188086|232692|87654|81713|114059|149667;316|581",
            item_stat:
              "1377.00000;14645.00000;0.08560;688.00000;6878.00000;0.09014;532.00000;5265.00000;0.09072;40.00000;1145.00000;8468.00000;0.13521;0.00000;7.00000;0.00000;82.50830;11.15635;94472.00000",
            keywords: "程序员;相亲;离婚",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/10921197241_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612757970/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612757973/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612757974/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 16:44:51",
            report:
              '{"ext":"0+42"+"all":";;;17540+1606"+"3h":"344207+34143;142505+15408;emotion:2470+53;6876+620;7199+674"+"app":";;;9537+1308;;0;0;7;108959;83.30199;0.13715;11.42487"+"day":"665520+59899;300778+27062;emotion:8783+190;9773+917;10269+993"}',
            showtype: "article",
            source: "简单一点为生活",
            source_id: "17752691",
            strategy: 104,
            strategy_pos: 18,
            strategy_score: 0.23268262,
            surl: "http://kuaibao.qq.com/s/20200419A0FYUO00",
            tag_cluster: "",
            tag_label: [
              ["程序员", "109831"],
              ["相亲", "92881"],
              ["离婚", "88971"],
            ],
            tags: "程序员;相亲;离婚",
            terms: "109831:0.318383,92881:0.284204,88971:0.117898",
            title: "离异美女跟程序员相亲，结果自我介绍完就被秒删：三无送个儿",
            title_simhash: 0,
            ts: 1587285891,
            update_time: "2020-04-19 21:33:39",
            url: "https://xw.qq.com/cmsid/20200419A0FYUO00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0FYUO00.html",
          },
          {
            app_id: "20200420A0IW0P00",
            article_type: 0,
            category: "kepu",
            category2_chn: "科普",
            category2_id: "7802",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0IW0P00",
            comment_id: "5111031516",
            comment_num: 0,
            ctr_score: 0.11423531,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0IW0P",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617738313_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617720820_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_870492/0",
            },
            intro:
              "人类现在生活在科学时代。任何活动与科学都有很大的关系，也为我们的生活带来极大的便利。新技术的层出不穷，让我们再次刷新对科学的认识。我相信许多人仍然记得上个世纪在世界引起轰动的克隆技术。在这项技术引起……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617738314_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617738315_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617720820_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617720826_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617720787_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617738314_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617738315_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617738313_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7802;5651074;541598|224064|147538|236725|10194478;17;0;32;778;0;0;2;3;3;0;0;236725|541598|147538|103924|109284|86468|109824|81044|224064|318525;303|565|381",
            item_stat:
              "190.00000;1922.00000;0.08725;164.00000;1670.00000;0.08635;109.00000;1202.00000;0.07938;0.00000;22.00000;505.00000;0.04356;0.00000;0.00000;0.00000;65.18182;2.83960;1434.00000",
            keywords: "克隆技术;克隆羊;绵羊;多莉;多莉羊",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/6809229885_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617715505/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617715492/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617715507/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 16:21:47",
            report:
              '{"ext":"0+0"+"all":";;;2229+224"+"3h":"299029+19131;117842+5386;kepu:4604+223;1356+134;5354+519"+"app":";;;505+22;;0;0;0;1434;65.18182;0.04356;2.8396"+"day":"634096+40926;227502+11466;kepu:18370+883;1977+198;8244+766"}',
            showtype: "article",
            source: "环球萌物视频",
            source_id: "5651074",
            strategy: 11,
            strategy_pos: 10,
            strategy_score: 0.36,
            surl: "http://kuaibao.qq.com/s/20200420A0IW0P00",
            tag_cluster: "",
            tag_label: [
              ["克隆技术", "541598"],
              ["克隆羊", "224064"],
              ["绵羊", "147538"],
            ],
            tags: "克隆技术;克隆羊;绵羊;多莉;多莉羊",
            terms:
              "541598:0.484565,224064:0.125601,147538:0.069575,236725:0.0678,10194478:0.053739",
            title:
              "为何现在无人提及“克隆技术”！昔日克隆羊的“教训”！让众人哑口！",
            title_simhash: 0,
            ts: 1587370907,
            update_time: "2020-04-20 16:25:31",
            url: "https://xw.qq.com/cmsid/20200420A0IW0P00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0IW0P00.html",
          },
          {
            app_id: "20200420A0P98A00",
            article_type: 0,
            category: "finance",
            category2_chn: "中概股",
            category2_id: "636",
            category_chn: "科技",
            category_id: "6",
            cmsid: "20200420A0P98A00",
            comment_id: "5112007684",
            comment_num: 31,
            ctr_score: 0.10438138,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0P98A",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618756627_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_870492/0",
            },
            intro:
              "如今，除了“黄光裕出狱”概念，国美终于有了新利好了。文/华商韬略 维多利娜一般情况下，除了“黄光裕出狱”，国美股价鲜有机会大涨。但这次有点不一样。4月19日，国美零售开盘一度大涨32%，截至4月20……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618756627_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "6;636;6251;112665|279850|245277|107350210|102618;14;0;29;1576;4;0;3;1;3;0;1;245277|102618|112665|107350210|222532|206368|81949|89655|226666|306554;900|49",
            item_stat:
              "11822.00000;133331.00000;0.08141;5913.00000;70850.00000;0.07697;2160.00000;26192.00000;0.07602;25.00000;5665.00000;58488.00000;0.09686;0.00000;24.00000;9.00000;119.63601;11.58764;677738.00000",
            keywords: "国美;拼多多;黄光裕;京东",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/907418889_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618716574/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618716576/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618716577/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 18:55:54",
            report:
              '{"ext":"0+31"+"all":";;;139646+12322"+"3h":"704045+47055;24264+1855;finance:210889+10878#stock:32584+1217;22462+1800;27193+1948"+"app":";;;82255+8406;;10;0;35;1030135;122.54759;0.10219;12.52368"+"day":"1553259+104915;79888+6492;finance:454857+23152#stock:94889+3297;77165+6413;83964+6614"}',
            showtype: "article",
            source: "华商韬略",
            source_id: "6251",
            strategy: 125,
            strategy_pos: 18,
            strategy_score: 0.032407407,
            surl: "http://kuaibao.qq.com/s/20200420A0P98A00",
            tag_cluster: "",
            tag_label: [
              ["国美", "112665"],
              ["拼多多", "279850"],
              ["黄光裕", "245277"],
            ],
            tags: "国美;拼多多;黄光裕;国美零售;京东",
            terms:
              "112665:0.346121,279850:0.197385,245277:0.144198,107350210:0.097534,102618:0.071071",
            title: "国美股价暴走！黄光裕出狱前牵手拼多多，要夺回失去的13年？",
            title_simhash: 0,
            ts: 1587380154,
            update_time: "2020-04-21 07:33:00",
            url: "https://xw.qq.com/cmsid/20200420A0P98A00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0P98A00.html",
          },
          {
            app_id: "20200420A0UAZI00",
            article_type: 0,
            category: "kepu",
            category2_chn: "科普",
            category2_id: "7802",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0UAZI00",
            comment_id: "5113264901",
            comment_num: 15,
            ctr_score: 0.10125991,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 1,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0UAZI",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619901563_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_870492/0",
            },
            intro:
              "国家卫健委高级别专家组通过考察和了解，提出此次新冠病毒“人传人”，是此次新冠肺炎疫情防控的重要节点。中国疾控中心主任、卫健委高级别专家组组员高福院士在接受@CGTN 专访中表示，在任何情况下，科学家……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619901563_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7802;6627433;103544765|4888296|10455762|435272;10;0;19;220;1;1;2;1;3;0;1;93831|10455762|435272|176614|149072|4888296|176557882|82714|177597653|10497003;494|175",
            item_stat:
              "4195.00000;95815.00000;0.04193;3917.00000;89494.00000;0.04192;1769.00000;47244.00000;0.03608;12.00000;48.00000;620.00000;0.07742;0.00000;2.00000;0.00000;85.91667;6.65161;4124.00000",
            keywords: "高福;国家卫健委;中国疾控中心",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3107672411_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619844921/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 23:02:07",
            report:
              '{"ext":"0+15"+"all":";;;99593+4263"+"3h":"299029+19131;117842+5386;kepu:4604+223;36234+1125;55022+2250"+"app":";;;6977+228;;2;0;11;10854;47.60526;0.03268;1.55568"+"day":"634096+40926;227502+11466;kepu:18370+883;93272+3985;152940+7678"}',
            showtype: "article",
            source: "环球时报新媒体",
            source_id: "6627433",
            strategy: 125,
            strategy_pos: 14,
            strategy_score: 0.038135592,
            surl: "http://kuaibao.qq.com/s/20200420A0UAZI00",
            tag_cluster: "",
            tag_label: [
              ["高福", "4888296"],
              ["国家卫健委", "10455762"],
              ["中国疾控中心", "435272"],
            ],
            tags: "人传人;高福;国家卫健委;中国疾控中心",
            terms:
              "103544765:0.203387,4888296:0.17555,10455762:0.173543,435272:0.138822",
            title: "高福：我从没说过不存在“人传人”的现象",
            title_simhash: 0,
            ts: 1587394927,
            update_time: "2020-04-21 02:38:39",
            url: "https://xw.qq.com/cmsid/20200420A0UAZI00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0UAZI00.html",
          },
          {
            app_id: "20200419A0GULJ00",
            article_type: 0,
            category: "emotion",
            category2_chn: "恋爱",
            category2_id: "6501",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200419A0GULJ00",
            comment_id: "5105931612",
            comment_num: 0,
            ctr_score: 0.09645003,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0GULJ",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613201532_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11613176794_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_870492/0",
            },
            intro:
              "别的女生都睡公主床，当看清欧阳娜娜的床铺时，还以为是男生审美。其实大家在镜头中看着欧阳娜娜已经是比较多了，肯定感觉她就是一个很甜美的女生，其实了解欧阳娜娜的人都知道她的性格是非常坚韧的那种，完全是属……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613201533_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613201534_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11613176794_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613176792_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613177630_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613201533_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613201534_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613201532_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6501;5745145;226223|98541|154481;39;1;30;764;0;0;2;3;3;0;0;226223|107574|86496|81996|84871|154481|98541|83357|98301|781052;849|629|56",
            item_stat:
              "1636.00000;16408.00000;0.09033;156.00000;2054.00000;0.06883;106.00000;1166.00000;0.07945;0.00000;47.00000;329.00000;0.14286;0.00000;0.00000;0.00000;16.27660;2.32523;765.00000",
            keywords: "欧阳娜娜;床铺;床上用品",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1951626534_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612918164/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612918162/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612918688/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 18:18:01",
            report:
              '{"ext":"0+0"+"all":";;;16696+1685"+"3h":"344207+34143;142505+15408;emotion:2470+53;1138+133;1138+133"+"app":";;;336+47;;0;0;0;765;16.2766;0.13988;2.27679"+"day":"665520+59899;300778+27062;emotion:8783+190;2342+205;2342+205"}',
            showtype: "article",
            source: "圈八卦说娱乐",
            source_id: "5745145",
            strategy: 11,
            strategy_pos: 16,
            strategy_score: 0.07776001,
            surl: "http://kuaibao.qq.com/s/20200419A0GULJ00",
            tag_cluster: "",
            tag_label: [
              ["欧阳娜娜", "226223"],
              ["床铺", "98541"],
              ["床上用品", "154481"],
            ],
            tags: "欧阳娜娜;床铺;床上用品",
            terms: "226223:0.389673,98541:0.171923,154481:0.073538",
            title:
              "别的女生都睡公主床，当看清欧阳娜娜的床铺时，还以为是男生审美",
            title_simhash: 0,
            ts: 1587291481,
            update_time: "2020-04-19 18:24:41",
            url: "https://xw.qq.com/cmsid/20200419A0GULJ00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0GULJ00.html",
          },
          {
            app_id: "20200420A0G26800",
            article_type: 0,
            category: "auto",
            category2_chn: "用车",
            category2_id: "4201",
            category_chn: "汽车",
            category_id: "42",
            cmsid: "20200420A0G26800",
            comment_id: "5110602001",
            comment_num: 0,
            ctr_score: 0.09634495,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0G268",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617276902_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617245437_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_870492/0",
            },
            intro:
              "现在我国买车群体越来越年轻化，年轻人买车时不喜欢老气横秋的车子，他们喜欢的是颜值高，动力强劲的车型。对那些喜欢玩车的老司机来说，8缸车只是入门车型，12缸车才是标配。然而由于我国排放法规日益严格，禁……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617276903_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617276904_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617245437_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617245364_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617245362_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617276903_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617276904_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617276902_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "42;4201;6541913;286794;19;0;25;825;0;0;3;3;3;0;0;109556|204456|139684|81044|100095|112158|110234|276022|100207|100966;",
            item_stat:
              "102.00000;983.00000;0.08861;46.00000;372.00000;0.09459;33.00000;220.00000;0.10198;0.00000;105.00000;964.00000;0.10892;0.00000;1.00000;2.00000;73.41905;7.99689;7709.00000",
            keywords: "燃油车",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2756866893_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617240909/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617242267/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617243075/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 15:12:31",
            report:
              '{"ext":"0+0"+"all":";;;1111+116"+"3h":"643956+46974;333653+28298;auto:43459+2617;311+38;5951+472"+"app":";;;1014+112;;2;0;1;8285;73.97321;0.11045;8.17061"+"day":"1386780+101871;644164+56418;auto:113378+7057;500+60;19119+1459"}',
            showtype: "article",
            source: "汽车小涛",
            source_id: "6541913",
            strategy: 117,
            strategy_pos: 20,
            strategy_score: 0.046584,
            surl: "http://kuaibao.qq.com/s/20200420A0G26800",
            tag_cluster: "",
            tag_label: [["燃油车", "286794"]],
            tags: "燃油车",
            terms: "286794:0.427483",
            title: "首个禁售燃油车省份曝光，车主看后泪奔：准备排队卖车",
            title_simhash: 0,
            ts: 1587366751,
            update_time: "2020-04-20 15:14:41",
            url: "https://xw.qq.com/cmsid/20200420A0G26800",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0G26800.html",
          },
          {
            app_id: "20200417A0S2TA00",
            article_type: 0,
            category: "sannong",
            category2_chn: "农民生活",
            category2_id: "7104",
            category_chn: "农林牧副渔",
            category_id: "71",
            cmsid: "20200417A0S2TA00",
            comment_id: "5095993884",
            comment_num: 0,
            ctr_score: 0.08756251,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200417A0S2TA",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618741158_640330/0",
            img_count: 6,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11603784101_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_870492/0",
            },
            intro:
              "一提到暴利行业，很多人会想到奢侈品、眼镜店。但其实，有些不起眼的、甚至看起来有点低端的行业，其实很“暴利”！这里要说的就是：收废品。这个行业经常给人一种脏差的印象，甚至有人会有点“瞧不起”，但实际上……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618741159_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618741160_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11603784101_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11603786170_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11603784103_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618741159_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618741160_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618741158_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "71;7104;5907147;230831|10547298|281791|284820;15;0;30;933;0;0;2;3;3;0;0;230831|281791|100041|90763|89807|81402|161742202|86457|284820|119079;49|480",
            item_stat:
              "1704.00000;19670.00000;0.07949;1649.00000;19036.00000;0.07948;977.00000;12094.00000;0.07441;0.00000;84.00000;700.00000;0.12000;0.00000;0.00000;0.00000;79.35714;9.52286;6666.00000",
            keywords: "陈光标;中国首富;张茵;废品收购站",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2180617163_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11603757162/641",
              "https://inews.gtimg.com/newsapp_bt/0/11603756709/641",
              "https://inews.gtimg.com/newsapp_bt/0/11603756710/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 18:46:55",
            report:
              '{"ext":"0+0"+"all":";;;20512+1774"+"3h":"282402+20534;100664+6350;sannong:0+0;10749+855;10749+855"+"app":";;;700+84;;0;0;0;6666;79.35714;0.12;9.52286"+"day":"678333+48820;229942+14624;sannong:0+0;19878+1719;19878+1719"}',
            showtype: "article",
            source: "小麦很酷",
            source_id: "5907147",
            strategy: 125,
            strategy_pos: 4,
            strategy_score: 0.042857144,
            surl: "http://kuaibao.qq.com/s/20200417A0S2TA00",
            tag_cluster: "",
            tag_label: [
              ["陈光标", "230831"],
              ["中国首富", "10547298"],
              ["张茵", "281791"],
            ],
            tags: "陈光标;中国首富;张茵;废品收购站",
            terms:
              "230831:0.242879,10547298:0.234354,281791:0.221484,284820:0.053097",
            title: "一个被“瞧不起”的暴利行业！但首善陈光标、首富张茵都靠它发家",
            title_simhash: 0,
            ts: 1587379615,
            update_time: "2020-04-20 18:58:49",
            url: "https://xw.qq.com/cmsid/20200417A0S2TA00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200417/20200417A0S2TA00.html",
          },
          {
            app_id: "20200419A0F6KE00",
            article_type: 1,
            category: "house",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200419A0F6KE00",
            comment_id: "5105611566",
            comment_num: 4,
            ctr_score: 0.0871242,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0F6KE",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612628745_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612627676_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11612604525_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11612627676_400320/0",
              "485X350":
                "https://inews.gtimg.com/newsapp_ls/0/11612627676_485350/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_870492/0",
            },
            intro:
              "这两年，中国房地产企业面临的一个普遍问题就是，负债率过高。此前，万达急切的想要抛售旗下的额重资产，比如说酒店和文旅项目，就是为了换来资金，把负债率给降下来。然而，当年的那笔价值199亿元的交易，却让……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612627676_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612627677_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612627678_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11612604525_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612604500_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612604510_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11612627676_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612627677_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612627678_400320/0",
              ],
              "485X350": [
                "https://inews.gtimg.com/newsapp_ls/0/11612627676_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612627677_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612627678_485350/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612628745_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;15385386;87801|292113|93500;41;1;33;389;0;0;2;1;3;1;0;93500|83149|85964|292113|3211196|87801|136169|109345|107099|84622;334|49",
            item_stat:
              "6776.00000;82756.00000;0.07563;1559.00000;19160.00000;0.07503;816.00000;11225.00000;0.06746;4.00000;734.00000;15872.00000;0.04624;0.00000;0.00000;0.00000;48.90463;2.26159;35896.00000",
            keywords: "万达;富力地产;王健林",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/6811343599_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612603716/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612603713/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612603705/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 16:13:11",
            report:
              '{"ext":"0+4"+"all":";;;84169+6849"+"3h":"718770+40455;544338+29641;house:17953+793;9590+605;9414+605"+"app":";;;19235+878;;0;0;1;42650;48.57631;0.04565;2.21731"+"day":"1708311+98366;1328841+73012;house:45323+2018;20573+1632;20397+1632"}',
            showtype: "picture",
            source: "花落荣昆说",
            source_id: "15385386",
            strategy: 125,
            strategy_pos: 10,
            strategy_score: 0.034313727,
            surl: "http://kuaibao.qq.com/s/20200419A0F6KE00",
            tag_cluster: "",
            tag_label: [
              ["万达", "87801"],
              ["富力地产", "292113"],
              ["王健林", "93500"],
            ],
            tags: "万达;富力地产;王健林",
            terms: "87801:0.218109,292113:0.152871,93500:0.077944",
            title: "又一地产商“凉凉”？199亿“接盘”万达77家酒店，如今负债3千亿",
            title_simhash: 0,
            ts: 1587283991,
            update_time: "2020-04-19 16:16:14",
            url: "https://xw.qq.com/cmsid/20200419A0F6KE00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0F6KE00.html",
          },
          {
            app_id: "20200420A0S4ZI00",
            article_type: 0,
            category: "health",
            category2_chn: "心理",
            category2_id: "1410",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200420A0S4ZI00",
            comment_id: "5112684542",
            comment_num: 127,
            ctr_score: 0.08004458,
            ext: {
              tonality_score: 2,
              news_score: 4,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0S4ZI",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619327072_640330/0",
            img_count: 9,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_870492/0",
            },
            intro:
              "根据Worldometer世界实时统计数据网站，截至北京时间4月20日17时，美国新冠肺炎确诊病例累计764265例，累计死亡40565例。其中，纽约州累计确诊247215例，累计死亡18298例。……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619327072_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1410;5255368;117805|111504770|296499|183995295|183995296;12;0;27;5537;9;0;2;1;4;0;0;837792|116153|177051|89635|167527|88346|117805|84265|151956014|88263;746|348",
            item_stat:
              "17868.00000;286954.00000;0.05861;11169.00000;177944.00000;0.05904;4766.00000;79671.00000;0.05641;112.00000;174880.00000;1681382.00000;0.10401;3.00000;298.00000;254.00000;178.83089;18.60014;31273946.00000",
            keywords: "纽约州;美国_社会;安德鲁·科莫;bertolini;欧阳海伦",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1329702861_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619322439/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619322441/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619322442/641",
            ],
            news_level: 4,
            publish_time: "2020-04-20 20:52:04",
            report:
              '{"ext": "0+127"+ "all": ";;;292226+18145"+ "3h": "567128+33041;133847+5684;health:1349+62#world:183055+8930#antip:327261+11158;42041+2260;58256+2486"+ "app": ";;;1843148+190788;;267;3;340;34293102;179.74454;0.10351;18.60572"+ "day": "1135028+70722;240902+11627;health:3918+199#world:424814+20015#antip:682319+25498;183216+11446;199374+9487"}',
            showtype: "article",
            source: "新京报外事儿",
            source_id: "5255368",
            strategy: 125,
            strategy_pos: 2,
            strategy_score: 0.07723577,
            surl: "http://kuaibao.qq.com/s/20200420A0S4ZI00",
            tag_cluster: "",
            tag_label: [
              ["纽约州", "117805"],
              ["美国_社会", "111504770"],
              ["安德鲁·科莫", "296499"],
            ],
            tags: "纽约州;美国_社会;安德鲁·科莫;bertolini;欧阳海伦",
            terms:
              "117805:0.417779,111504770:0.195116,296499:0.124781,183995295:0.051057,183995296:0.032641",
            title: "美国确诊76万、死亡4万，纽约医生日记揭开一线救护真相",
            title_simhash: 0,
            ts: 1587387124,
            update_time: "2020-04-21 10:10:03",
            url: "https://xw.qq.com/cmsid/20200420A0S4ZI00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0S4ZI00.html",
          },
          {
            app_id: "20200420A0STJ900",
            article_type: 0,
            category: "health",
            category2_chn: "心理",
            category2_id: "1410",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200420A0STJ900",
            comment_id: "5112865434",
            comment_num: 5,
            ctr_score: 0.014479154,
            ext: {
              tonality_score: 2,
              news_score: 4,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0STJ9",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619475645_640330/0",
            img_count: 19,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_870492/0",
            },
            intro:
              "4月17日上午，成都双流区白河路，陈伟军回到阔别三个多月的诊所。进门之前，几名工作人员们拉起横幅、送上鲜花，为他举行了简短的欢迎仪式。诊所为陈伟军举行的欢迎仪式没有过水门，没有警车开道，没有夹道欢迎……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619475646_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619475647_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619475646_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619475647_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619475645_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1410;5082585;83799|509782|179927881|82714|1638812|1157262;2;0;24;3870;19;0;2;3;4;0;0;509782|82714|264352|179927881|142828|647950|644610|88346;912|924",
            item_stat:
              "113.00000;5545.00000;0.02015;102.00000;5112.00000;0.01976;101.00000;5054.00000;0.01979;1.00000;279.00000;10766.00000;0.02591;2.00000;2.00000;1.00000;268.36917;6.95477;74875.00000",
            keywords: "成都;陈伟军;武汉;武汉市第九医院;卢进杰",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11539702680_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619470757/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619470759/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619470760/641",
            ],
            news_level: 4,
            publish_time: "2020-04-21 07:29:35",
            report:
              '{"ext":"0+5"+"all":";;;8336+155"+"3h":"549544+32235;129536+5530;health:1313+61#hubtm:0+0#wuhan:0+0#cd:0+0#chengdu:0+0#hb:0+0;7827+142;62906+2290"+"app":";;;14742+401;;1;2;2;108410;270.34913;0.0272;7.35382"+"day":"1117444+69916;236591+11473;health:3882+198#hubtm:0+0#wuhan:0+0#cd:0+0#chengdu:0+0#hb:0+0;7903+144;169063+6177"}',
            showtype: "article",
            source: "成都商报红星新闻",
            source_id: "5082585",
            strategy: 306,
            strategy_pos: 3,
            strategy_score: 0.1652,
            surl: "http://kuaibao.qq.com/s/20200420A0STJ900",
            tag_cluster: "",
            tag_label: [
              ["成都", "83799"],
              ["陈伟军", "509782"],
              ["武汉", "82714"],
            ],
            tags: "成都;陈伟军;慈善中医之家;武汉;武汉市第九医院;卢进杰",
            terms:
              "83799:0.219091,509782:0.180812,179927881:0.170699,82714:0.150519,1638812:0.061979,1157262:0.033715",
            title: "自掏腰包援武汉 成都个体医生：重要的是去战斗过！",
            title_simhash: 0,
            ts: 1587425375,
            update_time: "2020-04-21 07:29:41",
            url: "https://xw.qq.com/cmsid/20200420A0STJ900",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0STJ900.html",
          },
          {
            app_id: "20200419V0G7SH00",
            article_type: 56,
            category: "ent",
            category2_chn: "其它",
            category2_id: "54",
            category_chn: "其它",
            category_id: "54",
            cmsid: "20200419V0G7SH00",
            comment_id: "5105808447",
            comment_num: 359,
            ctr_score: 0.11193374,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 2,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419V0G7SH",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612814883_196130/0",
            img_count: 0,
            img_special: 0,
            img_type: 2,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612814883_294195/0",
            },
            intro: "马蓉回应开不雅直播被举报，还暗讽王宝强也好不到哪里去",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612814883_294195/0",
              ],
            },
            is_org: 0,
            item_base: "54;54;5326626;;40;1;26;0;0;0;2;2;3;56;0;84720|87921;",
            item_stat:
              "52210.00000;547899.00000;0.08699;5951.00000;66697.00000;0.08184;3058.00000;34596.00000;0.08108;354.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2540480281_200200/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-19 16:56:18",
            report:
              '{"ext":"0+359"+"all":";;;559624+53174"+"3h":"1471996+111482;1471996+111482;ent:958336+70646;35977+3064;36739+3103"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"2778380+215741;2778380+215741;ent:1851951+135531;78422+6915;79672+6975"}',
            showtype: "article",
            source: "扒扒贵圈",
            source_id: "5326626",
            strategy: 124,
            strategy_pos: 21,
            strategy_score: 0.02118,
            surl: "http://kuaibao.qq.com/s/20200419V0G7SH00",
            tag_cluster: "",
            tag_label: [],
            tags: "",
            terms: "",
            title: "马蓉回应开不雅直播被举报，还暗讽王宝强也好不到哪里去",
            title_simhash: 0,
            ts: 1587286578,
            update_time: "2020-04-20 16:00:24",
            url: "https://xw.qq.com/cmsid/20200419V0G7SH00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419V0G7SH00.html",
          },
          {
            app_id: "20200419A0KW1V00",
            article_type: 0,
            category: "gxnn",
            category2_chn: "社会百态",
            category2_id: "3722",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200419A0KW1V00",
            comment_id: "5106841965",
            comment_num: 38,
            ctr_score: 0.105304256,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0KW1V",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613705086_640330/0",
            img_count: 6,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613641682_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11613641682_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_870492/0",
            },
            intro:
              "相信大家还记得前几年因为偷东西被抓入狱的那位小偷，当时他还接受了不少记者的采访，在采访的时候他说了很多妙语连珠的话，这段视频发布到网络中后，吸引了不少的网友的关注，结果人们把他视为了网红。而就在近几……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613641682_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613644949_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613645969_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11613641682_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613644949_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613645969_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613705086_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3722;16608970;85951|120863;36;1;30;1268;6;0;2;1;3;0;0;297605|81205|81547|96832|85951|169792|120525|81980;682|805",
            item_stat:
              "8033.00000;102858.00000;0.07240;1728.00000;28031.00000;0.05797;685.00000;10009.00000;0.06374;35.00000;956.00000;7748.00000;0.12339;0.00000;7.00000;0.00000;106.23954;13.10854;101565.00000",
            keywords: "南宁;鞭炮",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/8056322345_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613640730/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613640731/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613640732/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 20:36:13",
            report:
              '{"ext":"0+38"+"all":";;;107586+8362"+"3h":"3230715+225872;559875+43445;gxnn:0+0#guangxi:0+0;9921+700;9736+700"+"app":";;;8507+1004;;0;0;7;104243;103.82769;0.11802;12.25379"+"day":"6859463+496587;1144311+88053;gxnn:0+0#guangxi:0+0;32759+2057;32574+2057"}',
            showtype: "article",
            source: "嫦娥奔月球",
            source_id: "16608970",
            strategy: 125,
            strategy_pos: 18,
            strategy_score: 0.033333335,
            surl: "http://kuaibao.qq.com/s/20200419A0KW1V00",
            tag_cluster: "",
            tag_label: [
              ["南宁", "85951"],
              ["鞭炮", "120863"],
            ],
            tags: "南宁;鞭炮",
            terms: "85951:0.207108,120863:0.148721",
            title:
              "南宁周某齐已回家，姐姐拉红布放鞭炮庆祝，多家公司门口等候签约",
            title_simhash: 0,
            ts: 1587299773,
            update_time: "2020-04-19 21:11:06",
            url: "https://xw.qq.com/cmsid/20200419A0KW1V00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0KW1V00.html",
          },
          {
            app_id: "20200420A0JMNT00",
            article_type: 0,
            category: "kepu",
            category2_chn: "太空",
            category2_id: "7801",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0JMNT00",
            comment_id: "5111139730",
            comment_num: 6,
            ctr_score: 0.08518537,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0JMNT",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617850342_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617817227_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_870492/0",
            },
            intro:
              "随着人类逐渐掌握COVID-19的传播，科学家渐渐将注意力转向了北极圈。剧烈的全球变暖导致被困在永久冻土下数百万年的远古病毒正“蠢蠢欲动”。研究人员表示，如今的北极就像是一枚随时可能被引爆的炸弹，它……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617850343_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617850344_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617817227_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617818600_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617819375_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617850343_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617850344_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617850342_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7801;5611455;91936|95532|174131408|113331;17;0;32;862;5;0;3;3;3;0;0;91936|113331|10335630|383091|180089641|174131408|117823|86148|117374;839|187|553",
            item_stat:
              "398.00000;4203.00000;0.08530;168.00000;1611.00000;0.09101;115.00000;935.00000;0.10261;6.00000;1970.00000;18859.00000;0.10446;0.00000;6.00000;10.00000;98.22843;10.26088;193510.00000",
            keywords: "病毒;科学家;冰川",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1637404650_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613843056/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613843057/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613843058/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 16:38:41",
            report:
              '{"ext":"0+6"+"all":";;;4958+489"+"3h":"299029+19131;54694+5156;kepu:4604+223;1523+194;1977+217"+"app":";;;20346+2104;;12;0;6;207599;98.66873;0.10341;10.20343"+"day":"634096+40926;87340+7823;kepu:18370+883;2366+259;3253+316"}',
            showtype: "article",
            source: "环球科学大观",
            source_id: "5611455",
            strategy: 102,
            strategy_pos: 21,
            strategy_score: 0.9863,
            surl: "http://kuaibao.qq.com/s/20200420A0JMNT00",
            tag_cluster: "",
            tag_label: [
              ["病毒", "91936"],
              ["科学家", "95532"],
              ["冰川", "113331"],
            ],
            tags: "病毒;科学家;新型冠状病毒;冰川",
            terms:
              "91936:0.198471,95532:0.176375,174131408:0.113708,113331:0.070186",
            title:
              "科学家警告：北极像一枚随时可能被引爆的炸弹！千年前病毒正等待释放",
            title_simhash: 0,
            ts: 1587371921,
            update_time: "2020-04-21 00:35:31",
            url: "https://xw.qq.com/cmsid/20200420A0JMNT00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0JMNT00.html",
          },
          {
            app_id: "20200419A09CKL00",
            article_type: 0,
            category: "world",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200419A09CKL00",
            comment_id: "5104419064",
            comment_num: 1,
            ctr_score: 0.08291065,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A09CKL",
            img: "https://inews.gtimg.com/newsapp_ls/0/11611624306_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11611566756_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_870492/0",
            },
            intro:
              "据《纽约邮报》4月18日报道，随着新冠肺炎在全球范围内持续蔓延，最近科学家的研究有新的进展，美洲驼、雪貂和仓鼠已经取代了小白鼠成为实验室的研究对象。据悉，美洲驼体内可能有助于中和新冠病毒感染的抗体，……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611624307_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611624308_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11611566756_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611566760_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611566759_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611624307_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611624308_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11611624306_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;5541107;175700360|175984832|366819;46;1;30;512;3;0;2;3;3;0;0;147787|3892279|175700360|366819|273048|757447|108836|193074|152586|99981;784",
            item_stat:
              "205.00000;5554.00000;0.03550;15.00000;238.00000;0.05099;10.00000;157.00000;0.04869;1.00000;1296.00000;41839.00000;0.03098;0.00000;2.00000;2.00000;34.11806;1.05684;44217.00000",
            keywords: "雪貂",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/5059092664_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11611563250/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611563252/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611563253/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 11:55:35",
            report:
              '{"ext":"0+1"+"all":";;;5577+207"+"3h":"289940+18488;74579+3966;world:172717+8392;133+10;63061+3921"+"app":";;;41840+1296;;2;0;2;44217;34.11806;0.03098;1.05681"+"day":"625007+40283;165910+10437;world:414476+19477;261+17;182379+11728"}',
            showtype: "article",
            source: "英国英鸟",
            source_id: "5541107",
            strategy: 10,
            strategy_pos: 15,
            strategy_score: 0.36,
            surl: "http://kuaibao.qq.com/s/20200419A09CKL00",
            tag_cluster: "",
            tag_label: [["雪貂", "366819"]],
            tags: "新冠肺炎;新冠;雪貂",
            terms: "175700360:0.183899,175984832:0.182344,366819:0.15597",
            title:
              "美洲驼或有中和新冠抗体，正式加入抗疫战斗，与雪貂仓鼠并肩作战",
            title_simhash: 0,
            ts: 1587268535,
            update_time: "2020-04-20 16:38:42",
            url: "https://xw.qq.com/cmsid/20200419A09CKL00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A09CKL00.html",
          },
          {
            app_id: "20200420A0KB9B00",
            article_type: 0,
            category: "auto",
            category2_chn: "用车",
            category2_id: "4201",
            category_chn: "汽车",
            category_id: "42",
            cmsid: "20200420A0KB9B00",
            comment_id: "5111238473",
            comment_num: 2,
            ctr_score: 0.08113428,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0KB9B",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618080112_640330/0",
            img_count: 6,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11617926546_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_870492/0",
            },
            intro:
              "首富在我们的眼中都是高不可攀的，说到亚洲首富很多人第一个就会想到李嘉诚、马云，两位知名度和话题度一直很高，但去年到今年的亚洲首富排名并不是两人中的其中一个，而是印度商人：穆科什-安巴尼。穆科什-安巴……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618080114_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618080115_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11617926546_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617929709_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617934845_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618080114_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618080115_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618080112_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "42;4201;5578168;84542|103700;17;0;35;577;6;0;2;3;3;0;0;417646|103700|84542|97422|99402|92007|87889|84225|1561255;56|49",
            item_stat:
              "488.00000;7472.00000;0.06092;133.00000;1542.00000;0.07662;43.00000;375.00000;0.08880;2.00000;880.00000;10268.00000;0.08570;0.00000;2.00000;2.00000;81.82045;7.01227;72002.00000",
            keywords: "豪宅;首富",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1523482233_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11617908421/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617909656/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617922672/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 16:54:47",
            report:
              '{"ext":"0+2"+"all":";;;7520+498"+"3h":"643956+46974;333653+28298;auto:43459+2617;389+47;10203+954"+"app":";;;10268+880;;2;0;2;72002;81.82045;0.0857;7.01227"+"day":"1386780+101871;644164+56418;auto:113378+7057;1590+143;25572+2239"}',
            showtype: "article",
            source: "路行千里车担忧",
            source_id: "5578168",
            strategy: 102,
            strategy_pos: 19,
            strategy_score: 0.9861,
            surl: "http://kuaibao.qq.com/s/20200420A0KB9B00",
            tag_cluster: "",
            tag_label: [
              ["豪宅", "84542"],
              ["首富", "103700"],
            ],
            tags: "豪宅;首富",
            terms: "84542:0.26554,103700:0.217978",
            title:
              "亚洲首富第一夫人！住10亿豪宅有600名佣人，大奔座驾镶满30万颗钻石",
            title_simhash: 0,
            ts: 1587372887,
            update_time: "2020-04-20 20:00:14",
            url: "https://xw.qq.com/cmsid/20200420A0KB9B00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0KB9B00.html",
          },
          {
            app_id: "20200420A0MOCG00",
            article_type: 0,
            category: "emotion",
            category2_chn: "婚姻",
            category2_id: "6502",
            category_chn: "情感",
            category_id: "65",
            cmsid: "20200420A0MOCG00",
            comment_id: "5111582542",
            comment_num: 14,
            ctr_score: 0.07856893,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0MOCG",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618471818_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618294786_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11618294786_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_870492/0",
            },
            intro:
              "母亲在国外做8年保姆，挣三套房给孩子，邻楼女儿：吃我五年多饭本期情感调解的主题是为两顿饭发愁的老母亲老母亲有三个子女，年轻的时候，母亲在国外一户人家里做了8年保姆，挣的钱在老家买了三套房子，三个孩子……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618294786_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618294788_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618294791_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11618294786_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618294788_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618294791_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618471818_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "65;6502;9112265;314496|98433|84215|88774;16;0;30;1460;3;0;2;1;3;0;0;84037|82923|91564|82104|92705|84215|91515|144602|93203|208699;424",
            item_stat:
              "1258.00000;12575.00000;0.09050;541.00000;6003.00000;0.08188;273.00000;3366.00000;0.07382;13.00000;853.00000;2261.00000;0.37727;0.00000;1.00000;1.00000;171.77374;64.80451;146523.00000",
            keywords: "mother;媳妇;儿子;子女",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3483539947_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618290758/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618290759/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618290762/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:43:47",
            report:
              '{"ext":"0+14"+"all":";;;14057+1349"+"3h":"358092+35388;175674+16584;emotion:2549+54;3799+259;4383+325"+"app":";;;3203+1175;;1;0;1;200747;170.84851;0.36684;62.67468"+"day":"679405+61144;314367+28465;emotion:8862+191;7485+632;8872+765"}',
            showtype: "article",
            source: "情起相思",
            source_id: "9112265",
            strategy: 104,
            strategy_pos: 11,
            strategy_score: 0.25223213,
            surl: "http://kuaibao.qq.com/s/20200420A0MOCG00",
            tag_cluster: "",
            tag_label: [
              ["MOTHER", "314496"],
              ["媳妇", "98433"],
              ["儿子", "84215"],
            ],
            tags: "mother;媳妇;儿子;子女",
            terms:
              "314496:0.323905,98433:0.08756,84215:0.074587,88774:0.059784",
            title:
              "母亲在国外做8年保姆，挣三套房给孩子，邻楼女儿：吃我五年多饭",
            title_simhash: 0,
            ts: 1587375827,
            update_time: "2020-04-20 21:44:53",
            url: "https://xw.qq.com/cmsid/20200420A0MOCG00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0MOCG00.html",
          },
          {
            app_id: "20200420A0QSL100",
            article_type: 0,
            category: "house",
            category2_chn: "装修攻略",
            category2_id: "7410",
            category_chn: "家居",
            category_id: "74",
            cmsid: "20200420A0QSL100",
            comment_id: "5112340452",
            comment_num: 0,
            ctr_score: 0.080271386,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0QSL1",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619052366_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619048462_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_870492/0",
            },
            intro:
              "带你看看乔杉的豪宅，女儿饭量也像他那么大，一顿饭要吃好多菜乔杉搞笑的风格吸引了很多人关注，而且《屌丝男士》中出色的表演得到了更多人的认可。如今的乔杉在整个喜剧界都是很有名气的，胖胖的身躯看起来也是非……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619052367_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619052368_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619048462_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619048457_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619048459_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619052367_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619052368_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619052366_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "74;7410;5419127;84542|244569;13;0;29;768;5;0;2;3;3;0;0;244569|81306|265828|81996|96951|83388|141325|269445|97666|84542;56|558",
            item_stat:
              "128.00000;2910.00000;0.04175;68.00000;1477.00000;0.04316;40.00000;881.00000;0.04212;0.00000;1225.00000;12582.00000;0.09736;0.00000;0.00000;0.00000;27.50041;2.67748;33688.00000",
            keywords: "豪宅;乔杉",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/963990125_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619047543/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619047544/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619047545/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 19:59:15",
            report:
              '{"ext":"0+0"+"all":";;;3119+132"+"3h":"48592+3762;44305+3467;house:19337+828;810+32;31694+2503"+"app":";;;12962+1262;;0;0;0;34579;27.40016;0.09736;2.66772"+"day":"117885+8631;109132+7947;house:46707+2053;1686+72;83722+6055"}',
            showtype: "article",
            source: "甘甘聊家装",
            source_id: "5419127",
            strategy: 10,
            strategy_pos: 12,
            strategy_score: 0.6,
            surl: "http://kuaibao.qq.com/s/20200420A0QSL100",
            tag_cluster: "",
            tag_label: [
              ["豪宅", "84542"],
              ["乔杉", "244569"],
            ],
            tags: "豪宅;乔杉",
            terms: "84542:0.425648,244569:0.24868",
            title: "带你看看乔杉的豪宅，女儿饭量也像他那么大，一顿饭要吃好多菜",
            title_simhash: 0,
            ts: 1587383955,
            update_time: "2020-04-20 21:00:14",
            url: "https://xw.qq.com/cmsid/20200420A0QSL100",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0QSL100.html",
          },
          {
            app_id: "20200421A00FB700",
            article_type: 0,
            category: "tech",
            category2_chn: "软件",
            category2_id: "605",
            category_chn: "科技",
            category_id: "6",
            cmsid: "20200421A00FB700",
            comment_id: "5113599843",
            comment_num: 95,
            ctr_score: 0.07840417,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A00FB7",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620115497_640330/0",
            img_count: 19,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_870492/0",
            },
            intro:
              "今天有个消息刷爆了世超的朋友圈，台上被泼水、台下 No Problem 的彦宏老师又成为了众矢之的。根据百度贴吧网友爆料，他家的 Cloud ——百度网盘被爆出偷偷在后台偷用户的流量。有网友发现，在……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620115497_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "6;605;5100313;315173|106042|105724362|260511|277322|84082;9;0;14;1441;19;0;3;1;3;0;1;315173|106042|89588|82270|685068|105724362|283131|141293|260511;111|542",
            item_stat:
              "254.00000;2043.00000;0.10722;254.00000;2043.00000;0.10722;254.00000;2041.00000;0.10731;88.00000;118.00000;1009.00000;0.11695;0.00000;0.00000;2.00000;91.48305;10.69871;10795.00000",
            keywords: "百度网盘;百度;百度贴吧;iphone x;iPhone",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2780354131_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11507076464/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620113828/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620113829/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 00:13:12",
            report:
              '{"ext":"0+95"+"all":";;;2865+317"+"3h":"704045+47055;4210+338;tech:29560+900;2863+317;2864+317"+"app":";;;1009+118;;2;0;0;10795;91.48305;0.11695;10.69871"+"day":"1553259+104915;5306+350;tech:62417+1887;2865+317;2875+318"}',
            showtype: "article",
            source: "差评",
            source_id: "5100313",
            strategy: 104,
            strategy_pos: 21,
            strategy_score: 0.22904192,
            surl: "http://kuaibao.qq.com/s/20200421A00FB700",
            tag_cluster: "",
            tag_label: [
              ["百度网盘", "315173"],
              ["百度", "106042"],
              ["百度贴吧", "260511"],
            ],
            tags: "百度网盘;百度;世超;百度贴吧;iphone x;iphone",
            terms:
              "315173:0.402527,106042:0.189965,105724362:0.181217,260511:0.078952,277322:0.062161,84082:0.03108",
            title: "百度网盘是怎么嫖你家电费的？",
            title_simhash: 0,
            ts: 1587399192,
            update_time: "2020-04-21 07:21:47",
            url: "https://xw.qq.com/cmsid/20200421A00FB700",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A00FB700.html",
          },
          {
            app_id: "20200420A0KZAW00",
            article_type: 0,
            category: "kepu",
            category2_chn: "学术健康",
            category2_id: "1425",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200420A0KZAW00",
            comment_id: "5111334040",
            comment_num: 0,
            ctr_score: 0.0762702,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0KZAW",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618193639_640330/0",
            img_count: 12,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_870492/0",
            },
            intro:
              "根据世界卫生组织 20 日公布的数据显示，全球累计新冠肺炎确诊病例已破 230 万。当国外疫情严峻之时，「境外输入」、「无症状感染」等现象也对中国提出了新一轮的考验。「无症状感染者」因为没有出现任何……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618193639_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1425;5394824;273048|369640|175984832|175700360|97661;17;0;26;2269;12;0;2;1;3;0;0;273048|369640|97661|402556|363606|125504189|87437;511|485",
            item_stat:
              "189.00000;3214.00000;0.05481;54.00000;1064.00000;0.04680;19.00000;401.00000;0.04231;0.00000;528.00000;3483.00000;0.15159;0.00000;0.00000;5.00000;64.39583;9.76199;34001.00000",
            keywords: "抗体;噬菌体;蛋白",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/890166933_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618044722/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618044723/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618044724/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:00:02",
            report:
              '{"ext":"0+0"+"all":";;;3250+189"+"3h":"549544+32235;135134+7608;kepu:4604+223#health:1313+61;341+16;362+17"+"app":";;;3483+528;;5;0;0;34001;64.39583;0.15159;9.76199"+"day":"1117444+69916;307081+17269;kepu:18370+883#health:3882+198;1100+54;1161+57"}',
            showtype: "article",
            source: "生物学霸",
            source_id: "5394824",
            strategy: 117,
            strategy_pos: 20,
            strategy_score: 0.04562,
            surl: "http://kuaibao.qq.com/s/20200420A0KZAW00",
            tag_cluster: "",
            tag_label: [
              ["抗体", "273048"],
              ["噬菌体", "369640"],
              ["蛋白", "97661"],
            ],
            tags: "抗体;噬菌体;新冠;新冠肺炎;蛋白",
            terms:
              "273048:0.330279,369640:0.18339,175984832:0.126639,175700360:0.110065,97661:0.055458",
            title: "关注！新冠人源抗体研发成功，将是解决无症状感染关键？",
            title_simhash: 0,
            ts: 1587373202,
            update_time: "2020-04-21 01:26:50",
            url: "https://xw.qq.com/cmsid/20200420A0KZAW00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0KZAW00.html",
          },
          {
            app_id: "20200421A04MZ800",
            article_type: 0,
            category: "bj",
            category2_chn: "环境保护",
            category2_id: "3704",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200421A04MZ800",
            comment_id: "5114479485",
            comment_num: 1,
            ctr_score: 0.020964423,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A04MZ8",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621163398_640330/0",
            img_count: 0,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_870492/0",
            },
            intro:
              "新京报快讯 据北京地铁官博消息，目前地铁8号线朱辛庄站受信号设备影响，造成部分列车晚点，由此给您带来的不便敬请谅解。编辑 刘佳妮来源：北京地铁官博",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621163398_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3704;26134;96669|208705|175922;0;0;21;73;0;0;3;1;3;0;0;208705|96669|4844228|253813|111324|82413|209665|3482715|108364|175922;109|735|815",
            item_stat:
              "0.00000;4.00000;0.02885;0.00000;4.00000;0.02885;0.00000;4.00000;0.02885;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "北京地铁;地铁8号线;朱辛庄",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/dbg_2144844_100100/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-21 08:48:01",
            report:
              '{"ext":"0+1"+"all":";;;2307+8"+"3h":"3323707+231518;31902+1206;bj:0+0#society:0+0;2307+8;75566+3081"+"app":";;;111+1;;0;0;0;3;3.0;0.00901;0.02703"+"day":"6952455+502233;60710+2475;bj:0+0#society:0+0;2307+8;183324+8288"}',
            showtype: "article",
            source: "新京报",
            source_id: "26134",
            strategy: 306,
            strategy_pos: 6,
            strategy_score: 0.1282,
            surl: "http://kuaibao.qq.com/s/20200421A04MZ800",
            tag_cluster: "",
            tag_label: [
              ["北京地铁", "96669"],
              ["地铁8号线", "208705"],
              ["朱辛庄", "175922"],
            ],
            tags: "北京地铁;地铁8号线;朱辛庄",
            terms: "96669:0.279068,208705:0.247092,175922:0.130974",
            title: "北京地铁8号线受信号设备影响，部分列车晚点",
            title_simhash: 0,
            ts: 1587430081,
            update_time: "2020-04-21 09:56:21",
            url: "https://xw.qq.com/cmsid/20200421A04MZ800",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A04MZ800.html",
          },
          {
            app_id: "20200419A0CS7O00",
            article_type: 0,
            category: "baby",
            category2_chn: "二胎",
            category2_id: "4317",
            category_chn: "育儿",
            category_id: "43",
            cmsid: "20200419A0CS7O00",
            comment_id: "5105134191",
            comment_num: 228,
            ctr_score: 0.115747415,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0CS7O",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612176268_640330/0",
            img_count: 8,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11612167456_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_870492/0",
            },
            intro:
              "文丨崔妈（文章原创 ，版权归本人所有，欢迎妈妈们转发分享）引言：关于名字大家都很重视，父母在给孩子取名的时候也是比较慎重的。在一些大家族里面还有族谱，小辈也是按字辈来取名的，这也是一种文化的传承。但……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612176269_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612176270_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11612167456_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612167460_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612167457_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612176269_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612176270_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612176268_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "43;4317;9233656;99861|4692284|1216967;43;1;30;1170;8;0;2;3;3;0;0;99861|82853|202494|83432|144353|532116|103638|81184|213036|91066;890",
            item_stat:
              "10393.00000;159221.00000;0.06126;2861.00000;43056.00000;0.06224;1077.00000;10785.00000;0.09029;224.00000;29286.00000;192331.00000;0.15227;0.00000;267.00000;9.00000;61.99816;9.44038;1815678.00000",
            keywords: "姜文;姜次郎;姜太郎",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3524127234_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612166583/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612166584/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612166585/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 14:32:04",
            report:
              '{"ext":"0+228"+"all":";;;160946+10558"+"3h":"365624+33607;88464+8225;baby:168+15;10828+1076;10849+1078"+"app":";;;192331+29286;;9;0;267;1815678;61.99816;0.15227;9.44038"+"day":"746438+61217;186698+15869;baby:809+42;44781+3026;44860+3032"}',
            showtype: "article",
            source: "小丛丛谈游戏",
            source_id: "9233656",
            strategy: 104,
            strategy_pos: 21,
            strategy_score: 0.22736506,
            surl: "http://kuaibao.qq.com/s/20200419A0CS7O00",
            tag_cluster: "",
            tag_label: [
              ["姜文", "99861"],
              ["姜次郎", "4692284"],
              ["姜太郎", "1216967"],
            ],
            tags: "姜文;姜次郎;姜太郎",
            terms: "99861:0.295913,4692284:0.292587,1216967:0.149949",
            title: "给儿子取名姜次郎，被网友指责是“亲日”，姜文：没文化要多读书",
            title_simhash: 0,
            ts: 1587277924,
            update_time: "2020-04-20 20:49:25",
            url: "https://xw.qq.com/cmsid/20200419A0CS7O00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0CS7O00.html",
          },
          {
            app_id: "20200420A0U9KD00",
            article_type: 0,
            category: "lifes",
            category2_chn: "健身",
            category2_id: "7613",
            category_chn: "生活方式",
            category_id: "76",
            cmsid: "20200420A0U9KD00",
            comment_id: "5113252133",
            comment_num: 12,
            ctr_score: 0.10047452,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0U9KD",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620840708_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619912577_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_870492/0",
            },
            intro:
              "洗米华与妻子洗米嫂（陈慧玲）以及小三Mandy Lieu的三人行婚姻一直备受大众关注，这段“畸形”的感情最终以Mandy Lieu的退出宣告结束。洗米嫂重获丈夫宠爱，一家人仿佛什么都没发生过，生活的……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841102_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841103_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619912577_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619912583_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619912576_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841102_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841103_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "76;7613;6543888;127427679|84542|258805;2;0;33;436;5;0;2;3;3;0;0;3653347|165276|91218|939510|84542|237418|96941|82796|158251|93198;56",
            item_stat:
              "460.00000;13296.00000;0.03342;458.00000;13251.00000;0.03338;440.00000;13024.00000;0.03266;12.00000;14980.00000;161711.00000;0.09263;0.00000;11.00000;1.00000;34.62884;3.20782;518740.00000",
            keywords: "豪宅;MANDY",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11541064814_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619886543/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619841035/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619841713/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 07:13:17",
            report:
              '{"ext":"0+12"+"all":";;;13366+468"+"3h":"55674+4285;36858+2964;lifes:0+0#ent:989712+72771;13094+448;20818+889"+"app":";;;161711+14980;;1;0;11;518740;34.62884;0.09263;3.20782"+"day":"94329+7204;60024+4850;lifes:0+0#ent:1883327+137656;13321+466;28812+1426"}',
            showtype: "article",
            source: "楚雨荨吃牛肉面",
            source_id: "6543888",
            strategy: 10,
            strategy_pos: 21,
            strategy_score: 0.000108839165,
            surl: "http://kuaibao.qq.com/s/20200420A0U9KD00",
            tag_cluster: "",
            tag_label: [
              ["豪宅", "84542"],
              ["MANDY", "258805"],
            ],
            tags: "洗米嫂;豪宅;mandy",
            terms: "127427679:0.34989,84542:0.240214,258805:0.127701",
            title:
              "洗米嫂晒运动照曝光豪宅内景，两层高的攀岩墙瞩目，室内仿佛大型健身房",
            title_simhash: 0,
            ts: 1587424397,
            update_time: "2020-04-21 07:38:37",
            url: "https://xw.qq.com/cmsid/20200420A0U9KD00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0U9KD00.html",
          },
          {
            app_id: "20200420A032SJ00",
            article_type: 0,
            category: "auto",
            category2_chn: "用车",
            category2_id: "4201",
            category_chn: "汽车",
            category_id: "42",
            cmsid: "20200420A032SJ00",
            comment_id: "5108299826",
            comment_num: 6,
            ctr_score: 0.098741524,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A032SJ",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615088136_640330/0",
            img_count: 2,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_870492/0",
            },
            intro:
              "约车大plk上方关注网约车司机联盟限时福利：关注微信公众号“网约车司机联盟”，回复关键词“司机群”，限时加入网约车司机专属的微信交流群，与全国各地网约车司机共同维护司机们的利益。加入网约车司机专属的……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615088136_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "42;4201;11807440;102234;26;1;29;563;2;0;2;1;3;0;0;10004098|100380|102234|97572|124813|82196|87821|82531|87368|94250;479",
            item_stat:
              "6326.00000;118609.00000;0.05062;2791.00000;27645.00000;0.09150;1664.00000;16306.00000;0.09225;6.00000;12.00000;80.00000;0.15000;0.00000;0.00000;0.00000;73.41667;11.01250;881.00000",
            keywords: "自动挡",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/5491065735_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11615086930/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615086931/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 07:00:33",
            report:
              '{"ext":"0+6"+"all":";;;121471+6624"+"3h":"626339+45752;323679+27538;auto:42036+2535;16239+1633;15719+1591"+"app":";;;80+12;;0;0;0;881;73.41667;0.15;11.0125"+"day":"1369163+100649;634190+55658;auto:111955+6975;30507+3089;29988+3047"}',
            showtype: "article",
            source: "网约车老司机",
            source_id: "11807440",
            strategy: 125,
            strategy_pos: 11,
            strategy_score: 0.033333335,
            surl: "http://kuaibao.qq.com/s/20200420A032SJ00",
            tag_cluster: "",
            tag_label: [["自动挡", "102234"]],
            tags: "自动挡",
            terms: "102234:0.287068",
            title: "在自动挡下坡时，只有笨蛋才踩刹车，老司机：这样下坡才安全！",
            title_simhash: 0,
            ts: 1587337233,
            update_time: "2020-04-21 01:50:05",
            url: "https://xw.qq.com/cmsid/20200420A032SJ00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A032SJ00.html",
          },
          {
            app_id: "20200417A0FG7100",
            article_type: 0,
            category: "baby",
            category2_chn: "亲子教育",
            category2_id: "4315",
            category_chn: "育儿",
            category_id: "43",
            cmsid: "20200417A0FG7100",
            comment_id: "5094172462",
            comment_num: 1,
            ctr_score: 0.093928374,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200417A0FG71",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615353656_640330/0",
            img_count: 10,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11601652089_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_870492/0",
            },
            intro:
              "文/小聆妈妈（本文原创，版权归作者所有）要说起明星的孩子，最受人争议的就是黄磊和孙莉的大女儿，黄多多，大概是因为他一开始很小的时候就已经在荧幕露脸，自从和爸爸参加《爸爸去哪儿》以后，很多人就被这个又……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615353657_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615353658_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11601652089_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11601652092_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11601652094_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615353657_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615353658_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615353656_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "43;4315;9482038;82922|141869|252805;38;1;30;1427;0;0;2;3;3;0;0;82922|83432|141869|91066|81418|90939|84015|86448|81980|391698;736",
            item_stat:
              "4645.00000;52289.00000;0.08150;886.00000;9658.00000;0.08352;516.00000;5442.00000;0.08567;1.00000;149.00000;1072.00000;0.13899;0.00000;0.00000;0.00000;46.04027;6.39925;6860.00000",
            keywords: "黄磊;孙莉;黄多多",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/9407772010_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11586514750/641",
              "https://inews.gtimg.com/newsapp_bt/0/11586514752/641",
              "https://inews.gtimg.com/newsapp_bt/0/11586514746/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 18:55:00",
            report:
              '{"ext":"0+1"+"all":";;;53344+4740"+"3h":"365624+33607;121502+11071;baby:168+15;4812+438;4730+441"+"app":";;;1197+160;;0;0;0;7350;45.9375;0.13367;6.14035"+"day":"746438+61217;259959+21367;baby:809+42;10713+981;10642+985"}',
            showtype: "article",
            source: "小聆妈妈",
            source_id: "9482038",
            strategy: 11,
            strategy_pos: 11,
            strategy_score: 0.21600002,
            surl: "http://kuaibao.qq.com/s/20200417A0FG7100",
            tag_cluster: "",
            tag_label: [
              ["黄磊", "82922"],
              ["孙莉", "141869"],
              ["黄多多", "252805"],
            ],
            tags: "黄磊;孙莉;黄多多",
            terms: "82922:0.319384,141869:0.230296,252805:0.157913",
            title: "黄磊女儿多多因“穿着”再上热搜，网友：孙莉，你是怎么当妈的？",
            title_simhash: 0,
            ts: 1587293700,
            update_time: "2020-04-20 08:51:21",
            url: "https://xw.qq.com/cmsid/20200417A0FG7100",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200417/20200417A0FG7100.html",
          },
          {
            app_id: "20200421A032EZ00",
            article_type: 0,
            category: "milite",
            category2_chn: "地球科学",
            category2_id: "7811",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200421A032EZ00",
            comment_id: "5114088463",
            comment_num: 17,
            ctr_score: 0.08495322,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A032EZ",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620775136_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11620770637_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_870492/0",
            },
            intro:
              "20日，第一个可能击败病毒、实现解封的西方国家，浮出了水面！这就是小小的新西兰！新西兰总理阿德恩宣布，4月28日零时起，全国将降回第3级警戒，并允许林业、建筑、制造及零售相关行业可以准备复工。由于新……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620775137_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620775138_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11620770637_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620770640_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620770639_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620775137_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620775138_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620775136_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7811;5158423;91936|2378397|353436;2;0;30;997;3;0;3;3;3;0;0;98332|90179|81647|91936|10470023|89382|33603352|104085|138295921;187|561",
            item_stat:
              "12.00000;237.00000;0.04298;12.00000;237.00000;0.04298;12.00000;237.00000;0.04298;0.00000;10.00000;285.00000;0.03509;0.00000;0.00000;0.00000;0.30000;0.01053;3.00000",
            keywords: "病毒;克里斯·史密斯;阿德恩",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/10579718758_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11620769471/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620769472/641",
              "https://inews.gtimg.com/newsapp_bt/0/11617404485/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 06:38:58",
            report:
              '{"ext":"0+17"+"all":";;;5136+182"+"3h":"299029+19131;25317+2185;milite:33+50#kepu:4604+223;5136+182;26064+1001"+"app":";;;216023+21200;;22;0;12;1089429;51.38816;0.09814;5.04312"+"day":"634096+40926;52922+4835;milite:165+163#kepu:18370+883;5136+182;55555+2145"}',
            showtype: "article",
            source: "转管炮",
            source_id: "5158423",
            strategy: 14,
            strategy_pos: 2,
            strategy_score: 0.01,
            surl: "http://kuaibao.qq.com/s/20200421A032EZ00",
            tag_cluster: "",
            tag_label: [
              ["病毒", "91936"],
              ["克里斯·史密斯", "2378397"],
              ["阿德恩", "353436"],
            ],
            tags: "病毒;克里斯·史密斯;阿德恩",
            terms: "91936:0.372657,2378397:0.213162,353436:0.054096",
            title:
              "第1个控制病毒的西方国家，会是这一国？专家却说，先别急着高兴",
            title_simhash: 0,
            ts: 1587422338,
            update_time: "2020-04-21 09:35:10",
            url: "https://xw.qq.com/cmsid/20200421A032EZ00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A032EZ00.html",
          },
          {
            app_id: "20200420A008Z900",
            article_type: 0,
            category: "kepu",
            category2_chn: "学术健康",
            category2_id: "1425",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200420A008Z900",
            comment_id: "5107707104",
            comment_num: 1,
            ctr_score: 0.081214875,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A008Z9",
            img: "https://inews.gtimg.com/newsapp_ls/0/11614443769_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_870492/0",
            },
            intro:
              "撰文：常熟理工李杰转载留言即可在4月15日的《新闻1+1》节目中武汉的胡亚波副市长公布了一组数据：武汉解封一周以来，一共做了22.6万次核酸检测，其中检出的无症状感染者是130人，比例大概是万分之五……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11614443769_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1425;5157931;273048|176557882|174131408;33;1;19;1047;1;0;2;1;3;0;0;177571522|273048|3575747|176557882|174131408|82714|156364|495417|109066|549655;511",
            item_stat:
              "249.00000;4508.00000;0.05188;37.00000;745.00000;0.04535;23.00000;392.00000;0.05049;1.00000;1039.00000;41553.00000;0.02500;0.00000;1.00000;9.00000;101.78248;2.54499;105752.00000",
            keywords: "抗体",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/301773724_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11614425980/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 00:10:15",
            report:
              '{"ext":"0+1"+"all":";;;4542+249"+"3h":"532238+31355;130682+7344;kepu:4518+218#health:1304+61;380+18;376+18"+"app":";;;41553+1039;;9;0;1;105752;101.78248;0.025;2.54499"+"day":"1100138+69036;302629+17005;kepu:18284+878#health:3873+198;779+37;777+37"}',
            showtype: "article",
            source: "中国病毒学论坛",
            source_id: "5157931",
            strategy: 10,
            strategy_pos: 11,
            strategy_score: 0.0038880007,
            surl: "http://kuaibao.qq.com/s/20200420A008Z900",
            tag_cluster: "",
            tag_label: [["抗体", "273048"]],
            tags: "抗体;新冠病毒;新型冠状病毒",
            terms: "273048:0.236561,176557882:0.189016,174131408:0.11304",
            title: "新冠病毒检测：核酸检测好还是抗体检测好",
            title_simhash: 0,
            ts: 1587312615,
            update_time: "2020-04-21 09:37:37",
            url: "https://xw.qq.com/cmsid/20200420A008Z900",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A008Z900.html",
          },
          {
            app_id: "20200420A039O300",
            article_type: 0,
            category: "kepu",
            category2_chn: "太空",
            category2_id: "7801",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A039O300",
            comment_id: "5108354416",
            comment_num: 25,
            ctr_score: 0.08071204,
            ext: {
              tonality_score: 3,
              news_score: 4,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A039O3",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618599752_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11615431027_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_870492/0",
            },
            intro:
              "地球每时每刻都在发生着变化，最典型就是地球上的大陆，我们虽然感觉不到大陆在移动，其实它们每时每刻都在缓慢的移动，根据大陆漂移说理论，在2.5亿年前，地球并不像现在那样由六块大陆组成，当时的陆地都合并……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618599753_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618599754_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11615431027_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615431567_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618583454_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618599753_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618599754_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618599752_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7801;5494965;81903|95532|101071|426936;15;0;29;1711;7;0;3;3;4;0;0;81903|86733|10521388|89689|166394|100461070|101071|104379|86148|92783;839|271|360",
            item_stat:
              "882.00000;9299.00000;0.08608;391.00000;4248.00000;0.08314;226.00000;2289.00000;0.08757;24.00000;8113.00000;47253.00000;0.17169;0.00000;25.00000;7.00000;145.04770;24.90365;1176772.00000",
            keywords: "地球;科学家;恐龙;大陆漂移",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1230046204_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11501517834/641",
              "https://inews.gtimg.com/newsapp_bt/0/10906855621/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615397831/641",
            ],
            news_level: 4,
            publish_time: "2020-04-20 18:27:58",
            report:
              '{"ext":"0+25"+"all":";;;9989+949"+"3h":"299029+19131;54694+5156;kepu:4604+223;2728+276;15307+1472"+"app":";;;47253+8113;;7;0;25;1176772;145.0477;0.17169;24.90365"+"day":"634096+40926;87340+7823;kepu:18370+883;4938+458;26093+2505"}',
            showtype: "article",
            source: "覃小懒聊天文",
            source_id: "5494965",
            strategy: 14,
            strategy_pos: 11,
            strategy_score: 0.12960002,
            surl: "http://kuaibao.qq.com/s/20200420A039O300",
            tag_cluster: "",
            tag_label: [
              ["地球", "81903"],
              ["科学家", "95532"],
              ["恐龙", "101071"],
            ],
            tags: "地球;科学家;恐龙;大陆漂移",
            terms:
              "81903:0.344381,95532:0.197923,101071:0.09856,426936:0.047245",
            title: "3亿年后的地球会变成什么样子？科学家公开模拟图，变化有点大",
            title_simhash: 0,
            ts: 1587378478,
            update_time: "2020-04-21 00:33:18",
            url: "https://xw.qq.com/cmsid/20200420A039O300",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A039O300.html",
          },
          {
            app_id: "20200419A0F84300",
            article_type: 0,
            category: "history",
            category2_chn: "秦汉",
            category2_id: "6421",
            category_chn: "历史",
            category_id: "64",
            cmsid: "20200419A0F84300",
            comment_id: "5105619195",
            comment_num: 4,
            ctr_score: 0.078855716,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0F843",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612785577_640330/0",
            img_count: 6,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11612621214_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_870492/0",
            },
            intro:
              "《书·益稷》记载：“弼成五服，至于五千”，古代王畿外围，以五百里为一区划，由近及远分为甸服﹑侯服﹑绥服（一曰宾服）﹑要服﹑荒服，合称五服。五服虽然古代丧葬习俗，但也是从另外一方面诉说家族的亲属关系。……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612785578_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612785579_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11612621214_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612621859_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612622476_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612785578_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612785579_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612785577_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "64;6421;5552654;467513|976358|127799396|127277834|397680|211744;41;1;29;1156;0;0;2;3;3;0;0;81184|97429|109508|416102|690951|211744|976358|212951|397680;670|722",
            item_stat:
              "12075.00000;147423.00000;0.07568;2229.00000;25909.00000;0.07904;1088.00000;15556.00000;0.06516;4.00000;1404.00000;13986.00000;0.10039;0.00000;4.00000;1.00000;84.41239;8.47383;118515.00000",
            keywords: "罗斯柴尔德家族;菊花王朝;琅琊王氏;阿拉伯半岛",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1832320472_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612590454/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612590455/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612590456/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 16:14:46",
            report:
              '{"ext":"0+4"+"all":";;;148350+12172"+"3h":"367162+33460;68163+5841;history:4181+504;11652+809;71829+7627"+"app":";;;18379+1869;;4;0;4;153735;82.25522;0.10169;8.36471"+"day":"829007+74458;160696+14858;history:15717+1442;26836+2326;113684+12573"}',
            showtype: "article",
            source: "人物客栈",
            source_id: "5552654",
            strategy: 125,
            strategy_pos: 13,
            strategy_score: 0.034313727,
            surl: "http://kuaibao.qq.com/s/20200419A0F84300",
            tag_cluster: "",
            tag_label: [
              ["罗斯柴尔德家族", "467513"],
              ["菊花王朝", "976358"],
              ["琅琊王氏", "397680"],
            ],
            tags:
              "罗斯柴尔德家族;菊花王朝;沙特阿拉伯_历史;日本_历史;琅琊王氏;阿拉伯半岛",
            terms:
              "467513:0.25447,976358:0.076802,127799396:0.067658,127277834:0.060689,397680:0.056007,211744:0.044966",
            title: "世界上最显赫的4大家族，中国一家族名列首位，听起来有点耳熟",
            title_simhash: 0,
            ts: 1587284086,
            update_time: "2020-04-20 14:35:07",
            url: "https://xw.qq.com/cmsid/20200419A0F84300",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0F84300.html",
          },
          {
            app_id: "20200420A05XZ800",
            article_type: 0,
            category: "house",
            category2_chn: "政策法规",
            category2_id: "4011",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200420A05XZ800",
            comment_id: "5108929385",
            comment_num: 56,
            ctr_score: 0.07775568,
            ext: {
              tonality_score: 3,
              news_score: 4,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A05XZ8",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615617249_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_870492/0",
            },
            intro:
              "文：荏苒“住房公积金存在的意义已经不大，将之取消可为企业和职工直接降低12%的成本。”——黄奇帆。2月11日，清华产业转型顾问主席黄奇帆就疫情下的经济发展和制造业恢复提出了几点建议，其中一条是:“住……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615617250_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615617251_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615617250_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615617251_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615617249_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4011;15356207;104992|112267|105387|242906;23;0;32;1457;7;0;3;3;4;0;0;104992|205799|82531|100247|98279|128763|86321|100095|105387|281575;829",
            item_stat:
              "1552.00000;19255.00000;0.07438;397.00000;4788.00000;0.07569;279.00000;3175.00000;0.07935;42.00000;10302.00000;80194.00000;0.12846;0.00000;108.00000;36.00000;103.43788;13.28799;1065617.00000",
            keywords: "公积金;房奴;买房;商业贷款",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/8601685421_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11615613984/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615613985/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615613986/641",
            ],
            news_level: 4,
            publish_time: "2020-04-20 09:46:11",
            report:
              '{"ext":"0+56"+"all":";;;20814+1679"+"3h":"736726+40455;152962+9853;house:17953+793;3628+283;4017+312"+"app":";;;89803+11395;;39;0;127;1169919;102.6695;0.12689;13.02762"+"day":"1726267+98366;330981+22811;house:45323+2018;6347+524;7511+615"}',
            showtype: "article",
            source: "不凡智库",
            source_id: "15356207",
            strategy: 125,
            strategy_pos: 6,
            strategy_score: 0.034313727,
            surl: "http://kuaibao.qq.com/s/20200420A05XZ800",
            tag_cluster: "",
            tag_label: [
              ["公积金", "104992"],
              ["房奴", "112267"],
              ["买房", "105387"],
            ],
            tags: "公积金;房奴;买房;商业贷款",
            terms:
              "104992:0.482056,112267:0.300509,105387:0.061337,242906:0.058951",
            title:
              "公积金存废之争，今年或迎大变革，房奴苦日子来了？1.44亿人失眠",
            title_simhash: 0,
            ts: 1587347171,
            update_time: "2020-04-20 15:32:21",
            url: "https://xw.qq.com/cmsid/20200420A05XZ800",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A05XZ800.html",
          },
          {
            app_id: "20200421A040LY00",
            article_type: 0,
            category: "world",
            category2_chn: "国内",
            category2_id: "5602",
            category_chn: "时政",
            category_id: "56",
            cmsid: "20200421A040LY00",
            comment_id: "5114329889",
            comment_num: 3,
            ctr_score: 0.01801729,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A040LY",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620983198_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_870492/0",
            },
            intro:
              "【环球网报道 记者 王博雅琪】“最糟糕的时刻就在我们前面”，据美国有线电视新闻网（CNN）报道，在20日于日内瓦召开的新冠疫情新闻发布会上，世界卫生组织（WHO）总干事谭德塞发出如此警告。他呼吁世界……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620983198_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "56;5602;26082;3108298|260034|102573|452485;1;0;34;581;1;0;2;1;3;0;1;3143067|152339560|91936|260034|176557882|177605292|136646|141309|106404;298|471|494",
            item_stat:
              "168.00000;4996.00000;0.03248;168.00000;4996.00000;0.03248;168.00000;4996.00000;0.03248;2.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "美国有线电视新闻网;世卫组织;团结;谭德塞",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/210721792_100100/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11620963972/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 08:06:09",
            report:
              '{"ext":"0+3"+"all":";;;11251+415"+"3h":"1454168+88584;147793+7467;world:177550+8637;11251+415;383882+20183"+"app":";;;13320+406;;2;1;3;17220;42.41379;0.03048;1.29279"+"day":"2939426+185281;329071+16975;world:419309+19722;11251+415;702606+40229"}',
            showtype: "article",
            source: "环球网",
            source_id: "26082",
            strategy: 306,
            strategy_pos: 3,
            strategy_score: 0.1291,
            surl: "http://kuaibao.qq.com/s/20200421A040LY00",
            tag_cluster: "",
            tag_label: [
              ["美国有线电视新闻网", "3108298"],
              ["世卫组织", "260034"],
              ["团结", "102573"],
            ],
            tags: "美国有线电视新闻网;世卫组织;团结;谭德塞",
            terms:
              "3108298:0.335452,260034:0.229058,102573:0.191338,452485:0.088367",
            title:
              "世卫组织警告：如果各国国内和各国之间不团结，最糟糕的时刻就在我们前面",
            title_simhash: 0,
            ts: 1587427569,
            update_time: "2020-04-21 08:50:04",
            url: "https://xw.qq.com/cmsid/20200421A040LY00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A040LY00.html",
          },
          {
            app_id: "20200420A04IY000",
            article_type: 0,
            category: "sannong",
            category2_chn: "农业信息",
            category2_id: "7102",
            category_chn: "农林牧副渔",
            category_id: "71",
            cmsid: "20200420A04IY000",
            comment_id: "5108647519",
            comment_num: 0,
            ctr_score: 0.08962069,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A04IY0",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615377521_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_870492/0",
            },
            intro:
              "维生素概念股集体上涨的走势引人注意：截止发稿，华北制药、花园生物冲击涨停，广济药业涨大涨6.39%，金达威涨超5%，兄弟科技涨超3%，圣达生物、亿帆医药等概念股纷纷跟涨。不得不说的是，维生素概念股此……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615377521_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "71;7102;17201635;148455|145215|10390114;24;1;19;1538;0;0;3;1;3;0;0;148455|235745|10552171|342930|355022|185937|114851|145215|96161|84622;191|485",
            item_stat:
              "399.00000;4434.00000;0.08149;211.00000;2389.00000;0.07926;112.00000;1416.00000;0.07064;0.00000;117.00000;476.00000;0.24580;0.00000;0.00000;3.00000;44.33333;10.89706;5187.00000",
            keywords: "维生素;概念股;维生素a",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/9445990719_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11615373116/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 08:56:41",
            report:
              '{"ext":"0+0"+"all":";;;4744+413"+"3h":"282402+20083;62033+4737;sannong:0+0;1234+87;1203+85"+"app":";;;566+148;;3;0;0;6443;43.53378;0.26148;11.38339"+"day":"678333+48369;125140+10218;sannong:0+0;2699+225;2668+223"}',
            showtype: "article",
            source: "财经千里马",
            source_id: "17201635",
            strategy: 125,
            strategy_pos: 21,
            strategy_score: 0.024752475,
            surl: "http://kuaibao.qq.com/s/20200420A04IY000",
            tag_cluster: "",
            tag_label: [
              ["维生素", "148455"],
              ["概念股", "145215"],
              ["维生素A", "10390114"],
            ],
            tags: "维生素;概念股;维生素a",
            terms: "148455:0.429804,145215:0.296148,10390114:0.10963",
            title: "维生素价格开启暴走模式！相关概念股暴涨",
            title_simhash: 0,
            ts: 1587344201,
            update_time: "2020-04-20 08:57:41",
            url: "https://xw.qq.com/cmsid/20200420A04IY000",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A04IY000.html",
          },
          {
            app_id: "20200420A071MB00",
            article_type: 1,
            category: "digi",
            category2_chn: "智能硬件",
            category2_id: "4102",
            category_chn: "数码",
            category_id: "41",
            cmsid: "20200420A071MB00",
            comment_id: "5109129580",
            comment_num: 17,
            ctr_score: 0.084970534,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A071MB",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615808414_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615807755_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11615794668_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615807755_400320/0",
              "485X350":
                "https://inews.gtimg.com/newsapp_ls/0/11615807755_485350/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_870492/0",
            },
            intro:
              "在以前互联网还没有发展到如此普及的时候，手机也没有如此智能，大家购买手机的主要功能就是打电话和发短信。在那个阶段中国移动进入大家视线的时间早，都说先入为主，所以当时使用中国移动的用户数量非常的多。在……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615807755_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807756_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807758_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11615794668_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615794669_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615794670_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615807755_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807756_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807758_400320/0",
              ],
              "485X350": [
                "https://inews.gtimg.com/newsapp_ls/0/11615807755_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807756_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807758_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615807759_485350/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615808414_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "41;4102;5350141;108725|276746|93679;23;0;35;475;4;0;3;1;3;1;1;108725|89588|416667|276746|91359|106323|222093|93679|148623|214940;350",
            item_stat:
              "1610.00000;17630.00000;0.08340;1087.00000;11347.00000;0.08696;676.00000;7251.00000;0.08459;17.00000;282.00000;4014.00000;0.07025;0.00000;2.00000;0.00000;66.84043;4.69581;18849.00000",
            keywords: "中国移动;三大运营商;电信",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/727593980_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11615786242/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615786234/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615786245/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 10:29:18",
            report:
              '{"ext":"0+17"+"all":";;;18219+1665"+"3h":"772924+45758;8963+732;digi:16467+777;6558+594;7030+646"+"app":";;;4014+282;;0;0;2;18849;66.84043;0.07025;4.69581"+"day":"1478631+97212;16026+1343;digi:35409+1686;11936+1142;14597+1390"}',
            showtype: "picture",
            source: "优活孕期指南",
            source_id: "5350141",
            strategy: 125,
            strategy_pos: 10,
            strategy_score: 0.033333335,
            surl: "http://kuaibao.qq.com/s/20200420A071MB00",
            tag_cluster: "",
            tag_label: [
              ["中国移动", "108725"],
              ["三大运营商", "276746"],
              ["电信", "93679"],
            ],
            tags: "中国移动;三大运营商;电信",
            terms: "108725:0.495759,276746:0.293661,93679:0.087168",
            title:
              "国人沸腾！811万用户卷铺盖走人，不得人心的中国移动，如今终于自食恶果",
            title_simhash: 0,
            ts: 1587349758,
            update_time: "2020-04-20 10:35:35",
            url: "https://xw.qq.com/cmsid/20200420A071MB00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A071MB00.html",
          },
          {
            app_id: "20200420A0MR2700",
            article_type: 0,
            category: "kepu",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0MR2700",
            comment_id: "5111594506",
            comment_num: 0,
            ctr_score: 0.08037276,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0MR27",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618347402_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_870492/0",
            },
            intro:
              "近日，科学家们对于新冠病毒的新发现，让许多人产生了新的担忧。原来，全球多地的研究人员不约而同发现，新冠病毒，正在进化——3月3日，中国科学院主办的《国家科学评论》发表《关于SARS-CoV-2的起源……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618347402_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;5004941;176557882|104085|91936|482762;15;0;23;2663;4;0;3;1;3;0;0;91936|104085|176557882|127119|482762|106547196|121682|170815872|288252;187",
            item_stat:
              "427.00000;6916.00000;0.05777;148.00000;2650.00000;0.05210;69.00000;1186.00000;0.05314;0.00000;752.00000;24807.00000;0.03031;0.00000;3.00000;6.00000;120.17553;3.64300;90372.00000",
            keywords: "疫苗;病毒;冠状病毒",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1268020555_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618308744/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618308745/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618308746/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:31:51",
            report:
              '{"ext":"0+0"+"all":";;;7394+446"+"3h":"299029+19131;75979+4059;kepu:4604+223;1180+59;5769+231"+"app":";;;26547+805;;6;0;3;97145;120.67702;0.03032;3.65936"+"day":"634096+40926;167310+10530;kepu:18370+883;3128+167;14318+588"}',
            showtype: "article",
            source: "上观新闻",
            source_id: "5004941",
            strategy: 102,
            strategy_pos: 6,
            strategy_score: 0.9919,
            surl: "http://kuaibao.qq.com/s/20200420A0MR2700",
            tag_cluster: "",
            tag_label: [
              ["疫苗", "104085"],
              ["病毒", "91936"],
              ["冠状病毒", "482762"],
            ],
            tags: "新冠病毒;疫苗;病毒;冠状病毒",
            terms:
              "176557882:0.268097,104085:0.262116,91936:0.17148,482762:0.131156",
            title: "新冠病毒在“进化”，研发中的疫苗追不上怎么办？",
            title_simhash: 0,
            ts: 1587375111,
            update_time: "2020-04-20 19:10:57",
            url: "https://xw.qq.com/cmsid/20200420A0MR2700",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0MR2700.html",
          },
          {
            app_id: "20200420A043Y200",
            article_type: 0,
            category: "edu",
            category2_chn: "留学",
            category2_id: "3501",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200420A043Y200",
            comment_id: "5108567243",
            comment_num: 14,
            ctr_score: 0.07892986,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A043Y2",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615305848_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11615301159_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_870492/0",
            },
            intro:
              "现在一位哈佛大学的毕业生可算是彻底火了，甚至还会表示中国应该主动去援助美国，真的是世界之大无奇不有啊，其实能够从哈佛毕业的学生，智商情商那是肯定不会低的，但是谁知道她的思想好像和我们不太一样。因为现……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615305849_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615305850_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11615301159_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615301160_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615301162_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615305849_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615305850_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615305848_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3501;5652978;128089|131526289|96839|104235|224159;25;1;24;465;5;0;2;3;3;0;0;224159|128089|81353|81161|112901|81547|96839|85967|94677|131526289;667|7|361|427",
            item_stat:
              "5383.00000;70886.00000;0.07053;1248.00000;18021.00000;0.06459;431.00000;6282.00000;0.06370;14.00000;780.00000;7131.00000;0.10938;0.00000;21.00000;0.00000;58.83590;6.43556;45892.00000",
            keywords: "哈佛大学;毕业;留学生;人大附中",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/7791687056_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11615299311/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615299312/641",
              "https://inews.gtimg.com/newsapp_bt/0/11615299313/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 08:34:19",
            report:
              '{"ext":"0+14"+"all":";;;71785+5452"+"3h":"1418524+94144;36818+3128;edu:9102+433;6073+413;5914+405"+"app":";;;7131+780;;0;0;21;45892;58.8359;0.10938;6.43556"+"day":"2602199+183203;79377+6525;edu:18804+944;18920+1317;18811+1327"}',
            showtype: "article",
            source: "酱紫旅行",
            source_id: "5652978",
            strategy: 125,
            strategy_pos: 16,
            strategy_score: 0.03301887,
            surl: "http://kuaibao.qq.com/s/20200420A043Y200",
            tag_cluster: "",
            tag_label: [
              ["哈佛大学", "128089"],
              ["毕业", "96839"],
              ["留学生", "104235"],
            ],
            tags: "哈佛大学;美国_教育;毕业;留学生;人大附中",
            terms:
              "128089:0.379254,131526289:0.282325,96839:0.138858,104235:0.063137,224159:0.038105",
            title: "哈佛女高材生：祖国应主动去帮助美国？网友：凭什么",
            title_simhash: 0,
            ts: 1587342859,
            update_time: "2020-04-20 08:48:32",
            url: "https://xw.qq.com/cmsid/20200420A043Y200",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A043Y200.html",
          },
          {
            app_id: "20200420A0QYI600",
            article_type: 0,
            category: "kepu",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0QYI600",
            comment_id: "5112376175",
            comment_num: 63,
            ctr_score: 0.0795402,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0QYI6",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619454855_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_870492/0",
            },
            intro:
              "法国马赛大学的科学家团队近期发表了一篇关于对新型冠状病毒的方案研究，作者探讨了2种方法，加热法和化学法。还是先说结论。1.56度30分钟，和60度1小时加热，可以有效的减少病毒感染力，但并不是完全失……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619454855_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;5287996;176557882|91936|308513;13;0;27;1689;5;0;2;1;3;0;0;91936|10012488|103375|121682|216262|86375|587510|84116|87113;187",
            item_stat:
              "269.00000;8678.00000;0.03007;207.00000;7043.00000;0.02857;151.00000;5596.00000;0.02634;52.00000;13805.00000;159672.00000;0.08646;0.00000;75.00000;128.00000;70.17349;6.06709;968745.00000",
            keywords: "病毒;rna",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11419329854_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619065845/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619065846/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619065847/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 20:05:06",
            report:
              '{"ext":"0+63"+"all":";;;9060+285"+"3h":"299029+19131;75979+4059;kepu:4604+223;5091+129;5091+129"+"app":";;;188420+15261;;144;0;76;1052826;68.98801;0.08099;5.58766"+"day":"634096+40926;167310+10530;kepu:18370+883;7425+223;7425+223"}',
            showtype: "article",
            source: "冷大先生",
            source_id: "5287996",
            strategy: 102,
            strategy_pos: 9,
            strategy_score: 0.9903,
            surl: "http://kuaibao.qq.com/s/20200420A0QYI600",
            tag_cluster: "",
            tag_label: [
              ["病毒", "91936"],
              ["RNA", "308513"],
            ],
            tags: "新冠病毒;病毒;rna",
            terms: "176557882:0.54952,91936:0.339403,308513:0.052137",
            title: "最新研究表明：56度加热30分钟并不能有效杀死新冠病毒",
            title_simhash: 0,
            ts: 1587384306,
            update_time: "2020-04-21 02:18:49",
            url: "https://xw.qq.com/cmsid/20200420A0QYI600",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0QYI600.html",
          },
          {
            app_id: "20200419A0B89C00",
            article_type: 1,
            category: "sannong",
            category2_chn: "农民生活",
            category2_id: "7104",
            category_chn: "农林牧副渔",
            category_id: "71",
            cmsid: "20200419A0B89C00",
            comment_id: "5104827523",
            comment_num: 3,
            ctr_score: 0.076793395,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0B89C",
            img: "https://inews.gtimg.com/newsapp_ls/0/11611944100_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11611900314_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_400320/0",
              "485X350":
                "https://inews.gtimg.com/newsapp_ls/0/11611943423_485350/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_870492/0",
            },
            intro:
              "1、绿色的蔬菜，民以食为天，任何吃的东西都不能忽视。食品安全健康也是一直强调的重点，但是现在很多蔬菜都是施加化肥并且受到很多污染的。城市里工业化发展较快，然而污染的土地也很多，适合种植的土壤非常少，……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611944102_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611944103_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11611900314_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611900315_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611900313_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611944102_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611944103_400320/0",
              ],
              "485X350": [
                "https://inews.gtimg.com/newsapp_ls/0/11611943423_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611943426_485350/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611943429_485350/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11611944100_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "71;7104;15280986;97422|94960|93500;44;1;27;391;3;0;2;3;3;1;0;97422|93500|94960|304101|129193|100095|84836|84404|86496|85756;49|336",
            item_stat:
              "2360.00000;34859.00000;0.06332;162.00000;2521.00000;0.05929;66.00000;1010.00000;0.05867;3.00000;2221.00000;30226.00000;0.07348;0.00000;1.00000;1.00000;24.69653;1.81470;54851.00000",
            keywords: "马云;蔬菜;王健林",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/6440252884_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11611899699/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611899716/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611899720/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 13:25:41",
            report:
              '{"ext":"0+3"+"all":";;;35178+2381"+"3h":"277086+20083;99424+6241;sannong:0+0;960+61;939+61"+"app":";;;30717+2255;;1;0;1;55628;24.66874;0.07341;1.81098"+"day":"673017+48369;228702+14515;sannong:0+0;2840+183;2819+183"}',
            showtype: "picture",
            source: "陌上烟语",
            source_id: "15280986",
            strategy: 10,
            strategy_pos: 15,
            strategy_score: 0.0030057905,
            surl: "http://kuaibao.qq.com/s/20200419A0B89C00",
            tag_cluster: "",
            tag_label: [
              ["马云", "97422"],
              ["蔬菜", "94960"],
              ["王健林", "93500"],
            ],
            tags: "马云;蔬菜;王健林",
            terms: "97422:0.311533,94960:0.271892,93500:0.218696",
            title: "马云王健林均表态：未来这3样东西，真的比房子更“珍贵”",
            title_simhash: 0,
            ts: 1587273941,
            update_time: "2020-04-19 15:47:14",
            url: "https://xw.qq.com/cmsid/20200419A0B89C00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0B89C00.html",
          },
          {
            app_id: "20200419A07TMB00",
            article_type: 0,
            category: "house",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200419A07TMB00",
            comment_id: "5104107641",
            comment_num: 286,
            ctr_score: 0.07611318,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A07TMB",
            img: "https://inews.gtimg.com/newsapp_ls/0/11611314235_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11611298089_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_870492/0",
            },
            intro:
              "2020年4月18日，家住广东省东莞市常平镇的街坊向媒体爆料，他们在常平镇买了一套房，结果收房时“货不对板”，感觉被开发商忽悠了，那么这到底是怎么回事呢？据悉，涉事的是常平镇金地时代艺境小区，现场可……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611314236_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611314237_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11611298089_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611297339_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611297336_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611314236_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611314237_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11611314235_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;5900670;2940640|93437|106388|105019;47;1;32;825;7;0;3;3;3;0;0;591283|106388|2940640|105457|105019|93437|126940|211646|139497|109870;144|522|440|829",
            item_stat:
              "3219.00000;50023.00000;0.06040;331.00000;3632.00000;0.08221;167.00000;1633.00000;0.08947;286.00000;7512.00000;57115.00000;0.13152;0.00000;20.00000;17.00000;89.05298;11.71261;668966.00000",
            keywords: "常平镇;东莞;洋房;开发商",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2171709329_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11611277685/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611277675/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611277676/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 10:54:20",
            report:
              '{"ext":"0+286"+"all":";;;50239+3227"+"3h":"718770+40455;544338+29641;house:17953+793#dg:0+0#gd:0+0;1597+140;1575+141"+"app":";;;57115+7512;;17;0;20;668966;89.05298;0.13152;11.71261"+"day":"1708311+98366;1328841+73012;house:45323+2018#dg:0+0#gd:0+0;3848+339;3895+349"}',
            showtype: "article",
            source: "影视沉沦",
            source_id: "5900670",
            strategy: 124,
            strategy_pos: 5,
            strategy_score: 0.01866,
            surl: "http://kuaibao.qq.com/s/20200419A07TMB00",
            tag_cluster: "",
            tag_label: [
              ["常平镇", "2940640"],
              ["东莞", "93437"],
              ["洋房", "106388"],
            ],
            tags: "常平镇;东莞;洋房;开发商",
            terms:
              "2940640:0.29755,93437:0.197237,106388:0.179927,105019:0.130181",
            title:
              "广东东莞：男子在常平镇买了一套洋房，近日发生的事却令他气愤不已！",
            title_simhash: 0,
            ts: 1587264860,
            update_time: "2020-04-20 19:00:28",
            url: "https://xw.qq.com/cmsid/20200419A07TMB00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A07TMB00.html",
          },
          {
            app_id: "20200419A0A1UP00",
            article_type: 0,
            category: "ent",
            category2_chn: "中国娱乐",
            category2_id: "112",
            category_chn: "娱乐",
            category_id: "1",
            cmsid: "20200419A0A1UP00",
            comment_id: "5104575863",
            comment_num: 7,
            ctr_score: 0.0744645,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0A1UP",
            img: "https://inews.gtimg.com/newsapp_ls/0/11615481677_640330/0",
            img_count: 6,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11611692254_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_870492/0",
            },
            intro:
              "大家好，欢迎大家收看今天的文章，我是今天的小编，今天小编我继续给大家带来各种精彩的文章，下面一起了解一下吧！“国内第一电商总裁夫人”直接点名艾特张大奕，说张大奕招惹她老公，破坏她的家庭。消息一出，引……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615481678_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615481680_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11611692254_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611692259_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11611692258_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615481678_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11615481680_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11615481677_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "1;112;18315537;297288|634135;24;1;27;842;6;0;2;3;3;0;0;297288|634135|209820|81320|84015|96060|82447|96530|96815|99757;444|900",
            item_stat:
              "1402.00000;26962.00000;0.04936;221.00000;3701.00000;0.05569;92.00000;1474.00000;0.05702;7.00000;255.00000;3761.00000;0.06780;0.00000;2.00000;0.00000;47.03922;3.18931;11995.00000",
            keywords: "张大奕;蒋凡",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11516452509_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11611689769/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611689768/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611689849/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 09:20:00",
            report:
              '{"ext":"0+7"+"all":";;;27154+1408"+"3h":"2552381+201976;1627759+131049;ent:958336+70646;1408+84;1382+82"+"app":";;;3761+255;;0;0;2;11995;47.03922;0.0678;3.18931"+"day":"5291619+413961;3362529+265847;ent:1851951+135531;3893+227;3867+225"}',
            showtype: "article",
            source: "句说有你",
            source_id: "18315537",
            strategy: 102,
            strategy_pos: 4,
            strategy_score: 0.9967,
            surl: "http://kuaibao.qq.com/s/20200419A0A1UP00",
            tag_cluster: "",
            tag_label: [
              ["张大奕", "297288"],
              ["蒋凡", "634135"],
            ],
            tags: "张大奕;蒋凡",
            terms: "297288:0.543597,634135:0.246688",
            title: "张大奕插足天猫总裁婚姻，原配夫人喊话：别再招惹我老公！",
            title_simhash: 0,
            ts: 1587345600,
            update_time: "2020-04-20 09:54:21",
            url: "https://xw.qq.com/cmsid/20200419A0A1UP00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0A1UP00.html",
          },
          {
            app_id: "20200420A0LXCN00",
            article_type: 0,
            category: "house",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200420A0LXCN00",
            comment_id: "5111474050",
            comment_num: 15,
            ctr_score: 0.07475578,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0LXCN",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618213976_640330/0",
            img_count: 46,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_870492/0",
            },
            intro:
              "作者丨脱落酸编辑丨闫如意疫情期间，据说有钱人憋不住，都开始云买房了。销售线上带看，富人刷卡买单，一笔动辄上千万，可比看李佳琦直播刺激多了。虽然买不起，但我跟着线上销售，一样从5000万的房子看到1.……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618170568_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618173092_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618170568_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618173092_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;1154;84542|105309|117346;16;0;30;3721;46;0;2;1;3;0;0;84542|101343|100463|92705|83365|88718|117346|246108|150174|102466;56|849",
            item_stat:
              "164.00000;2562.00000;0.05909;26.00000;386.00000;0.05664;9.00000;124.00000;0.05150;11.00000;3649.00000;25310.00000;0.14417;0.00000;6.00000;35.00000;232.73691;33.55421;849257.00000",
            keywords: "豪宅;别墅;衣帽间",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11589988915_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/6979195814/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618007601/641",
              "https://inews.gtimg.com/newsapp_bt/0/11479424999/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:28:29",
            report:
              '{"ext":"0+15"+"all":";;;2630+173"+"3h":"736726+41348;556925+30302;house:19337+828;156+17;156+17"+"app":";;;32669+4786;;46;0;6;1128470;235.78562;0.1465;34.54253"+"day":"1726267+99259;1341428+73673;house:46707+2053;454+35;454+35"}',
            showtype: "article",
            source: "凤凰WEEKLY",
            source_id: "1154",
            strategy: 10,
            strategy_pos: 2,
            strategy_score: 1,
            surl: "http://kuaibao.qq.com/s/20200420A0LXCN00",
            tag_cluster: "",
            tag_label: [
              ["豪宅", "84542"],
              ["别墅", "105309"],
              ["衣帽间", "117346"],
            ],
            tags: "豪宅;别墅;衣帽间",
            terms: "84542:0.549857,105309:0.180089,117346:0.055158",
            title: "1.9亿豪宅火了：除了大，富豪们的房子跟我住的到底有啥区别？",
            title_simhash: 0,
            ts: 1587374909,
            update_time: "2020-04-21 01:31:35",
            url: "https://xw.qq.com/cmsid/20200420A0LXCN00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0LXCN00.html",
          },
          {
            app_id: "20200421V04RLI00",
            article_type: 56,
            category: "topvideo",
            category2_chn: "其它",
            category2_id: "54",
            category_chn: "其它",
            category_id: "54",
            cmsid: "20200421V04RLI00",
            comment_id: "5114507476",
            comment_num: 1,
            ctr_score: 0.014428867,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421V04RLI",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621136198_196130/0",
            img_count: 0,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621136198_294195/0",
            },
            intro: "世卫组织：从未隐瞒信息 自疫情初期就与美国政府有合作",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621136198_294195/0",
              ],
            },
            is_org: 0,
            item_base:
              "54;54;5604288;;1;0;26;100;0;0;2;1;3;56;0;260034|118953|104107|84963|175700360|131218|158189|82866|108363|86488;",
            item_stat:
              "8.00000;1176.00000;0.00857;8.00000;1176.00000;0.00857;8.00000;1176.00000;0.00857;1.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2003064373_200200/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-21 08:55:07",
            report:
              '{"ext":"0+1"+"all":";;;6274+124"+"3h":"1512442+114257;1512442+114257;topvideo:0+0#antip:319580+10922#world:177550+8637;6274+124;31728+1837"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"2818826+218516;2818826+218516;topvideo:0+0#antip:674638+25262#world:419309+19722;6274+124;74697+4793"}',
            showtype: "article",
            source: "青蜂侠",
            source_id: "5604288",
            strategy: 306,
            strategy_pos: 6,
            strategy_score: 0.1282,
            surl: "http://kuaibao.qq.com/s/20200421V04RLI00",
            tag_cluster: "",
            tag_label: [],
            tags: "",
            terms: "",
            title: "世卫组织：从未隐瞒信息 自疫情初期就与美国政府有合作",
            title_simhash: 0,
            ts: 1587430507,
            update_time: "2020-04-21 09:55:02",
            url: "https://xw.qq.com/cmsid/20200421V04RLI00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421V04RLI00.html",
          },
          {
            app_id: "20200420A08OUS00",
            article_type: 0,
            category: "ent",
            category2_chn: "科技",
            category2_id: "6",
            category_chn: "科技",
            category_id: "6",
            cmsid: "20200420A08OUS00",
            comment_id: "5109414731",
            comment_num: 89,
            ctr_score: 0.36950964,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A08OUS",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616136888_640330/0",
            img_count: 33,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_870492/0",
            },
            intro:
              "小主又赶着快要过期的时间，来跟你们聊聊总裁瓜及后续了这事儿从周五中午的一条微博说起，@董花花 女士发了一条直指张大奕的微博，“再来招惹我老公，我就不客气了”，正宫气质满满没想到一小时后，第一条微博已……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616136889_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616136890_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616136889_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616136890_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616136888_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "6;6;2426;297288|634135|89834|658451|84015;22;0;16;2153;33;0;2;3;3;0;0;297288|634135|84015|81320|87244|96530|150615|115857|87204|83129;900|444|403",
            item_stat:
              "14107.00000;151005.00000;0.08541;4497.00000;49392.00000;0.08335;2622.00000;30746.00000;0.07843;77.00000;16019.00000;122415.00000;0.13086;0.00000;42.00000;13.00000;262.68542;34.37453;4207958.00000",
            keywords: "张大奕;蒋凡;阿里巴巴;如涵控股;微博",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/389445335_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11616058902/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616058904/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616058906/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 11:21:08",
            report:
              '{"ext":"0+89"+"all":";;;155597+14437"+"3h":"704045+47055;704045+47055;ent:989712+70646;31672+2498;31017+2442"+"app":";;;122415+16019;;13;0;42;4207958;262.68544;0.13086;34.37453"+"day":"1553259+104915;1553259+104915;ent:1883327+135531;53984+4827;53328+4771"}',
            showtype: "article",
            source: "深夜八卦",
            source_id: "2426",
            strategy: 117,
            strategy_pos: 3,
            strategy_score: 0.113341,
            surl: "http://kuaibao.qq.com/s/20200420A08OUS00",
            tag_cluster: "",
            tag_label: [
              ["张大奕", "297288"],
              ["蒋凡", "634135"],
              ["阿里巴巴", "89834"],
            ],
            tags: "张大奕;蒋凡;阿里巴巴;如涵控股;微博",
            terms:
              "297288:0.185428,634135:0.13409,89834:0.123353,658451:0.086913,84015:0.081026",
            title: "总裁夫人和顶流网红的瓜，反转了？",
            title_simhash: 0,
            ts: 1587352868,
            update_time: "2020-04-21 01:31:04",
            url: "https://xw.qq.com/cmsid/20200420A08OUS00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A08OUS00.html",
          },
          {
            app_id: "20200420A0UEJW00",
            article_type: 0,
            category: "ent",
            category2_chn: "港台娱乐",
            category2_id: "108",
            category_chn: "娱乐",
            category_id: "1",
            cmsid: "20200420A0UEJW00",
            comment_id: "5113293667",
            comment_num: 301,
            ctr_score: 0.11382197,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0UEJW",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620837740_640330/0",
            img_count: 10,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620839014_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619881026_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620839014_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_870492/0",
            },
            intro:
              "4月20日，“跳水皇后”伏明霞现身街头，与之同行的是丈夫梁锦松，夫妻俩一身休闲装打扮随意，他们挽着手同行，老夫老妻相当恩爱。据港媒透露，两人在当天下午到中环逛街，他们戴着口罩、眼镜严防病毒，在中环大……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620839014_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620839015_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620839016_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619881026_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619873202_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619873203_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620839014_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620839015_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620839016_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620837740_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "1;108;5520031;194470|241317|92792;2;0;30;751;10;0;2;3;3;0;0;194470|241317|92792|136351|126214|192875|88561|140328|82169|100781;736|103|933",
            item_stat:
              "6409.00000;72902.00000;0.08074;6292.00000;72213.00000;0.08008;5091.00000;60942.00000;0.07703;224.00000;33329.00000;221681.00000;0.15035;0.00000;21.00000;8.00000;85.52804;12.85886;2850564.00000",
            keywords: "伏明霞;梁锦松;郭晶晶",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1309942018_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619849652/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619849653/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619880334/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 07:11:54",
            report:
              '{"ext":"0+301"+"all":";;;100649+8325"+"3h":"2552381+207280;258897+20965;ent:989712+72771;68916+5122;85892+6582"+"app":";;;487590+72546;;16;0;68;6277747;86.53471;0.14878;12.87505"+"day":"5291619+419265;546339+44537;ent:1883327+137656;99960+8208;139742+11535"}',
            showtype: "article",
            source: "开开森森",
            source_id: "5520031",
            strategy: 14,
            strategy_pos: 6,
            strategy_score: 0.00143,
            surl: "http://kuaibao.qq.com/s/20200420A0UEJW00",
            tag_cluster: "",
            tag_label: [
              ["伏明霞", "194470"],
              ["梁锦松", "241317"],
              ["郭晶晶", "92792"],
            ],
            tags: "伏明霞;梁锦松;郭晶晶",
            terms: "194470:0.356543,241317:0.336858,92792:0.193467",
            title: "伏明霞与68岁丈夫现身街头，夫妻俩挽着手逛街说说笑笑恩爱十足",
            title_simhash: 0,
            ts: 1587424314,
            update_time: "2020-04-21 07:36:12",
            url: "https://xw.qq.com/cmsid/20200420A0UEJW00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0UEJW00.html",
          },
          {
            app_id: "20200420V0UM4H00",
            article_type: 56,
            category: "ent",
            category2_chn: "中国娱乐",
            category2_id: "112",
            category_chn: "其它",
            category_id: "54",
            cmsid: "20200420V0UM4H00",
            comment_id: "5113356291",
            comment_num: 0,
            ctr_score: 0.11014283,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 2,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420V0UM4H",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619953718_196130/0",
            img_count: 0,
            img_special: 0,
            img_type: 2,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619953718_294195/0",
            },
            intro: "李小璐直播卖货养家糊口，笑场忍不住捂嘴巴，桌上全是台词稿子",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619953718_294195/0",
              ],
            },
            is_org: 0,
            item_base:
              "54;112;5625413;;10;0;29;29;0;0;2;2;3;56;0;81727|173702|180135|93932|140840|96926;",
            item_stat:
              "703.00000;8878.00000;0.07293;696.00000;8821.00000;0.07268;520.00000;6569.00000;0.07275;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1679812774_200200/0",
            multi_imgs: [],
            news_level: 3,
            publish_time: "2020-04-20 23:29:16",
            report:
              '{"ext":"0+0"+"all":";;;11108+866"+"3h":"1512442+114257;1627759+134416;ent:989712+72771;7287+552;45093+3668"+"app":";;;0+0;;0;0;0;0;0;0;0"+"day":"2818826+218516;3362529+269214;ent:1883327+137656;11051+859;77443+6185"}',
            showtype: "article",
            source: "娱评圈内外",
            source_id: "5625413",
            strategy: 304,
            strategy_pos: 5,
            strategy_score: 1587396600,
            surl: "http://kuaibao.qq.com/s/20200420V0UM4H00",
            tag_cluster: "",
            tag_label: [],
            tags: "",
            terms: "",
            title: "李小璐直播卖货养家糊口，笑场忍不住捂嘴巴，桌上全是台词稿子",
            title_simhash: 0,
            ts: 1587396556,
            update_time: "2020-04-21 02:05:30",
            url: "https://xw.qq.com/cmsid/20200420V0UM4H00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420V0UM4H00.html",
          },
          {
            app_id: "20200420A0OV7K00",
            article_type: 0,
            category: "kepu",
            category2_chn: "生命科学",
            category2_id: "7810",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0OV7K00",
            comment_id: "5111944584",
            comment_num: 0,
            ctr_score: 0.10992439,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0OV7K",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618679312_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_870492/0",
            },
            intro:
              "据外媒报道，当世界上大部分人都在关注新冠病毒时很容易忘记掉人类还面对着其他的致命病毒，比如说埃博拉。 近日，研究人员在动物身上测试了一种新埃博拉候选疫苗，这种疫苗不含活载体并且似乎对感染人类的所有四……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618679312_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7810;1882;267114|104085;16;0;23;763;1;0;2;1;3;0;0;267114|104085|222489|91936|214783|115722|118746|476499|114276|86148;187",
            item_stat:
              "196.00000;3535.00000;0.05194;140.00000;2822.00000;0.04670;56.00000;1006.00000;0.05077;0.00000;24.00000;199.00000;0.12060;0.00000;0.00000;0.00000;30.62500;3.69347;735.00000",
            keywords: "埃博拉病毒;疫苗",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/4343352990_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618670236/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:53:04",
            report:
              '{"ext":"0+0"+"all":";;;3607+200"+"3h":"299029+19131;75979+4059;kepu:4604+223;858+48;9438+619"+"app":";;;199+24;;0;0;0;735;30.625;0.1206;3.69347"+"day":"634096+40926;167310+10530;kepu:18370+883;2894+144;25176+1742"}',
            showtype: "article",
            source: "太平洋电脑网",
            source_id: "1882",
            strategy: 117,
            strategy_pos: 18,
            strategy_score: 0.046926,
            surl: "http://kuaibao.qq.com/s/20200420A0OV7K00",
            tag_cluster: "",
            tag_label: [
              ["埃博拉病毒", "267114"],
              ["疫苗", "104085"],
            ],
            tags: "埃博拉病毒;疫苗",
            terms: "267114:0.292417,104085:0.252361",
            title: "科学家开发出新埃博拉病毒疫苗：对所有种类都有效",
            title_simhash: 0,
            ts: 1587376384,
            update_time: "2020-04-20 20:59:51",
            url: "https://xw.qq.com/cmsid/20200420A0OV7K00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0OV7K00.html",
          },
          {
            app_id: "20200420A0Q88E00",
            article_type: 0,
            category: "cd",
            category2_chn: "小学教育",
            category2_id: "3503",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200420A0Q88E00",
            comment_id: "5112212562",
            comment_num: 2,
            ctr_score: 0.102279246,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0Q88E",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619036118_640330/0",
            img_count: 7,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_870492/0",
            },
            intro:
              "近日，四川、湖南等多地也已明确学生暑假开始时间，一起来看看。截止4月16日已有多地明确暑假时间图据@人民日报前两天#多地明确暑假时间#也上了热搜，网友热议各地网友纷纷呼吁自家省份/地市“抄作业”有网……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619036118_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3503;16788085;135377|85293|83101|94833;14;0;19;235;7;0;2;1;3;0;0;85293|81547|88007|114663|258070|87499|94833|83101|155517768;682|985",
            item_stat:
              "580.00000;7827.00000;0.06853;375.00000;5027.00000;0.06870;208.00000;3005.00000;0.06369;1.00000;116.00000;3763.00000;0.03083;0.00000;0.00000;0.00000;44.60345;1.37497;5174.00000",
            keywords: "暑假;广东;四川;湖南",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/8345335716_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11599826640/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618929297/641",
              "https://inews.gtimg.com/newsapp_bt/0/11599826643/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 19:28:59",
            report:
              '{"ext":"0+2"+"all":";;;8798+639"+"3h":"1418524+96816;369266+23511;cd:0+0#hn:0+0#chengdu:0+0#edu:9302+448;3028+206;3028+206"+"app":";;;3763+116;;0;0;0;5174;44.60345;0.03083;1.37497"+"day":"2602199+185875;629779+42960;cd:0+0#hn:0+0#chengdu:0+0#edu:19004+959;5998+434;5998+434"}',
            showtype: "article",
            source: "微笑迎烤鸡",
            source_id: "16788085",
            strategy: 10,
            strategy_pos: 20,
            strategy_score: 0.0010820847,
            surl: "http://kuaibao.qq.com/s/20200420A0Q88E00",
            tag_cluster: "",
            tag_label: [
              ["暑假", "135377"],
              ["广东", "85293"],
              ["四川", "83101"],
            ],
            tags: "暑假;广东;四川;湖南",
            terms:
              "135377:0.293366,85293:0.271503,83101:0.241485,94833:0.109053",
            title: "又有多地官宣暑假时间！广东网友评论亮了",
            title_simhash: 0,
            ts: 1587382139,
            update_time: "2020-04-20 22:13:13",
            url: "https://xw.qq.com/cmsid/20200420A0Q88E00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0Q88E00.html",
          },
          {
            app_id: "20200420A0U9KD00",
            article_type: 0,
            category: "lifes",
            category2_chn: "健身",
            category2_id: "7613",
            category_chn: "生活方式",
            category_id: "76",
            cmsid: "20200420A0U9KD00",
            comment_id: "5113252133",
            comment_num: 12,
            ctr_score: 0.10061804,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0U9KD",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620840708_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11619912577_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_870492/0",
            },
            intro:
              "洗米华与妻子洗米嫂（陈慧玲）以及小三Mandy Lieu的三人行婚姻一直备受大众关注，这段“畸形”的感情最终以Mandy Lieu的退出宣告结束。洗米嫂重获丈夫宠爱，一家人仿佛什么都没发生过，生活的……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841102_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841103_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11619912577_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619912583_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11619912576_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620841101_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841102_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620841103_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620840708_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "76;7613;6543888;127427679|84542|258805;2;0;33;436;5;0;2;3;3;0;0;3653347|165276|91218|939510|84542|237418|96941|82796|158251|93198;56",
            item_stat:
              "430.00000;12417.00000;0.03344;428.00000;12372.00000;0.03341;416.00000;12204.00000;0.03294;12.00000;13898.00000;153204.00000;0.09072;0.00000;10.00000;1.00000;32.79508;2.97503;455786.00000",
            keywords: "豪宅;MANDY",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11541064814_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619886543/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619841035/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619841713/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 07:13:17",
            report:
              '{"ext":"0+12"+"all":";;;13366+468"+"3h":"55674+4285;36858+2964;lifes:0+0#ent:989712+72771;13094+448;20818+889"+"app":";;;161711+14980;;1;0;11;518740;34.62884;0.09263;3.20782"+"day":"94329+7204;60024+4850;lifes:0+0#ent:1883327+137656;13321+466;28812+1426"}',
            showtype: "article",
            source: "楚雨荨吃牛肉面",
            source_id: "6543888",
            strategy: 10,
            strategy_pos: 14,
            strategy_score: 0.000108839165,
            surl: "http://kuaibao.qq.com/s/20200420A0U9KD00",
            tag_cluster: "",
            tag_label: [
              ["豪宅", "84542"],
              ["MANDY", "258805"],
            ],
            tags: "洗米嫂;豪宅;mandy",
            terms: "127427679:0.34989,84542:0.240214,258805:0.127701",
            title:
              "洗米嫂晒运动照曝光豪宅内景，两层高的攀岩墙瞩目，室内仿佛大型健身房",
            title_simhash: 0,
            ts: 1587424397,
            update_time: "2020-04-21 07:38:37",
            url: "https://xw.qq.com/cmsid/20200420A0U9KD00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0U9KD00.html",
          },
          {
            app_id: "20200419A06VFR00",
            article_type: 0,
            category: "house",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200419A06VFR00",
            comment_id: "5103931265",
            comment_num: 8,
            ctr_score: 0.098794445,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A06VFR",
            img: "https://inews.gtimg.com/newsapp_ls/0/11611147047_640330/0",
            img_count: 2,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_870492/0",
            },
            intro:
              "四川房价整体不高，相对都比较便宜。房价最高的是成都，均价13200元/平方米，其余均没有过万。房价最便宜的是巴中，才4000多元/平方米。房价不到6000元/平方米的城市有5座：自贡、眉山、雅安、广……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11611147047_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;5929614;83101|122409|105531|105412|106810;47;1;20;462;2;0;2;1;3;0;0;106810|111119|105531|105412|113955|100095|104955|112558|83101|365252;682|829|924|170",
            item_stat:
              "750.00000;11081.00000;0.06311;109.00000;1700.00000;0.05867;59.00000;946.00000;0.05611;8.00000;2847.00000;32428.00000;0.08779;0.00000;8.00000;9.00000;44.84721;3.93734;127680.00000",
            keywords: "四川;峨眉山;房价;乐山;自贡",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/6053931905_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11611136230/641",
              "https://inews.gtimg.com/newsapp_bt/0/11611139202/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 10:15:39",
            report:
              '{"ext":"0+8"+"all":";;;11291+756"+"3h":"718770+40455;544338+29641;house:17953+793#sczg:0+0#chengdu:0+0#cd:0+0#scls:0+0;862+46;862+46"+"app":";;;33324+2926;;9;0;8;130828;44.71224;0.0878;3.92594"+"day":"1708311+98366;1328841+73012;house:45323+2018#sczg:0+0#chengdu:0+0#cd:0+0#scls:0+0;1910+115;1910+115"}',
            showtype: "article",
            source: "人文摄影师",
            source_id: "5929614",
            strategy: 10,
            strategy_pos: 19,
            strategy_score: 0.0018034744,
            surl: "http://kuaibao.qq.com/s/20200419A06VFR00",
            tag_cluster: "",
            tag_label: [
              ["四川", "83101"],
              ["峨眉山", "122409"],
              ["房价", "105531"],
            ],
            tags: "四川;峨眉山;房价;乐山;自贡",
            terms:
              "83101:0.243839,122409:0.218043,105531:0.213145,105412:0.127659,106810:0.053303",
            title: "四川5座房价一样便宜的城市，均价不到6千",
            title_simhash: 0,
            ts: 1587262539,
            update_time: "2020-04-20 15:32:08",
            url: "https://xw.qq.com/cmsid/20200419A06VFR00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A06VFR00.html",
          },
          {
            app_id: "20200420A08X6X00",
            article_type: 0,
            category: "kepu",
            category2_chn: "博物",
            category2_id: "7809",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A08X6X00",
            comment_id: "5109454711",
            comment_num: 1,
            ctr_score: 0.07504413,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A08X6X",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616134973_640330/0",
            img_count: 4,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11616099743_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_870492/0",
            },
            intro:
              "中国在塔克拉玛干沙漠，投资上亿种下大量植物，结果变成啥样了？大家好，欢迎收看本期内容！如今在世界范围内很多国家和地区都面临着一个相同的问题，那就是土地荒漠化，而在我国更是有着大面积的沙漠，而对于沙漠……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616134974_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616134975_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11616099743_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616099749_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616099747_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616134974_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11616134975_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616134973_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7809;9938681;449349|85023|170738;22;0;30;565;0;0;2;3;3;0;0;85023|170738|90161|223619|265599|224949|269750;776|553",
            item_stat:
              "163.00000;1800.00000;0.08047;66.00000;589.00000;0.09139;33.00000;365.00000;0.07229;1.00000;653.00000;10697.00000;0.06105;0.00000;1.00000;1.00000;46.04747;2.81098;30069.00000",
            keywords: "塔克拉玛干沙漠;沙漠;毛乌素沙漠",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3851997468_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11616097881/641",
              "https://inews.gtimg.com/newsapp_bt/0/8383586933/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616099184/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 11:28:32",
            report:
              '{"ext":"0+1"+"all":";;;1867+170"+"3h":"299029+19131;21574+2254;kepu:4604+223#xinjiang:0+0;377+33;650+60"+"app":";;;10697+653;;1;0;1;30069;46.04747;0.06105;2.81098"+"day":"634096+40926;94761+6152;kepu:18370+883#xinjiang:0+0;656+73;1052+111"}',
            showtype: "article",
            source: "点点滴滴呀",
            source_id: "9938681",
            strategy: 117,
            strategy_pos: 2,
            strategy_score: 0.075,
            surl: "http://kuaibao.qq.com/s/20200420A08X6X00",
            tag_cluster: "",
            tag_label: [
              ["塔克拉玛干沙漠", "449349"],
              ["沙漠", "85023"],
              ["毛乌素沙漠", "170738"],
            ],
            tags: "塔克拉玛干沙漠;沙漠;毛乌素沙漠",
            terms: "449349:0.440626,85023:0.109588,170738:0.067104",
            title:
              "我国在塔克拉玛干沙漠，投资上亿种下大量植物，结果变成啥样了？",
            title_simhash: 0,
            ts: 1587353312,
            update_time: "2020-04-20 11:37:10",
            url: "https://xw.qq.com/cmsid/20200420A08X6X00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A08X6X00.html",
          },
          {
            app_id: "20200420A0LXCN00",
            article_type: 0,
            category: "house",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200420A0LXCN00",
            comment_id: "5111474050",
            comment_num: 15,
            ctr_score: 0.07539896,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0LXCN",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618213976_640330/0",
            img_count: 46,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_870492/0",
            },
            intro:
              "作者丨脱落酸编辑丨闫如意疫情期间，据说有钱人憋不住，都开始云买房了。销售线上带看，富人刷卡买单，一笔动辄上千万，可比看李佳琦直播刺激多了。虽然买不起，但我跟着线上销售，一样从5000万的房子看到1.……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618170568_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618173092_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11618167773_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618170568_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618173092_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618213976_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;1154;84542|105309|117346;16;0;30;3721;46;0;2;1;3;0;0;84542|101343|100463|92705|83365|88718|117346|102466|246108|150174;56|849",
            item_stat:
              "164.00000;2554.00000;0.05926;26.00000;378.00000;0.05754;9.00000;116.00000;0.05333;10.00000;3649.00000;25310.00000;0.14417;0.00000;6.00000;35.00000;232.73691;33.55421;849257.00000",
            keywords: "豪宅;别墅;衣帽间",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11589988915_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/6979195814/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618007601/641",
              "https://inews.gtimg.com/newsapp_bt/0/11479424999/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 17:28:29",
            report:
              '{"ext":"0+15"+"all":";;;2630+173"+"3h":"736726+41348;556925+30302;house:19337+828;156+17;156+17"+"app":";;;32669+4786;;46;0;6;1128470;235.78562;0.1465;34.54253"+"day":"1726267+99259;1341428+73673;house:46707+2053;454+35;454+35"}',
            showtype: "article",
            source: "凤凰WEEKLY",
            source_id: "1154",
            strategy: 10,
            strategy_pos: 3,
            strategy_score: 0.03,
            surl: "http://kuaibao.qq.com/s/20200420A0LXCN00",
            tag_cluster: "",
            tag_label: [
              ["豪宅", "84542"],
              ["别墅", "105309"],
              ["衣帽间", "117346"],
            ],
            tags: "豪宅;别墅;衣帽间",
            terms: "84542:0.549857,105309:0.180089,117346:0.055158",
            title: "1.9亿豪宅火了：除了大，富豪们的房子跟我住的到底有啥区别？",
            title_simhash: 0,
            ts: 1587374909,
            update_time: "2020-04-21 01:31:35",
            url: "https://xw.qq.com/cmsid/20200420A0LXCN00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0LXCN00.html",
          },
          {
            app_id: "20200421A05B4D00",
            article_type: 0,
            category: "edu",
            category2_chn: "高校",
            category2_id: "3502",
            category_chn: "教育",
            category_id: "35",
            cmsid: "20200421A05B4D00",
            comment_id: "5114629018",
            comment_num: 1,
            ctr_score: 0.025366636,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A05B4D",
            img: "https://inews.gtimg.com/newsapp_ls/0/11621229444_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_870492/0",
            },
            intro:
              "近日，国务院学位委员会正式公布了《关于下达2019年动态调整撤销和增列的学位授权点名单的通知》，各大高校或单位共撤销193个学位点，新增231个学位点。博士点、硕士点数量和规模，是衡量高校学术实力最……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11621229444_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "35;3502;5024155;115916|84678|231139|3646115;0;0;21;2633;0;0;3;1;4;0;0;143626|84678|83029|83202|231139|139826|128896|244374|85158;186|249",
            item_stat:
              "0.00000;0.00000;0.03000;0.00000;0.00000;0.03000;0.00000;0.00000;0.03000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000;0.00000",
            keywords: "学位;高校;陕西师范大学;祁占勇",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11539726299_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11621224369/641",
              "https://inews.gtimg.com/newsapp_bt/0/11621224370/641",
              "https://inews.gtimg.com/newsapp_bt/0/11621224371/641",
            ],
            news_level: 3,
            publish_time: "2020-04-21 09:06:40",
            report:
              '{"ext": "0+1"+ "all": ";;;3410+58"+ "3h": "1418524+96816;92339+5766;edu:9302+448;3410+58;3056+61"+ "app": ";;;0+0;;0;0;0;0;0;0;0"+ "day": "2602199+185875;190866+12627;edu:19004+959;3410+58;3176+62"}',
            showtype: "article",
            source: "光明日报",
            source_id: "5024155",
            strategy: 306,
            strategy_pos: 6,
            strategy_score: 0.1282,
            surl: "http://kuaibao.qq.com/s/20200421A05B4D00",
            tag_cluster: "",
            tag_label: [
              ["学位", "115916"],
              ["高校", "84678"],
              ["陕西师范大学", "231139"],
            ],
            tags: "学位;高校;陕西师范大学;祁占勇",
            terms:
              "115916:0.390872,84678:0.247228,231139:0.091604,3646115:0.074726",
            title: "193个学位点被撤销，背后是谁和谁的博弈？",
            title_simhash: 0,
            ts: 1587431200,
            update_time: "2020-04-21 10:08:14",
            url: "https://xw.qq.com/cmsid/20200421A05B4D00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A05B4D00.html",
          },
          {
            app_id: "20200419A0MPZY00",
            article_type: 0,
            category: "world",
            category2_chn: "国际社会",
            category2_id: "3710",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200419A0MPZY00",
            comment_id: "5107354211",
            comment_num: 33,
            ctr_score: 0.12572466,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0MPZY",
            img: "https://inews.gtimg.com/newsapp_ls/0/11617482680_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11617472100_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11614100076_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11617472100_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_870492/0",
            },
            intro:
              "墨西哥一名6岁女孩日前被爸妈送到爷爷奶奶那里居家隔离，认为这样会比较安全。没想到10天过后，女孩的爷爷奶奶报警表示小孩因为持续高烧跟出现症状后死亡，但警方却在进行调查的过程当中发现，尸体上有“绞杀跟……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11617472100_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617472102_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617472105_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11614100076_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614100069_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11614100067_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11617472100_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617472102_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11617472105_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11617482680_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3710;8923239;92028;18;0;24;453;3;0;2;1;3;0;0;98381|82873|149234|106356|894596|86884|100172|81420|85607;",
            item_stat:
              "8294.00000;107034.00000;0.07188;4406.00000;62567.00000;0.06573;1817.00000;27200.00000;0.06251;33.00000;15886.00000;122231.00000;0.12997;0.00000;49.00000;12.00000;62.67493;8.14567;995654.00000",
            keywords: "性侵",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/3385120274_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11614090263/641",
              "https://inews.gtimg.com/newsapp_bt/0/11614091910/641",
              "https://inews.gtimg.com/newsapp_bt/0/11614093728/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 15:45:27",
            report:
              '{"ext":"0+33"+"all":";;;108123+8378"+"3h":"3323707+231518;790327+72318;world:177550+8637;28289+1901;579697+60282"+"app":";;;122231+15886;;12;0;49;995654;62.67493;0.12997;8.14567"+"day":"6952455+502233;1601350+147551;world:419309+19722;63656+4490;1138545+121684"}',
            showtype: "article",
            source: "十一区",
            source_id: "8923239",
            strategy: 304,
            strategy_pos: 6,
            strategy_score: 1587368700,
            surl: "http://kuaibao.qq.com/s/20200419A0MPZY00",
            tag_cluster: "",
            tag_label: [["性侵", "92028"]],
            tags: "性侵",
            terms: "92028:0.288783",
            title: "6岁女孩被爸妈送到爷爷家隔离 却遭其性侵虐待而死",
            title_simhash: 0,
            ts: 1587368727,
            update_time: "2020-04-20 16:10:21",
            url: "https://xw.qq.com/cmsid/20200419A0MPZY00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0MPZY00.html",
          },
          {
            app_id: "20200419A0DYD900",
            article_type: 0,
            category: "guizhou",
            category2_chn: "旅游风光",
            category2_id: "1220",
            category_chn: "旅行",
            category_id: "12",
            cmsid: "20200419A0DYD900",
            comment_id: "5105375246",
            comment_num: 8,
            ctr_score: 0.10544408,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0DYD9",
            img: "https://inews.gtimg.com/newsapp_ls/0/11612413487_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11612385963_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11612385963_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_870492/0",
            },
            intro:
              "贵州大山里的神秘豪宅，24层高达99.9米，网友：不简单！提起贵州，相信各位小伙伴们并不陌生，贵州有着丰富的旅游资源，优美的自然风光和独特的人文风情，正是因为他眼前的景色吸引了不少游客前去游玩，而在……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11612385963_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612385897_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612385865_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11612385963_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612385897_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11612385865_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11612413487_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "12;1220;5722288;93262|84542|126853|107776645;42;1;29;452;0;0;2;1;3;0;0;84542|93262|303025|125030|84295|100179|154945|81547|96049|214940;56|682|553",
            item_stat:
              "3859.00000;53835.00000;0.06682;437.00000;5142.00000;0.07748;194.00000;2144.00000;0.08080;8.00000;882.00000;9981.00000;0.08837;0.00000;3.00000;2.00000;42.87415;3.78870;37815.00000",
            keywords: "贵州;豪宅;大山",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/8623745118_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11612382283/641",
              "https://inews.gtimg.com/newsapp_bt/0/11612382266/641",
              "https://inews.gtimg.com/newsapp_bt/0/7277943194/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 15:23:03",
            report:
              '{"ext":"0+8"+"all":";;;54216+3879"+"3h":"393643+31116;111337+7931;guizhou:0+0#gzgy:0+0#visit:700+19;2154+178;2098+178"+"app":";;;9981+882;;2;0;3;37815;42.87415;0.08837;3.7887"+"day":"900053+69542;283851+17221;guizhou:0+0#gzgy:0+0#visit:1613+43;5523+457;5469+457"}',
            showtype: "article",
            source: "榴莲谈",
            source_id: "5722288",
            strategy: 10,
            strategy_pos: 21,
            strategy_score: 0.000108839165,
            surl: "http://kuaibao.qq.com/s/20200419A0DYD900",
            tag_cluster: "",
            tag_label: [
              ["贵州", "93262"],
              ["豪宅", "84542"],
              ["大山", "126853"],
            ],
            tags: "贵州;豪宅;大山;水司楼",
            terms:
              "93262:0.245766,84542:0.222363,126853:0.216481,107776645:0.148606",
            title: "贵州大山里的神秘豪宅，24层高达99.9米，网友：不简单！",
            title_simhash: 0,
            ts: 1587280983,
            update_time: "2020-04-19 15:30:01",
            url: "https://xw.qq.com/cmsid/20200419A0DYD900",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0DYD900.html",
          },
          {
            app_id: "20200420A0OJPG00",
            article_type: 0,
            category: "kepu",
            category2_chn: "太空",
            category2_id: "7801",
            category_chn: "科学",
            category_id: "78",
            cmsid: "20200420A0OJPG00",
            comment_id: "5111881338",
            comment_num: 0,
            ctr_score: 0.08333586,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0OJPG",
            img: "https://inews.gtimg.com/newsapp_ls/0/11618959717_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11618602576_294195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11618602576_354264/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_870492/0",
            },
            intro:
              "世界上最心酸的宇航员，刚上去祖国就没了，被遗忘在太空一年自从人类开始探索太空以来，其实有许多宇航员都被永远留在了太空，尽管人类的航天科技发展迅速，但是在广袤的宇宙面前，人类始终是太渺小了，因此会有很……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11618602576_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618602845_294195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618602572_294195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11618602576_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618602845_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11618602572_354264/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11618959717_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "78;7801;5793118;93489|83704|118825262|96914;15;0;28;504;0;0;3;1;3;0;0;118825262|83704|93489|83197|87418|96914|236060|110806|89138|109889;345",
            item_stat:
              "225.00000;3010.00000;0.06837;169.00000;2099.00000;0.07264;126.00000;1477.00000;0.07575;0.00000;165.00000;2520.00000;0.06548;0.00000;0.00000;0.00000;114.56970;7.50159;18904.00000",
            keywords: "宇航员;太空;航天",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/2033437225_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618601667/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618601648/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618601668/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 18:31:24",
            report:
              '{"ext":"0+0"+"all":";;;4188+313"+"3h":"299029+19131;54694+5156;kepu:4604+223;2150+186;141734+12696"+"app":";;;2996+202;;0;0;0;21094;104.42574;0.06742;7.04072"+"day":"634096+40926;87340+7823;kepu:18370+883;3277+257;336108+30122"}',
            showtype: "article",
            source: "军武侠",
            source_id: "5793118",
            strategy: 304,
            strategy_pos: 7,
            strategy_score: 1587378700,
            surl: "http://kuaibao.qq.com/s/20200420A0OJPG00",
            tag_cluster: "",
            tag_label: [
              ["宇航员", "93489"],
              ["太空", "83704"],
              ["航天", "96914"],
            ],
            tags: "宇航员;太空;克里卡列夫;航天",
            terms:
              "93489:0.298244,83704:0.2887,118825262:0.240635,96914:0.084246",
            title: "世界上最心酸的宇航员，刚上去祖国就没了，被遗忘在太空一年",
            title_simhash: 0,
            ts: 1587378684,
            update_time: "2020-04-20 19:40:32",
            url: "https://xw.qq.com/cmsid/20200420A0OJPG00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0OJPG00.html",
          },
          {
            app_id: "20200420A0D4XC00",
            article_type: 0,
            category: "health",
            category2_chn: "老人健康",
            category2_id: "1412",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200420A0D4XC00",
            comment_id: "5110166879",
            comment_num: 2,
            ctr_score: 0.07734341,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0D4XC",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616814583_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_870492/0",
            },
            intro:
              "年轻人体质更好，也更有活力，谁愿意自己变老呢？特别是对于女性来说，衰老更是她们害怕的事情。但是长生不老是不可能的，每个人都会有衰老的一天，但每个人可能对多少岁才算老年人，持有不同的看法，有人认为是5……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616814583_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1412;5051603;260034|116596;19;0;28;1025;3;0;2;1;3;0;0;107903|260034|99473|87691|310202|83935|116104|336567|254555;494|543",
            item_stat:
              "854.00000;12581.00000;0.06332;353.00000;5359.00000;0.06125;213.00000;3190.00000;0.06166;2.00000;5349.00000;34685.00000;0.15422;0.00000;3.00000;24.00000;76.16526;11.74594;407408.00000",
            keywords: "世卫组织;衰老",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11155604273_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11432589762/641",
              "https://inews.gtimg.com/newsapp_bt/0/11616805663/641",
              "https://inews.gtimg.com/newsapp_bt/0/10602250307/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 13:52:48",
            report:
              '{"ext":"0+2"+"all":";;;14117+955"+"3h":"549544+32235;4576+324;health:1313+61;3274+215;17559+1590"+"app":";;;40254+6092;;26;0;3;461523;75.75886;0.15134;11.46527"+"day":"1117444+69916;10018+703;health:3882+198;6895+454;33833+2922"}',
            showtype: "article",
            source: "民福康健康",
            source_id: "5051603",
            strategy: 11,
            strategy_pos: 9,
            strategy_score: 0.36,
            surl: "http://kuaibao.qq.com/s/20200420A0D4XC00",
            tag_cluster: "",
            tag_label: [
              ["世卫组织", "260034"],
              ["衰老", "116596"],
            ],
            tags: "世卫组织;衰老",
            terms: "260034:0.417026,116596:0.217719",
            title: "多少岁才算老年人？世界卫生组织给出的答案，不少人难以接受",
            title_simhash: 0,
            ts: 1587361968,
            update_time: "2020-04-20 21:32:24",
            url: "https://xw.qq.com/cmsid/20200420A0D4XC00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0D4XC00.html",
          },
          {
            app_id: "20200421A000ZB00",
            article_type: 0,
            category: "house",
            category2_chn: "楼盘销售",
            category2_id: "4009",
            category_chn: "房产",
            category_id: "40",
            cmsid: "20200421A000ZB00",
            comment_id: "5113462719",
            comment_num: 1,
            ctr_score: 0.07546689,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200421A000ZB",
            img: "https://inews.gtimg.com/newsapp_ls/0/11620150302_640330/0",
            img_count: 5,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_295195/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_870492/0",
            },
            intro:
              "二手房心动依旧很想要？先看看这5个条件，考虑好了再说很多人觉得只要签了购房合同并付了钱，房子就是自己的了。这其实是一个很大的误区！如果卖方违约行在房屋转让过程中不配合，房子在法律上就不属于你的。只有……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620150303_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620150304_295195/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620150303_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11620150304_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11620150302_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "40;4009;17803461;109325|106569|106995|255419;10;0;27;807;5;0;3;3;3;0;0;106995|255419|109325|101343|104969|122785|106569|81297|128201|128344;501|829",
            item_stat:
              "460.00000;4848.00000;0.08561;460.00000;4848.00000;0.08561;454.00000;4806.00000;0.08526;1.00000;396.00000;2831.00000;0.13988;0.00000;1.00000;2.00000;50.40152;7.05016;19959.00000",
            keywords: "过户;二手房;房产证;小产权房",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/11018023049_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11620034230/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620034231/641",
              "https://inews.gtimg.com/newsapp_bt/0/11620034232/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 23:57:00",
            report:
              '{"ext":"0+1"+"all":";;;5950+536"+"3h":"736726+41348;556925+30302;house:19337+828;3892+311;3903+311"+"app":";;;4419+612;;3;0;1;30239;49.41013;0.13849;6.84295"+"day":"1726267+99259;1341428+73673;house:46707+2053;5950+536;5976+536"}',
            showtype: "article",
            source: "沧浪一滴",
            source_id: "17803461",
            strategy: 125,
            strategy_pos: 3,
            strategy_score: 0.03640777,
            surl: "http://kuaibao.qq.com/s/20200421A000ZB00",
            tag_cluster: "",
            tag_label: [
              ["过户", "109325"],
              ["二手房", "106569"],
              ["房产证", "106995"],
            ],
            tags: "过户;二手房;房产证;小产权房",
            terms:
              "109325:0.269222,106569:0.223952,106995:0.213488,255419:0.152086",
            title: "下月起，这5类二手房或将不允许办理过户，希望没有你买的",
            title_simhash: 0,
            ts: 1587398220,
            update_time: "2020-04-21 00:50:05",
            url: "https://xw.qq.com/cmsid/20200421A000ZB00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200421/20200421A000ZB00.html",
          },
          {
            app_id: "20200419A0M7ZH00",
            article_type: 0,
            category: "kepu",
            category2_chn: "学术健康",
            category2_id: "1425",
            category_chn: "健康",
            category_id: "14",
            cmsid: "20200419A0M7ZH00",
            comment_id: "5107221466",
            comment_num: 22,
            ctr_score: 0.07511474,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 3,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200419A0M7ZH",
            img: "https://inews.gtimg.com/newsapp_ls/0/11613999548_640330/0",
            img_count: 10,
            img_special: 0,
            img_type: 3,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_294195/0",
              "295X195":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_295195/0",
              "354X264":
                "https://inews.gtimg.com/newsapp_ls/0/11613969793_354264/0",
              "400X320":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_400320/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_870492/0",
            },
            intro:
              "世卫组织警告说酒精无法杀死新冠病毒？有网友向笔者咨询：有文章说，“世卫组织警告酒精无法杀死新冠病毒，这是真的吗？我囤下好几瓶酒精擦手液还能用吗？”笔者闻听此说法，很是有些吃惊：长久以来大量严谨的实验……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_294195/0",
              ],
              "295X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613999549_295195/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613999550_295195/0",
              ],
              "354X264": [
                "https://inews.gtimg.com/newsapp_ls/0/11613969793_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613969795_354264/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613973126_354264/0",
              ],
              "400X320": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613999549_400320/0",
                "https://inews.gtimg.com/newsapp_ls/0/11613999550_400320/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11613999548_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "14;1425;5560391;176557882|260034|90646|90215;36;1;30;1562;10;0;2;3;3;0;0;90646|176557882|260034|91936|230880|128821|284144|106705|90368;494|985",
            item_stat:
              "1652.00000;27137.00000;0.05729;224.00000;3747.00000;0.05576;120.00000;2185.00000;0.05114;22.00000;14850.00000;138072.00000;0.10755;0.00000;28.00000;19.00000;53.00727;5.70107;787158.00000",
            keywords: "世卫组织;酒精;喝酒",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/1455640689_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11613940877/641",
              "https://inews.gtimg.com/newsapp_bt/0/11559896703/641",
              "https://inews.gtimg.com/newsapp_bt/0/11613953339/641",
            ],
            news_level: 3,
            publish_time: "2020-04-19 21:56:57",
            report:
              '{"ext":"0+22"+"all":";;;27196+1654"+"3h":"532238+31355;130682+7344;kepu:4518+218;1970+105;1941+105"+"app":";;;138072+14850;;19;0;28;787158;53.00727;0.10755;5.70107"+"day":"1100138+69036;302629+17005;kepu:18284+878;3806+226;3776+226"}',
            showtype: "article",
            source: "挣脱枷锁的囚徒",
            source_id: "5560391",
            strategy: 11,
            strategy_pos: 13,
            strategy_score: 0.12960002,
            surl: "http://kuaibao.qq.com/s/20200419A0M7ZH00",
            tag_cluster: "",
            tag_label: [
              ["世卫组织", "260034"],
              ["酒精", "90646"],
              ["喝酒", "90215"],
            ],
            tags: "新冠病毒;世卫组织;酒精;喝酒",
            terms:
              "176557882:0.264407,260034:0.231429,90646:0.229199,90215:0.076396",
            title:
              "辟谣！世卫组织警告酒精不能杀死新冠病毒？酒精擦手液还能用吗？",
            title_simhash: 0,
            ts: 1587304617,
            update_time: "2020-04-21 03:38:00",
            url: "https://xw.qq.com/cmsid/20200419A0M7ZH00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200419/20200419A0M7ZH00.html",
          },
          {
            app_id: "20200420A0D7HY00",
            article_type: 0,
            category: "bj",
            category2_chn: "环境保护",
            category2_id: "3704",
            category_chn: "社会",
            category_id: "37",
            cmsid: "20200420A0D7HY00",
            comment_id: "5110177305",
            comment_num: 7,
            ctr_score: 0.07437337,
            ext: {
              tonality_score: 2,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0D7HY",
            img: "https://inews.gtimg.com/newsapp_ls/0/11616821631_640330/0",
            img_count: 1,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_870492/0",
            },
            intro:
              "京津冀健康互认，无障碍不隔离背景：北京新冠肺炎疫情防控工作新闻发布会上，北京市发展改革委副主任李素芳表示，实行京津冀区域健康状态互认。本市人员已实现赴津冀地区通行无障碍，北京也明确“居住在河北省廊坊……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11616821631_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "37;3704;1456;106763|153045|82413;20;0;14;762;1;0;2;1;3;0;0;106763|153045|157788|86488|82317|82413|474538|87815|109494|103020;387|829",
            item_stat:
              "140.00000;1359.00000;0.08943;98.00000;886.00000;0.09317;65.00000;652.00000;0.08323;7.00000;3147.00000;46832.00000;0.06720;0.00000;10.00000;56.00000;53.03305;3.56370;166895.00000",
            keywords: "京津冀;北三县;北京",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/64056449_100100/0",
            multi_imgs: ["https://inews.gtimg.com/newsapp_bt/0/2989403702/641"],
            news_level: 3,
            publish_time: "2020-04-20 13:19:00",
            report:
              '{"ext":"0+7"+"all":";;;1409+143"+"3h":"3323707+231518;31902+1206;bj:0+0;611+58;866+61"+"app":";;;46832+3147;;56;0;10;166895;53.03305;0.0672;3.5637"+"day":"6952455+502233;60710+2475;bj:0+0;936+101;1430+110"}',
            showtype: "article",
            source: "人民网",
            source_id: "1456",
            strategy: 125,
            strategy_pos: 21,
            strategy_score: 0.024752475,
            surl: "http://kuaibao.qq.com/s/20200420A0D7HY00",
            tag_cluster: "",
            tag_label: [
              ["京津冀", "106763"],
              ["北三县", "153045"],
              ["北京", "82413"],
            ],
            tags: "京津冀;北三县;北京",
            terms: "106763:0.304042,153045:0.189672,82413:0.116138",
            title: "京津冀健康互认，无障碍不隔离",
            title_simhash: 0,
            ts: 1587359940,
            update_time: "2020-04-20 15:55:23",
            url: "https://xw.qq.com/cmsid/20200420A0D7HY00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0D7HY00.html",
          },
          {
            app_id: "20200420A0TKPK00",
            article_type: 0,
            category: "tech",
            category2_chn: "电商物流",
            category2_id: "614",
            category_chn: "科技",
            category_id: "6",
            cmsid: "20200420A0TKPK00",
            comment_id: "5113054022",
            comment_num: 33,
            ctr_score: 0.07407924,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0TKPK",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619651891_640330/0",
            img_count: 3,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_870492/0",
            },
            intro:
              "当一则传言的主人公直接关系到一家上市公司的命脉，传言的影响便不仅仅在传言本身。4月17日中午，微博ID为“花花董花花”的用户公开点名张大奕，称“这是最后一次警告，再来招惹我老公我就不客气了”。随后，……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619651891_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "6;614;11221870;658451|297288|86231|579346|89834|110774;11;0;30;5920;3;0;3;1;3;0;1;297288|658451|209665|86231|89834|110774|3846715|84015|119053|87204;900|628|627",
            item_stat:
              "1298.00000;71330.00000;0.01789;811.00000;42282.00000;0.01885;177.00000;7244.00000;0.02393;32.00000;4500.00000;64136.00000;0.07016;0.00000;30.00000;16.00000;172.46066;12.10043;776073.00000",
            keywords: "如涵控股;张大奕;网红;美国存托凭证;阿里巴巴;淘宝",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/7273775001_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11619640039/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619640040/641",
              "https://inews.gtimg.com/newsapp_bt/0/11619640041/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 22:10:43",
            report:
              '{"ext":"0+33"+"all":";;;71583+1305"+"3h":"704045+47055;163421+10932;tech:29560+900#finance:210889+10878#stock:32584+1217;5545+140;15914+688"+"app":";;;68079+4794;;21;0;32;859492;179.28494;0.07042;12.62492"+"day":"1553259+104915;408726+26536;tech:62417+1887#finance:454857+23152#stock:94889+3297;42535+818;81759+3173"}',
            showtype: "article",
            source: "新京报经济新闻",
            source_id: "11221870",
            strategy: 102,
            strategy_pos: 6,
            strategy_score: 0.9896,
            surl: "http://kuaibao.qq.com/s/20200420A0TKPK00",
            tag_cluster: "",
            tag_label: [
              ["如涵控股", "658451"],
              ["张大奕", "297288"],
              ["网红", "86231"],
            ],
            tags: "如涵控股;张大奕;网红;美国存托凭证;阿里巴巴;淘宝",
            terms:
              "658451:0.353133,297288:0.279192,86231:0.122411,579346:0.092816,89834:0.089674,110774:0.062773",
            title: "“总裁夫人喊话”是否会引发如涵危机：张大奕外，还有其他牌吗？",
            title_simhash: 0,
            ts: 1587391843,
            update_time: "2020-04-21 01:03:18",
            url: "https://xw.qq.com/cmsid/20200420A0TKPK00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0TKPK00.html",
          },
          {
            app_id: "20200420A0PFHC00",
            article_type: 0,
            category: "finance",
            category2_chn: "沪深主板",
            category2_id: "3945",
            category_chn: "财经",
            category_id: "39",
            cmsid: "20200420A0PFHC00",
            comment_id: "5112043771",
            comment_num: 5,
            ctr_score: 0.073213495,
            ext: {
              tonality_score: 3,
              news_score: 3,
              img_type: 1,
              video_count: 0,
            },
            flag: 0,
            from: "cms_pool",
            id: "20200420A0PFHC",
            img: "https://inews.gtimg.com/newsapp_ls/0/11619099245_640330/0",
            img_count: 2,
            img_special: 0,
            img_type: 1,
            imgs: {
              "294X195":
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_294195/0",
              "580X328":
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_580328/0",
              "640X330":
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_640330/0",
              "640X470":
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_640470/0",
              "870X492":
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_870492/0",
            },
            intro:
              "口罩防护概念股道恩股份问鼎A股年内涨幅榜冠军。春节以来爆发的新冠肺炎疫情，让口罩一下子成为紧缺产品，而生产口罩的上市公司也成了抢手货。延江股份、中顺洁柔、国恩股份、道恩股份、再生科技等均于春节后创下……",
            irs_imgs: {
              "294X195": [
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_294195/0",
              ],
              "580X328": [
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_580328/0",
              ],
              "640X330": [
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_640330/0",
              ],
              "640X470": [
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_640470/0",
              ],
              "870X492": [
                "https://inews.gtimg.com/newsapp_ls/0/11619099245_870492/0",
              ],
            },
            is_org: 0,
            item_base:
              "39;3945;5112424;145215|10534848|177383438|96751417;15;0;31;1840;2;0;3;1;3;0;1;88740|10534848|96751417|217603|104258|84464|145215|82894|158189|106753;191",
            item_stat:
              "1446.00000;15682.00000;0.08411;729.00000;8055.00000;0.08240;293.00000;3079.00000;0.08525;5.00000;9056.00000;59429.00000;0.15238;0.00000;5.00000;55.00000;91.21135;13.89911;826010.00000",
            keywords: "概念股;道恩股份",
            keywords_new: "",
            media_icon:
              "https://inews.gtimg.com/newsapp_ls/0/258146892_200200/0",
            multi_imgs: [
              "https://inews.gtimg.com/newsapp_bt/0/11618774407/641",
              "https://inews.gtimg.com/newsapp_bt/0/11618774408/641",
            ],
            news_level: 3,
            publish_time: "2020-04-20 19:03:03",
            report:
              '{"ext":"0+5"+"all":";;;15889+1460"+"3h":"1222968+68089;143439+8436;finance:210889+10878#stock:32584+1217;2281+221;15194+1309"+"app":";;;59429+9056;;55;0;5;826010;91.21135;0.15238;13.89911"+"day":"2381161+139968;326683+20419;finance:454857+23152#stock:94889+3297;8262+743;37380+3203"}',
            showtype: "article",
            source: "数据宝",
            source_id: "5112424",
            strategy: 125,
            strategy_pos: 15,
            strategy_score: 0.03271028,
            surl: "http://kuaibao.qq.com/s/20200420A0PFHC00",
            tag_cluster: "",
            tag_label: [
              ["概念股", "145215"],
              ["道恩股份", "10534848"],
            ],
            tags: "概念股;道恩股份;口罩机;延江股份",
            terms:
              "145215:0.253305,10534848:0.180019,177383438:0.056575,96751417:0.055905",
            title: "价格一度飙涨30倍！谁是最牛口罩概念股，这只龙头业绩暴增10倍",
            title_simhash: 0,
            ts: 1587380583,
            update_time: "2020-04-21 00:32:26",
            url: "https://xw.qq.com/cmsid/20200420A0PFHC00",
            view_count: 0,
            vurl: "https://new.qq.com/omn/20200420/20200420A0PFHC00.html",
          },
        ];

        const tag = await Tag.findOne({ name: "home" });

        // const n = [];
        for (const item of news) {
          const i = {};
          i.title = item.title;
          i.covers = item.irs_imgs["295X195"]
            ? item.irs_imgs["295X195"]
            : item.irs_imgs["294X195"];
          i.tags = [tag._id];
          // i.author = item.source;
          i.author = (await User.create({ username: item.source }))._id;
          // n.push(i);
          await Article.create(i);
        }

        const n = await Article.find({ tags: [tag._id] });

        res.send(n);
        break;

      default:
        break;
    }
  });
};
