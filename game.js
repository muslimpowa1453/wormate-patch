var _0xf7a4ea = _0x1c2b;
(function (_0x4e8593, _0x27324d) {
    var _0x6323c5 = _0x1c2b,
        _0x49b27e = _0x4e8593();
    while (true) {
        try {
            var _0xe556d5 = -parseInt(_0x6323c5(0x713)) / 0x1 * (parseInt(_0x6323c5(0x206)) / 0x2) + -parseInt(_0x6323c5(0x312)) / 0x3 * (parseInt(_0x6323c5(0x863)) / 0x4) + parseInt(_0x6323c5(0x596)) / 0x5 * (-parseInt(_0x6323c5(0x459)) / 0x6) + -parseInt(_0x6323c5(0x888)) / 0x7 + parseInt(_0x6323c5(0x3bd)) / 0x8 * (-parseInt(_0x6323c5(0x1e3)) / 0x9) + -parseInt(_0x6323c5(0x286)) / 0xa * (parseInt(_0x6323c5(0x66e)) / 0xb) + parseInt(_0x6323c5(0x7bb)) / 0xc;
            if (_0xe556d5 === _0x27324d) break;
            else _0x49b27e.push(_0x49b27e.shift());
        } catch (_0x2ac940) {
            _0x49b27e.push(_0x49b27e.shift());
        }
    }
}(_0x2562, 0xb76cf));
var GoogleAuth, zE;
window.sectorSystem = {
    'settings': {
        'lineWidth': 0.15,
        'lineColor': 0xff0000,
        'lineAlpha': 0.3,
        'backgroundColor': 0x0,
        'backgroundAlpha': 0.6,
        'sectorTextStyle': {
            'fontFamily': 'Arial',
            'fontSize': 0xe,
            'fill': 0xffffff
        },
        'quarterTextStyle': {
            'fontFamily': 'Arial',
            'fontSize': 0x14,
            'fill': 0xffffff
        },
        'showLines': true
    },
    'state': {
        'container': null,
        'graphics': null,
        'isActive': false,
        'currentMode': null,
        'texts': [],
        'initialized': false,
        'renderContainer': null,
        'restored': false
    },
    'findRenderContainer': function () {
        var _0x3d8178 = _0x1c2b;
        if (this[_0x3d8178(0x374)][_0x3d8178(0x337)]) return this[_0x3d8178(0x374)][_0x3d8178(0x337)];
        if (window[_0x3d8178(0x6ef)]?. [_0x3d8178(0x59f)]) return this[_0x3d8178(0x374)][_0x3d8178(0x337)] = window.laserGraphics.parent, this[_0x3d8178(0x374)][_0x3d8178(0x337)];
        if (window.ooo?. ['Mh']?. ['Lh']?. ['Wf']) return this[_0x3d8178(0x374)].renderContainer = window.ooo.Mh.Lh.Wf, this.state[_0x3d8178(0x337)];
        const _0x2c33c0 = (_0x168a32, _0x29d191 = new Set(), _0x558473 = 0x0) => {
            var _0x38eee0 = _0x3d8178;
            if (!_0x168a32 || typeof _0x168a32 !== _0x38eee0(0x22f) || _0x558473 > 0x3 || _0x29d191[_0x38eee0(0x5b1)](_0x168a32)) return null;
            _0x29d191[_0x38eee0(0x5c7)](_0x168a32);
            if (_0x168a32.Wf instanceof PIXI[_0x38eee0(0x292)]) return this.state.renderContainer = _0x168a32.Wf, _0x168a32.Wf;
            for (let _0x3e6bf8 in _0x168a32) {
                if (_0x3e6bf8 !== _0x38eee0(0x59f) && _0x3e6bf8 !== _0x38eee0(0x4b3) && _0x168a32[_0x3e6bf8] && typeof _0x168a32[_0x3e6bf8] === _0x38eee0(0x22f)) {
                    const _0x5b040c = _0x2c33c0(_0x168a32[_0x3e6bf8], _0x29d191, _0x558473 + 0x1);
                    if (_0x5b040c) return _0x5b040c;
                }
            }
            return null;
        };
        return _0x2c33c0(window[_0x3d8178(0x57d)]);
    },
    'cachedRadius': 0x0,
    'lastRadiusTime': 0x0,
    'getRadius': function () {
        var _0x4e206f = _0x1c2b;
        const _0x2cda13 = Date.now();
        return _0x2cda13 - this[_0x4e206f(0x899)] > 0x3e8 && (this.cachedRadius = window[_0x4e206f(0x57d)]?. ['Mh']?. ['Qh']?. ['gh'] || window[_0x4e206f(0x57d)]?. ['Mh']?. ['Lh']?. ['Qh']?. ['gh'] || 0x1f4, this[_0x4e206f(0x899)] = _0x2cda13), this[_0x4e206f(0x46f)];
    },
    'clearTexts': function () {
        var _0x2d3cc8 = _0x1c2b;
        this.state.texts[_0x2d3cc8(0x3a6)](_0x5cba5a => {
            var _0x3a3807 = _0x2d3cc8;
            _0x5cba5a && _0x5cba5a[_0x3a3807(0x59f)] && _0x5cba5a[_0x3a3807(0x59f)][_0x3a3807(0x22e)](_0x5cba5a);
        }), this[_0x2d3cc8(0x374)][_0x2d3cc8(0x42e)] = [];
    },
    'initDrawing': function (_0x20f237) {
        var _0x509594 = _0x1c2b;
        return this.clearTexts(), this[_0x509594(0x374)][_0x509594(0x790)][_0x509594(0x3e8)](), this.state[_0x509594(0x790)][_0x509594(0x868)](this[_0x509594(0x708)][_0x509594(0x3d1)], this.settings[_0x509594(0x656)], this.settings[_0x509594(0x5d9)]), this.state[_0x509594(0x790)][_0x509594(0x215)](this[_0x509594(0x708)][_0x509594(0x2eb)], this[_0x509594(0x708)][_0x509594(0x6ec)]), this[_0x509594(0x374)].graphics[_0x509594(0x2d2)](0x0, 0x0, _0x20f237), this.state[_0x509594(0x790)][_0x509594(0x57f)](), _0x20f237;
    },
    'drawSectors': function () {
        var _0x5acd35 = _0x1c2b;
        const _0x5a4a0a = this[_0x5acd35(0x306)](this[_0x5acd35(0x570)]()),
            _0x475cbc = _0x5a4a0a / 0x3;
        if (this[_0x5acd35(0x708)][_0x5acd35(0x39b)]) {
            for (let _0x177137 = 0x1; _0x177137 < 0x3; _0x177137++) {
                this.state.graphics[_0x5acd35(0x2d2)](0x0, 0x0, _0x5a4a0a - _0x177137 * _0x475cbc);
            }
            for (let _0x2bca52 = 0x0; _0x2bca52 < 0x4; _0x2bca52++) {
                const _0x3cc414 = _0x2bca52 * Math.PI / 0x2;
                this[_0x5acd35(0x374)].graphics.moveTo(0x0, 0x0), this[_0x5acd35(0x374)][_0x5acd35(0x790)][_0x5acd35(0x7f0)](Math[_0x5acd35(0x383)](_0x3cc414) * _0x5a4a0a, Math[_0x5acd35(0x701)](_0x3cc414) * _0x5a4a0a);
            }
        }
        for (let _0x19980b = 0x0; _0x19980b < 0x4; _0x19980b++) {
            const _0x166d2b = _0x19980b * Math.PI / 0x2;
            for (let _0x451a67 = 0x0; _0x451a67 < 0x3; _0x451a67++) {
                const _0x3a0d82 = _0x5a4a0a - (_0x451a67 * _0x475cbc + _0x475cbc / 0x2),
                    _0x3e2809 = _0x166d2b + Math.PI / 0x4,
                    _0x31e398 = ['S', 'D', 'F'][_0x451a67] + (_0x19980b + 0x1),
                    _0x3e8f38 = new PIXI[(_0x5acd35(0x382))](_0x31e398, this[_0x5acd35(0x708)].sectorTextStyle);
                _0x3e8f38[_0x5acd35(0x1cc)][_0x5acd35(0x3e2)](0.5), _0x3e8f38.position[_0x5acd35(0x3e2)](Math[_0x5acd35(0x383)](_0x3e2809) * _0x3a0d82, Math[_0x5acd35(0x701)](_0x3e2809) * _0x3a0d82), this[_0x5acd35(0x374)][_0x5acd35(0x40c)].addChild(_0x3e8f38), this[_0x5acd35(0x374)][_0x5acd35(0x42e)][_0x5acd35(0x6a2)](_0x3e8f38);
            }
        }
    },
    'drawQuarters': function () {
        var _0x39bd0e = _0x1c2b;
        const _0x171c50 = this[_0x39bd0e(0x306)](this.getRadius());
        this[_0x39bd0e(0x708)].showLines && (this[_0x39bd0e(0x374)][_0x39bd0e(0x790)][_0x39bd0e(0x51e)](-_0x171c50, 0x0), this[_0x39bd0e(0x374)][_0x39bd0e(0x790)].lineTo(_0x171c50, 0x0), this.state.graphics[_0x39bd0e(0x51e)](0x0, -_0x171c50), this[_0x39bd0e(0x374)][_0x39bd0e(0x790)].lineTo(0x0, _0x171c50)), [{
            'n': _0x39bd0e(0x7e5),
            'x': 0x1,
            'y': -0x1
        }, {
            'n': _0x39bd0e(0x42c),
            'x': -0x1,
            'y': -0x1
        }, {
            'n': 'WFT 3',
            'x': -0x1,
            'y': 0x1
        }, {
            'n': _0x39bd0e(0x5a4),
            'x': 0x1,
            'y': 0x1
        }][_0x39bd0e(0x3a6)](_0x3ac324 => {
            var _0x239b89 = _0x39bd0e;
            const _0xc3ed0f = new PIXI.Text(_0x3ac324.n, this[_0x239b89(0x708)][_0x239b89(0x231)]);
            _0xc3ed0f[_0x239b89(0x1cc)][_0x239b89(0x3e2)](0.5), _0xc3ed0f[_0x239b89(0x8cf)].set(_0x3ac324.x * _0x171c50 / 0x3, _0x3ac324.y * _0x171c50 / 0x3), this[_0x239b89(0x374)][_0x239b89(0x40c)][_0x239b89(0x1c1)](_0xc3ed0f), this.state[_0x239b89(0x42e)].push(_0xc3ed0f);
        });
    },
    'initGraphics': function () {
        var _0x59e555 = _0x1c2b;
        if (this[_0x59e555(0x374)][_0x59e555(0x4e4)]) return true;
        const _0x606e79 = this[_0x59e555(0x1fa)]();
        if (!_0x606e79) return false;
        return this[_0x59e555(0x374)][_0x59e555(0x40c)] = new PIXI[(_0x59e555(0x292))](), this[_0x59e555(0x374)][_0x59e555(0x790)] = new PIXI[(_0x59e555(0x865))](), this[_0x59e555(0x374)][_0x59e555(0x40c)][_0x59e555(0x1c1)](this[_0x59e555(0x374)][_0x59e555(0x790)]), _0x606e79[_0x59e555(0x1c1)](this[_0x59e555(0x374)][_0x59e555(0x40c)]), this[_0x59e555(0x374)][_0x59e555(0x40c)][_0x59e555(0x663)] = 0xa, this.state.container[_0x59e555(0x775)] = false, this[_0x59e555(0x374)][_0x59e555(0x4e4)] = true, true;
    },
    'toggleMode': function (_0x3dadc0) {
        var _0x42235c = _0x1c2b;
        if (!this[_0x42235c(0x89b)]()) return;
        if (this[_0x42235c(0x374)][_0x42235c(0x694)] && this[_0x42235c(0x374)].currentMode === _0x3dadc0) {
            this[_0x42235c(0x374)][_0x42235c(0x40c)][_0x42235c(0x775)] = false, this[_0x42235c(0x374)][_0x42235c(0x694)] = false, this[_0x42235c(0x374)].currentMode = null;
            document[_0x42235c(0x4e7)](_0x42235c(0x61b)) && (document[_0x42235c(0x4e7)]('sector_system_toggle')[_0x42235c(0x65c)] = false);
            this[_0x42235c(0x5e5)]();
            return;
        }
        this.state[_0x42235c(0x694)] = true, this.state[_0x42235c(0x877)] = _0x3dadc0, this[_0x42235c(0x374)][_0x42235c(0x40c)][_0x42235c(0x775)] = true, document.getElementById(_0x42235c(0x61b)) && (document[_0x42235c(0x4e7)](_0x42235c(0x61b)).checked = true), _0x3dadc0 === _0x42235c(0x783) ? this[_0x42235c(0x6c8)]() : this.drawQuarters(), this[_0x42235c(0x5e5)]();
    },
    'setupKeyboardEvents': function () {
        var _0x12fc7b = _0x1c2b;
        const _0x3669a1 = {
            0x53: () => this[_0x12fc7b(0x709)](_0x12fc7b(0x783)),
            0xbb: () => this[_0x12fc7b(0x709)](_0x12fc7b(0x783)),
            0x3d: () => this[_0x12fc7b(0x709)](_0x12fc7b(0x783)),
            0x58: () => this[_0x12fc7b(0x709)](_0x12fc7b(0x7eb))
        };
        document[_0x12fc7b(0x49c)](_0x12fc7b(0x6e9), _0x319d03 => {
            var _0x411017 = _0x12fc7b;
            const _0x32830a = _0x319d03[_0x411017(0x5f4)] || _0x319d03.which;
            _0x3669a1[_0x32830a] && (_0x3669a1[_0x32830a](), typeof this.initUserInterface === 'function' && this[_0x411017(0x52d)]());
        });
    },
    'saveSettings': function () {
        var _0x4983d4 = _0x1c2b;
        try {
            localStorage.setItem(_0x4983d4(0x466), JSON[_0x4983d4(0x562)](this[_0x4983d4(0x708)])), localStorage.setItem(_0x4983d4(0x1c4), this[_0x4983d4(0x374)][_0x4983d4(0x694)] ? '1' : '0'), this[_0x4983d4(0x374)].currentMode && localStorage.setItem(_0x4983d4(0x61c), this.state[_0x4983d4(0x877)]), console[_0x4983d4(0x308)](_0x4983d4(0x3c3), {
                'active': this[_0x4983d4(0x374)][_0x4983d4(0x694)],
                'mode': this.state[_0x4983d4(0x877)]
            });
        } catch (_0x23fc28) {
            console[_0x4983d4(0x89c)](_0x4983d4(0x2ce), _0x23fc28);
        }
    },
    'loadSettings': function () {
        var _0x494c0e = _0x1c2b;
        try {
            const _0x5ae558 = JSON.parse(localStorage[_0x494c0e(0x21e)](_0x494c0e(0x466)));
            _0x5ae558 && (this[_0x494c0e(0x708)] = {
                ...this[_0x494c0e(0x708)],
                ..._0x5ae558
            });
            const _0x2f0a37 = localStorage[_0x494c0e(0x21e)]('sectorSystemActive') === '1';
            let _0x57c9e3 = localStorage[_0x494c0e(0x21e)](_0x494c0e(0x61c));
            !_0x57c9e3 && (_0x57c9e3 = _0x494c0e(0x783)), this[_0x494c0e(0x50c)] = {
                'isActive': _0x2f0a37,
                'currentMode': _0x57c9e3
            };
        } catch (_0xcee951) {
            console[_0x494c0e(0x89c)](_0x494c0e(0x279), _0xcee951);
        }
    },
    'applySettings': function () {
        var _0x422786 = _0x1c2b;
        this[_0x422786(0x374)].isActive && this[_0x422786(0x374)][_0x422786(0x877)] && (this.state[_0x422786(0x877)] === 'sectors' ? this[_0x422786(0x6c8)]() : this[_0x422786(0x771)]());
    },
    'init': function () {
        var _0x3e9600 = _0x1c2b;
        if (typeof PIXI === _0x3e9600(0x76e)) {
            setTimeout(() => this.init(), 0x3e8);
            return;
        }
        this[_0x3e9600(0x748)]();
        const _0x3ae8d2 = this[_0x3e9600(0x89b)]();
        this[_0x3e9600(0x859)]();
        if (!_0x3ae8d2) {
            setTimeout(() => this[_0x3e9600(0x3ec)](), 0x3e8);
            return;
        }
        setTimeout(() => {
            var _0x319171 = _0x3e9600;
            this[_0x319171(0x50c)] && this[_0x319171(0x50c)][_0x319171(0x694)] && (this.state[_0x319171(0x694)] = true, this[_0x319171(0x374)][_0x319171(0x877)] = this[_0x319171(0x50c)][_0x319171(0x877)], this[_0x319171(0x374)].container[_0x319171(0x775)] = true, this[_0x319171(0x374)].currentMode === _0x319171(0x783) ? this[_0x319171(0x6c8)]() : this[_0x319171(0x771)](), document[_0x319171(0x4e7)](_0x319171(0x61b)) && (document[_0x319171(0x4e7)]('sector_system_toggle').checked = true), this[_0x319171(0x374)][_0x319171(0x2cd)] = true, $(_0x319171(0x876)).length > 0x0 && this[_0x319171(0x52d)]());
        }, 0x3e8);
    },
    'initUserInterface': function () {
        var _0x35ad47 = _0x1c2b;

        function _0xd275f4(_0x2b2c41) {
            var _0x4de02b = _0x1c2b;
            return '#' + _0x2b2c41[_0x4de02b(0x3ae)](0x10)[_0x4de02b(0x217)](0x6, '0');
        }

        function _0x48b4d3(_0x1bf668) {
            var _0x453bf3 = _0x1c2b;
            return parseInt(_0x1bf668[_0x453bf3(0x29f)]('#', ''), 0x10);
        }!this.state.restored && this[_0x35ad47(0x50c)] && this.savedState[_0x35ad47(0x694)] && (console[_0x35ad47(0x308)](_0x35ad47(0x845)), this[_0x35ad47(0x709)](this[_0x35ad47(0x50c)][_0x35ad47(0x877)] || 'sectors'), this.state[_0x35ad47(0x2cd)] = true);
        const _0x5d768e = () => {
            var _0x7a9238 = _0x35ad47;
            $(_0x7a9238(0x876))[_0x7a9238(0x335)](_0x7a9238(0x65c), this[_0x7a9238(0x374)][_0x7a9238(0x694)]), $('#sector_display_mode').val(this.state[_0x7a9238(0x877)] || _0x7a9238(0x783)), $(_0x7a9238(0x8d6))[_0x7a9238(0x1ce)](_0xd275f4(this[_0x7a9238(0x708)][_0x7a9238(0x2eb)])), $(_0x7a9238(0x65b))[_0x7a9238(0x1ce)](_0xd275f4(this[_0x7a9238(0x708)].lineColor)), $('#sector_bg_opacity')[_0x7a9238(0x1ce)](this[_0x7a9238(0x708)].backgroundAlpha * 0x64), $(_0x7a9238(0x754))[_0x7a9238(0x2df)](Math[_0x7a9238(0x273)](this[_0x7a9238(0x708)][_0x7a9238(0x6ec)] * 0x64) + '%'), $(_0x7a9238(0x475)).val(this[_0x7a9238(0x708)][_0x7a9238(0x5d9)] * 0x64), $(_0x7a9238(0x2da))[_0x7a9238(0x2df)](Math[_0x7a9238(0x273)](this[_0x7a9238(0x708)][_0x7a9238(0x5d9)] * 0x64) + '%'), $(_0x7a9238(0x890))[_0x7a9238(0x335)](_0x7a9238(0x65c), this.settings[_0x7a9238(0x39b)]), !this[_0x7a9238(0x708)][_0x7a9238(0x39b)] ? $(_0x7a9238(0x318))[_0x7a9238(0x794)](0xc8) : $(_0x7a9238(0x318))[_0x7a9238(0x508)](0xc8), this[_0x7a9238(0x374)][_0x7a9238(0x694)] ? $(_0x7a9238(0x2b5)).slideDown(0x12c) : $('#sector_settings_panel')[_0x7a9238(0x794)](0xc8);
        };
        $(_0x35ad47(0x876))[_0x35ad47(0x6de)](_0x35ad47(0x55b)).on(_0x35ad47(0x55b), function () {
            var _0x510ed6 = _0x35ad47;
            const _0x1f6692 = $(this).prop(_0x510ed6(0x65c));
            if (_0x1f6692) {
                const _0x2bf4c8 = $('#sector_display_mode')[_0x510ed6(0x1ce)]() || _0x510ed6(0x783);
                window[_0x510ed6(0x387)][_0x510ed6(0x709)](_0x2bf4c8);
            } else window[_0x510ed6(0x387)][_0x510ed6(0x374)][_0x510ed6(0x694)] && window.sectorSystem[_0x510ed6(0x709)](window[_0x510ed6(0x387)][_0x510ed6(0x374)][_0x510ed6(0x877)]);
            _0x5d768e();
        }), $(_0x35ad47(0x446)).off(_0x35ad47(0x55b)).on(_0x35ad47(0x55b), function () {
            var _0x39408f = _0x35ad47;
            const _0x3f8a4d = $(this)[_0x39408f(0x1ce)]();
            window[_0x39408f(0x387)].state.isActive && (window.sectorSystem.toggleMode(window[_0x39408f(0x387)].state.currentMode), window[_0x39408f(0x387)][_0x39408f(0x709)](_0x3f8a4d), _0x5d768e());
        }), $(_0x35ad47(0x8d6)).off(_0x35ad47(0x55b)).on(_0x35ad47(0x55b), function () {
            var _0xfe06a7 = _0x35ad47;
            window.sectorSystem[_0xfe06a7(0x708)].backgroundColor = _0x48b4d3($(this).val()), window.sectorSystem[_0xfe06a7(0x3d4)](), window[_0xfe06a7(0x387)].saveSettings();
        }), $(_0x35ad47(0x65b))[_0x35ad47(0x6de)]('change').on(_0x35ad47(0x55b), function () {
            var _0x483e85 = _0x35ad47;
            window[_0x483e85(0x387)][_0x483e85(0x708)].lineColor = _0x48b4d3($(this)[_0x483e85(0x1ce)]()), window[_0x483e85(0x387)][_0x483e85(0x3d4)](), window[_0x483e85(0x387)].saveSettings();
        }), $(_0x35ad47(0x372))[_0x35ad47(0x6de)](_0x35ad47(0x421)).on(_0x35ad47(0x421), function () {
            var _0x33b130 = _0x35ad47;
            const _0x33c7b6 = parseInt($(this)[_0x33b130(0x1ce)]()) / 0x64;
            window[_0x33b130(0x387)].settings[_0x33b130(0x6ec)] = _0x33c7b6, $(_0x33b130(0x754))[_0x33b130(0x2df)](Math.round(_0x33c7b6 * 0x64) + '%'), window[_0x33b130(0x387)][_0x33b130(0x3d4)](), window[_0x33b130(0x387)].saveSettings();
        }), $(_0x35ad47(0x475)).off(_0x35ad47(0x421)).on(_0x35ad47(0x421), function () {
            var _0x5803bb = _0x35ad47;
            const _0x222476 = parseInt($(this)[_0x5803bb(0x1ce)]()) / 0x64;
            window[_0x5803bb(0x387)].settings.lineAlpha = _0x222476, $('#sector_line_opacity_value').text(Math.round(_0x222476 * 0x64) + '%'), window.sectorSystem[_0x5803bb(0x3d4)](), window[_0x5803bb(0x387)].saveSettings();
        }), $(_0x35ad47(0x890)).off('change').on(_0x35ad47(0x55b), function () {
            var _0x5db105 = _0x35ad47;
            window[_0x5db105(0x387)][_0x5db105(0x708)][_0x5db105(0x39b)] = $(this)[_0x5db105(0x335)](_0x5db105(0x65c)), !window.sectorSystem[_0x5db105(0x708)][_0x5db105(0x39b)] ? $(_0x5db105(0x318))[_0x5db105(0x794)](0xc8) : $(_0x5db105(0x318))[_0x5db105(0x508)](0xc8), window[_0x5db105(0x387)][_0x5db105(0x3d4)](), window.sectorSystem.saveSettings();
        }), _0x5d768e();
    }
};
var StoreSkinID;
$(document)[_0xf7a4ea(0x30e)](function () {
    var _0x3d2d9a = _0xf7a4ea;
    $(_0x3d2d9a(0x4c8))[_0x3d2d9a(0x56a)] && ($(_0x3d2d9a(0x4c8))[_0x3d2d9a(0x1da)](_0x3d2d9a(0x569)), StoreSkinID = $(_0x3d2d9a(0x362)));
});

function _0x1c2b(_0x4fa21a, _0x7d87f1) {
    var _0x4748c1 = _0x2562();
    return _0x1c2b = function (_0x35bfda, _0x37b09f) {
        _0x35bfda = _0x35bfda - 0x1be;
        var _0x5de044 = _0x4748c1[_0x35bfda];
        return _0x5de044;
    }, _0x1c2b(_0x4fa21a, _0x7d87f1);
}
var myGameSettings = {
    'unlimitedRespawn': false,
    'respawnDelay': 0x32
};
window[_0xf7a4ea(0x70c)] = {
    'enabled': false,
    'color': 0xffd700,
    'opacity': 0.5,
    'thickness': 0.1
}, window[_0xf7a4ea(0x6ef)] = null;
const ctx = {
    'fontStyle': {
        'blanco': new PIXI[(_0xf7a4ea(0x6eb))]({
            'align': _0xf7a4ea(0x25a),
            'fill': _0xf7a4ea(0x349),
            'fontSize': 0xe,
            'fontWeight': _0xf7a4ea(0x7b5),
            'lineJoin': 'round',
            'stroke': _0xf7a4ea(0x6f4),
            'strokeThickness': 1.5,
            'whiteSpace': 'normal',
            'wordWrap': true
        })
    }
};
ctx[_0xf7a4ea(0x7a4)] = new PIXI[(_0xf7a4ea(0x292))]();
let lastKnownCoords = {
        'x': null,
        'y': null
    },
    blinkTimerId = null,
    removeMarkTimerId = null;

function _0x2562() {
    var _0xf34ba2 = ['bind', '#pulse_effects_enabled', 'mousedown', 'DataView', 'createObjectURL', '<button id=\'manage-favorites-skin\' class=\'favorite-button\' style=\'background:#2196F3;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 412px 20px 20px 8px;\'><span style=\'font-size:14px;\'>â˜°</span> Favorite</button>', 'img_o_3', 'name', 'indexOf', 'bold', 'latitude', '\x0a            position: absolute;\x0a            top: 0;\x0a            left: 0;\x0a            width: 100%;\x0a            height: 100%;\x0a            object-fit: contain;\x0a            padding: 5px;\x0a        ', 'includes', '.cursor-container', 'substr', '52769892KKoFQy', 'Flame Cursor', '#delete-account-timer', 'Server ', '#wftspeed', 'Ø¹Ø±Ø¶Ùƒ', 'VjI5eWJXRjBaUzVwYnc9PQ==', '\"/></span><span>', 'fillRect', 'programmer', 'selectedIndex', 'flex_ability', 'server-number', 'defineProperty', '#game-settings-tab', '#delete-account-no', 'transform', 'canvastext', 'href', '.reset-btn', '/get_store.phpitem=bg_sky_11.png', 'cookie', 'before', 'No conectado, esperando a que se restablezca la conexiÃ³n...', '#skins-view', ' <img class=\"dd-option-image', 'atan2', '#leaders-button-highscore', 'joystick_color', '<span></span>', 'init1 pSC: ', 'extend', '\" data-bg=\"', '; varying vec2 ', 'mm-params-nickname', '#sound_effect_selector', 'lengthComputable', 'prime', '20px 0', '#markup-header', 'beginPath', 'https://resources.wormate.io', 'WFT 1', 'message', 'mapText', 'join', '</span>\x0a        </div>\x0a    ', 'image', 'quarters', 'return ', '.server-number', 'cpuSamples', '#skin-group-description-text', 'lineTo', 'frameCount', 'Mexico', '#store-view-next', 'exception', '/get_store.phpitem=open_w.png', 's_n', 'White Glove Cursor', '#mm-coins-val', 'pDc', '_skin_g', 'audio', 'https://lh3.googleusercontent.com', '/images/cors-proxy.phpimg=cursors/13.png', 'index.game.result.title', 'https://graph.facebook.com/me?access_token=', 'mobile', 'enableClasses', 'pCc', 'joystick_pxy', 'MOUTH', '.selectSala[value=\"', '.server-score', '#modal_wft', 'getAuthResponse', 'get_skin.php', 'index.game.toaster.continue', 'json', '/pub/wuid/', '<img>', 'showKillName', 'Strawberry Candy Cursor', '#zigzagup', 'ðŸŸ¡ sendHSKillUpdate Ã§aÄŸrÄ±ldÄ±', 'stopPropagation', '<div>', 'testSkinCustom', 'coins_1250', 'charCodeAt', '\x0a            <div style=\"text-align:center; padding:20px; color:#aaa;\">\x0a              No servers available in this region\x0a            </div>\x0a          ', 'wfti', 'showPlayerNames', '0 0 0 5px', '.play-button', '_complete', '1fr 1fr 1fr', '.dd-option-description', 'regular', '/images/server-flags/tur.png', 'width', ' copied!\'));\">Copy</button>', '#popup-view', 'closeSettingsModal', 'wear', '99999', 'coins_3250', 'img_f', '..7 ..', 'div_sm', 'onwheel', '#mm-loading-progress-bar', 'absolute', 'TWVzaA==', 'wss://wormmedia.xyz:9800', 'Ø·ÙŠØ¨Ø©', '#store-buy-coins_7000', '#joystick_mode', 'Three-colored Glove Cursor', 'none', 'index.game.toaster.levelup', '#css-ddslick', 'â˜… Add', '_frame', '.favorites-popup', '#wear-item-price', '00000', 'server-status', 'onmessage', 'hideYouNameInMinimap', 'bg-name', 'aload', 'left', 'teamDict', '#div_server, #div_save, #div_sound, #div_speed, #div_zigzag, #div_w1, #div_top, #div_killmsg, #div_sm, #div_pulse_effects, #div_messages, #div_background, #div_game_enhancements, #config_mobile, #div_Laser, #div_crsw', '#joystick_pxy', 'Restoring state from UI initialization', 'toggle', '<tr>\x0a          <td class=\"rank\">', 'xfbml', '#mm-params-game-mode', '\" >', 'UElYSQ==', 'className', '#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider', 'u4_', 'lastRespawnTime', 'onSelected', '#headshot_custom_text', 'padEnd', 'offsetHeight', '#profile-stat-gamesPlayed', '#mm-loading-progress-text', 'eat_animation', 'region', 'https://wormx.store/2025/css/gamenew.css', 'setupKeyboardEvents', 'Watermelon Cursor', 'ccg_2', 'abs', 'baseVal', 'data-hat-id', '#error-gateway-connection-view', 'Cherries Cursor', 'return (function() ', 'imageUrl', '4QhjXLK', 'unshift', 'Graphics', 'textContent', 'wftObjects', 'lineStyle', 'close', 'Modernizr', 'PIXI', '#profile-stat-headshots', '0000', '; uniform vec4 ', 'epx_time', 'apply', 'locale', 'getLoginStatus', 'innerHTML', 'Error processing file:', 'userId', '#sector_system_toggle', 'currentMode', 'currentHatId', 'iterator', 'skinId', 'rgba(0, 0, 0, 0.5)', '#popup-menu-back', 'img_i_3', 'contextmenu', 'img_pf_1', 'click.ddslick', 'dsg', 'c_v', '.dd-selected-description', 'There was a problem connecting!', 'setSelectionRange', 'performance-monitor-style', '\x0a              <div class=\"cursor-item ', '1322566GUneGE', 'onload', '<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>', 'glassesUnknown', 'data-imageSrc', 'btnFullScreen', 'Player', 'isIPInEEA', '#sector_show_lines', '#fff009', 'Ø®Ø·Ø£ ÙÙŠ Ø­ÙØ¸ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:', 'Stardust', '0lt1', '.background-grid', 'warn', '.cursor-item', 'hatInfoText', 'lastRadiusTime', 'listVariant', 'initGraphics', 'error', 'teamColor', 'totalPlayTimeSec', '/get_store.phpitem=z_o.png', 'mm-action-play', 'attach', 'Are you sure you want to remove all favorite hats?', 'UmVuZGVyZXI=', '.ui-tabs-nav .ui-tab', '\" style=\"width: 32px; height: 32px; margin-top: 14px;\">\x0a              </div>\x0a          ', 'price', '#popup-menu-coins-val', '#eating_speed_toggle, #performance-monitor-toggle, #wftspeed, #saveGame, #pulse_effects_enabled', 'no-', 'Shader', 'img_i_2', '#mm-bottom-buttons', 'table', 'config', 'white', '110px', '#portion_aura_slider', 'btn_in_t', 'JDHnkHtYwyXyVgG9', 'substring', 'webWidget: on', '.dd-selected-image', 'attr', '#mm-action-play', '#popup-logout-container', 'trace', 'v14.0', '#popup-login-fb', 'textureDict', 'server-image', 'servers-eeuu', '#adbl-3', 'sortableChildren', 'validInput', 'index.game.social.shareResult.messNorm', 'alpha', 'startCpuMonitoring', 'food_size', '#portion_aura_value', 'performance', 'servers-germania', 'I18N_MESSAGES', 'serviceWorker', ' HS/Kill actualizado: HS ', '; uniform mat3 ', '#div_customer', 'position', 'dropShadowColor', 'anApp', 'No Name Player', 'username', '; uniform sampler2D ', '_end', '#sector_bg_color', 'geolocation', '#fileSkin', 'hsKillUpdate', '#spin_fast_slider', 'wft-modal', 'main', 'Headshot', 'description', 'addChild', 'SCREEN', '46px', 'sectorSystemActive', '/get_store.phpitem=bg_sky_9.png', '#settings-music-enabled-switch', '#monster_kill_selector', 'column', '15px', '#fdbf5f', 'canvas', 'anchor', 'v_z', 'val', 'Heart on Stick Cursor', 'boolean', '.tab-content', 'I18N_LANG', 'arraybuffer', 'Name Error*', 'Mensaje desconocido:', 'd_2', '#wear-buy-button', 'Default', '; attribute vec2 ', 'append', 'preset', 'lastBackground', 'onreadystatechange', 'document', '1 / span 3', 'month', 'performance-monitor-toggle', '#btn_clear_file', '9dBTuzh', '#joystick_checked', 's_wft_', '<input type=\"hidden\" id=\"port_id\" value=\"\">', 'playerUpdate', '; gl_Position = vec4((', 'nodeName', 'Brazil', 'u6_', '0x1', 'relative', 'activeFlex', 'server-region', '/get_store.phpitem=moi_3.png', 'https://wormx.store/images/arkaplan/bg2.jpg', 'c_3', 'open', 'TEAM2', '<button>', 'keepJSONItemsOnTop', '/get_store.phpitem=mpf_1.png', '0 5px', '50px', 'findRenderContainer', '.sidebar-item[data-tab=\'backgrounds\']', 'gold', '/consent/change?value=', 'hatHelp', 'playMonsterSound', 'WRM_wormate-io_300x250', 'text/javascript', 'custom_skin', 'requestFullScreen', 'Hexvoid', '\" alt=\"User Icon\" style=\"width: 20px; height: 20px; margin-right: 5px; border-radius: 50%;\">', '314KaEHzv', '<ul class=\"dd-options\"></ul>', 'guest', '#mm-player-info', '#chat-input', 'fps', 'getFloat32', 'Singapore', 'hatUnknown', 'restricted', 'stopAllMonitoring', 'Incognito', '3px', '0x4', 'loginUser', 'beginFill', '#store-view', 'padStart', '_blank', '#profile-stat-totalTimeSpent', '/images/cors-proxy.phpimg=flg/us.png', 'skinGroupArrayDict', 'âŒ Ø®Ø·Ø£ ÙÙŠ ØªØ¹Ø¯ÙŠÙ„ Ø¯Ø§Ù„Ø© Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:', 'active', 'getItem', '#saveGame', 'port_id', 'addAttribute', 'streamer', 'WFT Game modifications applied successfully!', 'FoodSize', '#wear-view-prev', 'util.time.min', 'writeText', 'event', '#ffffff', '#wear-locked-bar-text', 'Z2V0RmxvYXQzMg==', 'expToNext', '/images/cors-proxy.phpimg=flg/sg.png', 'removeChild', 'object', 'Pink Dolphin Cursor', 'quarterTextStyle', 'client_id', 'https://wormate.io/images/confetti-valday2025.png', '#store-view-canv', 'consented', 'wormworld', '.flag', '#error-gateway-connection-retry', '(^|\\s)', '_hasSetupKeyboardControls', 'csg', 'https://wormx.store/2025/api/server.php', 'not', '#current-cursor-name', 'playerDeath', 'died', '<div class=\"div_FullScreen\"><input type=\"button\" value=\"', '.dd-options', 'value1_kill', '82px', 'version', 'logout', 'id_customer', '..4 ..', 'Socket error', 'devicePixelRatio', 'identifier', '0x3', 'index.game.result.share', 'img_o_4', '#final-score', 'server-info', 'playHeadshotSound', 'reload', 'Press \'( 2 )\' to toggle hats during gameplay', 'F_bg', '#mm-menu-cont', '#kill_name_position', 'hat-toggle-button', '_animFrameId', '#eee', 'center', '12px', 'https://wormx.store/store/index.php', 'zoom_speed', 'dropShadow', 'openHatFavorites', '#leaders-view', 'atan', 'Mushroom Cursor', '.dd-selected-text', 'uk_UA', 'index.game.popup.menu.store.tab', '#FFF', '-tab', 'gg_116823912010482082044', 'space-between', 'headshotMsgType', 'shift', 'containerImgS', '100%', 'https://wormate.io', '#profile-username', 'killCustomText', 'hat-favorites-button', 'https://wormx.store/store/check2.php', 'round', 'test', 'error-view', '_tick', 'font', '&gh=', 'Error loading sector system settings:', 'pop', 'changedTouches', 'data-descriptione', 'code', 'Are you sure you want to remove all favorite skins?', '---', '_start', '#252538', '#f00', '#final-caption', 'flex', '#headshot_name_position', '467020irMYhO', '16px', '\x0a          <div class=\"background-item ', ' = v2; }', 'utils', 'loa831pibur0w4gv', 'index.game.floating.headshot', 'FoodShadow', '</div>\x0a          </div>\x0a        ', 'index.game.toaster.consent.link', '&eyesId=', '.sidebar-item.active', 'Container', '..2 ..', 'index.game.popup.menu.skins.tab', '.setting-item', '#f44336', '..8 ..', '&type=', 'ddslick', '/get_store.phpitem=bg_sky_12.png', '#zoom_speed_slider', 'target', 'img_p_1', 'You don\'t have any favorite hats yet.', 'replace', 'Texture', '#eating_speed_toggle', 'game-cont', 'mouthUnknown', '32px', 'regDate', 'auth2', 'pk0', '\x0a            display: block;\x0a            object-fit: contain;\x0a        ', 'script', 'Yellow Cheese Cursor', 'index.game.antiadblocker.msg3', 'REPEAT', 'webWidget', 'WormWorld Servers', 'translate(-50%, -50%) scale(', 'data-server-number', 'get_group.phpimg=Group_show_gif.png', 'parse', 'currentUser', '<button id=\'add-to-favorites-skin\' class=\'favorite-button2\' style=\'background:#4CAF50;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2); margin: 410px 15px 15px 5px;\'><span style=\'font-size:14px;\'>+</span> Add</button>', '#sector_settings_panel', '5px', 'random', 'timestamp', '/images/cors-proxy.phpimg=cursors/10.png', 'U3ByaXRl', 'hatDict', '#final-place', 'teamCode', '#profile-experience-val', ' copied!\'));\">Copy</button>\x0a          </div>\x0a        </div>\x0a        \x0a        <!-- Ø§Ù„Ø®Ø· Ø§Ù„ÙØ§ØµÙ„ Ø§Ù„Ø£ÙˆÙ„ ÙÙ‚Ø· -->\x0a        <div style=\"border-top: 1px solid #3a4061; margin: 15px 0;\"></div>\x0a        \x0a        <!-- Ø·Ø±ÙŠÙ‚Ø© ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ© - Ø±Ø§Ø¨Ø· Ø§Ù„Ø§ØªØµØ§Ù„ -->\x0a        <div style=\"text-align: center; padding: 10px 0;\">\x0a          <h3 style=\"color: white; margin: 0 0 8px 0; font-size: 16px;\">Premium Activation - ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ Ø§Ù„Ù…Ù…ÙŠØ²</h3>\x0a          <a href=\"https://wormatefriendsturkey.com/contact\" target=\"_blank\" style=\"display: block; background-color: #4CAF50; color: white; padding: 12px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px auto; width: 80%; max-width: 280px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: all 0.3s; border: 2px solid #65d269;\">\x0a            <span style=\"display: block; font-size: 16px;\">ðŸ”— Click Here To Activate</span>\x0a            <span style=\"display: block; font-size: 14px; margin-top: 4px;\">Ø§Ø¶ØºØ· Ù‡Ù†Ø§ Ù„Ù„ØªÙØ¹ÙŠÙ„</span>\x0a          </a>\x0a        </div>\x0a        \x0a        <!-- ØµÙˆØ±Ø© Ø§Ù„Ø¨Ø±ÙŠÙ…ÙŠÙ… Ù‚Ø¨Ù„ Ø²Ø± Ø§Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ -->\x0a        <div style=\"text-align: center; margin: 15px auto 10px;\">\x0a            <img src=\"https://wormx.store/images/cors-proxy.php?img=img/premium_features.png\" alt=\"Premium Features\" style=\"max-width: 150px; height: auto; border-radius: 4px; display: block; margin: 0 auto;\">\x0a        </div>\x0a        \x0a        <!-- Ø®ÙŠØ§Ø± Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù… Ù„Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ ÙƒØ®ÙŠØ§Ø± Ø«Ø§Ù†ÙˆÙŠ -->\x0a        <div style=\"text-align: center; padding: 10px 0;\">\x0a          <a href=\"https://discord.gg/NHWXgJpE\" target=\"_blank\" style=\"display: inline-block; background-color: #5865F2; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: background-color 0.3s;\">\x0a            <svg style=\"width: 16px; height: 16px; margin-right: 6px; display: inline-block; vertical-align: middle;\" viewBox=\"0 0 24 24\" fill=\"white\">\x0a              <path d=\"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z\"/>\x0a            </svg>\x0a            Join Our Discord\x0a            <span style=\"display: block; font-size: 0.8em; margin-top: 2px;\">Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ù…Ø¬ØªÙ…Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Discord</span>\x0a          </a>\x0a          <p style=\"margin-top: 8px; color: #aaa; font-size: 12px;\">\x0a            Get premium features by joining our Discord server\x0a            <span style=\"display: block; font-size: 0.9em; margin-top: 2px;\">Ù„Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙŠØ²Ø§Øª Ø§Ù„Ù…Ù…ÙŠØ²Ø© Ø¹Ø¨Ø± Discord</span>\x0a          </p>\x0a        </div>\x0a        \x0a        <div style=\"text-align: center;\">\x0a          <p style=\"color: #ddd; font-size: 14px; margin: 5px 0;\">\x0a            <i class=\"fas fa-crown\" style=\"color: #ffbb00;\"></i> Premium\x0a          </p>\x0a        </div>\x0a        ', '10px', 'height', 'isFinite', '{1}', 'getTime', 'resource', 'dd-pointer-up', '#social-buttons', '4px 8px', '0xffffff', 'UkVQRUFU', '#wftsound', 'teamNickname', 'restored', 'Error saving sector system settings:', 'Socket opened', '#mm-player-exp-bar', 'zero', 'drawCircle', 'cpuUsage', 'status', 'mouthDict', '/images/cors-proxy.phpimg=cursors/14.png', 'extension', 'revokeObjectURL', 'Galaxy-Star.png', '#sector_line_opacity_value', 'Turquoise Mouse Pointer', '861926850619051', 'text/css', '/get_store.phpitem=bg_sky__2.png', 'text', '/get_store.phpitem=z_i.png', '.favorites-grid', '#mm-line-top', '/images/linelogo-valday2024.png', '<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}â€‹ .dd-selected-text { font-weight:bold}â€‹</style>', '#portion_size_value', '; border-radius: 8px; overflow: hidden; margin: 5px; background-color: #232339;\">\x0a            <img src=\"', '.description-text', 'fast', 'timing', 'getCurrentPosition', 'backgroundColor', 'skin-info-text', ' desconectado.', 'bg_sky_9.png', 'setTime', 'monsterKillSound', ' dd-image-right', '\x0a<div class=\"title-wormate-server\">\x0a          W O R M A T E F R Ä° E N D S T U R K E Y\x0a        </div>\x0a        \x0a        <div class=\"description-text-hiep\">\x0a \x0a    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\x0a    <BR>\x0a    <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\x0a        <a><span class=\"flag br\" value=\"\' + gameSettings.s_l + \'/images/server-flags/tur.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\x0a        <a><span class=\"flag mx\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/mx.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\x0a        <a><span class=\"flag us\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/us.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\x0a        <a><span class=\"flag ca\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/ca.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\x0a        <a><span class=\"flag de\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/de.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\x0a        <a><span class=\"flag fr\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/fr.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\x0a        <a><span class=\"flag sg\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/sg.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\x0a        <a><span class=\"flag jp\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/jp.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\x0a        <a><span class=\"flag au\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/au.png\"></span></a>\x0a      </li>\x0a      <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\x0a        <a><span class=\"flag gb\" value=\"\' + gameSettings.s_l + \'/images/cors-proxy.phpimg=flg/gb.png\"></span></a>\x0a      </li>\x0a    </ul>\x0a      \x0a      <!-- Ø²Ø± Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ø£Ø³ÙÙ„ Ø§Ù„Ø£Ø¹Ù„Ø§Ù… Ù…Ø¨Ø§Ø´Ø±Ø© -->\x0a      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\x0a        <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\x0a      </div>\x0a      \x0a      <div class=\"gachngang\"></div>\x0a      <div class=\"server-header\">\x0a        <div class=\"header-name\">SERVER</div>\x0a        <div class=\"header-region\">REGION</div>\x0a        <div class=\"header-status\">STATUS</div>\x0a        <div class=\"header-score\">SCORE</div>\x0a      </div>\x0a      <div class=\"gachngang\"></div>\x0a    </div>\x0a    \x0a    <!-- Ø¥Ø¶Ø§ÙØ© ØµÙˆØ±Ø© Ø§Ù„Ø®Ù„ÙÙŠØ© Ù‡Ù†Ø§ Ù‚Ø¨Ù„ Ø­Ø§ÙˆÙŠØ© Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª -->\x0a    <div class=\"background-image-container\">\x0a      <img src=\"https://wormx.store/images/cors-proxy.phpimg=Background/serverbg.jpg\" class=\"background-image\">\x0a    </div>\x0a    \x0a    <div class=\"servers-container\">\x0a      <div class=\"servers-peru\"></div>\x0a      <div class=\"servers-mexico\" style=\"display:none\"></div>\x0a      <div class=\"servers-eeuu\" style=\"display:none\"></div>\x0a      <div class=\"servers-canada\" style=\"display:none\"></div>\x0a      <div class=\"servers-germania\" style=\"display:none\"></div>\x0a      <div class=\"servers-francia\" style=\"display:none\"></div>\x0a      <div class=\"servers-singapur\" style=\"display:none\"></div>\x0a      <div class=\"servers-japon\" style=\"display:none\"></div>\x0a      <div class=\"servers-australia\" style=\"display:none\"></div>\x0a      <div class=\"servers-granbretana\" style=\"display:none\"></div>\x0a    </div>\x0a  </div>\x0a</div>\x0a  ', 'indexedDB', 'js$2', '15px 20px', '#backgrounds-tab, .background-grid, .background-item', '#results-view', '-moz-transform', 'userAgent', '..5 ..', 'opacity', 'server-name', '#settings-show-names-switch', 'kill', 'soundVolume', 'onprogress', 'defaultSelectedIndex', 'Continue (Home)', '11px', 'trigger', 'index.game.result.continue', 'initDrawing', '#mm-skin-over', 'log', 'pwr_flex', 'timmap', 'addAsyncTest', 'Turkey', 'touches', 'ready', 'currentDisplayMode', 'Mesaj iÅŸleme hatasÄ±:', '//connect.facebook.net/', '3812898hoFPOt', 'data-index', '#adbl-continue span', 'Q29udGFpbmVy', ' no tiene teamCode. No se enviarÃ¡ la actualizaciÃ³n de posiciÃ³n.', '[id^=\'skin-info-text\']', '#sector_lines_options', '#coins-view', '.dd-click-off-close', 'kills', 'fr_FR', 'bg_sky_11.png', 'render', 'oco', 'get_group.phpimg=Group_customer.png', '#manage-favorites-skin', 'filter', 'skin', 'success', 'QURE', '..1 ..', 'img_o_2', 'fuak', 'valid', 'loading', 'index.game.popup.menu.consent.tab', 'Ù…Ù„Ø¹ÙˆÙ†', '75px', '#store-groups', 'getInt8', 'ADD', '1px 5px', 'ðŸŽ¯ HS GÃ¼ncelleme: ', '#port_id', 'cachedServers', 'prop', 'ajax', 'renderContainer', ';\">\x0a            ', 'scroll', 'head', 'img', 'Favorite Hats', 'pk4', 'charAt', 'setInt16', 'hat-button-container', 'angle', 'spawnInfinity', 'mouthVariantArray', 'headShots', '#mm-leaders', 'Player_', 'Skin list not found in game data', 'touchmove', '#FF0000', '0x0', 'total', '/images/cors-proxy.phpimg=cursors/9.png', '#loa831pibur0w4gv', '#popup-delete-account', 'ze-snippet', 'false', 'coins', '#wear-view-next', 'scrollHeight', '\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">', '2px 2px 4px rgba(0, 0, 0, 0.7)', 'trim', '\x0a            width: 100%;\x0a            height: 100%;\x0a            display: flex;\x0a            justify-content: center;\x0a            align-items: center;\x0a            color: white;\x0a            background-color: #333;\x0a        ', '#mm-action-login', '/get_store.phpitem=', 'port_id_s', 'value2_hs', 'pk5', '<li><a class=\"dd-option\">', 'headshot-message', ' Players)', '#kill_show_name', 'VGV4dA==', '#idReplaceSkin', 'Beach Umbrella Cursor', '<div class=\"table-row\"><span>', '#laser_opacity_value', '\" style=\"cursor: pointer; border: 2px solid ', '420px', '#final-message', '#laser_opacity_slider', 'resize', ' ha muerto.', 'index.game.antiadblocker.msg4', '#laser_color_picker', '#profile-experience-bar', '#profile-stat-registrationDate', '.dd-option', '#mm-player-avatar', '#sector_bg_opacity', 'Ø§Ø®ØªÙƒ', 'state', 'tooltip', 'vendor', 'savedGame', 'then', 'background-color', 'joystick_mode', 'removeClass', 'onclickServer', 'skins', 'server_url', '#food_size_value', 'textAlign', '270px', 'Text', 'cos', 'data', 'c_white', 's_h', 'sectorSystem', '#store-go-skins-button', '<div style=\'text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span 2;\'>Error loading favorites</div>', 'crossorigin', 'right', 'c_2', 'expires_in', 'Ù‚ÙˆØ§Ø¯', 'VkdWaGJWVlE=', '\" style=\"width: 100%; height: 65px; object-fit: cover;\">\x0a            <div style=\"text-align: center; padding: 5px; font-size: 10px; color: #ffffff;\">', 'playerY', 'showFpsCpu', '#store-go-wear-button', ';path=/', 'byHighScore', 'min', '.background-item[data-bg=\"', '<input type=\"hidden\" id=\"port_name\" value=\"\">', '#profile-stat-kills', ' <input class=\"dd-option-value\" type=\"hidden\" value=\"', 'showLines', 'id_user', 'day', '#adbl-continue', '\" id=\"btnRePlay\">', '<div class=\'fav-buttons-container\' style=\'margin:10px;display:flex;gap:5px;position:fixed;left:270px;top:0px;z-index:1000;\'></div>', 's11', '</td>\x0a        </tr>', 'globalHatTextureCache', 'exitFullscreen', 'https://wormx.store/2025/check/check2.php', 'forEach', 'regionDict', 'd_3', '.close-button', 'BaseTexture', 'headshotCustomText', 'removeData', 'eyesVariantArray', 'toString', '#unl6wj4czdl84o9b', '#d4db19', 'miniclip', '#joystick_color', 'teamwft', 'index.game.result.placeInBoard', '/pub/healthCheck/ping', 'img_p_2', 'PortionAura', 'addSelectedHatButton', 'handleNicknameChange', 'siblings', '<div class=\'favorites-popup\' style=\'display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0 4px 8px rgba(0,0,0,0.5);color:white;\'><div style=\'padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;\'><button class=\'close-favorites\' style=\'position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;\'>&times;</button><h3 style=\'margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;\'>Favorite</h3><button class=\'clear-all-favorites\' style=\'padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;\'>Clear All</button></div><div class=\'favorites-content\' style=\'padding:15px 20px;overflow-y:auto;max-height:330px;\'><div class=\'favorites-grid\' style=\'display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;\'></div></div></div>', '</span><span>', '361656bSHlzg', '#2196F3', 'selectedCursor', '_pulseInterval', 'Spray Can Cursor', 'coins_16000', 'Saved sector system state:', 'slice', 'setupToggleButton', 'Error saving wft settings:', 'fpsDisplay', '#relojHelp', '</div>', 'url', 'd_5', 'CLAMP', 'pwrFlex', 'binaryType', '#error-game-connection-retry', 't_wft_', 'lineWidth', 'textShadow', 'split', 'applySettings', '\x0a            position: absolute;\x0a            top: 4px;\x0a            left: 4px;\x0a            background-color: rgba(0,0,0,0.6);\x0a            color: white;\x0a            font-size: 12px;\x0a            padding: 2px 5px;\x0a            border-radius: 3px;\x0a            z-index: 10;\x0a        ', '0 4px 8px rgba(0, 0, 0, 0.5)', 'function', 'game-wrap', 'util.time.hours', 'GET', 'user_data', '#btn_copy', 'Error loading wft settings:', 'wss://', 'fadeOut', 'ðŸ“¤ Veri gÃ¶nderiliyor:', 'selectedItem', 'set', 'myGameSettings', '#wear-glasses-button', '\" style=\"max-width: 220px;\" type=\"text\" id=\"id_customer\" readonly>\x0a                    <button id=\"btn_copy\">\x0a                      <span class=\"tooltiptext\" id=\"myTooltip\">id copy</span>Copy\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a          </div>\x0a        </div>\x0a      </div>\x0a    </div>\x0a  </div>\x0a</div>\x0a    \x0a<!-- Headshot Message Display -->\x0a<div id=\"headshot-message\"></div>\x0a', 'Zoom changing from', 'pointer-events', 'clear', 'messenger', '#ffcc00', 'positionMode', 'init', 'startMonitoring', 'pow', '/images/bg-pattern-pow2-TEAM2.png', 'servers', '#open-favorites-btn', '#delete-account-view', 'GLASSES', '#mm-advice-cont', '; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { ', 'imagesrc', 'favoriteSkins', 'arc', 'index.game.result.your', 'Method ', 'updateToggleButton', '\x0a        <div class=\"chat-message\" style=\"background: ', 'Background change error:', '.dd-pointer', 'fillText', '</div></div>', '#adbl-2', '<input type=\"button\" value=\"', 's_l', 'keys', '</td>\x0a          <td class=\"score\">', 'reverse', 'currentHatIndex', '#f8d968', 'Error loading banned words:', '.player-tooltip', 'done', 'container', 'm_2', '#mobile-tab-item', 'true', 'text, span, div', 'account_type', '000000', 'country', '#modal_backdrop', 'onOpen', '#modal_wft .modal-content', '#loading-view', '#mm-store', '#leaders-button-kills', '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com', '\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>', 'wftsw', 'mozRequestFullScreen', 'selectedServerInfo', 'players', 'ccc', 'input', 'iscustom', 'servers-australia', 'fill', 'enabled', 'img_3', '\" data-cursor=\"', 'ÙƒÙ„Ø¨', 'select', 'FoodTransparent', 'preroll', 'WFT 2', 'connected', 'texts', '<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">âŸ· </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>', 'Magic Wand with Golden Star Cursor', '#popup-menu-coins-box', 'https://wormmedia.xyz:4000/api/live-scores?t=', 'https://wormate.io/images/og-share-img-new.jpg', 'Wormx Error 1', 'Error loading settings:', '[id^=\"div_\"]', ' does not exists.', '..10 ..', '#adbl-4', 'createElement', '/images/bg-pattern-pow2-ARENA.png', '#joystick_pxy_value', 'Ã¢Å¡ Ã¯Â¸ Advertencia: No se encontrÃƒÂ³ el elemento \'teamNickname\'.', 'onclose', 'realServerName', 'resolution', 'app', '#food_shadow_slider', '#loading-progress-cont', 'ru_RU', 'WFT', '#sector_display_mode', 'fillStyle', '/static/assets/', 'globalGameData', 'label_kill', '999', 'sqrt', 'index.game.popup.menu.coins.tab', 'base', 'server-score', 'hidden', 'img_4', '.settings-sidebar, .settings-layout, .settings-content, .settings-grid, .tab-content, .sidebar-item', 'startPreRoll', 'save gm: ', 'list', '#Laserup', 'getInt32', 'https://wormx.store/2025/excel/name_banned_text.php', '906HxxCay', 'index.game.popup.menu.store.locked', 'openDatabase', 'count', 'style', '.favorites-content', '#portion_size_slider', 'rgba(255, 255, 255, 0.1)', '/get_store.phpitem=mo_3.png', '#store-buy-coins_3250', '#4CAF50', 'black', 'AudioState', 'sectorSystemSettings', '/images/wear-ability.png', 'API error:', 'application/json', 'def_skin_glow', 'mode', 'de_DE', 'start pSC: ', '#mm-loading', 'cachedRadius', 'colorDict', 'coins_7000', 'WebSocket', '#popup-withdraw-consent', '#final-board', '#sector_line_opacity', 'QkxFTkRfTU9ERVM=', '_originalColor', '.background-item', 'wormate.io', 'Web SQL otomatik olarak JavaScript ile temizlenemez.', '</span><span><img src=\"', 'class', '&skinId=', 'Current: Default', 'CPU monitoring stopped because it was disabled', 'isFpsVisible', 'stylesheet', 'please don\'t copy my code', 'index.game.popup.menu.login.tab', 'unlimitedRespawn', 'detach', 'deleteDatabase', 'files', '#food_size_slider', '#stretch-box', 'pk6', 'catch', 'mouseenter', 'onclick', 'index.game.social.shareResult.caption', '1000', 'option', '1 / span 2', 'ðŸ›‘ Pozisyon gÃ¼ncellemesi yapÄ±lmadÄ±: teamCode yok.', 'gray', 'fontSize', 'scale', '</div><div class=\"toaster-levelup-text\">', '/images/cors-proxy.phpimg=clock/clock.png', '/deleteAccount', 'showHeadshotName', 'ccg_1', 'sel_country', 'addEventListener', 'consent_state_2', 'bg_sky__2.png', '#config_mobile', 'no-js(\\s|$)', 'hatId', 'Nebula', 'div_zigzag', '#store-buy-coins_50000', 'index.game.floating.wellDone', '/sdk.js', 'pageX', '/dynamic/assets/registry.json', '</span></div>', 'currentTime', '#cursors-tab, .cursor-container, .cursor-item', '3.3.1', 'rgba(0,0,0,0.9)', 'touchstart', '/images/cors-proxy.phpimg=flg/mx.png', 'servers-francia', '.wormate.io', '#markup-wrap', 'children', '360px', 'util.time.sec', 'ccg', '/get_store.phpitem=mp_2.png', 'isArray', 'bg_sky__5.png', 'Crystalblue 2', 'âœ… ØªÙ… ØªØ¹Ø¯ÙŠÙ„ Ø¯Ø§Ù„Ø© Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ± Ø¨Ù†Ø¬Ø§Ø­', '.selectSala', 'concat', 'flx', '30%', 'eyesUnknown', 'UAE', 'initialState', 'getImageData', '#add-to-favorites-skin', '#store-buy-coins_16000', 'isInitialized', 'modal_wft', '.store-view-cont', '-5px', '\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">', '#mm-player-level', 'pointer', 'Renderer', '#spin_fast_value', '<img src=\"', 'wrapMode', 'load', '.error, .alert, .modal, .popup, .notification', 'clearRect', '#333333', '/images/confetti-valday2024.png', 'soundEnabled', 'red', 'size', '-10px', '2px', 'Octopus Glove Cursor', 'body', 'URL', 'sessionsPlayed', 'headshotMsg', 'zoomSpeed', 'CLOSING', 'd_4', 'server-image-with-link', 'initialized', 'color', 'cpuDisplay', 'getElementById', 'block', 'SaveGamewft', 'nonbuyableCause', '#leaders-button-level', 'nome', 'defer', 'http://www.w3.org/2000/svg', 'backgroundArena', 'now', 'which', '#ff2222', 'd_1', '#game-cont, #game-canvas, body', 'propertyList', '/images/skins/', '#port_id_s', '&nickname=', 'killMsgType', 'USA', '/get_store.phpitem=mo_2.png', 'fadeIn', 'coins_125000', 'gameMode', 'caches', 'original', '#mm-coins-box', 'mobileconfig', 'R3JhcGhpY3M=', 'eyesId', 'move', 'fontFamily', '2px 6px', 'slideDown', '#wftiq', '#myTooltip', 'CPU: ', 'savedState', '#joystick_size', 'search', 'âŒ WebSocket baÄŸlantÄ±sÄ± kesildi. Tekrar baÄŸlanÄ±lacak...', 'setItem', 'aliases', '.dd-option-image', '#food_shadow_value', '#store-buy-button', 'insertAfter', 'index.game.popup.menu.profile.tab', 'soundEffect', 'PortionSize', 'https://apis.google.com/js/platform.js', '\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\"/>', '_pulseStarted', 'Ø§Ù…Ùƒ', 'Dagger Cursor', 'moveTo', 'banner', 'databases', '#sort-toggle', '; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }', 'index.game.result.tryHit', 'div_top', '/images/cors-proxy.phpimg=cursors/7.png', 'border-color', 'https://gateway.wormate.io', '#popup-login-gg', 'appendTo', 'Timmap Servers', '/get_store.phpitem=bg_sky_8.png', '<small class=\"dd-selected-description dd-desc', 'initUserInterface', 'coords', 'translate(-50%, -50%)', '\" height=\"40\" />', 'FPS: ', '/images/cors-proxy.phpimg=cursors/26.png', 'play', 'en_US', '/get_store.phpitem=bg_sky_7.png', '/images/cors-proxy.phpimg=flg/au.png', '/images/lens.png', '#FFD700', '#wear-tint-chooser', 'Z2V0SW50MTY=', 'accessToken', 'img_1', '#profile-avatar', 'precision highp float; varying vec2 ', 'TeamWFT', 'Geometry', 'skinArrayDict', 'favorites-dialog', '/images/cors-proxy.phpimg=cursors/25.png', '/images/cors-proxy.phpimg=flg/de.png', 'value1_hs', 'readyState', 'values', '500px', '0xFFFFFF', 'wftit', 'default_icon.png', '\x0a            <strong id=\"', 'bg_sky_10.png', 'Add', 'expires=', 'documentElement', 'update', 'expOnLevel', 'textureCache', '/images/cors-proxy.phpimg=cursors/28.png', 'drawImage', 'Clear All', 'https://static.zdassets.com/ekr/snippet.js?key=f337b28c-b66b-4924-bccd-d166fe3afe54', 'transition', 'isBuyer', 'TextureCache', 'change', 'dd-click-off-close', 'img_p_3', 'ui-tab-active', 'hatFavoritesButton', 'imagePosition', 'tint', 'stringify', 'antialias', '#op_wft', 'options', 'nonbuyable', 'each', 'v1_', '<div id=\"idReplaceSkin\"></div>', 'length', '#skin-description-text', 'cloneNode', 'bg_sky__1.png', 'startAllMonitoring', 'index.game.popup.menu.wear.tab', 'getRadius', 'startsWith', 'sha256', 'custom', 'appId', 'projectionMatrix', 'rotation', '#volume_slider', 'opacity 0.3s ease-in-out', 'U2hhZGVy', 'disableFlex', 'click', 'wftSettings', 'ooo', '18px Arial', 'endFill', '#wear-view-canv', '18px', 'map', '#store-locked-bar-text', 'data-region-flag', 'resetScript', 'symbol', 'bg_sky_8.png', 'destroy', 'after', 'merge', 'reset', '_refresh', 'Customer', 'savedData', 'hasClickHandler', '/images/cors-proxy.phpimg=cursors/18.png', 'Api_listServer', 'hatButtonContainer', ' = ', '#mm-skin-next', 'addTest', '22310klFnhH', '/images/cors-proxy.phpimg=flg/gb.png', 'joystick_checked', 'selectText', '.settings-sidebar', '&mouthId=', 'Sprite', 'tab', '#wear-locked-bar', 'parent', 'removeChildren', 'css', 'servers-singapur', 'killMsg', 'WFT 4', 'index.game.antiadblocker.msg1', '//apis.google.com/js/platform.js', 'def_mouth', '.close-favorites', 'clipboard', 'id_token', 'onchange', '/buyProperty?id=', 'visibility', 'showFavoritesDialog', '5px 10px', 'forceUseLocalImages', 'has', '<button id=\"btn_activate\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"window.open(\'https://t.me/wormateactivate/\', \'_blank\');\">Activate</button>', '/images/cors-proxy.phpimg=flg/ca.png', 'revision', '_request', 'Press \'( 1 )\' to toggle skins during gameplay', '#modal_wft_body', 'wssServer', '/images/cors-proxy.phpimg=cursors/1.png', '#333', 'new', 'Electrical Plug Cursor', '-webkit-transform', 'webkitRequestFullScreen', 'prerollCount', 'serverUrl', '#store-view-prev', 'img_2', '#wear-description-text', 'WRAP_MODES', '; void main(){vec4 color=texture2D(', '#delete-account-yes', 'add', 'relativePath', 'https://wormx.store/video/hs_2.mp3', 'PerformanceMonitor', 'inline-block', 'Name Error', 'imageSrc', 'img_clock', 'replaceWith', 'radian', 's_headshot', 'data-region-name', '30px', 'async', '#zoom_speed_value', 'dd-container', 'fromCharCode', 'result', 'lineAlpha', 'scrollTop', '#custom-tooltip', '; void main(){', 'ArrayBuffer', '#profile-level', 'textDict', '/images/cors-proxy.phpimg=cursors/4.png', 'onerror', 'src', '/images/cors-proxy.phpimg=cursors/6.png', 'dd-option-selected', 'saveSettings', '\"></div>', 'init2 pSC: ', 'rgba(0, 0, 0, 0.7)', '/get_store.phpitem=mp_1.png', 'thickness', 'info', 'clientY', '0x2', '/images/cors-proxy.phpimg=cursors/24.png', '#loading-progress-bar', 'u3_', 'isSignedIn', '.ui-tab', '#store-buy-coins_125000', 'keyCode', 'PREROLL_ELEM', '\" src=\"', '#volume_value', ' se moviÃ³ a (', 'removeItem', 'portion', 'source', '/get_store.phpitem=bg_sky__6.png', 'saveGame', '_lastPulseTime', 'c_4', 'Jugador ', 'favorites-overlay', 'Socket closed', 'querySelector', '#settings-sfx-enabled-switch', '#fff', 'sort', 'VGV4dHVyZQ==', '#wear-hats-button', 'SaveGameXT', '#profile-view', 'pulseEnabled', '.dd-select', 'isCpuVisible', '#00a8ff', 'fixed', '\x0a        <div style=\"text-align:center; padding:20px; color:#aaa;\">\x0a          Loading servers... Please wait.\x0a        </div>\x0a      ', 'coins_50000', 'HAT', '.servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francia, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana', 'key', '/dynamic/assets/revision.json', '#final-continue', 'showHeadshotMessage', 'lastTime', '#performance-monitor-toggle', '&hatId=', 'sector_system_toggle', 'sectorSystemMode', 'longitude', 'mouseup', 'Eski baÄŸlantÄ± kapatÄ±lÄ±yor...', '#default-cursor-btn', 'volume', '<link href=\'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\' rel=\'stylesheet\'/>\x0a<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\">\x0a<button id=\"btn_crsw\" style=\"display: none;\">ðŸ’¡</button> \x0a<button id=\"op_wft\" class=\"op_wft\">âš™ï¸ Settings</button> \x0a<div id=\"modal_wft\" class=\"modal\"> \x0a  <div class=\"modal-content\"> \x0a    <div class=\"modal-header\"> \x0a      <span class=\"close\">&times;</span> \x0a      <h2 class=\"modal-title\">GAME SETTINGS</h2>\x0a    </div>\x0a    \x0a    <div id=\"modal_wft_body\" class=\"modal-body\">\x0a      <!-- Settings layout with sidebar and content -->\x0a      <div class=\"settings-layout\">\x0a        <!-- Sidebar -->\x0a        <div class=\"settings-sidebar\">\x0a          <div class=\"sidebar-item active\" data-tab=\"game-settings\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>\x0a            </svg>\x0a            <span>Game Settings</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"mobile-settings\" id=\"mobile-tab-item\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\x0a              <line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"18\"></line>\x0a            </svg>\x0a            <span>Mobile Controls</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"sound-laser-settings\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <path d=\"M22 12h-4l-3 9L9 3l-3 9H2\"></path>\x0a            </svg>\x0a            <span>Laser Settings</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"power-ups\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\x0a              <polyline points=\"12 6 12 12 16 14\"></polyline>\x0a            </svg>\x0a            <span>Power-ups & Zoom</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"messages\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\x0a            </svg>\x0a            <span>Messages</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"backgrounds\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\x0a              <circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle>\x0a              <polyline points=\"21 15 16 10 5 21\"></polyline>\x0a            </svg>\x0a            <span>Backgrounds</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"cursors\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path>\x0a              <path d=\"M13 13l6 6\"></path>\x0a            </svg>\x0a            <span>Cursors</span>\x0a          </div>\x0a          \x0a          <div class=\"sidebar-item\" data-tab=\"about\">\x0a            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a              <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\x0a              <line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line>\x0a              <line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>\x0a            </svg>\x0a            <span>About</span>\x0a          </div>\x0a        </div>\x0a        \x0a        <!-- Content Area -->\x0a        <div class=\"settings-content\">\x0a          <!-- Game Settings Tab -->\x0a          <div id=\"game-settings-tab\" class=\"tab-content\">\x0a            <h3>Game Settings</h3>\x0a            \x0a            <div id=\"div_server\" style=\"position: absolute; opacity: 0; top: -9999px; left: -9999px; pointer-events: auto;\">\x0a              <label for=\"sel_server\">Country</label> \x0a              <select id=\"sel_country\"></select>\x0a            </div>\x0a            \x0a            <!-- Game Options Section -->\x0a            <div class=\"section-title\">Game Options</div>\x0a            <div class=\"settings-grid\">\x0a              <!-- Fast Eating -->\x0a              <div class=\"setting-item\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-bolt\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Fast Eating</label>\x0a                </span>\x0a                <label class=\"switch\">\x0a                  <input type=\"checkbox\" id=\"eating_speed_toggle\">\x0a                  <span class=\"slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- ZigZag -->\x0a              <div class=\"setting-item\" id=\"div_zigzag\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-eye\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Show ZigZag</label>\x0a                  <img style=\"height: 18px;\" src=\"https://wormx.store/images/cors-proxy.phpimg=img/zigzag.png\">\x0a                </span>\x0a                <label class=\"switch\">\x0a                  <input type=\"checkbox\" id=\"zigzagup\" value=\"true\" checked>\x0a                  <span class=\"slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- Show Speed -->\x0a              <div class=\"setting-item\" id=\"div_speed\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-tachometer-alt\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Show Speed</label>\x0a                  <img style=\"height: 18px;\" src=\"https://wormx.store/images/cors-proxy.phpimg=img/speed.png\">\x0a                </span>\x0a                <label class=\"switch\">\x0a                  <input type=\"checkbox\" id=\"wftspeed\" value=\"true\" checked>\x0a                  <span class=\"slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- Total Kill-Headshot -->\x0a              <div class=\"setting-item\" id=\"div_save\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\x0a                  <label for=\"saveGame\">Total Kill/Headshot</label>\x0a                </span>\x0a                <label class=\"switch\">\x0a                  <input type=\"checkbox\" id=\"saveGame\" value=\"true\" checked>\x0a                  <span class=\"slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- Show FPS/CPU -->\x0a              <div class=\"setting-item\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-microchip\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Show FPS/CPU</label>\x0a                </span>\x0a                <label class=\"switch\">\x0a                  <input type=\"checkbox\" id=\"performance-monitor-toggle\">\x0a                  <span class=\"slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- Visual Pulse Effects -->\x0a              <div class=\"setting-item\" id=\"div_pulse_effects\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-wave-square\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Visual Pulse Effects</label>\x0a                </span>\x0a                <label class=\"switch\">\x0a                  <input type=\"checkbox\" id=\"pulse_effects_enabled\" checked>\x0a                  <span class=\"slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- Screen Mode -->\x0a              <div class=\"setting-item\" id=\"div_w1\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-desktop\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Screen Mode</label>\x0a                </span>\x0a                <select id=\"sel_sc\">\x0a                  <option value=\"0\">100%</option>\x0a                  <option value=\"1\">75%</option>\x0a                  <option value=\"2\">Center</option>\x0a                </select>\x0a              </div>\x0a              \x0a              <!-- Smooth Level -->\x0a              <div class=\"setting-item\" id=\"div_sm\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-sliders-h\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Smooth movement</label>\x0a                </span>\x0a                <select id=\"sel_sm\">\x0a                  <option value=\"20\">Normal</option>\x0a                  <option value=\"10\">High</option>\x0a                </select>\x0a              </div>\x0a              \x0a              <!-- Top Players -->\x0a              <div class=\"setting-item\" id=\"div_top\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-trophy\" style=\"color: #ffbb00;\"></i>\x0a                  <label>Top Players</label>\x0a                </span>\x0a                <select id=\"sel_top\">\x0a                  <option value=\"0\">0</option>\x0a                  <option value=\"1\">1</option>\x0a                  <option value=\"2\">2</option>\x0a                  <option value=\"3\">3</option>\x0a                  <option value=\"4\">4</option>\x0a                  <option value=\"5\">5</option>\x0a                  <option value=\"6\">6</option>\x0a                  <option value=\"7\">7</option>\x0a                  <option value=\"8\">8</option>\x0a                  <option value=\"9\">9</option>\x0a                  <option value=\"10\">10</option>\x0a                </select>\x0a              </div>\x0a            </div>\x0a            \x0a            <!-- Sound Settings -->\x0a            <div class=\"sound-settings-container\">\x0a              <div class=\"setting-group\">\x0a                <div class=\"settings-row\">\x0a                  <!-- Sound Effects Label on Left -->\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-volume-up\" style=\"color: #ffbb00;\"></i>\x0a                    <div class=\"sound-effects-title\">Sound Effects</div>\x0a                  </span>\x0a                  \x0a                <!-- Headshot Sound Selector -->\x0a                <select id=\"sound_effect_selector\">\x0a                  <option value=\"https://wormx.store/video/hs_2.mp3\">Default Headshot</option>\x0a                  <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Headshot Sound</option>\x0a                  <option value=\"https://wormx.store/video/emaat.mp3\">Emaat</option>\x0a                  <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper Shot</option>\x0a                  <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Headshot 2</option>\x0a                  <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Alqm</option>\x0a                  <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\x0a                  <option value=\"https://wormx.store/video/Aelo-Adi.MP3\">Adelo Adi</option>\x0a                  <option value=\"https://wormx.store/video/alalobee.mp3\">Ala Loby</option>\x0a                  <option value=\"https://wormx.store/video/laugh.mp3\">Laugh</option>\x0a                  <option value=\"https://wormx.store/video/mario-jump.mp3\">Mario Jump</option>\x0a                  <option value=\"https://wormx.store/video/pew.mp3\">Pew</option>\x0a                  <option value=\"https://wormx.store/video/pingo.mp3\">Pingo</option>\x0a                  <option value=\"https://wormx.store/video/wak-wak.mp3\">Wak Wak</option>\x0a                </select>\x0a                \x0a                <!-- 10th Headshot Sound -->\x0a                <select id=\"monster_kill_selector\">\x0a                  <option value=\"https://wormx.store/video/monster-kill-hahaha.MP3\">Monster Kill</option>\x0a                  <option value=\"https://www.myinstants.com/media/sounds/mk.mp3\">Monster Kill 2</option>\x0a                  <option value=\"https://www.myinstants.com/media/sounds/hea-hea-headshot.mp3\">Monster Kill 3</option>\x0a                </select>\x0a                  \x0a                  <!-- Volume Control without label -->\x0a                  <div class=\"volume-slider-container\">\x0a                    <input type=\"range\" id=\"volume_slider\" min=\"0\" max=\"100\" step=\"1\" value=\"40\">\x0a                    <span id=\"volume_value\" class=\"slider-value\">40</span>\x0a                  </div>\x0a                  \x0a                  <!-- Toggle Switch on far right -->\x0a                <div class=\"sound-toggle\">\x0a                  <label class=\"switch\">\x0a                    <input type=\"checkbox\" id=\"wftsound\" value=\"true\">\x0a                    <span class=\"slider round\"></span>\x0a                  </label>\x0a                </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a            \x0a            <!-- Custom Skin Upload Section -->\x0a            <div class=\"section-title\">Custom Skin</div>\x0a            <div class=\"setting-group\" id=\"div_crsw\">\x0a              <div class=\"setting-group-content\">\x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-file-image\" style=\"color: #ffbb00;\"></i>\x0a                    <label>Skin File.... Only (skin.json)</label>\x0a                  </span>\x0a                  <div style=\"display: flex; flex-grow: 1; gap: 10px;\">\x0a                    <input type=\"file\" accept=\".json\" id=\"fileSkin\" style=\"flex-grow: 1;\" />\x0a                    <button id=\"btn_clear_file\">Clear</button>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a            \x0a            <!-- Audio elements -->\x0a            <audio id=\"s_h\"><source src=\"https://wormx.store/video/hs_2.mp3\" type=\"audio/mpeg\"></audio>\x0a            <audio id=\"monster_kill_sound\"><source src=\"https://wormx.store/video/monster-kill-hahaha.MP3\" type=\"audio/mpeg\"></audio>\x0a            <audio id=\"sound_test_audio\"></audio>\x0a          </div>\x0a          \x0a          <!-- Mobile Settings Tab -->\x0a          <div id=\"mobile-settings-tab\" class=\"tab-content\">\x0a            <h3>Mobile Controls</h3>\x0a            \x0a            <div class=\"setting-group\">\x0a              <div class=\"setting-group-header\">Joystick Settings</div>\x0a              <div class=\"setting-group-content\">\x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-gamepad\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"joystick_checked\">Enable Joystick</label>\x0a                  </span>\x0a                  <label class=\"switch\">\x0a                    <input type=\"checkbox\" id=\"joystick_checked\" checked>\x0a                    <span class=\"slider\"></span>\x0a                  </label>\x0a                </div>\x0a                \x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"joystick_color\">Joystick Color</label>\x0a                  </span>\x0a                  <select id=\"joystick_color\">\x0a                    <option value=\"red\">Red</option>\x0a                    <option value=\"blue\">Blue</option>\x0a                    <option value=\"green\">Green</option>\x0a                    <option value=\"yellow\">Yellow</option>\x0a                    <option value=\"purple\">Purple</option>\x0a                    <option value=\"orange\">Orange</option>\x0a                  </select>\x0a                </div>\x0a                \x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-cog\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"joystick_mode\">Joystick Mode</label>\x0a                  </span>\x0a                  <select id=\"joystick_mode\">\x0a                    <option value=\"static\">Static</option>\x0a                    <option value=\"dynamic\">Dynamic</option>\x0a                  </select>\x0a                </div>\x0a                \x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-map-marker-alt\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"joystick_position\">Position</label>\x0a                  </span>\x0a                  <select id=\"joystick_position\">\x0a                    <option value=\"L\">Left</option>\x0a                    <option value=\"R\">Right</option>\x0a                  </select>\x0a                </div>\x0a                \x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-expand-arrows-alt\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"joystick_size\">Size</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"joystick_size\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\x0a                    <span id=\"joystick_size_value\" class=\"slider-value\">100</span>\x0a                  </div>\x0a                </div>\x0a                \x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"joystick_pxy\">Opacity</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"joystick_pxy\" min=\"50\" max=\"150\" step=\"10\" value=\"100\">\x0a                    <span id=\"joystick_pxy_value\" class=\"slider-value\">100</span>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a            \x0a            <div id=\"config_mobile\">\x0a              <!-- Additional mobile settings will be loaded here -->\x0a            </div>\x0a          </div>\x0a          \x0a          <!-- Laser Settings Tab -->\x0a          <div id=\"sound-laser-settings-tab\" class=\"tab-content\">\x0a            <h3>Laser Settings</h3>\x0a            \x0a            <div class=\"section-title\">Laser Settings</div>\x0a            <div class=\"setting-group\" id=\"div_Laser\">\x0a              <div class=\"setting-group-content\">\x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"Laserup\">Enable Laser</label>\x0a                  </span>\x0a                  <label class=\"switch\">\x0a                    <input type=\"checkbox\" id=\"Laserup\" value=\"true\">\x0a                    <span class=\"slider\"></span>\x0a                  </label>\x0a                </div>\x0a                \x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"laser_color_picker\">Color</label>\x0a                  </span>\x0a                  <input type=\"color\" id=\"laser_color_picker\" value=\"#FFD700\">\x0a                </div>\x0a                \x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"laser_opacity_slider\">Opacity</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"laser_opacity_slider\" min=\"10\" max=\"100\" step=\"10\" value=\"50\">\x0a                    <span id=\"laser_opacity_value\" class=\"slider-value\">50</span>\x0a                    <button id=\"reset_laser_settings\" class=\"reset-btn\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a                \x0a                <div class=\"setting-row\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\x0a                    <label>Keyboard Shortcuts:</label>\x0a                  </span>\x0a                  <div style=\"flex-grow: 1; text-align: right;\">\x0a                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>L</strong> - Toggle laser</span>\x0a                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>O</strong> - Increase opacity</span>\x0a                    <span style=\"display: inline-block; margin-left: 10px;\"><strong>P</strong> - Decrease opacity</span>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a          </div>\x0a          \x0a          <!-- Power-ups Tab -->\x0a          <div id=\"power-ups-tab\" class=\"tab-content\">\x0a            <h3>Power-ups & Zoom Settings</h3>\x0a            \x0a            <div class=\"section-title\">Advanced Controls</div>\x0a            <div class=\"setting-group\">\x0a              <div class=\"setting-group-content\">\x0a                <!-- Spin Fast -->\x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-sync-alt\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"spin_fast_slider\">Spin Fast</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"spin_fast_slider\" min=\"0.3\" max=\"0.6\" step=\"0.1\" value=\"0.5\">\x0a                    <span id=\"spin_fast_value\" class=\"slider-value\">0.5</span>\x0a                    <button class=\"reset-btn\" data-reset=\"spin_fast\" data-default=\"0.5\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a                \x0a                <!-- Power-ups Size -->\x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-expand\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"portion_size_slider\">Power-ups Size</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"portion_size_slider\" min=\"1\" max=\"6\" step=\"1\" value=\"2\">\x0a                    <span id=\"portion_size_value\" class=\"slider-value\">2</span>\x0a                    <button class=\"reset-btn\" data-reset=\"portion_size\" data-default=\"2\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a                \x0a                <!-- Power-ups Aura -->\x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-radiation-alt\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"portion_aura_slider\">Power-ups Aura</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"portion_aura_slider\" min=\"1.2\" max=\"3.2\" step=\"0.2\" value=\"1.2\">\x0a                    <span id=\"portion_aura_value\" class=\"slider-value\">1.2</span>\x0a                    <button class=\"reset-btn\" data-reset=\"portion_aura\" data-default=\"1.2\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a                \x0a                <!-- Food Size -->\x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-apple-alt\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"food_size_slider\">Food Size</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"food_size_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\x0a                    <span id=\"food_size_value\" class=\"slider-value\">2</span>\x0a                    <button class=\"reset-btn\" data-reset=\"food_size\" data-default=\"2\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a                \x0a                <!-- Food Shadow -->\x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-moon\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"food_shadow_slider\">Food Shadow</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"food_shadow_slider\" min=\"0.5\" max=\"3\" step=\"0.5\" value=\"2\">\x0a                    <span id=\"food_shadow_value\" class=\"slider-value\">2</span>\x0a                    <button class=\"reset-btn\" data-reset=\"food_shadow\" data-default=\"2\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a            \x0a            <div class=\"section-title\">Zoom Controls</div>\x0a            <div class=\"setting-group\">\x0a              <div class=\"setting-group-content\">\x0a                <!-- Zoom Speed -->\x0a                <div class=\"slider-control\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-search-plus\" style=\"color: #ffbb00;\"></i>\x0a                    <label for=\"zoom_speed_slider\">Zoom Speed</label>\x0a                  </span>\x0a                  <div class=\"slider-container\">\x0a                    <input type=\"range\" id=\"zoom_speed_slider\" min=\"0.001\" max=\"0.01\" step=\"0.001\" value=\"0.003\">\x0a                    <span id=\"zoom_speed_value\" class=\"slider-value\">0.003</span>\x0a                    <button class=\"reset-btn\" data-reset=\"zoom_speed\" data-default=\"0.003\">\x0a                      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\x0a                        <path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"></path>\x0a                        <path d=\"M3 3v5h5\"></path>\x0a                      </svg>\x0a                    </button>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a            \x0a            <div id=\"div_game_enhancements\"></div>\x0a          </div>\x0a          \x0a          <!-- Messages Tab -->\x0a            <div id=\"messages-tab\" class=\"tab-content\">\x0a              <h3>Messages</h3>\x0a              \x0a              <!-- Default Kill&Headshot Toggle -->\x0a              <div class=\"setting-group\">\x0a                <div class=\"setting-group-header\">\x0a                  <div class=\"header-with-toggle\">\x0a                    <span>Kill&Headshot Settings</span>\x0a                    <div class=\"toggle-container\">\x0a                      <span class=\"theo-game-label\">\x0a                        <i class=\"fas fa-skull\" style=\"color: #ffbb00;\"></i>\x0a                        <label>Default Kill&Headshot</label>\x0a                      </span>\x0a                      <label class=\"switch\">\x0a                        <input type=\"checkbox\" id=\"wftiq\" value=\"true\">\x0a                        <span class=\"slider\"></span>\x0a                      </label>\x0a                    </div>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a              \x0a              <!-- New Messages Layout -->\x0a              <div class=\"setting-group\">\x0a                <div class=\"setting-group-header\">Messages</div>\x0a                <div class=\"setting-group-content\">\x0a                  <div class=\"messages-container\" id=\"custom-messages-container\">\x0a                    <!-- Left side: Kill Messages -->\x0a                    <div class=\"message-column\">\x0a                      <div class=\"message-header\">\x0a                        <i class=\"fas fa-crosshairs\" style=\"color: #ffbb00;\"></i>\x0a                        <span>Kill Messages</span>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-select-container\">\x0a                        <select id=\"kill_msg\" class=\"message-select\">\x0a                          <option value=\"KILLED\">KILLED</option>\x0a                          <option value=\"WASTED\">WASTED</option>\x0a                          <option value=\"ELIMINATED\">ELIMINATED</option>\x0a                          <option value=\"DESTROYED\">DESTROYED</option>\x0a                          <option value=\"FINISHED\">FINISHED</option>\x0a                          <option value=\"Well Done!\">Well Done!</option>\x0a                        </select>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-option\">\x0a                        <span>Show Player Name</span>\x0a                        <label class=\"switch small-switch\">\x0a                          <input type=\"checkbox\" id=\"kill_show_name\" checked>\x0a                          <span class=\"slider\"></span>\x0a                        </label>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-option\">\x0a                        <select id=\"kill_name_position\" class=\"message-select\">\x0a                          <option value=\"after\">After Message</option>\x0a                          <option value=\"before\">Before Message</option>\x0a                        </select>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-custom\">\x0a                        <label for=\"kill_custom_text\" class=\"custom-label\">Custom Message</label>\x0a                        <input type=\"text\" id=\"kill_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\x0a                      </div>\x0a                    </div>\x0a                    \x0a                    <!-- Right side: Headshot Messages -->\x0a                    <div class=\"message-column\">\x0a                      <div class=\"message-header\">\x0a                        <i class=\"fas fa-bullseye\" style=\"color: #ffbb00;\"></i>\x0a                        <span>Headshot Messages</span>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-select-container\">\x0a                        <select id=\"headshot_msg\" class=\"message-select\">\x0a                          <option value=\"HEADSHOT\">HEADSHOT</option>\x0a                          <option value=\"BOOM! HEADSHOT\">BOOM! HEADSHOT</option>\x0a                          <option value=\"PERFECT AIM\">PERFECT AIM</option>\x0a                          <option value=\"CRITICAL HIT\">CRITICAL HIT</option>\x0a                          <option value=\"BULLSEYE\">BULLSEYE</option>\x0a                        </select>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-option\">\x0a                        <span>Show Player Name</span>\x0a                        <label class=\"switch small-switch\">\x0a                          <input type=\"checkbox\" id=\"headshot_show_name\" checked>\x0a                          <span class=\"slider\"></span>\x0a                        </label>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-option\">\x0a                        <select id=\"headshot_name_position\" class=\"message-select\">\x0a                          <option value=\"after\">After Message</option>\x0a                          <option value=\"before\">Before Message</option>\x0a                        </select>\x0a                      </div>\x0a                      \x0a                      <div class=\"message-custom\">\x0a                        <label for=\"headshot_custom_text\" class=\"custom-label\">Custom Message</label>\x0a                        <input type=\"text\" id=\"headshot_custom_text\" maxlength=\"20\" placeholder=\"Maximum 20 characters\" class=\"custom-input\">\x0a                      </div>\x0a                    </div>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a              \x0a              <div id=\"div_messages\"></div>\x0a            </div>\x0a          \x0a          <!-- Backgrounds Tab -->\x0a          <div id=\"backgrounds-tab\" class=\"tab-content\">\x0a            <h3>Game Backgrounds</h3>\x0a            \x0a            <!-- Sector System Section -->\x0a            <div class=\"section-title\">Sector System</div>\x0a            <div class=\"sector-system-container\">\x0a              <div class=\"sector-toggle-row\">\x0a                <span class=\"theo-game-label\">\x0a                  <i class=\"fas fa-th-large\" style=\"color: #ffbb00;\"></i>\x0a                  <div class=\"toggle-label\">Enable Sector System</div>\x0a                </span>\x0a                <label class=\"toggle-switch\">\x0a                  <input type=\"checkbox\" id=\"sector_system_toggle\">\x0a                  <span class=\"toggle-slider\"></span>\x0a                </label>\x0a              </div>\x0a              \x0a              <!-- Settings Panel - Hidden until enabled -->\x0a              <div id=\"sector_settings_panel\" class=\"sector-settings-panel\" style=\"display: none;\">\x0a                <div class=\"sector-main-settings\">\x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-grip-horizontal\" style=\"color: #ffbb00;\"></i>\x0a                      <div class=\"setting-label\">Display Mode</div>\x0a                    </span>\x0a                    <div class=\"setting-control\">\x0a                      <select id=\"sector_display_mode\" class=\"sector-select\">\x0a                        <option value=\"sectors\">Sectors (12)</option>\x0a                        <option value=\"quarters\">Quarters (4)</option>\x0a                      </select>\x0a                    </div>\x0a                  </div>\x0a            \x0a                  <!-- Background Settings -->\x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-fill-drip\" style=\"color: #ffbb00;\"></i>\x0a                      <div class=\"setting-label\">Background Color</div>\x0a                    </span>\x0a                    <div class=\"setting-control\">\x0a                      <input type=\"color\" id=\"sector_bg_color\" value=\"#000000\" class=\"color-picker\">\x0a                    </div>\x0a                  </div>\x0a                  \x0a                  <!-- Background Opacity - Always visible -->\x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-adjust\" style=\"color: #ffbb00;\"></i>\x0a                      <div class=\"setting-label\">Background Opacity</div>\x0a                    </span>\x0a                    <div class=\"setting-control opacity-control\">\x0a                      <input type=\"range\" id=\"sector_bg_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"60\" class=\"small-slider\">\x0a                      <div class=\"slider-value\" id=\"sector_bg_opacity_value\">60%</div>\x0a                    </div>\x0a                  </div>\x0a            \x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-border-style\" style=\"color: #ffbb00;\"></i>\x0a                      <div class=\"setting-label\">Show Lines</div>\x0a                    </span>\x0a                    <div class=\"setting-control\">\x0a                      <label class=\"toggle-switch\">\x0a                        <input type=\"checkbox\" id=\"sector_show_lines\" checked>\x0a                        <span class=\"toggle-slider\"></span>\x0a                      </label>\x0a                    </div>\x0a                  </div>\x0a                </div>\x0a            \x0a                <!-- Lines Options - Hidden when Show Lines is off -->\x0a                <div id=\"sector_lines_options\" class=\"sector-lines-options\">\x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-palette\" style=\"color: #ffbb00;\"></i>\x0a                      <div class=\"setting-label\">Line Color</div>\x0a                    </span>\x0a                    <div class=\"setting-control\">\x0a                      <input type=\"color\" id=\"sector_line_color\" value=\"#FF0000\" class=\"color-picker\">\x0a                    </div>\x0a                  </div>\x0a            \x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-low-vision\" style=\"color: #ffbb00;\"></i>\x0a                      <div class=\"setting-label\">Line Opacity</div>\x0a                    </span>\x0a                    <div class=\"setting-control opacity-control\">\x0a                      <input type=\"range\" id=\"sector_line_opacity\" min=\"0\" max=\"100\" step=\"5\" value=\"30\" class=\"small-slider\">\x0a                      <div class=\"slider-value\" id=\"sector_line_opacity_value\">30%</div>\x0a                    </div>\x0a                  </div>\x0a                </div>\x0a            \x0a                <div class=\"sector-shortcuts\">\x0a                  <span class=\"theo-game-label\">\x0a                    <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\x0a                    <div class=\"shortcuts-title\">Keyboard Shortcuts:</div>\x0a                  </span>\x0a                  <div class=\"shortcuts-content\">\x0a                    <span class=\"shortcut-item\"><strong>S</strong> or <strong>=</strong> - Toggle Sectors</span>\x0a                    <span class=\"shortcut-item\"><strong>X</strong> - Toggle Quarters</span>\x0a                  </div>\x0a                </div>\x0a              </div>\x0a            </div>\x0a            \x0a            <div class=\"background-grid\">\x0a              <!-- Background items will be added dynamically -->\x0a            </div>\x0a          </div>\x0a          \x0a        <!-- Cursors Tab -->\x0a        <div id=\"cursors-tab\" class=\"tab-content\">\x0a          <h3>Game Cursors</h3>\x0a          \x0a          <!-- Ø§Ù„Ø¹Ù†ÙˆØ§Ù† ÙÙŠ Ø³Ø·Ø± -->\x0a          <div class=\"setting-row\">\x0a            <span class=\"theo-game-label\">\x0a              <i class=\"fas fa-mouse-pointer\" style=\"color: #ffbb00;\"></i>\x0a              <label>Cursor Selection</label>\x0a            </span>\x0a          </div>\x0a          \x0a          <!-- Ø§Ù„Ø²Ø± ÙÙŠ Ø³Ø·Ø± Ù…Ù†ÙØµÙ„ -->\x0a          <div class=\"setting-row cursor-controls\">\x0a            <button id=\"default-cursor-btn\" class=\"secondary-button\">Default Cursor</button>\x0a            <span id=\"current-cursor-name\">Current: Electrical Plug Cursor</span>\x0a          </div>\x0a          \x0a          <div class=\"cursor-container\">\x0a            <!-- Ø§Ù„Ù…Ø¤Ø´Ø±Ø§Øª Ø³ØªØ¶Ø§Ù Ø¯ÙŠÙ†Ø§Ù…ÙŠÙƒÙŠØ§Ù‹ Ù‡Ù†Ø§ -->\x0a          </div>\x0a          \x0a          <div id=\"div_cursors\"></div>\x0a        </div>\x0a          \x0a          <!-- About Tab -->\x0a          <div id=\"about-tab\" class=\"tab-content\">\x0a            <h3>About WFT</h3>\x0a            \x0a            <div class=\"about-content\">\x0a              <p>\x0a                <i class=\"fas fa-info-circle\" style=\"color: #ffbb00;\"></i>\x0a                WFT: Enhance Your Wormate.io Experience\x0a                [WFT] is a Chrome extension designed to improve your wormate.io gameplay. Quickly select rooms, customize your worm with vibrant skin colors, and enjoy extra features to enhance your experience.\x0a              </p>\x0a              <p>\x0a                <i class=\"fas fa-calendar-alt\" style=\"color: #ffbb00;\"></i>\x0a                Release Date: 30/03/2025.\x0a              </p>\x0a              <p>\x0a                <i class=\"fas fa-code-branch\" style=\"color: #ffbb00;\"></i>\x0a                Version: 2.0.1\x0a                  <div class=\"button-group\">\x0a               <button id=\"resetScript\" class=\"reset-button\">Versiyon Change</button>\x0a              </p>\x0a              <p>\x0a                <i class=\"fas fa-users\" style=\"color: #ffbb00;\"></i>\x0a                Designed by:  WFT-Team Team !\x0a              </p>\x0a              \x0a              <p style=\"margin-top: 20px;\">\x0a                <i class=\"fas fa-keyboard\" style=\"color: #ffbb00;\"></i>\x0a                <strong>Keyboard Shortcuts:</strong><br>\x0a                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>L</strong> - Toggle laser</span>\x0a                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>O</strong> - Increase laser opacity</span>\x0a                <span style=\"display: inline-block; margin-right: 15px; margin-top: 5px;\"><strong>P</strong> - Decrease laser opacity</span>\x0a              </p>\x0a              \x0a              <!-- User ID Section -->\x0a              <div class=\"setting-group\">\x0a                <div class=\"setting-group-content\">\x0a                  <div class=\"setting-row\">\x0a                    <span class=\"theo-game-label\">\x0a                      <i class=\"fas fa-id-card\" style=\"color: #ffbb00;\"></i>\x0a                      <label for=\"id_customer\">ID: </label>\x0a                    </span>\x0a                    <input value=\"', 'addClass', 'hover', '<div class=\"player-tooltip\"></div>', 'find', 'toLowerCase', 'index.game.social.shareResult.messGood', '<style>#open-favorites-btn { position: absolute; top: 10px; right: 10px; background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; z-index: 1000; }#open-favorites-btn:hover { background: #45a049; }</style>', 'dynamic', '#mm-player-exp-val', 'glassesId', 'feed', 'skinData', ':selected', 'cmd', 'login', '.dd-selected', 'UmVjdGFuZ2xl', '#skin-info-text', 'mo1', 'KILL', '#addflag', 'portion_size', '_cpuMonitoringInterval', 'Pizza Slice Cursor ', 'servers-mexico', 'top', 'display', 'pk3', '#joystick_size_value', '\" style=\"max-width: 200px; width: 200px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; margin-right: 10px;\" type=\"text\" id=\"id_customer\" readonly>\x0a           <button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText(\'', '#final-replay', 'messages-disabled', 'wormate-io_970x250', 'highScore', 'openSettingsModal', 'AIP_REMOVE', '<div></div>', '\" />', 'target=\"_black\" href', 'Red Lipstick Cursor', '#e03e42', 'score', 'get', '[By YÄ±Ldo OWNER]', 'deltaY', '; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = uv * vec2(1.0, 1.0); v2 = v2 * vec2(1.0, 1.0); ', 'show', 'https://wormx.store/images/arkaplan/bg3.jpg', '/images/def-look.png', '.server-region', '/get_store.phpitem=moo_4.png', 'lineColor', '/images/cors-proxy.phpimg=cursors/17.png', 'pk1', '#mm-line-bottom', '/images/guest-avatar-valday2024.png', '#sector_line_color', 'checked', 'baseTexture', 'uri', '#port_name', 'onopen', 'Servidor ', '.toaster-coins-close', 'zIndex', 'hasOwnProperty', 'servers-japon', 'default', 'updateDisplays', 'hat-info-text', '/images/cors-proxy.phpimg=flg/default-server.png', 'value', 'btnRePlay', 'constructor', 'remove', '187WZyijH', 'div_killmsg', 'call', '_originalFontSize', '_display', 'getElementsByTagName', '</div><div class=\"toaster-levelup-close\">', '#wear-mouths-button', 'floor', '/images/cors-proxy.phpimg=cursors/11.png', 'ltmolilci1iurq1i', 'PortionTransparent', '50%', 'loaded', 'save', 's_kill', '<div id=\'final-replay\'>Replay</div>', 'portionUnknown', '#reset_laser_settings', '#store-buy-coins_1250', 'clickOffToClose', '.                       .', 'enableJSClass', 'querySelectorAll', 'ctrl', '#headshot_msg', 'joystick_position', '; gl_Position=vec4((', 'not_empty', 'setInt8', 'selected', '<input type=\"hidden\" id=\"port_name_s\" value=\"\">', '/get_store.phpitem=bg_sky_10.png', '[data-index]', 'scrollTo', 'pxy', '#server-link-tooltip', '#headshot_show_name', 'isActive', 'byLevel', 'svg', 'a1_', '<div id=\'', 'https://wormx.store/2025/check/index.php', 'isCustom', 'sel_top', 'texture', 'playerX', 'Red Pepper Cursor', 'killNamePos', ' / ', '#port_name_s', 'push', 'shown', '#mm-skin-canv', '.clear-all-favorites', 'translationMatrix', '</span>', 'format', 'VlZBPQ==', 'data:image/png;base64,', 'ccg_0', 'hatToggleButton', 'âœ… WebSocket baÄŸlÄ±', 'create', 'interactive', 'ðŸŸ¢ GÃ¶nderildi HS: ', '#markup-footer', 'fbAsyncInit', 'Float32Array', '#profile-stat-bestSurvivalTime', ':visible', 'note', 'beforeunload', '.servers-', 'hskill', 'game-view', 'html', 'title', 'showSelectedHTML', 'EYES', '/get_store.phpitem=moo_2.png', 'ZDI5eWJYVnc=', 'appendChild', '\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">', '#sound-laser-settings-tab, #sound_effect_selector, #monster_kill_selector, #volume_slider', 'headshotNamePos', '<div style=\'text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;\'>You don\'t have any favorite skins yet.</div>', ', 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = ', '#chat-history', 'drawSectors', 'fn_o', 'pageY', 'hatVariantArray', '<div id=\"image-tooltip\" class=\"image-tooltip\"></div>', 'empty', '9999', 'playerDisconnect', 'Strawberry and Chocolate Ice Cream Cursor', 'V1JBUF9NT0RFUw==', 'game', 'Cambodia', 'pk2', 'cssText', 'stop', 'wftPulseEnabled', 'decoder', 'delete', '#game-canvas', 'obj', 'cpuSampleSize', 'es_ES', 'off', 'container_count', 'data:', 'buttonMode', '#wear-view', 'Current: ', 'R2VvbWV0cnk=', '0lt0', 'orig', 'rel', 'removeHatButtons', 'keydown', '_0x4c9ec5', 'TextStyle', 'backgroundAlpha', '.green-dot', 's_w', 'laserGraphics', '4px', '#e74a94', 'mousemove', 'measureCpuUsage', '#FFFFFF', 'avatarUrl', 'enemyNameHs', '<div id=\"server-link-tooltip\"></div>', 'index.game.antiadblocker.continue', 'displayNumber', '.fav-buttons-container', 'Galaxy Star', '#wear-eyes-button', 'currentFavSkinIndex', 'updatePacketInterval', '22px', 'normal', 'sin', 'modalFixed', 'location', 'Roasting Marshmallow Cursor', '#store-locked-bar', '&glassesId=', 'ARENA', 'settings', 'toggleMode', 'WebSocket baÄŸlÄ± deÄŸil.', ' * ', 'laserOptions', 'data-server-image', 'custom_wear', '#custom-messages-container', 'flag', '</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">', 'antiadblocker', '4289sTPgqA', 'flag ', 'label_hs', 'transparent', 'overflow', 'setAttribute', '\').then(()=> alert(\'Your ID ', 'keypress', 'abilityUnknown', 'Thailand', 'websockets', 'setupKeyboardControls', 'https://wormx.store', 'portion_aura', 'outerHeight', 'monster_kill_sound', 'LOADING_TEXT', 'reduce', '#aaa', '#toaster-stack', 'http', 'background', 'type', '-</td>\x0a          <td class=\"name\">', '/login', '</button> \x0a    <div id=\"modal_wft\" class=\"modal\"> \x0a      <div class=\"modal-content wft-modal\" style=\"max-width: 360px !important; width: 360px !important;\"> \x0a        <div class=\"center wft-header\" style=\"background-color: #ff8a18; background: linear-gradient(145deg, rgb(255, 141, 0), rgb(255, 102, 0)); padding: 0 15px; height: 36px; line-height: 36px; border-radius: 8px 8px 0 0; position: relative; text-align: center;\"> \x0a          <span class=\"close\" style=\"position: absolute; left: 15px; top: 6px; color: white; font-size: 24px; font-weight: bold; cursor: pointer;\">Ã—</span> \x0a          <h2 class=\"modal-title\" style=\"margin: 0; font-size: 18px; color: white;\">Settings</h2>\x0a        </div> \x0a        <div id=\"modal_wft_body\" class=\"modal-body wft-body\" style=\"padding: 15px; background-color: #1e2339; color: #fff; border-radius: 0 0 8px 8px;\">\x0a          <!-- Ø³ÙŠØªÙ… ØªØ­Ø¯ÙŠØ« Ø§Ù„Ù…Ø­ØªÙˆÙ‰ -->\x0a        </div> \x0a      </div>\x0a    </div>\x0a  ', 'prototype', 'eyesDict', '#mm-event-text', ' page', 'altKey', 'data-server-name', 'replaceAll', 'mo2', '#restricted-view', 'index.game.main.menu.unlockSkins.share', 'view', 'Z2V0SW50MzI=', '/images/cors-proxy.phpimg=cursors/20.png', 'getRegistrations', 'Ù†Ø¸ÙŠÙ', '    <button id=\"op_wft\" class=\"op_wft\">', 'headshot', 'preventDefault', 'Z2V0SW50OA==', 'bestSurvivalTimeSec', 'c_5', 'dropShadowBlur', 'outerWidth', 'gdprConsent', 'pressed', '#final-share-fb', '\" style=\"color: ', 'loadSettings', 'c_1', '<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=', 'auto', 'not_connect', 'blendMode', '\" alt=\"', '.switch, .slider-control, .section-title', 'btn_crsw', 'getContext', 'OPEN', 'aqnvgcpz05orkobh', '#sector_bg_opacity_value', '</table>', '/images/cors-proxy.phpimg=flg/fr.png', 'Canada', 'splice', 'PTSans', 'pause', '.settings-sidebar, .settings-layout, .settings-content', 'from', 'hide', '<table>', 'readAsText', 'eie', 'glow', '{0}', 'adplayer', 'file', 'toFixed', 'mouthId', 'offsetWidth', 'console', '/js/nipplejs.min.js', 'fail', 'level', 'portionDict', 'joystick', 'undefined', '#1e1e2f', '#mm-action-guest', 'drawQuarters', 'precision mediump float; attribute vec2 ', '/getUserData', '/get_store.phpitem=bkgnd0.png', 'visible', 'selectSala', 'popup', '.sidebar-item', '8px', 'item', 'joystick_size', 'navigationStart', '#kill_msg', '470px', 'clientX', 'nickname', 'getInt16', '/get_store.phpitem=open_z.png', 'sectors', 'green-dot', 'div', '/images/cors-proxy.phpimg=cursors/19.png', 'fullscreen', '#backgroundArena', 'port_name_s', 'send', '<button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText(\'', 'smoothCamera', 'MULTIPLY', 'max', 'a2_', 'graphics', 'value2_kill', 'closest', '<div id=\"', 'slideUp', 'Ø§Ø®ÙˆÙƒ', 'Error loading laser options:', '[id^=\"sel_\"]', 'offset', 'grid', '_config', 'spin_fast', 'POST', 'urlRequest: ', 'lastCpuTime', 'settings-show-names-switch', '#f9cc0b', 'mouseDelay', '_pulseFunctionInstalled', 'index', 'pointsContainer', '/get_store.phpitem=bg_sky__1.png', 'shared', '/start?gameMode=', 'scriptSeleccionado', 'Nightdots', 'selectedHats', '#5dade6'];
    _0x2562 = function () {
        return _0xf34ba2;
    };
    return _0x2562();
}
const createCircle = function () {
    var _0x115be4 = _0xf7a4ea;
    if (!window[_0x115be4(0x52e)] || typeof window[_0x115be4(0x52e)].playerX === _0x115be4(0x76e) || typeof window[_0x115be4(0x52e)].playerY === 'undefined') return;
    let _0x2bfad4 = _0x115be4(0x40d);
    if (lastKnownCoords.x !== null) {
        const _0x1d054f = Math[_0x115be4(0x44c)](Math[_0x115be4(0x3ee)](window.coords.playerX - lastKnownCoords.x, 0x2) + Math[_0x115be4(0x3ee)](window[_0x115be4(0x52e)][_0x115be4(0x391)] - lastKnownCoords.y, 0x2));
        _0x1d054f > 0x64 && (ctx[_0x2bfad4] && (ctx[_0x115be4(0x7a4)] && ctx[_0x115be4(0x7a4)][_0x115be4(0x4b3)].includes(ctx[_0x2bfad4]) && ctx[_0x115be4(0x7a4)].removeChild(ctx[_0x2bfad4]), ctx[_0x2bfad4] = null), blinkTimerId && (clearInterval(blinkTimerId), blinkTimerId = null), removeMarkTimerId && (clearTimeout(removeMarkTimerId), removeMarkTimerId = null));
    }
    lastKnownCoords.x = window.coords[_0x115be4(0x69d)], lastKnownCoords.y = window[_0x115be4(0x52e)][_0x115be4(0x391)];
    if (!ctx[_0x2bfad4]) {
        ctx[_0x2bfad4] = new PIXI.Text('X', ctx.fontStyle.blanco), ctx[_0x2bfad4][_0x115be4(0x663)] = 0x2, ctx[_0x2bfad4][_0x115be4(0x8c4)] = 0.9, ctx[_0x2bfad4][_0x115be4(0x1cc)].set(0.5, 0.5);
        ctx[_0x115be4(0x7a4)] && (ctx.pointsContainer[_0x115be4(0x8c1)] = true, ctx.pointsContainer[_0x115be4(0x663)] = 0x2);
        if (!blinkTimerId) {
            let _0x449c4b = true;
            blinkTimerId = setInterval(() => {
                var _0x40bc05 = _0x115be4;
                ctx[_0x2bfad4] ? (_0x449c4b = !_0x449c4b, ctx[_0x2bfad4][_0x40bc05(0x775)] = _0x449c4b) : (clearInterval(blinkTimerId), blinkTimerId = null);
            }, 0x1f4);
        }!removeMarkTimerId && (removeMarkTimerId = setTimeout(() => {
            var _0x5b2e72 = _0x115be4;
            ctx[_0x2bfad4] && (ctx.pointsContainer && ctx[_0x5b2e72(0x7a4)][_0x5b2e72(0x4b3)][_0x5b2e72(0x7b8)](ctx[_0x2bfad4]) && ctx[_0x5b2e72(0x7a4)][_0x5b2e72(0x22e)](ctx[_0x2bfad4]), ctx[_0x2bfad4] = null), blinkTimerId && (clearInterval(blinkTimerId), blinkTimerId = null), removeMarkTimerId = null;
        }, 0x4e20));
    }
    ctx[_0x2bfad4] && (ctx[_0x2bfad4].x = window[_0x115be4(0x52e)][_0x115be4(0x69d)], ctx[_0x2bfad4].y = window[_0x115be4(0x52e)][_0x115be4(0x391)], ctx[_0x115be4(0x7a4)] && !ctx.pointsContainer.children[_0x115be4(0x7b8)](ctx[_0x2bfad4]) && ctx[_0x115be4(0x7a4)][_0x115be4(0x1c1)](ctx[_0x2bfad4])), window.ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah && ooo.Xg.Kf.Wg.Ah.Sh && (ooo.Xg.Kf.Wg.Ah.Sh[_0x115be4(0x663)] = 0x270f, ooo.Xg.Kf.Wg.Ah[_0x115be4(0x8c1)] !== true && (ooo.Xg.Kf.Wg.Ah[_0x115be4(0x8c1)] = true), ooo.Xg.Kf.Wg[_0x115be4(0x8c1)] !== true && (ooo.Xg.Kf.Wg[_0x115be4(0x8c1)] = true));
};

function _typeof(_0x19d1e9) {
    var _0x73403 = _0xf7a4ea;
    return (_typeof = typeof Symbol == _0x73403(0x3d7) && typeof Symbol[_0x73403(0x879)] == _0x73403(0x586) ? function (_0x178fa2) {
        return typeof _0x178fa2;
    } : function (_0x35fb28) {
        var _0x158e73 = _0x73403;
        return _0x35fb28 && typeof Symbol == _0x158e73(0x3d7) && _0x35fb28.constructor === Symbol && _0x35fb28 !== Symbol.prototype ? 'symbol' : typeof _0x35fb28;
    })(_0x19d1e9);
}(function () {
    var _0x823c95 = _0xf7a4ea,
        _0xa914b4 = {},
        _0x30354b = {},
        _0x1a7a89 = {},
        _0x51599b = {};
    _0x1a7a89.a = function (_0xf1c4c5) {
        var _0x5ac800 = _0x1c2b,
            _0x27b260 = new String(),
            _0x34eb01 = parseInt(_0xf1c4c5.substring(0x0, 0x2), 0x10);
        for (var _0x1ba7bb = 0x2; _0x1ba7bb < _0xf1c4c5[_0x5ac800(0x56a)]; _0x1ba7bb += 0x2) {
            var _0x533a22 = parseInt(_0xf1c4c5.substring(_0x1ba7bb, _0x1ba7bb + 0x2), 0x10);
            _0x27b260 += String[_0x5ac800(0x5d7)](_0x533a22 ^ (_0x34eb01 = 0xed1 + _0x34eb01 * 0x11a1 & 0xff));
        };
        return _0x27b260;
    }, _0x1a7a89.b = function (_0x1b3e79) {
        var _0x4165e1 = _0x1c2b;
        return Function(_0x4165e1(0x7ec) + _0x1b3e79 + '; ')();
    }, _0xa914b4.c = _0x1a7a89.b('window'), _0xa914b4.d = _0xa914b4.c[_0x823c95(0x1de)], _0x1a7a89.e = function () {
        var _0x317311 = _0x823c95;
        return _0xa914b4.c[_0x317311(0x24a)] || 0x1;
    }, _0xa914b4.c.addEventListener(_0x823c95(0x4d1), function () {
        var _0x17b28a = _0x823c95;
        let _0x5a0b1f = {
            'eie': null,
            'joystick': {
                'positionMode': 'L',
                'checked': true,
                'size': 0x5a,
                'mode': 'dynamic',
                'position': {
                    'left': _0x17b28a(0x8b0),
                    'bottom': _0x17b28a(0x8b0)
                },
                'color': _0x17b28a(0x4d7),
                'pxy': 0x6e
            },
            'on': false,
            'vj': null,
            'uj': null,
            'm': null,
            'n': null
        };
        var _0x497d4e = {
            'id_user': '',
            'nickname': _0x17b28a(0x445),
            'enemyNameHs': _0x17b28a(0x8d2),
            'teamCode': '',
            'playerX': 0x0,
            'playerY': 0x0,
            'hs': 0x0,
            'kill': 0x0,
            'message': '',
            'teamColor': localStorage[_0x17b28a(0x21e)](_0x17b28a(0x89d)) || _0x17b28a(0x2c9),
            'wssServer': ''
        };
        let _0x47e9db = 0x0;
        const _0xc37da2 = 0x3e8;

        function _0x395464(_0x785ad9) {
            var _0x58adc9 = _0x17b28a;
            const _0x24e3f5 = Date[_0x58adc9(0x4f0)]();
            _0x24e3f5 - _0x47e9db > _0xc37da2 && (debugLog(_0x785ad9), _0x47e9db = _0x24e3f5);
        }
        let _0x231839;
        const _0x10ead6 = {
            'players': new Map()
        };

        function _0x2c73ad() {
            var _0x10bad3 = _0x17b28a;
            _0x231839 && _0x231839.readyState !== WebSocket.CLOSED && (debugLog(_0x10bad3(0x61f)), _0x231839[_0x10bad3(0x869)]()), _0x231839 = new WebSocket(_0x10bad3(0x82f)), _0x231839[_0x10bad3(0x49c)]('open', () => {
                var _0x276c8a = _0x10bad3;
                _0xccce75 = true, debugLog(_0x276c8a(0x6ad));
            }), _0x231839[_0x10bad3(0x49c)](_0x10bad3(0x869), () => {
                var _0x259eb4 = _0x10bad3;
                _0xccce75 = false, debugLog(_0x259eb4(0x50f)), _0x57bb74();
            }), _0x231839[_0x10bad3(0x49c)](_0x10bad3(0x7e6), async _0x2271ae => {
                var _0x193760 = _0x10bad3;
                try {
                    const _0x533f5b = _0x2271ae.data instanceof Blob ? JSON[_0x193760(0x2b2)](await _0x2271ae.data[_0x193760(0x2df)]()) : JSON.parse(_0x2271ae[_0x193760(0x384)]);
                    _0x533f5b[_0x193760(0x729)] === _0x193760(0x8d9) && (_0x10ead6[_0x193760(0x41f)][_0x193760(0x3e2)](_0x533f5b[_0x193760(0x39c)], {
                        'nickname': _0x533f5b[_0x193760(0x780)],
                        'hskill': _0x533f5b[_0x193760(0x6b9)],
                        'teamColor': _0x533f5b[_0x193760(0x89d)] || 0xffffff
                    }), updateTop8Hs()), _0x2ab496(_0x533f5b);
                } catch (_0x3945dc) {
                    console[_0x193760(0x89c)](_0x193760(0x310), _0x3945dc);
                }
            });
        }
        let _0xccce75 = false;
        const _0x593a76 = 0x1388;

        function _0x57bb74() {
            !_0xccce75 && setTimeout(() => {
                _0x2c73ad();
            }, _0x593a76);
        }
        _0x2c73ad(), window[_0x17b28a(0x49c)](_0x17b28a(0x6b7), () => {
            var _0x3ac98f = _0x17b28a;
            _0x231839 && _0x231839[_0x3ac98f(0x546)] === WebSocket[_0x3ac98f(0x752)] && _0x231839.close();
        });

        function _0x2ab496(_0x5b382e) {
            var _0x3c787c = _0x17b28a;
            _0x5b382e[_0x3c787c(0x39c)] === _0x3c787c(0x268) && (createServerMessage(_0x3c787c(0x64e), _0x5b382e[_0x3c787c(0x7e6)]), debugLog(_0x3c787c(0x661) + _0x5b382e.id_user + ' ha enviado un mensaje: ' + _0x5b382e[_0x3c787c(0x7e6)]));
            if (_0x5b382e.wssServer !== _0x497d4e[_0x3c787c(0x5b8)]) return;
            switch (_0x5b382e[_0x3c787c(0x729)]) {
            case _0x3c787c(0x4c2):
                _0x485017(_0x5b382e[_0x3c787c(0x41f)]);
                break;
            case _0x3c787c(0x1e7):
                _0x56c1e9(_0x5b382e);
                break;
            case 'hsKillUpdate':
                _0x5d85e5(_0x5b382e);
                break;
            case _0x3c787c(0x23f):
                _0x5e69d9(_0x5b382e);
                break;
            case _0x3c787c(0x6cf):
                _0x174c88(_0x5b382e.id);
                break;
            default:
                debugLog(_0x3c787c(0x1d5), _0x5b382e);
            }
        }

        function _0x137927() {
            var _0x50a8e0 = _0x17b28a;
            if (!_0xccce75) {
                debugLog(_0x50a8e0(0x7d2));
                return;
            }
            const _0x50efde = $(_0x50a8e0(0x20a)).val()[_0x50a8e0(0x356)]();
            if (_0x50efde === '') return;
            const _0x38f556 = _0x497d4e[_0x50a8e0(0x780)].substring(0x0, 0x10),
                _0x3f2721 = getUserData(_0x497d4e.id_user),
                _0x4f4005 = {
                    'type': 'chatMessage',
                    'id_user': _0x497d4e[_0x50a8e0(0x39c)],
                    'nickname': _0x38f556,
                    'message': _0x50efde,
                    'wssServer': _0x497d4e[_0x50a8e0(0x5b8)],
                    'color': _0x3f2721 ? _0x3f2721[_0x50a8e0(0x4e5)] : _0x50a8e0(0x460),
                    'image': _0x3f2721 ? _0x3f2721[_0x50a8e0(0x7ea)] : _0x50a8e0(0x54b)
                };
            _0x231839[_0x50a8e0(0x78a)](JSON[_0x50a8e0(0x562)](_0x4f4005)), _0x1d9e21(_0x38f556, _0x50efde, _0x497d4e.id_user, _0x4f4005[_0x50a8e0(0x4e5)], _0x4f4005[_0x50a8e0(0x7ea)], true), $(_0x50a8e0(0x20a))[_0x50a8e0(0x1ce)]('');
        }

        function _0x1d9e21(_0x5689fa, _0x2ea8a9, _0x21cdcd, _0x21683d, _0x247b9f, _0x154bb4 = false) {
            var _0x2adcd0 = _0x17b28a;
            const _0x3265bf = _0x247b9f ? _0x2adcd0(0x4cf) + _0x247b9f + _0x2adcd0(0x205) : '',
                _0x2766a6 = _0x154bb4 ? 'lightblue' : _0x2adcd0(0x8af),
                _0x476a78 = _0x2adcd0(0x3fc) + (_0x21683d || _0x2adcd0(0x460)) + _0x2adcd0(0x338) + _0x3265bf + _0x2adcd0(0x54c) + _0x21cdcd + _0x2adcd0(0x747) + _0x2766a6 + '\">' + _0x5689fa + ':</strong>\x0a            <span>' + _0x2ea8a9 + _0x2adcd0(0x7e9);
            $(_0x2adcd0(0x6c7)).append(_0x476a78)[_0x2adcd0(0x5da)]($(_0x2adcd0(0x6c7))[0x0][_0x2adcd0(0x353)]);
        }

        function _0x485017(_0x3e092e) {
            var _0x166225 = _0x17b28a;
            _0x3e092e[_0x166225(0x3a6)](_0x560e9b => _0x10ead6.players.set(_0x560e9b[_0x166225(0x39c)], _0x560e9b)), debugLog('Estado inicial recibido:', _0x3e092e);
        }

        function _0x56c1e9(_0x5216e7) {
            var _0x3b92f3 = _0x17b28a;
            _0x10ead6[_0x3b92f3(0x41f)].set(_0x5216e7[_0x3b92f3(0x39c)], {
                ..._0x5216e7
            }), updateTop8Hs(), _0x5216e7[_0x3b92f3(0x2bd)] === _0x497d4e.teamCode && (createTeamUbication(_0x5216e7[_0x3b92f3(0x2bd)], _0x5216e7[_0x3b92f3(0x89d)]), createTeamMessage(_0x5216e7[_0x3b92f3(0x2bd)], _0x5216e7[_0x3b92f3(0x780)], _0x5216e7[_0x3b92f3(0x7e6)]));
        }

        function _0x5d85e5(_0x50b88c) {
            var _0x40b8f2 = _0x17b28a;
            debugLog(_0x40b8f2(0x332) + _0x50b88c[_0x40b8f2(0x780)]);
            const _0x426f3c = _0x10ead6[_0x40b8f2(0x41f)].get(_0x50b88c[_0x40b8f2(0x39c)]);
            _0x426f3c ? (_0x426f3c.hskill.hs += _0x50b88c[_0x40b8f2(0x6b9)].hs, _0x426f3c.hskill[_0x40b8f2(0x2fe)] += _0x50b88c.hskill.kill) : _0x10ead6[_0x40b8f2(0x41f)][_0x40b8f2(0x3e2)](_0x50b88c[_0x40b8f2(0x39c)], {
                ..._0x50b88c,
                'hskill': {
                    ..._0x50b88c[_0x40b8f2(0x6b9)]
                },
                'position': {
                    'x': 0x0,
                    'y': 0x0
                }
            });
            const _0x79bec6 = _0x10ead6[_0x40b8f2(0x41f)].get(_0x50b88c[_0x40b8f2(0x39c)]);
            debugLog('ðŸ§  Player state:', _0x79bec6), updateTop8Hs();
        }

        function _0x5e69d9(_0x4cd803) {
            var _0x40104f = _0x17b28a;
            _0x10ead6[_0x40104f(0x41f)].delete(_0x4cd803[_0x40104f(0x39c)]), debugLog('El jugador ' + _0x4cd803.nickname + _0x40104f(0x36b)), updateTop8Hs(), clearTeamUbication();
        }

        function _0x174c88(_0x1ac2f6) {
            var _0x595dfa = _0x17b28a;
            _0x10ead6[_0x595dfa(0x41f)][_0x595dfa(0x6d9)](_0x1ac2f6), debugLog(_0x595dfa(0x600) + _0x1ac2f6 + _0x595dfa(0x2ed));
        }

        function _0x45a360(_0x56373a, _0x489346 = {}) {
            var _0x3f677b = _0x17b28a;
            if (!_0xccce75) {
                debugLog(_0x3f677b(0x70a));
                return;
            }
            if (_0x56373a === _0x3f677b(0x1e7) && (!_0x497d4e[_0x3f677b(0x2bd)] || _0x497d4e[_0x3f677b(0x2bd)] === '')) {
                debugLog(_0x3f677b(0x492));
                return;
            }
            const _0x995af6 = {
                'type': _0x56373a,
                'id_user': _0x497d4e.id_user,
                'nickname': _0x497d4e[_0x3f677b(0x780)],
                'enemyNameHs': _0x497d4e[_0x3f677b(0x6f6)],
                'hskill': {
                    'hs': _0x497d4e.hs,
                    'kill': _0x497d4e[_0x3f677b(0x2fe)]
                },
                'position': {
                    'x': _0x497d4e[_0x3f677b(0x69d)],
                    'y': _0x497d4e.playerY
                },
                'message': _0x497d4e[_0x3f677b(0x7e6)],
                'teamCode': _0x497d4e[_0x3f677b(0x2bd)],
                'teamColor': _0x497d4e[_0x3f677b(0x89d)],
                'wssServer': _0x497d4e.wssServer,
                ..._0x489346
            };
            debugLog(_0x3f677b(0x3e0), _0x995af6), _0x231839[_0x3f677b(0x78a)](JSON[_0x3f677b(0x562)](_0x995af6));
        }
        let _0x335855 = 0x0,
            _0xdd8a52 = [];
        const _0x6d2448 = 0x64,
            _0x59b78c = 0xa;

        function _0x3dca07() {
            var _0x1a7c70 = _0x17b28a;
            if (_0xdd8a52[_0x1a7c70(0x56a)] > 0x0) {
                const _0x13a148 = _0xdd8a52[_0x1a7c70(0x758)](0x0, _0x59b78c);
                _0x45a360(_0x1a7c70(0x1e7), {
                    'batch': _0x13a148
                });
            }
        }
        setInterval(() => {
            _0x3dca07();
        }, _0x6d2448);

        function _0x573262(_0x39c7f6, _0x3c10f5) {
            var _0x46f822 = _0x17b28a;
            const _0x4d28f6 = Date[_0x46f822(0x4f0)]();
            if (_0x4d28f6 - _0x335855 < 0x64) return;
            _0x335855 = _0x4d28f6;
            if (!_0x497d4e[_0x46f822(0x2bd)] || _0x497d4e[_0x46f822(0x2bd)] === '') {
                debugLog(_0x46f822(0x600) + _0x497d4e[_0x46f822(0x39c)] + _0x46f822(0x316));
                return;
            }
            _0x497d4e[_0x46f822(0x69d)] = _0x39c7f6, _0x497d4e[_0x46f822(0x391)] = _0x3c10f5, _0xdd8a52[_0x46f822(0x6a2)]({
                'x': _0x39c7f6,
                'y': _0x3c10f5
            }), debugLog(_0x46f822(0x600) + _0x497d4e.id_user + _0x46f822(0x5f8) + _0x39c7f6 + ', ' + _0x3c10f5 + ')');
        }

        function _0x35372e(_0x4f90d3, _0x1572de) {
            var _0x5320c5 = _0x17b28a;
            _0x45a360(_0x5320c5(0x23f), {
                'hskill': {
                    'hs': _0x4f90d3,
                    'kill': _0x1572de
                }
            }), debugLog('Jugador ' + _0x497d4e[_0x5320c5(0x39c)] + _0x5320c5(0x36b));
        }

        function _0x3a1c83(_0x345c89, _0x1314d8) {
            var _0xe04eb4 = _0x17b28a;
            debugLog(_0xe04eb4(0x811)), _0x45a360(_0xe04eb4(0x8d9), {
                'hskill': {
                    'hs': _0x345c89,
                    'kill': _0x1314d8
                }
            }), debugLog(_0xe04eb4(0x6b0) + _0x345c89 + ', Kill: ' + _0x1314d8), debugLog(_0xe04eb4(0x600) + _0x497d4e.id_user + _0xe04eb4(0x8cc) + _0x345c89 + ', Kill ' + _0x1314d8);
        }
        var _0x46cc88;
        let _0x2e052d = {
                's_l': _0x17b28a(0x71f),
                'fullscreen': null,
                'headshot': 0x0,
                's_headshot': 0x0,
                'mobile': false,
                'mo': 0x1,
                'mo1': {
                    'x': -0x1,
                    'y': -0x1
                },
                'mo2': {
                    'x': -0x1,
                    'y': -0x1
                },
                's_kill': 0x0,
                'kill': 0x0,
                'died': 0x0,
                'saveGame': false,
                'forceUseLocalImages': false,
                'localStorageEnabled': true,
                'pm': {},
                'joystick': _0x5a0b1f.joystick,
                'j': null,
                'pk': 0x0,
                'pk0': '',
                'pk1': '',
                'pk2': '',
                'pk3': '',
                'pk4': '',
                'pk5': '',
                'pk6': '',
                'z': 0x1,
                'c_v': 0xde,
                'c_1': _0x17b28a(0x445),
                'c_2': _0x17b28a(0x53f),
                'c_3': _0x17b28a(0x3b3),
                'c_4': _0x17b28a(0x479),
                'c_5': _0x17b28a(0x482),
                'd_1': _0x17b28a(0x6a9),
                'd_2': _0x17b28a(0x38f),
                'd_3': _0x17b28a(0x6c0),
                'd_4': _0x17b28a(0x7c1),
                'd_5': 'VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09',
                'a': 0x0,
                'b': 0x0,
                'c': 0x0,
                'd': 0x0,
                'e': 0x0,
                'f': '',
                'g': 0x24,
                's_w': false,
                's_n': '',
                'v_z': 0x0,
                'h': false,
                'sn': true,
                's': false,
                'hz': false,
                'fz': true,
                'tt': false,
                'vh': false,
                'vp': false,
                'iq': false,
                'ctrl': false,
                'r1': true,
                'sc': 0x0,
                'wi': 0x0,
                'to': 0xa,
                'sm': 0x14,
                'pi': '',
                'pn': '',
                'se': {
                    'a': [],
                    'b': [],
                    'c': [],
                    'd': [],
                    'e': [],
                    'f': [],
                    'g': [],
                    'h': [],
                    'i': [],
                    'j': [],
                    'k': []
                },
                'st': false,
                'hh': 0x0,
                'sh': [],
                'ws': [],
                'we': [],
                'wm': [],
                'wg': [],
                'wh': [],
                'sg': [],
                'gg': null,
                'ig': -0x1,
                'so': 0x1,
                're': false,
                'dg': null
            },
            _0x305f14 = localStorage[_0x17b28a(0x21e)](_0x17b28a(0x4e9));
        if (_0x305f14 && _0x305f14 !== 'null') {
            let _0x398858 = JSON[_0x17b28a(0x2b2)](_0x305f14);
            for (let _0x1e4980 in _0x398858) {
                _0x2e052d[_0x1e4980] = _0x398858[_0x1e4980];
            }
        };
        !_0x2e052d[_0x17b28a(0x3f7)] && (_0x2e052d[_0x17b28a(0x3f7)] = [], localStorage[_0x17b28a(0x510)](_0x17b28a(0x4e9), JSON[_0x17b28a(0x562)](_0x2e052d)));
        _0x2e052d[_0x17b28a(0x6fd)] === undefined && (_0x2e052d[_0x17b28a(0x6fd)] = 0x0, localStorage[_0x17b28a(0x510)](_0x17b28a(0x4e9), JSON.stringify(_0x2e052d)));
        !_0x2e052d[_0x17b28a(0x7aa)] && (_0x2e052d[_0x17b28a(0x7aa)] = [], localStorage[_0x17b28a(0x510)](_0x17b28a(0x4e9), JSON[_0x17b28a(0x562)](_0x2e052d)));
        _0x2e052d.currentHatIndex === undefined && (_0x2e052d[_0x17b28a(0x407)] = 0x0, localStorage[_0x17b28a(0x510)]('SaveGamewft', JSON[_0x17b28a(0x562)](_0x2e052d)));
        !window[_0x17b28a(0x3a3)] && (window[_0x17b28a(0x3a3)] = {});
        try {
            if (localStorage[_0x17b28a(0x609)]) {
                const _0x2b1fd3 = JSON.parse(localStorage[_0x17b28a(0x609)]);
                for (const _0x15933b in _0x2b1fd3) {
                    wftObjects[_0x17b28a(0x664)](_0x15933b) && (wftObjects[_0x15933b] = _0x2b1fd3[_0x15933b]);
                }
            }
        } catch (_0x5046c3) {
            console.error(_0x17b28a(0x435), _0x5046c3);
        };

        function _0x42c68d() {
            var _0x3cb0f2 = _0x17b28a;
            try {
                if (typeof localStorage === _0x3cb0f2(0x76e)) return console.error('Wormx Error 3'), false;
                var _0x1600f7 = localStorage[_0x3cb0f2(0x21e)](_0x3cb0f2(0x818)),
                    _0x316f55 = localStorage[_0x3cb0f2(0x21e)](_0x3cb0f2(0x54a));
                return _0x1600f7 && _0x316f55 ? (typeof _0x2e052d !== _0x3cb0f2(0x76e) && (_0x2e052d[_0x3cb0f2(0x1cd)] = _0x316f55, _0x2e052d[_0x3cb0f2(0x5b0)] = true, localStorage[_0x3cb0f2(0x510)]('SaveGamewft', JSON[_0x3cb0f2(0x562)](_0x2e052d))), true) : (console[_0x3cb0f2(0x308)]('Wormx Error 2'), false);
            } catch (_0x580eaf) {
                return console.error(_0x3cb0f2(0x434), _0x580eaf), false;
            }
        }
        _0x42c68d();
        let _0x16f9d2 = function () {
                var _0x43e859 = _0x17b28a;
                let _0x316eb0 = false;
                _0x2e052d[_0x43e859(0x800)] = false;
                var _0xf3b524 = navigator[_0x43e859(0x2f9)] || navigator[_0x43e859(0x376)] || window.opera;
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0xf3b524) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [_0x43e859(0x274)](_0xf3b524[_0x43e859(0x7ba)](0x0, 0x4))) && (_0x316eb0 = true, _0x2e052d[_0x43e859(0x800)] = true), _0x316eb0;
            },
            _0x12a8a3 = _0x2e052d.z || 0x1,
            _0x2a5224 = _0x2e052d.z;
        Object[_0x17b28a(0x7c8)](_0x2e052d, 'z', {
            'get': function () {
                return _0x2a5224;
            },
            'set': function (_0x428d88) {
                var _0x2fe21d = _0x17b28a;
                Math[_0x2fe21d(0x85c)](_0x428d88 - _0x2a5224) > 0.1 && (console[_0x2fe21d(0x308)](_0x2fe21d(0x3e6), _0x2a5224, 'to', _0x428d88), console[_0x2fe21d(0x8ba)]()), _0x2a5224 = _0x428d88;
            }
        });
        let _0x424cdf = function (_0x2d871b) {
                var _0x9c8c93 = _0x17b28a;
                _0x2e052d[_0x9c8c93(0x76d)] || = _0x5a0b1f[_0x9c8c93(0x76d)], _0x2e052d[_0x9c8c93(0x76d)][_0x9c8c93(0x65c)] = _0x2d871b[_0x9c8c93(0x65c)], localStorage[_0x9c8c93(0x510)]('SaveGamewft', JSON[_0x9c8c93(0x562)](_0x2e052d));
            },
            _0x284bc3 = function (_0x5378f9) {
                var _0x5bc433 = _0x17b28a;
                _0x2e052d[_0x5bc433(0x76d)] || = _0x5a0b1f[_0x5bc433(0x76d)], _0x2e052d[_0x5bc433(0x76d)][_0x5bc433(0x4e5)] = _0x5378f9[_0x5bc433(0x66a)], localStorage[_0x5bc433(0x510)]('SaveGamewft', JSON[_0x5bc433(0x562)](_0x2e052d));
            },
            _0x2f4bdb = function (_0x40a404) {
                var _0x5434b4 = _0x17b28a;
                _0x2e052d[_0x5434b4(0x76d)] || = _0x5a0b1f[_0x5434b4(0x76d)], _0x2e052d[_0x5434b4(0x76d)][_0x5434b4(0x46b)] = _0x40a404.value, localStorage[_0x5434b4(0x510)](_0x5434b4(0x4e9), JSON[_0x5434b4(0x562)](_0x2e052d));
            },
            _0xb0ad01 = function (_0x539b40) {
                var _0x1d06b7 = _0x17b28a;
                _0x2e052d[_0x1d06b7(0x76d)] || = _0x5a0b1f[_0x1d06b7(0x76d)], _0x2e052d.joystick.position = {
                    'left': _0x1d06b7(0x32d),
                    'bottom': _0x1d06b7(0x32d)
                }, _0x539b40.value === 'R' && (_0x2e052d[_0x1d06b7(0x76d)][_0x1d06b7(0x8cf)] = {
                    'right': _0x1d06b7(0x32d),
                    'bottom': _0x1d06b7(0x32d)
                }), _0x2e052d[_0x1d06b7(0x76d)][_0x1d06b7(0x3eb)] = _0x539b40[_0x1d06b7(0x66a)], localStorage[_0x1d06b7(0x510)](_0x1d06b7(0x4e9), JSON[_0x1d06b7(0x562)](_0x2e052d));
            },
            _0x72bd5 = function (_0x56b41e) {
                var _0xaf06b9 = _0x17b28a;
                _0x2e052d.joystick || = _0x5a0b1f[_0xaf06b9(0x76d)], _0x2e052d[_0xaf06b9(0x76d)][_0xaf06b9(0x8cf)] = {
                    'left': (parseInt(_0x56b41e[_0xaf06b9(0x66a)]) + 0xa)[_0xaf06b9(0x3ae)]() + 'px',
                    'bottom': _0x56b41e[_0xaf06b9(0x66a)] + 'px'
                }, _0x2e052d[_0xaf06b9(0x76d)][_0xaf06b9(0x3eb)] === 'R' && (_0x2e052d.joystick[_0xaf06b9(0x8cf)] = {
                    'right': (parseInt(_0x56b41e[_0xaf06b9(0x66a)]) + 0xa).toString() + 'px',
                    'bottom': _0x56b41e[_0xaf06b9(0x66a)] + 'px'
                }), _0x2e052d[_0xaf06b9(0x76d)][_0xaf06b9(0x691)] = _0x56b41e[_0xaf06b9(0x66a)], localStorage[_0xaf06b9(0x510)](_0xaf06b9(0x4e9), JSON[_0xaf06b9(0x562)](_0x2e052d));
            },
            _0x3f7fbd = function (_0x232f94) {
                var _0xbbbd2c = _0x17b28a;
                _0x2e052d.joystick || = _0x5a0b1f[_0xbbbd2c(0x76d)], _0x2e052d.joystick.size = _0x232f94[_0xbbbd2c(0x66a)], localStorage[_0xbbbd2c(0x510)]('SaveGamewft', JSON[_0xbbbd2c(0x562)](_0x2e052d));
            },
            _0x58f6a0 = function (_0x5594cd, _0x4050e3, _0x2de47e, _0xcbee1c, _0x1b0944, _0x57b84e) {
                var _0x43b169 = _0x17b28a;
                let _0x50d339 = {
                    'a': '',
                    'b': 0x0,
                    'c': ''
                };
                _0x5594cd > _0x2e052d.g * 0x64 + 0x64 || _0x5594cd < _0x2e052d.g * 0xa || _0x5594cd === undefined ? (_0x2e052d.a = _0x5594cd, _0x5594cd === undefined && (_0x2e052d.a = Math[_0x43b169(0x676)](Math[_0x43b169(0x2b7)]() * (_0x2e052d.g / 0x9) + (_0x2e052d.g - _0x2e052d.g / 0x9))), _0x50d339.a = '00') : (_0x2e052d.a = _0x5594cd - _0x2e052d.g * 0xa, _0x50d339.b = _0x2e052d.a, _0x2e052d.a = _0x2e052d.a % (_0x2e052d.g / 0x9), _0x50d339.b = (_0x50d339.b - _0x2e052d.a) / (_0x2e052d.g / 0x9) + 0x1, _0x2e052d.a = _0x2e052d.a + (_0x2e052d.g - _0x2e052d.g / 0x9), _0x50d339.a = _0x50d339.b[_0x43b169(0x3ae)](_0x2e052d.g)[_0x43b169(0x217)](0x2, 0x0));
                _0x4050e3 > _0x2e052d.g * 0x14 || _0x4050e3 < _0x2e052d.g / 0x9 * 0x64 || _0x4050e3 === undefined ? _0x4050e3 > _0x2e052d.g * 0x14 && _0x4050e3 < _0x2e052d.g * 0x1e ? (_0x2e052d.b = _0x4050e3 - _0x2e052d.g * 0x14, _0x50d339.a = _0x50d339.a + _0x2e052d.b[_0x43b169(0x3ae)](_0x2e052d.g), _0x2e052d.b = 0x0, _0x50d339.c = _0x50d339.c + '1') : (_0x2e052d.b = _0x4050e3, _0x4050e3 === undefined && (_0x2e052d.b = 0x0), _0x50d339.a = _0x50d339.a + '0', _0x50d339.c = _0x50d339.c + '0') : (_0x2e052d.b = _0x4050e3 - _0x2e052d.g / 0x9 * 0x64 + _0x2e052d.g / _0x2e052d.g, _0x50d339.a = _0x50d339.a + _0x2e052d.b[_0x43b169(0x3ae)](_0x2e052d.g), _0x2e052d.b = 0x0, _0x50d339.c = _0x50d339.c + '0');
                _0x2de47e > _0x2e052d.g * 0x14 || _0x2de47e < _0x2e052d.g / 0x9 * 0x64 || _0x2de47e === undefined ? _0x2de47e > _0x2e052d.g * 0x14 && _0x2de47e < _0x2e052d.g * 0x1e ? (_0x2e052d.c = _0x2de47e - _0x2e052d.g * 0x14, _0x50d339.a = _0x50d339.a + _0x2e052d.c.toString(_0x2e052d.g), _0x2e052d.c = 0x0, _0x50d339.c = _0x50d339.c + '1') : (_0x2e052d.c = _0x2de47e, _0x2de47e === undefined && (_0x2e052d.c = 0x0), _0x50d339.a = _0x50d339.a + '0', _0x50d339.c = _0x50d339.c + '0') : (_0x2e052d.c = _0x2de47e - _0x2e052d.g / 0x9 * 0x64 + _0x2e052d.g / _0x2e052d.g, _0x50d339.a = _0x50d339.a + _0x2e052d.c[_0x43b169(0x3ae)](_0x2e052d.g), _0x2e052d.c = 0x0, _0x50d339.c = _0x50d339.c + '0');
                _0xcbee1c > _0x2e052d.g * 0x14 || _0xcbee1c < _0x2e052d.g / 0x9 * 0x64 || _0xcbee1c === undefined ? _0xcbee1c > _0x2e052d.g * 0x14 && _0xcbee1c < _0x2e052d.g * 0x1e ? (_0x2e052d.d = _0xcbee1c - _0x2e052d.g * 0x14, _0x2e052d.d[_0x43b169(0x3ae)](_0x2e052d.g) === 'N' ? _0x50d339.a = _0x50d339.a + '0' : _0x50d339.a = _0x50d339.a + _0x2e052d.d.toString(_0x2e052d.g), _0x2e052d.d = 0x0, _0x50d339.c = _0x50d339.c + '1') : (_0x2e052d.d = _0xcbee1c, _0xcbee1c === undefined && (_0x2e052d.d = 0x0), _0x50d339.a = _0x50d339.a + '0', _0x50d339.c = _0x50d339.c + '0') : (_0x2e052d.d = _0xcbee1c - _0x2e052d.g / 0x9 * 0x64 + _0x2e052d.g / _0x2e052d.g, _0x2e052d.d[_0x43b169(0x3ae)](_0x2e052d.g) === 'N' ? _0x50d339.a = _0x50d339.a + '0' : _0x50d339.a = _0x50d339.a + _0x2e052d.d[_0x43b169(0x3ae)](_0x2e052d.g), _0x2e052d.d = 0x0, _0x50d339.c = _0x50d339.c + '0');
                if (_0x1b0944 > _0x2e052d.g * 0x14 || _0x1b0944 < _0x2e052d.g / 0x9 * 0x64 || _0x1b0944 === undefined) {
                    if (_0x1b0944 > _0x2e052d.g * 0x14 && _0x1b0944 < _0x2e052d.g * 0x1e) {
                        _0x50d339.b = _0x2e052d.g / _0x2e052d.g;
                        if (_0x1b0944 <= _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1)) _0x2e052d.e = _0x1b0944 - _0x2e052d.g * 0x14;
                        else {
                            if (_0x1b0944 <= _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1) * 0x2) _0x50d339.b = _0x50d339.b * 0x2, _0x2e052d.e = _0x1b0944 - _0x2e052d.g * 0x14 - (_0x2e052d.g - 0x1);
                            else {
                                if (_0x1b0944 <= _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1) * 0x3) _0x2e052d.e = _0x1b0944 - _0x2e052d.g * 0x14 - (_0x2e052d.g - 0x1) * 0x2;
                                else _0x1b0944 <= _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1) * 0x4 ? (_0x50d339.b = _0x50d339.b * 0x2, _0x2e052d.e = _0x1b0944 - _0x2e052d.g * 0x14 - (_0x2e052d.g - 0x1) * 0x3) : _0x2e052d.e = 0x0;
                            }
                        }
                        _0x2e052d.e >= _0x2e052d.g && (_0x50d339.b = 0x2, _0x2e052d.e = _0x2e052d.e - (_0x2e052d.g - 0x1)), _0x50d339.a = _0x50d339.a + _0x2e052d.e[_0x43b169(0x3ae)](_0x2e052d.g), _0x2e052d.e = 0x0, _0x50d339.c = _0x50d339.c + '1';
                    } else _0x2e052d.e = _0x1b0944, _0x1b0944 === undefined && (_0x2e052d.e = 0x0), _0x50d339.a = _0x50d339.a + '0', _0x50d339.c = _0x50d339.c + '0', _0x50d339.b = 0x0;
                } else _0x50d339.b = _0x2e052d.g / _0x2e052d.g, _0x1b0944 - _0x2e052d.g / 0x9 * 0x64 + 0x1 >= _0x2e052d.g ? (_0x2e052d.e = _0x1b0944 - (_0x2e052d.g / 0x9 * 0x64 + (_0x2e052d.g - 0x1)), _0x50d339.b = _0x50d339.b * 0x2) : _0x2e052d.e = _0x1b0944 - _0x2e052d.g / 0x9 * 0x64 + _0x50d339.b, _0x50d339.a = _0x50d339.a + _0x2e052d.e[_0x43b169(0x3ae)](_0x2e052d.g), _0x2e052d.e = 0x0, _0x50d339.c = _0x50d339.c + '0';
                if (_0x50d339.a == _0x43b169(0x412)) _0x2e052d.f = _0x57b84e.substr(0x0, 0x16)[_0x43b169(0x852)](0x16);
                else {
                    let _0x2fa40a = parseInt(_0x50d339.c, 0x2);
                    _0x1b0944 > 0x316 && _0x1b0944 <= 0x35c && (_0x2fa40a += 0x10), _0x50d339.b <= 0x1 ? _0x50d339.a = _0x50d339.a[_0x43b169(0x7ba)](0x0, 0x5) + '.' + _0x50d339.a.substr(0x5, 0x1) : _0x50d339.a = _0x50d339.a.substr(0x0, 0x4) + '.' + _0x50d339.a[_0x43b169(0x7ba)](0x4, 0x2), _0x57b84e == '' && (_0x57b84e = _0x43b169(0x683)), _0x50d339.c == _0x43b169(0x86d) ? (_0x57b84e[_0x43b169(0x7ba)](0x17, 0x1) == '.' && (_0x57b84e = _0x57b84e[_0x43b169(0x7ba)](0x0, 0x17)[_0x43b169(0x852)](0x17) + ' ' + _0x57b84e[_0x43b169(0x7ba)](0x18, 0x1).padEnd(0x1)), _0x2e052d.f = (_0x57b84e[_0x43b169(0x56a)] >= 0x20 ? _0x57b84e[_0x43b169(0x7ba)](0x0, 0x19) : _0x57b84e[_0x43b169(0x7ba)](0x0, 0x19).padEnd(0x19)) + _0x50d339.a) : _0x2e052d.f = (_0x57b84e[_0x43b169(0x56a)] >= 0x20 ? _0x57b84e.substr(0x0, 0x17) : _0x57b84e.substr(0x0, 0x17)[_0x43b169(0x852)](0x17)) + '.' + _0x2fa40a.toString(_0x2e052d.g) + _0x50d339.a, _0x2e052d.f = _0x2e052d.f[_0x43b169(0x733)](' ', '_');
                }
            },
            _0x50e377 = function (_0x535a7a) {
                var _0x469110 = _0x17b28a;
                let _0x27ee6b;
                try {
                    return _0x2e052d.joystick || = _0x5a0b1f[_0x469110(0x76d)], _0x16f9d2() && _0x535a7a && _0x2e052d[_0x469110(0x76d)][_0x469110(0x65c)] && (_0x27ee6b = nipplejs[_0x469110(0x6ae)](_0x2e052d.joystick)).on(_0x469110(0x505), function (_0x2f8cf6, _0x43c715) {
                        var _0x574fdc = _0x469110;
                        _0x5a0b1f[_0x574fdc(0x760)].fo = _0x43c715[_0x574fdc(0x341)][_0x574fdc(0x5d0)] <= Math.PI ? _0x43c715[_0x574fdc(0x341)].radian * -0x1 : Math.PI - (_0x43c715[_0x574fdc(0x341)][_0x574fdc(0x5d0)] - Math.PI);
                    }), _0x27ee6b;
                } catch (_0x3d90e8) {
                    console[_0x469110(0x89c)](_0x3d90e8);
                }
            },
            _0x5553ed = function (_0x5ca0f2) {
                var _0x4e1497 = _0x17b28a;
                let _0x3c20a0 = {
                        'a': 0x0,
                        'b': 0x0,
                        'c': 0x0,
                        'd': 0x0,
                        'e': 0x0,
                        'f': '',
                        'g': 0x0,
                        'h': '',
                        'i': ''
                    },
                    _0x33bf36 = 0x0;
                _0x3c20a0.h = _0x5ca0f2[_0x4e1497(0x7ba)](-0x9);
                if (_0x3c20a0.h[_0x4e1497(0x7ba)](0x0, 0x1) != '.') _0x3c20a0.i = _0x4e1497(0x86d);
                else(_0x33bf36 = parseInt(_0x3c20a0.h[_0x4e1497(0x7ba)](0x1, 0x1), _0x2e052d.g)) > 0xf ? (_0x33bf36 -= 0x10, _0x3c20a0.i = _0x33bf36[_0x4e1497(0x3ae)](0x2)[_0x4e1497(0x217)](0x4, 0x0)) : (_0x3c20a0.i = _0x33bf36[_0x4e1497(0x3ae)](0x2)[_0x4e1497(0x217)](0x4, 0x0), _0x33bf36 = 0x0);
                return _0x3c20a0.f = _0x5ca0f2[_0x4e1497(0x7ba)](-0x7), _0x3c20a0.f[_0x4e1497(0x7ba)](0x0, 0x2) != '00' && (_0x3c20a0.a = parseInt(_0x3c20a0.f[_0x4e1497(0x7ba)](0x0, 0x2), _0x2e052d.g), _0x3c20a0.a = (_0x3c20a0.a - 0x1) * (_0x2e052d.g / 0x9) + _0x2e052d.g * 0xa - (_0x2e052d.g - 0x4)), _0x3c20a0.f[_0x4e1497(0x7ba)](0x5, 0x1) == '.' ? _0x3c20a0.f[_0x4e1497(0x7ba)](0x6, 0x1) != '0' && (_0x3c20a0.e = parseInt(_0x3c20a0.f[_0x4e1497(0x7ba)](0x6, 0x1), _0x2e052d.g), _0x3c20a0.i[_0x4e1497(0x7ba)](0x3, 0x1) != '0' ? _0x33bf36 > 0x0 ? _0x3c20a0.e = _0x3c20a0.e + _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1) * 0x2 : _0x3c20a0.e = _0x3c20a0.e + _0x2e052d.g * 0x14 : _0x3c20a0.e = _0x3c20a0.e - 0x1 + _0x2e052d.g / 0x9 * 0x64) : (_0x3c20a0.e = parseInt(_0x3c20a0.f[_0x4e1497(0x7ba)](0x6, 0x1), _0x2e052d.g), _0x3c20a0.i.substr(0x3, 0x1) != '0' ? _0x33bf36 > 0x0 ? _0x3c20a0.e = _0x3c20a0.e + _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1) * 0x3 : _0x3c20a0.e = _0x3c20a0.e + _0x2e052d.g * 0x14 + (_0x2e052d.g - 0x1) : _0x3c20a0.e = _0x3c20a0.e + (_0x2e052d.g / 0x9 * 0x64 + (_0x2e052d.g - 0x1))), _0x3c20a0.f = _0x3c20a0.f[_0x4e1497(0x29f)]('.', ''), _0x3c20a0.f[_0x4e1497(0x7ba)](0x2, 0x1) != '0' && (_0x3c20a0.b = parseInt(_0x3c20a0.f[_0x4e1497(0x7ba)](0x2, 0x1), _0x2e052d.g), _0x3c20a0.i.substr(0x0, 0x1) != '0' ? _0x3c20a0.b = _0x3c20a0.b + _0x2e052d.g * 0x14 : _0x3c20a0.b = _0x3c20a0.b - 0x1 + _0x2e052d.g / 0x9 * 0x64), _0x3c20a0.f[_0x4e1497(0x7ba)](0x3, 0x1) != '0' && (_0x3c20a0.c = parseInt(_0x3c20a0.f[_0x4e1497(0x7ba)](0x3, 0x1), _0x2e052d.g), _0x3c20a0.i.substr(0x1, 0x1) != '0' ? _0x3c20a0.c = _0x3c20a0.c + _0x2e052d.g * 0x14 : _0x3c20a0.c = _0x3c20a0.c - 0x1 + _0x2e052d.g / 0x9 * 0x64), _0x3c20a0.f[_0x4e1497(0x7ba)](0x4, 0x1) != '0' && (_0x3c20a0.d = parseInt(_0x3c20a0.f.substr(0x4, 0x1), _0x2e052d.g), _0x3c20a0.i[_0x4e1497(0x7ba)](0x2, 0x1) != '0' ? _0x3c20a0.d = _0x3c20a0.d + _0x2e052d.g * 0x14 : _0x3c20a0.d = _0x3c20a0.d - 0x1 + _0x2e052d.g / 0x9 * 0x64), _0x3c20a0;
            },
            _0x3e1236 = function (_0x9b575b) {
                return !(_0x9b575b > _0x2e052d.g * 0x1e) && !(_0x9b575b < _0x2e052d.g / 0x9 * 0x64) || _0x9b575b == 0x0;
            },
            _0x57d77c = function (_0x202264) {
                var _0x112c81 = _0x17b28a;
                return /^(.{25})(\w{5}\.\w{1})$/ [_0x112c81(0x274)](_0x202264) || /^(.{25})(\w{4}\.\w{2})$/ [_0x112c81(0x274)](_0x202264);
            },
            _0x52a542 = function (_0x598266) {
                var _0x30c212 = _0x17b28a;
                _0x598266 = _0x598266[_0x30c212(0x733)]('_', ' ');
                if (/^(.{25})(\w{7})$/ [_0x30c212(0x274)](_0x598266)) {
                    for (_0x598266 = _0x598266[_0x30c212(0x7ba)](0x0, 0xf)[_0x30c212(0x356)](); _0x598266.substr(_0x598266[_0x30c212(0x56a)] - 0x1, 0x1) == '.';) {
                        _0x598266 = _0x598266.substr(0x0, _0x598266.length - 0x1);
                    };
                    return _0x598266;
                };
                return /^(.{25})(\w{5}\.\w{1})$/ ['test'](_0x598266) || /^(.{25})(\w{4}\.\w{2})$/ [_0x30c212(0x274)](_0x598266) ? _0x598266[_0x30c212(0x7ba)](-0x9).substr(0x0, 0x1) != '.' ? _0x598266[_0x30c212(0x7ba)](0x0, 0x19)[_0x30c212(0x356)]() : _0x598266[_0x30c212(0x7ba)](0x0, 0x17)[_0x30c212(0x356)]() : _0x598266;
            };
        _0x2e052d[_0x17b28a(0x32a)] = true;
        var _0x31462e = localStorage[_0x17b28a(0x21e)](_0x17b28a(0x31f));
        localStorage[_0x17b28a(0x510)]('ccg_0', 'Kill and Headshot stats will be removed?'), localStorage.setItem('ccg_1', _0x17b28a(0x884)), localStorage.setItem(_0x17b28a(0x85b), 'Your account has been locked.');
        var _0x4f82c3 = localStorage[_0x17b28a(0x21e)](_0x17b28a(0x41c)),
            _0x2d54cd = localStorage[_0x17b28a(0x21e)](_0x17b28a(0x818)) != null ? localStorage.getItem('wfti')[_0x17b28a(0x3d3)](',') : localStorage[_0x17b28a(0x21e)](_0x17b28a(0x818)),
            _0x26db65 = localStorage.getItem(_0x17b28a(0x54a)),
            _0xd7d6cd = localStorage[_0x17b28a(0x21e)](_0x17b28a(0x70e)),
            _0x17b9a4 = localStorage[_0x17b28a(0x21e)](_0x17b28a(0x202));
        $(_0x17b28a(0x1e6))[_0x17b28a(0x515)](_0x17b28a(0x2e7)), $('<input type=\"hidden\" id=\"port_id_s\" value=\"\">')[_0x17b28a(0x515)](_0x17b28a(0x2e7)), $(_0x17b28a(0x398))[_0x17b28a(0x515)](_0x17b28a(0x2e7)), $(_0x17b28a(0x68d)).insertAfter(_0x17b28a(0x2e7)), $('#mm-action-buttons').hover(function () {
            var _0x1c3cf4 = _0x17b28a;
            $(_0x1c3cf4(0x333)).val(''), $(_0x1c3cf4(0x65f))[_0x1c3cf4(0x1ce)]('');
        }), $('#final-share-fb')[_0x17b28a(0x5a1)](_0x17b28a(0x63d), _0x17b28a(0x834)), $('#unl6wj4czdl84o9b')[_0x17b28a(0x5a1)](_0x17b28a(0x63d), _0x17b28a(0x834)), $(_0x17b28a(0x770))[_0x17b28a(0x5a1)](_0x17b28a(0x63d), 'none'), $(_0x17b28a(0x255))[_0x17b28a(0x5a1)](_0x17b28a(0x63d), _0x17b28a(0x4e8)), $(_0x17b28a(0x8ac))[_0x17b28a(0x5a1)]('display', _0x17b28a(0x4e8)), $(_0x17b28a(0x209)).css(_0x17b28a(0x63d), _0x17b28a(0x4e8)), $(_0x17b28a(0x371)).after(), $('#mm-player-info').css(_0x17b28a(0x63d), 'block'), $(_0x17b28a(0x3c8)).css(_0x17b28a(0x8cf), _0x17b28a(0x82d)), $(_0x17b28a(0x3c8)).css('top', _0x17b28a(0x25b)), $('#relojHelp')[_0x17b28a(0x5a1)](_0x17b28a(0x841), _0x17b28a(0x2b6)), $(_0x17b28a(0x3f2)).css(_0x17b28a(0x63d), _0x17b28a(0x834));
        var _0x3d582d = null,
            _0x2482d2 = null,
            _0x29be32 = false,
            _0xde2d1b = 0x37,
            _0x42a707 = 0x1,
            _0x4d76e0 = true;
        if (_0x2d54cd && _0x26db65 && _0x26db65 == _0x2e052d[_0x17b28a(0x1cd)]);
        else fetch('https://wormx.store/store/index.php', {
            'headers': {
                'Content-Type': 'application/json'
            },
            'method': 'POST',
            'body': JSON.stringify({
                'img': 'i2'
            })
        })[_0x17b28a(0x378)](async function (_0x2cac2a) {
            var _0x8e36ae = _0x17b28a;
            _0x2d54cd = (_0x2cac2a = await _0x2cac2a[_0x8e36ae(0x80b)]()).i[_0x8e36ae(0x3d3)]('.'), localStorage[_0x8e36ae(0x510)](_0x8e36ae(0x818), _0x2d54cd), localStorage[_0x8e36ae(0x510)](_0x8e36ae(0x54a), _0x2cac2a.vs), _0x2e052d[_0x8e36ae(0x1cd)] = _0x2cac2a.vs, window[_0x8e36ae(0x703)][_0x8e36ae(0x252)]();
        })[_0x17b28a(0x48b)](function (_0x49ea92) {});;
        var _0x3620cf = PIXI[_0x17b28a(0x2a0)].from(_0x2e052d[_0x17b28a(0x403)] + '/get_store.phpitem=close_q.png'),
            _0x4d18a9 = PIXI.Texture.from(_0x2e052d.s_l + '/get_store.phpitem=open_q.png'),
            _0x5136fb = PIXI[_0x17b28a(0x2a0)][_0x17b28a(0x75c)](_0x2e052d[_0x17b28a(0x403)] + '/get_store.phpitem=close_w.png'),
            _0x817ed8 = PIXI[_0x17b28a(0x2a0)][_0x17b28a(0x75c)](_0x2e052d[_0x17b28a(0x403)] + _0x17b28a(0x7f5)),
            _0x1c9a1c = PIXI.Texture[_0x17b28a(0x75c)](_0x2e052d[_0x17b28a(0x403)] + '/get_store.phpitem=close_z.png'),
            _0x1d2074 = PIXI[_0x17b28a(0x2a0)][_0x17b28a(0x75c)](_0x2e052d[_0x17b28a(0x403)] + _0x17b28a(0x782)),
            _0x57973d = PIXI[_0x17b28a(0x2a0)][_0x17b28a(0x75c)](_0x2e052d.s_l + _0x17b28a(0x2e0)),
            _0x5bd204 = PIXI[_0x17b28a(0x2a0)][_0x17b28a(0x75c)](_0x2e052d[_0x17b28a(0x403)] + _0x17b28a(0x89f)),
            _0x4232ce = new PIXI[(_0x17b28a(0x59c))](_0x3620cf);
        _0x4232ce[_0x17b28a(0x6e1)] = true, _0x4232ce[_0x17b28a(0x1cc)][_0x17b28a(0x3e2)](0.5), _0x4232ce.x = -0x41, _0x4232ce.y = 0x19, _0x4232ce[_0x17b28a(0x6af)] = true, _0x4232ce[_0x17b28a(0x6e1)] = true;
        var _0x5ced67 = new PIXI.Sprite(_0x5136fb);
        _0x5ced67[_0x17b28a(0x6e1)] = true, _0x5ced67[_0x17b28a(0x1cc)][_0x17b28a(0x3e2)](0.5), _0x5ced67.x = -0x21, _0x5ced67.y = 0x19, _0x5ced67[_0x17b28a(0x6af)] = true, _0x5ced67[_0x17b28a(0x6e1)] = true;
        var _0x3282ce = new PIXI[(_0x17b28a(0x59c))](_0x1c9a1c);
        _0x3282ce.buttonMode = true, _0x3282ce[_0x17b28a(0x1cc)].set(0.5), _0x3282ce.x = -0x1, _0x3282ce.y = 0x19, _0x3282ce.interactive = true, _0x3282ce[_0x17b28a(0x6e1)] = true;
        var _0x61c6e9 = new PIXI[(_0x17b28a(0x59c))](_0x5bd204);
        _0x61c6e9[_0x17b28a(0x6e1)] = true, _0x61c6e9[_0x17b28a(0x1cc)][_0x17b28a(0x3e2)](0.5), _0x61c6e9.x = -0x1, _0x61c6e9.y = 0x19, _0x61c6e9[_0x17b28a(0x6af)] = true, _0x61c6e9.buttonMode = true;
        var _0x3c8ffa = new PIXI.Sprite(_0x57973d);
        _0x3c8ffa[_0x17b28a(0x6e1)] = true, _0x3c8ffa[_0x17b28a(0x1cc)][_0x17b28a(0x3e2)](0.5), _0x3c8ffa.x = -0x21, _0x3c8ffa.y = 0x19, _0x3c8ffa[_0x17b28a(0x6af)] = true, _0x3c8ffa.buttonMode = true, _0x5ced67[_0x17b28a(0x8c4)] = 0.25, _0x4232ce[_0x17b28a(0x8c4)] = 0.25, _0x3282ce[_0x17b28a(0x8c4)] = 0.25, _0x3c8ffa[_0x17b28a(0x8c4)] = 0.25, _0x61c6e9[_0x17b28a(0x8c4)] = 0.25;
        var _0x407633 = new PIXI[(_0x17b28a(0x382))]('SRV WFT', {
            'fontFamily': _0x17b28a(0x759),
            'fill': _0x17b28a(0x891),
            'fontSize': 0xc
        });
        _0x407633.anchor.x = 0.5, _0x407633[_0x17b28a(0x8cf)].x = 0x6e;
        var _0x22d093 = document.getElementById(_0x17b28a(0x2a2)),
            _0x5a611f = document[_0x17b28a(0x4e7)](_0x17b28a(0x6ba)),
            _0x23241d = $(_0x17b28a(0x849));
        _0xa914b4.d.getElementById(_0x17b28a(0x3d8)).style.display = _0x17b28a(0x4e8),
            function (_0x3d2f60, _0x57628b, _0x4773ac) {
                var _0x4f0548 = _0x17b28a;

                function _0x430d26(_0x47f06d, _0x2bd3a6) {
                    return _typeof(_0x47f06d) === _0x2bd3a6;
                }

                function _0x226f3c() {
                    var _0x5b5b38 = _0x1c2b;
                    if (_typeof(_0x57628b[_0x5b5b38(0x43a)]) != 'function') return _0x57628b[_0x5b5b38(0x43a)](arguments[0x0]);
                    else return _0x5590f8 ? _0x57628b.createElementNS[_0x5b5b38(0x670)](_0x57628b, _0x5b5b38(0x4ee), arguments[0x0]) : _0x57628b[_0x5b5b38(0x43a)].apply(_0x57628b, arguments);
                }
                var _0x2298da = [],
                    _0x570a0b = [],
                    _0x26efda = {
                        '_version': _0x4f0548(0x4ac),
                        '_config': {
                            'classPrefix': '',
                            'enableClasses': true,
                            'enableJSClass': true,
                            'usePrefixes': true
                        },
                        '_q': [],
                        'on': function (_0x48ff08, _0x4cfca0) {
                            var _0x30abcb = this;
                            setTimeout(function () {
                                _0x4cfca0(_0x30abcb[_0x48ff08]);
                            }, 0x0);
                        },
                        'addTest': function (_0x27be8b, _0x1c94ad, _0x31968d) {
                            var _0x288721 = _0x4f0548;
                            _0x570a0b[_0x288721(0x6a2)]({
                                'name': _0x27be8b,
                                'fn': _0x1c94ad,
                                'options': _0x31968d
                            });
                        },
                        'addAsyncTest': function (_0x3802cc) {
                            var _0x49f051 = _0x4f0548;
                            _0x570a0b[_0x49f051(0x6a2)]({
                                'name': null,
                                'fn': _0x3802cc
                            });
                        }
                    };

                function _0x5cfb60() {}
                _0x5cfb60[_0x4f0548(0x72d)] = _0x26efda, _0x5cfb60 = new _0x5cfb60();
                var _0x1e2e27 = false;
                try {
                    _0x1e2e27 = 'WebSocket' in _0x3d2f60 && _0x3d2f60[_0x4f0548(0x472)][_0x4f0548(0x4e1)] === 0x2;
                } catch (_0x1f1ca2) {};
                _0x5cfb60.addTest(_0x4f0548(0x71d), _0x1e2e27);
                var _0x461ef2 = _0x57628b[_0x4f0548(0x550)],
                    _0x5590f8 = _0x461ef2[_0x4f0548(0x1e9)][_0x4f0548(0x627)]() === _0x4f0548(0x696);
                _0x5cfb60[_0x4f0548(0x595)](_0x4f0548(0x1cb), function () {
                        var _0x955ea2 = _0x4f0548,
                            _0x35deb0 = _0x226f3c(_0x955ea2(0x1cb));
                        return !!_0x35deb0[_0x955ea2(0x751)] && !!_0x35deb0[_0x955ea2(0x751)]('2d');
                    }), _0x5cfb60[_0x4f0548(0x595)]('canvastext', function () {
                        var _0x2399bd = _0x4f0548;
                        return _0x5cfb60[_0x2399bd(0x1cb)] !== false && _typeof(_0x226f3c(_0x2399bd(0x1cb))[_0x2399bd(0x751)]('2d')[_0x2399bd(0x3ff)]) == _0x2399bd(0x3d7);
                    }), (function () {
                        var _0x4faa69 = _0x4f0548,
                            _0x31d388, _0x1ff3dc, _0x349706, _0x34c551, _0x2a52e0, _0x12c86e, _0x11381c;
                        for (var _0x23cfe2 in _0x570a0b) {
                            if (_0x570a0b[_0x4faa69(0x664)](_0x23cfe2)) {
                                _0x31d388 = [];
                                if ((_0x1ff3dc = _0x570a0b[_0x23cfe2])[_0x4faa69(0x7b3)] && (_0x31d388[_0x4faa69(0x6a2)](_0x1ff3dc.name[_0x4faa69(0x627)]()), _0x1ff3dc.options && _0x1ff3dc[_0x4faa69(0x565)][_0x4faa69(0x511)] && _0x1ff3dc[_0x4faa69(0x565)][_0x4faa69(0x511)][_0x4faa69(0x56a)]))
                                    for (_0x349706 = 0x0; _0x349706 < _0x1ff3dc.options[_0x4faa69(0x511)][_0x4faa69(0x56a)]; _0x349706++) {
                                        _0x31d388[_0x4faa69(0x6a2)](_0x1ff3dc[_0x4faa69(0x565)][_0x4faa69(0x511)][_0x349706][_0x4faa69(0x627)]());
                                    };
                                _0x34c551 = _0x430d26(_0x1ff3dc.fn, 'function') ? _0x1ff3dc.fn() : _0x1ff3dc.fn, _0x2a52e0 = 0x0;
                                for (; _0x2a52e0 < _0x31d388[_0x4faa69(0x56a)]; _0x2a52e0++) {
                                    (_0x11381c = (_0x12c86e = _0x31d388[_0x2a52e0])[_0x4faa69(0x3d3)]('.')).length === 0x1 ? _0x5cfb60[_0x11381c[0x0]] = _0x34c551 : (!!_0x5cfb60[_0x11381c[0x0]] && !(_0x5cfb60[_0x11381c[0x0]] instanceof Boolean) && (_0x5cfb60[_0x11381c[0x0]] = new Boolean(_0x5cfb60[_0x11381c[0x0]])), _0x5cfb60[_0x11381c[0x0]][_0x11381c[0x1]] = _0x34c551), _0x2298da[_0x4faa69(0x6a2)]((_0x34c551 ? '' : _0x4faa69(0x8a9)) + _0x11381c.join('-'));
                                }
                            }
                        }
                    }()),
                    function (_0x56fb98) {
                        var _0xa30452 = _0x4f0548,
                            _0x58353d = _0x461ef2[_0xa30452(0x84c)],
                            _0x3911ef = _0x5cfb60[_0xa30452(0x79a)].classPrefix || '';
                        _0x5590f8 && (_0x58353d = _0x58353d[_0xa30452(0x85d)]);
                        if (_0x5cfb60._config[_0xa30452(0x684)]) {
                            var _0x59a7af = RegExp(_0xa30452(0x239) + _0x3911ef + _0xa30452(0x4a0));
                            _0x58353d = _0x58353d.replace(_0x59a7af, '$1' + _0x3911ef + _0xa30452(0x2f4));
                        };
                        _0x5cfb60[_0xa30452(0x79a)][_0xa30452(0x801)] && (_0x58353d += ' ' + _0x3911ef + _0x56fb98[_0xa30452(0x7e8)](' ' + _0x3911ef), _0x5590f8 ? _0x461ef2[_0xa30452(0x84c)][_0xa30452(0x85d)] = _0x58353d : _0x461ef2[_0xa30452(0x84c)] = _0x58353d);
                    }(_0x2298da), delete _0x26efda[_0x4f0548(0x595)], delete _0x26efda[_0x4f0548(0x30b)];
                for (var _0xd1a0e4 = 0x0; _0xd1a0e4 < _0x5cfb60._q[_0x4f0548(0x56a)]; _0xd1a0e4++) {
                    _0x5cfb60._q[_0xd1a0e4]();
                };
                _0x3d2f60[_0x4f0548(0x86a)] = _0x5cfb60;
            }(window, document);
        if (!Modernizr[_0x17b28a(0x71d)] || !Modernizr[_0x17b28a(0x1cb)] || !Modernizr[_0x17b28a(0x7cc)]) {
            _0xa914b4.d[_0x17b28a(0x4e7)](_0x17b28a(0x275))[_0x17b28a(0x45d)][_0x17b28a(0x63d)] = _0x17b28a(0x4e8);
            return;
        };
        _0x51599b.f = {
            'g': function (_0x3283ac, _0x42e4c0, _0x15b7d2) {
                var _0x52aa2e = _0x17b28a;
                _0x3283ac[_0x52aa2e(0x6d6)](), _0x3283ac[_0x52aa2e(0x4fc)](_0x42e4c0, _0x15b7d2);
            },
            'h': function (_0x37bbb9, _0x5df3d2, _0x144135) {
                var _0x41dc62 = _0x17b28a;
                _0x37bbb9[_0x41dc62(0x6d6)](), _0x37bbb9[_0x41dc62(0x3df)](_0x5df3d2, _0x144135);
            }
        }, _0x51599b.i = _0x1a7a89.b(_0x17b28a(0x472)), _0x51599b.j = _0x1a7a89.b(_0x17b28a(0x6b3)), _0x4fb57a = (_0x4804a5 = _0x1a7a89.b(_0x17b28a(0x86b))).BLEND_MODES, _0x2dc931 = _0x4804a5[_0x17b28a(0x5c4)], _0x51599b.k = {
            'l': _0x4804a5[_0x17b28a(0x292)],
            'm': _0x4804a5[_0x17b28a(0x3aa)],
            'n': _0x4804a5[_0x17b28a(0x2a0)],
            'o': _0x4804a5[_0x17b28a(0x4cd)],
            'p': _0x4804a5[_0x17b28a(0x865)],
            'q': _0x4804a5[_0x17b28a(0x8aa)],
            'r': _0x4804a5.Rectangle,
            's': _0x4804a5[_0x17b28a(0x59c)],
            't': _0x4804a5.Text,
            'u': _0x4804a5[_0x17b28a(0x540)],
            'v': _0x4804a5.Mesh,
            'w': {
                'z': _0x4fb57a[_0x17b28a(0x330)],
                'A': _0x4fb57a[_0x17b28a(0x1c2)],
                'B': _0x4fb57a[_0x17b28a(0x78d)]
            },
            'C': {
                'D': _0x2dc931[_0x17b28a(0x2ac)]
            },
            'F': {
                'G': function (_0x44bed5) {
                    var _0x29c1eb = _0x17b28a,
                        _0xab7b89 = _0x44bed5.parent;
                    _0xab7b89 != null && _0xab7b89[_0x29c1eb(0x22e)](_0x44bed5);
                }
            }
        }, _0x30354b.H = {
            'I': _0xa914b4.c.runtimeHash,
            'J': _0x17b28a(0x527),
            'K': _0x17b28a(0x7e4),
            'L': _0x17b28a(0x2e3),
            'M': _0x17b28a(0x65a),
            'N': _0x17b28a(0x4d5),
            'O': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        };

        function _0x23f1d1() {
            function _0x15ece5(_0x2c41be) {
                var _0x5083a3 = _0x1c2b,
                    _0x4dffa6 = _0x2c41be + 0x25 * Math[_0x5083a3(0x676)](0xffff * Math[_0x5083a3(0x2b7)]());
                _0x3fba9f(_0x4bdabb.d, _0x4dffa6, 0x1e);
            }

            function _0x225b33() {
                return parseInt(_0x339a99(_0x4bdabb.d)) % 0x25;
            }
            return (function () {
                var _0xc28a19 = _0x1c2b,
                    _0x4a1729 = _0x225b33();
                console[_0xc28a19(0x308)](_0xc28a19(0x7d9) + _0x4a1729);
                !(_0x4a1729 >= 0x0 && _0x4a1729 < _0x1edbd9.e) && (_0x4a1729 = Math.max(0x0, _0x1edbd9.e - 0x2), console[_0xc28a19(0x308)](_0xc28a19(0x5e7) + _0x4a1729));
                var _0x713d08 = {};
                _0x22469b = _0x713d08, _0x713d08.f = _0x1edbd9, _0x713d08.g = false, _0x713d08.i = Date[_0xc28a19(0x4f0)](), _0x713d08.j = 0x0, _0x713d08.k = 0x0, _0x713d08.l = null, _0x713d08.m = _0x104f30, _0x713d08.n = _0x19f833, _0x713d08.o = null, _0x713d08.p = null, _0x713d08.q = null, _0x713d08.r = null, _0x713d08.s = null, _0x713d08.t = null, _0x713d08.u = null;
                try {
                    navigator && navigator[_0xc28a19(0x8d7)] && navigator[_0xc28a19(0x8d7)][_0xc28a19(0x2ea)](function (_0x49afea) {
                        var _0x18d805 = _0xc28a19;
                        if (undefined !== _0x49afea[_0x18d805(0x52e)]) {
                            var _0x6f942 = _0x49afea.coords;
                            undefined !== _0x6f942[_0x18d805(0x7b6)] && undefined !== _0x6f942[_0x18d805(0x61d)] && (_0x713d08.l = _0x49afea);
                        }
                    }, function (_0x31e261) {});
                } catch (_0x326cd2) {}
                return _0x713d08.v = function () {
                    _0x713d08.p = new _0x465145(), _0x713d08.q = new _0x3e967f(), _0x713d08.r = new _0x31335b(), _0x713d08.s = new _0x25ae10(), _0x713d08.t = new _0x5225d3(), _0x713d08.u = new _0x283c2e(), _0x713d08.o = new _0x44c95e(), _0x713d08.o.z = new _0x3960fd(_0x713d08.o), _0x713d08.a();
                }, _0x713d08.a = function () {
                    var _0x577d8d = _0xc28a19;
                    try {
                        ga(_0x577d8d(0x78a), _0x577d8d(0x228), 'app', window.runtimeHash + '_init');
                    } catch (_0x262b67) {}
                    _0x713d08.o.A = function () {
                        _0x713d08.o.B();
                    }, _0x713d08.o.C = function () {
                        var _0x934939 = _0x577d8d,
                            _0x2bade3 = _0x713d08.s.F.D();
                        try {
                            ga(_0x934939(0x78a), 'event', 'game', window.runtimeHash + _0x934939(0x280), _0x2bade3);
                        } catch (_0x20790e) {}
                        _0x713d08.r.G(_0x31335b[_0x934939(0x465)].H), _0x713d08.s.I(_0x713d08.s.H.J());
                    }, _0x713d08.o.B = function () {
                        var _0x52e730 = _0x577d8d,
                            _0x2409f8, _0x6cdc03;
                        try {
                            ga(_0x52e730(0x78a), _0x52e730(0x228), _0x52e730(0x6d2), window.runtimeHash + _0x52e730(0x8d5));
                        } catch (_0x2c9375) {}
                        $(_0x52e730(0x4dc))[_0x52e730(0x2c1)]() >= 0x1ae && _0x713d08.f.K.c(), _0x713d08.p.L(), _0x2409f8 = Math[_0x52e730(0x676)](_0x713d08.o.N.M), _0x6cdc03 = _0x713d08.o.O, _0x713d08.u.P() ? _0x713d08.u.Q(function () {
                            _0x713d08.R(_0x2409f8, _0x6cdc03);
                        }) : _0x713d08.R(_0x2409f8, _0x6cdc03);
                    }, _0x713d08.o.S = function (_0x3f4436) {
                        _0x3f4436(_0x713d08.s.H.T(), _0x713d08.s.H.U());
                    }, _0x713d08.u.V(function () {
                        var _0x3f180d = _0x577d8d;
                        _0x713d08.p.W && (_0x713d08.r.G(_0x31335b[_0x3f180d(0x465)].F), _0x713d08.s.I(_0x713d08.s.F));
                        if (_0x713d08.u.P()) try {
                            var _0x25e073 = _0x713d08.u.X();
                            ga(_0x3f180d(0x3e2), _0x3f180d(0x875), _0x25e073);
                        } catch (_0x5b40e3) {}
                        _0x713d08.Y() && _0x713d08.u.P() && !_0x713d08.u.Z() ? (_0x713d08.$(false, false), _0x713d08.s.aa._(new _0x4359e7())) : _0x713d08.ba(true);
                    }), _0x713d08.p.ca(function () {
                        var _0x10a6b3 = _0x577d8d;
                        _0x713d08.r.G(_0x31335b[_0x10a6b3(0x465)].F), _0x713d08.s.I(_0x713d08.s.F);
                    }), _0x713d08.q.a(function () {
                        _0x713d08.o.a(), _0x713d08.r.a(), _0x713d08.s.a(), _0x713d08.t.a(), _0x713d08.p.a(), _0x713d08.u.a(), _0x713d08.Y() && !_0x713d08.Z() ? _0x713d08.s.aa._(new _0x4359e7()) : _0x713d08.ba(true);
                    });
                }, _0x713d08.da = function (_0x3eecaa) {
                    var _0x4cef6b = _0xc28a19;
                    if (_0x713d08.u.P()) {
                        var _0x14d163 = _0x713d08.u.ea();
                        $[_0x4cef6b(0x64d)](_0x341c3b + _0x4cef6b(0x80c) + _0x14d163 + _0x4cef6b(0x1fd) + encodeURI(_0x3eecaa), function (_0x1a5f29) {});
                    }
                }, _0x713d08.fa = function (_0x2908a5) {
                    var _0x6ccfcd = _0xc28a19,
                        _0x20a4d4 = _0x713d08.u.ea(),
                        _0x11056a = _0x713d08.s.F.D(),
                        _0x459d06 = _0x713d08.s.F.ga(),
                        _0x589f31 = _0x713d08.t.ha(_0x34bccb.ia),
                        _0x119680 = _0x713d08.t.ha(_0x34bccb.ja),
                        _0x111fa1 = _0x713d08.t.ha(_0x34bccb.ka),
                        _0x4da57a = _0x713d08.t.ha(_0x34bccb.la),
                        _0x2d33dc = _0x713d08.t.ha(_0x34bccb.ma),
                        _0x4f95c0 = 0x0;
                    null != _0x713d08.l && (_0x4f95c0 = 0x1 | Math[_0x6ccfcd(0x78e)](0x0, Math.min(0x7fff, (_0x713d08.l[_0x6ccfcd(0x52e)].latitude + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math[_0x6ccfcd(0x396)](0xffff, (_0x713d08.l.coords.longitude + 0xb4) / 0x168 * 0x10000)) << 0x10);
                    _wrmxt[_0x6ccfcd(0x814)](_0x589f31);
                    let _0x558c2a = 'WFT_' + (0x270f < _0x589f31 ? _0x6ccfcd(0x86d) : _0x589f31[_0x6ccfcd(0x3ae)]()[_0x6ccfcd(0x217)](0x4, 0x0)) + (0x1869f < _0x2d33dc ? _0x6ccfcd(0x83b) : _0x2d33dc[_0x6ccfcd(0x3ae)]()[_0x6ccfcd(0x217)](0x5, 0x0));
                    _0x459d06 = (_0x459d06 = (0x20 <= _0x459d06[_0x6ccfcd(0x56a)] ? _0x459d06[_0x6ccfcd(0x7ba)](0x0, 0x10) : _0x459d06[_0x6ccfcd(0x7ba)](0x0, 0x10).padEnd(0x10)) + _0x558c2a).trim()[_0x6ccfcd(0x29f)](/\s/g, '_'), console[_0x6ccfcd(0x308)](_0x459d06);
                    theoKzObjects[_0x6ccfcd(0x211)] && (_0x459d06 = '');
                    var _0x386ac0 = document.getElementById(_0x6ccfcd(0x2cc));
                    if (null !== _0x386ac0) {
                        var _0x17969c = _0x386ac0[_0x6ccfcd(0x66a)];
                        theoKzObjects[_0x6ccfcd(0x83e)] ? _0x497d4e.nickname = _0x17969c : _0x497d4e.nickname = _0x459d06;
                    } else console.warn(_0x6ccfcd(0x43d));
                    var _0x3aaf59 = _0x341c3b + _0x6ccfcd(0x80c) + _0x20a4d4 + _0x6ccfcd(0x7a7) + encodeURI(_0x11056a) + _0x6ccfcd(0x278) + _0x4f95c0 + _0x6ccfcd(0x4f8) + encodeURI(_0x459d06) + '&skinId=' + _wrmxt[_0x6ccfcd(0x8c2)](_0x589f31) + _0x6ccfcd(0x290) + encodeURI(_0x119680) + _0x6ccfcd(0x59b) + encodeURI(_0x111fa1) + _0x6ccfcd(0x706) + encodeURI(_0x4da57a) + _0x6ccfcd(0x61a) + encodeURI(_0x2d33dc);
                    console[_0x6ccfcd(0x308)](_0x6ccfcd(0x79d) + _0x3aaf59), $.get(_0x3aaf59, function (_0x12dc32) {
                        var _0x1cfa84 = _0x6ccfcd;
                        _0x2908a5(_0x12dc32[_0x1cfa84(0x37e)]);
                    });
                }, _0x713d08.na = function () {
                    var _0x4c9f69 = _0xc28a19;
                    _0x4a1729++, console[_0x4c9f69(0x308)](_0x4c9f69(0x46d) + _0x4a1729), !_0x713d08.f.oa && _0x4a1729 >= _0x713d08.f.e ? (_0x713d08.s.I(_0x713d08.s.pa), _0x713d08.r.G(_0x31335b.AudioState.qa), _0x713d08.f.ra.b()) : (_0x15ece5(_0x4a1729), _0x713d08.sa(), lxpdservertext[_0x4c9f69(0x2df)] = '');
                }, _0x713d08.sa = function (_0x491611) {
                    var _0xa5fc4c = _0xc28a19;
                    lxpdkillcount = 0x0, lxpdhscount = 0x0;
                    if (_0x713d08.o.ta()) {
                        _0x713d08.s.I(_0x713d08.s.ua), _0x713d08.r.G(_0x31335b[_0xa5fc4c(0x465)].ua);
                        var _0x57d984 = _0x713d08.s.F.D();
                        _0x3fba9f(_0x4bdabb.va, _0x57d984, 0x1e), console[_0xa5fc4c(0x308)](_0xa5fc4c(0x454) + _0x57d984);
                        var _0xaaf14a = _0x713d08.s.xa.wa();
                        _0x3fba9f(_0x4bdabb.ya, _0xaaf14a, 0x1e), console.log('save sPN: ' + _0xaaf14a);
                        if (_0x713d08.u.P()) _0x713d08.fa(function (_0x3bf49c) {
                            var _0x2c6d73 = _0xa5fc4c;
                            lxpdlastserver = _0x491611 || _0x3bf49c, _0x497d4e[_0x2c6d73(0x5b8)] = lxpdlastserver, _0x713d08.o.za(_0x491611 || _0x3bf49c, _0x713d08.u.ea());
                        });
                        else {
                            var _0x7908ba = _0x713d08.s.F.ga();
                            _0x3fba9f(_0x4bdabb.Aa, _0x7908ba, 0x1e);
                            var _0xefe862 = _0x713d08.t.ha(_0x34bccb.ia);
                            _0x3fba9f(_0x4bdabb.Ba, _0xefe862, 0x1e), _0x713d08.fa(function (_0x49ad80) {
                                var _0x487617 = _0xa5fc4c;
                                lxpdlastserver = _0x491611 || _0x49ad80, _0x497d4e[_0x487617(0x5b8)] = lxpdlastserver, _0x713d08.o.Ca(_0x491611 || _0x49ad80, _0x7908ba, _0xefe862);
                            });
                        }
                    }
                }, _0x713d08.R = function (_0x22ea51, _0xd86903) {
                    var _0x494bad = _0xc28a19,
                        _0x55fc89 = _0x713d08.s.F.ga();
                    _0x713d08.s.H.Da(_0x22ea51, _0xd86903, _0x55fc89), _0x713d08.r.G(_0x31335b[_0x494bad(0x465)].Ea), _0x713d08.s.I(_0x713d08.s.H.Fa());
                }, _0x713d08.Ga = function () {
                    if (!_0x713d08.Ha()) return _0x713d08.t.Ia();
                    var _0x26a93b = parseInt(_0x339a99(_0x4bdabb.Ba));
                    return null != _0x26a93b && _0x713d08.t.Ja(_0x26a93b, _0x34bccb.ia) ? _0x26a93b : _0x713d08.t.Ia();
                }, _0x713d08.Ka = function (_0x5abec3) {
                    _0x3fba9f(_0x4bdabb.La, !!_0x5abec3, 0x708);
                }, _0x713d08.Ha = function () {
                    var _0x554ca4 = _0xc28a19;
                    return _0x554ca4(0x40f) === _0x339a99(_0x4bdabb.La);
                }, _0x713d08.ba = function (_0x2bae71) {
                    var _0x127aa4 = _0xc28a19;
                    if (_0x2bae71 != _0x713d08.g) {
                        _0x713d08.g = _0x2bae71;
                        var _0x5944fa = _0x5944fa || {};
                        _0x5944fa[_0x127aa4(0x235)] = _0x2bae71, _0x5944fa[_0x127aa4(0x744)] = _0x2bae71, _0x713d08.f.Ma.a(), _0x713d08.f.K.a(), _0x713d08.f.ra.a(function (_0x1d9e5a) {
                            _0x1d9e5a && _0x15ece5(_0x4a1729 = 0x0), _0x713d08.sa();
                        });
                    }
                }, _0x713d08.$ = function (_0x423463, _0x47d726) {
                    var _0x27f9b7 = _0xc28a19;
                    _0x3fba9f(_0x4bdabb.Na, _0x423463 ? _0x27f9b7(0x40f) : 'false'), _0x47d726 && _0x713d08.da(_0x423463), _0x713d08.ba(_0x423463);
                }, _0x713d08.Z = function () {
                    var _0x4a296c = _0xc28a19;
                    return _0x4a296c(0x40f) === _0x339a99(_0x4bdabb.Na);
                }, _0x713d08.Y = function () {
                    var _0x4c3c88 = _0xc28a19;
                    try {
                        return !!window[_0x4c3c88(0x88f)] || !(null == _0x713d08.l || !_0x27e576.Oa(_0x713d08.l[_0x4c3c88(0x52e)].latitude, _0x713d08.l.coords[_0x4c3c88(0x61d)]));
                    } catch (_0x2817a) {
                        return true;
                    }
                }, _0x713d08.Pa = function () {
                    var _0x2d3b00 = _0xc28a19;
                    _0x713d08.j = Date[_0x2d3b00(0x4f0)](), _0x713d08.k = _0x713d08.j - _0x713d08.i, _0x713d08.o.Qa(_0x713d08.j, _0x713d08.k), _0x713d08.s.Qa(_0x713d08.j, _0x713d08.k), _0x713d08.i = _0x713d08.j;
                }, _0x713d08.Ra = function () {
                    _0x713d08.s.Ra();
                }, _0x713d08;
            }());
        }

        function _0x44c95e() {
            var _0x5f2d23 = {
                    'Sa': 0x0,
                    'Ta': 0x1,
                    'Ua': 0x2,
                    'Va': 0x3
                },
                _0x51ae39 = {};
            _0x51ae39.Wa = 0x1e, _0x51ae39.Xa = new Float32Array(0x64), _0x51ae39.Ya = 0x0, _0x51ae39.Za = 0x0, _0x51ae39.$a = 0x0, _0x51ae39._a = 0x0, _0x51ae39.ab = 0x0, _0x51ae39.bb = 0x0, _0x51ae39.cb = _0x5f2d23.Sa, _0x51ae39.db = null, _0x51ae39.eb = 0x12c, _0x51ae39.C = function () {}, _0x51ae39.B = function () {}, _0x51ae39.S = function () {}, _0x51ae39.A = function () {}, _0x51ae39.fb = new _0x346bc9(), _0x51ae39.z = null, _0x51ae39.N = null, _0x51ae39.gb = {}, _0x51ae39.hb = {}, _0x51ae39.ib = 12.5, _0x51ae39.jb = 0x28, _0x51ae39.kb = 0x1, _0x51ae39.lb = -0x1, _0x51ae39.mb = 0x1, _0x51ae39.nb = 0x1, _0x51ae39.ob = -0x1, _0x51ae39.pb = -0x1, _0x51ae39.qb = 0x1, _0x51ae39.rb = 0x1, _0x51ae39.sb = -0x1, _0x51ae39.O = 0x1f4, _0x51ae39.tb = 0x1f4, _0x51ae39.fb.ub = 0x1f4, _0x51ae39.N = new _0x2c946d(_0x51ae39.fb), _0x51ae39.a = function () {
                var _0x67e8e = _0x1c2b;
                _0x51ae39.N.vb(_0x3d7860().s.H.wb), setInterval(function () {
                    _0x51ae39.S(function (_0x5438e8, _0x29de9c) {
                        var _0x582245 = _0x1c2b;
                        console[_0x582245(0x308)](_0x5438e8, _0x29de9c), _0x51ae39.xb(_0x5438e8, _0x29de9c);
                    });
                }, theoKzObjects[_0x67e8e(0x7a1)]);
                let _0x57ea10 = 0x0;
                _0x51ae39[_0x67e8e(0x6fe)] = function (_0xa747c1) {
                    function _0x2209ec() {
                        var _0xadd35e = _0x1c2b;
                        let _0x2d514f = Date.now();
                        _0x2d514f - _0x57ea10 >= theoKzObjects[_0xadd35e(0x7a1)] && (_0x51ae39.S(function (_0x5f1f23, _0x2676e8) {
                            var _0x4a9381 = _0xadd35e;
                            console[_0x4a9381(0x308)](_0x5f1f23, _0x2676e8), _0x51ae39.xb(_0x5f1f23, _0x2676e8);
                        }), _0x57ea10 = _0x2d514f), requestAnimationFrame(_0x2209ec);
                    }
                    theoKzObjects.mouseDelay = _0xa747c1, _0x57ea10 = 0x0, _0x2209ec();
                };
            }, _0x51ae39.yb = function (_0x345cca, _0x1f3477, _0x193e39, _0x2358c9) {
                _0x51ae39.lb = _0x345cca, _0x51ae39.mb = _0x1f3477, _0x51ae39.nb = _0x193e39, _0x51ae39.ob = _0x2358c9, _0x51ae39.zb();
            }, _0x51ae39.Ab = function (_0x40cb17) {
                _0x51ae39.kb = _0x40cb17, _0x51ae39.zb();
            }, _0x51ae39.zb = function () {
                _0x51ae39.pb = _0x51ae39.lb - _0x51ae39.kb, _0x51ae39.qb = _0x51ae39.mb + _0x51ae39.kb, _0x51ae39.rb = _0x51ae39.nb - _0x51ae39.kb, _0x51ae39.sb = _0x51ae39.ob + _0x51ae39.kb;
            }, _0x51ae39.Qa = function (_0x336fd5, _0x1b8d16) {
                var _0x1dbc24 = _0x1c2b;
                _0x51ae39.$a += _0x1b8d16, _0x51ae39.Za -= 0.2 * _0x51ae39.Ya * _0x1b8d16, _0x51ae39.z.Bb();
                !(null == _0x51ae39.db || _0x51ae39.cb !== _0x5f2d23.Ua && _0x51ae39.cb !== _0x5f2d23.Va) && (_0x51ae39.Cb(_0x336fd5, _0x1b8d16), _0x51ae39.jb = 0x4 + _0x51ae39.ib * _0x51ae39.N.Db);
                var _0x181a99 = 0x3e8 / Math[_0x1dbc24(0x78e)](0x1, _0x1b8d16),
                    _0x369754 = 0x0;
                for (var _0x15093f = 0x0; _0x15093f < _0x51ae39.Xa.length - 0x1; _0x15093f++) {
                    _0x369754 += _0x51ae39.Xa[_0x15093f], _0x51ae39.Xa[_0x15093f] = _0x51ae39.Xa[_0x15093f + 0x1];
                }
                _0x51ae39.Xa[_0x51ae39.Xa[_0x1dbc24(0x56a)] - 0x1] = _0x181a99, _0x51ae39.Wa = (_0x369754 + _0x181a99) / _0x51ae39.Xa[_0x1dbc24(0x56a)];
            }, _0x51ae39.Eb = function (_0x219565, _0xca4ac1) {
                return _0x219565 > _0x51ae39.pb && _0x219565 < _0x51ae39.qb && _0xca4ac1 > _0x51ae39.rb && _0xca4ac1 < _0x51ae39.sb;
            }, _0x51ae39.Cb = function (_0x10445d, _0x31fe13) {
                var _0x276e67, _0x65d87a, _0x2c2506 = (_0x51ae39.$a + _0x51ae39.Za - _0x51ae39._a) / (_0x51ae39.ab - _0x51ae39._a);
                _0x51ae39.N.Fb(_0x10445d, _0x31fe13), _0x51ae39.N.Gb(_0x10445d, _0x31fe13, _0x2c2506, _0x51ae39.Eb);
                var _0x1bc163 = 0x0;
                for (_0x276e67 in _0x51ae39.hb) {
                    var _0x4c64a3 = _0x51ae39.hb[_0x276e67];
                    _0x4c64a3.Fb(_0x10445d, _0x31fe13), _0x4c64a3.Gb(_0x10445d, _0x31fe13, _0x2c2506, _0x51ae39.Eb), _0x4c64a3.Hb && _0x4c64a3.Db > _0x1bc163 && (_0x1bc163 = _0x4c64a3.Db), !(_0x4c64a3.Ib || !(_0x4c64a3.Jb < 0.005) && _0x4c64a3.Hb) && (_0x4c64a3.Kb(), delete _0x51ae39.hb[_0x4c64a3.Mb.Lb]);
                }
                _0x51ae39.Ab(0x3 * _0x1bc163);
                for (_0x65d87a in _0x51ae39.gb) {
                    var _0x5add3d = _0x51ae39.gb[_0x65d87a];
                    _0x5add3d.Fb(_0x10445d, _0x31fe13), _0x5add3d.Gb(_0x10445d, _0x31fe13, _0x51ae39.Eb), _0x5add3d.Nb && (_0x5add3d.Jb < 0.005 || !_0x51ae39.Eb(_0x5add3d.Ob, _0x5add3d.Pb)) && (_0x5add3d.Kb(), delete _0x51ae39.gb[_0x5add3d.Mb.Lb]);
                }
            }, _0x51ae39.Qb = function (_0x5429b8, _0x3f6aab) {
                _0x51ae39.cb === _0x5f2d23.Ta && (_0x51ae39.cb = _0x5f2d23.Ua, _0x51ae39.C());
                var _0x393476 = _0x3d7860().j;
                _0x51ae39.bb = _0x5429b8;
                0x0 === _0x5429b8 ? (_0x51ae39._a = _0x393476 - 0x5f, _0x51ae39.ab = _0x393476, _0x51ae39.$a = _0x51ae39._a, _0x51ae39.Za = 0x0) : (_0x51ae39._a = _0x51ae39.ab, _0x51ae39.ab = _0x51ae39.ab + _0x3f6aab);
                var _0x5bc29e = _0x51ae39.$a + _0x51ae39.Za;
                _0x51ae39.Ya = (_0x5bc29e - _0x51ae39._a) / (_0x51ae39.ab - _0x51ae39._a);
            }, _0x51ae39.Rb = function () {
                if (_0x51ae39.cb === _0x5f2d23.Ta || _0x51ae39.cb === _0x5f2d23.Ua) {
                    _0x51ae39.cb = _0x5f2d23.Va;
                    var _0x1eef05 = _0x51ae39.db;
                    setTimeout(function () {
                        var _0x565052 = _0x1c2b;
                        _0x51ae39.cb === _0x5f2d23.Va && (_0x51ae39.cb = _0x5f2d23.Sa), null != _0x1eef05 && _0x1eef05 === _0x51ae39.db && (_0x51ae39.db[_0x565052(0x869)](), _0x51ae39.db = null);
                    }, 0x1388), _0x51ae39.B();
                }
            }, _0x51ae39.ta = function () {
                var _0x642fa5 = _0x1c2b;
                return _0x51ae39.cb !== _0x5f2d23.Ua && (_0x51ae39.cb = _0x5f2d23.Ta, _0x51ae39.z.Sb(), _0x51ae39.gb = {}, _0x51ae39.hb = {}, _0x51ae39.N.Tb(), null != _0x51ae39.db && (_0x51ae39.db[_0x642fa5(0x869)](), _0x51ae39.db = null), true);
            }, _0x51ae39.Ub = function () {
                _0x51ae39.db = null, _0x51ae39.z.Sb(), _0x51ae39.cb !== _0x5f2d23.Va && _0x51ae39.A(), _0x51ae39.cb = _0x5f2d23.Sa;
            }, _0x51ae39.za = function (_0x474361, _0x553679) {
                _0x51ae39.Vb(_0x474361, function () {
                    var _0x489188 = _0x1c2b;
                    console[_0x489188(0x308)](_0x553679);
                    if (wormxt_Obj[_0x489188(0x342)]) {
                        var _0x51a53f = document.getElementById(_0x489188(0x7dd))[_0x489188(0x66a)],
                            _0x1cb453 = Math[_0x489188(0x396)](0x20, _0x51a53f[_0x489188(0x56a)]),
                            _0x44aa7c = new ArrayBuffer(0x7 + 0x2 * _0x1cb453),
                            _0x237f49 = new DataView(_0x44aa7c),
                            _0x58ba54 = 0x0;
                        _0x237f49.setInt8(_0x58ba54, 0x81), _0x58ba54 += 0x1, _0x237f49[_0x489188(0x33f)](_0x58ba54, 0xaf0), _0x58ba54 += 0x2, _0x237f49.setInt8(_0x58ba54, 0x0), _0x58ba54 += 0x1, _0x237f49[_0x489188(0x33f)](_0x58ba54, 0x80), _0x58ba54 += 0x2, _0x237f49.setInt8(_0x58ba54, _0x1cb453), _0x58ba54++;
                        for (var _0x511e76 = 0x0; _0x511e76 < _0x1cb453; _0x511e76++) {
                            _0x237f49.setInt16(_0x58ba54, _0x51a53f.charCodeAt(_0x511e76)), _0x58ba54 += 0x2;
                        }
                        _0x51ae39.Wb(_0x44aa7c);
                    } else {
                        var _0x1cb453 = Math.min(0x800, _0x553679.length),
                            _0x44aa7c = new ArrayBuffer(0x6 + 0x2 * _0x1cb453),
                            _0x44f315 = new DataView(_0x44aa7c),
                            _0x58ba54 = 0x0;
                        _0x44f315[_0x489188(0x68b)](_0x58ba54, 0x81), _0x58ba54 += 0x1, _0x44f315[_0x489188(0x33f)](_0x58ba54, 0xaf0), _0x58ba54 += 0x2, _0x44f315.setInt8(_0x58ba54, 0x1), _0x58ba54 += 0x1, _0x44f315[_0x489188(0x33f)](_0x58ba54, _0x1cb453), _0x58ba54 += 0x2;
                        for (var _0x511e76 = 0x0; _0x511e76 < _0x1cb453; _0x511e76++) {
                            _0x44f315[_0x489188(0x33f)](_0x58ba54, _0x553679[_0x489188(0x816)](_0x511e76)), _0x58ba54 += 0x2;
                        }
                        _0x51ae39.Wb(_0x44aa7c);
                    }
                });
            };
            let _0x2df174;

            function _0xc26274() {
                _0x56c378(), _0x2df174 = setInterval(() => {
                    var _0x460c4d = _0x1c2b;
                    if (_0x51ae39.db && _0x51ae39.db[_0x460c4d(0x546)] === WebSocket[_0x460c4d(0x752)]) {
                        const _0x533698 = new Uint8Array([]);
                        _0x51ae39.db.send(_0x533698);
                    }
                }, 0x64);
            }

            function _0x56c378() {
                _0x2df174 && (clearInterval(_0x2df174), _0x2df174 = null);
            }
            return _0x51ae39.Ca = function (_0x410792, _0x1bc71d, _0x3072ca) {
                _0x51ae39.Vb(_0x410792, function () {
                    var _0x237ac0 = _0x1c2b,
                        _0x194ae3 = Math.min(0x20, _0x1bc71d[_0x237ac0(0x56a)]),
                        _0x24675c = new ArrayBuffer(0x7 + 0x2 * _0x194ae3),
                        _0xe9cb76 = new DataView(_0x24675c),
                        _0x169f2f = 0x0;
                    _0xe9cb76.setInt8(_0x169f2f, 0x81), _0x169f2f += 0x1, _0xe9cb76[_0x237ac0(0x33f)](_0x169f2f, 0xaf0), _0x169f2f += 0x2, _0xe9cb76[_0x237ac0(0x68b)](_0x169f2f, 0x0), _0x169f2f += 0x1, _0xe9cb76[_0x237ac0(0x33f)](_0x169f2f, _0x3072ca), _0x169f2f += 0x2, _0xe9cb76.setInt8(_0x169f2f, _0x194ae3), _0x169f2f++;
                    for (var _0x2a9c39 = 0x0; _0x2a9c39 < _0x194ae3; _0x2a9c39++) {
                        _0xe9cb76[_0x237ac0(0x33f)](_0x169f2f, _0x1bc71d.charCodeAt(_0x2a9c39)), _0x169f2f += 0x2;
                    }
                    _0x51ae39.Wb(_0x24675c), console[_0x237ac0(0x308)](_0x24675c);
                });
            }, _0x51ae39.Wb = function (_0x42a173) {
                var _0x1d78f1 = _0x1c2b;
                try {
                    null != _0x51ae39.db && _0x51ae39.db[_0x1d78f1(0x546)] === WebSocket.OPEN && _0x51ae39.db[_0x1d78f1(0x78a)](_0x42a173);
                } catch (_0x39e3ae) {
                    console[_0x1d78f1(0x308)]('Socket send error: ' + _0x39e3ae), _0x51ae39.Ub();
                }
            }, _0x51ae39.xb = function (_0x14d38a, _0x1de917) {
                var _0x5554cd = _0x1de917 ? 0x80 : 0x0,
                    _0x474d58 = _0x31eb2c(_0x14d38a) / _0x206d4c * 0x80 & 0x7f,
                    _0x106cf1 = 0xff & (_0x5554cd | _0x474d58);
                if (_0x51ae39.eb !== _0x106cf1) {
                    var _0x341cc8 = new ArrayBuffer(0x1);
                    new DataView(_0x341cc8).setInt8(0x0, _0x106cf1), _0x51ae39.Wb(_0x341cc8), _0x51ae39.eb = _0x106cf1;
                }
            }, _0x51ae39.Vb = function (_0x50449c, _0x53bb21) {
                var _0x3d4f78 = _0x1c2b,
                    _0x44c115 = _0x51ae39.db = new WebSocket(_0x50449c);
                _0x44c115[_0x3d4f78(0x3ce)] = _0x3d4f78(0x1d3), window[_0x3d4f78(0x415)] = _0x44c115[_0x3d4f78(0x660)] = function () {
                    var _0xc62b66 = _0x3d4f78;
                    _0x51ae39.db === _0x44c115 && (console.log(_0xc62b66(0x2cf)), _0xc26274(), _0x53bb21()), isPlaying = true;
                }, window.onclose = _0x44c115[_0x3d4f78(0x43e)] = function () {
                    var _0x46556f = _0x3d4f78;
                    _wrmxt[_0x46556f(0x840)] = false, _0x51ae39.db === _0x44c115 && (console[_0x46556f(0x308)](_0x46556f(0x602)), _0x56c378(), _0x51ae39.Ub()), isPlaying = false;
                }, _0x44c115.onerror = function (_0x19e803) {
                    var _0x7b9507 = _0x3d4f78;
                    console[_0x7b9507(0x308)](_0x19e803[_0x7b9507(0x384)]), _0x51ae39.db === _0x44c115 && (console.log(_0x7b9507(0x249)), _0x56c378(), _0x51ae39.Ub()), isPlaying = false;
                }, _0x44c115[_0x3d4f78(0x83d)] = function (_0xd936b0) {
                    var _0x2e2d41 = _0x3d4f78;
                    if (_0x51ae39.db === _0x44c115) {
                        _0x51ae39.z.Xb(_0xd936b0[_0x2e2d41(0x384)]);
                        let _0x2e3eb8 = Date[_0x2e2d41(0x4f0)]();
                        ping = _0x2e3eb8 - ultimoMensaje, ultimoMensaje = _0x2e3eb8, tiempos.push(ping);
                        tiempos[_0x2e2d41(0x56a)] > 0x14 && tiempos[_0x2e2d41(0x26b)]();
                        let _0x58d448 = Math[_0x2e2d41(0x273)](tiempos[_0x2e2d41(0x724)]((_0x549606, _0x118486) => _0x549606 + _0x118486, 0x0) / tiempos.length);
                        lxpdserverping.text = _0x58d448 + 'ms', lxpdserverping[_0x2e2d41(0x45d)][_0x2e2d41(0x424)] = getPingColor(_0x58d448);
                    }
                };
            }, _0x51ae39;
        }
        var _0x341c3b = atob('aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8='),
            _0xcfa754 = atob('aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw=='),
            _0x19f833 = window.I18N_LANG;
        !_0x19f833 && (_0x19f833 = 'en');
        var _0x104f30 = undefined;
        switch (_0x19f833) {
        case 'uk':
            _0x104f30 = _0x17b28a(0x264);
            break;
        case 'de':
            _0x104f30 = _0x17b28a(0x46c);
            break;
        case 'fr':
            _0x104f30 = _0x17b28a(0x31c);
            break;
        case 'ru':
            _0x104f30 = _0x17b28a(0x444);
            break;
        case 'es':
            _0x104f30 = 'es_ES';
            break;
        default:
            _0x104f30 = _0x17b28a(0x534);
        }
        moment[_0x17b28a(0x871)](_0x104f30);
        var _0x5d3eae, _0x33b36c, _0x2ca529, _0x17f61d, _0x22469b = undefined;
        _0x33b36c = (_0x5d3eae = {
            'Yb': eval(atob(_0x17b28a(0x84b)))
        }).Yb[atob(_0x17b28a(0x476))], _0x2ca529 = _0x5d3eae.Yb[atob(_0x17b28a(0x6d1))];
        var _0x505856 = {
                'Zb': _0x5d3eae.Yb[atob(_0x17b28a(0x315))],
                '$b': _0x5d3eae.Yb[atob('QmFzZVRleHR1cmU=')],
                '_b': _0x5d3eae.Yb[atob(_0x17b28a(0x607))],
                'ac': _0x5d3eae.Yb[atob(_0x17b28a(0x8a3))],
                'bc': _0x5d3eae.Yb[atob(_0x17b28a(0x503))],
                'cc': _0x5d3eae.Yb[atob(_0x17b28a(0x579))],
                'dc': _0x5d3eae.Yb[atob(_0x17b28a(0x633))],
                'ec': _0x5d3eae.Yb[atob(_0x17b28a(0x2ba))],
                'fc': _0x5d3eae.Yb[atob(_0x17b28a(0x361))],
                'gc': _0x5d3eae.Yb[atob(_0x17b28a(0x6e4))],
                'hc': _0x5d3eae.Yb[atob(_0x17b28a(0x82e))],
                'ic': {
                    'jc': _0x33b36c[atob(_0x17b28a(0x325))]
                },
                'kc': {
                    'lc': _0x2ca529[atob(_0x17b28a(0x2ca))],
                    'CLAMP': _0x5d3eae.Yb[_0x17b28a(0x5c4)][_0x17b28a(0x3cc)]
                }
            },
            _0x206d4c = 0x2 * Math.PI;
        _0x17f61d = [atob(_0x17b28a(0x73f)), atob(_0x17b28a(0x53a)), atob(_0x17b28a(0x738)), atob(_0x17b28a(0x22b)), atob('Z2V0RmxvYXQ2NA==')], DataView.prototype.mc = function (_0x12c9c0) {
            return this[_0x17f61d[0x0]](_0x12c9c0);
        }, DataView[_0x17b28a(0x72d)].nc = function (_0x44b168) {
            return this[_0x17f61d[0x1]](_0x44b168);
        }, DataView[_0x17b28a(0x72d)].oc = function (_0x1954f5) {
            return this[_0x17f61d[0x2]](_0x1954f5);
        }, DataView[_0x17b28a(0x72d)].pc = function (_0x3eb5c9) {
            return this[_0x17f61d[0x3]](_0x3eb5c9);
        }, DataView[_0x17b28a(0x72d)].qc = function (_0x2b57a0) {
            return this[_0x17f61d[0x4]](_0x2b57a0);
        }, _0x30354b.H.P = ((_0x554555 = _0xa914b4.c[_0x17b28a(0x1d2)]) || (_0x554555 = 'en'), _0x554555), _0x30354b.H.Q = (function () {
            var _0x4fb2a3 = _0x17b28a,
                _0xb54d19;
            switch (_0x30354b.H.P) {
            case 'uk':
                _0xb54d19 = _0x4fb2a3(0x264);
                break;
            case 'de':
                _0xb54d19 = _0x4fb2a3(0x46c);
                break;
            case 'fr':
                _0xb54d19 = _0x4fb2a3(0x31c);
                break;
            case 'es':
                _0xb54d19 = _0x4fb2a3(0x6dd);
                break;
            default:
                _0xb54d19 = 'en_US';
            };
            return _0xb54d19;
        }()), moment[_0x17b28a(0x871)](_0x30354b.H.Q), ooo = null, _0x30354b.S = 6.283185307179586, _0x30354b.T = 3.141592653589793, _0x2cbc88 = _0xa914b4.c[_0x17b28a(0x8ca)], _0x1a7a89.U = function (_0xb6af84) {
            return _0x2cbc88[_0xb6af84];
        }, _0x1a7a89.V = function (_0x227106) {
            if (_0x227106[_0x30354b.H.P]) return _0x227106[_0x30354b.H.P];
            else return _0x227106.en ? _0x227106.en : _0x227106.x;
        }, _0x1a7a89.W = function (_0x536dca) {
            return encodeURI(_0x536dca);
        }, _0x1a7a89.X = function (_0x1424db, _0x30f2bf) {
            return setInterval(_0x1424db, _0x30f2bf);
        }, _0x1a7a89.Y = function (_0x2743b7, _0x165a41) {
            return setTimeout(_0x2743b7, _0x165a41);
        }, _0x1a7a89.Z = function (_0x20bfd9) {
            clearTimeout(_0x20bfd9);
        }, _0x1a7a89.$ = function (_0x454cb3) {
            var _0x326c55 = _0x17b28a,
                _0x249512 = (_0x1a7a89._(_0x454cb3) % 0x3c).toString(),
                _0x2ae232 = (_0x1a7a89._(_0x454cb3 / 0x3c) % 0x3c)[_0x326c55(0x3ae)](),
                _0xdb323d = (_0x1a7a89._(_0x454cb3 / 0xe10) % 0x18).toString(),
                _0x1dd7b9 = _0x1a7a89._(_0x454cb3 / 0x15180)[_0x326c55(0x3ae)](),
                _0x4c40b1 = _0x1a7a89.U('util.time.days'),
                _0x423651 = _0x1a7a89.U(_0x326c55(0x3d9)),
                _0x51d63c = _0x1a7a89.U(_0x326c55(0x226)),
                _0x4795c6 = _0x1a7a89.U(_0x326c55(0x4b5));
            if (_0x1dd7b9 > 0x0) return _0x1dd7b9 + ' ' + _0x4c40b1 + ' ' + _0xdb323d + ' ' + _0x423651 + ' ' + _0x2ae232 + ' ' + _0x51d63c + ' ' + _0x249512 + ' ' + _0x4795c6;
            else {
                if (_0xdb323d > 0x0) return _0xdb323d + ' ' + _0x423651 + ' ' + _0x2ae232 + ' ' + _0x51d63c + ' ' + _0x249512 + ' ' + _0x4795c6;
                else return _0x2ae232 > 0x0 ? _0x2ae232 + ' ' + _0x51d63c + ' ' + _0x249512 + ' ' + _0x4795c6 : _0x249512 + ' ' + _0x4795c6;
            }
        }, _0x1a7a89.aa = function (_0xeb998b) {
            var _0x560779 = _0x17b28a;
            return _0xeb998b[_0x560779(0x7b8)]('href') ? _0xeb998b[_0x560779(0x733)](_0x560779(0x7cd), _0x560779(0x649)) : _0xeb998b;
        }, _0x1a7a89.ba = function (_0x37fd7f, _0x2ed57e, _0x24a3ac) {
            var _0x6ef903 = _0x17b28a,
                _0x100720 = _0xa914b4.d[_0x6ef903(0x43a)](_0x6ef903(0x2a9)),
                _0x44c5d8 = true;
            _typeof(_0x2ed57e) !== _0x6ef903(0x76e) && _0x2ed57e !== null && (_typeof(_0x2ed57e.id) !== _0x6ef903(0x76e) && (_0x100720.id = _0x2ed57e.id), _typeof(_0x2ed57e[_0x6ef903(0x5d4)]) !== 'undefined' && _0x2ed57e[_0x6ef903(0x5d4)] && (_0x100720.async = 'async'), _typeof(_0x2ed57e[_0x6ef903(0x4ed)]) !== _0x6ef903(0x76e) && _0x2ed57e[_0x6ef903(0x4ed)] && (_0x100720[_0x6ef903(0x4ed)] = _0x6ef903(0x4ed)), _typeof(_0x2ed57e[_0x6ef903(0x38a)]) !== _0x6ef903(0x76e) && (_0x100720[_0x6ef903(0x38a)] = _0x2ed57e.crossorigin)), _0x100720[_0x6ef903(0x729)] = _0x6ef903(0x201), _0x100720[_0x6ef903(0x5e2)] = _0x37fd7f, _0x24a3ac && (_0x100720[_0x6ef903(0x889)] = _0x100720[_0x6ef903(0x1dd)] = function () {
                var _0x54c886 = _0x6ef903;
                _0x44c5d8 = false;
                try {
                    _0x24a3ac();
                } catch (_0x5970f4) {};
                _0x100720[_0x54c886(0x889)] = _0x100720[_0x54c886(0x1dd)] = null;
            }), (_0xa914b4.d[_0x6ef903(0x33a)] || _0xa914b4.d[_0x6ef903(0x673)](_0x6ef903(0x33a))[0x0])[_0x6ef903(0x6c1)](_0x100720);
        }, _0x1a7a89.ca = function (_0xf036d8, _0x39c90e) {
            var _0x530da2 = _0x17b28a,
                _0xcf825b = _0x39c90e;
            return _0xcf825b[_0x530da2(0x72d)] = Object[_0x530da2(0x6ae)](_0xf036d8[_0x530da2(0x72d)]), _0xcf825b[_0x530da2(0x72d)][_0x530da2(0x66c)] = _0xcf825b, _0xcf825b[_0x530da2(0x59f)] = _0xf036d8, _0xcf825b;
        }, _0x1a7a89.da = function (_0x13ad8c) {
            return (_0x13ad8c %= _0x30354b.S) < 0x0 ? _0x13ad8c + _0x30354b.S : _0x13ad8c;
        }, _0x1a7a89.ea = function (_0x125c03, _0x103f5d, _0x7fc360) {
            return _0x1a7a89.fa(_0x7fc360, _0x125c03, _0x103f5d);
        }, _0x1a7a89.fa = function (_0x401168, _0x22d870, _0x49788c) {
            var _0x31f40d = _0x17b28a;
            if (_0x401168 > _0x49788c) return _0x49788c;
            else {
                if (_0x401168 < _0x22d870) return _0x22d870;
                else return Number[_0x31f40d(0x2c2)](_0x401168) ? _0x401168 : (_0x22d870 + _0x49788c) * 0.5;
            }
        }, _0x1a7a89.ga = function (_0x462c25, _0x512062, _0x2affeb, _0x516f57) {
            return _0x512062 > _0x462c25 ? _0x1a7a89.ha(_0x512062, _0x462c25 + _0x2affeb * _0x516f57) : _0x1a7a89.ia(_0x512062, _0x462c25 - _0x2affeb * _0x516f57);
        }, _0x1a7a89.ja = function (_0x42c620, _0x5e83be, _0x26762f, _0x7c9788, _0x1b9d56) {
            var _0x83f773 = _0x17b28a;
            return _0x5e83be + (_0x42c620 - _0x5e83be) * Math[_0x83f773(0x3ee)](0x1 - _0x7c9788, _0x26762f / _0x1b9d56);
        }, _0x1a7a89.ka = function (_0x248f71, _0x4d5927, _0x1756c6) {
            return _0x248f71 - (_0x248f71 - _0x4d5927) * _0x1756c6;
        }, _0x1a7a89.la = function (_0x4722a6, _0x24dd6a) {
            var _0x39df3f = _0x17b28a;
            return Math[_0x39df3f(0x44c)](_0x4722a6 * _0x4722a6 + _0x24dd6a * _0x24dd6a);
        }, _0x1a7a89.ma = function () {
            var _0x42feaa = _0x17b28a;
            return Math[_0x42feaa(0x2b7)]();
        }, _0x1a7a89._ = function (_0x4dcde1) {
            return Math.floor(_0x4dcde1);
        }, _0x1a7a89.na = function (_0x3cab6a) {
            var _0x11aa88 = _0x17b28a;
            return Math[_0x11aa88(0x85c)](_0x3cab6a);
        }, _0x1a7a89.ha = function (_0x2302ca, _0x3d106f) {
            return Math.min(_0x2302ca, _0x3d106f);
        }, _0x1a7a89.ia = function (_0x5901b4, _0x1f555c) {
            var _0x5e0d2a = _0x17b28a;
            return Math[_0x5e0d2a(0x78e)](_0x5901b4, _0x1f555c);
        }, _0x1a7a89.oa = function (_0x2deadb) {
            var _0x398ab0 = _0x17b28a;
            return Math[_0x398ab0(0x701)](_0x2deadb);
        }, _0x1a7a89.pa = function (_0x5422b8) {
            var _0x2c0981 = _0x17b28a;
            return Math[_0x2c0981(0x383)](_0x5422b8);
        }, _0x1a7a89.qa = function (_0xb7eab3) {
            var _0x163e89 = _0x17b28a;
            return Math[_0x163e89(0x44c)](_0xb7eab3);
        }, _0x1a7a89.ra = function (_0x3a1d6b, _0x2cdcb8) {
            return Math.pow(_0x3a1d6b, _0x2cdcb8);
        }, _0x1a7a89.sa = function (_0x253cb2) {
            var _0x4c4bc5 = _0x17b28a;
            return Math[_0x4c4bc5(0x261)](_0x253cb2);
        }, _0x1a7a89.ta = function (_0x4373d0, _0x1907ec) {
            var _0x950af6 = _0x17b28a;
            return Math[_0x950af6(0x7d5)](_0x4373d0, _0x1907ec);
        }, _0x1a7a89.ua = function (_0x359f17, _0x102757, _0x4b5cce, _0x51cf6c) {
            var _0x35a9ea = _0x17b28a,
                _0x51d7cb = _0x102757 + _0x51cf6c;
            if (_0x359f17 == null) throw TypeError();;
            var _0x57a6ff = _0x359f17[_0x35a9ea(0x56a)] >>> 0x0,
                _0x3094ac = _0x4b5cce >> 0x0,
                _0x469d0e = _0x3094ac < 0x0 ? Math.max(_0x57a6ff + _0x3094ac, 0x0) : Math.min(_0x3094ac, _0x57a6ff),
                _0x33e550 = _0x102757 >> 0x0,
                _0x4db92f = _0x33e550 < 0x0 ? Math[_0x35a9ea(0x78e)](_0x57a6ff + _0x33e550, 0x0) : Math.min(_0x33e550, _0x57a6ff),
                _0x199ece = _0x51d7cb === undefined ? _0x57a6ff : _0x51d7cb >> 0x0,
                _0x330012 = Math[_0x35a9ea(0x396)]((_0x199ece < 0x0 ? Math.max(_0x57a6ff + _0x199ece, 0x0) : Math[_0x35a9ea(0x396)](_0x199ece, _0x57a6ff)) - _0x4db92f, _0x57a6ff - _0x469d0e),
                _0x2d361d = 0x1;
            for (_0x4db92f < _0x469d0e && _0x469d0e < _0x4db92f + _0x330012 && (_0x2d361d = -0x1, _0x4db92f += _0x330012 - 0x1, _0x469d0e += _0x330012 - 0x1); _0x330012 > 0x0;) {
                _0x4db92f in _0x359f17 ? _0x359f17[_0x469d0e] = _0x359f17[_0x4db92f] : delete _0x359f17[_0x469d0e], _0x4db92f += _0x2d361d, _0x469d0e += _0x2d361d, _0x330012--;
            };
            return _0x359f17;
        }, _0x1a7a89.va = function (_0x4aa530, _0x12b4e6) {
            return _0x4aa530 + (_0x12b4e6 - _0x4aa530) * _0x1a7a89.ma();
        }, _0x1a7a89.wa = function (_0x30589c) {
            var _0x2467e3 = _0x17b28a;
            return _0x30589c[parseInt(_0x1a7a89.ma() * _0x30589c[_0x2467e3(0x56a)])];
        }, _0x47c6f5 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'][_0x17b28a(0x582)](function (_0xc7fd6f) {
            var _0x4cb796 = _0x17b28a;
            return _0xc7fd6f[_0x4cb796(0x816)](0x0);
        }), _0x1a7a89.xa = function (_0x402e2a) {
            _typeof(_0x402e2a) == 'undefined' && (_0x402e2a = 0x10);
            var _0x580fba = '';
            for (var _0x487620 = 0x0; _0x487620 < _0x402e2a; _0x487620++) {
                _0x580fba += String.fromCharCode(_0x47c6f5[_0x1a7a89._(_0x1a7a89.ma() * _0x47c6f5.length)]);
            };
            return _0x580fba;
        }, _0x1a7a89.ya = function (_0x52cfd6, _0x359e4e, _0x43e17b) {
            var _0x43980e = _0x17b28a,
                _0x2f7ca4 = _0x43e17b * (0x1 - _0x359e4e * 0.5),
                _0x4e6ff0 = Math[_0x43980e(0x396)](_0x2f7ca4, 0x1 - _0x2f7ca4);
            return _0x1a7a89.za(_0x52cfd6, _0x4e6ff0 ? (_0x43e17b - _0x2f7ca4) / _0x4e6ff0 : 0x0, _0x2f7ca4);
        }, _0x1a7a89.za = function (_0x29898d, _0x2ad039, _0x118d7a) {
            var _0x265d5d = (0x1 - _0x1a7a89.na(_0x118d7a * 0x2 - 0x1)) * _0x2ad039,
                _0x365a4a = _0x265d5d * (0x1 - _0x1a7a89.na(_0x29898d / 0x3c % 0x2 - 0x1)),
                _0x543f1c = _0x118d7a - _0x265d5d / 0x2;
            if (_0x29898d >= 0x0 && _0x29898d < 0x3c) return [_0x543f1c + _0x265d5d, _0x543f1c + _0x365a4a, _0x543f1c];
            else {
                if (_0x29898d >= 0x3c && _0x29898d < 0x78) return [_0x543f1c + _0x365a4a, _0x543f1c + _0x265d5d, _0x543f1c];
                else {
                    if (_0x29898d >= 0x78 && _0x29898d < 0xb4) return [_0x543f1c, _0x543f1c + _0x265d5d, _0x543f1c + _0x365a4a];
                    else {
                        if (_0x29898d >= 0xb4 && _0x29898d < 0xf0) return [_0x543f1c, _0x543f1c + _0x365a4a, _0x543f1c + _0x265d5d];
                        else return _0x29898d >= 0xf0 && _0x29898d < 0x12c ? [_0x543f1c + _0x365a4a, _0x543f1c, _0x543f1c + _0x265d5d] : [_0x543f1c + _0x265d5d, _0x543f1c, _0x543f1c + _0x365a4a];
                    }
                }
            }
        }, _0x1a7a89.Aa = function (_0x128741, _0xd46b2d, _0x330c02) {
            var _0x574836 = _0x17b28a;
            $[_0x574836(0x64d)](_0x128741)[_0x574836(0x76a)](_0xd46b2d)[_0x574836(0x40b)](_0x330c02);
        }, _0x1a7a89.Ba = function (_0x1b670f, _0x34c3fb, _0x3d19ec, _0x522c02) {
            var _0x1816bc = _0x17b28a,
                _0x46b1b3 = {
                    'type': _0x1816bc(0x3da),
                    'url': _0x1b670f
                },
                _0x2a923d = {
                    'responseType': _0x1816bc(0x1d3)
                };
            _0x2a923d[_0x1816bc(0x300)] = function (_0x186520) {
                _0x186520.lengthComputable && _0x522c02(_0x186520.loaded / _0x186520.total * 0x64);
            }, _0x46b1b3.xhrFields = _0x2a923d, $[_0x1816bc(0x336)](_0x46b1b3)[_0x1816bc(0x76a)](_0x34c3fb)[_0x1816bc(0x40b)](_0x3d19ec);
        }, _0x1a7a89.Ca = function () {
            var _0x491c1f = _0x17b28a;
            return Date[_0x491c1f(0x4f0)]();
        }, _0x1a7a89.Da = function (_0x144913, _0x1497ae) {
            var _0x42e938 = _0x17b28a;
            for (var _0x2476c7 in _0x144913) {
                _0x144913[_0x42e938(0x664)](_0x2476c7) && _0x1497ae(_0x2476c7, _0x144913[_0x2476c7]);
            }
        }, _0x1a7a89.Ea = function (_0x502941) {
            var _0x47f11b = _0x17b28a;
            for (var _0x2fbe76 = _0x502941[_0x47f11b(0x56a)] - 0x1; _0x2fbe76 > 0x0; _0x2fbe76--) {
                var _0x5e6a56 = _0x1a7a89._(_0x1a7a89.ma() * (_0x2fbe76 + 0x1)),
                    _0x53ab84 = _0x502941[_0x2fbe76];
                _0x502941[_0x2fbe76] = _0x502941[_0x5e6a56], _0x502941[_0x5e6a56] = _0x53ab84;
            };
            return _0x502941;
        }, _0xa914b4.Fa = _0x1a7a89.b(_0x17b28a(0x5dd)), _0xa914b4.Ga = _0x1a7a89.b(_0x17b28a(0x7af)), _0xa914b4.Ha = (function () {
            var _0x1302da = _0x17b28a;

            function _0x2dcdfb(_0x352835) {
                this.Ia = _0x352835, this.Ja = 0x0;
            }
            var _0xb0f2ec = _0x1302da(0x32f);
            _0x2dcdfb[_0x1302da(0x72d)].Ka = function () {
                var _0x351766 = this.Ia[_0xb0f2ec](this.Ja);
                return this.Ja += 0x1, _0x351766;
            };
            var _0x1e6249 = _0x1302da(0x781);
            _0x2dcdfb[_0x1302da(0x72d)].La = function () {
                var _0x4e9133 = this.Ia[_0x1e6249](this.Ja);
                return this.Ja += 0x2, _0x4e9133;
            };
            var _0x598f8d = _0x1302da(0x457);
            _0x2dcdfb.prototype.Ma = function () {
                var _0x593a67 = this.Ia[_0x598f8d](this.Ja);
                return this.Ja += 0x4, _0x593a67;
            };
            var _0x5cba55 = _0x1302da(0x20c);
            return _0x2dcdfb[_0x1302da(0x72d)].Na = function () {
                var _0x4ee1cf = this.Ia[_0x5cba55](this.Ja);
                return this.Ja += 0x4, _0x4ee1cf;
            }, _0x2dcdfb;
        }()), _0xa914b4.Oa = (function () {
            var _0x49ddf7 = _0x17b28a;

            function _0x293251(_0xfc030b) {
                this.Ia = _0xfc030b, this.Ja = 0x0;
            }
            var _0x5c5f13 = _0x49ddf7(0x68b);
            _0x293251[_0x49ddf7(0x72d)].Pa = function (_0x1b1a75) {
                this.Ia[_0x5c5f13](this.Ja, _0x1b1a75), this.Ja += 0x1;
            };
            var _0x599480 = _0x49ddf7(0x33f);
            return _0x293251[_0x49ddf7(0x72d)].Qa = function (_0x3b0046) {
                this.Ia[_0x599480](this.Ja, _0x3b0046), this.Ja += 0x2;
            }, _0x293251;
        }()), _0x1a7a89.Ra = function () {
            var _0x40cbf5 = _0x17b28a,
                _0x2bd4b2 = false;

            function _0x1a5eac() {}
            var _0x4aca3e = {},
                _0x27ac1a = '1eaom01c3pxu9wd3',
                _0x53f87d = $('#' + _0x27ac1a),
                _0x21b00b = _0x40cbf5(0x8b3),
                _0x2b0278 = $('#' + _0x21b00b);
            return $(_0x40cbf5(0x39e))[_0x40cbf5(0x57b)](function () {
                var _0x136b73 = _0x40cbf5;
                _0x2b0278[_0x136b73(0x3df)](0x1f4), _0x1a5eac(false);
            }), _0x4aca3e.Sa = function (_0x5e3077) {
                var _0x252597 = _0x40cbf5;
                _0x1a5eac = _0x5e3077;
                if (!_0x2bd4b2) try {
                    aiptag[_0x252597(0x630)].player[_0x252597(0x6a2)](function () {
                        var _0xbeadac = _0x252597,
                            _0x31c835 = {
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': true,
                                'AD_CENTERPLAYER': false
                            };
                        _0x31c835[_0xbeadac(0x723)] = 'loading advertisement', _0x31c835[_0xbeadac(0x5f5)] = function () {
                            return _0xa914b4.d.getElementById(_0x27ac1a);
                        }, _0x31c835.AIP_COMPLETE = function (_0xab2374) {
                            var _0x53b8ce = _0xbeadac;
                            _0x1a5eac(true), _0x51599b.f.h(_0x53f87d, 0x1), _0x51599b.f.h(_0x2b0278, 0x1);
                            try {
                                ga(_0x53b8ce(0x78a), 'event', _0x53b8ce(0x42b), _0x30354b.H.I + _0x53b8ce(0x81c));
                            } catch (_0x417965) {}
                        }, _0x31c835[_0xbeadac(0x646)] = function () {}, aiptag.adplayer = new aipPlayer(_0x31c835);
                    }), _0x2bd4b2 = true;
                } catch (_0x5b919a) {}
            }, _0x4aca3e.Ta = function () {
                var _0x31daca = _0x40cbf5;
                if (_typeof(aiptag[_0x31daca(0x763)]) !== _0x31daca(0x76e)) {
                    try {
                        ga(_0x31daca(0x78a), _0x31daca(0x228), _0x31daca(0x42b), _0x30354b.H.I + _0x31daca(0x5b5));
                    } catch (_0x2b3325) {};
                    _0x51599b.f.g(_0x53f87d, 0x1), !_0x5a0b1f.on && aiptag[_0x31daca(0x630)].player.push(function () {
                        var _0x57ca8d = _0x31daca;
                        aiptag[_0x57ca8d(0x763)][_0x57ca8d(0x453)]();
                    });
                } else {
                    try {
                        ga(_0x31daca(0x78a), 'event', _0x31daca(0x712), _0x30354b.H.I + '_start');
                    } catch (_0x593468) {};
                    (function _0x49dbc7() {
                        var _0x471367 = _0x31daca;
                        $('#adbl-1').text(_0x1a7a89.U(_0x471367(0x5a5))), $(_0x471367(0x401))[_0x471367(0x2df)](_0x1a7a89.U('index.game.antiadblocker.msg2')), $(_0x471367(0x8c0))[_0x471367(0x2df)](_0x1a7a89.U(_0x471367(0x2ab))), $(_0x471367(0x439))[_0x471367(0x2df)](_0x1a7a89.U('index.game.antiadblocker.msg4').replace(_0x471367(0x762), 0xa)), $(_0x471367(0x314))[_0x471367(0x2df)](_0x1a7a89.U(_0x471367(0x6f8))), _0x51599b.f.h($(_0x471367(0x39e)), 0x1), _0x51599b.f.g(_0x2b0278, 0x1f4);
                        var _0x3a2254 = 0xa;
                        for (var _0x185d00 = 0x0; _0x185d00 < 0xa; _0x185d00++) {
                            _0x1a7a89.Y(function () {
                                var _0x14edc1 = _0x471367;
                                _0x3a2254--, $(_0x14edc1(0x439)).text(_0x1a7a89.U(_0x14edc1(0x36c))[_0x14edc1(0x29f)]('{0}', _0x3a2254));
                                if (_0x3a2254 === 0x0) {
                                    try {
                                        ga(_0x14edc1(0x78a), _0x14edc1(0x228), _0x14edc1(0x712), _0x30354b.H.I + _0x14edc1(0x81c));
                                    } catch (_0x291f8f) {};
                                    _0x51599b.f.g($(_0x14edc1(0x39e)), 0xc8);
                                }
                            }, (_0x185d00 + 0x1) * 0x3e8);
                        }
                    }());
                }
            }, _0x4aca3e;
        }, _0x1a7a89.Ua = function (_0x11a0cd, _0x102e05) {
            var _0x41c360 = $('#' + _0x11a0cd),
                _0x187560 = _0x102e05,
                _0x25bfe3 = {},
                _0x5e5a17 = false;
            return _0x25bfe3.Sa = function () {
                var _0x5f48eb = _0x1c2b;
                if (!_0x5e5a17) {
                    _0x41c360.empty(), _0x41c360[_0x5f48eb(0x1da)](_0x5f48eb(0x698) + _0x187560 + '\'></div>');
                    try {
                        try {
                            ga(_0x5f48eb(0x78a), _0x5f48eb(0x228), _0x5f48eb(0x51f), _0x30354b.H.I + _0x5f48eb(0x672));
                        } catch (_0x139d10) {};
                        !_0x5a0b1f.on && aiptag.cmd[_0x5f48eb(0x63d)][_0x5f48eb(0x6a2)](function () {
                            var _0x44cbb1 = _0x5f48eb;
                            aipDisplayTag[_0x44cbb1(0x63d)](_0x187560);
                        }), _0x5e5a17 = true;
                    } catch (_0x2d4312) {}
                }
            }, _0x25bfe3.Va = function () {
                var _0x2c2b88 = _0x1c2b;
                try {
                    try {
                        ga(_0x2c2b88(0x78a), _0x2c2b88(0x228), 'banner', _0x30354b.H.I + _0x2c2b88(0x58c));
                    } catch (_0x99a0d7) {};
                    !_0x5a0b1f.on && aiptag.cmd[_0x2c2b88(0x63d)][_0x2c2b88(0x6a2)](function () {
                        var _0x1fd808 = _0x2c2b88;
                        aipDisplayTag[_0x1fd808(0x63d)](_0x187560);
                    });
                } catch (_0x2d7a9f) {}
            }, _0x25bfe3;
        }, _0xa914b4.Wa = (function () {
            var _0x3e1be7 = _0x17b28a;

            function _0x47e3d8(_0x242e98, _0x103bb7, _0x187303, _0xc6ab9c, _0x359dbf, _0x498cd2, _0x4a9190, _0x8876f6, _0x48628c, _0x44f8af) {
                this.Xa = _0x242e98, this.Ya = _0x103bb7, this.Za = null, this.$a = false, this._a = _0x187303, this.ab = _0xc6ab9c, this.bb = _0x359dbf, this.cb = _0x498cd2, this.db = _0x4a9190 || (_0x48628c || _0x359dbf) / 0x2, this.eb = _0x8876f6 || (_0x44f8af || _0x498cd2) / 0x2, this.fb = _0x48628c || _0x359dbf, this.gb = _0x44f8af || _0x498cd2, this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb, this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb, this.jb = this.bb / this.fb, this.kb = this.cb / this.gb;
            }
            return _0x47e3d8.lb = function () {
                return new _0x47e3d8('', null, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0);
            }, _0x47e3d8.mb = function (_0x81b015, _0x373fad, _0x8bde25) {
                return new _0x47e3d8(_0x81b015, _0x373fad, _0x8bde25.x, _0x8bde25.y, _0x8bde25.w, _0x8bde25.h, _0x8bde25.px, _0x8bde25.py, _0x8bde25.pw, _0x8bde25.ph);
            }, _0x47e3d8.prototype.nb = function () {
                return !this.$a && (this.Ya != null && (this.Za = new _0x51599b.k.n(this.Ya, new _0x51599b.k.r(this._a, this.ab, this.bb, this.cb))), this.$a = true), this.Za;
            }, _0x47e3d8[_0x3e1be7(0x72d)].ob = function () {
                var _0x9b4b81 = _0x3e1be7;
                this.Za != null && this.Za[_0x9b4b81(0x588)]();
            }, _0x47e3d8;
        }()), _0xa914b4.pb = (function () {
            var _0x1fb559 = _0x17b28a;

            function _0x3eb2ee(_0x5037d9, _0x6545c6, _0x5d1a84, _0x3835bc, _0x793fbe, _0x5b5bae, _0x3c4f55, _0x39427f, _0x2b241d, _0x1de782, _0x5c8518, _0x45b963, _0x305ce3, _0x21d812, _0x51549f, _0x2b7997, _0x1fc534, _0x5e9b4c) {
                this.qb = _0x5037d9, this.rb = _0x6545c6, this.sb = _0x5d1a84, this.tb = _0x3835bc, this.ub = _0x793fbe, this.vb = _0x5b5bae, this.wb = _0x3c4f55, this.xb = _0x39427f, this.yb = _0x2b241d, this.zb = _0x1de782, this.Ab = _0x5c8518, this.Bb = _0x45b963, this.Cb = _0x305ce3, this.Db = _0x21d812, this.Eb = _0x51549f, this.Fb = _0x2b7997, this.Gb = _0x1fc534, this.Hb = _0x5e9b4c;
            }
            return _0x3eb2ee[_0x1fb559(0x72d)].ob = function () {
                for (var _0x38d7af = 0x0; _0x38d7af < this.qb.length; _0x38d7af++) {
                    this.qb[_0x38d7af].dispose(), this.qb[_0x38d7af].destroy();
                };
                this.qb = [];
                for (var _0x2bd9ca = 0x0; _0x2bd9ca < this.rb.length; _0x2bd9ca++) {
                    this.rb[_0x2bd9ca].ob();
                };
                this.rb = [];
            }, _0x3eb2ee.lb = function () {
                var _0x31cbc2 = _0x1fb559,
                    _0x5e5d71 = new _0x3eb2ee.Ib(_0xa914b4.Kb.Jb, _0xa914b4.Kb.Jb),
                    _0x1cfa00 = new _0x3eb2ee.Lb(_0x31cbc2(0x229), [_0xa914b4.Kb.Jb], [_0xa914b4.Kb.Jb]);
                return new _0x3eb2ee([], [], {}, _0x5e5d71, {}, new _0x3eb2ee.Mb(_0xa914b4.Kb.Jb), {}, _0x1cfa00, {}, new _0x3eb2ee.Nb('', _0x1cfa00, _0x5e5d71), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]));
            }, _0x3eb2ee.Pb = function (_0x13c249, _0x1ca510, _0x5bee0b, _0x44d8fd) {
                var _0xaa284 = new _0x3eb2ee.Ib(_0xa914b4.Kb.Jb, _0xa914b4.Kb.Jb),
                    _0x45a8ac = new _0x3eb2ee.Lb('#ffffff', [_0x13c249], [_0x1ca510]);
                return new _0x3eb2ee([], [], {}, _0xaa284, {}, new _0x3eb2ee.Mb(_0xa914b4.Kb.Jb), {}, _0x45a8ac, {}, new _0x3eb2ee.Nb('', _0x45a8ac, _0xaa284), {}, new _0x3eb2ee.Ob([_0x5bee0b]), {}, new _0x3eb2ee.Ob([_0x44d8fd]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]), {}, new _0x3eb2ee.Ob([_0xa914b4.Kb.Jb]));
            }, _0x3eb2ee.Qb = function (_0x4e0bb2, _0x3eb41f, _0x2239e3, _0x571ed4) {
                var _0x2fb80c = _0x1fb559,
                    _0x72c228 = {};
                _0x1a7a89.Da(_0x4e0bb2[_0x2fb80c(0x470)], function (_0x504a45, _0x21c477) {
                    _0x72c228[_0x504a45] = '#' + _0x21c477;
                });
                var _0x57e543 = {};
                for (var _0x47064b = 0x0; _0x47064b < _0x4e0bb2.skinArrayDict.length; _0x47064b++) {
                    var _0x1953bf = _0x4e0bb2[_0x2fb80c(0x541)][_0x47064b];
                    _0x57e543[_0x1953bf.id] = new _0x3eb2ee.Lb(_0x72c228[_0x1953bf[_0x2fb80c(0x7e0)]], _0x1953bf[_0x2fb80c(0x44e)].map(function (_0x28a12e) {
                        return _0x3eb41f[_0x28a12e];
                    }), _0x1953bf[_0x2fb80c(0x761)].map(function (_0x183def) {
                        return _0x3eb41f[_0x183def];
                    }));
                };
                var _0x1aa5a4, _0x273c4a = _0x4e0bb2.skinUnknown;
                _0x1aa5a4 = new _0x3eb2ee.Lb(_0x72c228[_0x273c4a.prime], _0x273c4a.base.map(function (_0x23d46e) {
                    return _0x3eb41f[_0x23d46e];
                }), _0x273c4a.glow[_0x2fb80c(0x582)](function (_0x43997d) {
                    return _0x3eb41f[_0x43997d];
                }));
                var _0x11120c = {};
                _0x1a7a89.Da(_0x4e0bb2[_0x2fb80c(0x72e)], function (_0x16f39b, _0x5147b9) {
                    var _0x2ce2b0 = _0x2fb80c;
                    _0x11120c[parseInt(_0x16f39b)] = new _0x3eb2ee.Ob(_0x5147b9[_0x2ce2b0(0x44e)].map(function (_0x40eba9) {
                        return _0x3eb41f[_0x40eba9.region];
                    }));
                });
                var _0x2fd349 = new _0x3eb2ee.Ob(_0x4e0bb2[_0x2fb80c(0x4c0)].base[_0x2fb80c(0x582)](function (_0x196631) {
                        var _0x1b65f0 = _0x2fb80c;
                        return _0x3eb41f[_0x196631[_0x1b65f0(0x857)]];
                    })),
                    _0x4c7380 = {};
                _0x1a7a89.Da(_0x4e0bb2[_0x2fb80c(0x2d5)], function (_0x4c6a34, _0xd8e0ad) {
                    var _0x2cf335 = _0x2fb80c;
                    _0x4c7380[parseInt(_0x4c6a34)] = new _0x3eb2ee.Ob(_0xd8e0ad[_0x2cf335(0x44e)][_0x2cf335(0x582)](function (_0x3b0ccd) {
                        return _0x3eb41f[_0x3b0ccd.region];
                    }));
                });
                var _0x43a856 = new _0x3eb2ee.Ob(_0x4e0bb2[_0x2fb80c(0x2a3)][_0x2fb80c(0x44e)][_0x2fb80c(0x582)](function (_0x3913df) {
                        var _0x4f07d0 = _0x2fb80c;
                        return _0x3eb41f[_0x3913df[_0x4f07d0(0x857)]];
                    })),
                    _0x3ae5d8 = {};
                _0x1a7a89.Da(_0x4e0bb2[_0x2fb80c(0x2bb)], function (_0x57b7cc, _0x28869a) {
                    var _0x140380 = _0x2fb80c;
                    _0x3ae5d8[parseInt(_0x57b7cc)] = new _0x3eb2ee.Ob(_0x28869a[_0x140380(0x44e)][_0x140380(0x582)](function (_0x4708f0) {
                        return _0x3eb41f[_0x4708f0.region];
                    }));
                });
                var _0x4e7d18 = new _0x3eb2ee.Ob(_0x4e0bb2[_0x2fb80c(0x20e)][_0x2fb80c(0x44e)][_0x2fb80c(0x582)](function (_0x349207) {
                        return _0x3eb41f[_0x349207.region];
                    })),
                    _0x392a28 = {};
                _0x1a7a89.Da(_0x4e0bb2.glassesDict, function (_0x1a17a6, _0x4785fe) {
                    var _0x48ceb6 = _0x2fb80c;
                    _0x392a28[parseInt(_0x1a17a6)] = new _0x3eb2ee.Ob(_0x4785fe.base[_0x48ceb6(0x582)](function (_0x37c1a4) {
                        var _0x5c9f20 = _0x48ceb6;
                        return _0x3eb41f[_0x37c1a4[_0x5c9f20(0x857)]];
                    }));
                });
                var _0x3b73d2 = new _0x3eb2ee.Ob(_0x4e0bb2[_0x2fb80c(0x88b)][_0x2fb80c(0x44e)][_0x2fb80c(0x582)](function (_0x1be103) {
                        var _0x448adc = _0x2fb80c;
                        return _0x3eb41f[_0x1be103[_0x448adc(0x857)]];
                    })),
                    _0x1cae69 = {};
                _0x1a7a89.Da(_0x4e0bb2[_0x2fb80c(0x76c)], function (_0x1da5eb, _0x4496e6) {
                    var _0xff20c1 = _0x2fb80c;
                    _0x1cae69[_0x1da5eb = parseInt(_0x1da5eb)] = new _0x3eb2ee.Ib(_0x3eb41f[_0x4496e6[_0xff20c1(0x44e)]], _0x3eb41f[_0x4496e6.glow]);
                });
                var _0x2d1139, _0x626336 = _0x4e0bb2[_0x2fb80c(0x67f)];
                _0x2d1139 = new _0x3eb2ee.Ib(_0x3eb41f[_0x626336.base], _0x3eb41f[_0x626336[_0x2fb80c(0x761)]]);
                var _0xac0d7e = {};
                _0x1a7a89.Da(_0x4e0bb2.abilityDict, function (_0x490870, _0xfb948) {
                    _0xac0d7e[_0x490870 = parseInt(_0x490870)] = new _0x3eb2ee.Mb(_0x3eb41f[_0xfb948.base]);
                });
                var _0x56f194, _0x4810c0 = _0x4e0bb2[_0x2fb80c(0x71b)];
                _0x56f194 = new _0x3eb2ee.Mb(_0x3eb41f[_0x4810c0[_0x2fb80c(0x44e)]]);
                var _0x483ed5 = {};
                _0x1a7a89.Da(_0x4e0bb2[_0x2fb80c(0x842)], function (_0x267415, _0x46509c) {
                    var _0x5e86de = _0x2fb80c;
                    _0x483ed5[_0x267415 = parseInt(_0x267415)] = new _0x3eb2ee.Nb(_0x46509c[_0x5e86de(0x6bc)], new _0x3eb2ee.Lb(_0x72c228[_0x46509c[_0x5e86de(0x323)][_0x5e86de(0x7e0)]], null, _0x46509c.skin.glow[_0x5e86de(0x582)](function (_0x3505db) {
                        return _0x3eb41f[_0x3505db];
                    })), new _0x3eb2ee.Ib(null, _0x3eb41f[_0x46509c[_0x5e86de(0x5fa)][_0x5e86de(0x761)]]));
                });
                var _0x6842a = new _0x3eb2ee.Nb({}, _0x1aa5a4, _0x2d1139);
                return new _0x3eb2ee(_0x2239e3, _0x571ed4, _0x1cae69, _0x2d1139, _0xac0d7e, _0x56f194, _0x57e543, _0x1aa5a4, _0x483ed5, _0x6842a, _0x11120c, _0x2fd349, _0x4c7380, _0x43a856, _0x3ae5d8, _0x4e7d18, _0x392a28, _0x3b73d2);
            }, _0x3eb2ee[_0x1fb559(0x72d)].Rb = function (_0x57d5e5) {
                var _0x3a0dfe = _0x1fb559,
                    _0x47057d = _0x1a7a89.Ea(Object[_0x3a0dfe(0x404)](this.wb))[_0x3a0dfe(0x3c4)](0x0, _0x57d5e5),
                    _0x37d13e = _0x1a7a89.Ea(Object[_0x3a0dfe(0x404)](this.Ab))[_0x3a0dfe(0x3c4)](0x0, _0x57d5e5),
                    _0x2e9e31 = _0x1a7a89.Ea(Object.keys(this.Cb))[_0x3a0dfe(0x3c4)](0x0, _0x57d5e5),
                    _0x3f46db = _0x1a7a89.Ea(Object[_0x3a0dfe(0x404)](this.Eb))[_0x3a0dfe(0x3c4)](0x0, _0x57d5e5),
                    _0x316c67 = _0x1a7a89.Ea(Object[_0x3a0dfe(0x404)](this.Gb)).slice(0x0, _0x57d5e5),
                    _0x2e3c56 = [];
                for (var _0x20ff7a = 0x0; _0x20ff7a < _0x57d5e5; _0x20ff7a++) {
                    var _0x2ac918 = _0x47057d.length > 0x0 ? _0x47057d[_0x20ff7a % _0x47057d.length] : 0x0,
                        _0x492ea4 = _0x37d13e[_0x3a0dfe(0x56a)] > 0x0 ? _0x37d13e[_0x20ff7a % _0x37d13e[_0x3a0dfe(0x56a)]] : 0x0,
                        _0x3ed25c = _0x2e9e31[_0x3a0dfe(0x56a)] > 0x0 ? _0x2e9e31[_0x20ff7a % _0x2e9e31[_0x3a0dfe(0x56a)]] : 0x0,
                        _0x65d05a = _0x3f46db[_0x3a0dfe(0x56a)] > 0x0 ? _0x3f46db[_0x20ff7a % _0x3f46db[_0x3a0dfe(0x56a)]] : 0x0,
                        _0x2c8c06 = _0x316c67[_0x3a0dfe(0x56a)] > 0x0 ? _0x316c67[_0x20ff7a % _0x316c67[_0x3a0dfe(0x56a)]] : 0x0;
                    _0x2e3c56.push(new _0xa914b4.Sb(_0x2ac918, _0x492ea4, _0x3ed25c, _0x65d05a, _0x2c8c06));
                };
                return _0x2e3c56;
            }, _0x3eb2ee.prototype.Tb = function (_0x3d791d) {
                var _0x4c6060 = _0x1fb559;
                return this.wb[_0x4c6060(0x664)](_0x3d791d) ? this.wb[_0x3d791d] : this.xb;
            }, _0x3eb2ee[_0x1fb559(0x72d)].Ub = function (_0x35b6a4) {
                var _0x1afd7e = _0x1fb559;
                return this.yb[_0x1afd7e(0x664)](_0x35b6a4) ? this.yb[_0x35b6a4] : this.zb;
            }, _0x3eb2ee.prototype.Vb = function (_0x5060ff) {
                var _0x271810 = _0x1fb559;
                return this.Ab[_0x271810(0x664)](_0x5060ff) ? this.Ab[_0x5060ff] : this.Bb;
            }, _0x3eb2ee[_0x1fb559(0x72d)].Wb = function (_0x766f24) {
                var _0x3916b0 = _0x1fb559;
                return this.Cb[_0x3916b0(0x664)](_0x766f24) ? this.Cb[_0x766f24] : this.Db;
            }, _0x3eb2ee[_0x1fb559(0x72d)].Xb = function (_0x41d4e2) {
                return this.Gb.hasOwnProperty(_0x41d4e2) ? this.Gb[_0x41d4e2] : this.Hb;
            }, _0x3eb2ee[_0x1fb559(0x72d)].Yb = function (_0x3882b8) {
                var _0x2084fb = _0x1fb559;
                return this.Eb[_0x2084fb(0x664)](_0x3882b8) ? this.Eb[_0x3882b8] : this.Fb;
            }, _0x3eb2ee[_0x1fb559(0x72d)].Zb = function (_0x492b12) {
                var _0x136e82 = _0x1fb559;
                return this.sb[_0x136e82(0x664)](_0x492b12) ? this.sb[_0x492b12] : this.tb;
            }, _0x3eb2ee[_0x1fb559(0x72d)].$b = function (_0x32aa8f) {
                var _0x2b10cc = _0x1fb559;
                return this.ub[_0x2b10cc(0x664)](_0x32aa8f) ? this.ub[_0x32aa8f] : this.vb;
            }, _0x3eb2ee.Nb = function _0x31d739(_0xf18e5b, _0x522959, _0x318d6e) {
                this._b = _0xf18e5b, this.ac = _0x522959, this.bc = _0x318d6e;
            }, _0x3eb2ee.Lb = function _0xbacc5c(_0x1a439c, _0x4cba60, _0x24e3a0) {
                this.cc = _0x1a439c, this.dc = _0x4cba60, this.ec = _0x24e3a0;
            }, _0x3eb2ee.Ob = function _0x4fdaa5(_0x3f9fed) {
                this.dc = _0x3f9fed;
            }, _0x3eb2ee.Ib = function _0x2190eb(_0x134012, _0x561d58) {
                this.dc = _0x134012, this.ec = _0x561d58;
            }, _0x3eb2ee.Mb = function _0x30b38f(_0x444dc6) {
                this.dc = _0x444dc6;
            }, _0x3eb2ee;
        }()), _0xa914b4.Kb = (function () {
            var _0x886ea4 = _0x17b28a;

            function _0x28bcd5() {
                var _0x5b2a30 = _0x1c2b,
                    _0x283e34 = _0x51599b.k.m[_0x5b2a30(0x75c)](_0x5b2a30(0x467));
                this.fc = new _0xa914b4.Wa('magnet_ability', _0x283e34, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80), this.gc = new _0xa914b4.Wa('velocity_ability', _0x283e34, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80), this.hc = new _0xa914b4.Wa('flex_ability', _0x283e34, 0x4, 0x4, 0x92, 0x92, 63.5, 63.5, 0x80, 0x80);
                var _0x14436a = _0x51599b.k.m[_0x5b2a30(0x75c)]('https://i.imgur.com/LFiCido.png');
                this[_0x5b2a30(0x3cd)] = new _0xa914b4.Wa(_0x5b2a30(0x7c6), _0x14436a, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
                var _0x49b5bc, _0x157e3d = _0x51599b.k.m[_0x5b2a30(0x75c)](_0x5b2a30(0x653)),
                    _0x457554 = new _0xa914b4.Wa('def_eyes', _0x157e3d, 0x0, 0x0, 0x2a, 0x50, 0x4b, 0x40, 0x80, 0x80),
                    _0x35612f = new _0xa914b4.Wa(_0x5b2a30(0x5a7), _0x157e3d, 0x2e, 0x0, 0x14, 0x30, 0x6d, 0x3f, 0x80, 0x80),
                    _0x2d7f11 = new _0xa914b4.Wa(_0x5b2a30(0x46a), _0x157e3d, 0x46, 0x0, 0x20, 0x20, 0x0, 0x0, 0x0, 0x0),
                    _0x101042 = new _0xa914b4.Wa('def_skin_base', _0x157e3d, 0x2e, 0x34, 0x40, 0x40, 0x0, 0x0, 0x0, 0x0),
                    _0x4c2172 = _0xa914b4.pb.Pb(_0x101042, _0x2d7f11, _0x457554, _0x35612f);
                this.ic = new _0xa914b4.jc({}, _0x4c2172), this.kc = -0x2710, this.lc = -0x2710, this.mc = ((_0x49b5bc = _0xa914b4.c.document[_0x5b2a30(0x43a)](_0x5b2a30(0x1cb))).width = 0x50, _0x49b5bc.height = 0x50, {
                    'nc': _0x49b5bc,
                    'oc': _0x49b5bc.getContext('2d'),
                    'Za': new _0x51599b.k.n(_0x51599b.k.m.from(_0x49b5bc))
                }), this.pc = null, this.qc = [];
            }
            return _0x28bcd5.Jb = _0xa914b4.Wa.lb(), _0x28bcd5[_0x886ea4(0x72d)].Sa = function () {}, _0x28bcd5.prototype.rc = function (_0x4a614b, _0x3b412f, _0x3a3f08) {
                var _0x4615a9 = this,
                    _0x5866dd = this.ic.sc();
                if (_0x5866dd > 0x0 && _0x1a7a89.Ca() - this.kc < 0x124f80) {
                    _0x4a614b != null && _0x4a614b();
                    return;
                };
                if (this.pc != null && !this.pc.tc()) {
                    if (_0x1a7a89.Ca() - this.kc < 0x493e0) {
                        _0x4a614b != null && _0x4a614b();
                        return;
                    };
                    this.pc.uc(), this.pc = null;
                };
                var _0x3e0c96 = new _0xa914b4.vc(_0x5866dd);
                _0x3e0c96.wc(function (_0x24d4f4, _0x1e1286) {
                    _0x3e0c96 === _0x4615a9.pc && _0x3a3f08 != null && _0x3a3f08(_0x24d4f4, _0x1e1286);
                }), _0x3e0c96.xc(function (_0x936222) {
                    _0x3e0c96 === _0x4615a9.pc && _0x3b412f != null && _0x3b412f(_0x936222);
                }), _0x3e0c96.yc(function () {
                    _0x3e0c96 === _0x4615a9.pc && _0x3b412f != null && _0x3b412f(Error());
                }), _0x3e0c96.zc(function () {
                    _0x3e0c96 === _0x4615a9.pc && _0x4a614b != null && _0x4a614b();
                }), _0x3e0c96.Ac(function (_0x40a3fd) {
                    if (_0x3e0c96 === _0x4615a9.pc) {
                        _0x4615a9.lc = _0x1a7a89.Ca(), _0x4615a9.pc = null, _0x4615a9.Bc(), _0x4615a9.ic.Cc().ob(), _0x4615a9.ic = _0x40a3fd;
                        _0x4a614b != null && _0x4a614b();
                        _0x4615a9.Dc();
                        return;
                    };
                    try {
                        _0x40a3fd.Cc().ob();
                    } catch (_0xbb5c8) {}
                }), _0x3e0c96.Ec(), this.kc = _0x1a7a89.Ca(), this.pc = _0x3e0c96;
            }, _0x28bcd5.prototype.Bc = function () {}, _0x28bcd5[_0x886ea4(0x72d)].Fc = function () {
                return this.ic.sc() > 0x0;
            }, _0x28bcd5.prototype.Gc = function () {
                return this.ic.Hc();
            }, _0x28bcd5.prototype.Ic = function () {
                return this.mc;
            }, _0x28bcd5[_0x886ea4(0x72d)].Jc = function (_0x3ca9b3) {
                var _0x1a2cc1 = _0x886ea4;
                this.qc[_0x1a2cc1(0x6a2)](_0x3ca9b3);
            }, _0x28bcd5[_0x886ea4(0x72d)].Dc = function () {
                var _0x596ec8 = _0x886ea4;
                for (var _0x4ff128 = 0x0; _0x4ff128 < this.qc[_0x596ec8(0x56a)]; _0x4ff128++) {
                    this.qc[_0x4ff128]();
                }
            }, _0x28bcd5[_0x886ea4(0x72d)].Cc = function () {
                return this.ic.Cc();
            }, _0x28bcd5;
        }()), _0xa914b4.Kc = (function () {
            var _0x2a3949 = _0x17b28a;

            function _0x1c46bb(_0x279379) {
                this.Lc = _0x279379;
            }
            return _0x1c46bb[_0x2a3949(0x72d)].Mc = function (_0x5dcf91) {
                return this.Lc[_0x5dcf91];
            }, _0x1c46bb.Nc = (function () {
                var _0x5221cc = _0x2a3949;

                function _0x5f3a50() {
                    this.Oc = [];
                }
                return _0x5f3a50[_0x5221cc(0x72d)].Pc = function (_0x5e104e, _0x5bd9c1) {
                    var _0x121432 = _0x5221cc;
                    for (var _0x3aabcd = 0x0; _0x3aabcd < this.Oc[_0x121432(0x56a)]; _0x3aabcd++) {
                        if (this.Oc[_0x3aabcd].Qc === _0x5e104e) throw Error();
                    };
                    return this.Oc.push(new _0x1c46bb.Rc(_0x5e104e, _0x5bd9c1)), this;
                }, _0x5f3a50[_0x5221cc(0x72d)].Sc = function () {
                    var _0x56b935 = _0x5221cc,
                        _0x2daa38 = 0x0;
                    for (var _0x2398cf = 0x0; _0x2398cf < this.Oc[_0x56b935(0x56a)]; _0x2398cf++) {
                        _0x2daa38 += this.Oc[_0x2398cf].Tc;
                    };
                    var _0x52d8c0 = {},
                        _0x4ebee1 = 0x0;
                    for (var _0x51a342 = 0x0; _0x51a342 < this.Oc[_0x56b935(0x56a)]; _0x51a342++) {
                        var _0x2b92ab = this.Oc[_0x51a342];
                        _0x2b92ab.Tc = _0x2b92ab.Tc / _0x2daa38, _0x2b92ab.Uc = _0x4ebee1, _0x2b92ab.Vc = _0x4ebee1 + _0x2b92ab.Tc, _0x4ebee1 = _0x2b92ab.Vc, _0x52d8c0[_0x2b92ab.Qc] = _0x2b92ab;
                    };
                    return new _0x1c46bb(_0x52d8c0);
                }, _0x5f3a50;
            }()), _0x1c46bb.Rc = (function () {
                var _0x36ae9b = _0x2a3949;

                function _0x1872d3(_0x4fdf83, _0x646773) {
                    this.Qc = _0x4fdf83, this.Tc = _0x646773, this.Uc = 0x0, this.Vc = 0x0;
                }
                return _0x1872d3[_0x36ae9b(0x72d)].Wc = function (_0x479709) {
                    return this.Uc + (this.Vc - this.Uc) * _0x479709;
                }, _0x1872d3;
            }()), _0x1c46bb;
        }()), _0xa914b4.Xc = (function () {
            var _0x24501b = _0x17b28a;

            function _0x98d231() {
                var _0x149931 = _0x1c2b;
                this.Yc = new _0x51599b.k.l(), this.Yc[_0x149931(0x8c1)] = true, this.Zc = new _0x3cd69a(), this.Zc[_0x149931(0x663)] = _0x3faaec * ((_0x4aca35 + 0x1) * 0x2 + 0x1 + 0x3), this.$c = 0x0, this._c = Array(_0x4aca35), this._c[0x0] = this.ad(0x0, new _0xa914b4.bd(), new _0xa914b4.bd());
                for (var _0x106497 = 0x1; _0x106497 < _0x4aca35; _0x106497++) {
                    this._c[_0x106497] = this.ad(_0x106497, new _0xa914b4.bd(), new _0xa914b4.bd());
                };
                this.cd = 0x0, this.dd = 0x0, this.ed = 0x0;
            }
            var _0x2fbccd, _0x3faaec = 0.001,
                _0x4aca35 = 0x31d,
                _0x320ed8 = _0x30354b.T * 0.1;
            _0x98d231.fd = _0x4aca35, _0x98d231.prototype.ad = function (_0x24b1c4, _0x4db9f9, _0x1ca505) {
                var _0xe025bd = _0x1c2b,
                    _0x3cd04c = new _0x1fd12a(_0x4db9f9, _0x1ca505);
                return _0x4db9f9.gd[_0xe025bd(0x663)] = _0x3faaec * ((_0x4aca35 - _0x24b1c4) * 0x2 + 0x1 + 0x3), _0x1ca505.gd[_0xe025bd(0x663)] = _0x3faaec * ((_0x4aca35 - _0x24b1c4) * 0x2 - 0x2 + 0x3), _0x3cd04c;
            }, _0x98d231[_0x24501b(0x72d)].hd = function (_0x36274a, _0x74e4b9, _0x331d5b, _0x146828, _0x333fb7, _0x5541ba, _0x54691a, _0x10eae4) {
                var _0x3db51a = _0x24501b,
                    _0x1018b3 = _0x331d5b.dc,
                    _0x1de7e8 = _0x36274a === _0xa914b4.jd.id ? _0x74e4b9.ac.ec : _0x331d5b.ec;
                if (_0x1018b3.length > 0x0 && _0x1de7e8[_0x3db51a(0x56a)] > 0x0)
                    for (var _0x49fe3f = 0x0; _0x49fe3f < this._c.length; _0x49fe3f++) {
                        this._c[_0x49fe3f].ld.kd(_0x1018b3[_0x49fe3f % _0x1018b3[_0x3db51a(0x56a)]]), this._c[_0x49fe3f].md.kd(_0x1de7e8[_0x49fe3f % _0x1de7e8[_0x3db51a(0x56a)]]), this._c[_0x49fe3f].ld.nd(_0x10eae4), this._c[_0x49fe3f].md.nd(_0x10eae4);
                    };
                this.Zc.hd(_0x146828, _0x333fb7, _0x5541ba, _0x54691a);
            }, (_0x2fbccd = _0x1a7a89.ca(_0x51599b.k.l, function () {
                var _0x5af173 = _0x24501b;
                _0x51599b.k.l[_0x5af173(0x670)](this), this[_0x5af173(0x8c1)] = true, this.od = [], this.pd = [], this.qd = [], this.rd = [], this.sd = new _0x51599b.k.l(), this.td = [];
                for (var _0x895d8a = 0x0; _0x895d8a < 0x4; _0x895d8a++) {
                    var _0x241b94 = new _0xa914b4.bd();
                    _0x241b94.kd(ooo.ud.fc), this.sd.addChild(_0x241b94.gd), this.td[_0x5af173(0x6a2)](_0x241b94);
                };
                this.sd.zIndex = 0.0011, this[_0x5af173(0x1c1)](this.sd), this.vd(), this.wd = new _0xa914b4.bd(), this.wd.kd(ooo.ud.gc), this.wd.gd[_0x5af173(0x663)] = 0.001, this[_0x5af173(0x1c1)](this.wd.gd), this.xd(), this[_0x5af173(0x309)] = new _0xa914b4.bd(), this.pwr_flex.kd(ooo.ud[_0x5af173(0x3cd)]), this.pwr_flex.gd[_0x5af173(0x663)] = 0.001, this.addChild(this.pwr_flex.gd), this.disableFlex();
            }))[_0x24501b(0x72d)].hd = function (_0x2f09fe, _0x211c27, _0x34c9f4, _0x35c1a2) {
                this.yd(0.002, this.od, _0x2f09fe.dc), this.yd(0.003, this.pd, _0x211c27.dc), this.yd(0.004, this.rd, _0x35c1a2.dc), this.yd(0.005, this.qd, _0x34c9f4.dc);
            }, _0x2fbccd[_0x24501b(0x72d)].yd = function (_0x34f396, _0x284690, _0x50f7e3) {
                var _0x495c57 = _0x24501b;
                while (_0x50f7e3[_0x495c57(0x56a)] > _0x284690[_0x495c57(0x56a)]) {
                    var _0x3ad6d8 = new _0xa914b4.bd();
                    _0x284690[_0x495c57(0x6a2)](_0x3ad6d8), this[_0x495c57(0x1c1)](_0x3ad6d8.zd());
                };
                while (_0x50f7e3[_0x495c57(0x56a)] < _0x284690[_0x495c57(0x56a)]) {
                    _0x284690[_0x495c57(0x27a)]().G();
                };
                var _0x363e32 = _0x34f396;
                for (var _0xf7b649 = 0x0; _0xf7b649 < _0x50f7e3[_0x495c57(0x56a)]; _0xf7b649++) {
                    _0x363e32 += 0.0001;
                    var _0x27ccdb = _0x284690[_0xf7b649];
                    _0x27ccdb.kd(_0x50f7e3[_0xf7b649]), _0x27ccdb.gd[_0x495c57(0x663)] = _0x363e32;
                }
            }, _0x2fbccd[_0x24501b(0x72d)].Ad = function (_0x43ae3c, _0x41e95e, _0x310b1e, _0x391829) {
                var _0x2cb704 = _0x24501b;
                this[_0x2cb704(0x775)] = true, this[_0x2cb704(0x8cf)][_0x2cb704(0x3e2)](_0x43ae3c, _0x41e95e), this[_0x2cb704(0x576)] = _0x391829;
                for (var _0x3ae28e = 0x0; _0x3ae28e < this.od[_0x2cb704(0x56a)]; _0x3ae28e++) {
                    this.od[_0x3ae28e].Bd(_0x310b1e);
                };
                for (var _0x293cd7 = 0x0; _0x293cd7 < this.pd[_0x2cb704(0x56a)]; _0x293cd7++) {
                    this.pd[_0x293cd7].Bd(_0x310b1e);
                };
                for (var _0x408b9f = 0x0; _0x408b9f < this.qd[_0x2cb704(0x56a)]; _0x408b9f++) {
                    this.qd[_0x408b9f].Bd(_0x310b1e);
                };
                for (var _0x23a496 = 0x0; _0x23a496 < this.rd[_0x2cb704(0x56a)]; _0x23a496++) {
                    this.rd[_0x23a496].Bd(_0x310b1e);
                }
            }, _0x2fbccd[_0x24501b(0x72d)].Cd = function () {
                var _0x5a873b = _0x24501b;
                this[_0x5a873b(0x775)] = false;
            }, _0x2fbccd[_0x24501b(0x72d)].Dd = function (_0x528f48, _0x55ce82, _0x337001, _0x5a7ab9) {
                var _0x35d139 = _0x24501b;
                this.sd[_0x35d139(0x775)] = true;
                var _0x74d0ff = _0x337001 / 0x3e8,
                    _0x5a7aaf = 0x1 / this.td[_0x35d139(0x56a)];
                for (var _0x6b9a18 = 0x0; _0x6b9a18 < this.td[_0x35d139(0x56a)]; _0x6b9a18++) {
                    var _0x30e8c1 = 0x1 - (_0x74d0ff + _0x5a7aaf * _0x6b9a18) % 0x1;
                    this.td[_0x6b9a18].gd[_0x35d139(0x8c4)] = 0x1 - _0x30e8c1, this.td[_0x6b9a18].Bd(_0x55ce82 * (0.5 + _0x30e8c1 * 4.5));
                }
            }, _0x2fbccd.prototype.vd = function () {
                var _0x2c5336 = _0x24501b;
                this.sd[_0x2c5336(0x775)] = false;
            }, _0x2fbccd.prototype.Ed = function (_0x4095c8, _0x422e46, _0x30b93d, _0x4bfb8c) {
                var _0x5c693c = _0x24501b;
                this.wd.gd[_0x5c693c(0x775)] = _0x2e052d.vp, this.wd.gd[_0x5c693c(0x8c4)] = _0x1a7a89.ga(this.wd.gd[_0x5c693c(0x8c4)], _0x4095c8.Fd ? 0.9 : 0.2, _0x4bfb8c, 0.0025), this.wd.Bd(_0x422e46);
            }, _0x2fbccd.prototype.xd = function () {
                var _0x1316c0 = _0x24501b;
                this.wd.gd[_0x1316c0(0x775)] = false;
            }, _0x2fbccd[_0x24501b(0x72d)].activeFlex = function (_0x2a78cc, _0x16b30e, _0xd224b, _0x156ea3) {
                var _0x403ed5 = _0x24501b;
                this.pwr_flex.gd.visible = _0x2e052d[_0x403ed5(0x4be)], this[_0x403ed5(0x309)].gd[_0x403ed5(0x8c4)] = _0x1a7a89.ga(this.wd.gd[_0x403ed5(0x8c4)], _0x2a78cc.Fd ? 0.9 : 0.2, _0x156ea3, 0.0025), this[_0x403ed5(0x309)].Bd(_0x16b30e);
            }, _0x2fbccd[_0x24501b(0x72d)][_0x24501b(0x57a)] = function () {
                var _0x208c1e = _0x24501b;
                this[_0x208c1e(0x309)].gd[_0x208c1e(0x775)] = false;
            };
            var _0x3cd69a = _0x2fbccd;
            _0x98d231[_0x24501b(0x72d)].Gd = function (_0x55c686) {
                return this.dd + this.ed * _0x1a7a89.oa(_0x55c686 * _0x320ed8 - this.cd);
            }, _0x98d231.prototype.Hd = function (_0x31dbca, _0x1fbb70, _0x388e7a, _0x21bbba) {
                var _0x565e51 = _0x24501b,
                    _0x1eb8ac, _0x335cce, _0x4c118e, _0x3439c1, _0x1b73d4, _0x166087, _0x38ba8a, _0x404c39, _0x304608 = _0x31dbca.Id * 0x2,
                    _0x30f4a2 = _0x31dbca.Jd,
                    _0x3c26d5 = _0x31dbca.Kd,
                    _0x6a5b1c = _0x3c26d5 * 0x4 - 0x3,
                    _0x2b98b5 = _0x6a5b1c;
                this.cd = _0x1fbb70 / 0x190 * _0x30354b.T, this.dd = _0x304608 * 1.5, this.ed = _0x304608 * 0.15 * _0x31dbca.Ld;
                if (_0x21bbba(_0x335cce = _0x30f4a2[0x0], _0x166087 = _0x30f4a2[0x1])) {
                    _0x4c118e = _0x30f4a2[0x2], _0x38ba8a = _0x30f4a2[0x3], _0x3439c1 = _0x30f4a2[0x4], _0x404c39 = _0x30f4a2[0x5];
                    var _0x5f20df = _0x1a7a89.ta(_0x404c39 + _0x166087 * 0x2 - _0x38ba8a * 0x3, _0x3439c1 + _0x335cce * 0x2 - _0x4c118e * 0x3);
                    this.Zc.Ad(_0x335cce, _0x166087, _0x304608, _0x5f20df), this._c[0x0].Ad(_0x335cce, _0x166087, _0x304608, this.Gd(0x0), _0x5f20df), this._c[0x1].Ad(_0x335cce * 0.64453125 + _0x4c118e * 0.45703125 + _0x3439c1 * -0.1015625, _0x166087 * 0.64453125 + _0x38ba8a * 0.45703125 + _0x404c39 * -0.1015625, _0x304608, this.Gd(0x1), _0x1fd12a.Md(this._c[0x0], this._c[0x2])), this._c[0x2].Ad(_0x335cce * 0.375 + _0x4c118e * 0.75 + _0x3439c1 * -0.125, _0x166087 * 0.375 + _0x38ba8a * 0.75 + _0x404c39 * -0.125, _0x304608, this.Gd(0x2), _0x1fd12a.Md(this._c[0x1], this._c[0x3])), this._c[0x3].Ad(_0x335cce * 0.15234375 + _0x4c118e * 0.94921875 + _0x3439c1 * -0.1015625, _0x166087 * 0.15234375 + _0x38ba8a * 0.94921875 + _0x404c39 * -0.1015625, _0x304608, this.Gd(0x3), _0x1fd12a.Md(this._c[0x2], this._c[0x4]));
                } else this.Zc.Cd(), this._c[0x0].Cd(), this._c[0x1].Cd(), this._c[0x2].Cd(), this._c[0x3].Cd();;
                var _0x4fb1b1 = 0x4;
                for (var _0x5b22b3 = 0x2, _0x1416b1 = _0x3c26d5 * 0x2 - 0x4; _0x5b22b3 < _0x1416b1; _0x5b22b3 += 0x2) {
                    _0x21bbba(_0x335cce = _0x30f4a2[_0x5b22b3], _0x166087 = _0x30f4a2[_0x5b22b3 + 0x1]) ? (_0x1eb8ac = _0x30f4a2[_0x5b22b3 - 0x2], _0x1b73d4 = _0x30f4a2[_0x5b22b3 - 0x1], _0x4c118e = _0x30f4a2[_0x5b22b3 + 0x2], _0x38ba8a = _0x30f4a2[_0x5b22b3 + 0x3], _0x3439c1 = _0x30f4a2[_0x5b22b3 + 0x4], _0x404c39 = _0x30f4a2[_0x5b22b3 + 0x5], this._c[_0x4fb1b1].Ad(_0x335cce, _0x166087, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1])), _0x4fb1b1++, this._c[_0x4fb1b1].Ad(_0x1eb8ac * -0.06640625 + _0x335cce * 0.84375 + _0x4c118e * 0.2578125 + _0x3439c1 * -0.03515625, _0x1b73d4 * -0.06640625 + _0x166087 * 0.84375 + _0x38ba8a * 0.2578125 + _0x404c39 * -0.03515625, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1])), _0x4fb1b1++, this._c[_0x4fb1b1].Ad(_0x1eb8ac * -0.0625 + _0x335cce * 0.5625 + _0x4c118e * 0.5625 + _0x3439c1 * -0.0625, _0x1b73d4 * -0.0625 + _0x166087 * 0.5625 + _0x38ba8a * 0.5625 + _0x404c39 * -0.0625, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1])), _0x4fb1b1++, this._c[_0x4fb1b1].Ad(_0x1eb8ac * -0.03515625 + _0x335cce * 0.2578125 + _0x4c118e * 0.84375 + _0x3439c1 * -0.06640625, _0x1b73d4 * -0.03515625 + _0x166087 * 0.2578125 + _0x38ba8a * 0.84375 + _0x404c39 * -0.06640625, _0x304608, this.Gd(_0x4fb1b1), _0x1fd12a.Md(this._c[_0x4fb1b1 - 0x1], this._c[_0x4fb1b1 + 0x1])), _0x4fb1b1++) : (this._c[_0x4fb1b1].Cd(), _0x4fb1b1++, this._c[_0x4fb1b1].Cd(), _0x4fb1b1++, this._c[_0x4fb1b1].Cd(), _0x4fb1b1++, this._c[_0x4fb1b1].Cd(), _0x4fb1b1++);
                };
                _0x21bbba(_0x335cce = _0x30f4a2[_0x3c26d5 * 0x2 - 0x4], _0x166087 = _0x30f4a2[_0x3c26d5 * 0x2 - 0x3]) ? (_0x1eb8ac = _0x30f4a2[_0x3c26d5 * 0x2 - 0x6], _0x1b73d4 = _0x30f4a2[_0x3c26d5 * 0x2 - 0x5], _0x4c118e = _0x30f4a2[_0x3c26d5 * 0x2 - 0x2], _0x38ba8a = _0x30f4a2[_0x3c26d5 * 0x2 - 0x1], this._c[_0x6a5b1c - 0x5].Ad(_0x335cce, _0x166087, _0x304608, this.Gd(_0x6a5b1c - 0x5), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x6], this._c[_0x6a5b1c - 0x4])), this._c[_0x6a5b1c - 0x4].Ad(_0x1eb8ac * -0.1015625 + _0x335cce * 0.94921875 + _0x4c118e * 0.15234375, _0x1b73d4 * -0.1015625 + _0x166087 * 0.94921875 + _0x38ba8a * 0.15234375, _0x304608, this.Gd(_0x6a5b1c - 0x4), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x5], this._c[_0x6a5b1c - 0x3])), this._c[_0x6a5b1c - 0x3].Ad(_0x1eb8ac * -0.125 + _0x335cce * 0.75 + _0x4c118e * 0.375, _0x1b73d4 * -0.125 + _0x166087 * 0.75 + _0x38ba8a * 0.375, _0x304608, this.Gd(_0x6a5b1c - 0x3), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x4], this._c[_0x6a5b1c - 0x2])), this._c[_0x6a5b1c - 0x2].Ad(_0x1eb8ac * -0.1015625 + _0x335cce * 0.45703125 + _0x4c118e * 0.64453125, _0x1b73d4 * -0.1015625 + _0x166087 * 0.45703125 + _0x38ba8a * 0.64453125, _0x304608, this.Gd(_0x6a5b1c - 0x2), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x3], this._c[_0x6a5b1c - 0x1])), this._c[_0x6a5b1c - 0x1].Ad(_0x4c118e, _0x38ba8a, _0x304608, this.Gd(_0x6a5b1c - 0x1), _0x1fd12a.Md(this._c[_0x6a5b1c - 0x2], this._c[_0x6a5b1c - 0x1]))) : (this._c[_0x6a5b1c - 0x5].Cd(), this._c[_0x6a5b1c - 0x4].Cd(), this._c[_0x6a5b1c - 0x3].Cd(), this._c[_0x6a5b1c - 0x2].Cd(), this._c[_0x6a5b1c - 0x1].Cd());
                this.$c === 0x0 && _0x2b98b5 > 0x0 && this.Yc[_0x565e51(0x1c1)](this.Zc);
                this.$c > 0x0 && _0x2b98b5 === 0x0 && _0x51599b.k.F.G(this.Zc);
                while (this.$c < _0x2b98b5) {
                    this.Yc[_0x565e51(0x1c1)](this._c[this.$c].ld.zd()), this.Yc[_0x565e51(0x1c1)](this._c[this.$c].md.zd()), this.$c += 0x1;
                };
                while (this.$c > _0x2b98b5) {
                    this.$c -= 0x1, this._c[this.$c].md.G(), this._c[this.$c].ld.G();
                };
                var _0x18c6f2 = _0x31dbca.Nd[_0xa914b4.Pd.Od];
                this._c[0x0].Qd() && _0x18c6f2 != null && _0x18c6f2.Rd ? this.Zc.Dd(_0x31dbca, _0x304608, _0x1fbb70, _0x388e7a) : this.Zc.vd();
                var _0x32fe03 = _0x31dbca.Nd[_0xa914b4.Pd.Sd];
                this._c[0x0].Qd() && _0x32fe03 != null && _0x32fe03.Rd ? this.Zc.Ed(_0x31dbca, _0x304608, _0x1fbb70, _0x388e7a) : this.Zc.xd();
                var _0x413314 = _0x31dbca.Nd[_0xa914b4.Pd.Yd];
                this._c[0x0].Qd() && _0x413314 != null && _0x413314.Rd ? this.Zc[_0x565e51(0x1ee)](_0x31dbca, _0x304608, _0x1fbb70, _0x388e7a) : this.Zc[_0x565e51(0x57a)]();
            };
            var _0x1fd12a = (function () {
                var _0x1f0a2e = _0x24501b;

                function _0x4516c0(_0x1806bb, _0xbcb31f) {
                    this.ld = _0x1806bb, this.ld.Td(false), this.md = _0xbcb31f, this.md.Td(false);
                }
                return _0x4516c0.prototype.Ad = function (_0x50efe7, _0x113cd8, _0x56d787, _0x5c31fd, _0x6e3de5) {
                    this.ld.Td(true), this.ld.Ud(_0x50efe7, _0x113cd8), this.ld.Bd(_0x56d787), this.ld.Vd(_0x6e3de5), this.md.Td(true), this.md.Ud(_0x50efe7, _0x113cd8), this.md.Bd(_0x5c31fd), this.md.Vd(_0x6e3de5);
                }, _0x4516c0[_0x1f0a2e(0x72d)].Cd = function () {
                    this.ld.Td(false), this.md.Td(false);
                }, _0x4516c0[_0x1f0a2e(0x72d)].Qd = function () {
                    return this.ld.Qd();
                }, _0x4516c0.Md = function (_0x2b3a02, _0x3a5aed) {
                    var _0x8e6c1d = _0x1f0a2e;
                    return _0x1a7a89.ta(_0x2b3a02.ld.gd[_0x8e6c1d(0x8cf)].y - _0x3a5aed.ld.gd.position.y, _0x2b3a02.ld.gd[_0x8e6c1d(0x8cf)].x - _0x3a5aed.ld.gd[_0x8e6c1d(0x8cf)].x);
                }, _0x4516c0;
            }());
            return _0x98d231;
        }()), _0xa914b4.Pd = (function () {
            function _0x31c20e(_0x156330) {
                this.Wd = _0x156330, this.Rd = false, this.Xd = 0x1;
            }
            return _0x31c20e.Sd = 0x0, _0x31c20e.Yd = 0x1, _0x31c20e.Od = 0x2, _0x31c20e.Zd = 0x6, _0x31c20e.$d = 0x3, _0x31c20e._d = 0x4, _0x31c20e.ae = 0x5, _0x31c20e;
        }()), _0xa914b4.jc = (function () {
            var _0x19d568 = _0x17b28a;

            function _0x5a80c2(_0x162574, _0xaa0d11) {
                this.be = _0x162574, this.ce = _0xaa0d11;
            }
            return _0x5a80c2.de = new _0x5a80c2({}, _0xa914b4.pb.lb()), _0x5a80c2.prototype.sc = function () {
                var _0x17bd39 = _0x1c2b;
                return this.be[_0x17bd39(0x5b4)];
            }, _0x5a80c2[_0x19d568(0x72d)].Hc = function () {
                return this.be;
            }, _0x5a80c2[_0x19d568(0x72d)].Cc = function () {
                return this.ce;
            }, _0x5a80c2;
        }()), _0xa914b4.vc = (function () {
            var _0x152f12 = _0x17b28a;

            function _0x2ea613(_0x86dd9e) {
                this.ee = (++_0x2ea613.fe, function (_0x1efa25, _0xd2e09) {}), this.ge = _0x86dd9e, this.he = null, this.ie = null, this.je = null, this.ke = null, this.le = null, this.me = false, this.ne = false, this.oe = false;
            }
            return _0x2ea613.pe = {
                'qe': _0x152f12(0x34a),
                're': _0x152f12(0x1ec),
                'se': _0x152f12(0x5ed),
                'te': _0x152f12(0x24c),
                'ue': _0x152f12(0x213)
            }, _0x2ea613.fe = 0x186a0, _0x2ea613.ve = new _0xa914b4.Kc.Nc().Pc(_0x2ea613.pe.qe, 0x1).Pc(_0x2ea613.pe.re, 0xa).Pc(_0x2ea613.pe.se, 0x32).Pc(_0x2ea613.pe.te, 0xf).Pc(_0x2ea613.pe.ue, 0x5).Sc(), _0x2ea613[_0x152f12(0x72d)].Ac = function (_0x5d2bf6) {
                this.he = _0x5d2bf6;
            }, _0x2ea613[_0x152f12(0x72d)].zc = function (_0x1be896) {
                this.ie = _0x1be896;
            }, _0x2ea613.prototype.xc = function (_0x271c6b) {
                this.je = _0x271c6b;
            }, _0x2ea613[_0x152f12(0x72d)].yc = function (_0x3008e3) {
                this.ke = _0x3008e3;
            }, _0x2ea613.prototype.wc = function (_0x459590) {
                this.le = _0x459590;
            }, _0x2ea613[_0x152f12(0x72d)].tc = function () {
                return this.oe;
            }, _0x2ea613[_0x152f12(0x72d)].uc = function () {
                this.me = true;
            }, _0x2ea613[_0x152f12(0x72d)].Ec = function () {
                if (!this.ne) {
                    this.ne = true;
                    if (this.me) {
                        this.we();
                        return;
                    };
                    this.xe();
                }
            }, _0x2ea613.prototype.xe = function () {
                var _0x527c5a = _0x152f12,
                    _0x5e580b = this;
                if (this.me) {
                    this.we();
                    return;
                };
                $[_0x527c5a(0x336)]({
                    'type': 'GET',
                    'url': _0x30354b.H.K + _0x527c5a(0x615),
                    'xhrFields': {
                        'onprogress': function (_0x497289) {
                            var _0x52d912 = _0x527c5a,
                                _0x414406, _0x5c225c;
                            _0x497289.lengthComputable && (_0x414406 = _0x497289.loaded / _0x497289[_0x52d912(0x34b)], _0x5c225c = _0x2ea613.pe.qe, _0x5e580b.ye(_0x5c225c, _0x2ea613.ve.Mc(_0x5c225c).Wc(_0x414406)));
                        }
                    }
                })[_0x527c5a(0x76a)](function () {
                    _0x5e580b.ze(Error());
                }).done(function (_0x206e6d) {
                    if (_0x206e6d <= _0x5e580b.ge) {
                        _0x5e580b.Ae();
                        return;
                    };
                    _0x5e580b.Be();
                });
            }, _0x2ea613[_0x152f12(0x72d)].Be = function () {
                var _0x5071ae = _0x152f12,
                    _0xd7d60a = this;
                if (this.me) {
                    this.we();
                    return;
                };
                $.ajax({
                    'type': _0x5071ae(0x3da),
                    'url': _0x30354b.H.K + _0x5071ae(0x4a8),
                    'xhrFields': {
                        'onprogress': function (_0x1f7907) {
                            var _0x50c857 = _0x5071ae,
                                _0x9cfb21, _0x5b5009;
                            _0x1f7907[_0x50c857(0x7df)] && (_0x9cfb21 = _0x1f7907[_0x50c857(0x67b)] / _0x1f7907.total, _0x5b5009 = _0x2ea613.pe.re, _0xd7d60a.ye(_0x5b5009, _0x2ea613.ve.Mc(_0x5b5009).Wc(_0x9cfb21)));
                        }
                    }
                }).fail(function () {
                    _0xd7d60a.ze(Error());
                })[_0x5071ae(0x40b)](function (_0x3f73db) {
                    var _0x1b1b00 = _0x5071ae;
                    if (_0x3f73db[_0x1b1b00(0x5b4)] <= _0xd7d60a.ge) {
                        _0xd7d60a.Ae();
                        return;
                    };
                    var _0x214984 = {},
                        _0x3791b1 = {
                            'country': 'gb',
                            'v': 'v2'
                        };
                    _0x31462e && _0x31462e != 'gb' && (_0x3791b1[_0x1b1b00(0x413)] = _0x31462e), _0x214984 = _0x3f73db, _0x4f82c3 && _0x26db65 && _0x26db65 == _0x2e052d[_0x1b1b00(0x1cd)] ? (_0x214984 = JSON.parse(_0x4f82c3), (async function () {
                        var _0x5409aa = _0x1b1b00;
                        (_0x17b9a4 || _0xd7d6cd || Array[_0x5409aa(0x4b8)](_0x2e052d.dg) && _0x2e052d.dg[_0x5409aa(0x56a)] > 0x0) && (_0x214984 = await Ysw(_0x214984));
                        for (let _0x31ba8a in _0x214984) {
                            Array[_0x5409aa(0x4b8)](_0x214984[_0x31ba8a]) ? _0x3f73db[_0x31ba8a] = _0x3f73db[_0x31ba8a][_0x5409aa(0x4bd)](_0x214984[_0x31ba8a]) : _0x3f73db[_0x31ba8a] = {
                                ..._0x3f73db[_0x31ba8a],
                                ..._0x214984[_0x31ba8a]
                            };
                        };
                        _0xd7d60a.Ce(_0x3f73db);
                    }())) : fetch(_0x1b1b00(0x25c), {
                        'headers': {
                            'Content-Type': _0x1b1b00(0x469)
                        },
                        'method': _0x1b1b00(0x79c),
                        'body': JSON[_0x1b1b00(0x562)](_0x3791b1)
                    }).then(async function (_0x5ee02e) {
                        var _0x2df9c5 = _0x1b1b00;
                        for (let _0x271ebc in (_0x5ee02e = await _0x5ee02e[_0x2df9c5(0x80b)]()).textureDict) {
                            for (let _0x3e1728 in _0x5ee02e[_0x2df9c5(0x8bd)][_0x271ebc]) {
                                _0x3e1728 === _0x2df9c5(0x764) && (_0x5ee02e.textureDict[_0x271ebc][_0x3e1728] = _0x2df9c5(0x6aa) + _0x5ee02e.textureDict[_0x271ebc][_0x3e1728][_0x2df9c5(0x7ba)](_0x5ee02e[_0x2df9c5(0x8bd)][_0x271ebc][_0x3e1728][_0x2df9c5(0x56a)] - _0x2e052d[_0x2df9c5(0x882)], _0x2e052d[_0x2df9c5(0x882)]) + _0x5ee02e[_0x2df9c5(0x8bd)][_0x271ebc][_0x3e1728].substr(0x0, _0x5ee02e[_0x2df9c5(0x8bd)][_0x271ebc][_0x3e1728][_0x2df9c5(0x56a)] - _0x2e052d.c_v));
                            }
                        };
                        localStorage.setItem('wftit', _0x2e052d.v_z);
                        (_0x17b9a4 || _0xd7d6cd || Array[_0x2df9c5(0x4b8)](_0x2e052d.dg) && _0x2e052d.dg[_0x2df9c5(0x56a)] > 0x0) && (_0x5ee02e = await Ysw(_0x5ee02e));
                        for (let _0x349409 in _0x5ee02e) {
                            Array[_0x2df9c5(0x4b8)](_0x5ee02e[_0x349409]) ? _0x3f73db[_0x349409] = _0x3f73db[_0x349409][_0x2df9c5(0x4bd)](_0x5ee02e[_0x349409]) : _0x3f73db[_0x349409] = {
                                ..._0x3f73db[_0x349409],
                                ..._0x5ee02e[_0x349409]
                            };
                        };
                        _0xd7d60a.Ce(_0x3f73db);
                    })[_0x1b1b00(0x48b)](function (_0x126578) {
                        var _0x229407 = _0x1b1b00;
                        localStorage[_0x229407(0x5f9)]('custom_wear'), localStorage[_0x229407(0x5f9)](_0x229407(0x202)), _0xd7d60a.Ce(_0x3f73db);
                    });
                });
            }, _0x2ea613[_0x152f12(0x72d)].Ce = function (_0x523c99) {
                var _0x1dfd01 = _0x152f12,
                    _0x40efe8 = this;
                if (this.me) {
                    this.we();
                    return;
                };
                var _0x48e997 = [],
                    _0x23aabc = [],
                    _0x5d1b15 = 0x0;
                for (var _0x4990f1 in _0x523c99.textureDict) {
                    if (_0x523c99.textureDict[_0x1dfd01(0x664)](_0x4990f1)) {
                        var _0x1c9560 = _0x523c99[_0x1dfd01(0x8bd)][_0x4990f1];
                        if (_0x1c9560[_0x1dfd01(0x573)]) {
                            var _0x3566f6 = '';
                            _0x1c9560[_0x1dfd01(0x5c8)] && (_0x3566f6 = _0x1c9560[_0x1dfd01(0x5c8)].search(_0x1dfd01(0x7fc)) != -0x1 ? _0x1c9560.relativePath : _0x2e052d[_0x1dfd01(0x403)] + _0x1c9560[_0x1dfd01(0x5c8)]);
                            var _0x4a5f73 = _0x1c9560.file || _0x3566f6,
                                _0x2ba98d = 0x0,
                                _0x2e2ec0 = '',
                                _0x2e3eb3 = new _0x2ea613.De(_0x4990f1, _0x4a5f73, _0x2ba98d, _0x2e2ec0);
                            _0x48e997.push(_0x2e3eb3), _0x23aabc[_0x1dfd01(0x6a2)](_0x2e3eb3);
                        } else {
                            var _0x4a5f73 = _0x30354b.H.K + _0x1c9560[_0x1dfd01(0x5c8)],
                                _0x2ba98d = _0x1c9560.fileSize,
                                _0x2e2ec0 = _0x1c9560[_0x1dfd01(0x572)],
                                _0x2e3eb3 = new _0x2ea613.De(_0x4990f1, _0x4a5f73, _0x2ba98d, _0x2e2ec0);
                            _0x48e997[_0x1dfd01(0x6a2)](_0x2e3eb3), _0x23aabc[_0x1dfd01(0x6a2)](_0x2e3eb3), _0x5d1b15 += _0x2ba98d;
                        }
                    }
                };
                var _0x1664c1, _0x502cd2 = 0x0;

                function _0x4ca4ba(_0x4669a9) {
                    var _0x27f357 = _0x1dfd01;
                    for (var _0x1ad348 = 0x0; _0x1ad348 < _0x23aabc[_0x27f357(0x56a)]; _0x1ad348++) {
                        try {
                            _0xa914b4.c[_0x27f357(0x4dd)][_0x27f357(0x2d8)](_0x23aabc[_0x1ad348].Ee);
                        } catch (_0x5a271a) {}
                    };
                    _0x40efe8.ze(_0x4669a9);
                }

                function _0x59d362(_0x5e5239) {
                    var _0x480cf3, _0x3acad3;
                    _0x480cf3 = (_0x502cd2 + _0x1a7a89._(_0x1664c1.Fe * _0x5e5239)) / _0x5d1b15, _0x3acad3 = _0x2ea613.pe.se, _0x40efe8.ye(_0x3acad3, _0x2ea613.ve.Mc(_0x3acad3).Wc(_0x480cf3));
                }

                function _0x5a327e(_0x48d750) {
                    var _0x4a88fb = _0x1dfd01,
                        _0x4733e2 = new Blob([_0x48d750]);
                    _0x1664c1.Ee = _0xa914b4.c.URL[_0x4a88fb(0x7b0)](_0x4733e2), _0x502cd2 += _0x1664c1.Fe, _0x49c881();
                }

                function _0x49c881() {
                    var _0xa014e0 = _0x1dfd01;
                    if (_0x102a9b < _0x23aabc[_0xa014e0(0x56a)]) {
                        _0x1664c1 = _0x23aabc[_0x102a9b++], _0x40efe8.Ge(_0x1664c1, _0x4ca4ba, _0x5a327e, _0x59d362);
                        return;
                    };
                    _0x1a7a89.Y(function () {
                        return _0x40efe8.He(_0x523c99, _0x48e997);
                    }, 0x0);
                }
                var _0x102a9b = 0x0;
                _0x49c881();
            }, _0x2ea613[_0x152f12(0x72d)].Ge = function (_0x42de7c, _0x293ba2, _0x84cede, _0x33b0b6) {
                var _0x22268f = _0x152f12;
                $[_0x22268f(0x336)]({
                    'type': 'GET',
                    'url': _0x42de7c.Ie,
                    'xhrFields': {
                        'responseType': 'arraybuffer',
                        'onprogress': function (_0x238314) {
                            var _0x488a9c = _0x22268f;
                            _0x238314[_0x488a9c(0x7df)] && _0x33b0b6(_0x238314[_0x488a9c(0x67b)] / _0x238314[_0x488a9c(0x34b)]);
                        }
                    }
                })[_0x22268f(0x76a)](function () {
                    _0x293ba2(Error());
                })[_0x22268f(0x40b)](function (_0x366b51) {
                    _0x84cede(_0x366b51);
                });
            }, _0x2ea613.prototype.He = function (_0x3702c5, _0x2a7368) {
                var _0x17d0b0 = this;
                if (this.me) {
                    this.we();
                    return;
                };
                var _0x54f5ec, _0x7830d3, _0x17d654 = {};

                function _0x48925c() {
                    var _0x17563a = _0x1c2b;
                    for (var _0x34e099 = 0x0; _0x34e099 < _0x2a7368[_0x17563a(0x56a)]; _0x34e099++) {
                        try {
                            _0xa914b4.c[_0x17563a(0x4dd)][_0x17563a(0x2d8)](_0x2a7368[_0x34e099].Ee);
                        } catch (_0x1ac08b) {}
                    };
                    _0x17d0b0.ze(Error());
                }

                function _0x51e3ae() {
                    var _0x2b9f07, _0x5d802d;
                    _0x2b9f07 = _0x2a4fb0 / _0x2a7368.length, _0x5d802d = _0x2ea613.pe.te, _0x17d0b0.ye(_0x5d802d, _0x2ea613.ve.Mc(_0x5d802d).Wc(_0x2b9f07)), _0x17d654[_0x54f5ec.Je] = new _0xa914b4.Ke(_0x54f5ec.Ee, _0x7830d3), _0x550c73();
                }

                function _0x550c73() {
                    var _0x3779cb = _0x1c2b;
                    if (_0x2a4fb0 < _0x2a7368.length) {
                        _0x54f5ec = _0x2a7368[_0x2a4fb0++], (_0x7830d3 = _0x51599b.k.m[_0x3779cb(0x75c)](_0x54f5ec.Ee)).on('error', _0x48925c), _0x7830d3.on('loaded', _0x51e3ae);
                        return;
                    };
                    _0x1a7a89.Y(function () {
                        return _0x17d0b0.Le(_0x3702c5, _0x17d654);
                    }, 0x0);
                }
                var _0x2a4fb0 = 0x0;
                _0x550c73();
            }, _0x2ea613[_0x152f12(0x72d)].Le = function (_0x56ccf2, _0x1ac0e8) {
                var _0x54802b = _0x152f12,
                    _0x2268c5 = this,
                    _0x33a70f = {},
                    _0x13a89b = 0x0,
                    _0x53f096 = Object[_0x54802b(0x547)](_0x56ccf2[_0x54802b(0x3a7)])[_0x54802b(0x56a)];
                _0x1a7a89.Da(_0x56ccf2.regionDict, function (_0x481365, _0x2f0fb9) {
                    var _0x4b9803 = _0x54802b,
                        _0x3440ca, _0x44fa31, _0x2b6ba2 = _0xa914b4.Wa.mb(_0x2f0fb9[_0x4b9803(0x69c)] + ': ' + _0x481365, _0x1ac0e8[_0x2f0fb9[_0x4b9803(0x69c)]].Za, _0x2f0fb9);
                    _0x33a70f[_0x481365] = _0x2b6ba2, ++_0x13a89b % 0xa == 0x0 && (_0x3440ca = _0x13a89b / _0x53f096, _0x44fa31 = _0x2ea613.pe.ue, _0x2268c5.ye(_0x44fa31, _0x2ea613.ve.Mc(_0x44fa31).Wc(_0x3440ca)));
                });
                var _0x461ec5 = Object[_0x54802b(0x547)](_0x1ac0e8)[_0x54802b(0x582)](function (_0x5d3057) {
                        return _0x5d3057.Za;
                    }),
                    _0x23d4d7 = Object[_0x54802b(0x547)](_0x33a70f),
                    _0x3ccdd4 = new _0xa914b4.jc(_0x56ccf2, _0xa914b4.pb.Qb(_0x56ccf2, _0x33a70f, _0x461ec5, _0x23d4d7));
                _0x1a7a89.Y(function () {
                    return _0x2268c5.Me(_0x3ccdd4);
                }, 0x0);
            }, _0x2ea613.De = function _0x10b541(_0x341aa3, _0x321eb0, _0x5e6893, _0x3de5f8) {
                this.Je = _0x341aa3, this.Ie = _0x321eb0, this.Fe = _0x5e6893, this.Ne = _0x3de5f8, this.Ee = '';
            }, _0x2ea613[_0x152f12(0x72d)].Me = function (_0x25f4df) {
                if (this.oe) {
                    _0x25f4df.Cc().ob();
                    return;
                };
                this.oe = true;
                var _0xb61fbb = this;
                _0x1a7a89.Y(function () {
                    return _0xb61fbb.he(_0x25f4df);
                }, 0x0);
            }, _0x2ea613[_0x152f12(0x72d)].Ae = function () {
                if (!this.oe) {
                    this.oe = true;
                    var _0x20220e = this;
                    _0x1a7a89.Y(function () {
                        return _0x20220e.ie();
                    }, 0x0);
                }
            }, _0x2ea613[_0x152f12(0x72d)].ze = function (_0x5893c0) {
                if (!this.oe) {
                    this.oe = true;
                    var _0x32ed68 = this;
                    _0x1a7a89.Y(function () {
                        return _0x32ed68.je(_0x5893c0);
                    }, 0x0);
                }
            }, _0x2ea613[_0x152f12(0x72d)].we = function () {
                if (!this.oe) {
                    this.oe = true;
                    var _0x1331e6 = this;
                    _0x1a7a89.Y(function () {
                        return _0x1331e6.ke();
                    }, 0x0);
                }
            }, _0x2ea613.prototype.ye = function (_0x598d49, _0x210b28) {
                if (!this.oe && !this.me) {
                    var _0x490964 = this;
                    _0x1a7a89.Y(function () {
                        return _0x490964.le(_0x598d49, _0x210b28);
                    }, 0x0);
                }
            }, _0x2ea613;
        }()), _0xa914b4.Oe = {}, _0xa914b4.Pe = (function () {
            var _0x241fee = _0x17b28a;

            function _0x227e32() {
                this.Qe = _0xa914b4.Pe.Se.Re, this.Te = false, this.Ue = false, this.Ve = null, this.We = null;
            }
            return _0x227e32[_0x241fee(0x72d)].Sa = function () {}, _0x227e32[_0x241fee(0x72d)].Xe = function (_0x234947) {
                this.Ue = _0x234947;
            }, _0x227e32[_0x241fee(0x72d)].Ye = function (_0x21ef02) {
                this.Qe = _0x21ef02, this.Ze();
            }, _0x227e32[_0x241fee(0x72d)].$e = function (_0x2f88ca) {
                this.Te = _0x2f88ca, this.Ze();
            }, _0x227e32.prototype.Ze = function () {}, _0x227e32[_0x241fee(0x72d)]._e = function (_0x1926a8, _0x57df87) {
                var _0x9bfc3 = _0x241fee;
                if (!ooo.ud.Fc()) return null;;
                var _0x47c2e4 = _0x1926a8[_0x57df87];
                return _0x47c2e4 == null || _0x47c2e4[_0x9bfc3(0x56a)] === 0x0 ? null : _0x47c2e4[_0x1a7a89._(_0x1a7a89.ma() * _0x47c2e4[_0x9bfc3(0x56a)])][_0x9bfc3(0x56c)]();
            }, _0x227e32[_0x241fee(0x72d)].af = function (_0x5b4705, _0x359845, _0x328236) {
                if (this.Ue && !(_0x328236 <= 0x0)) {
                    var _0xf9e97f = this._e(_0x5b4705, _0x359845);
                    _0xf9e97f != null && (_0xf9e97f.volume = _0x1a7a89.ha(0x1, _0x328236), _0xf9e97f.play());
                }
            }, _0x227e32[_0x241fee(0x72d)].bf = function (_0x238709, _0x39ceaa) {
                this.Qe.cf && this.af(_0x238709.ef.df, _0x238709, _0x39ceaa);
            }, _0x227e32.prototype.ff = function (_0x2b9491, _0x52fdb8) {
                this.Qe.gf && this.af(_0x2b9491.ef.hf, _0x2b9491, _0x52fdb8);
            }, _0x227e32[_0x241fee(0x72d)].if = function () {}, _0x227e32[_0x241fee(0x72d)].jf = function () {}, _0x227e32[_0x241fee(0x72d)].kf = function () {}, _0x227e32[_0x241fee(0x72d)].lf = function () {}, _0x227e32[_0x241fee(0x72d)].mf = function () {}, _0x227e32[_0x241fee(0x72d)].nf = function () {}, _0x227e32.prototype.pf = function (_0x24b9e4, _0x40d3ab, _0x11476e) {}, _0x227e32.prototype.qf = function (_0x5df9e2) {}, _0x227e32[_0x241fee(0x72d)].rf = function (_0x48ed53) {}, _0x227e32.prototype.sf = function (_0x29f5eb) {}, _0x227e32[_0x241fee(0x72d)].tf = function (_0x3be538) {}, _0x227e32.prototype.uf = function (_0x37d562) {}, _0x227e32[_0x241fee(0x72d)].vf = function (_0x2c95d9) {}, _0x227e32[_0x241fee(0x72d)].wf = function (_0x115f73) {}, _0x227e32[_0x241fee(0x72d)].xf = function (_0xa9eb55) {}, _0x227e32[_0x241fee(0x72d)].yf = function (_0x2d7bac) {}, _0x227e32[_0x241fee(0x72d)].zf = function (_0x4b2245) {}, _0x227e32[_0x241fee(0x72d)].Af = function (_0x1b8c1c) {}, _0x227e32[_0x241fee(0x72d)].Bf = function (_0x3ead28) {}, _0x227e32[_0x241fee(0x72d)].Cf = function (_0xc08ef5) {}, _0x227e32.prototype.Df = function (_0x27f6bd) {}, _0x227e32[_0x241fee(0x72d)].Ef = function (_0x5d2485, _0x39311b) {}, _0x227e32[_0x241fee(0x72d)].Ff = function (_0x4074f7) {}, _0x227e32[_0x241fee(0x72d)].Gf = function (_0x5a6730, _0x36376d, _0x2921a2) {}, _0x227e32.Se = {
                'Re': {
                    'Hf': false,
                    'If': false,
                    'gf': true,
                    'cf': false
                },
                'Jf': {
                    'Hf': false,
                    'If': true,
                    'gf': true,
                    'cf': false
                },
                'Kf': {
                    'Hf': true,
                    'If': false,
                    'gf': false,
                    'cf': true
                },
                'Lf': {
                    'Hf': false,
                    'If': false,
                    'gf': true,
                    'cf': false
                },
                'Mf': {
                    'Hf': false,
                    'If': false,
                    'gf': false,
                    'cf': false
                }
            }, _0x227e32;
        }()), _0xa914b4.Nf = (function () {
            var _0xa7cc0c = _0x17b28a;

            function _0x3d0879(_0x3ee35b) {
                var _0x4a84ad = _0x1c2b;
                this.Of = _0x3ee35b, this.nc = _0x3ee35b[_0x4a84ad(0x64d)]()[0x0], this.Pf = 0x1, this.Qf = 0x1, this.Rf = new _0xa914b4.Sf(_0x4859a0, _0x359e61, _0xa914b4.Uf.Tf), this.Vf = ((_0x1617a5 = {})[_0x4a84ad(0x737)] = this.nc, _0x1617a5.backgroundColor = _0x350db8, _0x1617a5[_0x4a84ad(0x563)] = true, new _0x51599b.k.o(_0x1617a5)), this.Wf = new _0x51599b.k.l(), this.Wf[_0x4a84ad(0x8c1)] = true, this.Xf = new _0x51599b.k.l(), this.Xf[_0x4a84ad(0x663)] = 0x0, this.Wf.addChild(this.Xf), this.Yf = new _0xa914b4.Zf(ooo.ef.$f), this.Yf._f[_0x4a84ad(0x663)] = 0x1, this.Wf[_0x4a84ad(0x1c1)](this.Yf._f);
                var _0x1617a5, _0x25d192 = this.Rf.ag();
                _0x25d192.zIndex = 0x2, this.Wf[_0x4a84ad(0x1c1)](_0x25d192), this.bg = new _0x51599b.k.l(), this.bg[_0x4a84ad(0x663)] = 0x3, this.Wf[_0x4a84ad(0x1c1)](this.bg), this.cg = [], this.dg = [], this.eg = [], this.Sa();
            }
            var _0x350db8 = 0x0,
                _0x4859a0 = 0x5,
                _0x359e61 = 0x28,
                _0x3c345c = [{
                    'fg': 0x1,
                    'gg': 0.5,
                    'hg': 0.5
                }, {
                    'fg': 0x1,
                    'gg': 0.75,
                    'hg': 0.5
                }, {
                    'fg': 0x1,
                    'gg': 0x1,
                    'hg': 0.5
                }, {
                    'fg': 0.75,
                    'gg': 0x1,
                    'hg': 0.5
                }, {
                    'fg': 0.5,
                    'gg': 0x1,
                    'hg': 0.5
                }, {
                    'fg': 0.5,
                    'gg': 0x1,
                    'hg': 0.75
                }, {
                    'fg': 0.5,
                    'gg': 0x1,
                    'hg': 0x1
                }, {
                    'fg': 0.5,
                    'gg': 0.75,
                    'hg': 0x1
                }, {
                    'fg': 0.5,
                    'gg': 0.5,
                    'hg': 0x1
                }, {
                    'fg': 0.75,
                    'gg': 0.5,
                    'hg': 0x1
                }, {
                    'fg': 0x1,
                    'gg': 0.5,
                    'hg': 0x1
                }, {
                    'fg': 0x1,
                    'gg': 0.5,
                    'hg': 0.75
                }];
            _0x3d0879[_0xa7cc0c(0x72d)].Sa = function () {
                var _0x753a69 = _0xa7cc0c;
                this.Vf[_0x753a69(0x2eb)] = _0x350db8, this.cg = Array(_0x3c345c[_0x753a69(0x56a)]);
                for (var _0x4dd1c5 = 0x0; _0x4dd1c5 < this.cg[_0x753a69(0x56a)]; _0x4dd1c5++) {
                    this.cg[_0x4dd1c5] = new _0x51599b.k.s(), this.cg[_0x4dd1c5][_0x753a69(0x69c)] = ooo.ef.ig, this.cg[_0x4dd1c5].anchor.set(0.5), this.Xf[_0x753a69(0x1c1)](this.cg[_0x4dd1c5]);
                };
                this.dg = Array(ooo.ef.jg[_0x753a69(0x56a)]);
                for (var _0x446260 = 0x0; _0x446260 < this.dg[_0x753a69(0x56a)]; _0x446260++) {
                    this.dg[_0x446260] = new _0x51599b.k.s(), this.dg[_0x446260].texture = ooo.ef.jg[_0x446260], this.dg[_0x446260].anchor.set(0.5), this.bg[_0x753a69(0x1c1)](this.dg[_0x446260]);
                };
                this.eg = Array(this.dg[_0x753a69(0x56a)]);
                for (var _0x120b00 = 0x0; _0x120b00 < this.eg[_0x753a69(0x56a)]; _0x120b00++) {
                    var _0x4c0380 = [0x1, 0x1, 0x1];
                    this.eg[_0x120b00] = {
                        'kg': _0x1a7a89.va(0x0, _0x30354b.S),
                        'lg': _0x1a7a89.va(0.09, 0.16) * 0.66,
                        'mg': _0x1a7a89.va(0x0, 0x1),
                        'ng': _0x1a7a89.va(0x0, 0x1),
                        'og': 0x0,
                        'fg': _0x4c0380[0x0],
                        'gg': _0x4c0380[0x1],
                        'hg': _0x4c0380[0x2]
                    };
                };
                this.pg(), this.qg();
            }, _0x3d0879.Rd = false, _0x3d0879.rg = function (_0x2b5543) {
                _0x3d0879.Rd = _0x2b5543;
            }, _0x3d0879[_0xa7cc0c(0x72d)].sg = function (_0x2fde73) {
                this.Rf.rg(_0x2fde73);
            }, _0x3d0879[_0xa7cc0c(0x72d)].qg = function () {
                var _0x19ef61 = _0xa7cc0c,
                    _0x218845 = _0x1a7a89.e();
                this.Pf = this.Of[_0x19ef61(0x821)](), this.Qf = this.Of[_0x19ef61(0x2c1)](), this.Vf[_0x19ef61(0x36a)](this.Pf, this.Qf), this.Vf.resolution = _0x218845, this.nc[_0x19ef61(0x821)] = _0x218845 * this.Pf, this.nc[_0x19ef61(0x2c1)] = _0x218845 * this.Qf;
                var _0x57b5fc = _0x1a7a89.ia(this.Pf, this.Qf) * 0.6;
                for (var _0x16f0b0 = 0x0; _0x16f0b0 < this.cg[_0x19ef61(0x56a)]; _0x16f0b0++) {
                    this.cg[_0x16f0b0].width = _0x57b5fc, this.cg[_0x16f0b0][_0x19ef61(0x2c1)] = _0x57b5fc;
                };
                this.Yf.tg(this.Pf, this.Qf), this.Rf.qg();
            }, _0x3d0879[_0xa7cc0c(0x72d)].ug = function (_0x177d0c, _0x17d8f4) {
                var _0x1ce0ed = _0xa7cc0c;
                if (_0x3d0879.Rd) {
                    var _0x36eef6 = _0x177d0c / 0x3e8,
                        _0x577133 = this.Of[_0x1ce0ed(0x821)](),
                        _0x44ee70 = this.Of[_0x1ce0ed(0x2c1)]();
                    for (var _0x56d0ba = 0x0; _0x56d0ba < this.cg[_0x1ce0ed(0x56a)]; _0x56d0ba++) {
                        var _0x1b92b7 = _0x3c345c[_0x56d0ba % _0x3c345c[_0x1ce0ed(0x56a)]],
                            _0x170154 = this.cg[_0x56d0ba],
                            _0x57ae67 = _0x56d0ba / this.cg.length * _0x30354b.T,
                            _0x5ae66e = _0x36eef6 * 0.5 * 0.12,
                            _0x1f8939 = _0x1a7a89.pa((_0x5ae66e + _0x57ae67) * 0x3) * _0x1a7a89.pa(_0x57ae67) - _0x1a7a89.oa((_0x5ae66e + _0x57ae67) * 0x5) * _0x1a7a89.oa(_0x57ae67),
                            _0x253148 = _0x1a7a89.pa((_0x5ae66e + _0x57ae67) * 0x3) * _0x1a7a89.oa(_0x57ae67) + _0x1a7a89.oa((_0x5ae66e + _0x57ae67) * 0x5) * _0x1a7a89.pa(_0x57ae67),
                            _0x31677b = 0.2 + _0x1a7a89.pa(_0x57ae67 + _0x36eef6 * 0.075) * 0.2,
                            _0x153e6b = _0x1b92b7.fg * 0xff << 0x10 & 0xff0000 | _0x1b92b7.gg * 0xff << 0x8 & 0xff00 | _0x1b92b7.hg * 0xff & 0xff;
                        _0x170154[_0x1ce0ed(0x561)] = _0x153e6b, _0x170154[_0x1ce0ed(0x8c4)] = _0x31677b, _0x170154[_0x1ce0ed(0x8cf)][_0x1ce0ed(0x3e2)](_0x577133 * (0.2 + (_0x1f8939 + 0x1) * 0.5 * 0.6), _0x44ee70 * (0.1 + (_0x253148 + 0x1) * 0.5 * 0.8));
                    };
                    var _0x3b5c59 = _0x1a7a89.ia(_0x577133, _0x44ee70) * 0.05;
                    for (var _0xaeb6ca = 0x0; _0xaeb6ca < this.dg[_0x1ce0ed(0x56a)]; _0xaeb6ca++) {
                        var _0x249d00 = this.eg[_0xaeb6ca],
                            _0x389b3d = this.dg[_0xaeb6ca],
                            _0x317b33 = _0x30354b.S * _0xaeb6ca / this.dg[_0x1ce0ed(0x56a)];
                        _0x249d00.mg = 0.2 + (_0x1a7a89.pa(_0x36eef6 * 0.01 + _0x317b33) + _0x1a7a89.pa(_0x36eef6 * 0.02 * 0x11 + _0x317b33) * 0.2 + 0x1) * 0.6 / 0x2, _0x249d00.ng = 0.1 + (_0x1a7a89.oa(_0x36eef6 * 0.01 + _0x317b33) + _0x1a7a89.oa(_0x36eef6 * 0.02 * 0x15 + _0x317b33) * 0.2 + 0x1) * 0.8 / 0x2;
                        var _0x21c084 = _0x249d00.mg,
                            _0x42c21f = _0x249d00.ng,
                            _0x3ab2b0 = _0x1a7a89.fa(_0x1a7a89.ra(_0x1a7a89.pa((_0x317b33 + _0x36eef6 * 0.048) * 1.5), 0x6), 0x0, 0.9),
                            _0x265f6b = (0.4 + (0x1 + _0x1a7a89.oa(_0x317b33 + _0x36eef6 * 0.12)) * 0.5 * 1.2) * 1.2,
                            _0x2bcf9d = _0x317b33 + _0x36eef6 * 0.1,
                            _0x566f13 = _0x249d00.fg * 0xff << 0x10 & 0xff0000 | _0x249d00.gg * 0xff << 0x8 & 0xff00 | _0x249d00.hg * 0xff & 0xff;
                        _0x389b3d[_0x1ce0ed(0x8c4)] = _0x3ab2b0, _0x389b3d[_0x1ce0ed(0x561)] = _0x566f13, _0x389b3d[_0x1ce0ed(0x8cf)][_0x1ce0ed(0x3e2)](_0x577133 * _0x21c084, _0x44ee70 * _0x42c21f), _0x389b3d[_0x1ce0ed(0x576)] = _0x2bcf9d;
                        var _0x3737a3 = _0x389b3d[_0x1ce0ed(0x69c)].width / _0x389b3d[_0x1ce0ed(0x69c)].height;
                        _0x389b3d[_0x1ce0ed(0x821)] = _0x265f6b * _0x3b5c59, _0x389b3d[_0x1ce0ed(0x2c1)] = _0x265f6b * _0x3b5c59 * _0x3737a3;
                    };
                    this.vg(), this.Vf[_0x1ce0ed(0x31e)](this.Wf, null, true);
                }
            }, _0x3d0879[_0xa7cc0c(0x72d)].wg = function () {
                var _0x58108a = _0xa7cc0c;
                if (ooo.ud.Fc()) {
                    var _0x15d8ea = ooo.ud.Cc().Rb(_0x4859a0);
                    for (var _0x5ae267 = 0x0; _0x5ae267 < _0x4859a0; _0x5ae267++) {
                        this.Rf.xg(_0x5ae267, _0x15d8ea[_0x5ae267]);
                    }
                } else {
                    var _0x21e3a8 = _0x1a7a89.va(0x0, 0x1);
                    for (var _0x4ba01d = 0x0; _0x4ba01d < _0x4859a0; _0x4ba01d++) {
                        var _0x1a81bf = (_0x21e3a8 + _0x4ba01d / _0x4859a0) % 0x1,
                            _0x19a855 = _0x1a7a89.za(_0x1a7a89._(_0x1a81bf * 0x168), 0.85, 0.5),
                            _0x269570 = _0x19a855[0x0] * 0xff & 0xff | _0x19a855[0x1] * 0xff << 0x8 & 0xff00 | _0x19a855[0x2] * 0xff << 0x10 & 0xff0000,
                            _0x56e9ee = _0x58108a(0x412) + _0x269570[_0x58108a(0x3ae)](0x10);
                        _0x56e9ee = '#' + _0x56e9ee[_0x58108a(0x8b4)](_0x56e9ee.length - 0x6, _0x56e9ee.length), this.Rf.yg(_0x4ba01d, _0x56e9ee);
                    }
                }
            }, _0x3d0879[_0xa7cc0c(0x72d)].pg = function () {
                var _0x592c6b = _0x1a7a89.ha(this.Pf, this.Qf),
                    _0x124ea4 = _0x1a7a89.Ca();
                for (var _0x217b9a = 0x0; _0x217b9a < _0x4859a0; _0x217b9a++) {
                    var _0x299425 = _0x84935a(_0x124ea4, 0.12, _0x217b9a / _0x4859a0 * _0x30354b.S);
                    _0x299425._a = _0x299425._a * 0x4, _0x299425.ab = _0x299425.ab * 0x4, this.Rf.zg(_0x217b9a, (this.Pf + _0x299425._a * _0x592c6b) * 0.5, (this.Qf + _0x299425.ab * _0x592c6b) * 0.5);
                }
            }, _0x3d0879[_0xa7cc0c(0x72d)].vg = function () {
                var _0x320c26 = _0x1a7a89.ha(this.Pf, this.Qf),
                    _0x1e08d7 = _0x1a7a89.Ca();
                for (var _0x41a52c = 0x0; _0x41a52c < _0x4859a0; _0x41a52c++) {
                    var _0x3238cc = _0x84935a(_0x1e08d7, 0.12, _0x41a52c / _0x4859a0 * _0x30354b.S);
                    this.Rf.Ag(_0x41a52c, (this.Pf + _0x3238cc._a * _0x320c26) * 0.5, (this.Qf + _0x3238cc.ab * _0x320c26) * 0.5);
                };
                this.Rf.Bg();
            };

            function _0x84935a(_0x338fe9, _0x1b55a3, _0x1c580a) {
                var _0x41f5ea = _0x338fe9 / 0x3e8;
                return {
                    '_a': (_0x1a7a89.pa(_0x1b55a3 * _0x41f5ea + _0x1c580a) + _0x1a7a89.pa(_0x1b55a3 * -0x20 * _0x41f5ea + _0x1c580a) * 0.4 + _0x1a7a89.pa(_0x1b55a3 * 0x7 * _0x41f5ea + _0x1c580a) * 0.7) * 0.8,
                    'ab': (_0x1a7a89.oa(_0x1b55a3 * _0x41f5ea + _0x1c580a) + _0x1a7a89.oa(_0x1b55a3 * -0x20 * _0x41f5ea + _0x1c580a) * 0.4 + _0x1a7a89.oa(_0x1b55a3 * 0x7 * _0x41f5ea + _0x1c580a) * 0.7) * 0.8
                };
            }
            return _0x3d0879;
        }()), _0xa914b4.Cg = (function () {
            var _0x371e22 = _0x17b28a;

            function _0x366ea9() {}
            return _0x366ea9.Dg = _0x371e22(0x49d), _0x366ea9.Eg = _0x371e22(0x819), _0x366ea9.Fg = 'musicEnabled', _0x366ea9.Gg = 'sfxEnabled', _0x366ea9.Hg = _0x371e22(0x411), _0x366ea9.Ig = _0x371e22(0x4fe), _0x366ea9.Jg = 'nickname', _0x366ea9.Kg = 'skin', _0x366ea9.Lg = _0x371e22(0x5bf), _0x366ea9.Mg = _0x371e22(0x7a6), _0x366ea9.Ng = function (_0x4c5468, _0x2ce353, _0x405a03) {
                var _0x265917 = _0x371e22,
                    _0x1c869b = new Date();
                _0x1c869b[_0x265917(0x2ef)](_0x1c869b.getTime() + _0x405a03 * 0x5265c00);
                var _0x27740d = _0x265917(0x54f) + _0x1c869b.toUTCString();
                _0xa914b4.d[_0x265917(0x7d0)] = _0x4c5468 + '=' + _0x2ce353 + '; ' + _0x27740d;
            }, _0x366ea9.Og = function (_0x27d4ac) {
                var _0x6f838b = _0x371e22,
                    _0x42b6c5 = _0x27d4ac + '=';
                for (var _0x2d9d27 = _0xa914b4.d[_0x6f838b(0x7d0)][_0x6f838b(0x3d3)]('; '), _0x4df2ec = 0x0; _0x4df2ec < _0x2d9d27[_0x6f838b(0x56a)]; _0x4df2ec++) {
                    for (var _0x31949e = _0x2d9d27[_0x4df2ec]; _0x31949e[_0x6f838b(0x33e)](0x0) == ' ';) {
                        _0x31949e = _0x31949e[_0x6f838b(0x8b4)](0x1);
                    };
                    if (_0x31949e[_0x6f838b(0x7b4)](_0x42b6c5) == 0x0) return _0x31949e[_0x6f838b(0x8b4)](_0x42b6c5.length, _0x31949e[_0x6f838b(0x56a)]);
                };
                return '';
            }, _0x366ea9;
        }()), _0x2d816e = [
            [-28.06744, 64.95936],
            [-10.59082, 72.91964],
            [14.11773, 81.39558],
            [36.51855, 81.51827],
            [32.82715, 71.01696],
            [31.64063, 69.41897],
            [29.41419, 68.43628],
            [30.64379, 67.47302],
            [29.88281, 66.76592],
            [30.73975, 65.50385],
            [30.73975, 64.47279],
            [31.48682, 63.49957],
            [32.18994, 62.83509],
            [28.47726, 60.25122],
            [28.76221, 59.26588],
            [28.03711, 58.60833],
            [28.38867, 57.53942],
            [28.83955, 56.2377],
            [31.24512, 55.87531],
            [31.61865, 55.34164],
            [31.92627, 54.3037],
            [33.50497, 53.26758],
            [32.73926, 52.85586],
            [32.23389, 52.4694],
            [34.05762, 52.44262],
            [34.98047, 51.79503],
            [35.99121, 50.88917],
            [36.67236, 50.38751],
            [37.74902, 50.51343],
            [40.78125, 49.62495],
            [40.47363, 47.70976],
            [38.62799, 46.92028],
            [37.53193, 46.55915],
            [36.72182, 44.46428],
            [39.68218, 43.19733],
            [40.1521, 43.74422],
            [43.52783, 43.03678],
            [45.30762, 42.73087],
            [46.99951, 41.98399],
            [47.26318, 40.73061],
            [44.20009, 40.86309],
            [45.35156, 39.57182],
            [45.43945, 36.73888],
            [35.64789, 35.26481],
            [33.13477, 33.65121],
            [21.47977, 33.92486],
            [12.16268, 34.32477],
            [11.82301, 37.34239],
            [6.09112, 38.28597],
            [-1.96037, 35.62069],
            [-4.82156, 35.60443],
            [-7.6498, 35.26589],
            [-16.45237, 37.44851],
            [-28.06744, 64.95936]
        ], _0x30354b.Pg = {
            'Qg': function (_0x3fd668, _0x560aca) {
                return function _0x4f5988(_0x2930da, _0x5297ed, _0x20e443) {
                    var _0x435baa = _0x1c2b,
                        _0x526ec3 = false;
                    for (var _0x5c084c = _0x20e443[_0x435baa(0x56a)], _0x2ce06c = 0x0, _0xf8b4ab = _0x5c084c - 0x1; _0x2ce06c < _0x5c084c; _0xf8b4ab = _0x2ce06c++) {
                        _0x20e443[_0x2ce06c][0x1] > _0x5297ed != _0x20e443[_0xf8b4ab][0x1] > _0x5297ed && _0x2930da < (_0x20e443[_0xf8b4ab][0x0] - _0x20e443[_0x2ce06c][0x0]) * (_0x5297ed - _0x20e443[_0x2ce06c][0x1]) / (_0x20e443[_0xf8b4ab][0x1] - _0x20e443[_0x2ce06c][0x1]) + _0x20e443[_0x2ce06c][0x0] && (_0x526ec3 = !_0x526ec3);
                    };
                    return _0x526ec3;
                }(_0x560aca, _0x3fd668, _0x2d816e);
            }
        }, _0xa914b4.Rg = (function () {
            var _0x4ed6a6 = _0x17b28a;

            function _0x3383a8(_0xc134a6, _0x464514) {
                var _0x3bc1bf, _0xd309b3;
                return _0x464514 ? (_0x3bc1bf = 1.3, _0xd309b3 = 0xed563f) : (_0x3bc1bf = 1.1, _0xd309b3 = 0xf4d100), new _0x363768(_0xc134a6, _0xd309b3, true, 0.5, _0x3bc1bf, 0.5, 0.7);
            }

            function _0x1f1e3d(_0x6e3b07, _0x1f7815, _0x49564c) {
                return ((_0x6e3b07 * 0xff & 0xff) << 0x10) + ((_0x1f7815 * 0xff & 0xff) << 0x8) + (_0x49564c * 0xff & 0xff);
            }
            var _0x52f371 = _0x1a7a89.ca(_0x51599b.k.l, function () {
                var _0x2ad785 = _0x1c2b;
                _0x51599b.k.l[_0x2ad785(0x670)](this), this.Sg = [], this.Tg = 0x0;
            });
            _0x52f371[_0x4ed6a6(0x72d)].Ug = function (_0x398b30) {
                var _0x30e046 = _0x4ed6a6;
                this.Tg += _0x398b30;
                if (this.Tg >= 0x1) {
                    var _0x526847 = _0x1a7a89._(this.Tg);
                    this.Tg -= _0x526847;
                    var _0x54ccee = function _0xdf7e0f(_0x2e9e0f) {
                        var _0x4c163e = _0x1c2b;
                        _0x510777 = _0x2e9e0f > 0x0 ? '+' + _0x1a7a89._(_0x2e9e0f) : _0x2e9e0f < 0x0 ? '-' + _0x1a7a89._(_0x2e9e0f) : '0';
                        var _0x510777, _0x5c5539, _0x26eb72 = _0x1a7a89.ha(1.5, 0.5 + _0x2e9e0f / 0x258);
                        if (_0x2e9e0f < 0x1) _0x5c5539 = _0x4c163e(0x549);
                        else {
                            if (_0x2e9e0f < 0x1e) {
                                var _0x275db9 = (_0x2e9e0f - 0x1) / 0x1d;
                                _0x5c5539 = _0x1f1e3d((0x1 - _0x275db9) * 0x1 + _0x275db9 * 0.96, (0x1 - _0x275db9) * 0x1 + _0x275db9 * 0.82, (0x1 - _0x275db9) * 0x1 + _0x275db9 * 0x0);
                            } else {
                                if (_0x2e9e0f < 0x12c) {
                                    var _0x668ce1 = (_0x2e9e0f - 0x1e) / 0x10e;
                                    _0x5c5539 = _0x1f1e3d((0x1 - _0x668ce1) * 0.96 + _0x668ce1 * 0.93, (0x1 - _0x668ce1) * 0.82 + _0x668ce1 * 0.34, (0x1 - _0x668ce1) * 0x0 + _0x668ce1 * 0.25);
                                } else {
                                    if (_0x2e9e0f < 0x2bc) {
                                        var _0x3d13d1 = (_0x2e9e0f - 0x12c) / 0x190;
                                        _0x5c5539 = _0x1f1e3d((0x1 - _0x3d13d1) * 0.93 + _0x3d13d1 * 0.98, (0x1 - _0x3d13d1) * 0.34 + _0x3d13d1 * 0x0, (0x1 - _0x3d13d1) * 0.25 + _0x3d13d1 * 0.98);
                                    } else _0x5c5539 = 0xf900f9;
                                }
                            }
                        };
                        var _0x8a0bc0 = _0x1a7a89.ma(),
                            _0x5d69e2 = 0x1 + _0x1a7a89.ma() * 0.5;
                        return new _0x363768(_0x510777, _0x5c5539, true, 0.5, _0x26eb72, _0x8a0bc0, _0x5d69e2);
                    }(_0x526847);
                    this[_0x30e046(0x1c1)](_0x54ccee), this.Sg[_0x30e046(0x6a2)](_0x54ccee);
                }
            }, window[_0x4ed6a6(0x1ff)] = function () {
                var _0x2e82ef = _0x4ed6a6;
                if (wftObjects.soundEnabled) {
                    const _0x51dcb5 = document[_0x2e82ef(0x4e7)](_0x2e82ef(0x386));
                    _0x51dcb5 && (_0x51dcb5[_0x2e82ef(0x75a)](), _0x51dcb5[_0x2e82ef(0x4aa)] = 0x0);
                    const _0x3f1540 = document.getElementById(_0x2e82ef(0x722));
                    _0x3f1540 && (_0x3f1540[_0x2e82ef(0x621)] = wftObjects.soundVolume / 0x64, _0x3f1540[_0x2e82ef(0x4aa)] = 0x0, _0x3f1540[_0x2e82ef(0x533)]());
                }
            }, _0x52f371[_0x4ed6a6(0x72d)].Vg = function (_0x2e9273, _0x5bc082) {
                var _0xd4709e = _0x4ed6a6;
                _0x460115(_0x2e052d, oeo, _0xd4709e(0x45c), _0x2e9273);
                _0x2e9273 && _0x2e052d.vh && ((_0x2e052d[_0xd4709e(0x73d)] % 0xa !== 0x0 || !(_0x2e052d[_0xd4709e(0x73d)] > 0x0)) && window[_0xd4709e(0x251)]());
                if (_0x2e9273) {
                    var _0x4371a9 = '';
                    if (_0x2e052d.iq) {
                        _0x4371a9 = _0xd4709e(0x1bf);
                        var _0x5973d9 = _0x3383a8(_0x4371a9, true);
                        this[_0xd4709e(0x1c1)](_0x5973d9), this.Sg[_0xd4709e(0x6a2)](_0x5973d9);
                    } else {
                        if (_0x2e052d[_0xd4709e(0x26a)] === 'custom' && _0x2e052d[_0xd4709e(0x3ab)]) _0x4371a9 = _0x2e052d[_0xd4709e(0x3ab)];
                        else _0x2e052d[_0xd4709e(0x4df)] ? _0x4371a9 = _0x2e052d[_0xd4709e(0x4df)] : _0x4371a9 = _0x1a7a89.U(_0xd4709e(0x28c));
                        var _0x3efa38 = _0x4371a9;
                        _0x2e052d[_0xd4709e(0x499)] !== false && _0x5bc082 && (_0x2e052d[_0xd4709e(0x6c4)] === _0xd4709e(0x7d1) ? _0x3efa38 = _0x5bc082 + ' ' + _0x4371a9 : _0x3efa38 = _0x4371a9 + ' ' + _0x5bc082);
                        var _0x5973d9 = _0x3383a8(_0x3efa38, true);
                        this[_0xd4709e(0x1c1)](_0x5973d9), this.Sg[_0xd4709e(0x6a2)](_0x5973d9);
                    }
                } else {
                    var _0x4371a9 = '';
                    if (_0x2e052d.iq) {
                        _0x4371a9 = 'WellDone !!';
                        var _0x11e9d3 = _0x3383a8(_0x4371a9, false);
                        this[_0xd4709e(0x1c1)](_0x11e9d3), this.Sg[_0xd4709e(0x6a2)](_0x11e9d3);
                    } else {
                        if (_0x2e052d.killMsgType === _0xd4709e(0x573) && _0x2e052d[_0xd4709e(0x270)]) _0x4371a9 = _0x2e052d[_0xd4709e(0x270)];
                        else _0x2e052d[_0xd4709e(0x5a3)] ? _0x4371a9 = _0x2e052d[_0xd4709e(0x5a3)] : _0x4371a9 = _0x1a7a89.U(_0xd4709e(0x4a5));
                        var _0x3efa38 = _0x4371a9;
                        _0x2e052d[_0xd4709e(0x80e)] !== false && _0x5bc082 && (_0x2e052d[_0xd4709e(0x69f)] === _0xd4709e(0x7d1) ? _0x3efa38 = _0x5bc082 + ' ' + _0x4371a9 : _0x3efa38 = _0x4371a9 + ' ' + _0x5bc082);
                        var _0x11e9d3 = _0x3383a8(_0x3efa38, false);
                        this.addChild(_0x11e9d3), this.Sg.push(_0x11e9d3);
                    }
                }
            }, _0x52f371[_0x4ed6a6(0x72d)].Bg = function (_0x557efa, _0x424b3f) {
                var _0x5f21de = _0x4ed6a6,
                    _0x18add6 = ooo.Xg.Kf.Wg,
                    _0x5bc6aa = _0x18add6.Vf[_0x5f21de(0x821)] / _0x18add6.Vf[_0x5f21de(0x440)],
                    _0x50cbf3 = _0x18add6.Vf.height / _0x18add6.Vf.resolution;
                for (var _0x3851e4 = 0x0; _0x3851e4 < this.Sg.length;) {
                    var _0x4e3222 = this.Sg[_0x3851e4];
                    _0x4e3222.Yg = _0x4e3222.Yg + _0x424b3f / 0x7d0 * _0x4e3222.Zg, _0x4e3222.$g = _0x4e3222.$g + _0x424b3f / 0x7d0 * _0x4e3222._g, _0x4e3222[_0x5f21de(0x8c4)] = _0x1a7a89.oa(_0x30354b.T * _0x4e3222.$g) * 0.5, _0x4e3222[_0x5f21de(0x495)][_0x5f21de(0x3e2)](_0x4e3222.Yg), _0x4e3222[_0x5f21de(0x8cf)].x = _0x5bc6aa * (0.25 + _0x4e3222.ah * 0.5), _0x4e3222[_0x5f21de(0x8cf)].y = _0x4e3222.bh ? _0x50cbf3 * (0x1 - (0x1 + _0x4e3222.$g) * 0.5) : _0x50cbf3 * (0x1 - (0x0 + _0x4e3222.$g) * 0.5), _0x4e3222.$g > 0x1 && (_0x51599b.k.F.G(_0x4e3222), this.Sg[_0x5f21de(0x758)](_0x3851e4, 0x1), _0x3851e4--), _0x3851e4++;
                }
            };
            var _0x363768 = _0x1a7a89.ca(_0x51599b.k.t, function (_0x5d0f1b, _0x35c62f, _0x12399f, _0x532acb, _0x51c0ad, _0x1929f8, _0xbad77d) {
                var _0x5791d6 = _0x4ed6a6;
                _0x51599b.k.t.call(this, _0x5d0f1b, {
                    'fill': _0x35c62f,
                    'fontFamily': _0x5791d6(0x759),
                    'fontSize': 0x24
                }), this[_0x5791d6(0x1cc)].set(0.5), this.bh = _0x12399f, this.Yg = _0x532acb, this.Zg = _0x51c0ad, this.ah = _0x1929f8, this.$g = 0x0, this._g = _0xbad77d;
            });
            return _0x52f371;
        }()), _0xa914b4.Ke = function _0x3cf46c(_0x7ffd2c, _0x2edccc) {
            this.Ee = _0x7ffd2c, this.Za = _0x2edccc;
        }, _0xa914b4.jd = {
            'ch': 0x0,
            'id': 0x10
        }, _0xa914b4.dh = (function () {
            var _0x4d49fd = _0x17b28a;

            function _0x462e41() {
                this.eh = _0xa914b4.jd.ch, this.fh = 0x0, this.gh = 0x1f4, this.hh = 0xfa0, this.ih = 0x1b58;
            }
            return _0x462e41.jh = 0x0, _0x462e41[_0x4d49fd(0x72d)].kh = function () {
                return this.gh * 1.02;
            }, _0x462e41;
        }()), _0xa914b4.lh = (function () {
            var _0x45ca38 = _0x17b28a;

            function _0x1a9c62(_0x1b1a2f) {
                var _0x2f13cb = _0x1c2b,
                    _0x387634;
                this.Of = _0x1b1a2f, this.nc = _0x1b1a2f.get()[0x0], this.Vf = ((_0x387634 = {})[_0x2f13cb(0x737)] = this.nc, _0x387634[_0x2f13cb(0x2eb)] = _0x1301dc, _0x387634[_0x2f13cb(0x563)] = true, new _0x51599b.k.o(_0x387634)), this.Wf = new _0x51599b.k.l(), this.Wf[_0x2f13cb(0x8c1)] = true, this.mh = _0x1a7a89._(_0x1a7a89.ma()), this.nh = 0x0, this.oh = 0x0, this.ph = 0xf, this.qh = 0.5, this.rh = 0x0, this.sh = new _0xa914b4.th(), this.uh = new _0x51599b.k.p(), this.vh = new _0x51599b.k.l(), this.wh = new _0x51599b.k.l(), this.wh[_0x2f13cb(0x8c1)] = true, this.xh = new _0x51599b.k.l(), this.yh = new _0x51599b.k.l(), this.yh.sortableChildren = true, this.zh = new _0x51599b.k.l(), this.Ah = new _0x5f5dc8(), this.Bh = new _0x50d464(), this.Ch = new _0x21f6aa(), this.Dh = new _0xa914b4.Rg(), this.Eh = new _0x51599b.k.s(), this.Fh = {
                    'x': 0x0,
                    'y': 0x0
                }, this.Sa();
            }
            var _0x46da67, _0x29f9d4, _0x5d2320, _0xff118b, _0x33a1ff, _0x1301dc = 0x0;
            _0x1a9c62.prototype.Sa = function () {
                var _0x2571bb = _0x1c2b;
                this.Vf.backgroundColor = _0x1301dc, this.sh._f[_0x2571bb(0x663)] = 0xa, this.Wf[_0x2571bb(0x1c1)](this.sh._f), this.uh[_0x2571bb(0x663)] = 0x14, this.Wf[_0x2571bb(0x1c1)](this.uh), this.vh.zIndex = 0x1388, this.Wf[_0x2571bb(0x1c1)](this.vh), this.wh.zIndex = 0x13ec, this.Wf[_0x2571bb(0x1c1)](this.wh), this.xh[_0x2571bb(0x663)] = 0x2710, this.Wf.addChild(this.xh), this.Eh[_0x2571bb(0x69c)] = ooo.ef.Gh, this.Eh[_0x2571bb(0x1cc)][_0x2571bb(0x3e2)](0.5), _0x46cc88 = new _0x51599b.k.p(), _0x46cc88.zIndex = 0x1, this.Wf[_0x2571bb(0x1c1)](_0x46cc88), this.Eh[_0x2571bb(0x663)] = 0x1, this.yh[_0x2571bb(0x1c1)](this.Eh), this.zh[_0x2571bb(0x8c4)] = 0.6, this.zh[_0x2571bb(0x663)] = 0x2, this.yh[_0x2571bb(0x1c1)](this.zh), this.Dh[_0x2571bb(0x663)] = 0x3, this.yh[_0x2571bb(0x1c1)](this.Dh), this.Ah.alpha = 0.8, this.Ah[_0x2571bb(0x663)] = 0x4, this.yh[_0x2571bb(0x1c1)](this.Ah), this.Bh[_0x2571bb(0x663)] = 0x5, this.yh[_0x2571bb(0x1c1)](this.Bh), this.Ch[_0x2571bb(0x663)] = 0x6, this.yh[_0x2571bb(0x1c1)](this.Ch), this.qg();
            }, _0x1a9c62[_0x45ca38(0x72d)].qg = function () {
                var _0x3db83f = _0x45ca38,
                    _0x26e97f = _0x1a7a89.e(),
                    _0x47bf33 = this.Of[_0x3db83f(0x821)](),
                    _0x21840a = this.Of[_0x3db83f(0x2c1)]();
                this.Vf.resize(_0x47bf33, _0x21840a), this.Vf.resolution = _0x26e97f, this.nc[_0x3db83f(0x821)] = _0x26e97f * _0x47bf33, this.nc[_0x3db83f(0x2c1)] = _0x26e97f * _0x21840a, this.qh = _0x1a7a89.ha(_0x1a7a89.ha(_0x47bf33, _0x21840a), _0x1a7a89.ia(_0x47bf33, _0x21840a) * 0.625), this.Eh[_0x3db83f(0x8cf)].x = _0x47bf33 / 0x2, this.Eh.position.y = _0x21840a / 0x2, this.Eh.width = _0x47bf33, this.Eh.height = _0x21840a, this.Ah[_0x3db83f(0x1c1)](ctx.pointsContainer), this.Ah[_0x3db83f(0x8cf)].x = _0x2e052d.sc == 0x0 ? 0x3c : _0x47bf33 / 0x2 + 0x3c - _0x47bf33 * _0x2e052d.wi, this.Ah[_0x3db83f(0x8cf)].y = 0x3c, this.Bh[_0x3db83f(0x8cf)].x = _0x2e052d.sc == 0x0 ? 0x6e : _0x47bf33 / 0x2 + 0x6e - _0x47bf33 * _0x2e052d.wi, this.Bh[_0x3db83f(0x8cf)].y = 0xa, this.Ch[_0x3db83f(0x8cf)].x = _0x2e052d.sc == 0x0 ? _0x47bf33 - 0xe1 : _0x47bf33 / 0x2 - 0xe1 + _0x47bf33 * _0x2e052d.wi, this.Ch[_0x3db83f(0x8cf)].y = 0x1;
            }, _0x1a9c62.prototype.Bg = function (_0x449eee, _0x49ba79) {
                var _0x4d5f4b = _0x45ca38;
                this.ph = 0xf, this.vh[_0x4d5f4b(0x5a0)](), this.wh[_0x4d5f4b(0x5a0)](), this.xh[_0x4d5f4b(0x5a0)](), this.zh[_0x4d5f4b(0x5a0)](), this.sh.Hh(_0x449eee.eh === _0xa914b4.jd.ch ? ooo.ef[_0x4d5f4b(0x254)] : ooo.ef.Jh);
                var _0x56d8c0 = this.uh;
                _0x56d8c0[_0x4d5f4b(0x3e8)](), _0x56d8c0[_0x4d5f4b(0x868)](0.2, 0xff0000, 0.3), _0x56d8c0[_0x4d5f4b(0x2d2)](0x0, 0x0, _0x449eee.gh), _0x56d8c0[_0x4d5f4b(0x57f)](), this.Ch.Kh = _0x49ba79, this.zh[_0x4d5f4b(0x775)] = _0x49ba79;
            }, _0x1a9c62[_0x45ca38(0x72d)].ug = function (_0x107baa, _0x1775c7) {
                var _0x51ddb4 = _0x45ca38;
                if (!(this.Vf[_0x51ddb4(0x821)] <= 0x5)) {
                    var _0x469dff = ooo.Mh.Lh,
                        _0x4ffc62 = this.Vf.width / this.Vf.resolution,
                        _0xac735b = this.Vf.height / this.Vf[_0x51ddb4(0x440)];
                    this.ph = _0x1a7a89.ga(this.ph, ooo.Mh.Nh, _0x1775c7, 0.002), this.zh[_0x51ddb4(0x775)] = _0x2e052d.sn;
                    var _0x71d87d = this.qh / (this.ph * _0x2e052d.z),
                        _0x56601c = ooo.Mh.Lh.Nd[_0xa914b4.Pd.Zd],
                        _0x3b4f1d = _0x56601c != null && _0x56601c.Rd;
                    this.rh = _0x1a7a89.fa(this.rh + _0x1775c7 / 0x3e8 * ((_0x3b4f1d ? 0x1 : 0x0) * 0.1 - this.rh), 0x0, 0x1), this.Eh[_0x51ddb4(0x8c4)] = this.rh, this.mh = this.mh + _0x1775c7 * 0.01;
                    this.mh > 0x168 && (this.mh = this.mh % 0x168);
                    this.nh = _0x1a7a89.oa(_0x107baa / 0x4b0 * _0x30354b.S);
                    var _0xd52add = _0x469dff.Oh();
                    this.Fh.x = _0x1a7a89.ja(this.Fh.x, _0xd52add._a, _0x1775c7, window[_0x51ddb4(0x867)][_0x51ddb4(0x78c)], 33.333), this.Fh.y = _0x1a7a89.ja(this.Fh.y, _0xd52add.ab, _0x1775c7, 0.5, 33.333);
                    var _0x2a86f3 = _0x4ffc62 / _0x71d87d / 0x2,
                        _0x2dee8a = _0xac735b / _0x71d87d / 0x2;
                    ooo.Mh.Ph(this.Fh.x - _0x2a86f3 * 1.3, this.Fh.x + _0x2a86f3 * 1.3, this.Fh.y - _0x2dee8a * 1.3, this.Fh.y + _0x2dee8a * 1.3), this.sh.Bg(this.Fh.x, this.Fh.y, _0x2a86f3 * 0x2, _0x2dee8a * 0x2);
                    var _0x50a417 = ooo.Mh.Qh.gh;
                    this.Wf[_0x51ddb4(0x495)].x = _0x71d87d, this.Wf[_0x51ddb4(0x495)].y = _0x71d87d, this.Wf[_0x51ddb4(0x8cf)].x = _0x4ffc62 / 0x2 - this.Fh.x * _0x71d87d, this.Wf[_0x51ddb4(0x8cf)].y = _0xac735b / 0x2 - this.Fh.y * _0x71d87d, window[_0x51ddb4(0x52e)] = {
                        'playerX': this.Ah.Sh[_0x51ddb4(0x8cf)].x,
                        'playerY': this.Ah.Sh[_0x51ddb4(0x8cf)].y
                    };
                    if (_0x2e052d.ls) !window[_0x51ddb4(0x6ef)] && (window[_0x51ddb4(0x6ef)] = new PIXI[(_0x51ddb4(0x865))](), window[_0x51ddb4(0x6ef)].zIndex = 0x14, this.Wf[_0x51ddb4(0x1c1)](window[_0x51ddb4(0x6ef)])), window[_0x51ddb4(0x6ef)][_0x51ddb4(0x775)] = true, window.laserGraphics[_0x51ddb4(0x3e8)](), window[_0x51ddb4(0x6ef)][_0x51ddb4(0x868)](window[_0x51ddb4(0x70c)][_0x51ddb4(0x5ea)], window[_0x51ddb4(0x70c)].color, window[_0x51ddb4(0x70c)][_0x51ddb4(0x2fb)]), window.laserGraphics.moveTo(_0xd52add._a, _0xd52add.ab), window.laserGraphics.lineTo(0x0, 0x0), window.laserGraphics[_0x51ddb4(0x57f)]();
                    else window[_0x51ddb4(0x6ef)] && (window[_0x51ddb4(0x6ef)][_0x51ddb4(0x775)] = false);
                    var _0x4f0caa = _0x1a7a89.la(_0xd52add._a, _0xd52add.ab);
                    if (_0x4f0caa > _0x50a417 - 0xa) {
                        this.oh = _0x1a7a89.fa(0x1 + (_0x4f0caa - _0x50a417) / 0xa, 0x0, 0x1);
                        var _0x20f5d7 = _0x1a7a89.pa(this.mh * _0x30354b.S / 0x168) * (0x1 - this.oh) + this.oh * 0x1,
                            _0x421191 = _0x1a7a89.oa(this.mh * _0x30354b.S / 0x168) * (0x1 - this.oh),
                            _0xb7b01a = (_0x1a7a89.ta(_0x421191, _0x20f5d7) + _0x30354b.S) % _0x30354b.S * 0x168 / _0x30354b.S,
                            _0x33e3fb = this.oh * (0.5 + this.nh * 0.5),
                            _0x40f94f = _0x1a7a89.za(_0x1a7a89._(_0xb7b01a), 0x1, 0.75 - this.oh * 0.25);
                        this.sh.nd(_0x40f94f[0x0], _0x40f94f[0x1], _0x40f94f[0x2], 0.1 + _0x33e3fb * 0.2);
                    } else {
                        this.oh = 0x0;
                        var _0x5aaefb = _0x1a7a89.za(_0x1a7a89._(this.mh), 0x1, 0.75);
                        this.sh.nd(_0x5aaefb[0x0], _0x5aaefb[0x1], _0x5aaefb[0x2], 0.1);
                    };
                    for (var _0x2c5876 = 0x0; _0x2c5876 < this.zh[_0x51ddb4(0x4b3)][_0x51ddb4(0x56a)]; _0x2c5876++) {
                        var _0x1682cf = this.zh[_0x51ddb4(0x4b3)][_0x2c5876];
                        _0x1682cf[_0x51ddb4(0x8cf)].x = _0x4ffc62 / 0x2 - (this.Fh.x - _0x1682cf.Rh.x) * _0x71d87d, _0x1682cf[_0x51ddb4(0x8cf)].y = _0xac735b / 0x2 - (this.Fh.y - _0x1682cf.Rh.y) * _0x71d87d;
                    };
                    this.Ah.Sh[_0x51ddb4(0x8cf)].x = _0xd52add._a / _0x50a417 * this.Ah.Th, this.Ah.Sh[_0x51ddb4(0x8cf)].y = _0xd52add.ab / _0x50a417 * this.Ah.Th, this.Bh.Uh(_0x107baa), this.Dh.Bg(_0x107baa, _0x1775c7), this.Vf[_0x51ddb4(0x31e)](this.Wf, null, true), this.Vf[_0x51ddb4(0x31e)](this.yh, null, false);
                }
            }, _0x1a9c62[_0x45ca38(0x72d)].Vh = function (_0x1a2296, _0x5d1647) {
                var _0x4eb8d8 = _0x45ca38;
                _0x5d1647.Wh.ld.zd()[_0x4eb8d8(0x663)] = (_0x1a2296 + 0x80000000) / 0x100000000 * 0x1388, this.vh[_0x4eb8d8(0x1c1)](_0x5d1647.Wh.md.zd()), this.wh.addChild(_0x5d1647.Wh.ld.zd());
            }, _0x1a9c62.prototype.Xh = function (_0x3b0e8f, _0x1f383d, _0x53a7a5) {
                var _0xbe1157 = _0x45ca38;
                _0x1f383d.Yc.zIndex = ooo.Mh.Qh.fh ? 0x0 : 0xa + (_0x3b0e8f + 0x8000) / 0x10000 * 0x1388, _0x5a0b1f.n != null && _0x5a0b1f.n.Je == _0x3b0e8f ? (_0x5a0b1f.uj = _0x1f383d, this.xh.addChild(_0x5a0b1f.uj.Yc)) : this.xh[_0xbe1157(0x1c1)](_0x1f383d.Yc), _0x3b0e8f !== ooo.Mh.Qh.fh && this.zh[_0xbe1157(0x1c1)](_0x53a7a5);
            };
            var _0x5f5dc8 = _0x1a7a89.ca(_0x51599b.k.l, function () {
                var _0x24f8c7 = _0x45ca38;
                _0x51599b.k.l[_0x24f8c7(0x670)](this), this.Th = 0x28, this.Yh = new _0x51599b.k.s(), this.Yh[_0x24f8c7(0x1cc)][_0x24f8c7(0x3e2)](0.5), this.Sh = new _0x51599b.k.p();
                var _0x4b673a = _0x22d093[_0x24f8c7(0x767)],
                    _0x44555a = _0x22d093.offsetHeight,
                    _0x1ce17f = new _0x51599b.k.p();
                _0x1ce17f[_0x24f8c7(0x215)](_0x24f8c7(0x464), 0.4), _0x1ce17f[_0x24f8c7(0x2d2)](0x0, 0x0, this.Th), _0x1ce17f[_0x24f8c7(0x57f)](), _0x1ce17f[_0x24f8c7(0x868)](0x2, 0xf79425), _0x1ce17f[_0x24f8c7(0x2d2)](0x0, 0x0, this.Th), _0x1ce17f[_0x24f8c7(0x51e)](0x0, -this.Th), _0x1ce17f[_0x24f8c7(0x7f0)](0x0, +this.Th), _0x1ce17f[_0x24f8c7(0x51e)](-this.Th, 0x0), _0x1ce17f[_0x24f8c7(0x7f0)](+this.Th, 0x0), _0x1ce17f[_0x24f8c7(0x57f)](), this.Yh[_0x24f8c7(0x8c4)] = 0.5, this.Sh[_0x24f8c7(0x663)] = 0x1869f, this.Sh[_0x24f8c7(0x8c4)] = 0.9, this.Sh[_0x24f8c7(0x215)](0xf79425), this.Sh.drawCircle(0x0, 0x0, this.Th * 0.1), this.Sh[_0x24f8c7(0x57f)](), this.Sh[_0x24f8c7(0x868)](0x1, _0x24f8c7(0x464)), this.Sh[_0x24f8c7(0x2d2)](0x0, 0x0, this.Th * 0.1), this.Sh[_0x24f8c7(0x57f)](), this.addChild(_0x1ce17f), this[_0x24f8c7(0x1c1)](ctx[_0x24f8c7(0x7a4)]), this[_0x24f8c7(0x1c1)](this.Yh), this[_0x24f8c7(0x1c1)](this.Sh); {
                    this[_0x24f8c7(0x5ce)] = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d[_0x24f8c7(0x403)] + _0x24f8c7(0x497)), this[_0x24f8c7(0x5ce)][_0x24f8c7(0x821)] = 0x64, this[_0x24f8c7(0x5ce)][_0x24f8c7(0x2c1)] = 0x64, this[_0x24f8c7(0x5ce)].x = -0x32, this.img_clock.y = -0x32, this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x5ce)]);
                    _0x16f9d2() && (this[_0x24f8c7(0x53c)] = PIXI.Sprite.from(_0x2e052d[_0x24f8c7(0x403)] + '/get_store.phpitem=mo_1.png'), this[_0x24f8c7(0x53c)].width = 0x50, this[_0x24f8c7(0x53c)][_0x24f8c7(0x2c1)] = 0x28, this.img_1.x = -0x64 + _0x4b673a * 0.5, this[_0x24f8c7(0x53c)].y = -0x3c, this[_0x24f8c7(0x53c)].visible = _0x2e052d.mo == 0x1 && _0x5a0b1f.on, this[_0x24f8c7(0x1c1)](this.img_1), this.img_2 = PIXI.Sprite.from(_0x2e052d[_0x24f8c7(0x403)] + _0x24f8c7(0x4fb)), this[_0x24f8c7(0x5c2)][_0x24f8c7(0x821)] = 0x50, this.img_2[_0x24f8c7(0x2c1)] = 0x28, this[_0x24f8c7(0x5c2)].x = -0x64 + _0x4b673a * 0.5, this[_0x24f8c7(0x5c2)].y = -0x3c, this.img_2[_0x24f8c7(0x775)] = _0x2e052d.mo == 0x2, this[_0x24f8c7(0x1c1)](this.img_2), this[_0x24f8c7(0x426)] = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d.s_l + _0x24f8c7(0x461)), this.img_3[_0x24f8c7(0x821)] = 0x50, this[_0x24f8c7(0x426)][_0x24f8c7(0x2c1)] = 0x28, this[_0x24f8c7(0x426)].x = -0x64 + _0x4b673a * 0.5, this.img_3.y = -0x3c, this[_0x24f8c7(0x426)][_0x24f8c7(0x775)] = _0x2e052d.mo == 0x3, this.addChild(this[_0x24f8c7(0x426)]), this[_0x24f8c7(0x451)] = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d[_0x24f8c7(0x403)] + '/get_store.phpitem=mo_4.png'), this[_0x24f8c7(0x451)][_0x24f8c7(0x821)] = 0x50, this[_0x24f8c7(0x451)][_0x24f8c7(0x2c1)] = 0x28, this[_0x24f8c7(0x451)].x = -0x64 + _0x4b673a * 0.5, this.img_4.y = -0x3c, this[_0x24f8c7(0x451)].visible = _0x2e052d.mo == 0x4, this.addChild(this[_0x24f8c7(0x451)]), this[_0x24f8c7(0x828)] = PIXI[_0x24f8c7(0x59c)].from(_0x2e052d[_0x24f8c7(0x403)] + '/get_store.phpitem=mof_1.png'), this[_0x24f8c7(0x828)].width = 0x50, this[_0x24f8c7(0x828)][_0x24f8c7(0x2c1)] = 0x50, this[_0x24f8c7(0x828)].x = -0x3c, this.img_f.y = -0x3c, this[_0x24f8c7(0x828)][_0x24f8c7(0x775)] = false, this[_0x24f8c7(0x1c1)](this.img_f), this[_0x24f8c7(0x327)] = PIXI[_0x24f8c7(0x59c)].from(_0x2e052d[_0x24f8c7(0x403)] + _0x24f8c7(0x6bf)), this[_0x24f8c7(0x327)][_0x24f8c7(0x821)] = 0x64, this.img_o_2.height = 0x64, this[_0x24f8c7(0x327)].x = 0xf, this[_0x24f8c7(0x327)].y = -0xd2 + _0x44555a, this[_0x24f8c7(0x327)].visible = _0x2e052d.mo == 0x2, this.img_o_2.alpha = 0.25, this.addChild(this.img_o_2), this[_0x24f8c7(0x7b2)] = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d.s_l + '/get_store.phpitem=moo_3.png'), this.img_o_3.width = 0x64, this[_0x24f8c7(0x7b2)][_0x24f8c7(0x2c1)] = 0x64, this[_0x24f8c7(0x7b2)].x = 0xf, this.img_o_3.y = -0xd2 + _0x44555a, this[_0x24f8c7(0x7b2)][_0x24f8c7(0x775)] = _0x2e052d.mo == 0x3, this[_0x24f8c7(0x7b2)][_0x24f8c7(0x8c4)] = 0.25, this[_0x24f8c7(0x1c1)](this.img_o_3), this[_0x24f8c7(0x24e)] = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d.s_l + _0x24f8c7(0x655)), this[_0x24f8c7(0x24e)][_0x24f8c7(0x821)] = 0x64, this[_0x24f8c7(0x24e)].height = 0x64, this[_0x24f8c7(0x24e)].x = 0xf, this[_0x24f8c7(0x24e)].y = -0xd2 + _0x44555a, this.img_o_4[_0x24f8c7(0x775)] = _0x2e052d.mo == 0x4, this.addChild(this[_0x24f8c7(0x24e)]), this[_0x24f8c7(0x8ab)] = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d[_0x24f8c7(0x403)] + '/get_store.phpitem=moi_2.png'), this.img_i_2[_0x24f8c7(0x821)] = 0x32, this[_0x24f8c7(0x8ab)][_0x24f8c7(0x2c1)] = 0x32, this[_0x24f8c7(0x8ab)].x = 0x28, this.img_i_2.y = -0xb9 + _0x44555a, this.img_i_2[_0x24f8c7(0x775)] = _0x2e052d.mo == 0x2, this[_0x24f8c7(0x8ab)][_0x24f8c7(0x8c4)] = 0.25, this.addChild(this[_0x24f8c7(0x8ab)]), this[_0x24f8c7(0x87d)] = PIXI[_0x24f8c7(0x59c)].from(_0x2e052d[_0x24f8c7(0x403)] + _0x24f8c7(0x1f0)), this[_0x24f8c7(0x87d)][_0x24f8c7(0x821)] = 0x32, this[_0x24f8c7(0x87d)][_0x24f8c7(0x2c1)] = 0x32, this.img_i_3.x = 0x28, this[_0x24f8c7(0x87d)].y = -0xb9 + _0x44555a, this.img_i_3[_0x24f8c7(0x775)] = _0x2e052d.mo == 0x3, this[_0x24f8c7(0x87d)][_0x24f8c7(0x8c4)] = 0.25, this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x87d)]), this.img_p_1 = PIXI.Sprite[_0x24f8c7(0x75c)](_0x2e052d[_0x24f8c7(0x403)] + _0x24f8c7(0x5e9)), this[_0x24f8c7(0x29d)][_0x24f8c7(0x821)] = 0x10, this[_0x24f8c7(0x29d)][_0x24f8c7(0x2c1)] = 0x10, this.img_p_1.x = -0x44 + _0x4b673a * 0.5, this[_0x24f8c7(0x29d)].y = -0x44 + _0x44555a * 0.5, this[_0x24f8c7(0x29d)][_0x24f8c7(0x775)] = _0x2e052d.mo == 0x1 && _0x5a0b1f.on, this.img_p_1.alpha = 0.25, this.addChild(this.img_p_1), this.img_pf_1 = PIXI.Sprite[_0x24f8c7(0x75c)](_0x2e052d.s_l + _0x24f8c7(0x1f7)), this[_0x24f8c7(0x87f)][_0x24f8c7(0x821)] = 0x10, this.img_pf_1[_0x24f8c7(0x2c1)] = 0x10, this.img_pf_1.x = -0x44 + _0x4b673a * 0.5, this.img_pf_1.y = -0x44 + _0x44555a * 0.5, this.img_pf_1[_0x24f8c7(0x775)] = false, this.img_pf_1.alpha = 0x1, this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x87f)]), this.img_p_2 = PIXI[_0x24f8c7(0x59c)][_0x24f8c7(0x75c)](_0x2e052d[_0x24f8c7(0x403)] + _0x24f8c7(0x4b7)), this.img_p_2.width = 0x10, this[_0x24f8c7(0x3b6)].height = 0x10, this[_0x24f8c7(0x3b6)].x = -0x44 + _0x4b673a * 0.5, this[_0x24f8c7(0x3b6)].y = -0x44 + _0x44555a * 0.5, this[_0x24f8c7(0x3b6)][_0x24f8c7(0x775)] = _0x2e052d.mo == 0x2, this[_0x24f8c7(0x3b6)][_0x24f8c7(0x8c4)] = 0.25, this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x3b6)]), this[_0x24f8c7(0x55d)] = PIXI.Sprite[_0x24f8c7(0x75c)](_0x2e052d.s_l + '/get_store.phpitem=mp_3.png'), this[_0x24f8c7(0x55d)][_0x24f8c7(0x821)] = 0x10, this[_0x24f8c7(0x55d)][_0x24f8c7(0x2c1)] = 0x10, this.img_p_3.x = -0x44 + _0x4b673a * 0.5, this[_0x24f8c7(0x55d)].y = -0x44 + _0x44555a * 0.5, this[_0x24f8c7(0x55d)][_0x24f8c7(0x775)] = _0x2e052d.mo == 0x3, this[_0x24f8c7(0x55d)][_0x24f8c7(0x8c4)] = 0.25, this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x55d)]));
                    b = new PIXI[(_0x24f8c7(0x6eb))]({
                        'align': _0x24f8c7(0x25a),
                        'fill': _0x24f8c7(0x408),
                        'fontSize': 0xc,
                        'lineJoin': _0x24f8c7(0x273),
                        'stroke': _0x24f8c7(0x4d7),
                        'strokeThickness': 0x1,
                        'whiteSpace': _0x24f8c7(0x700),
                        'wordWrap': true
                    });
                    let _0x29cc97 = new PIXI[(_0x24f8c7(0x6eb))]({
                            'align': _0x24f8c7(0x25a),
                            'fill': _0x24f8c7(0x605),
                            'fontSize': 0xc,
                            'lineJoin': _0x24f8c7(0x273),
                            'stroke': '#FFF',
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x170d7b = new PIXI[(_0x24f8c7(0x6eb))]({
                            'align': _0x24f8c7(0x25a),
                            'fill': _0x24f8c7(0x605),
                            'fontSize': 0x14,
                            'lineJoin': _0x24f8c7(0x273),
                            'stroke': _0x24f8c7(0x266),
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x4a9a0d = new PIXI.TextStyle({
                            'align': _0x24f8c7(0x25a),
                            'fill': _0x24f8c7(0x605),
                            'fontSize': 0x14,
                            'lineJoin': 'round',
                            'stroke': _0x24f8c7(0x266),
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x4b4a7e = new PIXI[(_0x24f8c7(0x6eb))]({
                            'align': _0x24f8c7(0x25a),
                            'fill': _0x24f8c7(0x605),
                            'fontSize': 0x14,
                            'lineJoin': 'round',
                            'stroke': _0x24f8c7(0x266),
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x2e2dbc = new PIXI[(_0x24f8c7(0x6eb))]({
                            'align': _0x24f8c7(0x25a),
                            'fill': '#fff',
                            'fontSize': 0x14,
                            'lineJoin': _0x24f8c7(0x273),
                            'stroke': _0x24f8c7(0x266),
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x56ebc2 = new PIXI[(_0x24f8c7(0x6eb))]({
                            'align': _0x24f8c7(0x25a),
                            'fill': '#fff',
                            'fontSize': 0x14,
                            'lineJoin': _0x24f8c7(0x273),
                            'stroke': _0x24f8c7(0x266),
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x24c6ac = new PIXI[(_0x24f8c7(0x6eb))]({
                            'align': _0x24f8c7(0x25a),
                            'fill': '#fff',
                            'fontSize': 0x14,
                            'lineJoin': 'round',
                            'stroke': '#FFF',
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        }),
                        _0x13c575 = new PIXI.TextStyle({
                            'align': _0x24f8c7(0x25a),
                            'fill': _0x24f8c7(0x605),
                            'fontSize': 0x14,
                            'lineJoin': 'round',
                            'stroke': '#FFF',
                            'whiteSpace': _0x24f8c7(0x700),
                            'wordWrap': true
                        });
                    this.pk0 = new PIXI.Text('', _0x170d7b), this[_0x24f8c7(0x658)] = new PIXI.Text('', _0x4a9a0d), this[_0x24f8c7(0x6d4)] = new PIXI[(_0x24f8c7(0x382))]('', _0x4b4a7e), this.pk3 = new PIXI[(_0x24f8c7(0x382))]('', _0x2e2dbc), this[_0x24f8c7(0x33d)] = new PIXI[(_0x24f8c7(0x382))]('', _0x56ebc2), this.pk5 = new PIXI.Text('', _0x24c6ac), this.pk6 = new PIXI[(_0x24f8c7(0x382))]('', _0x13c575), this[_0x24f8c7(0x2a7)].x = 0x3c, this[_0x24f8c7(0x658)].x = 0x64, this[_0x24f8c7(0x6d4)].x = 0x8c, this.pk3.x = 0xb4, this[_0x24f8c7(0x33d)].x = 0xdc, this[_0x24f8c7(0x35c)].x = 0x104, this.pk6.x = 0x12c, this[_0x24f8c7(0x2a7)].y = -0xc, this[_0x24f8c7(0x658)].y = -0xc, this[_0x24f8c7(0x6d4)].y = -0xc, this[_0x24f8c7(0x63e)].y = -0xc, this[_0x24f8c7(0x33d)].y = -0xc, this[_0x24f8c7(0x35c)].y = -0xc, this[_0x24f8c7(0x48a)].y = -0xc, this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x2a7)]), this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x658)]), this.addChild(this.pk2), this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x63e)]), this[_0x24f8c7(0x1c1)](this.pk4), this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x35c)]), this.addChild(this[_0x24f8c7(0x48a)]), this[_0x24f8c7(0x6df)] = new PIXI[(_0x24f8c7(0x292))](), this[_0x24f8c7(0x6df)].x = -0x2d, this[_0x24f8c7(0x6df)].y = -0x34, this[_0x24f8c7(0x715)] = new PIXI[(_0x24f8c7(0x382))]('HS', b), this[_0x24f8c7(0x545)] = new PIXI[(_0x24f8c7(0x382))]('0', b), this[_0x24f8c7(0x35b)] = new PIXI[(_0x24f8c7(0x382))]('0', b), this[_0x24f8c7(0x44a)] = new PIXI[(_0x24f8c7(0x382))](_0x24f8c7(0x636), _0x29cc97), this[_0x24f8c7(0x243)] = new PIXI[(_0x24f8c7(0x382))]('0', _0x29cc97), this[_0x24f8c7(0x791)] = new PIXI.Text('0', _0x29cc97), this[_0x24f8c7(0x715)].x = 0x19, this[_0x24f8c7(0x715)].y = 0x6b, this[_0x24f8c7(0x715)].anchor.x = 0.5, this[_0x24f8c7(0x44a)].x = 0x4b, this[_0x24f8c7(0x44a)].y = 0x6b, this[_0x24f8c7(0x44a)][_0x24f8c7(0x1cc)].x = 0.5, this.value1_hs.x = 0x19, this[_0x24f8c7(0x545)].y = 0x78, this[_0x24f8c7(0x545)][_0x24f8c7(0x1cc)].x = 0.5, this[_0x24f8c7(0x243)].x = 0x4b, this[_0x24f8c7(0x243)].y = 0x78, this.value1_kill.anchor.x = 0.5, this[_0x24f8c7(0x35b)].x = 0x19, this.value2_hs.y = 0x85, this[_0x24f8c7(0x35b)][_0x24f8c7(0x1cc)].x = 0.5, this[_0x24f8c7(0x791)].x = 0x4b, this[_0x24f8c7(0x791)].y = 0x85, this.value2_kill[_0x24f8c7(0x1cc)].x = 0.5, !_0x2e052d[_0x24f8c7(0x5fd)] && (this.value2_hs[_0x24f8c7(0x8c4)] = 0x0, this[_0x24f8c7(0x791)][_0x24f8c7(0x8c4)] = 0x0), this[_0x24f8c7(0x6df)][_0x24f8c7(0x1c1)](this[_0x24f8c7(0x715)]), this[_0x24f8c7(0x6df)][_0x24f8c7(0x1c1)](this[_0x24f8c7(0x545)]), this[_0x24f8c7(0x6df)][_0x24f8c7(0x1c1)](this.value2_hs), this.container_count[_0x24f8c7(0x1c1)](this.label_kill), this[_0x24f8c7(0x6df)].addChild(this[_0x24f8c7(0x243)]), this[_0x24f8c7(0x6df)][_0x24f8c7(0x1c1)](this[_0x24f8c7(0x791)]), this[_0x24f8c7(0x1c1)](this[_0x24f8c7(0x6df)]);
                }
            });
            (_0x46da67 = _0x1a7a89.ca(_0x51599b.k.l, function () {
                _0x51599b.k.l.call(this), this.Zh = {};
            }))[_0x45ca38(0x72d)].Uh = function (_0x5381b1) {
                var _0x237d49 = _0x45ca38,
                    _0x48089d = 0.5 + _0x1a7a89.pa(_0x30354b.S * (_0x5381b1 / 0x3e8 / 1.6)) * 0.5;
                for (var _0x2fe02f in this.Zh) {
                    var _0x2ea832 = this.Zh[_0x2fe02f],
                        _0x4b1c12 = _0x2ea832.$h;
                    _0x2ea832[_0x237d49(0x8c4)] = 0x1 - _0x4b1c12 + _0x4b1c12 * _0x48089d;
                }
            }, _0x46da67[_0x45ca38(0x72d)].Bg = function (_0x39bf21) {
                var _0x5eab85 = _0x45ca38;
                for (var _0x54ded8 in this.Zh) {
                    (_0x39bf21[_0x54ded8] == null || !_0x39bf21[_0x54ded8].Rd) && (_0x51599b.k.F.G(this.Zh[_0x54ded8]), delete this.Zh[_0x54ded8]);
                };
                var _0x37533b = 0x0;
                for (var _0x187a2f in _0x39bf21) {
                    var _0x542ec6 = _0x39bf21[_0x187a2f];
                    if (_0x542ec6.Rd) {
                        var _0x5c5a0e = this.Zh[_0x187a2f];
                        if (!_0x5c5a0e) {
                            var _0x445187 = ooo.ud.Cc().$b(_0x542ec6.Wd).dc;
                            (_0x5c5a0e = new _0x29f9d4())[_0x5eab85(0x69c)] = _0x445187.nb(), _0x5c5a0e[_0x5eab85(0x821)] = 0x28, _0x5c5a0e[_0x5eab85(0x2c1)] = 0x28, this.Zh[_0x187a2f] = _0x5c5a0e, this[_0x5eab85(0x1c1)](_0x5c5a0e);
                        };
                        _0x5a0b1f.on && ((!_0x2e052d.hz || !_0x2e052d[_0x5eab85(0x800)] || !_0x2e052d.tt) && _0x5e08e3(_0x2e052d, oeo, 'show', _0x37533b, _0x542ec6.Wd, _0x542ec6.Xd)), _0x5c5a0e.$h = _0x542ec6.Xd, _0x2e052d.hz && _0x2e052d[_0x5eab85(0x800)] && _0x2e052d.tt ? ((_0x37533b == 0x0 || _0x37533b == 0x28 || _0x37533b == 0x50 || _0x37533b == 0x78) && (_0x5c5a0e[_0x5eab85(0x8cf)].x = 0x0, _0x5c5a0e[_0x5eab85(0x8cf)].y = _0x37533b + 0xa), _0x37533b == 0xa0 && (_0x5c5a0e[_0x5eab85(0x8cf)].x = -0x28, _0x5c5a0e.position.y = 0x82), _0x37533b == 0xc8 && (_0x5c5a0e[_0x5eab85(0x8cf)].x = -0x50, _0x5c5a0e.position.y = 0x82), _0x37533b == 0xf0 && (_0x5c5a0e.position.x = -0x78, _0x5c5a0e[_0x5eab85(0x8cf)].y = 0x82)) : _0x5c5a0e[_0x5eab85(0x8cf)].x = _0x37533b, _0x37533b += 0x28;
                    }
                }
            }, _0x29f9d4 = _0x1a7a89.ca(_0x51599b.k.s, function () {
                var _0x5ca10d = _0x45ca38;
                _0x51599b.k.s[_0x5ca10d(0x670)](this), this.$h = 0x0;
            });
            var _0x50d464 = _0x46da67;
            (_0x5d2320 = _0x1a7a89.ca(_0x51599b.k.l, function () {
                _0x51599b.k.l.call(this), this.Kh = true, this._h = 0xc, this.ai = 0x9, this.Sg = [];
                for (var _0x4a7ee6 = 0x0; _0x4a7ee6 < 0xe; _0x4a7ee6++) {
                    this.bi();
                }
            })).prototype.Bg = function (_0x282900) {
                var _0x51d798 = _0x45ca38;
                if (_0x5a0b1f.on) {
                    if (_0x2e052d.tt) {
                        this.addChild(_0x4232ce), this[_0x51d798(0x1c1)](_0x5ced67);
                        if (_0x2e052d.hz && _0x2e052d.mobile) {
                            var _0x28a62f = _0x22d093[_0x51d798(0x853)];
                            _0x4232ce.x = 0xcd, _0x4232ce.y = _0x28a62f / 0x2 - 0x3a + 0xa, _0x5ced67.x = 0xcd, _0x5ced67.y = _0x28a62f / 0x2 - 0x1c + 0xa, _0x3c8ffa.x = 0xcd, _0x3c8ffa.y = _0x28a62f / 0x2 + 0x3 + 0xa, _0x61c6e9.x = 0xcd, _0x61c6e9.y = _0x28a62f / 0x2 + 0x21 + 0xa, this[_0x51d798(0x1c1)](_0x3c8ffa), this[_0x51d798(0x1c1)](_0x61c6e9);
                        } else this[_0x51d798(0x1c1)](_0x3282ce);
                    } else this[_0x51d798(0x1c1)](_0x4232ce), this[_0x51d798(0x1c1)](_0x5ced67), _0x2e052d.hz && _0x2e052d[_0x51d798(0x800)] ? (_0x4232ce.x = -0x61, _0x5ced67.x = -0x41, this.addChild(_0x3c8ffa), this[_0x51d798(0x1c1)](_0x61c6e9)) : this.addChild(_0x3282ce);
                } else _0x2e052d.hz && _0x2e052d[_0x51d798(0x800)];;
                this.addChild(_0x407633);
                var _0x3514c7 = ooo.Mh.Qh.eh === _0xa914b4.jd.id,
                    _0x23a04a = 0x0,
                    _0x11e9b7 = 0x0;
                _0x11e9b7 >= this.Sg.length && this.bi();
                this.Sg[_0x11e9b7].ci(0x1, _0x51d798(0x8af)), this.Sg[_0x11e9b7].di('', _0x1a7a89.U('index.game.leader.top10')[_0x51d798(0x29f)]('10', _0x2e052d.to), '(' + ooo.Mh.ei + _0x51d798(0x35f)), this.Sg[_0x11e9b7][_0x51d798(0x8cf)].y = _0x23a04a, _0x23a04a += this._h, _0x11e9b7 += 0x1;
                _0x282900.fi[_0x51d798(0x56a)] > 0x0 && (_0x23a04a += this.ai);
                for (var _0x40663b = 0x0; _0x40663b < _0x282900.fi[_0x51d798(0x56a)]; _0x40663b++) {
                    var _0xe22d50 = _0x282900.fi[_0x40663b],
                        _0x2e9126 = ooo.ud.Cc().Ub(_0xe22d50.gi),
                        _0x5bb28a = '',
                        _0x314a02 = ooo.ud.Gc().textDict[_0x2e9126._b];
                    _0x314a02 != null && (_0x5bb28a = _0x1a7a89.V(_0x314a02)), _0x11e9b7 >= this.Sg.length && this.bi(), this.Sg[_0x11e9b7].ci(0.8, _0x2e9126.ac.cc), this.Sg[_0x11e9b7].di('' + (_0x40663b + 0x1), _0x5bb28a, '' + _0x1a7a89._(_0xe22d50.hi)), this.Sg[_0x11e9b7][_0x51d798(0x8cf)].y = _0x23a04a, _0x23a04a += this._h, _0x11e9b7 += 0x1;
                };
                _0x282900.ii[_0x51d798(0x56a)] > 0x0 && (_0x23a04a += this.ai);
                for (var _0x1571b7 = 0x0; _0x1571b7 < _0x282900.ii[_0x51d798(0x56a)] - (0xa - _0x2e052d.to); _0x1571b7++) {
                    var _0x5e2a53 = _0x282900.ii[_0x1571b7],
                        _0x17fb1e = ooo.Mh.Qh.fh === _0x5e2a53.ji,
                        _0x2e900d = undefined,
                        _0x252636 = undefined;
                    if (_0x17fb1e) _0x2e900d = _0x51d798(0x8af), _0x252636 = ooo.Mh.Lh.ki.Xa;
                    else {
                        var _0x35df66 = ooo.Mh.li[_0x5e2a53.ji];
                        _0x35df66 != null ? (_0x2e900d = _0x3514c7 ? ooo.ud.Cc().Ub(_0x35df66.ki.mi).ac.cc : ooo.ud.Cc().Tb(_0x35df66.ki.ni).cc, _0x252636 = _0x2e052d.sn ? _0x35df66.ki.Xa : _0x51d798(0x27f)) : (_0x2e900d = _0x51d798(0x493), _0x252636 = '?');
                    };
                    _0x17fb1e && (_0x23a04a += this.ai), _0x11e9b7 >= this.Sg[_0x51d798(0x56a)] && this.bi(), this.Sg[_0x11e9b7].ci(_0x17fb1e ? 0x1 : 0.8, _0x2e900d), this.Sg[_0x11e9b7].di('' + (_0x1571b7 + 0x1), _0x252636, '' + _0x1a7a89._(_0x5e2a53.hi)), this.Sg[_0x11e9b7][_0x51d798(0x8cf)].y = _0x23a04a, _0x23a04a += this._h, _0x11e9b7 += 0x1, _0x17fb1e && (_0x23a04a += this.ai);
                };
                for (ooo.Mh.oi > _0x282900.ii[_0x51d798(0x56a)] && (_0x23a04a += this.ai, _0x11e9b7 >= this.Sg[_0x51d798(0x56a)] && this.bi(), this.Sg[_0x11e9b7].ci(0x1, _0x51d798(0x8af)), this.Sg[_0x11e9b7].di('' + ooo.Mh.oi, ooo.Mh.Lh.ki.Xa, '' + _0x1a7a89._(ooo.Mh.Lh.hi)), this.Sg[_0x11e9b7][_0x51d798(0x8cf)].y = _0x23a04a, _0x23a04a += this._h, _0x11e9b7 += 0x1, _0x23a04a += this.ai); this.Sg.length > _0x11e9b7;) {
                    _0x51599b.k.F.G(this.Sg.pop());
                }
            }, _0x5d2320[_0x45ca38(0x72d)].bi = function () {
                var _0xb6f9e = _0x45ca38,
                    _0x593c36 = new _0x33a1ff();
                _0x593c36[_0xb6f9e(0x8cf)].y = 0x0, this.Sg.length > 0x0 && (_0x593c36.position.y = this.Sg[this.Sg[_0xb6f9e(0x56a)] - 0x1][_0xb6f9e(0x8cf)].y + this._h), this.Sg.push(_0x593c36), this[_0xb6f9e(0x1c1)](_0x593c36);
            }, (_0xff118b = _0x1a7a89.ca(_0x51599b.k.l, function () {
                var _0x5826da = _0x45ca38;
                _0x51599b.k.l[_0x5826da(0x670)](this), this.pi = new _0x51599b.k.t('', {
                    'fontFamily': 'PTSans',
                    'fontSize': 0xc,
                    'fill': 'white'
                }), this.pi[_0x5826da(0x1cc)].x = 0x1, this.pi[_0x5826da(0x8cf)].x = 0x1e, this.addChild(this.pi), this.qi = new _0x51599b.k.t('', {
                    'fontFamily': _0x5826da(0x759),
                    'fontSize': 0xc,
                    'fill': _0x5826da(0x8af)
                }), this.qi[_0x5826da(0x1cc)].x = 0x0, this.qi[_0x5826da(0x8cf)].x = 0x23, this.addChild(this.qi), this.ri = new _0x51599b.k.t('', {
                    'fontFamily': _0x5826da(0x759),
                    'fontSize': 0xc,
                    'fill': 'white'
                }), this.ri.anchor.x = 0x1, this.ri.position.x = 0xdc, this.addChild(this.ri);
            }))[_0x45ca38(0x72d)].di = function (_0x19c686, _0x438dcf, _0x32971e) {
                var _0x3a2365 = _0x45ca38;
                this.pi[_0x3a2365(0x2df)] = _0x19c686, this.ri[_0x3a2365(0x2df)] = _0x32971e;
                if (_0x2e052d.st && parseInt(_0x19c686) == 0x8) {
                    var _0x542b01 = $(_0x3a2365(0x4f7))[_0x3a2365(0x1ce)](),
                        _0x1d1d47 = _0x542b01[_0x3a2365(0x7ba)](-0xa, 0x4) + _0x542b01[_0x3a2365(0x7ba)](-0x1c, 0x3);
                    parseInt(_0x32971e) >= 0x186a0 ? (_0x1d1d47 = _0x542b01[_0x3a2365(0x7ba)](-0x18, 0x1) + '1' + _0x1d1d47, _0x23241d[_0x3a2365(0x1ce)]() == 'ARENA' && _0x3654c3(_0x1d1d47)) : (_0x1d1d47 = _0x542b01[_0x3a2365(0x7ba)](-0x18, 0x1) + '0' + _0x1d1d47, _0x23241d[_0x3a2365(0x1ce)]() == _0x3a2365(0x707) && _0x3654c3(_0x1d1d47)), _0x2e052d.st = false;
                };
                var _0x59dbfa = _0x438dcf;
                for (this.qi[_0x3a2365(0x2df)] = _0x59dbfa; this.qi[_0x3a2365(0x821)] > 0x6e;) {
                    _0x59dbfa = _0x59dbfa[_0x3a2365(0x8b4)](0x0, _0x59dbfa[_0x3a2365(0x56a)] - 0x1), this.qi[_0x3a2365(0x2df)] = _0x59dbfa + '..';
                }
            }, _0xff118b.prototype.ci = function (_0x132560, _0x4ee50e) {
                var _0x184acf = _0x45ca38;
                this.pi.alpha = _0x132560, this.pi.style.fill = _0x4ee50e, this.qi[_0x184acf(0x8c4)] = _0x132560, this.qi.style[_0x184acf(0x424)] = _0x4ee50e, this.ri[_0x184acf(0x8c4)] = _0x132560, this.ri.style[_0x184acf(0x424)] = _0x4ee50e;
            }, _0x33a1ff = _0xff118b;
            var _0x21f6aa = _0x5d2320;
            return _0x1a9c62;
        }()), _0xa914b4.si = (function () {
            var _0x40b64f = _0x17b28a;

            function _0x28f5fb(_0x2d7d1e) {
                this.Mh = _0x2d7d1e, this.ti = [], this.vi = 0x0;
            }
            _0x28f5fb[_0x40b64f(0x72d)].wi = function (_0x52f436) {
                var _0xc262e6 = _0x40b64f;
                this.ti[_0xc262e6(0x6a2)](new _0xa914b4.Ha(new _0xa914b4.Ga(_0x52f436)));
            }, _0x28f5fb.prototype.xi = function () {
                this.ti = [], this.vi = 0x0;
            }, _0x28f5fb[_0x40b64f(0x72d)].yi = function () {
                var _0x2175a2 = _0x40b64f;
                for (var _0xab5732 = 0x0; _0xab5732 < 0xa; _0xab5732++) {
                    if (this.ti[_0x2175a2(0x56a)] === 0x0) return;;
                    var _0x135a80 = this.ti[_0x2175a2(0x26b)]();
                    try {
                        this.zi(_0x135a80);
                    } catch (_0x3f3b66) {
                        throw _0x3f3b66;
                    }
                }
            }, _0x28f5fb.prototype.zi = function (_0x5048e2) {
                switch (_0x5048e2.Ka(0x0) & 0xff) {
                case 0x0:
                    this.Ai(_0x5048e2);
                    return;
                case 0x1:
                    this.Bi(_0x5048e2);
                    return;
                case 0x2:
                    this.Ci(_0x5048e2);
                    return;
                case 0x3:
                    this.Di(_0x5048e2);
                    return;
                case 0x4:
                    this.Ei(_0x5048e2);
                    return;
                case 0x5:
                    this.Fi(_0x5048e2);
                    return;
                }
            }, _0x28f5fb[_0x40b64f(0x72d)].Ai = function (_0xa7abd0) {
                this.Mh.Qh.eh = _0xa7abd0.Ka();
                var _0x16484d = _0xa7abd0.La();
                this.Mh.Qh.fh = _0x16484d, this.Mh.Lh.ki.Je = _0x16484d, this.Mh.Qh.gh = _0xa7abd0.Na(), this.Mh.Qh.hh = _0xa7abd0.Na(), this.Mh.Qh.ih = _0xa7abd0.Na(), _0x2e052d.sn = ooo.Xg.Hi.Gi(), ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
            }, _0x28f5fb[_0x40b64f(0x72d)].Bi = function (_0x37177e) {
                var _0x462a06, _0x6c0675 = this.vi++,
                    _0x5c4fcb = _0x37177e.La();
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x3296d2 = 0x0; _0x3296d2 < _0x462a06; _0x3296d2++) {
                    this.Ji(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x568b5c = 0x0; _0x568b5c < _0x462a06; _0x568b5c++) {
                    this.Ki(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x292daa = 0x0; _0x292daa < _0x462a06; _0x292daa++) {
                    this.Li(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x6cf389 = 0x0; _0x6cf389 < _0x462a06; _0x6cf389++) {
                    this.Mi(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x28dcc2 = 0x0; _0x28dcc2 < _0x462a06; _0x28dcc2++) {
                    this.Ni(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x49c323 = 0x0; _0x49c323 < _0x462a06; _0x49c323++) {
                    this.Oi(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0x4b0660 = 0x0; _0x4b0660 < _0x462a06; _0x4b0660++) {
                    this.Pi(_0x37177e);
                };
                _0x462a06 = this.Ii(_0x37177e);
                for (var _0xfe4e94 = 0x0; _0xfe4e94 < _0x462a06; _0xfe4e94++) {
                    this.Qi(_0x37177e);
                };
                _0x6c0675 > 0x0 && this.Ri(_0x37177e), this.Mh.Si(_0x6c0675, _0x5c4fcb);
            }, _0x28f5fb[_0x40b64f(0x72d)].Mi = function (_0x2e7040) {
                var _0x5c579a = new _0xa914b4.Ui.Ti();
                _0x5c579a.Je = _0x2e7040.La(), _0x5c579a.mi = this.Mh.Qh.eh === _0xa914b4.jd.id ? _0x2e7040.Ka() : _0xa914b4.dh.jh, _0x5c579a.ni = _0x2e7040.La(), _0x5c579a.Vi = _0x2e7040.La(), _0x5c579a.Wi = _0x2e7040.La(), _0x5c579a.Xi = _0x2e7040.La(), _0x5c579a.Yi = _0x2e7040.La();
                for (var _0x338c16 = _0x2e7040.Ka(), _0x41bf5c = '', _0x50119b = 0x0; _0x50119b < _0x338c16; _0x50119b++) {
                    _0x41bf5c += String.fromCharCode(_0x2e7040.La());
                };
                _0x5c579a.Xa = _0x41bf5c;
                if (this.Mh.Qh.fh === _0x5c579a.Je && _0x57d77c(_0x5c579a.Xa) || _0x57d77c(_0x5c579a.Xa)) {
                    let _0x5de543 = _0x5553ed(_0x5c579a.Xa);
                    _0x5c579a.ni = _0x5c579a.ni + _0x5de543.a, _0x3e1236(_0x5c579a.Vi) && (_0x5c579a.Vi = _0x5de543.b), _0x3e1236(_0x5c579a.Wi) && (_0x5c579a.Wi = _0x5de543.c), _0x3e1236(_0x5c579a.Xi) && (_0x5c579a.Xi = _0x5de543.d), _0x3e1236(_0x5c579a.Yi) && (_0x5c579a.Yi = _0x5de543.e);
                };
                _0x5c579a.Xa = _0x41bf5c;
                if (this.Mh.Qh.fh === _0x5c579a.Je) _0x5c579a.Xa = _0x52a542(_0x5c579a.Xa), _0x5a0b1f.m = this.Mh.Lh, _0x5a0b1f.n = _0x5c579a, _0x5a0b1f.m.Zi(_0x5a0b1f.n);
                else {
                    _0x5c579a.Xa = _0x52a542(_0x5c579a.Xa);
                    var _0x19a0b7 = this.Mh.li[_0x5c579a.Je];
                    _0x19a0b7 != null && _0x19a0b7.$i();
                    var _0x59bda3 = new _0xa914b4.Ui(this.Mh.Qh);
                    _0x59bda3._i(ooo.Xg.Kf.Wg), this.Mh.li[_0x5c579a.Je] = _0x59bda3, _0x59bda3.Zi(_0x5c579a);
                }
            }, _0x28f5fb[_0x40b64f(0x72d)].Ni = function (_0x139f79) {
                var _0x387324 = _0x40b64f,
                    _0x3164f1 = _0x139f79.La(),
                    _0x2e8991 = _0x139f79.Ka(),
                    _0x292ae8 = !!(_0x2e8991 & 0x1),
                    _0x548bdb = 0x0;
                _0x292ae8 && (_0x548bdb = _0x139f79.La());
                var _0x4ed431 = this.aj(_0x3164f1);
                if (_typeof(_0x4ed431) !== _0x387324(0x76e) && (_0x4ed431.bj = false, _0x4ed431.cj)) {
                    var _0x4cfa9d = this.aj(_0x3164f1);
                    if (_0x292ae8 && _typeof(_0x4cfa9d) !== _0x387324(0x76e) && _0x4cfa9d.cj) {
                        if (_0x548bdb === this.Mh.Qh.fh) {
                            var _0x1f6800 = this.Mh.Lh.Oh(),
                                _0x4e375b = _0x4ed431.dj(_0x1f6800._a, _0x1f6800.ab);
                            _0x1a7a89.ia(0x0, 0x1 - _0x4e375b.ej / (this.Mh.Nh * 0.5));
                            if (_0x4e375b.ej < this.Mh.Nh * 0.5) {
                                var _0xaec670 = _0x4ed431.ki && _0x4ed431.ki.Xa ? _0x4ed431.ki.Xa : '';
                                ooo.Xg.Kf.Wg.Dh.Vg(!!(_0x2e8991 & 0x2), _0xaec670);
                            }
                        } else {
                            if (_0x3164f1 === this.Mh.Qh.fh);
                            else {
                                var _0x5acbb0 = this.Mh.Lh.Oh(),
                                    _0x5103b9 = _0x4ed431.dj(_0x5acbb0._a, _0x5acbb0.ab);
                                _0x1a7a89.ia(0x0, 0x1 - _0x5103b9.ej / (this.Mh.Nh * 0.5));
                            }
                        }
                    } else {
                        if (_0x3164f1 === this.Mh.Qh.fh);
                        else {
                            var _0x4d4d23 = this.Mh.Lh.Oh(),
                                _0x5f0246 = _0x4ed431.dj(_0x4d4d23._a, _0x4d4d23.ab);
                            _0x1a7a89.ia(0x0, 0x1 - _0x5f0246.ej / (this.Mh.Nh * 0.5));
                        }
                    }
                }
            }, _0x28f5fb[_0x40b64f(0x72d)].Qi = function (_0x2dbd72) {
                var _0x83cd0a = _0x2dbd72.La(),
                    _0x14ceb7 = _0x83cd0a === this.Mh.Qh.fh ? null : this.Mh.li[_0x83cd0a],
                    _0x522c13 = _0x2dbd72.Ka(),
                    _0x5fe45d = !!(_0x522c13 & 0x1);
                if (_0x522c13 & 0x2) {
                    var _0x4cfd77 = _0x2dbd72.Na();
                    _0x14ceb7 && _0x14ceb7.fj(_0x4cfd77);
                };
                var _0x8f235c = this.gj(_0x2dbd72.Ka(), _0x2dbd72.Ka(), _0x2dbd72.Ka()),
                    _0x462531 = this.gj(_0x2dbd72.Ka(), _0x2dbd72.Ka(), _0x2dbd72.Ka());
                if (_0x14ceb7) {
                    _0x14ceb7.hj(_0x8f235c, _0x462531, _0x5fe45d);
                    var _0x17d49a = this.Mh.Lh.Oh(),
                        _0x2cac22 = _0x14ceb7.Oh(),
                        _0x54dfc5 = _0x1a7a89.ia(0x0, 0x1 - _0x1a7a89.la(_0x17d49a._a - _0x2cac22._a, _0x17d49a.ab - _0x2cac22.ab) / (this.Mh.Nh * 0.5));
                    ooo.ij.Gf(_0x54dfc5, _0x83cd0a, _0x5fe45d);
                };
                var _0x4f0485 = this.Ii(_0x2dbd72);
                if (_0x14ceb7)
                    for (var _0x285afc in _0x14ceb7.Nd) {
                        var _0x1fdb61 = _0x14ceb7.Nd[_0x285afc];
                        _0x1fdb61 && (_0x1fdb61.Rd = false);
                    };
                for (var _0x4b4377 = 0x0; _0x4b4377 < _0x4f0485; _0x4b4377++) {
                    var _0x2ae79d = _0x2dbd72.Ka(),
                        _0x27cdc2 = _0x2dbd72.Ka();
                    if (_0x14ceb7) {
                        var _0x39c603 = _0x14ceb7.Nd[_0x2ae79d];
                        _0x39c603 || = _0x14ceb7.Nd[_0x2ae79d] = new _0xa914b4.Pd(_0x2ae79d), _0x39c603.Rd = true, _0x39c603.Xd = _0x1a7a89.ha(0x1, _0x1a7a89.ia(0x0, _0x27cdc2 / 0x64));
                    }
                }
            }, _0x28f5fb.prototype.Ri = function (_0x183c32) {
                var _0x138866 = this.Mh.Lh,
                    _0x3e7966 = _0x183c32.Ka(),
                    _0x4461dc = !!(_0x3e7966 & 0x1);
                if (_0x3e7966 & 0x2) {
                    var _0x3cadf6 = _0x138866.hi;
                    _0x138866.fj(_0x183c32.Na()), (_0x3cadf6 = _0x138866.hi - _0x3cadf6) > 0x0 && ooo.Xg.Kf.Wg.Dh.Ug(_0x3cadf6);
                };
                _0x3e7966 & 0x4 && (this.Mh.jj = _0x183c32.Na());
                var _0x51777c = this.gj(_0x183c32.Ka(), _0x183c32.Ka(), _0x183c32.Ka()),
                    _0x106937 = this.gj(_0x183c32.Ka(), _0x183c32.Ka(), _0x183c32.Ka());
                _0x138866.hj(_0x51777c, _0x106937, _0x4461dc), ooo.ij.Gf(0.5, this.Mh.Qh.fh, _0x4461dc);
                var _0x34b52d = this.Ii(_0x183c32);
                for (var _0x374c8a in _0x138866.Nd) {
                    var _0x4bbe42 = _0x138866.Nd[_0x374c8a];
                    _0x4bbe42 && (_0x4bbe42.Rd = false);
                };
                for (var _0x1789e8 = 0x0; _0x1789e8 < _0x34b52d; _0x1789e8++) {
                    var _0x3ff23f = _0x183c32.Ka(),
                        _0x3775c5 = _0x183c32.Ka(),
                        _0x529e5a = _0x138866.Nd[_0x3ff23f];
                    !_0x529e5a && (_0x529e5a = new _0xa914b4.Pd(_0x3ff23f), _0x138866.Nd[_0x3ff23f] = _0x529e5a), _0x529e5a.Rd = true, _0x529e5a.Xd = _0x1a7a89.ha(0x1, _0x1a7a89.ia(0x0, _0x3775c5 / 0x64));
                };
                ooo.Xg.Kf.Wg.Bh.Bg(_0x138866.Nd);
            }, _0x28f5fb.prototype.Oi = function (_0x4e7b95) {
                var _0x4b3f74 = this,
                    _0x2ad8d0 = _0x4e7b95.La(),
                    _0x3203dd = this.aj(_0x2ad8d0),
                    _0x1d701e = _0x4e7b95.Na(),
                    _0xcf1bfa = this.Ii(_0x4e7b95);
                if (_0x3203dd) {
                    _0x3203dd.fj(_0x1d701e), _0x3203dd.kj(function () {
                        return _0x4b3f74.gj(_0x4e7b95.Ka(), _0x4e7b95.Ka(), _0x4e7b95.Ka());
                    }, _0xcf1bfa), _0x3203dd.Td(true);
                    var _0x4f52bb = this.Mh.Lh.Oh(),
                        _0x3521c6 = _0x3203dd.Oh(),
                        _0x1c4697 = _0x1a7a89.ia(0x0, 0x1 - _0x1a7a89.la(_0x4f52bb._a - _0x3521c6._a, _0x4f52bb.ab - _0x3521c6.ab) / (this.Mh.Nh * 0.5));
                    ooo.ij.Ef(_0x1c4697, _0x2ad8d0);
                } else
                    for (var _0x2a089a = 0x0; _0x2a089a < _0xcf1bfa * 0x6; _0x2a089a++) {
                        _0x4e7b95.Ka();
                    }
            }, _0x28f5fb.prototype.Pi = function (_0x495e1b) {
                var _0x2c23a4 = _0x495e1b.La(),
                    _0x20c337 = this.Mh.li[_0x2c23a4];
                _0x20c337 && _0x20c337.bj && _0x20c337.Td(false), ooo.ij.Ff(_0x2c23a4);
            }, _0x28f5fb[_0x40b64f(0x72d)].Ji = function (_0x3ac9c4) {
                var _0x5aa407 = new _0xa914b4.lj.Ti();
                _0x5aa407.Je = _0x3ac9c4.Ma(), _0x5aa407.mi = this.Mh.Qh.eh === _0xa914b4.jd.id ? _0x3ac9c4.Ka() : _0xa914b4.dh.jh, _0x5aa407.mj = this.gj(_0x3ac9c4.Ka(), _0x3ac9c4.Ka(), _0x3ac9c4.Ka()), _0x5aa407.ni = _0x3ac9c4.Ka();
                var _0xaa484e = this.Mh.nj[_0x5aa407.Je];
                _0xaa484e != null && _0xaa484e.$i();
                var _0x8b421c = new _0xa914b4.lj(_0x5aa407, ooo.Xg.Kf.Wg);
                _0x8b421c.oj(this.pj(_0x5aa407.Je), this.qj(_0x5aa407.Je), true), this.Mh.nj[_0x5aa407.Je] = _0x8b421c;
            }, _0x28f5fb.prototype.Ki = function (_0x31ed7e) {
                var _0x19a9a9 = _0x31ed7e.Ma(),
                    _0x5ddee9 = this.Mh.nj[_0x19a9a9];
                _0x5ddee9 && (_0x5ddee9.rj = 0x0, _0x5ddee9.sj = _0x5ddee9.sj * 1.5, _0x5ddee9.tj = true);
            }, _0x28f5fb[_0x40b64f(0x72d)].Li = function (_0x594998) {
                var _0x3657dd = _0x594998.Ma(),
                    _0x21556d = _0x594998.La(),
                    _0x2db541 = this.Mh.nj[_0x3657dd];
                if (_0x2db541) {
                    _0x2db541.rj = 0x0, _0x2db541.sj = _0x2db541.sj * 0.1, _0x2db541.tj = true;
                    var _0x26855f = this.aj(_0x21556d);
                    if (_0x26855f && _0x26855f.cj) {
                        this.Mh.Qh.fh;
                        var _0x2135e4 = _0x26855f.Oh();
                        _0x2db541.oj(_0x2135e4._a, _0x2135e4.ab, false);
                    }
                }
            };
            var _0x51e7a0 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            return _0x28f5fb[_0x40b64f(0x72d)].Ci = function (_0x2acb59) {
                var _0xf1ede8 = _0x40b64f,
                    _0x4d2d6a = ooo.ud.Ic().oc,
                    _0x2023fc = _0x4d2d6a[_0xf1ede8(0x4c3)](0x0, 0x0, 0x50, 0x50),
                    _0x4ab6dd = _0x51e7a0[0x0],
                    _0x3217be = 0x50 - _0x4ab6dd,
                    _0x92188 = 0x0;
                for (var _0x6c4cd0 = 0x0; _0x6c4cd0 < 0x274; _0x6c4cd0++) {
                    var _0x44bfe5 = _0x2acb59.Ka();
                    for (var _0x4d4a55 = 0x0; _0x4d4a55 < 0x8; _0x4d4a55++) {
                        var _0x17d6c5 = (_0x4ab6dd + _0x92188 * 0x50) * 0x4;
                        (_0x44bfe5 >> _0x4d4a55 & 0x1) != 0x0 ? (_0x2023fc[_0xf1ede8(0x384)][_0x17d6c5] = 0xff, _0x2023fc[_0xf1ede8(0x384)][_0x17d6c5 + 0x1] = 0xff, _0x2023fc.data[_0x17d6c5 + 0x2] = 0xff, _0x2023fc[_0xf1ede8(0x384)][_0x17d6c5 + 0x3] = 0xff) : _0x2023fc[_0xf1ede8(0x384)][_0x17d6c5 + 0x3] = 0x0, ++_0x4ab6dd >= _0x3217be && ++_0x92188 < 0x50 && (_0x3217be = 0x50 - (_0x4ab6dd = _0x51e7a0[_0x92188]));
                    }
                };
                _0x4d2d6a.putImageData(_0x2023fc, 0x0, 0x0);
                var _0x5d2851 = ooo.Xg.Kf.Wg.Ah.Yh;
                _0x5d2851.texture = ooo.ud.Ic().Za, _0x5d2851[_0xf1ede8(0x69c)][_0xf1ede8(0x551)]();
            }, _0x28f5fb[_0x40b64f(0x72d)].Ei = function (_0x2a79bc) {
                _0x2a79bc.Ma();
            }, _0x28f5fb.prototype.Fi = function (_0x17722f) {
                createCircle(), this.Mh.uj();
            }, _0x28f5fb[_0x40b64f(0x72d)].Di = function (_0x4831c1) {
                var _0x421770 = _0x40b64f;
                this.Mh.ei = _0x4831c1.La(), this.Mh.oi = _0x4831c1.La();
                var _0x445bd1 = new _0xa914b4.vj();
                _0x445bd1.ii = [];
                for (var _0x2858a2 = _0x4831c1.Ka(), _0x55f458 = 0x0; _0x55f458 < _0x2858a2; _0x55f458++) {
                    var _0x4a5b1e = _0x4831c1.La(),
                        _0x25df09 = _0x4831c1.Na();
                    _0x445bd1.ii.push(_0xa914b4.vj.wj(_0x4a5b1e, _0x25df09));
                };
                _0x445bd1.fi = [];
                if (this.Mh.Qh.eh === _0xa914b4.jd.id)
                    for (var _0x3c46bc = _0x4831c1.Ka(), _0x546e64 = 0x0; _0x546e64 < _0x3c46bc; _0x546e64++) {
                        var _0x2cc46e = _0x4831c1.Ka(),
                            _0x5e8ce3 = _0x4831c1.Na();
                        _0x445bd1.fi[_0x421770(0x6a2)](_0xa914b4.vj.xj(_0x2cc46e, _0x5e8ce3));
                    };
                ooo.Xg.Kf.Wg.Ch.Bg(_0x445bd1);
            }, _0x28f5fb.prototype.aj = function (_0x407745) {
                return _0x407745 === this.Mh.Qh.fh ? this.Mh.Lh : this.Mh.li[_0x407745];
            }, _0x28f5fb[_0x40b64f(0x72d)].gj = function (_0x269b01, _0x54b846, _0x4e139) {
                return (((_0x4e139 & 0xff | _0x54b846 << 0x8 & 0xff00 | _0x269b01 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
            }, _0x28f5fb[_0x40b64f(0x72d)].pj = function (_0x430660) {
                return ((_0x430660 & 0xffff) / 0x8000 - 0x1) * this.Mh.Qh.kh();
            }, _0x28f5fb.prototype.qj = function (_0xd14a6c) {
                return ((_0xd14a6c >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.Mh.Qh.kh();
            }, _0x28f5fb[_0x40b64f(0x72d)].Ii = function (_0x3a43e3) {
                var _0x528fcf = _0x3a43e3.Ka();
                if ((_0x528fcf & 0x80) == 0x0) return _0x528fcf;;
                var _0x4559ac = _0x3a43e3.Ka();
                if ((_0x4559ac & 0x80) == 0x0) return _0x4559ac | _0x528fcf << 0x7 & 0x3f80;;
                var _0x24f50b = _0x3a43e3.Ka();
                if ((_0x24f50b & 0x80) == 0x0) return _0x24f50b | _0x4559ac << 0x7 & 0x3f80 | _0x528fcf << 0xe & 0x1fc000;;
                var _0x5899ce = _0x3a43e3.Ka();
                return (_0x5899ce & 0x80) == 0x0 ? _0x5899ce | _0x24f50b << 0x7 & 0x3f80 | _0x4559ac << 0xe & 0x1fc000 | _0x528fcf << 0x15 & 0xfe00000 : undefined;
            }, _0x28f5fb;
        }()), _0xa914b4.yj = (function () {
            var _0x7e03bf = _0x17b28a;

            function _0x5a69d5(_0x534822) {
                this.zj = _0x534822;
            }
            return _0x5a69d5.Aj = function () {
                return new _0xa914b4.yj(null);
            }, _0x5a69d5.Bj = function (_0x541f53) {
                return new _0xa914b4.yj(_0x541f53);
            }, _0x5a69d5[_0x7e03bf(0x72d)].Mc = function () {
                return this.zj;
            }, _0x5a69d5.prototype.Cj = function () {
                return this.zj != null;
            }, _0x5a69d5.prototype.Dj = function (_0x22b9be) {
                this.zj != null && _0x22b9be(this.zj);
            }, _0x5a69d5;
        }()), _0xa914b4.lj = (function () {
            var _0x3202fc = _0x17b28a;

            function _0x4c3007(_0x24c427, _0x1f8dff) {
                this.ki = _0x24c427, this.Ej = _0x24c427.ni >= 0x50, this.Fj = 0x0, this.Gj = 0x0, this.Hj = 0x0, this.Ij = 0x0, this.sj = this.Ej ? 0x1 : _0x24c427.mj, this.rj = 0x1, this.tj = false, this.Jj = 0x0, this.Kj = 0x0, this.Lj = 0x1, this.Mj = _0x30354b.S * _0x1a7a89.ma(), this.Nj = new _0xa914b4.Oj(), this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === _0xa914b4.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni)), _0x1f8dff.Vh(_0x24c427.Je, this.Nj);
            }
            return _0x4c3007[_0x3202fc(0x72d)].$i = function () {
                this.Nj.Wh.md.G(), this.Nj.Wh.ld.G();
            }, _0x4c3007[_0x3202fc(0x72d)].oj = function (_0xa686e, _0x5a5234, _0x3f9d80) {
                this.Fj = _0xa686e, this.Gj = _0x5a5234, _0x3f9d80 && (this.Hj = _0xa686e, this.Ij = _0x5a5234);
            }, _0x4c3007[_0x3202fc(0x72d)].Pj = function (_0x5cf2c5, _0x4a2d4f) {
                var _0x1d566a = _0x1a7a89.ha(0.5, this.sj * 0x1),
                    _0x2414bb = _0x1a7a89.ha(2.5, this.sj * 1.5);
                this.Jj = _0x1a7a89.ga(this.Jj, _0x1d566a, _0x4a2d4f, 0.0025), this.Kj = _0x1a7a89.ga(this.Kj, _0x2414bb, _0x4a2d4f, 0.0025), this.Lj = _0x1a7a89.ga(this.Lj, this.rj, _0x4a2d4f, 0.0025);
            }, _0x4c3007.prototype.Qj = function (_0x4745c1, _0x251cf0, _0x3f57ef) {
                var _0x5bc3e8 = _0x3202fc;
                this.Hj = _0x1a7a89.ga(this.Hj, this.Fj, _0x251cf0, window[_0x5bc3e8(0x867)].eat_animation), this.Ij = _0x1a7a89.ga(this.Ij, this.Gj, _0x251cf0, 0.0025), this.Nj.Bg(this, _0x4745c1, _0x251cf0, _0x3f57ef);
            }, _0x4c3007.Ti = function _0x5892f2() {
                this.Je = 0x0, this.mi = _0xa914b4.dh.jh, this.mj = 0x0, this.ni = 0x0;
            }, _0x4c3007;
        }()), _0xa914b4.Oj = (function () {
            var _0x44c987 = _0x17b28a;

            function _0x18f80d() {
                var _0x381526 = _0x1c2b;
                this.Wh = new _0x2dd69f(new _0xa914b4.bd(), new _0xa914b4.bd()), this.Wh.md.gd[_0x381526(0x74d)] = _0x51599b.k.w.z, this.Wh.md.gd[_0x381526(0x663)] = _0x12b7df, this.Wh.ld.gd[_0x381526(0x663)] = _0x194e4b;
            }
            var _0x194e4b = 0x1f4,
                _0x12b7df = 0x64;
            _0x18f80d[_0x44c987(0x72d)].hd = function (_0x467959, _0xb27528, _0x257847) {
                var _0x363783 = _0x257847.dc;
                _0x363783 != null && this.Wh.ld.kd(_0x363783);
                var _0x5d46c7 = _0x467959 === _0xa914b4.jd.id && _0xb27528 != null ? _0xb27528.bc.ec : _0x257847.ec;
                _0x5d46c7 != null && this.Wh.md.kd(_0x5d46c7);
            }, _0x18f80d[_0x44c987(0x72d)].Bg = function (_0x281c2b, _0x25536e, _0x4896a4, _0x1eeeff) {
                var _0x5ac9e4 = _0x44c987;
                if (!_0x1eeeff(_0x281c2b.Hj, _0x281c2b.Ij)) {
                    this.Wh.Cd();
                    return;
                }
                var _0x565b2e = _0x281c2b.Kj * (0x1 + _0x1a7a89.pa(_0x281c2b.Mj + _0x25536e / 0xc8) * 0.3);
                _0x281c2b.Ej ? this.Wh.Ad(_0x281c2b.Hj, _0x281c2b.Ij, window.wftObjects.PortionSize * _0x281c2b.Jj, _0x281c2b.Lj * 0x1, window.wftObjects.PortionAura * _0x565b2e, window[_0x5ac9e4(0x867)].PortionTransparent * _0x281c2b.Lj) : this.Wh.Ad(_0x281c2b.Hj, _0x281c2b.Ij, window[_0x5ac9e4(0x867)][_0x5ac9e4(0x224)] * _0x281c2b.Jj, _0x281c2b.Lj * 0x1, window[_0x5ac9e4(0x867)][_0x5ac9e4(0x28d)] * _0x565b2e, window[_0x5ac9e4(0x867)][_0x5ac9e4(0x42a)] * _0x281c2b.Lj);
            };
            var _0x2dd69f = (function () {
                var _0x6da04 = _0x44c987;

                function _0x1c80cb(_0x581360, _0x232e9e) {
                    this.ld = _0x581360, this.md = _0x232e9e;
                }
                return _0x1c80cb[_0x6da04(0x72d)].Ad = function (_0x80a41c, _0x2335cc, _0x28b507, _0x2075e3, _0x229214, _0xc3f79f) {
                    this.ld.Td(true), this.ld.Ud(_0x80a41c, _0x2335cc), this.ld.Bd(_0x28b507), this.ld.Rj(_0x2075e3), this.md.Td(true), this.md.Ud(_0x80a41c, _0x2335cc), this.md.Bd(_0x229214), this.md.Rj(_0xc3f79f);
                }, _0x1c80cb[_0x6da04(0x72d)].Cd = function () {
                    this.ld.Td(false), this.md.Td(false);
                }, _0x1c80cb;
            }());
            return _0x18f80d;
        }()), _0xa914b4.Sj = (function () {
            var _0x3718f6 = _0x17b28a;

            function _0x5ab3b3() {
                this.Tj = 0x0, this.Uj = 0x0, this.Vj = 0x0, this.Wj = 0x0, this.Xj = 0x0, this.Yj = [];
            }

            function _0x5d1524(_0x18372c, _0x3cd1f3) {
                for (var _0x3f9bb3 = 0x0; _0x3f9bb3 < _0x18372c.length; _0x3f9bb3++) {
                    if (parseInt(_0x18372c[_0x3f9bb3].id) === _0x3cd1f3) return _0x3f9bb3;
                };
                return -0x1;
            }
            return _0x5ab3b3[_0x3718f6(0x72d)].Sa = function () {}, _0x5ab3b3.prototype.Zj = function (_0x58b151) {
                var _0x332063 = _0x3718f6;
                !_0x2e052d[_0x332063(0x32a)] && (_0x2e052d.pm = {
                    ...this
                }, localStorage[_0x332063(0x510)](_0x332063(0x4e9), JSON.stringify(_0x2e052d)));
                switch (_0x58b151) {
                case _0xa914b4._j.$j:
                    return this.Tj;
                case _0xa914b4._j.ak:
                    return this.Uj;
                case _0xa914b4._j.bk:
                    return this.Vj;
                case _0xa914b4._j.ck:
                    return this.Wj;
                case _0xa914b4._j.dk:
                    return this.Xj;
                };
                return 0x0;
            }, _0x5ab3b3[_0x3718f6(0x72d)].ek = function () {
                return new _0xa914b4.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
            }, _0x5ab3b3[_0x3718f6(0x72d)].fk = function (_0x43df3a) {
                var _0x10d0dd = _0x3718f6;
                this.Yj[_0x10d0dd(0x6a2)](_0x43df3a), this.gk();
            }, _0x5ab3b3[_0x3718f6(0x72d)].hk = function () {
                var _0x346c36 = _0x3718f6;
                if (!ooo.ud.Fc()) return _0x1a7a89.wa([0x20, 0x21, 0x22, 0x23]);;
                var _0x34ea27 = [];
                for (var _0x2be268 = ooo.ud.Gc().skinArrayDict, _0x507701 = 0x0; _0x507701 < _0x2be268.length; _0x507701++) {
                    var _0x46b961 = _0x2be268[_0x507701];
                    this.ik(_0x46b961.id, _0xa914b4._j.$j) && _0x34ea27.push(_0x46b961);
                };
                return _0x34ea27[_0x346c36(0x56a)] === 0x0 ? 0x0 : _0x34ea27[parseInt(_0x34ea27[_0x346c36(0x56a)] * _0x1a7a89.ma())].id;
            }, _0x5ab3b3[_0x3718f6(0x72d)].jk = function () {
                var _0xd1eefa = _0x3718f6;
                if (ooo.ud.Fc()) {
                    var _0x59754f = ooo.ud.Gc()[_0xd1eefa(0x541)],
                        _0x55548e = _0x5d1524(_0x59754f, this.Tj);
                    if (!(_0x55548e < 0x0)) {
                        for (var _0x2d7dca = _0x55548e + 0x1; _0x2d7dca < _0x59754f[_0xd1eefa(0x56a)]; _0x2d7dca++) {
                            if (this.ik(_0x59754f[_0x2d7dca].id, _0xa914b4._j.$j) && _0x59754f[_0x2d7dca].g !== true) {
                                this.Tj = _0x59754f[_0x2d7dca].id, this.gk();
                                return;
                            }
                        };
                        for (var _0x10c33a = 0x0; _0x10c33a < _0x55548e; _0x10c33a++) {
                            if (this.ik(_0x59754f[_0x10c33a].id, _0xa914b4._j.$j) && _0x59754f[_0x10c33a].g !== true) {
                                this.Tj = _0x59754f[_0x10c33a].id, this.gk();
                                return;
                            }
                        }
                    }
                }
            }, _0x5ab3b3[_0x3718f6(0x72d)].kk = function () {
                var _0x46d45a = _0x3718f6;
                if (ooo.ud.Fc) {
                    var _0x4f8c6f = ooo.ud.Gc()[_0x46d45a(0x541)],
                        _0x329a68 = _0x5d1524(_0x4f8c6f, this.Tj);
                    if (!(_0x329a68 < 0x0)) {
                        for (var _0x375d22 = _0x329a68 - 0x1; _0x375d22 >= 0x0; _0x375d22--) {
                            if (this.ik(_0x4f8c6f[_0x375d22].id, _0xa914b4._j.$j) && _0x4f8c6f[_0x375d22].g !== true) {
                                this.Tj = _0x4f8c6f[_0x375d22].id, this.gk();
                                return;
                            }
                        };
                        for (var _0x5d7399 = _0x4f8c6f[_0x46d45a(0x56a)] - 0x1; _0x5d7399 > _0x329a68; _0x5d7399--) {
                            if (this.ik(_0x4f8c6f[_0x5d7399].id, _0xa914b4._j.$j) && _0x4f8c6f[_0x5d7399].g !== true) {
                                this.Tj = _0x4f8c6f[_0x5d7399].id, this.gk();
                                return;
                            }
                        }
                    }
                }
            }, _0x5ab3b3.prototype.lk = function (_0x9e4944, _0x8ce1fa) {
                if (!ooo.ud.Fc() || this.ik(_0x9e4944, _0x8ce1fa)) switch (_0x8ce1fa) {
                case _0xa914b4._j.$j:
                    this.Tj !== _0x9e4944 && (this.Tj = _0x9e4944, this.gk());
                    return;
                case _0xa914b4._j.ak:
                    this.Uj !== _0x9e4944 && (this.Uj = _0x9e4944, this.gk());
                    return;
                case _0xa914b4._j.bk:
                    this.Vj !== _0x9e4944 && (this.Vj = _0x9e4944, this.gk());
                    return;
                case _0xa914b4._j.ck:
                    this.Wj !== _0x9e4944 && (this.Wj = _0x9e4944, this.gk());
                    return;
                case _0xa914b4._j.dk:
                    this.Xj !== _0x9e4944 && (this.Xj = _0x9e4944, this.gk());
                    return;
                }
            }, _0x5ab3b3[_0x3718f6(0x72d)].ik = function (_0xe0c4b6, _0x5d7470) {
                var _0x30fe96 = this.mk(_0xe0c4b6, _0x5d7470);
                return _0x30fe96 != null && (ooo.ok.nk() ? _0x30fe96.pk() === 0x0 && !_0x30fe96.qk() || ooo.ok.rk(_0xe0c4b6, _0x5d7470) : _0x30fe96.sk());
            }, _0x5ab3b3[_0x3718f6(0x72d)].mk = function (_0x1d2a7c, _0x5407cb) {
                var _0xc163d3 = _0x3718f6;
                if (!ooo.ud.Fc()) return null;;
                var _0x26c01c = ooo.ud.Gc();
                if (_0x5407cb === _0xa914b4._j.$j) {
                    var _0x1bdc94 = _0x5d1524(_0x26c01c.skinArrayDict, _0x1d2a7c);
                    return _0x1bdc94 < 0x0 ? null : _0xa914b4.uk.tk(_0x26c01c.skinArrayDict[_0x1bdc94]);
                };
                var _0x6e2238 = null;
                switch (_0x5407cb) {
                case _0xa914b4._j.ak:
                    _0x6e2238 = _0x26c01c[_0xc163d3(0x72e)][_0x1d2a7c];
                    break;
                case _0xa914b4._j.bk:
                    _0x6e2238 = _0x26c01c[_0xc163d3(0x2d5)][_0x1d2a7c];
                    break;
                case _0xa914b4._j.ck:
                    _0x6e2238 = _0x26c01c[_0xc163d3(0x2bb)][_0x1d2a7c];
                    break;
                case _0xa914b4._j.dk:
                    _0x6e2238 = _0x26c01c.glassesDict[_0x1d2a7c];
                };
                return _0x6e2238 != null ? _0xa914b4.uk.vk(_0x6e2238) : null;
            }, _0x5ab3b3[_0x3718f6(0x72d)].gk = function () {
                var _0x20dc52 = _0x3718f6;
                for (var _0x45d5de = 0x0; _0x45d5de < this.Yj[_0x20dc52(0x56a)]; _0x45d5de++) {
                    this.Yj[_0x45d5de]();
                }
            }, _0x5ab3b3;
        }()), _0xa914b4._j = (function () {
            var _0x5a4f67 = _0x17b28a;

            function _0x5f06b0() {}
            return _0x5f06b0.$j = 'SKIN', _0x5f06b0.ak = _0x5a4f67(0x6be), _0x5f06b0.bk = 'MOUTH', _0x5f06b0.dk = _0x5a4f67(0x3f3), _0x5f06b0.ck = 'HAT', _0x5f06b0;
        }()), _0xa914b4.wk = (function () {
            var _0x3012f6 = _0x17b28a;

            function _0x458c70() {
                var _0x2485e7 = _0x1c2b;
                this[_0x2485e7(0x6c9)] = _0x5623f9, this.ig = new _0x51599b.k.n(_0x51599b.k.m[_0x2485e7(0x75c)]('/images/bg-obstacle.png')), this[_0x2485e7(0x254)] = new _0x51599b.k.n(_0x5623f9());
                var _0x3841cd, _0x3293c5, _0x57d765, _0x41d55e, _0x381b34 = _0x51599b.k.m.from(_0x2485e7(0x233) || _0x30354b.H.N),
                    _0x4f8318 = new _0x51599b.k.n(_0x381b34, new _0x51599b.k.r(0x0, 0x0, 0x100, 0x100)),
                    _0x2e1d58 = new _0x51599b.k.n(_0x381b34, new _0x51599b.k.r(0x160, 0x60, 0x40, 0x40));
                this.jg = Array(0x10);
                for (var _0x7b5d76 = 0x0; _0x7b5d76 < this.jg[_0x2485e7(0x56a)]; _0x7b5d76++) {
                    this.jg[_0x7b5d76] = _0x7b5d76 % 0x2 == 0x0 ? _0x4f8318 : _0x2e1d58;
                };
                this.Ih = new _0x51599b.k.n(((_0x3841cd = _0x51599b.k.m[_0x2485e7(0x75c)]('/images/bg-pattern-pow2-ARENA.png'))[_0x2485e7(0x4d0)] = _0x51599b.k.C.D, _0x3841cd)), this.Jh = new _0x51599b.k.n(((_0x3293c5 = _0x51599b.k.m[_0x2485e7(0x75c)](_0x2485e7(0x3ef)))[_0x2485e7(0x4d0)] = _0x51599b.k.C.D, _0x3293c5)), this.Gh = new _0x51599b.k.n(_0x51599b.k.m[_0x2485e7(0x75c)](_0x2485e7(0x537))), this.$f = new _0x51599b.k.n(((_0x57d765 = _0x51599b.k.m[_0x2485e7(0x75c)](_0x30354b.H.O))[_0x2485e7(0x4d0)] = _0x51599b.k.C.D, _0x57d765)), this.mc = ((_0x41d55e = _0xa914b4.d[_0x2485e7(0x43a)](_0x2485e7(0x1cb)))[_0x2485e7(0x821)] = 0x50, _0x41d55e[_0x2485e7(0x2c1)] = 0x50, {
                    'nc': _0x41d55e,
                    'oc': _0x41d55e.getContext('2d'),
                    'Za': new _0x51599b.k.n(_0x51599b.k.m.from(_0x41d55e))
                }), this.hf = {}, this.df = {}, this.xk = [], this.yk = null;
            }

            function _0x5623f9(_0x75a71b) {
                var _0x17c3c6 = _0x1c2b;
                return (_0x75a71b = _0x51599b.k.m[_0x17c3c6(0x75c)](_0x75a71b || _0x2e052d.background || _0x17c3c6(0x43b)))[_0x17c3c6(0x4d0)] = _0x51599b.k.C.D, _0x75a71b;
            }
            return _0x458c70[_0x3012f6(0x72d)].Sa = function (_0x553a83) {
                function _0x3d2328() {
                    --_0x27ca7f == 0x0 && _0x553a83();
                }
                var _0x27ca7f = 0x4;
                this.hf = {}, _0x3d2328(), this.df = {}, _0x3d2328(), this.xk = [], _0x3d2328(), this.yk = null, _0x3d2328();
            }, _0x458c70;
        }()), _0xa914b4.zk = (function () {
            var _0x3c3acb = _0x17b28a;

            function _0x333744() {
                this.Ak = null, this.Kf = new _0xa914b4.Bk(), this.Jf = new _0xa914b4.Ck(), this.Dk = new _0xa914b4.Ek(), this.Fk = new _0xa914b4.Gk(), this.Hk = new _0xa914b4.Ik(), this.Jk = new _0xa914b4.Kk(), this.Lk = new _0xa914b4.Mk(), this.Nk = new _0xa914b4.Ok(), this.Hi = new _0xa914b4.Pk(), this.Qk = new _0xa914b4.Rk(), this.Sk = new _0xa914b4.Tk(), this.Uk = new _0xa914b4.Vk(), this.Wk = new _0xa914b4.Xk(), this.Yk = new _0xa914b4.Zk(), this.Re = new _0xa914b4.$k(), this._k = new _0xa914b4.al(), this.bl = new _0xa914b4.cl(), this.dl = new _0xa914b4.el(), this.fl = [];
            }

            function _0x11d6ea(_0x47503c, _0x50f2f8) {
                var _0x37a578 = _0x1c2b;
                if (_0x50f2f8 !== _0x47503c[_0x37a578(0x56a)] + 0x1) {
                    var _0x1b8a6d = _0x47503c[_0x50f2f8];
                    _0x1a7a89.ua(_0x47503c, _0x50f2f8 + 0x1, _0x50f2f8, _0x47503c.length - _0x50f2f8 - 0x1), _0x47503c[_0x47503c.length - 0x1] = _0x1b8a6d;
                }
            }
            return _0x333744[_0x3c3acb(0x72d)].Sa = function () {
                var _0x161f40 = _0x3c3acb;
                this.Ak = new _0xa914b4.Nf(_0xa914b4.Uf.Tf), this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
                for (var _0x62d25a = 0x0; _0x62d25a < this.fl[_0x161f40(0x56a)]; _0x62d25a++) {
                    this.fl[_0x62d25a].Sa();
                }
            }, _0x333744[_0x3c3acb(0x72d)].Uh = function (_0x5430d1, _0x281b32) {
                var _0x3fa921 = _0x3c3acb;
                for (var _0x337283 = this.fl[_0x3fa921(0x56a)] - 0x1; _0x337283 >= 0x0; _0x337283--) {
                    this.fl[_0x337283].ug(_0x5430d1, _0x281b32);
                };
                this.fl[0x0] !== this.Kf && this.fl[0x0] !== this.dl && this.Ak != null && this.Ak.ug(_0x5430d1, _0x281b32);
            }, _0x333744[_0x3c3acb(0x72d)].qg = function () {
                var _0xb3c8c6 = _0x3c3acb;
                for (var _0x1a503a = this.fl[_0xb3c8c6(0x56a)] - 0x1; _0x1a503a >= 0x0; _0x1a503a--) {
                    this.fl[_0x1a503a].qg();
                };
                this.Ak != null && this.Ak.qg();
            }, _0x333744[_0x3c3acb(0x72d)].gl = function (_0x38e83b) {
                var _0x3c19f3 = function _0x3621de(_0x272bb6, _0xfa9789) {
                    for (var _0x1ee491 = 0x0; _0x1ee491 < _0x272bb6.length; _0x1ee491++) {
                        if (_0x272bb6[_0x1ee491] === _0xfa9789) return _0x1ee491;
                    };
                    return -0x1;
                }(this.fl, _0x38e83b);
                !(_0x3c19f3 < 0x0) && (this.fl[0x0].hl(), function _0x4ce3ff(_0x1ee36c, _0x34aa5d) {
                    if (_0x34aa5d !== 0x0) {
                        var _0x1d9c8a = _0x1ee36c[_0x34aa5d];
                        _0x1a7a89.ua(_0x1ee36c, 0x0, 0x1, _0x34aa5d), _0x1ee36c[0x0] = _0x1d9c8a;
                    }
                }(this.fl, _0x3c19f3), this.il());
            }, _0x333744[_0x3c3acb(0x72d)].jl = function () {
                this.fl[0x0].hl();
                do {
                    _0x11d6ea(this.fl, 0x0);
                } while (this.fl[0x0].Wd !== _0xa914b4.ll.kl);;
                this.il();
            }, _0x333744.prototype.il = function () {
                var _0x21eb83 = this.fl[0x0];
                _0x21eb83.ml(), _0x21eb83.nl(), this.ol();
            }, _0x333744[_0x3c3acb(0x72d)].pl = function () {
                var _0x45776c = _0x3c3acb;
                return this.fl[_0x45776c(0x56a)] !== 0x0 && this.fl[0x0].Wd === _0xa914b4.ll.kl && this.Yk.ql();
            }, _0x333744[_0x3c3acb(0x72d)].rl = function () {
                var _0x23bf2c = _0x3c3acb;
                return this.fl[_0x23bf2c(0x56a)] === 0x0 ? null : this.fl[0x0];
            }, _0x333744[_0x3c3acb(0x72d)].ol = function () {
                this.pl() && this.gl(this.Yk);
            }, _0x333744;
        }()), _0xa914b4.vj = (function () {
            function _0x1fa742() {
                this.ii = [], this.fi = [];
            }
            return _0x1fa742.wj = function (_0x307bac, _0x44a74e) {
                return {
                    'ji': _0x307bac,
                    'hi': _0x44a74e
                };
            }, _0x1fa742.xj = function (_0x54e851, _0x370a2f) {
                return {
                    'gi': _0x54e851,
                    'hi': _0x370a2f
                };
            }, _0x1fa742;
        }()), _0xa914b4.sl = (function () {
            var _0x39e13a = _0x17b28a;

            function _0x2b745d() {
                this.tl = [], this.ul = [], this.vl = false, this.wl = _0x3cb544, this.xl = {};
            }
            var _0x3cb544 = 'guest',
                _0x46b46c = 'guest',
                _0x129f04 = 'fb',
                _0x25fda0 = 'gg';
            return _0x2b745d.yl = new(function () {
                var _0x2ee250 = _0x1c2b;

                function _0x4dff7a() {}
                return _0x4dff7a.zl = function _0x3c729e(_0x507f58) {
                    this.Al = _0x507f58;
                }, _0x4dff7a[_0x2ee250(0x72d)].Bl = function () {
                    var _0x31df40 = _0x2ee250;
                    return (typeof FB == _0x31df40(0x76e) ? _0x31df40(0x76e) : _typeof(FB)) != _0x31df40(0x76e);
                }, _0x4dff7a.prototype.Cl = function (_0x454093, _0x5934be, _0x658007) {
                    var _0xb41131 = _0x2ee250,
                        _0x583c95 = _0xb41131(0x7ff) + _0x454093;
                    $[_0xb41131(0x64d)](_0x583c95).fail(function () {
                        _0x5934be();
                    })[_0xb41131(0x40b)](function () {
                        _0x658007();
                    });
                }, _0x4dff7a[_0x2ee250(0x72d)].Dl = function (_0x15add3, _0x5b8e6f) {
                    if (!this.Bl()) {
                        _0x15add3();
                        return;
                    };
                    this.El(function () {
                        var _0x5198cd = _0x1c2b;
                        FB[_0x5198cd(0x631)](function (_0x141726) {
                            var _0x15189d = _0x5198cd;
                            if (_0x141726[_0x15189d(0x2d4)] !== _0x15189d(0x42d)) {
                                _0x15add3();
                                return;
                            };
                            var _0x34a707 = _0x141726.authResponse.accessToken;
                            _0x5b8e6f(new _0x4dff7a.zl(_0x34a707));
                        });
                    }, function (_0x53fa55) {
                        _0x5b8e6f(_0x53fa55);
                    });
                }, _0x4dff7a[_0x2ee250(0x72d)].El = function (_0x197292, _0x24f814) {
                    var _0x4a315f = _0x2ee250,
                        _0x4946d4 = this;
                    if (!this.Bl()) {
                        _0x197292();
                        return;
                    };
                    FB[_0x4a315f(0x872)](function (_0x489bb9) {
                        var _0x544acc = _0x4a315f;
                        if (_0x489bb9[_0x544acc(0x2d4)] !== 'connected') {
                            _0x197292();
                            return;
                        };
                        var _0x20a8f6 = _0x489bb9.authResponse[_0x544acc(0x53b)];
                        _0x4946d4.Cl(_0x20a8f6, function () {
                            _0x197292();
                        }, function () {
                            _0x24f814(new _0x4dff7a.zl(_0x20a8f6));
                        });
                    });
                }, _0x4dff7a[_0x2ee250(0x72d)].Fl = function () {
                    var _0x714eba = _0x2ee250;
                    this.Bl() && FB[_0x714eba(0x246)]();
                }, _0x4dff7a;
            }())(), _0x2b745d.Gl = new(function () {
                var _0x99b129 = _0x1c2b;

                function _0x4ad7db() {}
                return _0x4ad7db.Hl = function _0x2b1ac5(_0x4e5bbc, _0x3d4baf) {
                    this.Al = _0x4e5bbc, this.Il = _0x3d4baf;
                }, _0x4ad7db[_0x99b129(0x72d)].Bl = function () {
                    var _0x2407f8 = _0x99b129;
                    return _typeof(GoogleAuth) != _0x2407f8(0x76e);
                }, _0x4ad7db[_0x99b129(0x72d)].Dl = function (_0x331bc2, _0x3bd541) {
                    var _0x4cd21a = _0x99b129;
                    if (_typeof(GoogleAuth) == _0x4cd21a(0x76e)) {
                        _0x331bc2();
                        return;
                    };
                    GoogleAuth[_0x4cd21a(0x378)](function () {
                        var _0x2a41e4 = _0x4cd21a;
                        if (GoogleAuth[_0x2a41e4(0x5f1)].get()) {
                            var _0x156a76 = GoogleAuth[_0x2a41e4(0x2b3)].get(),
                                _0x4a9be4 = _0x156a76[_0x2a41e4(0x808)]()[_0x2a41e4(0x5aa)],
                                _0x426467 = new Date().getTime() + _0x156a76[_0x2a41e4(0x808)]()[_0x2a41e4(0x38d)] * 0x3e8;
                            if (new Date()[_0x2a41e4(0x2c4)]() < _0x426467) {
                                _0x3bd541(new _0x4ad7db.Hl(_0x4a9be4, _0x426467));
                                return;
                            }
                        };
                        GoogleAuth.signIn().then(function (_0x5f48a6) {
                            var _0x4420f3 = _0x2a41e4;
                            if (_typeof(_0x5f48a6.error) !== _0x4420f3(0x76e) || !_0x5f48a6[_0x4420f3(0x5f1)]()) {
                                _0x331bc2();
                                return;
                            };
                            var _0x40b955 = _0x5f48a6[_0x4420f3(0x808)]().id_token,
                                _0xc7aa5b = new Date()[_0x4420f3(0x2c4)]() + _0x5f48a6.getAuthResponse()[_0x4420f3(0x38d)] * 0x3e8;
                            _0x3bd541(new _0x4ad7db.Hl(_0x40b955, _0xc7aa5b));
                        });
                    });
                }, _0x4ad7db[_0x99b129(0x72d)].El = function (_0x46b86c, _0x2fbd9a) {
                    var _0x39fb17 = _0x99b129;
                    if (_typeof(GoogleAuth) == _0x39fb17(0x76e)) {
                        _0x46b86c();
                        return;
                    };
                    GoogleAuth[_0x39fb17(0x378)](function () {
                        var _0x179c63 = _0x39fb17;
                        if (GoogleAuth[_0x179c63(0x5f1)][_0x179c63(0x64d)]()) {
                            var _0x214f9c = GoogleAuth[_0x179c63(0x2b3)][_0x179c63(0x64d)](),
                                _0x109973 = _0x214f9c[_0x179c63(0x808)]()[_0x179c63(0x5aa)],
                                _0x5d8673 = new Date()[_0x179c63(0x2c4)]() + _0x214f9c[_0x179c63(0x808)]()[_0x179c63(0x38d)] * 0x3e8;
                            if (new Date()[_0x179c63(0x2c4)]() < _0x5d8673) {
                                _0x2fbd9a(new _0x4ad7db.Hl(_0x109973, _0x5d8673));
                                return;
                            }
                        };
                        _0x46b86c();
                    });
                }, _0x4ad7db[_0x99b129(0x72d)].Fl = function () {
                    var _0x5d3c83 = _0x99b129;
                    _typeof(GoogleAuth) != _0x5d3c83(0x76e) && GoogleAuth.signOut();
                }, _0x4ad7db;
            }())(), _0x2b745d.prototype.Sa = function () {
                this.Jl();
            }, _0x2b745d[_0x39e13a(0x72d)].Kl = function () {
                var _0x4092ba = _0x39e13a;
                return this.vl ? this.xl[_0x4092ba(0x875)] : '';
            }, _0x2b745d[_0x39e13a(0x72d)].Ll = function () {
                var _0x2c3c02 = _0x39e13a;
                return this.vl ? this.xl[_0x2c3c02(0x8d3)] : '';
            }, _0x2b745d[_0x39e13a(0x72d)].Ml = function () {
                var _0x28cf56 = _0x39e13a;
                return this.vl ? this.xl[_0x28cf56(0x780)] : '';
            }, _0x2b745d.prototype.Nl = function () {
                var _0x52296c = _0x39e13a;
                return this.vl ? this.xl[_0x52296c(0x6f5)] : _0x30354b.H.M;
            }, _0x2b745d[_0x39e13a(0x72d)].Ol = function () {
                var _0x50ecaa = _0x39e13a;
                return this.vl && this.xl[_0x50ecaa(0x559)];
            }, _0x2b745d[_0x39e13a(0x72d)].Pl = function () {
                return this.vl && this.xl.isConsentGiven;
            }, _0x2b745d[_0x39e13a(0x72d)].Ql = function () {
                var _0x69b689 = _0x39e13a;
                return this.vl ? this.xl[_0x69b689(0x351)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].Rl = function () {
                var _0x4799c3 = _0x39e13a;
                return this.vl ? this.xl[_0x4799c3(0x76b)] : 0x1;
            }, _0x2b745d.prototype.Sl = function () {
                var _0x3ddf00 = _0x39e13a;
                return this.vl ? this.xl[_0x3ddf00(0x552)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].Tl = function () {
                var _0x3d1422 = _0x39e13a;
                return this.vl ? this.xl[_0x3d1422(0x22c)] : 0x32;
            }, _0x2b745d[_0x39e13a(0x72d)].Ul = function () {
                return this.vl ? this.xl.skinId : 0x0;
            }, _0x2b745d.prototype.Vl = function () {
                var _0x13610b = _0x39e13a;
                return this.vl ? this.xl[_0x13610b(0x504)] : 0x0;
            }, _0x2b745d.prototype.Wl = function () {
                var _0x18a4e8 = _0x39e13a;
                return this.vl ? this.xl[_0x18a4e8(0x766)] : 0x0;
            }, _0x2b745d.prototype.Xl = function () {
                var _0x4aaf49 = _0x39e13a;
                return this.vl ? this.xl[_0x4aaf49(0x62c)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].Yl = function () {
                return this.vl ? this.xl.hatId : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].Zl = function () {
                var _0x4014dd = _0x39e13a;
                return this.vl ? this.xl[_0x4014dd(0x644)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].$l = function () {
                var _0x1eeef2 = _0x39e13a;
                return this.vl ? this.xl[_0x1eeef2(0x740)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)]._l = function () {
                var _0x3f5c1f = _0x39e13a;
                return this.vl ? this.xl[_0x3f5c1f(0x31b)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].am = function () {
                return this.vl ? this.xl.headShots : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].bm = function () {
                var _0x2fd589 = _0x39e13a;
                return this.vl ? this.xl[_0x2fd589(0x4de)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].cm = function () {
                var _0x3ae852 = _0x39e13a;
                return this.vl ? this.xl[_0x3ae852(0x89e)] : 0x0;
            }, _0x2b745d[_0x39e13a(0x72d)].dm = function () {
                var _0x15100f = _0x39e13a;
                return this.vl ? this.xl[_0x15100f(0x2a5)] : {};
            }, _0x2b745d[_0x39e13a(0x72d)].em = function (_0x173ce7) {
                var _0x463c4e = _0x39e13a;
                this.tl[_0x463c4e(0x6a2)](_0x173ce7), _0x173ce7();
            }, _0x2b745d[_0x39e13a(0x72d)].fm = function (_0x2d1fa2) {
                var _0x2cdfe6 = _0x39e13a;
                this.ul[_0x2cdfe6(0x6a2)](_0x2d1fa2), _0x2d1fa2();
            }, _0x2b745d[_0x39e13a(0x72d)].rk = function (_0x1fec88, _0x373871) {
                var _0x652c11 = _0x39e13a,
                    _0x53df34 = this.xl[_0x652c11(0x4f5)][_0x652c11(0x4bd)](_0x2e052d.pL || []);
                if (_0x53df34 == null) return false;;
                for (_0x46b46c = 0x0; _0x46b46c < _0x53df34[_0x652c11(0x56a)]; _0x46b46c++) {
                    var _0x46b26e = _0x53df34[_0x46b46c];
                    if (_0x46b26e.id == _0x1fec88 && _0x46b26e[_0x652c11(0x729)] === _0x373871) return true;
                };
                return false;
            }, _0x2b745d[_0x39e13a(0x72d)].nk = function () {
                return this.vl;
            }, _0x2b745d[_0x39e13a(0x72d)].gm = function () {
                return this.wl;
            }, _0x2b745d[_0x39e13a(0x72d)].hm = function (_0x53bbae) {
                var _0x3721bc = this,
                    _0x259374 = this.Kl(),
                    _0x18c54c = this.Ql(),
                    _0x2e71d0 = this.Rl();
                this.im(function () {
                    _0x53bbae != null && _0x53bbae();
                }, function (_0x5b1d55) {
                    var _0x44b531 = _0x1c2b;
                    _0x3721bc.xl = _0x5b1d55[_0x44b531(0x3db)], _0x3721bc.jm();
                    var _0x5c50d5 = _0x3721bc.Kl(),
                        _0x2b2e5b = _0x3721bc.Ql(),
                        _0x3e1ce5 = _0x3721bc.Rl();
                    if (_0x259374 === _0x5c50d5) {
                        _0x3e1ce5 > 0x1 && _0x3e1ce5 !== _0x2e71d0 && ooo.Xg.Yk.km(new _0xa914b4.lm(_0x3e1ce5));
                        var _0x4fd5b5 = _0x2b2e5b - _0x18c54c;
                        _0x4fd5b5 >= 0x14 && ooo.Xg.Yk.km(new _0xa914b4.mm(_0x4fd5b5));
                    };
                    _0x53bbae != null && _0x53bbae();
                });
            }, _0x2b745d.prototype.im = function (_0x44f351, _0x621718) {
                var _0x44e7bb = _0x39e13a,
                    _0x12f6cb = _0x30354b.H.J + _0x44e7bb(0x80c) + this.wl + _0x44e7bb(0x773);
                _0x1a7a89.Aa(_0x12f6cb, _0x44f351, function (_0x201c3a) {
                    _0x201c3a.code !== 0x4b0 ? _0x44f351() : _0x621718(_0x201c3a);
                });
            }, _0x2b745d[_0x39e13a(0x72d)].nm = function (_0x3e115b, _0x1f689e, _0x18f801, _0x1e78cb) {
                var _0x186306 = _0x39e13a,
                    _0x461f60 = _0x30354b.H.J + '/pub/wuid/' + this.wl + _0x186306(0x5ac) + _0x3e115b + _0x186306(0x298) + _0x1f689e;
                _0x1a7a89.Aa(_0x461f60, function () {
                    _0x18f801();
                }, function (_0x4928b2) {
                    _0x4928b2.code !== 0x4b0 ? _0x18f801() : _0x1e78cb();
                });
            }, _0x2b745d[_0x39e13a(0x72d)].om = function (_0x42f7c1, _0x222270) {
                var _0x712652 = _0x39e13a,
                    _0x232ca9 = _0x30354b.H.J + '/pub/wuid/' + this.wl + _0x712652(0x498);
                _0x1a7a89.Aa(_0x232ca9, _0x42f7c1, function (_0x431ba2) {
                    var _0x1b6165 = _0x712652;
                    _0x431ba2[_0x1b6165(0x27d)] !== 0x4b0 ? _0x42f7c1() : _0x222270();
                });
            }, _0x2b745d[_0x39e13a(0x72d)].pm = function (_0x360fb3) {
                var _0x54ad12 = this;
                this.vl && this.qm(), _0x2b745d.yl.Dl(function () {
                    _0x360fb3();
                }, function (_0x24b976) {
                    _0x54ad12.rm(_0x129f04, _0x24b976.Al, _0x360fb3);
                });
            }, _0x2b745d[_0x39e13a(0x72d)].sm = function (_0x210b62) {
                var _0x4d1d91 = this;
                this.vl && this.qm(), _0x2b745d.Gl.Dl(function () {
                    _0x210b62();
                }, function (_0x35fd40) {
                    _0x4d1d91.rm(_0x25fda0, _0x35fd40.Al, _0x210b62);
                });
            }, _0x2b745d[_0x39e13a(0x72d)].rm = function (_0x30428d, _0x3e778e, _0x31ca87) {
                var _0x23f227 = _0x39e13a,
                    _0x4d2957 = this,
                    _0x7458c5 = _0x30428d + '_' + _0x3e778e,
                    _0x4181b5 = _0x30354b.H.J + '/pub/wuid/' + _0x7458c5 + _0x23f227(0x72b);
                _0x1a7a89.Aa(_0x4181b5, function () {
                    _0x4d2957.tm();
                }, function (_0x1d3a3f) {
                    var _0xb2777d = _0x23f227;
                    _0x1d3a3f.code !== 0x4b0 ? _0x4d2957.tm() : (_0x4d2957.um(_0x30428d, _0x3e778e, _0x1d3a3f[_0xb2777d(0x3db)]), _0x31ca87 != null && _0x31ca87());
                });
            }, _0x2b745d[_0x39e13a(0x72d)].qm = function () {
                try {
                    this.vm(), this.wm();
                } catch (_0x548a44) {};
                this.xm();
            }, _0x2b745d.prototype.ym = function () {
                this.vl && this.om(function () {}, function () {});
            }, _0x2b745d[_0x39e13a(0x72d)].tm = function () {
                ooo.Xg.gl(ooo.Xg._k);
            }, _0x2b745d[_0x39e13a(0x72d)].um = function (_0x168e75, _0x55a0ac, _0x1f610c) {
                var _0x5e0e8c = this;
                _0x19fbf0(_0x1f610c, function (_0x16ede8) {
                    var _0x4f39e3 = _0x1c2b,
                        _0x3d9a24 = _0x5e0e8c.vl ? _0x5e0e8c.xl[_0x4f39e3(0x875)] : _0x16ede8;
                    _0x5e0e8c.vl = true, _0x5e0e8c.wl = _0x168e75 + '_' + _0x55a0ac, _0x5e0e8c.xl = _0x16ede8, _0xa914b4.Cg.Ng(_0xa914b4.Cg.Hg, _0x168e75, 0x3c), _0x3d9a24 !== _0x5e0e8c.xl.userId ? _0x5e0e8c.zm() : _0x5e0e8c.jm(), ooo.Xp(true, true), _0x2e052d[_0x4f39e3(0x32a)] = false;
                });
            }, _0x2b745d[_0x39e13a(0x72d)].xm = function () {
                var _0x3b2641 = _0x39e13a,
                    _0x808e41 = this.vl ? this.xl[_0x3b2641(0x875)] : _0x46b46c;
                this.vl = false, this.wl = _0x3cb544, this.xl = {}, _0xa914b4.Cg.Ng(_0xa914b4.Cg.Hg, '', 0x3c), _0x808e41 !== this.xl.userId ? this.zm() : this.jm();
            }, _0x2b745d[_0x39e13a(0x72d)].Jl = function () {
                var _0x18b401 = _0xa914b4.Cg.Og(_0xa914b4.Cg.Hg),
                    _0x1b68f4 = this;
                if (_0x129f04 === _0x18b401) {
                    var _0x1746e2 = 0x1;
                    (function _0x3739bf() {
                        if (!_0x2b745d.yl.Bl() && _0x1746e2++ < 0x5) {
                            _0x1a7a89.Y(_0x3739bf, 0x3e8);
                            return;
                        };
                        _0x2b745d.yl.El(function () {}, function (_0x3183c2) {
                            _0x1b68f4.rm(_0x129f04, _0x3183c2.Al);
                        });
                    }());
                } else {
                    if (_0x25fda0 === _0x18b401) {
                        var _0x14c6e1 = 0x1;
                        (function _0x1c85e9() {
                            if (!_0x2b745d.Gl.Bl() && _0x14c6e1++ < 0x5) {
                                _0x1a7a89.Y(_0x1c85e9, 0x3e8);
                                return;
                            };
                            _0x2b745d.Gl.El(function () {}, function (_0x29ee09) {
                                _0x1b68f4.rm(_0x25fda0, _0x29ee09.Al);
                            });
                        }());
                    }
                }
            }, _0x2b745d[_0x39e13a(0x72d)].zm = function () {
                for (var _0x147bd8 = 0x0; _0x147bd8 < this.tl.length; _0x147bd8++) {
                    this.tl[_0x147bd8]();
                };
                this.jm();
            }, _0x2b745d[_0x39e13a(0x72d)].jm = function () {
                for (var _0x46ab0a = 0x0; _0x46ab0a < this.ul.length; _0x46ab0a++) {
                    this.ul[_0x46ab0a]();
                }
            }, _0x2b745d.prototype.vm = function () {
                _0x2b745d.yl.Fl();
            }, _0x2b745d[_0x39e13a(0x72d)].wm = function () {
                _0x2b745d.Gl.Fl();
            }, _0x2b745d;
        }()), _0xa914b4.Sf = (function () {
            var _0x3b6c4a = _0x17b28a;

            function _0x53bca4(_0x444c65, _0x5c0e79, _0x3c6b12) {
                var _0xe01c3f = _0x1c2b;
                this.Of = _0x3c6b12, this.Rd = false, this.Yc = new _0x51599b.k.l(), this.Yc.visible = false, this.Am = Array(_0x444c65);
                for (var _0x318e3e = 0x0; _0x318e3e < this.Am[_0xe01c3f(0x56a)]; _0x318e3e++) {
                    var _0x406b66 = new _0xa914b4.Bm(new _0x51599b.j(_0x5c0e79 * 0x3));
                    _0x406b66.Cm(_0x5c0e79), this.Am[_0x318e3e] = _0x406b66, this.Yc.addChild(_0x406b66.ag());
                };
                this.Pf = 0x1, this.Qf = 0x1, this.qg();
            }
            return _0x53bca4[_0x3b6c4a(0x72d)].ag = function () {
                return this.Yc;
            }, _0x53bca4[_0x3b6c4a(0x72d)].rg = function (_0x34c138) {
                var _0x5720d1 = _0x3b6c4a;
                this.Rd = _0x34c138, this.Yc[_0x5720d1(0x775)] = _0x34c138;
            }, _0x53bca4.prototype.qg = function () {
                var _0x118673 = _0x3b6c4a;
                this.Pf = this.Of[_0x118673(0x821)](), this.Qf = this.Of[_0x118673(0x2c1)]();
                var _0x2a3e9f = this.Qf / 0x1e;
                for (var _0xe3e03f = 0x0; _0xe3e03f < this.Am[_0x118673(0x56a)]; _0xe3e03f++) {
                    this.Am[_0xe3e03f].Dm(_0x2a3e9f);
                }
            }, _0x53bca4.prototype.Bg = function () {
                var _0x1d2bb2 = _0x3b6c4a;
                if (this.Rd)
                    for (var _0x4627ee = 0x0; _0x4627ee < this.Am[_0x1d2bb2(0x56a)]; _0x4627ee++) {
                        this.Am[_0x4627ee].Bg(this.Vf);
                    }
            }, _0x53bca4.prototype.Em = function () {
                return this.Pf;
            }, _0x53bca4[_0x3b6c4a(0x72d)].Fm = function () {
                return this.Qf;
            }, _0x53bca4[_0x3b6c4a(0x72d)].xg = function (_0x58f627, _0x305615) {
                this.Am[_0x58f627].Gm(_0x305615);
            }, _0x53bca4[_0x3b6c4a(0x72d)].yg = function (_0x4befc1, _0x1e8d0c) {
                this.Am[_0x4befc1].Hm(_0x1e8d0c);
            }, _0x53bca4[_0x3b6c4a(0x72d)].zg = function (_0x1dc806, _0x2d5cb9, _0xb0ae6d) {
                var _0x33592b = this.Am[_0x1dc806];
                for (var _0x1181a3 = _0x33592b.Im(), _0x2d2f42 = _0x33592b.Jm, _0x5de734 = 0x0; _0x5de734 < _0x1181a3; _0x5de734++) {
                    _0x2d2f42[_0x5de734 * 0x3] = _0x2d5cb9, _0x2d2f42[_0x5de734 * 0x3 + 0x1] = _0xb0ae6d, _0x2d2f42[_0x5de734 * 0x3 + 0x2] = 0x0;
                }
            }, _0x53bca4[_0x3b6c4a(0x72d)].Ag = function (_0x1fbadf, _0x21f75b, _0x42b3a1) {
                var _0x4def35, _0x5d3a31, _0x15517b = this.Am[_0x1fbadf],
                    _0x1a10bb = _0x15517b.Im(),
                    _0x59ab3b = _0x15517b.Jm,
                    _0x3dbc2a = _0x15517b.Km(),
                    _0x41f9b4 = _0x59ab3b[0x0],
                    _0x568455 = _0x59ab3b[0x1],
                    _0x323efc = _0x21f75b - _0x41f9b4,
                    _0x47ad30 = _0x42b3a1 - _0x568455,
                    _0x363a4e = _0x1a7a89.la(_0x323efc, _0x47ad30);
                if (_0x363a4e > 0x0) {
                    _0x59ab3b[0x0] = _0x21f75b, _0x59ab3b[0x1] = _0x42b3a1, _0x59ab3b[0x2] = _0x1a7a89.ta(_0x47ad30, _0x323efc);
                    var _0x86cb4b = _0x3dbc2a * 0.25 / (_0x3dbc2a * 0.25 + _0x363a4e),
                        _0x4ede59 = 0x1 - _0x86cb4b * 0x2;
                    for (var _0x493f99 = 0x1, _0x8ececf = _0x1a10bb; _0x493f99 < _0x8ececf; _0x493f99++) {
                        _0x4def35 = _0x59ab3b[_0x493f99 * 0x3], _0x59ab3b[_0x493f99 * 0x3] = _0x59ab3b[_0x493f99 * 0x3 - 0x3] * _0x4ede59 + (_0x4def35 + _0x41f9b4) * _0x86cb4b, _0x41f9b4 = _0x4def35, _0x5d3a31 = _0x59ab3b[_0x493f99 * 0x3 + 0x1], _0x59ab3b[_0x493f99 * 0x3 + 0x1] = _0x59ab3b[_0x493f99 * 0x3 - 0x2] * _0x4ede59 + (_0x5d3a31 + _0x568455) * _0x86cb4b, _0x568455 = _0x5d3a31, _0x59ab3b[_0x493f99 * 0x3 + 0x2] = _0x1a7a89.ta(_0x59ab3b[_0x493f99 * 0x3 - 0x2] - _0x59ab3b[_0x493f99 * 0x3 + 0x1], _0x59ab3b[_0x493f99 * 0x3 - 0x3] - _0x59ab3b[_0x493f99 * 0x3]);
                    }
                }
            }, _0x53bca4;
        }()), _0xa914b4.Lm = (function () {
            var _0x1d12c0 = _0x17b28a;

            function _0xe768de(_0x1dd20b) {
                var _0x2335ee = _0x1c2b,
                    _0x58065f, _0x4c5790 = this;
                this.Of = _0x1dd20b, this.nc = _0x1dd20b[_0x2335ee(0x64d)]()[0x0], this.Vf = ((_0x58065f = {})[_0x2335ee(0x737)] = _0x4c5790.nc, _0x58065f[_0x2335ee(0x716)] = true, new _0x51599b.k.o(_0x58065f)), this.Rd = false, this.Mm = new _0xa914b4.Bm(new _0x51599b.j(_0x58bd5c * 0x3)), this.Pf = 0x1, this.Qf = 0x1, this.Nm = _0x387c27.Om, this.Pm = _0x387c27.Om, this.Qm = _0x387c27.Om, this.Rm = _0x387c27.Om, this.Sm = _0x387c27.Om, this.qg(), ooo.ud.Jc(function () {
                    _0x4c5790.Mm.Tm();
                });
            }
            var _0x58bd5c = _0x1a7a89.ha(0x64, _0xa914b4.Xc.fd),
                _0x387c27 = {
                    'Om': _0x1d12c0(0x6e5),
                    'Um': _0x1d12c0(0x894),
                    'Vm': '0lt2'
                };
            return _0xe768de[_0x1d12c0(0x72d)].rg = function (_0x10a56d) {
                this.Rd = _0x10a56d;
            }, _0xe768de.prototype.qg = function () {
                var _0x4d6d08 = _0x1d12c0,
                    _0x12df09 = _0x1a7a89.e();
                this.Pf = this.Of[_0x4d6d08(0x821)](), this.Qf = this.Of.height(), this.Vf[_0x4d6d08(0x36a)](this.Pf, this.Qf), this.Vf[_0x4d6d08(0x440)] = _0x12df09, this.nc[_0x4d6d08(0x821)] = _0x12df09 * this.Pf, this.nc[_0x4d6d08(0x2c1)] = _0x12df09 * this.Qf;
                var _0x430767 = this.Qf / 0x4;
                this.Mm.Dm(_0x430767);
                var _0xcd86 = _0x1a7a89.fa(_0x1a7a89._(this.Pf / _0x430767) * 0x2 - 0x5, 0x1, _0x58bd5c);
                this.Mm.Cm(_0xcd86);
            }, _0xe768de[_0x1d12c0(0x72d)].ug = function () {
                if (this.Rd) {
                    var _0x4a431f = _0x1a7a89.Ca() / 0xc8,
                        _0x2d6fda = _0x1a7a89.oa(_0x4a431f);
                    this.Mm.Wm(this.Xm(this.Nm, _0x2d6fda), this.Ym(this.Nm, _0x2d6fda)), this.Mm.Zm(this.$m(this.Pm, _0x2d6fda), this.$m(this.Qm, _0x2d6fda), this.$m(this.Rm, _0x2d6fda), this.$m(this.Sm, _0x2d6fda));
                    var _0x1f37cc = this.Mm.Km();
                    for (var _0x37334e = this.Mm.Im(), _0xe0172e = this.Mm.Jm, _0x5ce3e9 = this.Pf - (this.Pf - _0x1f37cc * 0.5 * (_0x37334e - 0x1)) * 0.5, _0x3cf4d6 = this.Qf * 0.5, _0x546684 = 0x0, _0x9fd28e = 0x0, _0x12f0a7 = -0x1; _0x12f0a7 < _0x37334e; _0x12f0a7++) {
                        var _0xb7ca5d = _0x12f0a7,
                            _0x36c6cf = _0x1a7a89.pa(_0xb7ca5d * 0x1 / 0xc * _0x30354b.T - _0x4a431f) * (0x1 - _0x1a7a89.ra(0x10, _0xb7ca5d * -0x1 / 0xc));
                        _0x12f0a7 >= 0x0 && (_0xe0172e[_0x12f0a7 * 0x3] = _0x5ce3e9 - _0x1f37cc * 0.5 * _0xb7ca5d, _0xe0172e[_0x12f0a7 * 0x3 + 0x1] = _0x3cf4d6 + _0x1f37cc * 0.5 * _0x36c6cf, _0xe0172e[_0x12f0a7 * 0x3 + 0x2] = _0x1a7a89.ta(_0x9fd28e - _0x36c6cf, _0xb7ca5d - _0x546684)), _0x546684 = _0xb7ca5d, _0x9fd28e = _0x36c6cf;
                    };
                    this.Mm.Bg(), this.Mm._m(this.Vf);
                }
            }, _0xe768de[_0x1d12c0(0x72d)].Gm = function (_0x504687) {
                this.Mm.Gm(_0x504687);
            }, _0xe768de[_0x1d12c0(0x72d)].an = function (_0x5744e8) {
                this.Nm = _0x5744e8 ? _0x387c27.Vm : _0x387c27.Um, this.Pm = _0x387c27.Om, this.Qm = _0x387c27.Om, this.Rm = _0x387c27.Om, this.Sm = _0x387c27.Om;
            }, _0xe768de[_0x1d12c0(0x72d)].bn = function (_0x289a4e) {
                this.Nm = _0x387c27.Om, this.Pm = _0x289a4e ? _0x387c27.Vm : _0x387c27.Um, this.Qm = _0x387c27.Om, this.Rm = _0x387c27.Om, this.Sm = _0x387c27.Om;
            }, _0xe768de[_0x1d12c0(0x72d)].cn = function (_0x3ed534) {
                this.Nm = _0x387c27.Om, this.Pm = _0x387c27.Om, this.Qm = _0x3ed534 ? _0x387c27.Vm : _0x387c27.Um, this.Rm = _0x387c27.Om, this.Sm = _0x387c27.Om;
            }, _0xe768de[_0x1d12c0(0x72d)].dn = function (_0x2cad90) {
                this.Nm = _0x387c27.Om, this.Pm = _0x387c27.Om, this.Qm = _0x387c27.Om, this.Rm = _0x2cad90 ? _0x387c27.Vm : _0x387c27.Um, this.Sm = _0x387c27.Om;
            }, _0xe768de[_0x1d12c0(0x72d)].en = function (_0x28b1d9) {
                this.Nm = _0x387c27.Om, this.Pm = _0x387c27.Om, this.Qm = _0x387c27.Om, this.Rm = _0x387c27.Om, this.Sm = _0x28b1d9 ? _0x387c27.Vm : _0x387c27.Um;
            }, _0xe768de[_0x1d12c0(0x72d)].Xm = function (_0x31862e, _0x543cea) {
                switch (_0x31862e) {
                case _0x387c27.Um:
                    return 0.9 + _0x543cea * 0.1;
                case _0x387c27.Vm:
                    return 0.4 + _0x543cea * 0.3;
                };
                return 0x1;
            }, _0xe768de[_0x1d12c0(0x72d)].Ym = function (_0x9f2a94, _0x6c64f) {
                switch (_0x9f2a94) {
                case _0x387c27.Um:
                    return 0.6 + _0x6c64f * 0.5;
                case _0x387c27.Vm:
                    return 0.3 + _0x6c64f * 0.3;
                };
                return 0x1;
            }, _0xe768de[_0x1d12c0(0x72d)].$m = function (_0x33dc9b, _0x3fcab9) {
                switch (_0x33dc9b) {
                case _0x387c27.Um:
                    return 0.9 + _0x3fcab9 * 0.1;
                case _0x387c27.Vm:
                    return 0.6 + _0x3fcab9 * 0.4;
                };
                return 0x1;
            }, _0xe768de;
        }()), _0xa914b4.uk = (function () {
            var _0x57c47b = _0x17b28a;

            function _0x3ab2b8(_0x1be523, _0x4dfeb6, _0x3e36a8, _0x5add39, _0x311d30) {
                this.gn = _0x1be523, this.hn = _0x4dfeb6, this.in = _0x3e36a8, this.jn = _0x5add39, this.kn = _0x311d30;
            }
            return _0x3ab2b8.tk = function (_0x4d53c4) {
                var _0xa5781e = _0x1c2b;
                return new _0x3ab2b8(_0x4d53c4[_0xa5781e(0x8a6)], _0x4d53c4[_0xa5781e(0x208)], _0x4d53c4.nonbuyable, _0x4d53c4[_0xa5781e(0x4ea)], _0x4d53c4[_0xa5781e(0x1c0)]);
            }, _0x3ab2b8.vk = function (_0x784f62) {
                var _0xd48a22 = _0x1c2b;
                return new _0x3ab2b8(_0x784f62[_0xd48a22(0x8a6)], _0x784f62[_0xd48a22(0x208)], _0x784f62[_0xd48a22(0x566)], _0x784f62[_0xd48a22(0x4ea)], _0x784f62.description);
            }, _0x3ab2b8[_0x57c47b(0x72d)].pk = function () {
                return this.gn;
            }, _0x3ab2b8[_0x57c47b(0x72d)].sk = function () {
                return this.hn;
            }, _0x3ab2b8.prototype.qk = function () {
                return this.in;
            }, _0x3ab2b8[_0x57c47b(0x72d)].ln = function () {
                return this.jn;
            }, _0x3ab2b8.prototype.mn = function () {
                return this.kn;
            }, _0x3ab2b8;
        }()), _0xa914b4.Zf = (function () {
            var _0x2b45e7 = _0x17b28a;

            function _0x2abd5c(_0x1e4af4) {
                var _0x34dc61 = _0x1c2b;
                this.nn = {};

                function _0x4eb676() {
                    var _0x3e1c73 = _0x1c2b,
                        _0x89fc74 = ['https://wormx.store/images/arkaplan/bg1.jpg', _0x3e1c73(0x1f1), _0x3e1c73(0x652)],
                        _0x17379a = localStorage[_0x3e1c73(0x21e)](_0x3e1c73(0x1dc)),
                        _0x1a42a3 = _0x89fc74[_0x3e1c73(0x322)](_0x24f1d3 => _0x24f1d3 !== _0x17379a),
                        _0x23632c = _0x1a42a3[Math[_0x3e1c73(0x676)](Math[_0x3e1c73(0x2b7)]() * _0x1a42a3[_0x3e1c73(0x56a)])];
                    return localStorage[_0x3e1c73(0x510)](_0x3e1c73(0x1dc), _0x23632c), _0x23632c;
                }
                var _0x6b113d = _0x51599b.k.m[_0x34dc61(0x75c)](_0x4eb676());
                this.nn[_0x5a1287] = _0x6b113d;
                var _0xc8014c = _0x51599b.k.q[_0x34dc61(0x75c)](_0x245ac3, _0x5cc1a3, this.nn);
                this._f = new _0x51599b.k.v(_0x40c2cb, _0xc8014c), this._f.blendMode = _0x51599b.k.w.B, this._f[_0x34dc61(0x8c4)] = 0.6;
            }
            var _0x1f0d66 = _0x2b45e7(0x697) + _0x1a7a89.xa(),
                _0x2e8939 = 'a2_' + _0x1a7a89.xa(),
                _0x12f3b2 = _0x2b45e7(0x6a6),
                _0xe0f9ac = _0x2b45e7(0x575),
                _0x5a1287 = _0x2b45e7(0x5f0) + _0x1a7a89.xa(),
                _0x34a4f0 = _0x2b45e7(0x84e) + _0x1a7a89.xa(),
                _0x5d0a6b = _0x2b45e7(0x568) + _0x1a7a89.xa(),
                _0x40c2cb = new _0x51599b.k.u()[_0x2b45e7(0x221)](_0x1f0d66, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2)[_0x2b45e7(0x221)](_0x2e8939, [0x0, 0x0, 0x1, 0x0, 0x1, 0x1, 0x0, 0x0, 0x1, 0x1, 0x0, 0x1], 0x2),
                _0x245ac3 = _0x2b45e7(0x772) + _0x1f0d66 + _0x2b45e7(0x1d9) + _0x2e8939 + '; uniform mat3 ' + _0x12f3b2 + '; uniform mat3 ' + _0xe0f9ac + '; uniform vec4 ' + _0x34a4f0 + '; varying vec2 ' + _0x5d0a6b + _0x2b45e7(0x3f5) + _0x5d0a6b + _0x2b45e7(0x593) + _0x2e8939 + _0x2b45e7(0x1e8) + _0xe0f9ac + _0x2b45e7(0x70b) + _0x12f3b2 + ' * vec3(' + _0x1f0d66 + _0x2b45e7(0x6c6) + _0x34a4f0 + '; vec2 uv = ' + _0x2e8939 + _0x2b45e7(0x650) + _0x5d0a6b + _0x2b45e7(0x289),
                _0x5cc1a3 = _0x2b45e7(0x53e) + _0x5d0a6b + _0x2b45e7(0x8d4) + _0x5a1287 + '; void main() { gl_FragColor = texture2D(' + _0x5a1287 + ', ' + _0x5d0a6b + '); }';
            return _0x2abd5c[_0x2b45e7(0x72d)].tg = function (_0x12ecd7, _0x48daf0) {
                var _0x195d53 = _0x2b45e7;
                this._f[_0x195d53(0x495)].x = _0x12ecd7, this._f[_0x195d53(0x495)].y = _0x48daf0, this.nn[_0x34a4f0] = [_0x12ecd7, _0x48daf0, 0x1 / _0x12ecd7 + 0x1, 0x1 / _0x48daf0 + 0x1];
            }, _0x2abd5c;
        }()), _0xa914b4.th = (function () {
            var _0x24fbfb = _0x17b28a;

            function _0x496b44() {
                this.nn = {}, this.nn[_0x21e2ee] = [0x1, 0.5, 0.25, 0.5], this.nn[_0x55eb34] = _0x51599b.k.n.WHITE, this.nn[_0x5506ce] = [0x0, 0x0], this.nn[_0x234f32] = [0x0, 0x0];
                var _0x29eab1 = _0x51599b.k.q.from(_0x17bc34, _0x3bc422, this.nn);
                this._f = new _0x51599b.k.v(_0x1fdde7, _0x29eab1);
            }
            var _0x99b19d = _0x24fbfb(0x697) + _0x1a7a89.xa(),
                _0x54b72d = _0x24fbfb(0x78f) + _0x1a7a89.xa(),
                _0xb7b08d = _0x24fbfb(0x6a6),
                _0x2ef2df = _0x24fbfb(0x575),
                _0x21e2ee = _0x24fbfb(0x5f0) + _0x1a7a89.xa(),
                _0x55eb34 = _0x24fbfb(0x84e) + _0x1a7a89.xa(),
                _0x5506ce = 'u5_' + _0x1a7a89.xa(),
                _0x234f32 = _0x24fbfb(0x1eb) + _0x1a7a89.xa(),
                _0x428813 = _0x24fbfb(0x568) + _0x1a7a89.xa(),
                _0x1fdde7 = new _0x51599b.k.u()[_0x24fbfb(0x221)](_0x99b19d, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2)[_0x24fbfb(0x221)](_0x54b72d, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2),
                _0x17bc34 = 'precision mediump float; attribute vec2 ' + _0x99b19d + _0x24fbfb(0x1d9) + _0x54b72d + _0x24fbfb(0x8cd) + _0xb7b08d + '; uniform mat3 ' + _0x2ef2df + _0x24fbfb(0x7dc) + _0x428813 + _0x24fbfb(0x5dc) + _0x428813 + '=' + _0x54b72d + _0x24fbfb(0x689) + _0x2ef2df + '*' + _0xb7b08d + '*vec3(' + _0x99b19d + ', 1.0)).xy, 0.0, 1.0); }',
                _0x3bc422 = _0x24fbfb(0x53e) + _0x428813 + _0x24fbfb(0x86e) + _0x21e2ee + '; uniform sampler2D ' + _0x55eb34 + '; uniform vec2 ' + _0x5506ce + '; uniform vec2 ' + _0x234f32 + _0x24fbfb(0x5c5) + _0x55eb34 + ', ' + _0x428813 + '*' + _0x5506ce + '+' + _0x234f32 + '); vec4 colorMix=' + _0x21e2ee + _0x24fbfb(0x522);
            return _0x496b44[_0x24fbfb(0x72d)].nd = function (_0xc422c7, _0x571fac, _0x1a165b, _0x325270) {
                var _0x4ff494 = this.nn[_0x21e2ee];
                _0x4ff494[0x0] = _0xc422c7, _0x4ff494[0x1] = _0x571fac, _0x4ff494[0x2] = _0x1a165b, _0x4ff494[0x3] = _0x325270;
            }, _0x496b44[_0x24fbfb(0x72d)].Hh = function (_0x3ee73b) {
                this.nn[_0x55eb34] = _0x3ee73b;
            }, _0x496b44[_0x24fbfb(0x72d)].Bg = function (_0x3003a0, _0x2a49b7, _0xaea0ab, _0x5d4612) {
                var _0x2101a5 = _0x24fbfb;
                this._f[_0x2101a5(0x8cf)].x = _0x3003a0, this._f[_0x2101a5(0x8cf)].y = _0x2a49b7, this._f[_0x2101a5(0x495)].x = _0xaea0ab, this._f[_0x2101a5(0x495)].y = _0x5d4612;
                var _0x49f6b3 = this.nn[_0x5506ce];
                _0x49f6b3[0x0] = _0xaea0ab * 0.2520615384615385, _0x49f6b3[0x1] = _0x5d4612 * 0.4357063736263738;
                var _0x1e0c20 = this.nn[_0x234f32];
                _0x1e0c20[0x0] = _0x3003a0 * 0.2520615384615385, _0x1e0c20[0x1] = _0x2a49b7 * 0.4357063736263738;
            }, _0x496b44;
        }()), _0xa914b4.bd = (function () {
            var _0x273172 = _0x17b28a;

            function _0x347521() {
                this.gd = new _0x51599b.k.s(), this.pn = 0x0, this.qn = 0x0;
            }
            return _0x347521[_0x273172(0x72d)].kd = function (_0x1a1bad) {
                var _0x45273c = _0x273172;
                this.gd[_0x45273c(0x69c)] = _0x1a1bad.nb(), this.gd.anchor.set(_0x1a1bad.hb, _0x1a1bad.ib), this.pn = _0x1a1bad.jb, this.qn = _0x1a1bad.kb;
            }, _0x347521.prototype.nd = function (_0x4e1ee7) {
                var _0xd5970e = _0x273172;
                this.gd[_0xd5970e(0x561)] = parseInt(_0x4e1ee7[_0xd5970e(0x8b4)](0x1), 0x10);
            }, _0x347521[_0x273172(0x72d)].Bd = function (_0x137377) {
                var _0x39bde5 = _0x273172;
                this.gd.width = _0x137377 * this.pn, this.gd[_0x39bde5(0x2c1)] = _0x137377 * this.qn;
            }, _0x347521[_0x273172(0x72d)].Vd = function (_0x41c345) {
                var _0x3f23d6 = _0x273172;
                this.gd[_0x3f23d6(0x576)] = _0x41c345;
            }, _0x347521[_0x273172(0x72d)].Ud = function (_0x23acc2, _0x8c8c9a) {
                var _0x55a5dc = _0x273172;
                this.gd[_0x55a5dc(0x8cf)][_0x55a5dc(0x3e2)](_0x23acc2, _0x8c8c9a);
            }, _0x347521.prototype.Td = function (_0x3ae76d) {
                var _0x8ecdca = _0x273172;
                this.gd[_0x8ecdca(0x775)] = _0x3ae76d;
            }, _0x347521.prototype.Qd = function () {
                var _0x241aef = _0x273172;
                return this.gd[_0x241aef(0x775)];
            }, _0x347521[_0x273172(0x72d)].Rj = function (_0x1b9a81) {
                var _0x46c4e6 = _0x273172;
                this.gd[_0x46c4e6(0x8c4)] = _0x1b9a81;
            }, _0x347521[_0x273172(0x72d)].zd = function () {
                return this.gd;
            }, _0x347521.prototype.G = function () {
                _0x51599b.k.F.G(this.gd);
            }, _0x347521;
        }()), _0xa914b4.Ui = (function () {
            var _0x2d5167 = _0x17b28a;

            function _0x4d50ca(_0x28a667) {
                this.Qh = _0x28a667, this.ki = new _0xa914b4.Ui.Ti(), this.cj = false, this.bj = true, this.Fd = false, this.Id = 0x0, this.rn = 0x0, this.Lj = 0x1, this.Ld = 0x0, this.hi = 0x0, this.Nd = {}, this.Kd = 0x0, this.sn = new _0x51599b.j(_0x312d7c * 0x2), this.tn = new _0x51599b.j(_0x312d7c * 0x2), this.Jd = new _0x51599b.j(_0x312d7c * 0x2), this.un = null, this.vn = null, this.wn = null, this.xn();
            }
            var _0x312d7c = 0xc8;
            return _0x4d50ca[_0x2d5167(0x72d)].$i = function () {
                this.vn != null && _0x51599b.k.F.G(this.vn.Yc), this.wn != null && _0x51599b.k.F.G(this.wn);
            }, _0x4d50ca.prototype.xn = function () {
                this.fj(0.25), this.ki.Xa = '', this.bj = true, this.Nd = {}, this.Td(false);
            }, _0x4d50ca[_0x2d5167(0x72d)].Zi = function (_0x1fff92) {
                this.ki = _0x1fff92, this.yn(this.cj);
            }, _0x4d50ca[_0x2d5167(0x72d)].Td = function (_0x196904) {
                var _0x2e8e3e = this.cj;
                this.cj = _0x196904, this.yn(_0x2e8e3e);
            }, _0x4d50ca.prototype.fj = function (_0x4cfe68) {
                this.hi = _0x4cfe68 * 0x32;
                var _0x9273ca = _0x4cfe68;
                _0x4cfe68 > this.Qh.hh && (_0x9273ca = _0x1a7a89.sa((_0x4cfe68 - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh);
                var _0x38bf8f = _0x1a7a89.qa(_0x1a7a89.ra(_0x9273ca * 0x5, 0.707106781186548) * 0x4 + 0x19),
                    _0x3a80b4 = _0x1a7a89.ha(_0x312d7c, _0x1a7a89.ia(0x3, (_0x38bf8f - 0x5) * 0x5 + 0x1)),
                    _0x205db2 = this.Kd;
                this.Id = (0x5 + _0x38bf8f * 0.9) * 0.025, this.Kd = _0x1a7a89._(_0x3a80b4), this.rn = _0x3a80b4 - this.Kd;
                if (_0x205db2 > 0x0 && _0x205db2 < this.Kd) {
                    var _0x47cd54 = this.sn[_0x205db2 * 0x2 - 0x2],
                        _0x2dd093 = this.sn[_0x205db2 * 0x2 - 0x1],
                        _0x2df9c7 = this.tn[_0x205db2 * 0x2 - 0x2],
                        _0x431d10 = this.tn[_0x205db2 * 0x2 - 0x1],
                        _0x167fc6 = this.Jd[_0x205db2 * 0x2 - 0x2],
                        _0x1617f0 = this.Jd[_0x205db2 * 0x2 - 0x1];
                    for (var _0x3ed085 = _0x205db2; _0x3ed085 < this.Kd; _0x3ed085++) {
                        this.sn[_0x3ed085 * 0x2] = _0x47cd54, this.sn[_0x3ed085 * 0x2 + 0x1] = _0x2dd093, this.tn[_0x3ed085 * 0x2] = _0x2df9c7, this.tn[_0x3ed085 * 0x2 + 0x1] = _0x431d10, this.Jd[_0x3ed085 * 0x2] = _0x167fc6, this.Jd[_0x3ed085 * 0x2 + 0x1] = _0x1617f0;
                    }
                }
            }, _0x4d50ca.prototype.kj = function (_0x1d1a34, _0x55f1e5) {
                this.Kd = _0x55f1e5;
                for (var _0x20cb08 = 0x0; _0x20cb08 < this.Kd; _0x20cb08++) {
                    this.sn[_0x20cb08 * 0x2] = this.tn[_0x20cb08 * 0x2] = this.Jd[_0x20cb08 * 0x2] = _0x1d1a34(), this.sn[_0x20cb08 * 0x2 + 0x1] = this.tn[_0x20cb08 * 0x2 + 0x1] = this.Jd[_0x20cb08 * 0x2 + 0x1] = _0x1d1a34();
                }
            }, _0x4d50ca[_0x2d5167(0x72d)].hj = function (_0xa1e3e2, _0x15a79f, _0x2e1f91) {
                this.Fd = _0x2e1f91;
                for (var _0x5ae9fa = 0x0; _0x5ae9fa < this.Kd; _0x5ae9fa++) {
                    this.sn[_0x5ae9fa * 0x2] = this.tn[_0x5ae9fa * 0x2], this.sn[_0x5ae9fa * 0x2 + 0x1] = this.tn[_0x5ae9fa * 0x2 + 0x1];
                };
                var _0x469a5f = _0xa1e3e2 - this.tn[0x0],
                    _0x2acf5b = _0x15a79f - this.tn[0x1];
                this.zn(_0x469a5f, _0x2acf5b, this.Kd, this.tn);
            }, _0x4d50ca.prototype.zn = function (_0x358a85, _0x270d4f, _0x4d7edf, _0x448cbd) {
                var _0x3b9ab7 = _0x1a7a89.la(_0x358a85, _0x270d4f);
                if (!(_0x3b9ab7 <= 0x0)) {
                    var _0x340141, _0x5d5931 = _0x448cbd[0x0];
                    _0x448cbd[0x0] += _0x358a85;
                    var _0x254f4d, _0x140565 = _0x448cbd[0x1];
                    _0x448cbd[0x1] += _0x270d4f;
                    var _0x591a96 = this.Id / (this.Id + _0x3b9ab7),
                        _0x33f94b = 0x1 - _0x591a96 * 0x2;
                    for (var _0xa053e = 0x1, _0xa47ce8 = _0x4d7edf - 0x1; _0xa053e < _0xa47ce8; _0xa053e++) {
                        _0x340141 = _0x448cbd[_0xa053e * 0x2], _0x448cbd[_0xa053e * 0x2] = _0x448cbd[_0xa053e * 0x2 - 0x2] * _0x33f94b + (_0x340141 + _0x5d5931) * _0x591a96, _0x5d5931 = _0x340141, _0x254f4d = _0x448cbd[_0xa053e * 0x2 + 0x1], _0x448cbd[_0xa053e * 0x2 + 0x1] = _0x448cbd[_0xa053e * 0x2 - 0x1] * _0x33f94b + (_0x254f4d + _0x140565) * _0x591a96, _0x140565 = _0x254f4d;
                    };
                    _0x33f94b = 0x1 - (_0x591a96 = this.rn * this.Id / (this.rn * this.Id + _0x3b9ab7)) * 0x2, _0x448cbd[_0x4d7edf * 0x2 - 0x2] = _0x448cbd[_0x4d7edf * 0x2 - 0x4] * _0x33f94b + (_0x448cbd[_0x4d7edf * 0x2 - 0x2] + _0x5d5931) * _0x591a96, _0x448cbd[_0x4d7edf * 0x2 - 0x1] = _0x448cbd[_0x4d7edf * 0x2 - 0x3] * _0x33f94b + (_0x448cbd[_0x4d7edf * 0x2 - 0x1] + _0x140565) * _0x591a96;
                }
            }, _0x4d50ca.prototype.Oh = function () {
                return {
                    '_a': this.Jd[0x0],
                    'ab': this.Jd[0x1]
                };
            }, _0x4d50ca[_0x2d5167(0x72d)].dj = function (_0x58bb2e, _0x5c2087) {
                var _0x204ba4 = 0xf4240,
                    _0x44941e = _0x58bb2e,
                    _0xfbb272 = _0x5c2087;
                for (var _0x3f8fc5 = 0x0; _0x3f8fc5 < this.Kd; _0x3f8fc5++) {
                    var _0x3a491a = this.Jd[_0x3f8fc5 * 0x2],
                        _0x14447a = this.Jd[_0x3f8fc5 * 0x2 + 0x1],
                        _0x2814af = _0x1a7a89.la(_0x58bb2e - _0x3a491a, _0x5c2087 - _0x14447a);
                    _0x2814af < _0x204ba4 && (_0x204ba4 = _0x2814af, _0x44941e = _0x3a491a, _0xfbb272 = _0x14447a);
                };
                return {
                    '_a': _0x44941e,
                    'ab': _0xfbb272,
                    'ej': _0x204ba4
                };
            }, _0x4d50ca.prototype._i = function (_0x5e755c) {
                this.un = _0x5e755c;
            }, _0x4d50ca[_0x2d5167(0x72d)].Pj = function (_0x270b96, _0xabab83) {
                var _0x1fee58 = _0x2d5167;
                this.Lj = _0x1a7a89.ga(this.Lj, this.bj ? this.Fd ? 0.9 + _0x1a7a89.pa(_0x270b96 / 0x190 * _0x30354b.T) * 0.1 : 0x1 : 0x0, _0xabab83, 0x1 / 0x320), this.Ld = _0x1a7a89.ga(this.Ld, this.bj ? this.Fd ? 0x1 : 0x0 : 0x1, _0xabab83, 0.0025), this.vn != null && (this.vn.Yc[_0x1fee58(0x8c4)] = this.Lj), this.wn != null && (this.wn[_0x1fee58(0x8c4)] = this.Lj);
            }, _0x4d50ca[_0x2d5167(0x72d)].Qj = function (_0x3f6aec, _0x200bb5, _0x55e50d, _0x42bbe6) {
                if (this.cj && this.bj) {
                    var _0x2d22ca = _0x1a7a89.ra(0.11112, _0x200bb5 / 0x5f);
                    for (var _0x2cdf9f = 0x0; _0x2cdf9f < this.Kd; _0x2cdf9f++) {
                        var _0x36758d = _0x1a7a89.ka(this.sn[_0x2cdf9f * 0x2], this.tn[_0x2cdf9f * 0x2], _0x55e50d),
                            _0x19b343 = _0x1a7a89.ka(this.sn[_0x2cdf9f * 0x2 + 0x1], this.tn[_0x2cdf9f * 0x2 + 0x1], _0x55e50d);
                        this.Jd[_0x2cdf9f * 0x2] = _0x1a7a89.ka(_0x36758d, this.Jd[_0x2cdf9f * 0x2], _0x2d22ca), this.Jd[_0x2cdf9f * 0x2 + 0x1] = _0x1a7a89.ka(_0x19b343, this.Jd[_0x2cdf9f * 0x2 + 0x1], _0x2d22ca);
                    }
                };
                this.vn != null && this.cj && this.vn.Hd(this, _0x3f6aec, _0x200bb5, _0x42bbe6), this.wn != null && (this.wn.Rh.x = this.Jd[0x0], this.wn.Rh.y = this.Jd[0x1] - this.Id * 0x3);
            }, _0x4d50ca[_0x2d5167(0x72d)].yn = function (_0x598b92) {
                this.cj ? !_0x598b92 && this.An() : (this.vn != null && _0x51599b.k.F.G(this.vn.Yc), this.wn != null && _0x51599b.k.F.G(this.wn));
            }, _0x4d50ca[_0x2d5167(0x72d)].An = function () {
                var _0x3a5b3c = _0x2d5167;
                this.vn == null ? this.vn = new _0xa914b4.Xc() : _0x51599b.k.F.G(this.vn.Yc);
                this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), '#ffffff');
                this.wn == null ? (this.wn = new _0xa914b4.Bn(''), this.wn[_0x3a5b3c(0x45d)][_0x3a5b3c(0x506)] = _0x3a5b3c(0x759), this.wn[_0x3a5b3c(0x1cc)][_0x3a5b3c(0x3e2)](0.5)) : _0x51599b.k.F.G(this.wn);
                this.wn.style[_0x3a5b3c(0x494)] = 0xe, this.wn[_0x3a5b3c(0x45d)][_0x3a5b3c(0x424)] = ooo.ud.Cc().Tb(this.ki.ni).cc, this.wn[_0x3a5b3c(0x2df)] = this.ki.Xa, this.un.Xh(this.ki.Je, this.vn, this.wn);
                if (_0x5a0b1f.n != null && _0x5a0b1f.n.Je == this.ki.Je) {
                    _0x5a0b1f.vj = this.wn;
                    let _0x569478 = _0x2e052d.sg.indexOf(_0x5a0b1f.n.ni);
                    _0x569478 == -0x1 ? _0x2e052d.ig != -0x1 && (_0x2e052d.ig = -0x1) : (_0x2e052d.ig = _0x2e052d.gg[_0x569478].s, _0x2e052d.re = false, _0x15410a());
                }
            }, _0x4d50ca.Ti = function _0x447f0a() {
                this.Je = 0x0, this.mi = _0xa914b4.dh.jh, this.ni = 0x0, this.Vi = 0x0, this.Wi = 0x0, this.Xi = 0x0, this.Yi = 0x0, this.Xa = '';
            }, _0x4d50ca;
        }()), _0xa914b4.Bn = _0x1a7a89.ca(_0x51599b.k.t, function (_0x257bbf, _0x142d95, _0xf4d190) {
            var _0x165a42 = _0x17b28a;
            _0x51599b.k.t[_0x165a42(0x670)](this, _0x257bbf, _0x142d95, _0xf4d190), this.Rh = {
                'x': 0x0,
                'y': 0x0
            };
        }), _0xa914b4.Sb = (function () {
            var _0x1be54f = _0x17b28a;

            function _0x66f491(_0x290e6f, _0x25fb1f, _0x43bde8, _0x5ee019, _0x501c85) {
                this.Tj = _0x290e6f, this.Uj = _0x25fb1f, this.Vj = _0x43bde8, this.Wj = _0x5ee019, this.Xj = _0x501c85;
            }
            return _0x66f491[_0x1be54f(0x72d)].Cn = function (_0x3a7714) {
                return new _0x66f491(_0x3a7714, this.Uj, this.Vj, this.Wj, this.Xj);
            }, _0x66f491[_0x1be54f(0x72d)].Dn = function (_0x329738) {
                return new _0x66f491(this.Tj, _0x329738, this.Vj, this.Wj, this.Xj);
            }, _0x66f491[_0x1be54f(0x72d)].En = function (_0x5a807a) {
                return new _0x66f491(this.Tj, this.Uj, _0x5a807a, this.Wj, this.Xj);
            }, _0x66f491[_0x1be54f(0x72d)].Fn = function (_0x1868d3) {
                return new _0x66f491(this.Tj, this.Uj, this.Vj, _0x1868d3, this.Xj);
            }, _0x66f491.prototype.Gn = function (_0x1c636e) {
                return new _0x66f491(this.Tj, this.Uj, this.Vj, this.Wj, _0x1c636e);
            }, _0x66f491;
        }()), _0xa914b4.Bm = (function () {
            var _0x3453b3 = _0x17b28a;

            function _0x43ffbc(_0x480cab) {
                var _0x4ad921 = _0x1c2b;
                this.Hn = new _0xa914b4.Xc(), this.Hn.Yc[_0x4ad921(0x1c1)](this.Hn.Zc), this.In = null, this.Jn = null, this.Jm = _0x480cab, this.$c = 0x0, this.mj = 0x1, this.Kn = 0x1, this.Ln = 0x1, this.Mn = 0x1, this.Nn = 0x1, this.On = 0x1, this.Pn = 0x1, this.Hm(_0x4ad921(0x229));
            }
            var _0x108783 = new _0xa914b4.Sb(0x0, 0x0, 0x0, 0x0, 0x0);
            return _0x43ffbc[_0x3453b3(0x72d)].ag = function () {
                return this.Hn.Yc;
            }, _0x43ffbc[_0x3453b3(0x72d)].Cm = function (_0x46d4e1) {
                var _0x4d55e3 = _0x3453b3;
                this.$c = _0x46d4e1;
                if (this.Hn.$c !== _0x46d4e1) {
                    for (var _0x20a109 = _0x46d4e1; _0x20a109 < this.Hn._c[_0x4d55e3(0x56a)]; _0x20a109++) {
                        this.Hn._c[_0x20a109].Cd();
                    };
                    while (this.Hn.$c > _0x46d4e1) {
                        this.Hn.$c -= 0x1;
                        var _0x2bad4c = this.Hn._c[this.Hn.$c];
                        _0x2bad4c.md.G(), _0x2bad4c.ld.G();
                    };
                    while (this.Hn.$c < _0x46d4e1) {
                        var _0x529152 = this.Hn._c[this.Hn.$c];
                        this.Hn.$c += 0x1, this.Hn.Yc[_0x4d55e3(0x1c1)](_0x529152.ld.zd()), this.Hn.Yc[_0x4d55e3(0x1c1)](_0x529152.md.zd()), _0x529152.ld.Rj(this.Kn), _0x529152.md.Rj(this.Ln);
                    };
                    for (var _0x13128f = 0x0; _0x13128f < this.Hn.Zc.od[_0x4d55e3(0x56a)]; _0x13128f++) {
                        this.Hn.Zc.od[_0x13128f].Rj(this.Mn);
                    };
                    for (var _0x43af45 = 0x0; _0x43af45 < this.Hn.Zc.pd[_0x4d55e3(0x56a)]; _0x43af45++) {
                        this.Hn.Zc.pd[_0x43af45].Rj(this.Nn);
                    };
                    for (var _0x1e5561 = 0x0; _0x1e5561 < this.Hn.Zc.rd[_0x4d55e3(0x56a)]; _0x1e5561++) {
                        this.Hn.Zc.rd[_0x1e5561].Rj(this.On);
                    };
                    for (var _0x2d3fc1 = 0x0; _0x2d3fc1 < this.Hn.Zc.qd[_0x4d55e3(0x56a)]; _0x2d3fc1++) {
                        this.Hn.Zc.qd[_0x2d3fc1].Rj(this.Pn);
                    }
                }
            }, _0x43ffbc[_0x3453b3(0x72d)].Im = function () {
                return this.$c;
            }, _0x43ffbc[_0x3453b3(0x72d)].Gm = function (_0x54c3e6) {
                var _0x3e0df8 = _0x3453b3;
                this.In = _0x54c3e6, this.Jn = _0x3e0df8(0x229), this.Tm();
            }, _0x43ffbc[_0x3453b3(0x72d)].Hm = function (_0x33889f) {
                this.In = _0x108783, this.Jn = _0x33889f, this.Tm();
            }, _0x43ffbc[_0x3453b3(0x72d)].Tm = function () {
                this.Hn.hd(_0xa914b4.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
            }, _0x43ffbc.prototype.Dm = function (_0x331c80) {
                this.mj = _0x331c80;
            }, _0x43ffbc[_0x3453b3(0x72d)].Km = function () {
                return this.mj;
            }, _0x43ffbc[_0x3453b3(0x72d)].Wm = function (_0xd3999f, _0x572d08) {
                this.Kn = _0xd3999f, this.Ln = _0x572d08;
                for (var _0x22af5c = 0x0; _0x22af5c < this.$c; _0x22af5c++) {
                    var _0x229f5b = this.Hn._c[_0x22af5c];
                    _0x229f5b.ld.Rj(this.Kn), _0x229f5b.md.Rj(this.Ln);
                }
            }, _0x43ffbc.prototype.Zm = function (_0x1cfbc6, _0x235dd6, _0x4bb7c7, _0x80d17a) {
                var _0x5292b1 = _0x3453b3;
                this.Mn = _0x1cfbc6, this.Nn = _0x235dd6, this.On = _0x4bb7c7, this.Pn = _0x80d17a;
                for (var _0x11cc37 = 0x0; _0x11cc37 < this.Hn.Zc.od[_0x5292b1(0x56a)]; _0x11cc37++) {
                    this.Hn.Zc.od[_0x11cc37].Rj(this.Mn);
                };
                for (var _0x1e726a = 0x0; _0x1e726a < this.Hn.Zc.pd[_0x5292b1(0x56a)]; _0x1e726a++) {
                    this.Hn.Zc.pd[_0x1e726a].Rj(this.Nn);
                };
                for (var _0x1e541b = 0x0; _0x1e541b < this.Hn.Zc.rd[_0x5292b1(0x56a)]; _0x1e541b++) {
                    this.Hn.Zc.rd[_0x1e541b].Rj(this.On);
                };
                for (var _0x148f95 = 0x0; _0x148f95 < this.Hn.Zc.qd[_0x5292b1(0x56a)]; _0x148f95++) {
                    this.Hn.Zc.qd[_0x148f95].Rj(this.Pn);
                }
            }, _0x43ffbc[_0x3453b3(0x72d)].Bg = function () {
                var _0xfa64ed = this.mj * 0x2,
                    _0x46b4b0 = this.mj * 0x2 * 1.5;
                if (this.$c > 0x0) {
                    var _0x3b2a5a = this.Jm[0x0],
                        _0x25a534 = this.Jm[0x1],
                        _0x10a4f2 = this.Jm[0x2];
                    this.Hn._c[0x0].Ad(_0x3b2a5a, _0x25a534, _0xfa64ed, _0x46b4b0, _0x10a4f2), this.Hn.Zc.Ad(_0x3b2a5a, _0x25a534, _0xfa64ed, _0x10a4f2);
                };
                for (var _0x50567e = 0x1; _0x50567e < this.$c; _0x50567e++) {
                    var _0x14d4e2 = this.Jm[_0x50567e * 0x3],
                        _0x43e56b = this.Jm[_0x50567e * 0x3 + 0x1],
                        _0x3788a0 = this.Jm[_0x50567e * 0x3 + 0x2];
                    this.Hn._c[_0x50567e].Ad(_0x14d4e2, _0x43e56b, _0xfa64ed, _0x46b4b0, _0x3788a0);
                }
            }, _0x43ffbc[_0x3453b3(0x72d)]._m = function (_0x4c104f) {
                var _0x360aab = _0x3453b3;
                _0x4c104f[_0x360aab(0x31e)](this.Hn.Yc);
            }, _0x43ffbc;
        }()), _0xa914b4.Uf = (function () {
            var _0x169004 = _0x17b28a;

            function _0x2a7303(_0xcc8bdf) {
                this.Wd = _0xcc8bdf;
            }
            return _0x2a7303.Tf = $('#background-canvas'), _0x2a7303.Qn = $(_0x169004(0x489)), _0x2a7303.Rn = $(_0x169004(0x2c7)), _0x2a7303.Sn = $(_0x169004(0x4b2)), _0x2a7303.Tn = $('#game-view'), _0x2a7303.Un = $(_0x169004(0x2f7)), _0x2a7303.Vn = $('#main-menu-view'), _0x2a7303.Wn = $(_0x169004(0x823)), _0x2a7303.Xn = $('#toaster-view'), _0x2a7303.Yn = $(_0x169004(0x417)), _0x2a7303.Zn = $(_0x169004(0x735)), _0x2a7303.$n = $(_0x169004(0x85f)), _0x2a7303._n = $('#error-game-connection-view'), _0x2a7303.prototype.Sa = function () {}, _0x2a7303[_0x169004(0x72d)].ml = function () {}, _0x2a7303[_0x169004(0x72d)].nl = function () {}, _0x2a7303[_0x169004(0x72d)].hl = function () {}, _0x2a7303[_0x169004(0x72d)].qg = function () {}, _0x2a7303[_0x169004(0x72d)].ug = function (_0x18705e, _0x15c4a8) {}, _0x2a7303;
        }()), _0x340522 = $(_0x17b28a(0x283)), _0x1a3591 = $(_0x17b28a(0x616)), _0x419f39 = $('#congrats-bg'), _0x4d1e88 = $(_0x17b28a(0x3af)), _0x58fb66 = $(_0x17b28a(0x746)), _0x2a9bb1 = $(_0x17b28a(0x368)), _0x200c93 = $(_0x17b28a(0x24f)), _0x5e44c6 = $(_0x17b28a(0x2bc)), _0x272953 = $(_0x17b28a(0x474)), _0x288b76 = $(_0x17b28a(0x6da)), (_0x52da2e = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x3d5616 = _0x17b28a;
            _0xa914b4.Uf[_0x3d5616(0x670)](this, _0xa914b4.ll.ao);
            var _0x172a13 = this,
                _0x58107b = _0x288b76[_0x3d5616(0x64d)]()[0x0];
            _0x58fb66[_0x3d5616(0x846)](_0x30354b.co.bo), _0x340522[_0x3d5616(0x2df)](_0x1a7a89.U(_0x3d5616(0x7fe))), _0x1a3591[_0x3d5616(0x2df)](_0x1a7a89.U(_0x3d5616(0x305))), _0x1a3591[_0x3d5616(0x6bb)](_0x3d5616(0x302)), _0x1a3591.after(_0x3d5616(0x67e)), _0x1a3591[_0x3d5616(0x57b)](function () {
                ooo.ij.if(), _0x30354b.co.do.Va(), ooo.ij.Ye(_0xa914b4.Pe.Se.Jf), ooo.Xg.gl(ooo.Xg.Jf);
            }), $(_0x3d5616(0x641))[_0x3d5616(0x57b)](function () {
                ooo.ij.if(), ooo.to();
            });
            var _0x38efcd = [{
                    'url': 'bkgnd0.png'
                }, {
                    'url': 'bg_sky__6.png'
                }, {
                    'url': 'bg_sky_7.png'
                }, {
                    'url': _0x3d5616(0x2d9)
                }, {
                    'url': _0x3d5616(0x54d)
                }, {
                    'url': _0x3d5616(0x2ee)
                }, {
                    'url': _0x3d5616(0x49e)
                }, {
                    'url': _0x3d5616(0x56d)
                }, {
                    'url': _0x3d5616(0x587)
                }, {
                    'url': _0x3d5616(0x4b9)
                }, {
                    'url': _0x3d5616(0x31d)
                }, {
                    'url': 'bg_sky_12.png'
                }],
                _0x52ab02 = 0x0;

            function _0x335892() {
                var _0x21d7ec = _0x3d5616;
                _0x52ab02 = (_0x52ab02 + 0x1) % _0x38efcd[_0x21d7ec(0x56a)];
                var _0x49c965 = _0x38efcd[_0x52ab02].url,
                    _0x4ac1b7 = _0x2e052d[_0x21d7ec(0x403)] + _0x21d7ec(0x359) + _0x49c965;
                _0x2e052d[_0x21d7ec(0x728)] = _0x4ac1b7, localStorage[_0x21d7ec(0x510)](_0x21d7ec(0x4e9), JSON.stringify(_0x2e052d));
                try {
                    PIXI.utils[_0x21d7ec(0x55a)][_0x4ac1b7] && (PIXI[_0x21d7ec(0x28a)][_0x21d7ec(0x55a)][_0x4ac1b7].destroy(true), delete PIXI.utils[_0x21d7ec(0x55a)][_0x4ac1b7]);
                    if (typeof ooo !== _0x21d7ec(0x76e) && ooo.ef && ooo.ef.fn_o) {
                        var _0x41bb2f = ooo.ef[_0x21d7ec(0x6c9)](_0x4ac1b7);
                        ooo.ef[_0x21d7ec(0x254)] = new PIXI.Texture(_0x41bb2f);
                    } else typeof PIXI !== _0x21d7ec(0x76e) && (ooo.ef[_0x21d7ec(0x254)] = PIXI[_0x21d7ec(0x2a0)][_0x21d7ec(0x75c)](_0x4ac1b7));
                    ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.sh && ooo.Xg.Kf.Wg.sh.Hh(ooo.ef[_0x21d7ec(0x254)]);
                } catch (_0xcae055) {
                    console[_0x21d7ec(0x308)](_0x21d7ec(0x3fd), _0xcae055);
                }
            }
            let _0x547a1c = {
                'left': false,
                'right': false
            };

            function _0x39228d() {
                var _0x11a28c = _0x3d5616;
                _0x2e052d.hz && !_0x2e052d[_0x11a28c(0x800)] && (_0x547a1c[_0x11a28c(0x841)] && _0x2e052d.z >= 0.2 && (_0x2e052d.z = _0x2e052d.z - 0.05), _0x547a1c[_0x11a28c(0x38b)] && _0x2e052d.z <= 0x19 && (_0x2e052d.z = _0x2e052d.z + 0.05)), requestAnimationFrame(_0x39228d);
            }
            $(_0x3d5616(0x6bb)).keydown(function (_0x32e966) {
                var _0x126c88 = _0x3d5616;
                (_0x32e966[_0x126c88(0x5f4)] !== 0x11 || !(_0x2e052d[_0x126c88(0x686)] = true)) && (_0x32e966.keyCode !== 0x11 && (_0x2e052d[_0x126c88(0x686)] = false));
                _0x32e966[_0x126c88(0x5f4)] === 0x35 && ((_0x2e052d.s || _0x5a0b1f.on) && _0x335892());
                (_0x32e966[_0x126c88(0x5f4)] == 0xbc || _0x32e966[_0x126c88(0x5f4)] == 0x25) && (_0x547a1c.left = true);
                (_0x32e966[_0x126c88(0x5f4)] == 0xbe || _0x32e966[_0x126c88(0x5f4)] == 0x27) && (_0x547a1c[_0x126c88(0x38b)] = true);
                _0x32e966[_0x126c88(0x5f4)] === 0x20 && (_0x172a13.eo = true);
                _0x32e966[_0x126c88(0x5f4)] === 0x31 && _0x565037();
                if (_0x32e966[_0x126c88(0x5f4)] === 0x32) {
                    if (_0x5a0b1f.on && _0x2e052d.s) {
                        if (_0x2e052d.selectedHats && _0x2e052d[_0x126c88(0x7aa)][_0x126c88(0x56a)] > 0x0) {
                            _0x2e052d[_0x126c88(0x407)] = (_0x2e052d[_0x126c88(0x407)] + 0x1) % _0x2e052d.selectedHats.length;
                            let _0x30886d = _0x2e052d[_0x126c88(0x7aa)][_0x2e052d[_0x126c88(0x407)]];
                            _0x22fbe9(_0x30886d), localStorage.setItem(_0x126c88(0x4e9), JSON[_0x126c88(0x562)](_0x2e052d));
                        }
                    }
                }
            }).keyup(function (_0x20a051) {
                var _0x3dbc29 = _0x3d5616;
                _0x2e052d[_0x3dbc29(0x686)] = false;
                (_0x20a051[_0x3dbc29(0x5f4)] == 0xbc || _0x20a051[_0x3dbc29(0x5f4)] == 0x25) && (_0x547a1c[_0x3dbc29(0x841)] = false);
                (_0x20a051[_0x3dbc29(0x5f4)] == 0xbe || _0x20a051[_0x3dbc29(0x5f4)] == 0x27) && (_0x547a1c[_0x3dbc29(0x38b)] = false);
                _0x5a0b1f.on && _0x2e052d.s && (_0x20a051[_0x3dbc29(0x5f4)] == 0x51 || _0x20a051[_0x3dbc29(0x5f4)] == 0x57 ? (_0x20a051.keyCode == 0x51 && (_0x4232ce[_0x3dbc29(0x69c)] = _0x4d18a9, _0x5ced67[_0x3dbc29(0x69c)] = _0x5136fb, _0x4232ce[_0x3dbc29(0x8c4)] = 0x1, _0x5ced67[_0x3dbc29(0x8c4)] = 0.25, _0x27477d()), _0x20a051[_0x3dbc29(0x5f4)] == 0x57 && (_0x5ced67.texture = _0x817ed8, _0x4232ce[_0x3dbc29(0x69c)] = _0x3620cf, _0x4232ce[_0x3dbc29(0x8c4)] = 0.25, _0x5ced67[_0x3dbc29(0x8c4)] = 0x1, _0x56c7df())) : (_0x5ced67[_0x3dbc29(0x69c)] = _0x5136fb, _0x4232ce[_0x3dbc29(0x69c)] = _0x3620cf, _0x5ced67[_0x3dbc29(0x8c4)] = 0.25, _0x4232ce.alpha = 0.25, _0x29be32 = false, _0xde2d1b = 0x37, _0x42a707 = 0x1, _0x4d76e0 = true, clearInterval(_0x3d582d), _0x3d582d = null), _0x20a051.keyCode == 0x5a && (_0x2e052d.z == 0x1 ? (_0x2e052d.h ? _0x2e052d.z = 1.6 : _0x2e052d.z = 1.2, _0x3282ce[_0x3dbc29(0x69c)] = _0x1d2074, _0x3282ce[_0x3dbc29(0x8c4)] = 0x1) : (_0x2e052d.z = 0x1, _0x3282ce.texture = _0x1c9a1c, _0x3282ce[_0x3dbc29(0x8c4)] = 0.25)));
                if (_0x5a0b1f.on && _0x20a051[_0x3dbc29(0x5f4)] == 0x52) {
                    !window[_0x3dbc29(0x84f)] && (window[_0x3dbc29(0x84f)] = 0x0);
                    const _0x554867 = new Date()[_0x3dbc29(0x2c4)](),
                        _0x1fafa3 = _0x554867 - window[_0x3dbc29(0x84f)];
                    if (_0x1fafa3 < 0x3e8) return;
                    window[_0x3dbc29(0x84f)] = _0x554867;
                    _0x2e052d.pi && _0x2e052d.pn && ($(_0x3dbc29(0x4f7))[_0x3dbc29(0x1ce)](_0x2e052d.pi), $(_0x3dbc29(0x6a1)).val(_0x2e052d.pn), $('#port_id')[_0x3dbc29(0x1ce)]($(_0x3dbc29(0x4f7))[_0x3dbc29(0x1ce)]()), $(_0x3dbc29(0x65f))[_0x3dbc29(0x1ce)]($(_0x3dbc29(0x6a1))[_0x3dbc29(0x1ce)]()));
                    _0x2e052d.r1 = true;
                    try {
                        if (ooo.Mh && typeof ooo.Mh.uj === _0x3dbc29(0x3d7)) {
                            ooo.Mh.uj(), setTimeout(function () {
                                var _0x31db99 = _0x3dbc29;
                                document.getElementById('mm-action-play')[_0x31db99(0x57b)]();
                            }, 0x12c);
                            return;
                        }
                    } catch (_0x42eae1) {}
                    try {
                        if (ooo.Mh && typeof ooo.Mh.gr === 'function') ooo.Mh.gr();
                        else {
                            if (ooo.Mh && ooo.Mh.Rq) {
                                try {
                                    ooo.Mh.go = 0x3;
                                } catch (_0xe15aa) {}
                                ooo.Mh.Rq.close();
                            }
                        }
                        setTimeout(function () {
                            var _0x409504 = _0x3dbc29;
                            try {
                                const _0x19b731 = document.querySelectorAll(_0x409504(0x4d2));
                                _0x19b731[_0x409504(0x3a6)](_0x937742 => {
                                    var _0x4a21f0 = _0x409504;
                                    try {
                                        _0x937742.style[_0x4a21f0(0x63d)] = _0x4a21f0(0x834);
                                    } catch (_0x1e82df) {}
                                });
                            } catch (_0x531976) {}
                            document[_0x409504(0x4e7)]('mm-action-play').click();
                        }, 0x15e);
                    } catch (_0xe0a59b) {
                        document.getElementById(_0x3dbc29(0x8a0)).click();
                    }
                }
                _0x5a0b1f.on && _0x20a051[_0x3dbc29(0x5f4)] == 0x38 && (document[_0x3dbc29(0x4e7)](_0x3dbc29(0x79f))[_0x3dbc29(0x57b)](), _0x2e052d.sn ? _0x2e052d.sn = ![] : _0x2e052d.sn = true), _0x20a051.keyCode === 0x20 && (_0x172a13.eo = false);
            }), _0x39228d(), window[_0x3d5616(0x49c)](_0x3d5616(0x4d1), function () {
                var _0x307812 = _0x3d5616;
                if (_0x2e052d[_0x307812(0x728)]) {
                    var _0x3de4b9 = _0x2e052d.background;
                    for (var _0x3c036b = 0x0; _0x3c036b < _0x38efcd.length; _0x3c036b++) {
                        if (_0x38efcd[_0x3c036b][_0x307812(0x3ca)] === _0x3de4b9) {
                            _0x52ab02 = _0x3c036b;
                            break;
                        }
                    }
                }
            }), _0x58107b[_0x3d5616(0x49c)](_0x3d5616(0x348), function (_0x30a051) {
                var _0x3d32b8 = _0x3d5616;
                if (_0x5a0b1f.on && _0x2e052d[_0x3d32b8(0x800)] && _0x2e052d.mo != 0x6 && _0x2e052d.s) {
                    var _0x1606eb = btoa(_0x2e052d.c_1);
                    if (_0x2e052d[_0x3d32b8(0x635)].x != -0x1 && _0x2e052d[_0x3d32b8(0x635)].y == -0x1 && btoa(_0x1606eb) == _0x2e052d[_0x3d32b8(0x4f3)] || _0x2e052d.mo2.x == -0x1 && _0x2e052d[_0x3d32b8(0x734)].y != -0x1 && btoa(_0x1606eb) == _0x2e052d[_0x3d32b8(0x4f3)]) {
                        var _0x7711e = ooo.Xg.Kf.Wg.Ah,
                            _0x51b2b1 = _0x58107b[_0x3d32b8(0x853)],
                            _0x233296 = _0x58107b[_0x3d32b8(0x767)],
                            _0x160549 = _0x51b2b1 * 0.5,
                            _0x213ca4 = _0x233296 * 0.5,
                            _0x4fcc99 = btoa(_0x2e052d[_0x3d32b8(0x38c)]);
                        for (let _0x44daa2 = 0x0; _0x44daa2 < _0x30a051[_0x3d32b8(0x27b)][_0x3d32b8(0x56a)]; _0x44daa2++) {
                            var _0x159bea = _0x30a051.changedTouches[_0x44daa2][_0x3d32b8(0x4a7)],
                                _0x25851d = _0x30a051.changedTouches[_0x44daa2].pageY,
                                _0x12a30e = _0x30a051[_0x3d32b8(0x27b)][_0x44daa2][_0x3d32b8(0x24b)];
                            _0x2e052d.mo == 0x1 && btoa(_0x4fcc99) == _0x2e052d[_0x3d32b8(0x1d6)] && (_0x51b2b1 *= 0.5, _0x233296 *= 0.5);
                            _0x2e052d.mo == 0x2 && btoa(_0x4fcc99) == _0x2e052d[_0x3d32b8(0x1d6)] && (_0x51b2b1 = _0x7711e[_0x3d32b8(0x327)].y + 0x6e, _0x233296 = _0x7711e[_0x3d32b8(0x327)].x + 0x6e);
                            _0x2e052d.mo == 0x3 && btoa(_0x4fcc99) == _0x2e052d[_0x3d32b8(0x1d6)] && (_0x51b2b1 = _0x7711e[_0x3d32b8(0x7b2)].y + 0x6e, _0x233296 = _0x7711e[_0x3d32b8(0x7b2)].x + 0x6e);
                            (_0x2e052d.mo == 0x4 && btoa(_0x4fcc99) == _0x2e052d[_0x3d32b8(0x1d6)] || _0x2e052d.mo == 0x5 && btoa(_0x4fcc99) == _0x2e052d[_0x3d32b8(0x1d6)]) && (_0x51b2b1 = _0x7711e.img_o_4.y + 0x6e, _0x233296 = _0x7711e[_0x3d32b8(0x24e)].x + 0x6e);
                            var _0x20624a = btoa(_0x2e052d[_0x3d32b8(0x741)]),
                                _0xc429da = Math[_0x3d32b8(0x7d5)](_0x25851d - _0x51b2b1, _0x159bea - _0x233296),
                                _0x471aea = Math[_0x3d32b8(0x383)](_0xc429da),
                                _0x53466a = Math[_0x3d32b8(0x701)](_0xc429da),
                                _0x3a5ced = btoa(_0x2e052d[_0x3d32b8(0x5ff)]),
                                _0x33ffb7 = _0x2e052d[_0x3d32b8(0x635)].x == _0x12a30e;
                            btoa(_0x2e052d[_0x3d32b8(0x1f2)]);
                            if (_0x33ffb7 && btoa(_0x3a5ced) == _0x2e052d[_0x3d32b8(0x4e2)]) {
                                if (_0x159bea <= 0x0 || _0x25851d <= 0x0) _0x2e052d.mo1.x = -0x1, _0x2e052d.mo == 0x1 && (_0x7711e.img_p_1[_0x3d32b8(0x8c4)] = 0.25), _0x2e052d.mo == 0x2 && (_0x7711e[_0x3d32b8(0x327)][_0x3d32b8(0x8c4)] = 0.25, _0x7711e[_0x3d32b8(0x8ab)][_0x3d32b8(0x8c4)] = 0.25, _0x7711e.img_p_2[_0x3d32b8(0x8c4)] = 0.25), _0x2e052d.mo == 0x3 && (_0x7711e[_0x3d32b8(0x7b2)].alpha = 0.25, _0x7711e[_0x3d32b8(0x87d)][_0x3d32b8(0x8c4)] = 0.25, _0x7711e[_0x3d32b8(0x55d)][_0x3d32b8(0x8c4)] = 0.25), (_0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x7711e[_0x3d32b8(0x3b6)][_0x3d32b8(0x8c4)] = 0.25);
                                else {
                                    _0x172a13.fo = _0xc429da;
                                    var _0xeeb67 = 0x32;
                                    (_0x2e052d.mo == 0x1 || _0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0xeeb67 = 0x6e);
                                    var _0xd18fa8 = _0x233296 - _0x159bea,
                                        _0x59f91a = _0x51b2b1 - _0x25851d,
                                        _0x604d9 = Math.sqrt(_0xd18fa8 * _0xd18fa8 + _0x59f91a * _0x59f91a),
                                        _0x17edba = _0x213ca4 + _0x604d9 * _0x471aea - 0x44,
                                        _0x581cb7 = _0x160549 + _0x604d9 * _0x53466a - 0x44,
                                        _0x13615c = _0x213ca4 + _0xeeb67 * _0x471aea - 0x44,
                                        _0x5b9a2b = _0x160549 + _0xeeb67 * _0x53466a - 0x44,
                                        _0x1b756d = _0x213ca4 + _0x471aea * 0x4b - 0x44,
                                        _0x15a62e = _0x160549 + _0x53466a * 0x4b - 0x44,
                                        _0x65cc1e = _0x159bea - 0x55,
                                        _0x5e91f6 = _0x25851d - 0x55,
                                        _0x37e17e = _0x233296 + _0xeeb67 * _0x471aea - 0x55,
                                        _0x4eba53 = _0x51b2b1 + _0xeeb67 * _0x53466a - 0x55,
                                        _0x1e78e1 = _0x233296 + _0x471aea * 0x3 - 0x6e,
                                        _0x4d1b48 = _0x51b2b1 + _0x53466a * 0x3 - 0x6e;
                                    _0x604d9 < _0xeeb67 ? (_0x2e052d[_0x3d32b8(0x734)].x == -0x1 && _0x2e052d.mo2.y != -0x1 ? (_0x7711e[_0x3d32b8(0x87f)].x = _0x17edba, _0x7711e[_0x3d32b8(0x87f)].y = _0x581cb7) : (_0x2e052d.mo == 0x1 && (_0x7711e[_0x3d32b8(0x29d)].x = _0x17edba, _0x7711e[_0x3d32b8(0x29d)].y = _0x581cb7), (_0x2e052d.mo == 0x2 || _0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x7711e.img_p_2.x = _0x17edba, _0x7711e[_0x3d32b8(0x3b6)].y = _0x581cb7), _0x2e052d.mo == 0x3 && (_0x7711e[_0x3d32b8(0x55d)].x = _0x17edba, _0x7711e.img_p_3.y = _0x581cb7)), _0x2e052d.mo == 0x2 && (_0x7711e.img_i_2.y = _0x5e91f6, _0x7711e.img_i_2.x = _0x65cc1e), _0x2e052d.mo == 0x3 && (_0x7711e[_0x3d32b8(0x87d)].y = _0x5e91f6, _0x7711e[_0x3d32b8(0x87d)].x = _0x65cc1e)) : (_0x2e052d[_0x3d32b8(0x734)].x == -0x1 && _0x2e052d.mo2.y != -0x1 ? (_0x7711e[_0x3d32b8(0x87f)].x = _0x13615c, _0x7711e[_0x3d32b8(0x87f)].y = _0x5b9a2b, (_0x2e052d.mo == 0x2 || _0x2e052d.mo == 0x3) && (_0x604d9 < 0x4b ? (_0x7711e[_0x3d32b8(0x87f)].x = _0x17edba, _0x7711e.img_pf_1.y = _0x581cb7) : (_0x7711e.img_pf_1.x = _0x1b756d, _0x7711e.img_pf_1.y = _0x15a62e))) : (_0x2e052d.mo == 0x1 && (_0x7711e[_0x3d32b8(0x29d)].x = _0x13615c, _0x7711e[_0x3d32b8(0x29d)].y = _0x5b9a2b), (_0x2e052d.mo == 0x2 || _0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x7711e.img_p_2.x = _0x13615c, _0x7711e[_0x3d32b8(0x3b6)].y = _0x5b9a2b, _0x2e052d.mo == 0x2 && (_0x604d9 < 0x4b ? (_0x7711e.img_p_2.x = _0x17edba, _0x7711e.img_p_2.y = _0x581cb7) : (_0x7711e[_0x3d32b8(0x3b6)].x = _0x1b756d, _0x7711e[_0x3d32b8(0x3b6)].y = _0x15a62e))), _0x2e052d.mo == 0x3 && (_0x604d9 < 0x4b ? (_0x7711e.img_p_3.x = _0x17edba, _0x7711e.img_p_3.y = _0x581cb7) : (_0x7711e[_0x3d32b8(0x55d)].x = _0x1b756d, _0x7711e[_0x3d32b8(0x55d)].y = _0x15a62e))), _0x2e052d.mo == 0x2 && (_0x7711e.img_i_2.y = _0x4eba53, _0x7711e[_0x3d32b8(0x8ab)].x = _0x37e17e), _0x2e052d.mo == 0x3 && (_0x7711e.img_i_3.y = _0x4eba53, _0x7711e[_0x3d32b8(0x87d)].x = _0x37e17e, _0x7711e[_0x3d32b8(0x7b2)].y = _0x4d1b48, _0x7711e[_0x3d32b8(0x7b2)].x = _0x1e78e1));
                                }
                            } else {
                                if ((_0x33ffb7 = _0x2e052d.mo2.y == _0x12a30e) && btoa(_0x20624a) == _0x2e052d.d_5) {
                                    if (_0x159bea <= 0x0 || _0x25851d <= 0x0) _0x2e052d[_0x3d32b8(0x734)].y = -0x1, _0x7711e[_0x3d32b8(0x828)][_0x3d32b8(0x775)] = false, _0x7711e.img_pf_1[_0x3d32b8(0x775)] = false, _0x2e052d.mo == 0x1 && (_0x7711e[_0x3d32b8(0x29d)][_0x3d32b8(0x775)] = true), (_0x2e052d.mo == 0x2 || _0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x7711e.img_p_2.visible = true), _0x2e052d.mo == 0x3 && (_0x7711e[_0x3d32b8(0x55d)].visible = true), (_0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x7711e[_0x3d32b8(0x828)].visible = true), _0x172a13.eo = false;
                                    else {
                                        if (_0x2e052d.mo == 0x3) {
                                            _0x471aea = Math[_0x3d32b8(0x383)](_0xc429da = Math.atan2(_0x25851d - (_0x51b2b1 = _0x7711e[_0x3d32b8(0x828)].y + 0x64), _0x159bea - (_0x233296 = _0x7711e.img_f.x + 0x64))), _0x53466a = Math.sin(_0xc429da);
                                            var _0x65cc1e = _0x233296 + _0x471aea * 0x3 - 0x64,
                                                _0x5e91f6 = _0x51b2b1 + _0x53466a * 0x3 - 0x64,
                                                _0xd18fa8 = _0x233296 - _0x159bea,
                                                _0x59f91a = _0x51b2b1 - _0x25851d,
                                                _0x604d9 = Math[_0x3d32b8(0x44c)](_0xd18fa8 * _0xd18fa8 + _0x59f91a * _0x59f91a);
                                            _0x604d9 >= 0x28 && (_0x7711e[_0x3d32b8(0x828)].y = _0x65cc1e, _0x7711e[_0x3d32b8(0x828)].x = _0x5e91f6);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else(!_0x16f9d2() || !_0x2e052d[_0x3d32b8(0x76d)].checked) && ((_0x30a051 = _0x30a051 || window[_0x3d32b8(0x228)]) && ((_0x30a051 = _0x30a051[_0x3d32b8(0x30d)][0x0]).clientX !== undefined ? _0x172a13.fo = Math[_0x3d32b8(0x7d5)](_0x30a051.clientY - _0x58107b[_0x3d32b8(0x853)] * 0.5, _0x30a051[_0x3d32b8(0x77f)] - _0x58107b[_0x3d32b8(0x767)] * 0.5) : _0x172a13.fo = Math.atan2(_0x30a051[_0x3d32b8(0x6ca)] - _0x58107b.offsetHeight * 0.5, _0x30a051[_0x3d32b8(0x4a7)] - _0x58107b[_0x3d32b8(0x767)] * 0.5)));
            }, true), _0x58107b[_0x3d5616(0x49c)](_0x3d5616(0x4ae), function (_0x160cb7) {
                var _0x434dd8 = _0x3d5616;
                if (_0x5a0b1f.on && _0x2e052d[_0x434dd8(0x800)] && _0x2e052d.mo != 0x6 && _0x2e052d.s) {
                    var _0x34a499 = ooo.Xg.Kf.Wg.Ah,
                        _0x161ba4 = btoa(_0x2e052d.c_4),
                        _0x34babf = _0x58107b[_0x434dd8(0x853)],
                        _0x50878f = btoa(_0x2e052d.c_3),
                        _0x197534 = _0x58107b.offsetWidth,
                        _0x168748 = btoa(_0x2e052d[_0x434dd8(0x741)]),
                        _0x24a13b = (_0x160cb7 = _0x160cb7 || window[_0x434dd8(0x228)])[_0x434dd8(0x30d)][_0x434dd8(0x77a)](0x0)[_0x434dd8(0x4a7)],
                        _0x26bf66 = btoa(_0x2e052d.c_2),
                        _0x1b261d = _0x160cb7[_0x434dd8(0x30d)].item(0x0).pageY,
                        _0x505a24 = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x56a)],
                        _0x2a8dca = btoa(_0x2e052d.c_1),
                        _0x563465 = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](0x0)[_0x434dd8(0x24b)];
                    for (let _0x4fcd2c = 0x0; _0x4fcd2c < _0x505a24; _0x4fcd2c++) {
                        _0x2e052d[_0x434dd8(0x734)].x == -0x1 && _0x2e052d[_0x434dd8(0x734)].y != -0x1 ? _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](_0x4fcd2c)[_0x434dd8(0x24b)] != _0x2e052d[_0x434dd8(0x734)].y && (_0x24a13b = _0x160cb7.touches[_0x434dd8(0x77a)](_0x4fcd2c)[_0x434dd8(0x4a7)], _0x1b261d = _0x160cb7.touches[_0x434dd8(0x77a)](_0x4fcd2c)[_0x434dd8(0x6ca)], _0x563465 = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](_0x4fcd2c).identifier) : (_0x24a13b = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](_0x4fcd2c).pageX, _0x1b261d = _0x160cb7.touches[_0x434dd8(0x77a)](_0x4fcd2c)[_0x434dd8(0x6ca)], _0x563465 = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](_0x4fcd2c).identifier);
                    };
                    var _0x443f43 = 0x0;
                    (_0x2e052d.mo == 0x4 && btoa(_0x168748) == _0x2e052d.d_5 || _0x2e052d.mo == 0x5 && btoa(_0x161ba4) == _0x2e052d[_0x434dd8(0x4e2)]) && (_0x443f43 = Math[_0x434dd8(0x44c)]((_0x24a13b - _0x34a499.img_f.x - 0x64) * (_0x24a13b - _0x34a499[_0x434dd8(0x828)].x - 0x64) + (_0x1b261d - _0x34a499[_0x434dd8(0x828)].y - 0x64) * (_0x1b261d - _0x34a499.img_f.y - 0x64)));
                    _0x505a24 == 0x1 && (_0x2e052d.mo == 0x4 && _0x443f43 > 0x28 || _0x2e052d.mo != 0x4) && (_0x2e052d.mo == 0x5 && _0x443f43 > 0x28 || _0x2e052d.mo != 0x5) && (_0x2e052d.mo2.y = -0x1, _0x34a499.img_f.visible = false, _0x34a499.img_pf_1[_0x434dd8(0x775)] = false, _0x2e052d.mo == 0x1 && (_0x34a499.img_p_1.alpha = 0.25, _0x34a499[_0x434dd8(0x29d)][_0x434dd8(0x775)] = true), _0x2e052d.mo == 0x2 && (_0x34a499.img_o_2[_0x434dd8(0x8c4)] = 0.25, _0x34a499.img_i_2[_0x434dd8(0x8c4)] = 0.25, _0x34a499[_0x434dd8(0x3b6)][_0x434dd8(0x8c4)] = 0.25, _0x34a499.img_p_2[_0x434dd8(0x775)] = true), _0x2e052d.mo == 0x3 && (_0x34a499[_0x434dd8(0x7b2)][_0x434dd8(0x8c4)] = 0.25, _0x34a499.img_i_3.alpha = 0.25, _0x34a499[_0x434dd8(0x55d)][_0x434dd8(0x8c4)] = 0.25, _0x34a499[_0x434dd8(0x55d)].visible = true), (_0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x34a499.img_p_2[_0x434dd8(0x8c4)] = 0.25, _0x34a499[_0x434dd8(0x3b6)].visible = true, _0x34a499[_0x434dd8(0x828)][_0x434dd8(0x775)] = true), _0x172a13.eo = false);
                    if (_0x2e052d.mo1.x == -0x1 && _0x2e052d[_0x434dd8(0x635)].y == -0x1 && btoa(_0x161ba4) == _0x2e052d.d_4 && (_0x2e052d.mo == 0x4 && _0x443f43 > 0x28 || _0x2e052d.mo != 0x4 && btoa(_0x50878f) == _0x2e052d.d_3) && (_0x2e052d.mo == 0x5 && _0x443f43 > 0x28 || _0x2e052d.mo != 0x5 && btoa(_0x26bf66) == _0x2e052d[_0x434dd8(0x1d6)])) {
                        _0x2e052d[_0x434dd8(0x635)].x = _0x563465;
                        _0x2e052d[_0x434dd8(0x635)].x == _0x2e052d.mo2.y && _0x2e052d[_0x434dd8(0x635)].y == _0x2e052d.mo2.x && (_0x24a13b = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](0x1)[_0x434dd8(0x4a7)], _0x1b261d = _0x160cb7[_0x434dd8(0x30d)][_0x434dd8(0x77a)](0x1)[_0x434dd8(0x6ca)]);
                        var _0x5ea45a = _0x197534 * 0.5 - 0x44,
                            _0x4d1f82 = _0x34babf * 0.5 - 0x44,
                            _0x5f3f5b = _0x24a13b - 0x6e,
                            _0x2b3e2d = _0x1b261d - 0x6e,
                            _0x19b4a1 = _0x24a13b - 0x55,
                            _0x47037c = _0x1b261d - 0x55;
                        _0x2e052d.mo == 0x1 && _0x2e052d[_0x434dd8(0x734)].x == -0x1 && _0x2e052d[_0x434dd8(0x734)].y == -0x1 && (_0x34a499[_0x434dd8(0x29d)][_0x434dd8(0x8c4)] = 0x1, _0x34a499.img_p_1.x = _0x5ea45a, _0x34a499[_0x434dd8(0x29d)].y = _0x4d1f82, _0x34a499.img_p_1[_0x434dd8(0x775)] = true), _0x2e052d.mo == 0x2 && (_0x34a499.img_o_2.alpha = 0x1, _0x34a499[_0x434dd8(0x327)].x = _0x5f3f5b, _0x34a499[_0x434dd8(0x327)].y = _0x2b3e2d, _0x34a499.img_i_2[_0x434dd8(0x8c4)] = 0x1, _0x34a499.img_i_2.x = _0x19b4a1, _0x34a499[_0x434dd8(0x8ab)].y = _0x47037c, _0x2e052d[_0x434dd8(0x734)].x == -0x1 && _0x2e052d[_0x434dd8(0x734)].y == -0x1 && (_0x34a499[_0x434dd8(0x3b6)][_0x434dd8(0x8c4)] = 0x1, _0x34a499[_0x434dd8(0x3b6)].x = _0x5ea45a, _0x34a499[_0x434dd8(0x3b6)].y = _0x4d1f82, _0x34a499[_0x434dd8(0x3b6)].visible = true)), _0x2e052d.mo == 0x3 && btoa(_0x168748) == _0x2e052d[_0x434dd8(0x3cb)] && (_0x34a499[_0x434dd8(0x7b2)][_0x434dd8(0x8c4)] = 0x1, _0x34a499[_0x434dd8(0x7b2)].x = _0x5f3f5b, _0x34a499[_0x434dd8(0x7b2)].y = _0x2b3e2d, _0x34a499[_0x434dd8(0x87d)][_0x434dd8(0x8c4)] = 0x1, _0x34a499[_0x434dd8(0x87d)].x = _0x19b4a1, _0x34a499[_0x434dd8(0x87d)].y = _0x47037c, _0x2e052d[_0x434dd8(0x734)].x == -0x1 && _0x2e052d.mo2.y == -0x1 && (_0x34a499[_0x434dd8(0x55d)][_0x434dd8(0x8c4)] = 0x1, _0x34a499.img_p_3.x = _0x5ea45a, _0x34a499[_0x434dd8(0x55d)].y = _0x4d1f82, _0x34a499[_0x434dd8(0x55d)][_0x434dd8(0x775)] = true)), _0x2e052d.mo == 0x4 && btoa(_0x26bf66) == _0x2e052d[_0x434dd8(0x1d6)] && _0x2e052d.mo2.x == -0x1 && _0x2e052d[_0x434dd8(0x734)].y == -0x1 && (_0x34a499.img_p_2[_0x434dd8(0x8c4)] = 0x1, _0x34a499[_0x434dd8(0x3b6)].x = _0x5ea45a, _0x34a499[_0x434dd8(0x3b6)].y = _0x4d1f82, _0x34a499[_0x434dd8(0x3b6)][_0x434dd8(0x775)] = true), _0x2e052d.mo == 0x5 && btoa(_0x50878f) == _0x2e052d[_0x434dd8(0x3a8)] && _0x2e052d.mo2.x == -0x1 && _0x2e052d[_0x434dd8(0x734)].y == -0x1 && (_0x34a499.img_p_2.alpha = 0x1, _0x34a499[_0x434dd8(0x3b6)].x = _0x5ea45a, _0x34a499[_0x434dd8(0x3b6)].y = _0x4d1f82, _0x34a499.img_p_2[_0x434dd8(0x775)] = true);
                    } else(_0x505a24 >= 0x2 && _0x2e052d[_0x434dd8(0x734)].x == -0x1 && _0x2e052d.mo2.y == -0x1 && btoa(_0x50878f) == _0x2e052d[_0x434dd8(0x3a8)] || _0x505a24 == 0x1 && _0x2e052d.mo == 0x4 && _0x443f43 <= 0x28 && btoa(_0x2a8dca) == _0x2e052d.d_1 || _0x505a24 == 0x1 && _0x2e052d.mo == 0x5 && _0x443f43 <= 0x28 && btoa(_0x26bf66) == _0x2e052d[_0x434dd8(0x1d6)]) && (_0x2e052d[_0x434dd8(0x734)].y = _0x563465, _0x34a499[_0x434dd8(0x828)][_0x434dd8(0x775)] = true, _0x34a499[_0x434dd8(0x87f)].visible = true, _0x2e052d.mo == 0x1 && (_0x34a499[_0x434dd8(0x29d)].visible = false, _0x34a499[_0x434dd8(0x87f)].x = _0x34a499.img_p_1.x, _0x34a499[_0x434dd8(0x87f)].y = _0x34a499[_0x434dd8(0x29d)].y), (_0x2e052d.mo == 0x2 || _0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x34a499[_0x434dd8(0x3b6)].visible = false, _0x34a499[_0x434dd8(0x87f)].x = _0x34a499[_0x434dd8(0x3b6)].x, _0x34a499.img_pf_1.y = _0x34a499[_0x434dd8(0x3b6)].y), _0x2e052d.mo == 0x3 && btoa(_0x50878f) == _0x2e052d[_0x434dd8(0x3a8)] && (_0x34a499[_0x434dd8(0x55d)][_0x434dd8(0x775)] = false, _0x34a499.img_pf_1.x = _0x34a499[_0x434dd8(0x55d)].x, _0x34a499[_0x434dd8(0x87f)].y = _0x34a499[_0x434dd8(0x55d)].y), _0x2e052d.mo != 0x4 && _0x2e052d.mo != 0x5 && (_0x34a499[_0x434dd8(0x828)].x = _0x24a13b - 0x64, _0x34a499[_0x434dd8(0x828)].y = _0x1b261d - 0x64), _0x172a13.eo = true);;
                    _0x160cb7[_0x434dd8(0x73e)]();
                } else(_0x160cb7 = _0x160cb7 || window[_0x434dd8(0x228)]) && (_0x172a13.eo = _0x160cb7.touches[_0x434dd8(0x56a)] >= 0x2), _0x160cb7.preventDefault();
            }, true), _0x58107b[_0x3d5616(0x49c)]('touchend', function (_0x19929c) {
                var _0x32f879 = _0x3d5616;
                if (_0x5a0b1f.on && _0x2e052d[_0x32f879(0x800)] && _0x2e052d.mo != 0x6 && _0x2e052d.s) {
                    var _0x526a85 = ooo.Xg.Kf.Wg.Ah,
                        _0x23ba93 = btoa(_0x2e052d[_0x32f879(0x749)]);
                    (_0x19929c = _0x19929c || window[_0x32f879(0x228)]) && ((_0x19929c = _0x19929c[_0x32f879(0x27b)][0x0])[_0x32f879(0x77f)] !== undefined ? _0x809c79(_0x19929c[_0x32f879(0x77f)], _0x19929c[_0x32f879(0x5ec)]) : _0x809c79(_0x19929c[_0x32f879(0x4a7)], _0x19929c[_0x32f879(0x6ca)]));
                    var _0x41a7e5 = btoa(_0x2e052d[_0x32f879(0x38c)]),
                        _0x57c3f3 = _0x19929c[_0x32f879(0x24b)];
                    _0x57c3f3 == _0x2e052d.mo1.x && _0x2e052d[_0x32f879(0x635)].y == -0x1 && btoa(_0x41a7e5) == _0x2e052d[_0x32f879(0x1d6)] && (_0x2e052d.mo1.x = -0x1, _0x2e052d.mo == 0x1 && (_0x526a85[_0x32f879(0x29d)][_0x32f879(0x8c4)] = 0.25), _0x2e052d.mo == 0x2 && (_0x526a85[_0x32f879(0x327)][_0x32f879(0x8c4)] = 0.25, _0x526a85[_0x32f879(0x8ab)][_0x32f879(0x8c4)] = 0.25, _0x526a85[_0x32f879(0x3b6)][_0x32f879(0x8c4)] = 0.25), _0x2e052d.mo == 0x3 && btoa(_0x23ba93) == _0x2e052d[_0x32f879(0x4f3)] && (_0x526a85[_0x32f879(0x7b2)].alpha = 0.25, _0x526a85[_0x32f879(0x87d)][_0x32f879(0x8c4)] = 0.25, _0x526a85[_0x32f879(0x55d)][_0x32f879(0x8c4)] = 0.25), _0x2e052d.mo == 0x4 && (_0x526a85[_0x32f879(0x3b6)][_0x32f879(0x8c4)] = 0.25), _0x2e052d.mo == 0x5 && (_0x526a85.img_p_2[_0x32f879(0x8c4)] = 0.25));
                    var _0x3c0fd5 = btoa(_0x2e052d[_0x32f879(0x1f2)]);
                    _0x2e052d[_0x32f879(0x734)].x == -0x1 && _0x57c3f3 == _0x2e052d[_0x32f879(0x734)].y && btoa(_0x3c0fd5) == _0x2e052d[_0x32f879(0x3a8)] && (_0x2e052d.mo2.y = -0x1, _0x526a85[_0x32f879(0x828)][_0x32f879(0x775)] = false, _0x526a85[_0x32f879(0x87f)][_0x32f879(0x775)] = false, _0x2e052d.mo == 0x1 && (_0x526a85[_0x32f879(0x29d)].visible = true), (_0x2e052d.mo == 0x2 || _0x2e052d.mo == 0x4 && btoa(_0x41a7e5) == _0x2e052d[_0x32f879(0x1d6)] || _0x2e052d.mo == 0x5 && btoa(_0x3c0fd5) == _0x2e052d[_0x32f879(0x3a8)]) && (_0x526a85[_0x32f879(0x3b6)][_0x32f879(0x775)] = true), _0x2e052d.mo == 0x3 && (_0x526a85[_0x32f879(0x55d)][_0x32f879(0x775)] = true), (_0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5) && (_0x526a85.img_f[_0x32f879(0x775)] = true), _0x172a13.eo = false);
                } else(_0x19929c = _0x19929c || window.event) && (_0x172a13.eo = _0x19929c[_0x32f879(0x30d)][_0x32f879(0x56a)] >= 0x2), _0x2e052d[_0x32f879(0x800)] && _0x2e052d.s && (_0x19929c = _0x19929c || window[_0x32f879(0x228)]) && ((_0x19929c = _0x19929c[_0x32f879(0x27b)][0x0])[_0x32f879(0x77f)] !== undefined ? _0x809c79(_0x19929c.clientX, _0x19929c[_0x32f879(0x5ec)]) : _0x809c79(_0x19929c[_0x32f879(0x4a7)], _0x19929c[_0x32f879(0x6ca)]));
            }, true), _0x58107b[_0x3d5616(0x49c)](_0x3d5616(0x6f2), function (_0x2c5c77) {
                var _0x21766d = _0x3d5616;
                (_0x2c5c77 = _0x2c5c77 || _0xa914b4.c[_0x21766d(0x228)] && _typeof(_0x2c5c77[_0x21766d(0x77f)]) != 'undefined') && (_0x172a13.fo = _0x1a7a89.ta(_0x2c5c77[_0x21766d(0x5ec)] - _0x58107b[_0x21766d(0x853)] * 0.5, _0x2c5c77[_0x21766d(0x77f)] - _0x58107b[_0x21766d(0x767)] * 0.5));
            }, true), _0x58107b[_0x3d5616(0x49c)](_0x3d5616(0x7ae), function (_0x19eeb7) {
                _0x172a13.eo = true;
            }, true), _0x58107b[_0x3d5616(0x49c)](_0x3d5616(0x61e), function (_0x2c1525) {
                _0x172a13.eo = false;
            }, true), this.Wg = new _0xa914b4.lh(_0x288b76), this.go = _0xc0dbe0.ho, this.fo = 0x0, this.eo = false, _0x5a0b1f[_0x3d5616(0x760)] = _0x172a13;
        }))[_0x17b28a(0x72d)].Sa = function () {}, _0x52da2e[_0x17b28a(0x72d)].ml = function () {
            _0xa914b4.Nf.rg(false), _0x51599b.f.h(_0xa914b4.Uf.Tf, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32), _0x51599b.f.g(_0xa914b4.Uf.Tn, 0x1f4), this.go === _0xc0dbe0.ho ? _0x51599b.f.h(_0xa914b4.Uf.Un, 0x1) : _0x51599b.f.g(_0xa914b4.Uf.Un, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0x52da2e.prototype.ho = function () {
            return this.go = _0xc0dbe0.ho, this;
        }, _0x52da2e[_0x17b28a(0x72d)].io = function () {
            return _0x51599b.f.h(_0x419f39, 0x1), _0x1a7a89.Y(function () {
                _0x51599b.f.g(_0x419f39, 0x1f4);
            }, 0xbb8), _0x51599b.f.h(_0x4d1e88, 0x1), _0x1a7a89.Y(function () {
                _0x51599b.f.g(_0x4d1e88, 0x1f4);
            }, 0x1f4), this.go = _0xc0dbe0.io, this;
        }, _0x52da2e[_0x17b28a(0x72d)].nl = function () {
            this.eo = false, this.Wg.qg(), this.go === _0xc0dbe0.io && ooo.ij.mf();
        }, _0x52da2e[_0x17b28a(0x72d)].qg = function () {
            this.Wg.qg();
        }, _0x52da2e[_0x17b28a(0x72d)].ug = function (_0x20813c, _0x5118f1) {
            this.Wg.ug(_0x20813c, _0x5118f1);
        }, _0x52da2e.prototype.jo = function (_0x27b958, _0x10e105, _0xeaacdc) {
            var _0xf8f0ea = _0x17b28a,
                _0x17ecaa, _0x31c3fd, _0x36bd58;
            _0x10e105 >= 0x1 && _0x10e105 <= 0xa ? (_0x17ecaa = _0x1a7a89.U('index.game.result.place.i' + _0x10e105), _0x31c3fd = _0x1a7a89.U(_0xf8f0ea(0x3b4)), _0x36bd58 = _0x1a7a89.U(_0xf8f0ea(0x628)).replace('{0}', _0xeaacdc)[_0xf8f0ea(0x29f)]('{1}', _0x27b958)[_0xf8f0ea(0x29f)]('{2}', _0x17ecaa)) : (_0x17ecaa = '', _0x31c3fd = _0x1a7a89.U(_0xf8f0ea(0x523)), _0x36bd58 = _0x1a7a89.U(_0xf8f0ea(0x8c3)).replace(_0xf8f0ea(0x762), _0xeaacdc)[_0xf8f0ea(0x29f)](_0xf8f0ea(0x2c3), _0x27b958));
            _0x2a9bb1[_0xf8f0ea(0x6bb)](_0x1a7a89.U(_0xf8f0ea(0x3f9))), _0x200c93[_0xf8f0ea(0x6bb)](_0x27b958), _0x5e44c6[_0xf8f0ea(0x6bb)](_0x17ecaa), _0x272953[_0xf8f0ea(0x6bb)](_0x31c3fd);
            if (_0x30354b.co.bo) {
                var _0x4b9210, _0x50d388, _0x59da4d, _0xf06534, _0x39a1a0, _0x3a8641, _0x1f33ae, _0x18cda3 = _0x1a7a89.U(_0xf8f0ea(0x24d));
                _0x1a7a89.U(_0xf8f0ea(0x48e)), _0x58fb66[_0xf8f0ea(0x6cd)]()[_0xf8f0ea(0x1da)]((_0x4b9210 = _0x18cda3, _0x50d388 = _0xf8f0ea(0x26e), _0x59da4d = 'wormate.io', _0xf06534 = _0x36bd58, _0x39a1a0 = _0x36bd58, _0x3a8641 = _0xf8f0ea(0x433), (_0x1f33ae = $(_0xf8f0ea(0x88a) + _0x4b9210 + _0xf8f0ea(0x4a9)))[_0xf8f0ea(0x57b)](function () {
                    var _0x24643c = _0xf8f0ea;
                    (typeof FB == _0x24643c(0x76e) ? _0x24643c(0x76e) : _typeof(FB)) !== 'undefined' && _typeof(FB.ui) != _0x24643c(0x76e) && FB.ui({
                        'method': _0x24643c(0x62d),
                        'display': _0x24643c(0x777),
                        'link': _0x50d388,
                        'name': _0x59da4d,
                        'caption': _0xf06534,
                        'description': _0x39a1a0,
                        'picture': _0x3a8641
                    }, function () {});
                }), _0x1f33ae));
            }
        }, _0x52da2e.prototype.ko = function () {
            return this.fo;
        }, _0x52da2e[_0x17b28a(0x72d)].lo = function () {
            return this.eo;
        }, _0xc0dbe0 = {
            'ho': 0x0,
            'io': 0x1
        }, _0xa914b4.Bk = _0x52da2e, _0x285ddc = $(_0x17b28a(0x443)), _0x14bf70 = $(_0x17b28a(0x5ef)), _0x10fb6d = $('#loading-progress-text'), (_0x442657 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x366e6d = _0x17b28a;
            _0xa914b4.Uf[_0x366e6d(0x670)](this, _0xa914b4.ll.ao), this.mo = -0x1, this.no = '';
        }))[_0x17b28a(0x72d)].Sa = function () {}, _0x442657.prototype.ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.g(_0xa914b4.Uf.Yn, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0x442657[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.Ye(_0xa914b4.Pe.Se.Re), ooo.Xg.Ak.wg(), ooo.Xg.Ak.sg(true);
        }, _0x442657[_0x17b28a(0x72d)].hl = function () {
            ooo.Xg.Ak.sg(false);
        }, _0x442657[_0x17b28a(0x72d)].oo = function () {
            this.po('', 0x0), _0x51599b.f.g(_0x285ddc, 0x64);
        }, _0x442657[_0x17b28a(0x72d)].qo = function () {
            _0x51599b.f.h(_0x285ddc, 0x64);
        }, _0x442657[_0x17b28a(0x72d)].po = function (_0x28bfd4, _0x26c4d2) {
            var _0xacc032 = _0x17b28a;
            this.no !== _0x28bfd4 && (this.no = _0x28bfd4);
            var _0x4d73c7 = _0x1a7a89.fa(_0x1a7a89._(_0x26c4d2 * 0x64), 0x0, 0x64);
            this.mo !== _0x4d73c7 && (_0x14bf70[_0xacc032(0x5a1)](_0xacc032(0x821), _0x4d73c7 + '%'), _0x10fb6d[_0xacc032(0x6bb)](_0x4d73c7 + ' %'));
        }, _0xa914b4.$k = _0x442657, _0xcef585 = $(_0x17b28a(0x2e2)), $('#mm-line-center'), $(_0x17b28a(0x659)), _0x17d036 = $(_0x17b28a(0x8ac)), _0x33b7e6 = $(_0x17b28a(0x255)), _0x3ffe96 = $(_0x17b28a(0x46e)), _0x1e5c4f = $(_0x17b28a(0x82c)), _0x140b84 = $(_0x17b28a(0x855)), $(_0x17b28a(0x72f)), _0x131730 = $(_0x17b28a(0x6a4)), _0x164a9a = $('#mm-skin-prev'), _0x24f3b4 = $(_0x17b28a(0x594)), _0x286f05 = $(_0x17b28a(0x307)), _0x295a90 = $('#mm-skin-over-button-list'), _0x55d929 = $('#mm-params-nickname'), _0x5ad346 = $('#mm-params-game-mode'), _0x2db1b5 = $(_0x17b28a(0x8b8)), _0x59d7a5 = $(_0x17b28a(0x770)), _0x5b67b0 = $(_0x17b28a(0x358)), _0x91de9 = $(_0x17b28a(0x209)), _0x549725 = $(_0x17b28a(0x418)), _0x2486ba = $(_0x17b28a(0x345)), _0x5c88b4 = $('#mm-settings'), _0x12b3b7 = $(_0x17b28a(0x501)), _0xfa43bd = $(_0x17b28a(0x371)), _0x53ae91 = $('#mm-player-username'), _0x1e1d2d = $(_0x17b28a(0x7f8)), _0x34788b = $(_0x17b28a(0x2d0)), _0x220d90 = $(_0x17b28a(0x62b)), _0x51b631 = $(_0x17b28a(0x4cb)), (_0x27e709 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x422a68 = _0x17b28a;
            _0xa914b4.Uf[_0x422a68(0x670)](this, _0xa914b4.ll.kl), this.mo = -0x1, this.no = '';
            var _0x4c9d35 = [_0x422a68(0x428), 'fuck', _0x422a68(0x328), 'Ø¬Ø­Ø´', _0x422a68(0x5cc), _0x422a68(0x7c0), _0x422a68(0x73b), _0x422a68(0x830), _0x422a68(0x795), _0x422a68(0x373), _0x422a68(0x51c), 'Ø§Ø¨ÙˆÙƒ', _0x422a68(0x38e), _0x422a68(0x32c)];

            function _0x9083fb(_0x591ef1) {
                var _0x3b50e2 = _0x422a68;
                if (!_0x591ef1) return '';
                return _0x591ef1[_0x3b50e2(0x627)]()[_0x3b50e2(0x29f)](/[^a-zA-Z0-9\u0600-\u06FF*]/g, '')[_0x3b50e2(0x29f)](/[Ù€]/g, '')[_0x3b50e2(0x29f)](/[Ù‹ÙŒÙÙŽÙÙÙ‘Ù’]/g, '').replace(/[Ø£Ø¥Ø¢Ø§]/g, 'Ø§')[_0x3b50e2(0x29f)](/[Ù‰ÙŠ]/g, 'ÙŠ')[_0x3b50e2(0x29f)](/[Ø©]/g, 'Ù‡');
            }

            function _0x4b2c55(_0x594fc4, _0x4a3225) {
                var _0x2daf4e = _0x422a68;
                if (!_0x594fc4) return false;
                var _0x46e34d = _0x594fc4.replace(/\*$/, ''),
                    _0x3fa1c9 = _0x9083fb(_0x46e34d),
                    _0x3fb839 = Array[_0x2daf4e(0x4b8)](_0x4a3225) ? _0x4a3225 : Object[_0x2daf4e(0x547)](_0x4a3225);
                return _0x3fb839.some(function (_0x3c3d58) {
                    var _0x4599f9 = _0x2daf4e,
                        _0x103302 = _0x9083fb(_0x3c3d58);
                    return _0x3fa1c9[_0x4599f9(0x7b8)](_0x103302);
                });
            }
            window.handleNicknameChange = function (_0x51c9e9) {
                var _0x483f63 = _0x422a68;
                if (!_0x51c9e9 || _0x51c9e9[_0x483f63(0x356)]() === '') return '';
                if (_0x4b2c55(_0x51c9e9, _0x4c9d35)) return _0x483f63(0x1d4);
                return _0x51c9e9;
            }, fetch(_0x422a68(0x458))[_0x422a68(0x378)](_0x330021 => _0x330021[_0x422a68(0x80b)]()).then(_0x5acd4e => {
                var _0x170f0a = _0x422a68;
                _0x4c9d35 = Array.isArray(_0x5acd4e) ? _0x5acd4e : Object[_0x170f0a(0x547)](_0x5acd4e);
            })[_0x422a68(0x48b)](_0x50da4e => {
                var _0x36dc59 = _0x422a68;
                console[_0x36dc59(0x89c)](_0x36dc59(0x409), _0x50da4e);
            }), this.ro = new _0xa914b4.Lm(_0x131730), _0x5ad346[_0x422a68(0x57b)](function () {
                ooo.ij.if();
            }), _0x131730[_0x422a68(0x57b)](function () {
                ooo.ok.nk() && (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Qk));
            }), _0x164a9a[_0x422a68(0x57b)](function () {
                ooo.ij.if(), ooo.so.kk();
            }), _0x24f3b4.click(function () {
                ooo.ij.if(), ooo.so.jk();
            }), _0x55d929[_0x422a68(0x71a)](function (_0x5cfd2d) {
                _0x2e052d.r1 = false, _0x5cfd2d.keyCode === 0xd && ooo.to();
            }), _0x2db1b5[_0x422a68(0x57b)](function () {
                var _0xc1d768 = _0x422a68,
                    _0x57259e = _0x55d929[_0xc1d768(0x1ce)]();
                _0x57259e && _0x57259e[_0xc1d768(0x356)]() !== '' && _0x55d929[_0xc1d768(0x1ce)](window.handleNicknameChange(_0x57259e)), ooo.ij.if(), ooo.to();
            }), _0x59d7a5[_0x422a68(0x57b)](function () {
                var _0x42c8fa = _0x422a68,
                    _0x1efb46 = _0x55d929[_0x42c8fa(0x1ce)]();
                _0x1efb46 && _0x1efb46[_0x42c8fa(0x356)]() !== '' && _0x55d929[_0x42c8fa(0x1ce)](window[_0x42c8fa(0x3b9)](_0x1efb46)), ooo.ij.if(), ooo.to();
            }), _0x5b67b0.click(function () {
                ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Nk);
            }), _0x5c88b4[_0x422a68(0x57b)](function () {
                ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Hi);
            }), _0x91de9[_0x422a68(0x57b)](function () {
                ooo.ok.nk() && (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Lk));
            }), _0x2486ba[_0x422a68(0x57b)](function () {
                ooo.ok.nk() && (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Jk));
            }), _0x549725.click(function () {
                ooo.ok.nk() && (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Sk));
            }), _0x12b3b7[_0x422a68(0x57b)](function () {
                ooo.ok.nk() && (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Hk));
            }), this.uo(), this.vo();
            var _0x8cfaaa = _0xa914b4.Cg.Og(_0xa914b4.Cg.Ig);
            _0x8cfaaa !== 'ARENA' && _0x8cfaaa !== _0x422a68(0x1f4) && (_0x8cfaaa = 'ARENA'), _0x5ad346[_0x422a68(0x1ce)](_0x8cfaaa);
        })).prototype.Sa = function () {
            var _0x53f643 = this;

            function _0x3a9800(_0x387008, _0x49721a) {
                var _0x56fb2d = _0x1c2b;
                _0x387008.pm && (_0x49721a[_0x56fb2d(0x87a)] = _0x387008.pm.Tj, _0x49721a[_0x56fb2d(0x504)] = _0x387008.pm.Uj, _0x49721a.mouthId = _0x387008.pm.Vj, _0x49721a[_0x56fb2d(0x4a1)] = _0x387008.pm.Wj, _0x49721a[_0x56fb2d(0x62c)] = _0x387008.pm.Xj);
            }
            ooo.ok.fm(function () {
                ooo.ok.nk() ? (_0x3a9800(_0x2e052d, ooo.ok.xl), ooo.so.lk(ooo.ok.Ul(), _0xa914b4._j.$j), ooo.so.lk(ooo.ok.Vl(), _0xa914b4._j.ak), ooo.so.lk(ooo.ok.Wl(), _0xa914b4._j.bk), ooo.so.lk(ooo.ok.Xl(), _0xa914b4._j.dk), ooo.so.lk(ooo.ok.Yl(), _0xa914b4._j.ck)) : (ooo.so.lk(ooo.wo(), _0xa914b4._j.$j), ooo.so.lk(0x0, _0xa914b4._j.ak), ooo.so.lk(0x0, _0xa914b4._j.bk), ooo.so.lk(0x0, _0xa914b4._j.dk), ooo.so.lk(0x0, _0xa914b4._j.ck));
            }), ooo.ok.fm(function () {
                var _0x1677a8 = _0x1c2b;
                _0x2db1b5.toggle(ooo.ok.nk()), _0x5b67b0[_0x1677a8(0x846)](!ooo.ok.nk()), _0x59d7a5[_0x1677a8(0x846)](!ooo.ok.nk()), _0x2486ba[_0x1677a8(0x846)](ooo.ok.nk()), _0x549725[_0x1677a8(0x846)](ooo.ok.nk()), _0x12b3b7[_0x1677a8(0x846)](ooo.ok.nk()), _0x91de9[_0x1677a8(0x846)](true), _0x5c88b4[_0x1677a8(0x846)](true), ooo.ok.nk() ? (_0x286f05.hide(), _0x53ae91.html(ooo.ok.Ll()), _0xfa43bd[_0x1677a8(0x8b7)]('src', ooo.ok.Nl()), _0x1e1d2d[_0x1677a8(0x6bb)](ooo.ok.Ql()), _0x34788b[_0x1677a8(0x821)](ooo.ok.Sl() * 0x64 / ooo.ok.Tl() + '%'), _0x220d90[_0x1677a8(0x6bb)](ooo.ok.Sl() + _0x1677a8(0x6a0) + ooo.ok.Tl()), _0x51b631.html(ooo.ok.Rl()), _0x55d929[_0x1677a8(0x1ce)](ooo.ok.Ml())) : (_0x286f05[_0x1677a8(0x846)](_0x30354b.co.bo && !ooo.xo()), _0x53ae91[_0x1677a8(0x6bb)](_0x53ae91[_0x1677a8(0x384)](_0x1677a8(0x208))), _0xfa43bd[_0x1677a8(0x8b7)]('src', _0x30354b.H.M), _0x1e1d2d[_0x1677a8(0x6bb)]('10'), _0x34788b[_0x1677a8(0x821)]('0'), _0x220d90[_0x1677a8(0x6bb)](''), _0x51b631[_0x1677a8(0x6bb)](0x1), _0x55d929.val(_0xa914b4.Cg.Og(_0xa914b4.Cg.Jg)));
            }), ooo.so.fk(function () {
                _0x53f643.ro.Gm(ooo.so.ek());
            });
        }, _0x27e709[_0x17b28a(0x72d)].ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.g(_0xa914b4.Uf.Rn, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Sn, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.g(_0xa914b4.Uf.Vn, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0x27e709[_0x17b28a(0x72d)].yo = function () {
            _0x51599b.f.g(_0xcef585, 0x1f4), _0x51599b.f.g(_0x17d036, 0x1f4), _0x51599b.f.g(_0x33b7e6, 0x1f4), _0x51599b.f.h(_0x3ffe96, 0x64);
        }, _0x27e709.prototype.zo = function () {
            _0x51599b.f.h(_0xcef585, 0x64), _0x51599b.f.h(_0x17d036, 0x64), _0x51599b.f.h(_0x33b7e6, 0x64), _0x51599b.f.g(_0x3ffe96, 0x1f4);
        }, _0x27e709[_0x17b28a(0x72d)].po = function (_0x43bc53, _0x580452) {
            var _0x179778 = _0x17b28a;
            this.no !== _0x43bc53 && (this.no = _0x43bc53);
            var _0x3a6745 = _0x1a7a89.fa(_0x1a7a89._(_0x580452 * 0x64), 0x0, 0x64);
            this.mo !== _0x3a6745 && (_0x1e5c4f[_0x179778(0x5a1)](_0x179778(0x821), _0x3a6745 + '%'), _0x140b84[_0x179778(0x6bb)](_0x3a6745 + ' %'));
        }, _0x27e709[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.jf(), this.ro.rg(true);
        }, _0x27e709.prototype.hl = function () {
            this.ro.rg(false);
        }, _0x27e709[_0x17b28a(0x72d)].qg = function () {
            this.ro.qg();
        }, _0x27e709[_0x17b28a(0x72d)].ug = function (_0x1b80dc, _0x5d686e) {
            this.ro.ug();
        }, _0x27e709[_0x17b28a(0x72d)].Ml = function () {
            return _0x55d929.val();
        }, _0x27e709[_0x17b28a(0x72d)].Ao = function () {
            var _0x453546 = _0x17b28a;
            return _0x5ad346[_0x453546(0x1ce)]();
        }, _0x27e709[_0x17b28a(0x72d)].uo = function () {
            var _0x1b187b = _0x17b28a,
                _0x34fe2c = $(_0x1b187b(0x3f4)).children(),
                _0x272d9e = 0x0;
            _0x1a7a89.X(function () {
                var _0x57b06d = _0x1b187b;
                _0x34fe2c.eq(_0x272d9e)[_0x57b06d(0x3df)](0x1f4, function () {
                    var _0x49ec59 = _0x57b06d;
                    ++_0x272d9e >= _0x34fe2c[_0x49ec59(0x56a)] && (_0x272d9e = 0x0), _0x34fe2c.eq(_0x272d9e).fadeIn(0x1f4)[_0x49ec59(0x5a1)](_0x49ec59(0x63d), _0x49ec59(0x5cb));
                });
            }, 0xbb8);
        }, _0x27e709[_0x17b28a(0x72d)].vo = function () {
            var _0x5d9b3c = _0x17b28a;
            if (_0x30354b.co.bo && !ooo.xo()) {
                _0x286f05[_0x5d9b3c(0x651)]();
                var _0x355ee2 = _0x1a7a89.U(_0x5d9b3c(0x736)),
                    _0x13ca1a = encodeURIComponent(_0x1a7a89.U('index.game.main.menu.unlockSkins.comeAndPlay'));
                _0x295a90[_0x5d9b3c(0x1da)]($(_0x5d9b3c(0x74a) + _0x13ca1a + _0x5d9b3c(0x41b) + _0x355ee2 + '</span></a>')[_0x5d9b3c(0x57b)](function _0x36cb0e() {
                    ooo.Bo(true), _0x1a7a89.Y(function () {
                        var _0x5a2bea = _0x1c2b;
                        _0x286f05[_0x5a2bea(0x75d)]();
                    }, 0xbb8);
                }));
            }
        }, _0xa914b4.Ck = _0x27e709, (_0x1de4b4 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            _0xa914b4.Uf.call(this, _0xa914b4.ll.ao);
        })).prototype.Sa = function () {}, _0x1de4b4[_0x17b28a(0x72d)].ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.h(_0xa914b4.Uf.Tf, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0xa914b4.el = _0x1de4b4, (_0x1f2d0e = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x4cac1f = _0x17b28a;
            _0xa914b4.Uf[_0x4cac1f(0x670)](this, _0xa914b4.ll.ao);
        })).prototype.Sa = function () {}, _0x1f2d0e[_0x17b28a(0x72d)].ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.g(_0xa914b4.Uf.Zn, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0x1f2d0e.prototype.nl = function () {}, _0xa914b4.Xk = _0x1f2d0e, _0x277b9e = $(_0x17b28a(0x726)), (_0x55c21e = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x941919 = _0x17b28a;
            _0xa914b4.Uf[_0x941919(0x670)](this, _0xa914b4.ll.ao), this.Co = [], this.Do = null;
        }))[_0x17b28a(0x72d)].Sa = function () {}, _0x55c21e[_0x17b28a(0x72d)].ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.g(_0xa914b4.Uf.Sn, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.g(_0xa914b4.Uf.Xn, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0x55c21e[_0x17b28a(0x72d)].nl = function () {
            this.Eo();
        }, _0x55c21e.prototype.ql = function () {
            var _0x532c94 = _0x17b28a;
            return this.Do != null || this.Co[_0x532c94(0x56a)] > 0x0;
        }, _0x55c21e[_0x17b28a(0x72d)].Fo = function (_0x4078fa) {
            var _0xbc5e7a = _0x17b28a;
            this.Co[_0xbc5e7a(0x864)](_0x4078fa), _0x1a7a89.Y(function () {
                ooo.Xg.ol();
            }, 0x0);
        }, _0x55c21e[_0x17b28a(0x72d)].km = function (_0x30a00b) {
            var _0x1152b5 = _0x17b28a;
            this.Co[_0x1152b5(0x6a2)](_0x30a00b), _0x1a7a89.Y(function () {
                ooo.Xg.ol();
            }, 0x0);
        }, _0x55c21e[_0x17b28a(0x72d)].Eo = function () {
            var _0x42b954 = _0x17b28a,
                _0x3072a1 = this;
            if (this.Do == null) {
                if (this.Co[_0x42b954(0x56a)] === 0x0) {
                    ooo.Xg.jl();
                    return;
                };
                var _0x470f30 = this.Co[_0x42b954(0x26b)]();
                this.Do = _0x470f30;
                var _0x517759 = _0x470f30.ag();
                _0x51599b.f.g(_0x517759, 0x12c), _0x277b9e[_0x42b954(0x1da)](_0x517759), _0x470f30.Go = function () {
                    var _0x325a5c = _0x42b954;
                    _0x517759[_0x325a5c(0x3df)](0x12c), _0x1a7a89.Y(function () {
                        var _0x41d294 = _0x325a5c;
                        _0x517759[_0x41d294(0x66d)]();
                    }, 0x12c), _0x3072a1.Do === _0x470f30 && (_0x3072a1.Do = null), _0x3072a1.Eo();
                }, _0x470f30.nl();
            }
        }, _0xa914b4.Zk = _0x55c21e, _0xa914b4.ll = {
            'ao': 0x0,
            'kl': 0x1
        }, _0x5d5c9a = $('#popup-menu-label'), _0x1e0727 = $(_0x17b28a(0x431)), _0x1503fc = $(_0x17b28a(0x8a7)), $(_0x17b28a(0x87c)).click(function () {
            ooo.ij.if(), ooo.Xg.jl();
        }), _0x1e0727[_0x17b28a(0x57b)](function () {
            ooo.ok.nk() && (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Hk));
        }), (_0x40d54a = _0x1a7a89.ca(_0xa914b4.Uf, function (_0x18598e, _0x154528) {
            var _0x12bc06 = _0x17b28a;
            _0xa914b4.Uf[_0x12bc06(0x670)](this, _0xa914b4.ll.kl), this.Xa = _0x18598e, this.Io = _0x154528, this.Jo = [];
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x2f6aa6 = _0x17b28a;
            _0x40d54a[_0x2f6aa6(0x59f)][_0x2f6aa6(0x72d)].Sa[_0x2f6aa6(0x670)](this), !_0x40d54a.Ko && (_0x40d54a.Ko = true, ooo.ok.fm(function () {
                var _0x2748d8 = _0x2f6aa6;
                ooo.ok.nk() ? _0x1503fc[_0x2748d8(0x6bb)](ooo.ok.Ql()) : _0x1503fc[_0x2748d8(0x6bb)]('0');
            })), _0x51599b.f.h(_0xa914b4.Ho.Lo, 0x64);
        }, _0x40d54a.Mo = $(_0x17b28a(0x319)), _0x40d54a.No = $(_0x17b28a(0x260)), _0x40d54a.Oo = $(_0x17b28a(0x60a)), _0x40d54a.Po = $('#login-view'), _0x40d54a.Qo = $('#settings-view'), _0x40d54a.Ro = $(_0x17b28a(0x7d3)), _0x40d54a.So = $(_0x17b28a(0x216)), _0x40d54a.To = $(_0x17b28a(0x6e2)), _0x40d54a.Uo = $('#withdraw-consent-view'), _0x40d54a.Vo = $(_0x17b28a(0x3f2)), _0x40d54a.Lo = $('#please-wait-view'), _0x40d54a[_0x17b28a(0x72d)].ml = function () {
            var _0x4f534b = _0x17b28a;
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Rn, 0xc8), _0x51599b.f.g(_0xa914b4.Uf.Sn, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.Un, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0xc8), _0x51599b.f.g(_0xa914b4.Uf.Wn, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0xc8), _0x51599b.f.h(_0xa914b4.Uf.$n, 0xc8), _0x51599b.f.h(_0xa914b4.Uf._n, 0xc8), _0x5d5c9a[_0x4f534b(0x6bb)](this.Xa), _0x1e0727[_0x4f534b(0x846)](this.Io), this.Wo();
        }, _0x40d54a[_0x17b28a(0x72d)].Wo = function () {}, _0x40d54a.prototype.Xo = function (_0x22ad3d) {
            var _0x2f8535 = _0x17b28a,
                _0x3a3459 = this,
                _0x4b885a = _0x1a7a89.va(0x0, 0x7fffffff) & 0x7fffffff;
            return this.Jo[_0x2f8535(0x6a2)](_0x4b885a), _0x51599b.f.g(_0xa914b4.Ho.Lo, 0x64), _0x1a7a89.Y(function () {
                _0x3a3459.Yo(_0x4b885a);
            }, _0x22ad3d), new _0x55cb8e(this, _0x4b885a);
        }, _0x40d54a[_0x17b28a(0x72d)].Yo = function (_0x1b3e3f) {
            var _0x155722 = _0x17b28a,
                _0x395465 = this.Jo[_0x155722(0x7b4)](_0x1b3e3f);
            !(_0x395465 < 0x0) && (this.Jo[_0x155722(0x758)](_0x395465, 0x1), this.Jo[_0x155722(0x56a)] === 0x0 && _0x51599b.f.h(_0xa914b4.Ho.Lo, 0x64));
        }, _0xa914b4.Ho = _0x40d54a;
        var _0x4804a5, _0x4fb57a, _0x2dc931, _0x554555, _0x2cbc88, _0x47c6f5, _0x2d816e, _0x340522, _0x1a3591, _0x419f39, _0x4d1e88, _0x58fb66, _0x2a9bb1, _0x200c93, _0x5e44c6, _0x272953, _0x288b76, _0x52da2e, _0xc0dbe0, _0x285ddc, _0x14bf70, _0x10fb6d, _0x442657, _0xcef585, _0x17d036, _0x33b7e6, _0x3ffe96, _0x1e5c4f, _0x140b84, _0x131730, _0x164a9a, _0x24f3b4, _0x286f05, _0x295a90, _0x55d929, _0x5ad346, _0x2db1b5, _0x59d7a5, _0x5b67b0, _0x91de9, _0x549725, _0x2486ba, _0x5c88b4, _0x12b3b7, _0xfa43bd, _0x53ae91, _0x1e1d2d, _0x34788b, _0x220d90, _0x51b631, _0x27e709, _0x1de4b4, _0x1f2d0e, _0x277b9e, _0x55c21e, _0x5d5c9a, _0x1e0727, _0x1503fc, _0x40d54a, _0x256148, _0x384e8a, _0x32f0c0, _0x587c85, _0x2a41b9, _0x688c31, _0x4ea965, _0x5cbaab, _0x52aa98, _0x6c52b7, _0x4f4868, _0x2de1bc, _0x5cd32b, _0x317c09, _0x37c1ef, _0x70bb44, _0x1f9a6d, _0x5fde7, _0x1f7aab, _0xda30de, _0x13284c, _0x4e727f, _0x4f6938, _0x2a1d3b, _0x507be4, _0xfb13de, _0x24937c, _0x81ee05, _0x3e7911, _0x19a387, _0x593730, _0x2dd8e8, _0x121aca, _0x43f2ee, _0x425453, _0x2bb5bf, _0x16afba, _0x1a821a, _0x2e06af, _0x5d5a9c, _0x95b9ee, _0x4be76f, _0x4ec9f4, _0x25795c, _0xfef36c, _0xb01087, _0x2a74a6, _0x4eb01b, _0x25a2e3, _0x4cbe00, _0xf1357f, _0x1c0d13, _0xc94fd3, _0x43c634, _0x26bd28, _0x4f6319, _0x28865b, _0x394091, _0x107997, _0x11b24f, _0x31afcc, _0x14a95b, _0x3a49b3, _0x50be74, _0x53e7d2, _0x22e324, _0x2c3d31, _0xe36ea9, _0x66c51, _0x252aee, _0x29352b, _0x5659d5, _0x1d8a89, _0x2491c3, _0x19421c, _0x2a404c, _0xf3457a, _0x57c2db, _0x212326, _0x323958, _0x13da2d, _0x5bb8c7, _0x540d58, _0x33d618, _0x5ee0b0, _0x221bb1, _0x190535, _0x38264b, _0x14b9c0, _0x50c267, _0x199a03, _0x17fe12, _0x55cb8e = (function () {
            var _0x45815f = _0x17b28a;

            function _0x35d2c8(_0x11d6f0, _0x25a5e5) {
                this.Zo = _0x11d6f0, this.$o = _0x25a5e5;
            }
            return _0x35d2c8[_0x45815f(0x72d)]._o = function () {
                this.Zo.Yo(this.$o);
            }, _0x35d2c8;
        }());
        _0x256148 = $(_0x17b28a(0x5f3)), _0x384e8a = $(_0x17b28a(0x4a4)), _0x32f0c0 = $(_0x17b28a(0x4c5)), _0x587c85 = $(_0x17b28a(0x831)), _0x2a41b9 = $(_0x17b28a(0x462)), _0x688c31 = $(_0x17b28a(0x681)), (_0x4ea965 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x52d5f3 = _0x17b28a;
            _0xa914b4.Ho[_0x52d5f3(0x670)](this, _0x1a7a89.U(_0x52d5f3(0x44d)), false);
            var _0x4ef053 = this;
            _0x256148[_0x52d5f3(0x57b)](function () {
                var _0x5bfe5d = _0x52d5f3;
                ooo.ij.if(), _0x4ef053.ap(_0x5bfe5d(0x4fd));
            }), _0x384e8a[_0x52d5f3(0x57b)](function () {
                var _0x4668eb = _0x52d5f3;
                ooo.ij.if(), _0x4ef053.ap(_0x4668eb(0x611));
            }), _0x32f0c0[_0x52d5f3(0x57b)](function () {
                var _0x1980bd = _0x52d5f3;
                ooo.ij.if(), _0x4ef053.ap(_0x1980bd(0x3c2));
            }), _0x587c85[_0x52d5f3(0x57b)](function () {
                var _0x21e61e = _0x52d5f3;
                ooo.ij.if(), _0x4ef053.ap(_0x21e61e(0x471));
            }), _0x2a41b9.click(function () {
                var _0x217ac4 = _0x52d5f3;
                ooo.ij.if(), _0x4ef053.ap(_0x217ac4(0x827));
            }), _0x688c31[_0x52d5f3(0x57b)](function () {
                var _0x44ccb1 = _0x52d5f3;
                ooo.ij.if(), _0x4ef053.ap(_0x44ccb1(0x815));
            });
        })).prototype.Sa = function () {
            var _0x49fd87 = _0x17b28a;
            _0x4ea965[_0x49fd87(0x59f)].prototype.Sa[_0x49fd87(0x670)](this);
        }, _0x4ea965[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.g(_0xa914b4.Ho.Mo, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x4ea965.prototype.nl = function () {
            ooo.ij.jf();
        }, _0x4ea965[_0x17b28a(0x72d)].ap = function (_0x54dc59) {}, _0xa914b4.Ik = _0x4ea965, _0x5cbaab = $('#highscore-table'), _0x52aa98 = $(_0x17b28a(0x4eb)), _0x6c52b7 = $(_0x17b28a(0x7d6)), _0x4f4868 = $(_0x17b28a(0x419)), _0x2de1bc = _0x17b28a(0x695), _0x5cd32b = _0x17b28a(0x395), _0x317c09 = 'byKillsAndHeadShots', (_0x37c1ef = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x246b01 = _0x17b28a;
            _0xa914b4.Ho[_0x246b01(0x670)](this, _0x1a7a89.U('index.game.popup.menu.leaders.tab'), true);
            var _0x20aacf = this;
            this.bp = {}, this.cp = {
                'dp': {
                    'ep': _0x52aa98,
                    'fp': _0x2de1bc
                },
                'gp': {
                    'ep': _0x6c52b7,
                    'fp': _0x5cd32b
                },
                'hp': {
                    'ep': _0x4f4868,
                    'fp': _0x317c09
                }
            }, _0x52aa98[_0x246b01(0x57b)](function () {
                ooo.ij.if(), _0x20aacf.ip(_0x20aacf.cp.dp);
            }), _0x6c52b7[_0x246b01(0x57b)](function () {
                ooo.ij.if(), _0x20aacf.ip(_0x20aacf.cp.gp);
            }), _0x4f4868[_0x246b01(0x57b)](function () {
                ooo.ij.if(), _0x20aacf.ip(_0x20aacf.cp.hp);
            });
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x3cb4c7 = _0x17b28a;
            _0x37c1ef[_0x3cb4c7(0x59f)][_0x3cb4c7(0x72d)].Sa[_0x3cb4c7(0x670)](this);
        }, _0x37c1ef.prototype.Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.g(_0xa914b4.Ho.No, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x37c1ef[_0x17b28a(0x72d)].nl = function () {
            var _0x592671 = this;
            ooo.ij.jf();
            var _0x108c01 = this.Xo(0x1388),
                _0x81afca = _0x30354b.H.J + '/pub/leaders';
            _0x1a7a89.Aa(_0x81afca, function () {
                var _0x1ffe1b = {
                    [_0x2de1bc]: [],
                    [_0x5cd32b]: [],
                    [_0x317c09]: []
                };
                _0x592671.bp = _0x1ffe1b, _0x592671.ip(_0x592671.jp ?? _0x592671.cp.dp), _0x108c01._o();
            }, function (_0x3a8608) {
                _0x592671.bp = _0x3a8608, _0x592671.ip(_0x592671.jp ?? _0x592671.cp.dp), _0x108c01._o();
            });
        }, _0x37c1ef.prototype.ip = function (_0x417c91) {
            var _0x1d6025 = _0x17b28a;
            this.jp = _0x417c91;
            for (var _0x4b8e53 in this.cp) {
                this.cp[_0x1d6025(0x664)](_0x4b8e53) && this.cp[_0x4b8e53].ep[_0x1d6025(0x37b)](_0x1d6025(0x745));
            };
            this.jp.ep.addClass('pressed');
            for (var _0x42b7ff = this.bp[this.jp.fp], _0x476149 = '', _0x37f99c = 0x0; _0x37f99c < _0x42b7ff[_0x1d6025(0x56a)]; _0x37f99c++) {
                var _0xf6fa68 = _0x42b7ff[_0x37f99c];
                _0x476149 += _0x1d6025(0x364) + (_0x37f99c + 0x1) + _0x1d6025(0x47b) + _0xf6fa68[_0x1d6025(0x6f5)] + _0x1d6025(0x7c2) + _0xf6fa68[_0x1d6025(0x8d3)] + _0x1d6025(0x3bc) + _0xf6fa68.level + '</span><span>' + _0xf6fa68[_0x1d6025(0x644)] + _0x1d6025(0x3bc) + _0xf6fa68[_0x1d6025(0x344)] + ' / ' + _0xf6fa68[_0x1d6025(0x31b)] + _0x1d6025(0x4a9);
            };
            _0x5cbaab[_0x1d6025(0x6cd)](), _0x5cbaab[_0x1d6025(0x1da)](_0x476149);
        }, _0xa914b4.Kk = _0x37c1ef, _0x70bb44 = $(_0x17b28a(0x528)), _0x1f9a6d = $(_0x17b28a(0x8bc)), (_0x5fde7 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x35dc84 = _0x17b28a,
                _0x14a940 = this;
            _0xa914b4.Ho[_0x35dc84(0x670)](this, _0x1a7a89.U(_0x35dc84(0x483)), false), _0x70bb44[_0x35dc84(0x57b)](function () {
                ooo.ij.if();
                var _0x595e7f = _0x14a940.Xo(0x2710);
                _0x1a7a89.Y(function () {
                    ooo.ok.sm(function () {
                        ooo.ok.nk() && ooo.ij.mf(), _0x595e7f._o();
                    });
                }, 0x1f4);
            }), _0x1f9a6d.click(function () {
                ooo.ij.if();
                var _0x326d87 = _0x14a940.Xo(0x2710);
                _0x1a7a89.Y(function () {
                    ooo.ok.pm(function () {
                        ooo.ok.nk() && ooo.ij.mf(), _0x326d87._o();
                    });
                }, 0x1f4);
            });
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x374b88 = _0x17b28a;
            _0x5fde7[_0x374b88(0x59f)][_0x374b88(0x72d)].Sa[_0x374b88(0x670)](this);
        }, _0x5fde7[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.g(_0xa914b4.Ho.Po, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x5fde7[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.jf();
        }, _0xa914b4.Ok = _0x5fde7, _0x1f7aab = $(_0x17b28a(0x53d)), _0xda30de = $(_0x17b28a(0x26f)), _0x13284c = $(_0x17b28a(0x36e)), _0x4e727f = $(_0x17b28a(0x2be)), _0x4f6938 = $(_0x17b28a(0x5de)), _0x2a1d3b = $('#profile-stat-highScore'), _0x507be4 = $(_0x17b28a(0x6b4)), _0xfb13de = $(_0x17b28a(0x399)), _0x24937c = $(_0x17b28a(0x86c)), _0x81ee05 = $(_0x17b28a(0x854)), _0x3e7911 = $(_0x17b28a(0x219)), _0x19a387 = $(_0x17b28a(0x36f)), (_0x593730 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x3acd34 = _0x17b28a;
            _0xa914b4.Ho[_0x3acd34(0x670)](this, _0x1a7a89.U(_0x3acd34(0x516)), true);
        })).prototype.Sa = function () {
            var _0x5ca1e7 = _0x17b28a;
            _0x593730[_0x5ca1e7(0x59f)][_0x5ca1e7(0x72d)].Sa[_0x5ca1e7(0x670)](this);
        }, _0x593730[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.g(_0xa914b4.Ho.Oo, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x593730[_0x17b28a(0x72d)].nl = function () {
            var _0x307401 = _0x17b28a;
            ooo.ij.jf();
            var _0x573655 = ooo.ok.dm(),
                _0x54ce61 = moment([_0x573655.year, _0x573655[_0x307401(0x1e0)] - 0x1, _0x573655[_0x307401(0x39d)]])[_0x307401(0x6a8)]('LL');
            _0xda30de[_0x307401(0x6bb)](ooo.ok.Ll()), _0x1f7aab[_0x307401(0x8b7)]('src', ooo.ok.Nl()), _0x13284c.width(ooo.ok.Sl() * 0x64 / ooo.ok.Tl() + '%'), _0x4e727f[_0x307401(0x6bb)](ooo.ok.Sl() + _0x307401(0x6a0) + ooo.ok.Tl()), _0x4f6938[_0x307401(0x6bb)](ooo.ok.Rl()), _0x2a1d3b[_0x307401(0x6bb)](ooo.ok.Zl()), _0x507be4[_0x307401(0x6bb)](_0x1a7a89.$(ooo.ok.$l())), _0xfb13de[_0x307401(0x6bb)](ooo.ok._l()), _0x24937c[_0x307401(0x6bb)](ooo.ok.am()), _0x81ee05[_0x307401(0x6bb)](ooo.ok.bm()), _0x3e7911[_0x307401(0x6bb)](_0x1a7a89.$(ooo.ok.cm())), _0x19a387[_0x307401(0x6bb)](_0x54ce61);
        }, _0xa914b4.Mk = _0x593730, _0x2dd8e8 = $(_0x17b28a(0x1c6)), _0x121aca = $(_0x17b28a(0x604)), _0x43f2ee = $(_0x17b28a(0x2fd)), _0x425453 = $('#popup-logout'), _0x2bb5bf = $(_0x17b28a(0x8b9)), _0x16afba = $(_0x17b28a(0x34e)), _0x1a821a = $('#popup-delete-account-container'), _0x2e06af = $(_0x17b28a(0x473)), (_0x5d5a9c = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0xe03b0c = _0x17b28a;
            _0xa914b4.Ho[_0xe03b0c(0x670)](this, _0x1a7a89.U('index.game.popup.menu.settings.tab'), false);
            var _0x5ebd97 = this;
            _0x2dd8e8.click(function () {
                var _0x391c91 = !!_0x2dd8e8.prop('checked');
                _0xa914b4.Cg.Ng(_0xa914b4.Cg.Fg, _0x391c91, 0x1e), ooo.ij.$e(_0x391c91), ooo.ij.if();
            }), _0x121aca.click(function () {
                var _0x53de2a = _0xe03b0c,
                    _0x2be197 = !!_0x121aca[_0x53de2a(0x335)](_0x53de2a(0x65c));
                _0xa914b4.Cg.Ng(_0xa914b4.Cg.Gg, _0x2be197, 0x1e), ooo.ij.Xe(_0x2be197), ooo.ij.if();
            }), _0x43f2ee[_0xe03b0c(0x57b)](function () {
                ooo.ij.if();
            }), _0x425453[_0xe03b0c(0x57b)](function () {
                ooo.ij.if(), _0x5ebd97.Xo(0x1f4), ooo.ok.qm();
            }), _0x16afba[_0xe03b0c(0x57b)](function () {
                ooo.ok.nk() ? (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Fk)) : ooo.ij.nf();
            }), _0x2e06af[_0xe03b0c(0x57b)](function () {
                ooo.kp() ? (ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Dk)) : ooo.ij.nf();
            });
        })).prototype.Sa = function () {
            var _0x494280 = _0x17b28a,
                _0x1b159e, _0x488ced, _0x2c2ae3;
            _0x5d5a9c[_0x494280(0x59f)][_0x494280(0x72d)].Sa[_0x494280(0x670)](this), _0x1b159e = _0xa914b4.Cg.Og(_0xa914b4.Cg.Fg) !== _0x494280(0x350), _0x2dd8e8[_0x494280(0x335)](_0x494280(0x65c), _0x1b159e), ooo.ij.$e(_0x1b159e), _0x488ced = _0xa914b4.Cg.Og(_0xa914b4.Cg.Gg) !== _0x494280(0x350), _0x121aca[_0x494280(0x335)](_0x494280(0x65c), _0x488ced), ooo.ij.Xe(_0x488ced), _0x2c2ae3 = _0xa914b4.Cg.Og(_0xa914b4.Cg.Eg) !== _0x494280(0x350), _0x43f2ee[_0x494280(0x335)](_0x494280(0x65c), _0x2c2ae3), ooo.ok.em(function () {
                var _0x1eead2 = _0x494280;
                _0x2bb5bf[_0x1eead2(0x846)](ooo.ok.nk()), _0x1a821a[_0x1eead2(0x846)](ooo.ok.nk());
            });
        }, _0x5d5a9c[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.g(_0xa914b4.Ho.Qo, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x5d5a9c[_0x17b28a(0x72d)].nl = function () {
            var _0x24fb63 = _0x17b28a;
            ooo.ij.jf(), ooo.kp() ? _0x2e06af[_0x24fb63(0x651)]() : _0x2e06af.hide();
        }, _0x5d5a9c[_0x17b28a(0x72d)].Gi = function () {
            var _0x15875a = _0x17b28a;
            return _0x43f2ee[_0x15875a(0x335)](_0x15875a(0x65c));
        }, _0xa914b4.Pk = _0x5d5a9c, _0x95b9ee = $(_0x17b28a(0x234)), _0x4be76f = $(_0x17b28a(0x56b)), _0x4ec9f4 = $(_0x17b28a(0x7ef)), _0x25795c = $(_0x17b28a(0x705)), _0xfef36c = $(_0x17b28a(0x583)), _0xb01087 = $(_0x17b28a(0x514)), _0x2a74a6 = $('#store-item-price'), _0x4eb01b = $(_0x17b28a(0x32e)), _0x25a2e3 = $(_0x17b28a(0x5c1)), _0x4cbe00 = $(_0x17b28a(0x7f3)), (_0xf1357f = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0xf8b53b = _0x17b28a;
            _0xa914b4.Ho[_0xf8b53b(0x670)](this, _0x1a7a89.U(_0xf8b53b(0x294)), true);
            var _0x19625a = this;
            this.lp = null, this.mp = [], this.np = {}, this.op = new _0xa914b4.Lm(_0x95b9ee), _0xb01087[_0xf8b53b(0x57b)](function () {
                ooo.ij.if(), _0x19625a.pp();
            }), _0x25a2e3.click(function () {
                ooo.ij.if(), _0x19625a.lp.qp();
            }), _0x4cbe00.click(function () {
                ooo.ij.if(), _0x19625a.lp.rp();
            });
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0xff4db1 = _0x17b28a;
            _0xf1357f[_0xff4db1(0x59f)][_0xff4db1(0x72d)].Sa[_0xff4db1(0x670)](this);
            var _0x25b094 = this;
            ooo.ud.Jc(function () {
                var _0x2b6cbd = _0xff4db1,
                    _0x3b3b3f = ooo.ud.Gc();
                _0x25b094.mp = [];
                for (var _0x2d6b74 = 0x0; _0x2d6b74 < _0x3b3b3f[_0x2b6cbd(0x21b)][_0x2b6cbd(0x56a)]; _0x2d6b74++) {
                    _0x25b094.mp.push(new _0x1c0d13(_0x25b094, _0x3b3b3f.skinGroupArrayDict[_0x2d6b74]));
                };
                _0x25b094.np = {};
                for (var _0x351db9 = 0x0; _0x351db9 < _0x3b3b3f[_0x2b6cbd(0x541)][_0x2b6cbd(0x56a)]; _0x351db9++) {
                    var _0x5cc5bd = _0x3b3b3f[_0x2b6cbd(0x541)][_0x351db9];
                    _0x25b094.np[_0x5cc5bd.id] = _0x5cc5bd;
                };
                _0x25b094.sp();
            }), this.tp(false), ooo.so.fk(function () {
                _0x25b094.tp(false);
            });
        }, _0xf1357f[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.g(_0xa914b4.Ho.Ro, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0xf1357f.prototype.nl = function () {
            ooo.ij.Ye(_0xa914b4.Pe.Se.Jf), ooo.ij.jf(), this.sp(), this.op.rg(true);
        }, _0xf1357f[_0x17b28a(0x72d)].hl = function () {
            this.op.rg(false);
        }, _0xf1357f[_0x17b28a(0x72d)].qg = function () {
            this.op.qg();
        }, _0xf1357f[_0x17b28a(0x72d)].ug = function (_0x56002f, _0x39f5c3) {
            this.op.ug();
        }, _0xf1357f[_0x17b28a(0x72d)].sp = function () {
            var _0xdea06e = _0x17b28a,
                _0x5215c0 = this,
                _0x4c5f11 = this;
            _0x4eb01b.empty();
            for (var _0x1de334 = 0x0; _0x1de334 < this.mp[_0xdea06e(0x56a)]; _0x1de334++) {
                (function (_0x291db1) {
                    var _0xd24874 = _0xdea06e,
                        _0x1d150c = _0x5215c0.mp[_0x291db1],
                        _0x3ea5c4 = _0xa914b4.d[_0xd24874(0x43a)]('li');
                    _0x4eb01b[_0xd24874(0x1da)](_0x3ea5c4);
                    var _0x5d7994 = $(_0x3ea5c4);
                    _0x4c5f11.xp && _0x4c5f11.xp[_0xd24874(0x69a)] && _0x5d7994[_0xd24874(0x623)](_0xd24874(0x422)), _0x5d7994[_0xd24874(0x6bb)](_0x1d150c.up()), _0x5d7994[_0xd24874(0x57b)](function () {
                        ooo.ij.if(), _0x4c5f11.vp(_0x1d150c);
                    }), _0x1d150c.wp = _0x5d7994;
                }(_0x1de334));
            };
            if (this.mp.length > 0x0) {
                var _0x3ac626 = ooo.so.Zj(_0xa914b4._j.$j);
                for (var _0x5aa2b0 = 0x0; _0x5aa2b0 < this.mp.length; _0x5aa2b0++) {
                    var _0x539848 = this.mp[_0x5aa2b0];
                    for (var _0x248069 = _0x539848.xp[_0xdea06e(0x455)], _0x27b538 = 0x0; _0x27b538 < _0x248069[_0xdea06e(0x56a)]; _0x27b538++) {
                        if (_0x248069[_0x27b538] === _0x3ac626) {
                            _0x539848.yp = _0x27b538, this.vp(_0x539848);
                            return;
                        }
                    }
                };
                this.vp(this.mp[0x0]);
            }
        }, _0xf1357f.prototype.vp = function (_0x15735f) {
            var _0x45bf64 = _0x17b28a;
            if (this.lp !== _0x15735f) {
                this.lp = _0x15735f, _0x4eb01b[_0x45bf64(0x4b3)]().removeClass(_0x45bf64(0x745));
                this.lp.wp && this.lp.wp[_0x45bf64(0x623)](_0x45bf64(0x745));
                _0x4ec9f4[_0x45bf64(0x6bb)]('');
                if (_0x15735f.xp != null) {
                    var _0x445e14 = ooo.ud.Gc()[_0x45bf64(0x5df)][_0x15735f.xp[_0x45bf64(0x1c0)]];
                    _0x445e14 != null && _0x4ec9f4.html(_0x1a7a89.aa(_0x1a7a89.V(_0x445e14)));
                };
                this.tp(true);
            }
        }, _0xf1357f[_0x17b28a(0x72d)].zp = function () {
            return this.lp == null ? _0xa914b4.yj.Aj() : this.lp.Ap();
        }, _0xf1357f[_0x17b28a(0x72d)].pp = function () {
            var _0x1fa6c6 = this.zp();
            if (_0x1fa6c6.Cj()) {
                var _0x1791aa = _0x1fa6c6.Mc();
                this.Bp(_0x1791aa);
            }
        }, _0xf1357f[_0x17b28a(0x72d)].Bp = function (_0x2b4943) {
            var _0x20244f = ooo.so.mk(_0x2b4943, _0xa914b4._j.$j);
            if (_0x20244f != null) {
                var _0x7df2ab = _0x20244f.pk();
                if (!(ooo.ok.Ql() < _0x7df2ab)) {
                    var _0x2d023c = ooo.so.Zj(_0xa914b4._j.$j),
                        _0x206aea = ooo.so.Zj(_0xa914b4._j.ak),
                        _0x7d847b = ooo.so.Zj(_0xa914b4._j.bk),
                        _0x3f89d1 = ooo.so.Zj(_0xa914b4._j.dk),
                        _0x5067cb = ooo.so.Zj(_0xa914b4._j.ck),
                        _0x1102ce = this.Xo(0x1388);
                    ooo.ok.nm(_0x2b4943, _0xa914b4._j.$j, function () {
                        _0x1102ce._o(), ooo.Xg.gl(ooo.Xg._k);
                    }, function () {
                        ooo.ok.hm(function () {
                            ooo.so.lk(_0x2d023c, _0xa914b4._j.$j), ooo.so.lk(_0x206aea, _0xa914b4._j.ak), ooo.so.lk(_0x7d847b, _0xa914b4._j.bk), ooo.so.lk(_0x3f89d1, _0xa914b4._j.dk), ooo.so.lk(_0x5067cb, _0xa914b4._j.ck), ooo.so.lk(_0x2b4943, _0xa914b4._j.$j), _0x1102ce._o();
                        });
                    });
                }
            }
        }, _0xf1357f[_0x17b28a(0x72d)].tp = function (_0x171779) {
            var _0x27a3b3 = _0x17b28a,
                _0x357871 = ooo.so.ek(),
                _0x2c3d7e = this.zp();
            if (_0x2c3d7e.Cj()) {
                var _0x547d30 = _0x2c3d7e.Mc(),
                    _0x3b93f7 = ooo.so.mk(_0x547d30, _0xa914b4._j.$j),
                    _0x39c34a = false;
                $(_0x27a3b3(0x4c4))[_0x27a3b3(0x66d)](), $(_0x27a3b3(0x321))[_0x27a3b3(0x66d)](), $(_0x27a3b3(0x634))[_0x27a3b3(0x66d)](), $(_0x27a3b3(0x6fa))[_0x27a3b3(0x66d)](), $(_0x27a3b3(0x839))[_0x27a3b3(0x66d)]();
                if (ooo.so.ik(_0x547d30, _0xa914b4._j.$j)) {
                    _0x25795c[_0x27a3b3(0x75d)](), _0xb01087[_0x27a3b3(0x75d)]();
                    var _0xc99922 = $(_0x27a3b3(0x3a0)),
                        _0x3aab9b = $(_0x27a3b3(0x2b4)),
                        _0x19fdb5 = $(_0x27a3b3(0x7b1));
                    _0xc99922[_0x27a3b3(0x1da)](_0x3aab9b), _0xc99922[_0x27a3b3(0x1da)](_0x19fdb5), _0x4eb01b[_0x27a3b3(0x1da)](_0xc99922);
                    var _0x4d7c13 = $('<div>')[_0x27a3b3(0x8b7)]('id', _0x27a3b3(0x2ec))[_0x27a3b3(0x5a1)]({
                            'position': _0x27a3b3(0x60f),
                            'left': _0x27a3b3(0x381),
                            'top': _0x27a3b3(0x77e),
                            'font-size': '12px',
                            'color': '#fff',
                            'z-index': _0x27a3b3(0x48f)
                        })[_0x27a3b3(0x2df)](_0x27a3b3(0x5b6))[_0x27a3b3(0x529)](_0x4eb01b),
                        _0x28aafd = $(_0x27a3b3(0x3bb));
                    $('body')[_0x27a3b3(0x1da)](_0x28aafd), $(_0x27a3b3(0x5a8))[_0x27a3b3(0x57b)](function () {
                        var _0x4de942 = _0x27a3b3;
                        $(_0x4de942(0x839))[_0x4de942(0x75d)]();
                    }), $(document)[_0x27a3b3(0x61e)](function (_0x28508d) {
                        var _0x1a48c6 = _0x27a3b3,
                            _0x578b99 = $(_0x1a48c6(0x839));
                        !_0x578b99.is(_0x28508d[_0x1a48c6(0x29c)]) && _0x578b99.has(_0x28508d[_0x1a48c6(0x29c)]).length === 0x0 && _0x578b99[_0x1a48c6(0x75d)]();
                    }), $[_0x27a3b3(0x567)]($(_0x27a3b3(0x317)), function () {
                        var _0x2d59d3 = _0x27a3b3;
                        $(this)[_0x2d59d3(0x8b7)]('id') !== _0x2d59d3(0x2ec) && $(this).remove();
                    }), $(_0x27a3b3(0x45e)).on(_0x27a3b3(0x339), function () {
                        var _0x3d9003 = _0x27a3b3;
                        $(this)[_0x3d9003(0x5a1)]('pointer-events', 'auto');
                    }), $(_0x27a3b3(0x839)).on(_0x27a3b3(0x6a3), function () {
                        setTimeout(function () {
                            var _0x32c667 = _0x1c2b;
                            $('.favorites-content')[_0x32c667(0x5da)](0x0);
                        }, 0x64);
                    }), $(_0x27a3b3(0x6a5))[_0x27a3b3(0x57b)](function () {
                        var _0x4a2ff0 = _0x27a3b3;
                        confirm(_0x4a2ff0(0x27e)) && (_0x2e052d[_0x4a2ff0(0x3f7)] = [], localStorage.setItem(_0x4a2ff0(0x4e9), JSON.stringify(_0x2e052d)), _0x2c26f2(), _0x3aab9b && _0x3aab9b.is(_0x4a2ff0(0x6b5)) && _0x3aab9b[_0x4a2ff0(0x2df)](_0x4a2ff0(0x837))[_0x4a2ff0(0x5a1)](_0x4a2ff0(0x379), '#4CAF50'));
                    }), _0x3aab9b.click(function () {
                        var _0x9588f5 = _0x27a3b3,
                            _0x4498a0 = _0x547d30;
                        !_0x2e052d[_0x9588f5(0x3f7)] && (_0x2e052d[_0x9588f5(0x3f7)] = []);
                        var _0x26c24e = false;
                        try {
                            for (var _0x103f0c = 0x0; _0x103f0c < _0x2e052d[_0x9588f5(0x3f7)][_0x9588f5(0x56a)]; _0x103f0c++) {
                                if (_0x2e052d.favoriteSkins[_0x103f0c] === _0x4498a0) {
                                    _0x26c24e = true;
                                    break;
                                }
                            }
                        } catch (_0x451ed5) {
                            _0x2e052d[_0x9588f5(0x3f7)] = [];
                        }
                        if (!_0x26c24e) _0x2e052d[_0x9588f5(0x3f7)][_0x9588f5(0x6a2)](_0x4498a0), localStorage[_0x9588f5(0x510)](_0x9588f5(0x4e9), JSON[_0x9588f5(0x562)](_0x2e052d)), $(this).text('X')[_0x9588f5(0x5a1)]('background-color', _0x9588f5(0x296));
                        else {
                            var _0x3a9d5a = _0x2e052d[_0x9588f5(0x3f7)].indexOf(_0x4498a0);
                            _0x2e052d.favoriteSkins[_0x9588f5(0x758)](_0x3a9d5a, 0x1), localStorage.setItem(_0x9588f5(0x4e9), JSON[_0x9588f5(0x562)](_0x2e052d)), $(this)[_0x9588f5(0x2df)](_0x9588f5(0x837))[_0x9588f5(0x5a1)](_0x9588f5(0x379), _0x9588f5(0x463));
                        }
                    }), _0x19fdb5.click(function () {
                        var _0x68a713 = _0x27a3b3;
                        $.each($(_0x68a713(0x317)), function (_0x47a30f) {
                            _0x47a30f > 0x0 && $(this).remove();
                        }), _0x2c26f2(), $('.favorites-popup')[_0x68a713(0x651)]();
                    });
                } else {
                    if (_0x3b93f7 == null || _0x3b93f7.qk()) {
                        _0x39c34a = true, _0x25795c[_0x27a3b3(0x651)](), _0xb01087.hide(), _0xfef36c[_0x27a3b3(0x2df)](_0x1a7a89.U(_0x27a3b3(0x45a)));
                        if (_0x3b93f7 != null && _0x3b93f7.qk()) {
                            var _0x2aae96 = ooo.ud.Gc()[_0x27a3b3(0x5df)][_0x3b93f7.ln()];
                            _0x2aae96 != null && _0xfef36c.text(_0x1a7a89.V(_0x2aae96));
                        }
                    } else _0x25795c[_0x27a3b3(0x75d)](), _0xb01087.show(), _0x2a74a6.html(_0x3b93f7.pk());
                }
                _0x4be76f.html('');
                if (_0x3b93f7 != null && _0x3b93f7.mn() != null) {
                    var _0x41a2f4 = ooo.ud.Gc()[_0x27a3b3(0x5df)][_0x3b93f7.mn()];
                    _0x41a2f4 != null && _0x4be76f[_0x27a3b3(0x6bb)](_0x1a7a89.aa(_0x1a7a89.V(_0x41a2f4)));
                }
                StoreSkinID && _0x547d30 && StoreSkinID.html(_0x547d30), this.op.Gm(_0x357871.Cn(_0x547d30)), this.op.an(_0x39c34a), _0x171779 && ooo.so.lk(_0x547d30, _0xa914b4._j.$j);
            }
        };

        function _0x565037() {
            var _0x70945f = _0x17b28a;
            !_0x2e052d[_0x70945f(0x3f7)] && (_0x2e052d.favoriteSkins = [], localStorage[_0x70945f(0x510)](_0x70945f(0x4e9), JSON.stringify(_0x2e052d)));
            if (_0x2e052d[_0x70945f(0x3f7)].length > 0x0) {
                _0x2e052d[_0x70945f(0x6fd)] === undefined ? _0x2e052d.currentFavSkinIndex = 0x0 : _0x2e052d[_0x70945f(0x6fd)] = (_0x2e052d[_0x70945f(0x6fd)] + 0x1) % _0x2e052d[_0x70945f(0x3f7)][_0x70945f(0x56a)];
                var _0x2f812c = _0x2e052d[_0x70945f(0x3f7)][_0x2e052d[_0x70945f(0x6fd)]];
                _0x12af67(_0x2f812c), localStorage.setItem('SaveGamewft', JSON[_0x70945f(0x562)](_0x2e052d));
            }
        }

        function _0x12af67(_0x4f3331) {
            var _0x515454 = _0x17b28a;
            ooo.so.lk(_0x4f3331, _0xa914b4._j.$j);
            if (_0x5a0b1f && _0x5a0b1f.n && _0x5a0b1f.n.Je) {
                var _0x5ba4c3 = ooo.ud.Cc().Tb(_0x4f3331);
                _0x5a0b1f.uj && _0x5ba4c3 && _0x5a0b1f.uj.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(_0x5a0b1f.n.mi), _0x5ba4c3, ooo.ud.Cc().Vb(_0x5a0b1f.n.Vi), ooo.ud.Cc().Wb(_0x5a0b1f.n.Wi), ooo.ud.Cc().Xb(_0x5a0b1f.n.Xi), ooo.ud.Cc().Yb(_0x5a0b1f.n.Yi), _0x515454(0x229));
            }
        }

        function _0xfcfcde(_0x5bf065, _0x402269) {
            var _0x448ca5 = _0x17b28a;
            if (!_0x5bf065) return '';
            if (_0x5bf065[_0x448ca5(0x571)](_0x448ca5(0x6e0))) return _0x5bf065;
            if (_0x5bf065[_0x448ca5(0x7b8)](_0x448ca5(0x809))) return _0x5bf065[_0x448ca5(0x571)](_0x448ca5(0x727)) ? _0x5bf065[_0x448ca5(0x29f)](/https?:\/\/[^\/]+/, _0x2e052d[_0x448ca5(0x403)]) : _0x2e052d[_0x448ca5(0x403)] + _0x5bf065;
            if (_0x5bf065[_0x448ca5(0x7b8)](_0x448ca5(0x4f6))) return _0x2e052d.s_l + '/' + _0x5bf065;
            if (_0x5bf065.includes(_0x448ca5(0x448))) return 'https://resources.wormate.io' + _0x5bf065;
            if (_0x5bf065[_0x448ca5(0x7b8)](_0x448ca5(0x4f6))) return _0x2e052d[_0x448ca5(0x403)] + _0x5bf065;
            if (!_0x5bf065[_0x448ca5(0x571)]('http')) return _0x448ca5(0x26e) + _0x5bf065;
            return _0x5bf065;
        }

        function _0x5ef965(_0x2ca5b6) {
            var _0x4e8eaa = _0x17b28a;
            !_0x2e052d[_0x4e8eaa(0x3f7)] && (_0x2e052d[_0x4e8eaa(0x3f7)] = []);
            var _0x2c86f6 = false;
            for (var _0x184ac7 = 0x0; _0x184ac7 < _0x2e052d.favoriteSkins.length; _0x184ac7++) {
                if (_0x2e052d[_0x4e8eaa(0x3f7)][_0x184ac7] === _0x2ca5b6) {
                    _0x2c86f6 = true;
                    break;
                }
            }!_0x2c86f6 && (_0x2e052d.favoriteSkins[_0x4e8eaa(0x6a2)](_0x2ca5b6), localStorage[_0x4e8eaa(0x510)](_0x4e8eaa(0x4e9), JSON[_0x4e8eaa(0x562)](_0x2e052d)));
        }

        function _0x26d48e() {
            var _0x2586ec = _0x17b28a;
            if ($(_0x2586ec(0x3f1))[_0x2586ec(0x56a)] === 0x0) {
                var _0xb77337 = $('<button id=\'open-favorites-btn\' class=\'favorites-button\'>Ø¹Ø±Ø¶ Ø§Ù„Ø³ÙƒÙ†Ø§Øª Ø§Ù„Ù…ÙØ¶Ù„Ø©</button>');
                $(_0x2586ec(0x629))[_0x2586ec(0x529)](_0x2586ec(0x33a)), _0xb77337.click(function () {
                    var _0xe43568 = _0x2586ec;
                    _0x2c26f2(), $(_0xe43568(0x839))[_0xe43568(0x651)]();
                }), $(_0x2586ec(0x6a4))[_0x2586ec(0x56a)] > 0x0 && ($('#mm-skin-canv')[_0x2586ec(0x59f)]()[_0x2586ec(0x5a1)](_0x2586ec(0x8cf), _0x2586ec(0x1ed)), $(_0x2586ec(0x6a4))[_0x2586ec(0x59f)]()[_0x2586ec(0x1da)](_0xb77337));
            }
        }

        function _0x28497c(_0x2d4e95) {
            var _0x23e318 = _0x17b28a;
            _0x2e052d.favoriteSkins && _0x2d4e95 >= 0x0 && _0x2d4e95 < _0x2e052d[_0x23e318(0x3f7)][_0x23e318(0x56a)] && (_0x2e052d.favoriteSkins.splice(_0x2d4e95, 0x1), localStorage[_0x23e318(0x510)](_0x23e318(0x4e9), JSON[_0x23e318(0x562)](_0x2e052d)), _0x2c26f2());
        }

        function _0x2c26f2() {
            var _0x537102 = _0x17b28a,
                _0x267c6d = $(_0x537102(0x2e1));
            _0x267c6d[_0x537102(0x6cd)]();
            !_0x2e052d[_0x537102(0x3f7)] && (_0x2e052d[_0x537102(0x3f7)] = [], localStorage[_0x537102(0x510)]('SaveGamewft', JSON[_0x537102(0x562)](_0x2e052d)));
            try {
                if (_0x2e052d.favoriteSkins[_0x537102(0x56a)] > 0x0)
                    for (var _0x80e4a0 = 0x0; _0x80e4a0 < _0x2e052d[_0x537102(0x3f7)][_0x537102(0x56a)]; _0x80e4a0++) {
                        var _0x140e70 = _0x2e052d[_0x537102(0x3f7)][_0x80e4a0],
                            _0x2e8bfc = $('<div>')[_0x537102(0x8b7)](_0x537102(0x313), _0x80e4a0)[_0x537102(0x8b7)]('data-skin-id', _0x140e70)[_0x537102(0x5a1)]({
                                'display': _0x537102(0x284),
                                'flex-direction': _0x537102(0x1c8),
                                'align-items': 'center',
                                'padding': _0x537102(0x4da),
                                'background': _0x537102(0x281),
                                'border-radius': '6px',
                                'position': _0x537102(0x1ed),
                                'height': _0x537102(0x1f9),
                                'width': '100%'
                            }),
                            _0x151210 = $(_0x537102(0x813))[_0x537102(0x5a1)]({
                                'width': _0x537102(0x26d),
                                'height': _0x537102(0x1c3),
                                'background': _0x537102(0x716),
                                'border-radius': _0x537102(0x6f0),
                                'overflow': 'visible',
                                'position': _0x537102(0x1ed),
                                'display': _0x537102(0x284),
                                'justify-content': _0x537102(0x25a),
                                'align-items': 'center'
                            })[_0x537102(0x529)](_0x2e8bfc),
                            _0x438947 = $(_0x537102(0x1f5))[_0x537102(0x2df)]('X')[_0x537102(0x5a1)]({
                                'position': _0x537102(0x82d),
                                'top': _0x537102(0x212),
                                'right': _0x537102(0x212),
                                'background': _0x537102(0x296),
                                'color': 'white',
                                'border': 'none',
                                'padding': _0x537102(0x331),
                                'border-radius': _0x537102(0x212),
                                'cursor': _0x537102(0x4cc),
                                'font-size': _0x537102(0x303),
                                'z-index': '20'
                            }).appendTo(_0x2e8bfc),
                            _0x403d43 = _0xfabd2a(_0x140e70);
                        _0x151210[_0x537102(0x1da)](_0x403d43), _0x267c6d[_0x537102(0x1da)](_0x2e8bfc), _0x438947.click(function () {
                            var _0x4f76d8 = _0x537102,
                                _0x3b7f70 = $(this).closest(_0x4f76d8(0x68f)),
                                _0xbc45ab = parseInt(_0x3b7f70.attr(_0x4f76d8(0x313)));
                            _0x2e052d[_0x4f76d8(0x3f7)] && _0xbc45ab >= 0x0 && _0xbc45ab < _0x2e052d[_0x4f76d8(0x3f7)][_0x4f76d8(0x56a)] && (_0x2e052d[_0x4f76d8(0x3f7)][_0x4f76d8(0x758)](_0xbc45ab, 0x1), localStorage[_0x4f76d8(0x510)](_0x4f76d8(0x4e9), JSON[_0x4f76d8(0x562)](_0x2e052d)), _0x3b7f70[_0x4f76d8(0x3df)](0x12c, function () {
                                var _0x37c548 = _0x4f76d8;
                                $(this)[_0x37c548(0x66d)](), _0x267c6d[_0x37c548(0x626)](_0x37c548(0x68f))[_0x37c548(0x567)](function (_0x5296a0) {
                                    var _0x1bb772 = _0x37c548;
                                    $(this)[_0x1bb772(0x8b7)](_0x1bb772(0x313), _0x5296a0);
                                }), _0x2e052d[_0x37c548(0x3f7)][_0x37c548(0x56a)] === 0x0 && _0x478981(_0x267c6d);
                            }));
                        });
                    } else _0x478981(_0x267c6d);
            } catch (_0x209dc9) {
                _0x267c6d[_0x537102(0x1da)](_0x537102(0x389));
            }
        }

        function _0x478981(_0x58c337) {
            var _0x526673 = _0x17b28a;
            _0x58c337.append(_0x526673(0x6c5));
        }

        function _0xfabd2a(_0x51ec44) {
            var _0x2c2811 = _0x17b28a;
            !window[_0x2c2811(0x553)] && (window[_0x2c2811(0x553)] = {});
            try {
                let _0x17424c = null;
                if (typeof ooo !== _0x2c2811(0x76e)) {
                    if (ooo.ud && ooo.ud.Gc) _0x17424c = ooo.ud.Gc();
                    else {
                        if (ooo.ok && ooo.ok.xl && ooo.ok.xl[_0x2c2811(0x62e)]) _0x17424c = ooo.ok.xl[_0x2c2811(0x62e)];
                        else window[_0x2c2811(0x449)] && (_0x17424c = window[_0x2c2811(0x449)]);
                    }
                }
                if (!_0x17424c) {
                    const _0x2ca18e = localStorage.getItem(_0x2c2811(0x41c));
                    if (_0x2ca18e) try {
                        _0x17424c = JSON[_0x2c2811(0x2b2)](_0x2ca18e);
                    } catch (_0x167bac) {}
                }
                if (!_0x17424c) throw new Error('Game data not available');
                let _0x56ffaa = null;
                if (_0x17424c[_0x2c2811(0x541)] && Array.isArray(_0x17424c.skinArrayDict)) _0x56ffaa = _0x17424c[_0x2c2811(0x541)];
                else {
                    if (_0x17424c[_0x2c2811(0x37d)] && Array.isArray(_0x17424c[_0x2c2811(0x37d)])) _0x56ffaa = _0x17424c[_0x2c2811(0x37d)];
                    else throw new Error(_0x2c2811(0x347));
                }
                let _0x32a7d9 = null;
                for (let _0x9e4c38 = 0x0; _0x9e4c38 < _0x56ffaa[_0x2c2811(0x56a)]; _0x9e4c38++) {
                    if (_0x56ffaa[_0x9e4c38] && _0x56ffaa[_0x9e4c38].id === _0x51ec44) {
                        _0x32a7d9 = _0x56ffaa[_0x9e4c38];
                        break;
                    }
                }
                if (!_0x32a7d9) throw new Error('Skin not found');
                const _0x18bc84 = document[_0x2c2811(0x43a)]('div');
                _0x18bc84[_0x2c2811(0x45d)][_0x2c2811(0x6d5)] = '\x0a            width: 100%;\x0a            height: 100%;\x0a            position: relative;\x0a            overflow: visible;\x0a        ';
                const _0x198a7f = document[_0x2c2811(0x43a)]('div');
                _0x198a7f[_0x2c2811(0x866)] = '#' + _0x51ec44, _0x198a7f.style.cssText = '\x0a            position: absolute;\x0a            top: 3px;\x0a            left: 2px;\x0a            background-color: rgba(0,0,0,0.6);\x0a            color: white;\x0a            font-size: 11px;\x0a            padding: 1px 4px;\x0a            border-radius: 3px;\x0a            z-index: 10;\x0a        ', _0x18bc84[_0x2c2811(0x6c1)](_0x198a7f);
                const _0x3c0ba0 = document[_0x2c2811(0x43a)]('canvas');
                _0x3c0ba0[_0x2c2811(0x821)] = 0x258, _0x3c0ba0[_0x2c2811(0x2c1)] = 0x50, _0x3c0ba0[_0x2c2811(0x45d)][_0x2c2811(0x6d5)] = _0x2c2811(0x7b7), _0x18bc84[_0x2c2811(0x6c1)](_0x3c0ba0);
                const _0xe88ac0 = _0x3c0ba0.getContext('2d');
                _0xe88ac0[_0x2c2811(0x4d3)](0x0, 0x0, _0x3c0ba0[_0x2c2811(0x821)], _0x3c0ba0[_0x2c2811(0x2c1)]);
                if (_0x32a7d9.base && Array[_0x2c2811(0x4b8)](_0x32a7d9[_0x2c2811(0x44e)]) && _0x32a7d9.base.length > 0x0) {
                    let _0x35e939 = {},
                        _0x54bdb8 = [];
                    _0x32a7d9.base[_0x2c2811(0x3a6)](_0x130b17 => {
                        var _0x22f4ea = _0x2c2811;
                        if (!_0x130b17) return;
                        if (_0x17424c[_0x22f4ea(0x3a7)] && _0x17424c[_0x22f4ea(0x3a7)][_0x130b17]) {
                            const _0x1afc6e = _0x17424c[_0x22f4ea(0x3a7)][_0x130b17];
                            if (_0x17424c.textureDict && _0x1afc6e.texture && _0x17424c[_0x22f4ea(0x8bd)][_0x1afc6e[_0x22f4ea(0x69c)]]) {
                                const _0x49b57f = _0x17424c[_0x22f4ea(0x8bd)][_0x1afc6e[_0x22f4ea(0x69c)]];
                                if (_0x49b57f && (_0x49b57f[_0x22f4ea(0x764)] || _0x49b57f.relativePath)) {
                                    let _0x3905aa = _0xfcfcde(_0x49b57f[_0x22f4ea(0x5c8)] || _0x49b57f[_0x22f4ea(0x764)], _0x1afc6e[_0x22f4ea(0x69c)]);
                                    !_0x35e939[_0x3905aa] && (_0x35e939[_0x3905aa] = []), _0x35e939[_0x3905aa][_0x22f4ea(0x6a2)]({
                                        'id': _0x130b17,
                                        'region': _0x1afc6e
                                    }), _0x54bdb8[_0x22f4ea(0x6a2)]({
                                        'id': _0x130b17,
                                        'region': _0x1afc6e
                                    });
                                }
                            }
                        }
                    });
                    const _0x552a3a = [..._0x54bdb8][_0x2c2811(0x406)]();
                    let _0x5c20de = [..._0x552a3a];
                    while (_0x5c20de[_0x2c2811(0x56a)] < 0x1b) {
                        const _0x2ce77e = 0x1b - _0x5c20de[_0x2c2811(0x56a)],
                            _0x131152 = _0x552a3a[_0x2c2811(0x3c4)](0x0, Math[_0x2c2811(0x396)](_0x2ce77e, _0x552a3a[_0x2c2811(0x56a)]));
                        _0x5c20de = [..._0x5c20de, ..._0x131152];
                    }
                    const _0x3ab651 = 0x50,
                        _0x1efd36 = _0x3ab651 / 0x2,
                        _0x12b830 = 0.2,
                        _0x1c70ab = _0x3ab651 * _0x12b830 * _0x5c20de.length + _0x3ab651 * 0.75;
                    _0x3c0ba0[_0x2c2811(0x821)] = Math[_0x2c2811(0x78e)](0x258, _0x1c70ab), _0xe88ac0[_0x2c2811(0x4d3)](0x0, 0x0, _0x3c0ba0[_0x2c2811(0x821)], _0x3c0ba0[_0x2c2811(0x2c1)]);
                    let _0x5ef370 = 0x0;
                    const _0x2cb7a8 = Object.keys(_0x35e939).length;

                    function _0x49b454(_0x57c807) {
                        _0x1bfc37(_0x57c807);
                    }

                    function _0x1bfc37(_0x5a3093) {
                        var _0x54ec15 = _0x2c2811;
                        const _0x254976 = _0x3c0ba0[_0x54ec15(0x2c1)] / 0x2;
                        _0x5c20de[_0x54ec15(0x3a6)]((_0x68b004, _0x1a63bf) => {
                            var _0xa2a8bd = _0x54ec15;
                            if (!_0x68b004) return;
                            const _0x5b9360 = _0x68b004[_0xa2a8bd(0x857)],
                                _0x384c46 = _0x1efd36 + _0x1a63bf * _0x1efd36 * 0x2 * _0x12b830;
                            _0xe88ac0[_0xa2a8bd(0x67c)](), _0xe88ac0[_0xa2a8bd(0x7e3)](), _0xe88ac0[_0xa2a8bd(0x3f8)](_0x384c46, _0x254976, _0x1efd36, 0x0, Math.PI * 0x2), _0xe88ac0.clip();
                            const _0x5674c0 = Math.max(_0x5b9360.w, _0x5b9360.h),
                                _0x140c2f = _0x1efd36 * 0x2 / _0x5674c0,
                                _0x59ef12 = _0x384c46 - _0x5b9360.w * _0x140c2f / 0x2,
                                _0x45b2c1 = _0x254976 - _0x5b9360.h * _0x140c2f / 0x2;
                            _0xe88ac0[_0xa2a8bd(0x555)](_0x5a3093, _0x5b9360.x, _0x5b9360.y, _0x5b9360.w, _0x5b9360.h, _0x59ef12, _0x45b2c1, _0x5b9360.w * _0x140c2f, _0x5b9360.h * _0x140c2f), _0xe88ac0.restore();
                        });
                    }
                    return Object[_0x2c2811(0x404)](_0x35e939)[_0x2c2811(0x3a6)](_0x3854eb => {
                        var _0x334574 = _0x2c2811;
                        if (window[_0x334574(0x553)][_0x3854eb]) {
                            _0x49b454(window[_0x334574(0x553)][_0x3854eb]);
                            return;
                        }
                        const _0x4ba7b3 = new Image();
                        _0x4ba7b3[_0x334574(0x889)] = () => {
                            window.textureCache[_0x3854eb] = _0x4ba7b3, _0x49b454(_0x4ba7b3), _0x5ef370++;
                        }, _0x4ba7b3[_0x334574(0x5e1)] = () => {
                            _0x5ef370++;
                        }, _0x4ba7b3[_0x334574(0x5e2)] = _0x3854eb;
                    }), _0x18bc84;
                }
            } catch (_0x40d468) {
                const _0x489f7a = document[_0x2c2811(0x43a)](_0x2c2811(0x785));
                return _0x489f7a.style[_0x2c2811(0x6d5)] = _0x2c2811(0x357), _0x489f7a.textContent = 'âš ï¸', _0x489f7a;
            }
            const _0x479d3d = document[_0x2c2811(0x43a)](_0x2c2811(0x785));
            return _0x479d3d.style[_0x2c2811(0x6d5)] = '\x0a        width: 100%;\x0a        height: 100%;\x0a        display: flex;\x0a        justify-content: center;\x0a        align-items: center;\x0a        color: white;\x0a        background-color: #333;\x0a    ', _0x479d3d.textContent = 'ðŸŽ®', _0x479d3d;
        }
        _0x1c0d13 = (function () {
            var _0x52adfa = _0x17b28a;

            function _0x70a583(_0x6a8608, _0x4453f8) {
                this.Cp = _0x6a8608, this.yp = 0x0, this.xp = _0x4453f8;
            }
            return _0x70a583[_0x52adfa(0x72d)].qp = function () {
                var _0x1072a6 = _0x52adfa;
                --this.yp < 0x0 && (this.yp = this.xp[_0x1072a6(0x455)][_0x1072a6(0x56a)] - 0x1), this.Cp.tp(true);
            }, _0x70a583[_0x52adfa(0x72d)].rp = function () {
                var _0x4b736a = _0x52adfa;
                ++this.yp >= this.xp[_0x4b736a(0x455)][_0x4b736a(0x56a)] && (this.yp = 0x0), this.Cp.tp(true);
            }, _0x70a583[_0x52adfa(0x72d)].up = function () {
                var _0x1c4fcd = _0x52adfa;
                let _0x3e9d3e = _0x1a7a89.V(this.xp[_0x1c4fcd(0x7b3)]);
                return this.xp[_0x1c4fcd(0x33b)] && ((this.xp.img[_0x1c4fcd(0x50e)](_0x1c4fcd(0x6aa)) == -0x1 || !(_0x3e9d3e = _0x1c4fcd(0x4cf) + this.xp[_0x1c4fcd(0x33b)] + _0x1c4fcd(0x530))) && (this.xp[_0x1c4fcd(0x33b)][_0x1c4fcd(0x50e)]('https://lh3.googleusercontent.com') == -0x1 || !(_0x3e9d3e = _0x1c4fcd(0x4cf) + this.xp[_0x1c4fcd(0x33b)] + _0x1c4fcd(0x530))) && (_0x3e9d3e = _0x1c4fcd(0x4cf) + _0x2e052d[_0x1c4fcd(0x403)] + '/images/' + this.xp.img + '\" height=\"40\" />')), _0x3e9d3e;
            }, _0x70a583[_0x52adfa(0x72d)].Ap = function () {
                var _0x15f3b4 = _0x52adfa;
                return this.yp >= this.xp[_0x15f3b4(0x455)][_0x15f3b4(0x56a)] ? _0xa914b4.yj.Aj() : _0xa914b4.yj.Bj(this.xp.list[this.yp]);
            }, _0x70a583;
        }()), _0xa914b4.Rk = _0xf1357f, _0xc94fd3 = $('#store-go-coins-button'), _0x43c634 = $(_0x17b28a(0x388)), _0x26bd28 = $(_0x17b28a(0x393)), (_0x4f6319 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x1fa929 = _0x17b28a;
            _0xa914b4.Ho.call(this, _0x1a7a89.U(_0x1fa929(0x265)), true), _0xc94fd3.click(function () {
                ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Hk);
            }), _0x43c634.click(function () {
                ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Qk);
            }), _0x26bd28[_0x1fa929(0x57b)](function () {
                ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Uk);
            });
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x272627 = _0x17b28a;
            _0x4f6319[_0x272627(0x59f)][_0x272627(0x72d)].Sa[_0x272627(0x670)](this);
        }, _0x4f6319.prototype.Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.g(_0xa914b4.Ho.So, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x4f6319.prototype.nl = function () {
            ooo.ij.jf();
        }, _0xa914b4.Tk = _0x4f6319, _0x28865b = $(_0x17b28a(0x580)), _0x394091 = $(_0x17b28a(0x5c3)), _0x107997 = $(_0x17b28a(0x59e)), _0x11b24f = $(_0x17b28a(0x22a)), _0x31afcc = $(_0x17b28a(0x1d7)), _0x14a95b = $(_0x17b28a(0x83a)), _0x3a49b3 = $(_0x17b28a(0x6fc)), _0x50be74 = $(_0x17b28a(0x675)), _0x53e7d2 = $(_0x17b28a(0x3e4)), _0x22e324 = $(_0x17b28a(0x608)), _0x2c3d31 = $(_0x17b28a(0x539)), _0xe36ea9 = $(_0x17b28a(0x225)), _0x66c51 = $(_0x17b28a(0x352)), (_0x252aee = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x1de960 = _0x17b28a,
                _0x4a6885 = this;
            _0xa914b4.Ho.call(this, _0x1a7a89.U(_0x1de960(0x56f)), true);
            var _0x4a52ed = this;
            this.Dp = [], this.ak = new _0x29352b(this, _0xa914b4._j.ak, _0x3a49b3), this.bk = new _0x29352b(this, _0xa914b4._j.bk, _0x50be74), this.dk = new _0x29352b(this, _0xa914b4._j.dk, _0x53e7d2), this.ck = new _0x29352b(this, _0xa914b4._j.ck, _0x22e324), this.Ep = null, this.Fp = null, this.Gp = null, this.Hp = null, this.Ip = null, this.Jp = null, this.op = new _0xa914b4.Lm(_0x28865b), _0x31afcc[_0x1de960(0x57b)](function () {
                ooo.ij.if(), _0x4a52ed.Kp();
            }), _0xe36ea9.click(function () {
                ooo.ij.if(), _0x4a52ed.Ep.Lp();
            }), _0x66c51[_0x1de960(0x57b)](function () {
                ooo.ij.if(), _0x4a52ed.Ep.Mp();
            }), _0x3a49b3.click(function () {
                ooo.ij.if(), _0x4a52ed.Np(_0x4a6885.ak);
            }), _0x50be74[_0x1de960(0x57b)](function () {
                ooo.ij.if(), _0x4a52ed.Np(_0x4a6885.bk);
            }), _0x53e7d2.click(function () {
                ooo.ij.if(), _0x4a52ed.Np(_0x4a6885.dk);
            }), _0x22e324[_0x1de960(0x57b)](function () {
                ooo.ij.if(), _0x4a52ed.Np(_0x4a6885.ck);
            }), this.Dp[_0x1de960(0x6a2)](this.ak), this.Dp.push(this.bk), this.Dp[_0x1de960(0x6a2)](this.dk), this.Dp[_0x1de960(0x6a2)](this.ck);
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x3ee6fb = _0x17b28a;
            _0x252aee[_0x3ee6fb(0x59f)][_0x3ee6fb(0x72d)].Sa[_0x3ee6fb(0x670)](this);
            var _0x11484e = this;
            ooo.ud.Jc(function () {
                var _0x1e4d9e = _0x3ee6fb,
                    _0x4315c4 = ooo.ud.Gc();
                _0x11484e.Fp = _0x4315c4[_0x1e4d9e(0x72e)], _0x11484e.Gp = _0x4315c4[_0x1e4d9e(0x2d5)], _0x11484e.Hp = _0x4315c4.glassesDict, _0x11484e.Ip = _0x4315c4.hatDict, _0x11484e.Jp = _0x4315c4[_0x1e4d9e(0x470)], _0x11484e.ak.Op(_0x4315c4[_0x1e4d9e(0x3ad)]), _0x11484e.ak.Pp(_0x11484e.Fp), _0x11484e.bk.Op(_0x4315c4[_0x1e4d9e(0x343)]), _0x11484e.bk.Pp(_0x11484e.Gp), _0x11484e.dk.Op(_0x4315c4.glassesVariantArray), _0x11484e.dk.Pp(_0x11484e.Hp), _0x11484e.ck.Op(_0x4315c4[_0x1e4d9e(0x6cb)]), _0x11484e.ck.Pp(_0x11484e.Ip);
            }), this.tp(false), ooo.so.fk(function () {
                _0x11484e.tp(false);
            });
        }, _0x252aee[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.g(_0xa914b4.Ho.To, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x252aee[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.Ye(_0xa914b4.Pe.Se.Jf), ooo.ij.jf(), this.Np(this.Ep ?? this.ak), this.op.rg(true);
        }, _0x252aee[_0x17b28a(0x72d)].hl = function () {
            this.op.rg(false);
        }, _0x252aee[_0x17b28a(0x72d)].qg = function () {
            this.op.qg();
        }, _0x252aee[_0x17b28a(0x72d)].ug = function (_0x11177b, _0x28d290) {
            this.op.ug();
        }, _0x252aee[_0x17b28a(0x72d)].Np = function (_0x6bfb07) {
            var _0x585a3c = _0x17b28a;
            this.Ep = _0x6bfb07;
            for (var _0x2721b4 = 0x0; _0x2721b4 < this.Dp[_0x585a3c(0x56a)]; _0x2721b4++) {
                this.Dp[_0x2721b4].ep.removeClass(_0x585a3c(0x745));
            };
            this.Ep.ep[_0x585a3c(0x623)](_0x585a3c(0x745)), this.Ep.ml();
        }, _0x252aee[_0x17b28a(0x72d)].Qp = function () {
            return this.Ep == null ? _0xa914b4.yj.Aj() : _0xa914b4.yj.Bj({
                'Je': this.Ep.Ap(),
                'Wd': this.Ep.Wd
            });
        }, _0x252aee.prototype.Kp = function () {
            var _0x3b2fc5 = this.Qp();
            if (_0x3b2fc5.Cj()) {
                var _0x383934 = _0x3b2fc5.Mc();
                this.Rp(_0x383934.Je, _0x383934.Wd);
            }
        }, _0x252aee[_0x17b28a(0x72d)].Rp = function (_0x27ed1b, _0x59d470) {
            var _0x5c8f31 = ooo.so.mk(_0x27ed1b, _0x59d470);
            if (_0x5c8f31 != null) {
                var _0x3d35c7 = _0x5c8f31.pk();
                if (!(ooo.ok.Ql() < _0x3d35c7)) {
                    var _0x58f8b4 = ooo.so.Zj(_0xa914b4._j.$j),
                        _0x2993f9 = ooo.so.Zj(_0xa914b4._j.ak),
                        _0x2e7159 = ooo.so.Zj(_0xa914b4._j.bk),
                        _0x48b08c = ooo.so.Zj(_0xa914b4._j.dk),
                        _0x1f27e7 = ooo.so.Zj(_0xa914b4._j.ck),
                        _0x35bbfd = this.Xo(0x1388);
                    ooo.ok.nm(_0x27ed1b, _0x59d470, function () {
                        _0x35bbfd._o(), ooo.Xg.gl(ooo.Xg._k);
                    }, function () {
                        ooo.ok.hm(function () {
                            ooo.so.lk(_0x58f8b4, _0xa914b4._j.$j), ooo.so.lk(_0x2993f9, _0xa914b4._j.ak), ooo.so.lk(_0x2e7159, _0xa914b4._j.bk), ooo.so.lk(_0x48b08c, _0xa914b4._j.dk), ooo.so.lk(_0x1f27e7, _0xa914b4._j.ck), ooo.so.lk(_0x27ed1b, _0x59d470), _0x35bbfd._o();
                        });
                    });
                }
            }
        }, window[_0x17b28a(0x3a3)] = window[_0x17b28a(0x3a3)] || {}, _0x252aee.prototype.tp = function (_0x34610b) {
            var _0xf00aa6 = _0x17b28a,
                _0x4166b0 = ooo.so.ek(),
                _0x5b8252 = this.Qp();
            if (_0x5b8252.Cj()) {
                var _0x10f443 = _0x5b8252.Mc(),
                    _0x15aa9d = ooo.so.mk(_0x10f443.Je, _0x10f443.Wd),
                    _0x10147b = false;
                !_0x10f443[_0xf00aa6(0x7aa)] && (_0x10f443.selectedHats = []);
                if (ooo.so.ik(_0x10f443.Je, _0x10f443.Wd)) _0x107997[_0xf00aa6(0x75d)](), _0x31afcc.hide(), _0x10f443.Wd === 'HAT' ? this[_0xf00aa6(0x3b8)](_0x10f443.Je) : this[_0xf00aa6(0x6e8)]();
                else {
                    if (_0x15aa9d == null || _0x15aa9d.qk()) {
                        _0x10147b = true, _0x107997[_0xf00aa6(0x651)](), _0x31afcc[_0xf00aa6(0x75d)](), _0x11b24f.text(_0x1a7a89.U(_0xf00aa6(0x45a)));
                        if (_0x15aa9d != null && _0x15aa9d.qk()) {
                            var _0x38b474 = ooo.ud.Gc()[_0xf00aa6(0x5df)][_0x15aa9d.ln()];
                            _0x38b474 != null && _0x11b24f[_0xf00aa6(0x2df)](_0x1a7a89.V(_0x38b474));
                        }
                        this[_0xf00aa6(0x6e8)]();
                    } else _0x107997[_0xf00aa6(0x75d)](), _0x31afcc[_0xf00aa6(0x651)](), _0x14a95b[_0xf00aa6(0x6bb)](_0x15aa9d.pk()), this[_0xf00aa6(0x6e8)]();
                }
                _0x394091[_0xf00aa6(0x6bb)]('');
                if (_0x15aa9d != null && _0x15aa9d.mn() != null) {
                    var _0x5cece4 = ooo.ud.Gc()[_0xf00aa6(0x5df)][_0x15aa9d.mn()];
                    _0x5cece4 != null && _0x394091[_0xf00aa6(0x6bb)](_0x1a7a89.aa(_0x1a7a89.V(_0x5cece4)));
                }
                var _0x5598f1 = this.op;
                switch (_0x10f443.Wd) {
                case _0xf00aa6(0x6be):
                    _0x5598f1.Gm(_0x4166b0.Dn(_0x10f443.Je)), _0x5598f1.bn(_0x10147b);
                    break;
                case _0xf00aa6(0x804):
                    _0x5598f1.Gm(_0x4166b0.En(_0x10f443.Je)), _0x5598f1.cn(_0x10147b);
                    break;
                case _0xf00aa6(0x3f3):
                    _0x5598f1.Gm(_0x4166b0.Gn(_0x10f443.Je)), _0x5598f1.en(_0x10147b);
                    break;
                case _0xf00aa6(0x612):
                    _0x5598f1.Gm(_0x4166b0.Fn(_0x10f443.Je)), _0x5598f1.dn(_0x10147b);
                    break;
                }
                _0x34610b && ooo.so.lk(_0x10f443.Je, _0x10f443.Wd);
            }
        }, _0x252aee[_0x17b28a(0x72d)][_0x17b28a(0x3b8)] = function (_0x235018) {
            var _0x28daaa = _0x17b28a;
            this[_0x28daaa(0x878)] = _0x235018;
            if (!this[_0x28daaa(0x592)]) {
                this[_0x28daaa(0x592)] = $('<div>')[_0x28daaa(0x8b7)]('id', _0x28daaa(0x340)).css({
                    'position': _0x28daaa(0x82d),
                    'bottom': _0x28daaa(0x5d3),
                    'left': _0x28daaa(0x4d9),
                    'display': 'flex',
                    'gap': '5px'
                })[_0x28daaa(0x529)]('#wear-view'), this[_0x28daaa(0x6ac)] = $(_0x28daaa(0x1f5))[_0x28daaa(0x8b7)]('id', _0x28daaa(0x257)).css({
                    'padding': _0x28daaa(0x5af),
                    'background-color': _0x28daaa(0x463),
                    'color': 'white',
                    'border': 'none',
                    'border-radius': _0x28daaa(0x6f0),
                    'cursor': _0x28daaa(0x4cc),
                    'min-width': _0x28daaa(0x2a4)
                }).appendTo(this[_0x28daaa(0x592)]), this[_0x28daaa(0x55f)] = $(_0x28daaa(0x1f5)).attr('id', _0x28daaa(0x271))[_0x28daaa(0x5a1)]({
                    'padding': _0x28daaa(0x5af),
                    'background-color': _0x28daaa(0x3be),
                    'color': _0x28daaa(0x8af),
                    'border': _0x28daaa(0x834),
                    'border-radius': _0x28daaa(0x6f0),
                    'cursor': 'pointer'
                })[_0x28daaa(0x2df)]('â˜° Favorites')[_0x28daaa(0x529)](this[_0x28daaa(0x592)]), this[_0x28daaa(0x898)] = $(_0x28daaa(0x813))[_0x28daaa(0x8b7)]('id', _0x28daaa(0x668))[_0x28daaa(0x5a1)]({
                    'position': _0x28daaa(0x82d),
                    'bottom': _0x28daaa(0x2c0),
                    'left': _0x28daaa(0x4c9),
                    'font-size': '12px',
                    'color': _0x28daaa(0x605)
                })[_0x28daaa(0x2df)](_0x28daaa(0x253))[_0x28daaa(0x529)](_0x28daaa(0x6e2));
                var _0x4f7b4f = this;
                this[_0x28daaa(0x55f)].on(_0x28daaa(0x57b), function () {
                    var _0x1076bf = _0x28daaa;
                    _0x4f7b4f[_0x1076bf(0x5ae)]();
                });
            }
            let _0x5d66a7 = _0x2e052d[_0x28daaa(0x7aa)][_0x28daaa(0x7b8)](_0x235018);
            this[_0x28daaa(0x6ac)][_0x28daaa(0x2df)](_0x5d66a7 ? 'X' : _0x28daaa(0x837)), this[_0x28daaa(0x6ac)][_0x28daaa(0x5a1)](_0x28daaa(0x379), _0x5d66a7 ? _0x28daaa(0x296) : _0x28daaa(0x463)), this.hatToggleButton[_0x28daaa(0x6de)](_0x28daaa(0x57b));
            var _0x4f7b4f = this;
            this[_0x28daaa(0x6ac)].on(_0x28daaa(0x57b), function () {
                var _0xf63627 = _0x28daaa;
                let _0x5e4309 = _0x2e052d[_0xf63627(0x7aa)][_0xf63627(0x7b4)](_0x235018);
                _0x5e4309 >= 0x0 ? (_0x2e052d[_0xf63627(0x7aa)][_0xf63627(0x758)](_0x5e4309, 0x1), $(this)[_0xf63627(0x2df)](_0xf63627(0x54e))[_0xf63627(0x5a1)]('background-color', _0xf63627(0x463))) : (_0x2e052d.selectedHats[_0xf63627(0x6a2)](_0x235018), $(this)[_0xf63627(0x2df)]('X')[_0xf63627(0x5a1)](_0xf63627(0x379), _0xf63627(0x296))), localStorage[_0xf63627(0x510)]('SaveGamewft', JSON[_0xf63627(0x562)](_0x2e052d));
            }), this[_0x28daaa(0x592)][_0x28daaa(0x651)](), this.hatInfoText.show();
        }, _0x252aee[_0x17b28a(0x72d)][_0x17b28a(0x6e8)] = function () {
            var _0x4f7802 = _0x17b28a;
            this.hatButtonContainer && this.hatButtonContainer[_0x4f7802(0x75d)](), this.hatInfoText && this[_0x4f7802(0x898)][_0x4f7802(0x75d)]();
        };

        function _0x1f30ff(_0x2f200b) {
            var _0x313e04 = _0x17b28a;
            try {
                if (window[_0x313e04(0x3a3)][_0x2f200b] && window[_0x313e04(0x3a3)][_0x2f200b][_0x313e04(0x329)]) return window[_0x313e04(0x3a3)][_0x2f200b];
                const _0x1a7590 = ooo.ud.Cc().Yb(_0x2f200b);
                if (!_0x1a7590 || !_0x1a7590.dc || !_0x1a7590.dc[_0x313e04(0x56a)]) return null;
                const _0x4b140a = _0x1a7590.dc[0x0];
                let _0xb905e8 = null;
                if (_0x4b140a._a !== undefined) _0xb905e8 = {
                    'x': _0x4b140a._a || 0x0,
                    'y': _0x4b140a.ab || 0x0,
                    'width': _0x4b140a.bb || 0x0,
                    'height': _0x4b140a.cb || 0x0
                };
                else {
                    if (_0x4b140a[_0x313e04(0x838)]) _0xb905e8 = {
                        'x': _0x4b140a._frame.x || 0x0,
                        'y': _0x4b140a[_0x313e04(0x838)].y || 0x0,
                        'width': _0x4b140a[_0x313e04(0x838)][_0x313e04(0x821)] || 0x0,
                        'height': _0x4b140a[_0x313e04(0x838)][_0x313e04(0x2c1)] || 0x0
                    };
                    else {
                        if (_0x4b140a[_0x313e04(0x6e6)]) _0xb905e8 = {
                            'x': _0x4b140a[_0x313e04(0x6e6)].x || 0x0,
                            'y': _0x4b140a[_0x313e04(0x6e6)].y || 0x0,
                            'width': _0x4b140a[_0x313e04(0x6e6)][_0x313e04(0x821)] || 0x0,
                            'height': _0x4b140a.orig[_0x313e04(0x2c1)] || 0x0
                        };
                        else _0x4b140a.va && _0x4b140a.va[_0x313e04(0x56a)] >= 0x4 && (_0xb905e8 = {
                            'x': _0x4b140a.va[0x0] || 0x0,
                            'y': _0x4b140a.va[0x1] || 0x0,
                            'width': _0x4b140a.va[0x2] || 0x0,
                            'height': _0x4b140a.va[0x3] || 0x0
                        });
                    }
                }
                let _0x46a48e = null;
                if (_0x4b140a.Za && _0x4b140a.Za[_0x313e04(0x65d)] && _0x4b140a.Za.baseTexture.resource && _0x4b140a.Za[_0x313e04(0x65d)].resource.source) _0x46a48e = _0x4b140a.Za[_0x313e04(0x65d)][_0x313e04(0x2c5)][_0x313e04(0x5fb)];
                else {
                    if (_0x4b140a[_0x313e04(0x65d)] && _0x4b140a.baseTexture[_0x313e04(0x2c5)] && _0x4b140a[_0x313e04(0x65d)].resource.source) _0x46a48e = _0x4b140a[_0x313e04(0x65d)][_0x313e04(0x2c5)][_0x313e04(0x5fb)];
                    else {
                        if (_0x4b140a[_0x313e04(0x65d)] && _0x4b140a[_0x313e04(0x65d)][_0x313e04(0x2c5)] && _0x4b140a[_0x313e04(0x65d)][_0x313e04(0x2c5)][_0x313e04(0x384)]) _0x46a48e = _0x4b140a[_0x313e04(0x65d)].resource[_0x313e04(0x384)];
                        else _0x4b140a[_0x313e04(0x65d)] && _0x4b140a.baseTexture[_0x313e04(0x5fb)] && (_0x46a48e = _0x4b140a.baseTexture[_0x313e04(0x5fb)]);
                    }
                }
                const _0x369d83 = {
                    'hatId': _0x2f200b,
                    'image': _0x46a48e || null,
                    'coords': _0xb905e8 || null,
                    'textureData': _0x4b140a,
                    'hatData': _0x1a7590,
                    'valid': _0x46a48e && _0xb905e8 ? !![] : false
                };
                return window[_0x313e04(0x3a3)][_0x2f200b] = _0x369d83, _0x369d83;
            } catch (_0x3093ed) {
                return null;
            }
        }

        function _0x5a0ec3(_0x1c57b5) {
            var _0x315f12 = _0x17b28a;
            try {
                const _0x3bb4dc = document.createElement('div');
                _0x3bb4dc[_0x315f12(0x45d)][_0x315f12(0x6d5)] = '\x0a            width: 100%;\x0a            height: 100%;\x0a            position: relative;\x0a            overflow: visible;\x0a            display: flex;\x0a            justify-content: center;\x0a            align-items: center;\x0a        ';
                const _0x49ad15 = document[_0x315f12(0x43a)]('div');
                _0x49ad15[_0x315f12(0x866)] = '#' + _0x1c57b5, _0x49ad15[_0x315f12(0x45d)][_0x315f12(0x6d5)] = _0x315f12(0x3d5), _0x3bb4dc[_0x315f12(0x6c1)](_0x49ad15);
                const _0x209e88 = document[_0x315f12(0x43a)](_0x315f12(0x1cb));
                _0x209e88[_0x315f12(0x821)] = 0x50, _0x209e88.height = 0x50, _0x209e88[_0x315f12(0x45d)][_0x315f12(0x6d5)] = _0x315f12(0x2a8), _0x3bb4dc[_0x315f12(0x6c1)](_0x209e88);
                const _0xa8af73 = _0x209e88[_0x315f12(0x751)]('2d', {
                    'willReadFrequently': true
                });
                _0xa8af73.clearRect(0x0, 0x0, _0x209e88[_0x315f12(0x821)], _0x209e88[_0x315f12(0x2c1)]);
                const _0x30f3e9 = _0x1f30ff(_0x1c57b5);
                if (!_0x30f3e9 || !_0x30f3e9[_0x315f12(0x7ea)] || !_0x30f3e9.coords) return _0xa8af73[_0x315f12(0x447)] = _0x315f12(0x5ba), _0xa8af73[_0x315f12(0x7c3)](0x0, 0x0, _0x209e88.width, _0x209e88[_0x315f12(0x2c1)]), _0xa8af73.fillStyle = 'white', _0xa8af73[_0x315f12(0x277)] = '18px Arial', _0xa8af73[_0x315f12(0x380)] = _0x315f12(0x25a), _0xa8af73.fillText('#' + _0x1c57b5, _0x209e88[_0x315f12(0x821)] / 0x2, _0x209e88[_0x315f12(0x2c1)] / 0x2), _0x3bb4dc;
                try {
                    if (_0x30f3e9[_0x315f12(0x52e)]) {
                        _0xa8af73[_0x315f12(0x67c)]();
                        const _0x3fd7ff = Math[_0x315f12(0x396)]((_0x209e88.width - 0xa) / _0x30f3e9[_0x315f12(0x52e)][_0x315f12(0x821)], (_0x209e88[_0x315f12(0x2c1)] - 0xa) / _0x30f3e9[_0x315f12(0x52e)][_0x315f12(0x2c1)]) * 0.9,
                            _0x4bca11 = _0x30f3e9.coords[_0x315f12(0x821)] * _0x3fd7ff,
                            _0x2188ce = _0x30f3e9[_0x315f12(0x52e)][_0x315f12(0x2c1)] * _0x3fd7ff,
                            _0x30521d = (_0x209e88.width - _0x4bca11) / 0x2,
                            _0x26066a = (_0x209e88[_0x315f12(0x2c1)] - _0x2188ce) / 0x2;
                        _0xa8af73.drawImage(_0x30f3e9[_0x315f12(0x7ea)], _0x30f3e9[_0x315f12(0x52e)].x, _0x30f3e9[_0x315f12(0x52e)].y, _0x30f3e9[_0x315f12(0x52e)][_0x315f12(0x821)], _0x30f3e9[_0x315f12(0x52e)][_0x315f12(0x2c1)], _0x30521d, _0x26066a, _0x4bca11, _0x2188ce), _0xa8af73.restore();
                    } else {
                        const _0x5da6d2 = Math.min((_0x209e88.width - 0xa) / _0x30f3e9[_0x315f12(0x7ea)].width, (_0x209e88[_0x315f12(0x2c1)] - 0xa) / _0x30f3e9[_0x315f12(0x7ea)][_0x315f12(0x2c1)]) * 0.8,
                            _0x1b5573 = _0x30f3e9[_0x315f12(0x7ea)][_0x315f12(0x821)] * _0x5da6d2,
                            _0x20d2c3 = _0x30f3e9[_0x315f12(0x7ea)].height * _0x5da6d2,
                            _0x5e0db1 = (_0x209e88[_0x315f12(0x821)] - _0x1b5573) / 0x2,
                            _0x49635e = (_0x209e88[_0x315f12(0x2c1)] - _0x20d2c3) / 0x2;
                        _0xa8af73[_0x315f12(0x555)](_0x30f3e9[_0x315f12(0x7ea)], _0x5e0db1, _0x49635e, _0x1b5573, _0x20d2c3);
                    }
                } catch (_0x564b41) {
                    _0xa8af73[_0x315f12(0x447)] = _0x315f12(0x5ba), _0xa8af73[_0x315f12(0x7c3)](0x0, 0x0, _0x209e88.width, _0x209e88[_0x315f12(0x2c1)]), _0xa8af73[_0x315f12(0x447)] = _0x315f12(0x8af), _0xa8af73[_0x315f12(0x277)] = _0x315f12(0x57e), _0xa8af73[_0x315f12(0x380)] = 'center', _0xa8af73[_0x315f12(0x3ff)]('#' + _0x1c57b5, _0x209e88[_0x315f12(0x821)] / 0x2, _0x209e88.height / 0x2);
                }
                return _0x3bb4dc;
            } catch (_0x37ae32) {
                const _0x5e56e3 = document.createElement('div');
                return _0x5e56e3[_0x315f12(0x45d)][_0x315f12(0x6d5)] = _0x315f12(0x357), _0x5e56e3[_0x315f12(0x866)] = '#' + _0x1c57b5, _0x5e56e3;
            }
        }
        _0x252aee.prototype[_0x17b28a(0x5ae)] = function () {
            var _0x2d715f = _0x17b28a;
            $('#favorites-dialog, #favorites-overlay')[_0x2d715f(0x66d)]();
            var _0xb76086 = $(_0x2d715f(0x813)).attr('id', _0x2d715f(0x601)).css({
                    'position': _0x2d715f(0x60f),
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'height': _0x2d715f(0x26d),
                    'background-color': _0x2d715f(0x87b),
                    'z-index': _0x2d715f(0x44b)
                })[_0x2d715f(0x529)](_0x2d715f(0x4dc)),
                _0xf95096 = $(_0x2d715f(0x813))[_0x2d715f(0x8b7)]('id', _0x2d715f(0x542))[_0x2d715f(0x5a1)]({
                    'position': 'fixed',
                    'top': _0x2d715f(0x67a),
                    'left': _0x2d715f(0x67a),
                    'transform': _0x2d715f(0x52f),
                    'background-color': _0x2d715f(0x76f),
                    'border-radius': _0x2d715f(0x779),
                    'box-shadow': _0x2d715f(0x3d6),
                    'z-index': '1000',
                    'width': _0x2d715f(0x548),
                    'overflow': _0x2d715f(0x450),
                    'color': _0x2d715f(0x8af)
                }).appendTo(_0x2d715f(0x4dc)),
                _0x1b0206 = $(_0x2d715f(0x813)).css({
                    'padding': _0x2d715f(0x2f5),
                    'background-color': _0x2d715f(0x281),
                    'border-bottom': '1px solid #333345',
                    'position': _0x2d715f(0x1ed),
                    'display': _0x2d715f(0x284),
                    'justify-content': _0x2d715f(0x269),
                    'align-items': 'center'
                })[_0x2d715f(0x529)](_0xf95096);
            $('<h3>')[_0x2d715f(0x2df)](_0x2d715f(0x33c))[_0x2d715f(0x5a1)]({
                'margin': _0x2d715f(0x81a),
                'font-size': _0x2d715f(0x581),
                'color': 'white',
                'padding-left': _0x2d715f(0x1c9)
            })[_0x2d715f(0x529)](_0x1b0206);
            var _0xcfeeea = $(_0x2d715f(0x1f5))[_0x2d715f(0x6bb)]('&times;')[_0x2d715f(0x5a1)]({
                    'position': _0x2d715f(0x82d),
                    'top': _0x2d715f(0x779),
                    'left': _0x2d715f(0x2c0),
                    'font-size': _0x2d715f(0x6ff),
                    'background': _0x2d715f(0x834),
                    'border': 'none',
                    'color': _0x2d715f(0x725),
                    'cursor': 'pointer',
                    'padding': _0x2d715f(0x1f8),
                    'line-height': '1',
                    'font-weight': _0x2d715f(0x7b5)
                })[_0x2d715f(0x529)](_0x1b0206),
                _0x3b07ab = $(_0x2d715f(0x1f5))[_0x2d715f(0x2df)](_0x2d715f(0x556))[_0x2d715f(0x5a1)]({
                    'padding': _0x2d715f(0x2c8),
                    'background-color': _0x2d715f(0x296),
                    'color': _0x2d715f(0x8af),
                    'border': _0x2d715f(0x834),
                    'border-radius': _0x2d715f(0x6f0),
                    'cursor': _0x2d715f(0x4cc),
                    'font-size': _0x2d715f(0x25b)
                }).appendTo(_0x1b0206),
                _0x3606fb = $('<div>')[_0x2d715f(0x8b7)]('id', 'favorites-content')[_0x2d715f(0x5a1)]({
                    'padding': _0x2d715f(0x2f5),
                    'max-height': _0x2d715f(0x367),
                    'overflow-y': _0x2d715f(0x74b)
                })[_0x2d715f(0x529)](_0xf95096),
                _0x1f0d48 = $(_0x2d715f(0x813)).attr(_0x2d715f(0x47c), 'favorites-grid')[_0x2d715f(0x5a1)]({
                    'display': _0x2d715f(0x799),
                    'grid-template-columns': _0x2d715f(0x81d),
                    'gap': _0x2d715f(0x25b),
                    'padding': '0',
                    'margin': '0'
                })[_0x2d715f(0x529)](_0x3606fb),
                _0x42cfb5 = this;
            _0x3b07ab.on(_0x2d715f(0x57b), function () {
                var _0x37874b = _0x2d715f;
                confirm(_0x37874b(0x8a2)) && (_0x2e052d[_0x37874b(0x7aa)] = [], localStorage[_0x37874b(0x510)](_0x37874b(0x4e9), JSON[_0x37874b(0x562)](_0x2e052d)), _0x1f0d48[_0x37874b(0x6cd)](), $('<div>')[_0x37874b(0x5a1)]({
                    'text-align': 'center',
                    'padding': _0x37874b(0x2c0),
                    'color': _0x37874b(0x725),
                    'margin': _0x37874b(0x7e1),
                    'grid-column': '1 / span 3'
                })[_0x37874b(0x2df)](_0x37874b(0x29e))[_0x37874b(0x529)](_0x1f0d48), _0x42cfb5[_0x37874b(0x6ac)] && _0x42cfb5[_0x37874b(0x6ac)].is(_0x37874b(0x6b5)) && _0x42cfb5.hatToggleButton[_0x37874b(0x2df)](_0x37874b(0x837)).css(_0x37874b(0x379), _0x37874b(0x463)));
            });

            function _0x4dbcb7() {
                var _0x47a0bc = _0x2d715f;
                _0xf95096[_0x47a0bc(0x66d)](), _0xb76086.remove();
            }
            _0xcfeeea.on(_0x2d715f(0x57b), _0x4dbcb7), _0xb76086.on(_0x2d715f(0x57b), _0x4dbcb7), !_0x2e052d.selectedHats || _0x2e052d[_0x2d715f(0x7aa)][_0x2d715f(0x56a)] === 0x0 ? $(_0x2d715f(0x813))[_0x2d715f(0x5a1)]({
                'text-align': 'center',
                'padding': _0x2d715f(0x2c0),
                'color': '#aaa',
                'margin': _0x2d715f(0x7e1),
                'grid-column': _0x2d715f(0x491)
            })[_0x2d715f(0x2df)](_0x2d715f(0x29e))[_0x2d715f(0x529)](_0x1f0d48) : (_0x2e052d[_0x2d715f(0x7aa)].forEach(function (_0x39eb7a) {
                _0x1f30ff(_0x39eb7a);
            }), _0x2e052d[_0x2d715f(0x7aa)].forEach(function (_0x4cebc5, _0x6c3113) {
                var _0x475df5 = _0x2d715f,
                    _0x2b6f47 = $(_0x475df5(0x813))[_0x475df5(0x8b7)]('data-index', _0x6c3113)[_0x475df5(0x8b7)](_0x475df5(0x85e), _0x4cebc5).css({
                        'display': _0x475df5(0x284),
                        'flex-direction': _0x475df5(0x1c8),
                        'align-items': _0x475df5(0x25a),
                        'padding': _0x475df5(0x4da),
                        'background': '#252538',
                        'border-radius': '6px',
                        'position': 'relative',
                        'height': '87px',
                        'width': '100%'
                    })[_0x475df5(0x529)](_0x1f0d48),
                    _0x1ba9fc = $('<div>')[_0x475df5(0x5a1)]({
                        'width': _0x475df5(0x26d),
                        'height': _0x475df5(0x244),
                        'background': 'transparent',
                        'border-radius': _0x475df5(0x6f0),
                        'overflow': 'visible',
                        'position': 'relative',
                        'display': _0x475df5(0x284),
                        'justify-content': _0x475df5(0x25a),
                        'align-items': _0x475df5(0x25a)
                    })[_0x475df5(0x529)](_0x2b6f47),
                    _0x50c788 = $(_0x475df5(0x1f5)).text('X').css({
                        'position': _0x475df5(0x82d),
                        'top': _0x475df5(0x6f0),
                        'right': _0x475df5(0x6f0),
                        'background': '#f44336',
                        'color': _0x475df5(0x8af),
                        'border': 'none',
                        'padding': _0x475df5(0x507),
                        'border-radius': _0x475df5(0x212),
                        'cursor': 'pointer',
                        'font-size': _0x475df5(0x25b),
                        'z-index': '20'
                    })[_0x475df5(0x529)](_0x2b6f47),
                    _0x34ac89 = _0x5a0ec3(_0x4cebc5);
                _0x1ba9fc[_0x475df5(0x1da)](_0x34ac89), _0x50c788.on(_0x475df5(0x57b), function (_0x339406) {
                    var _0x4680f2 = _0x475df5;
                    _0x339406[_0x4680f2(0x812)]();
                    var _0x54ca87 = $(this).closest(_0x4680f2(0x68f)),
                        _0x45a53d = parseInt(_0x54ca87[_0x4680f2(0x8b7)](_0x4680f2(0x313))),
                        _0x126e7b = _0x54ca87[_0x4680f2(0x8b7)]('data-hat-id');
                    _0x2e052d[_0x4680f2(0x7aa)] && _0x45a53d >= 0x0 && _0x45a53d < _0x2e052d[_0x4680f2(0x7aa)][_0x4680f2(0x56a)] && (_0x2e052d[_0x4680f2(0x7aa)][_0x4680f2(0x758)](_0x45a53d, 0x1), localStorage[_0x4680f2(0x510)](_0x4680f2(0x4e9), JSON[_0x4680f2(0x562)](_0x2e052d)), _0x54ca87.fadeOut(0x12c, function () {
                        var _0x5c5afe = _0x4680f2;
                        $(this)[_0x5c5afe(0x66d)](), _0x1f0d48[_0x5c5afe(0x626)]('[data-index]')[_0x5c5afe(0x567)](function (_0x29e3e6) {
                            var _0x93ea27 = _0x5c5afe;
                            $(this)[_0x93ea27(0x8b7)](_0x93ea27(0x313), _0x29e3e6);
                        }), _0x2e052d[_0x5c5afe(0x7aa)].length === 0x0 && (_0x1f0d48.empty(), $(_0x5c5afe(0x813))[_0x5c5afe(0x5a1)]({
                            'text-align': 'center',
                            'padding': _0x5c5afe(0x2c0),
                            'color': _0x5c5afe(0x725),
                            'margin': _0x5c5afe(0x7e1),
                            'grid-column': _0x5c5afe(0x1df)
                        })[_0x5c5afe(0x2df)](_0x5c5afe(0x29e))[_0x5c5afe(0x529)](_0x1f0d48)), _0x42cfb5[_0x5c5afe(0x878)] === _0x126e7b && _0x42cfb5.hatToggleButton && _0x42cfb5[_0x5c5afe(0x6ac)].text(_0x5c5afe(0x837)).css(_0x5c5afe(0x379), _0x5c5afe(0x463));
                    }));
                });
            })), $(_0x2d715f(0x45e)).on(_0x2d715f(0x339), function () {
                var _0x1a51ef = _0x2d715f;
                $(this)[_0x1a51ef(0x5a1)](_0x1a51ef(0x3e7), _0x1a51ef(0x74b));
            }), $(_0x2d715f(0x839)).on(_0x2d715f(0x6a3), function () {
                setTimeout(function () {
                    var _0x533884 = _0x1c2b;
                    $(_0x533884(0x45e))[_0x533884(0x5da)](0x0);
                }, 0x64);
            });
        };

        function _0x22fbe9(_0x351c5a) {
            try {
                if (ooo && ooo.Mh && ooo.Mh.Lh && ooo.Mh.Lh.ki) {
                    const _0xac182d = ooo.Mh.Lh.ki.Yi;
                    ooo.Mh.Lh.ki.Yi = _0x351c5a;
                    ooo.Mh.Qh && ooo.Mh.Qh.fh && ooo.Mh.li && ooo.Mh.li[ooo.Mh.Qh.fh] && ooo.Mh.li[ooo.Mh.Qh.fh].ki && (ooo.Mh.li[ooo.Mh.Qh.fh].ki.Yi = _0x351c5a);
                    if (_0x5a0b1f && _0x5a0b1f.uj && _0x5a0b1f.n) {
                        const _0x45c43a = _0x1d8812(_0x5a0b1f.uj);
                        if (_0x45c43a) return _0x15b6a5(_0x45c43a, _0x351c5a), true;
                        else {
                            const _0x322802 = ooo.ud.Cc().Yb(_0x351c5a);
                            if (_0x322802) return _0x1684c0(_0x5a0b1f.uj, _0x322802), true;
                        }
                    }
                    return true;
                }
            } catch (_0x47111b) {}
            return false;
        }

        function _0x1d8812(_0x5ac100) {
            if (_0x5ac100.Zc && _0x5ac100.Zc.rd) return _0x5ac100.Zc.rd;
            return null;
        }

        function _0x15b6a5(_0x426a1e, _0x11f053) {
            var _0x5ccc83 = _0x17b28a;
            if (_0x426a1e && _0x426a1e[_0x5ccc83(0x56a)] > 0x0) {
                const _0x3f9fa9 = ooo.ud.Cc().Yb(_0x11f053);
                if (_0x3f9fa9 && _0x3f9fa9.dc && _0x3f9fa9.dc[_0x5ccc83(0x56a)] > 0x0) try {
                    return _0x426a1e[0x0].kd(_0x3f9fa9.dc[0x0]), true;
                } catch (_0x117d99) {}
            }
            return false;
        }

        function _0x1684c0(_0x33e3c4, _0x49d0bc) {
            if (_0x33e3c4 && _0x33e3c4.Zc && _0x49d0bc) try {
                return _0x33e3c4.Zc.yd(0.004, _0x33e3c4.Zc.rd, _0x49d0bc), true;
            } catch (_0x19de38) {}
            return false;
        }

        function _0x2fa5bd() {
            var _0xcb14ee = _0x17b28a;
            if (!_0x2e052d[_0xcb14ee(0x7aa)]) {
                _0x2e052d.selectedHats = [], localStorage[_0xcb14ee(0x510)](_0xcb14ee(0x4e9), JSON[_0xcb14ee(0x562)](_0x2e052d));
                return;
            }
            if (_0x2e052d[_0xcb14ee(0x7aa)].length > 0x0) {
                _0x2e052d[_0xcb14ee(0x407)] === undefined ? _0x2e052d[_0xcb14ee(0x407)] = 0x0 : _0x2e052d[_0xcb14ee(0x407)] = (_0x2e052d[_0xcb14ee(0x407)] + 0x1) % _0x2e052d.selectedHats[_0xcb14ee(0x56a)];
                let _0x47ecf9 = _0x2e052d[_0xcb14ee(0x7aa)][_0x2e052d[_0xcb14ee(0x407)]];
                const _0x5aa362 = _0x22fbe9(_0x47ecf9);
                localStorage[_0xcb14ee(0x510)]('SaveGamewft', JSON[_0xcb14ee(0x562)](_0x2e052d));
            }
        }

        function _0x4e9371() {
            var _0x4b3f3a = _0x17b28a;
            if (window.hatCyclingInitialized) return;
            $(document).on(_0x4b3f3a(0x6e9), function (_0x54bb1d) {
                var _0x30aaaf = _0x4b3f3a;
                (_0x54bb1d[_0x30aaaf(0x5f4)] === 0x32 || _0x54bb1d[_0x30aaaf(0x4f1)] === 0x32) && _0x2fa5bd();
            }), window.hatCyclingInitialized = true;
        }

        function _0x1762d3() {
            var _0x3e1c48 = _0x17b28a;
            if (!_0x2e052d[_0x3e1c48(0x7aa)] || _0x2e052d.selectedHats[_0x3e1c48(0x56a)] === 0x0) return;
            _0x2e052d[_0x3e1c48(0x7aa)][_0x3e1c48(0x3a6)](function (_0x53c0af) {
                _0x1f30ff(_0x53c0af);
            });
        }
        $(document)[_0x17b28a(0x30e)](function () {
            setTimeout(function () {
                var _0x5916ed = _0x1c2b;
                _0x4e9371(), _0x1762d3(), window[_0x5916ed(0x25f)] = function () {
                    var _0x13ab6c = _0x5916ed;
                    if (_0x252aee[_0x13ab6c(0x72d)][_0x13ab6c(0x5ae)]) {
                        var _0x574134 = new _0x252aee();
                        _0x574134.showFavoritesDialog();
                    }
                }, window[_0x5916ed(0x1fe)] = function () {};
            }, 0x3e8);
        });

        function _0x2399e6() {
            var _0xc8ba6 = _0x17b28a;
            try {
                const _0x1d5f84 = [],
                    _0xa154c4 = ooo.ud.Cc();
                if (!_0xa154c4) return _0x1d5f84;
                for (let _0x3c2d74 in _0xa154c4.Vb) {
                    _0xa154c4.Vb.hasOwnProperty(_0x3c2d74) && _0x1d5f84[_0xc8ba6(0x6a2)](_0x3c2d74);
                }
                return _0x1d5f84;
            } catch (_0x41a068) {
                return [];
            }
        }

        function _0xf7c52c() {}
        window.addEventListener(_0x17b28a(0x4d1), function () {
            setTimeout(function () {
                _0x1762d3(), _0xf7c52c();
            }, 0x7d0);
        }), _0x29352b = (function () {
            var _0x32325c = _0x17b28a;

            function _0x23f388(_0x2b19bd, _0x3a9431, _0x4724f0) {
                this.Cp = _0x2b19bd, this.Wd = _0x3a9431, this.ep = _0x4724f0, this.Lc = {}, this.Sp = [
                    []
                ], this.Tp = -0xa, this.Up = -0xa;
            }
            return _0x23f388[_0x32325c(0x72d)].Op = function (_0x1aee28) {
                this.Sp = _0x1aee28;
            }, _0x23f388[_0x32325c(0x72d)].Pp = function (_0x104685) {
                this.Lc = _0x104685;
            }, _0x23f388.prototype.ml = function () {
                var _0x5ad731 = _0x32325c,
                    _0x35e2c7 = ooo.so.Zj(this.Wd);
                for (var _0x409bf5 = 0x0; _0x409bf5 < this.Sp[_0x5ad731(0x56a)]; _0x409bf5++) {
                    for (var _0x4d5f58 = 0x0; _0x4d5f58 < this.Sp[_0x409bf5][_0x5ad731(0x56a)]; _0x4d5f58++) {
                        if (this.Sp[_0x409bf5][_0x4d5f58] === _0x35e2c7) {
                            this.Vp(_0x409bf5), this.Wp(_0x4d5f58);
                            return;
                        }
                    }
                };
                this.Vp(0x0), this.Wp(0x0);
            }, _0x23f388.prototype.Lp = function () {
                var _0x4b4f90 = _0x32325c,
                    _0x5f0971 = this.Tp - 0x1;
                _0x5f0971 < 0x0 && (_0x5f0971 = this.Sp[_0x4b4f90(0x56a)] - 0x1), this.Vp(_0x5f0971), this.Wp(this.Up % this.Sp[_0x5f0971][_0x4b4f90(0x56a)]);
            }, _0x23f388.prototype.Mp = function () {
                var _0x2ee7f3 = _0x32325c,
                    _0x23a4c6 = this.Tp + 0x1;
                _0x23a4c6 >= this.Sp[_0x2ee7f3(0x56a)] && (_0x23a4c6 = 0x0), this.Vp(_0x23a4c6), this.Wp(this.Up % this.Sp[_0x23a4c6][_0x2ee7f3(0x56a)]);
            }, _0x23f388[_0x32325c(0x72d)].Vp = function (_0x46381c) {
                var _0x1f5cba = _0x32325c,
                    _0x155676 = this;
                if (!(_0x46381c < 0x0) && !(_0x46381c >= this.Sp[_0x1f5cba(0x56a)])) {
                    this.Tp = _0x46381c, _0x2c3d31.empty();
                    var _0x3e9527 = this.Sp[this.Tp];
                    if (_0x3e9527[_0x1f5cba(0x56a)] > 0x1)
                        for (var _0x32dff2 = 0x0; _0x32dff2 < _0x3e9527[_0x1f5cba(0x56a)]; _0x32dff2++) {
                            (function (_0x238da5) {
                                var _0x170c9e = _0x1f5cba,
                                    _0x417534 = _0x3e9527[_0x238da5],
                                    _0x1bcf15 = _0x155676.Lc[_0x417534],
                                    _0x48afb1 = '#' + _0x155676.Cp.Jp[_0x1bcf15[_0x170c9e(0x7e0)]],
                                    _0x595fe9 = $('<div style=\"border-color: ' + _0x48afb1 + _0x170c9e(0x5e6));
                                _0x595fe9[_0x170c9e(0x57b)](function () {
                                    ooo.ij.if(), _0x155676.Wp(_0x238da5);
                                }), _0x2c3d31[_0x170c9e(0x1da)](_0x595fe9);
                            }(_0x32dff2));
                        }
                }
            }, _0x23f388.prototype.Wp = function (_0x5b9c4e) {
                var _0x31026f = _0x32325c;
                if (!(_0x5b9c4e < 0x0) && !(_0x5b9c4e >= this.Sp[this.Tp].length)) {
                    this.Up = _0x5b9c4e, _0x2c3d31[_0x31026f(0x4b3)]()[_0x31026f(0x5a1)](_0x31026f(0x379), _0x31026f(0x716));
                    var _0x4b98ad = _0x2c3d31.children(':nth-child(' + (0x1 + _0x5b9c4e) + ')');
                    _0x4b98ad[_0x31026f(0x5a1)](_0x31026f(0x379), _0x4b98ad[_0x31026f(0x5a1)]('border-color')), this.Cp.tp(true);
                }
            }, _0x23f388[_0x32325c(0x72d)].Ap = function () {
                return this.Sp[this.Tp][this.Up];
            }, _0x23f388;
        }()), _0xa914b4.Vk = _0x252aee, _0x5659d5 = $(_0x17b28a(0x81b)), _0x1d8a89 = $(_0x17b28a(0x3a9)), (_0x2491c3 = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x4a1e20 = _0x17b28a;
            _0xa914b4.Ho.call(this, _0x1a7a89.U(_0x4a1e20(0x32b)), false), _0x5659d5.click(function () {
                ooo.ij.if(), ooo.kp() ? (ooo.Xg.gl(ooo.Xg.Jf), ooo.Xp(false, true), ooo.Xg.Yk.Fo(new _0xa914b4.Yp())) : ooo.Xg.jl();
            }), _0x1d8a89[_0x4a1e20(0x57b)](function () {
                ooo.ij.if(), ooo.Xg.jl();
            });
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x233932 = _0x17b28a;
            _0x2491c3.parent[_0x233932(0x72d)].Sa[_0x233932(0x670)](this);
        }, _0x2491c3[_0x17b28a(0x72d)].Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.g(_0xa914b4.Ho.Uo, 0xc8), _0x51599b.f.h(_0xa914b4.Ho.Vo, 0x32);
        }, _0x2491c3[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.jf();
        }, _0xa914b4.Ek = _0x2491c3, _0x19421c = $(_0x17b28a(0x7bd)), _0x2a404c = $(_0x17b28a(0x5c6)), _0xf3457a = $(_0x17b28a(0x7ca)), (_0x57c2db = _0x1a7a89.ca(_0xa914b4.Ho, function () {
            var _0x21cd20 = _0x17b28a;
            _0xa914b4.Ho.call(this, _0x1a7a89.U('index.game.popup.menu.delete.tab'), false), _0x2a404c[_0x21cd20(0x57b)](function () {
                ooo.ij.if(), ooo.ok.nk() ? (ooo.ok.ym(), ooo.ok.qm()) : ooo.Xg.jl();
            }), _0xf3457a[_0x21cd20(0x57b)](function () {
                ooo.ij.if(), ooo.Xg.jl();
            }), this.Zp = [];
        }))[_0x17b28a(0x72d)].Sa = function () {
            var _0x138a6d = _0x17b28a;
            _0x57c2db[_0x138a6d(0x59f)][_0x138a6d(0x72d)].Sa.call(this);
        }, _0x57c2db.prototype.Wo = function () {
            _0x51599b.f.h(_0xa914b4.Ho.Mo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.No, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Oo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Po, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Qo, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Ro, 0x32), _0x51599b.f.h(_0xa914b4.Ho.So, 0x32), _0x51599b.f.h(_0xa914b4.Ho.To, 0x32), _0x51599b.f.h(_0xa914b4.Ho.Uo, 0x32), _0x51599b.f.g(_0xa914b4.Ho.Vo, 0xc8);
        }, _0x57c2db[_0x17b28a(0x72d)].nl = function () {
            var _0x5bcd44 = _0x17b28a;
            ooo.ij.nf(), _0x51599b.f.h(_0x2a404c, 0x1), _0x51599b.f.g(_0x19421c, 0x1), _0x19421c[_0x5bcd44(0x2df)](_0x5bcd44(0x438)), this.$p(), this._p(function () {
                var _0x3ecb2d = _0x5bcd44;
                _0x19421c[_0x3ecb2d(0x2df)]('..9 ..');
            }, 0x3e8), this._p(function () {
                var _0x3ea24c = _0x5bcd44;
                _0x19421c[_0x3ea24c(0x2df)](_0x3ea24c(0x297));
            }, 0x7d0), this._p(function () {
                var _0x3ead4f = _0x5bcd44;
                _0x19421c[_0x3ead4f(0x2df)](_0x3ead4f(0x829));
            }, 0xbb8), this._p(function () {
                _0x19421c.text('..6 ..');
            }, 0xfa0), this._p(function () {
                var _0x54eef4 = _0x5bcd44;
                _0x19421c[_0x54eef4(0x2df)](_0x54eef4(0x2fa));
            }, 0x1388), this._p(function () {
                var _0xebc582 = _0x5bcd44;
                _0x19421c[_0xebc582(0x2df)](_0xebc582(0x248));
            }, 0x1770), this._p(function () {
                _0x19421c.text('..3 ..');
            }, 0x1b58), this._p(function () {
                var _0x60370c = _0x5bcd44;
                _0x19421c[_0x60370c(0x2df)](_0x60370c(0x293));
            }, 0x1f40), this._p(function () {
                var _0x53f99b = _0x5bcd44;
                _0x19421c.text(_0x53f99b(0x326));
            }, 0x2328), this._p(function () {
                _0x51599b.f.g(_0x2a404c, 0x12c), _0x51599b.f.h(_0x19421c, 0x1);
            }, 0x2710);
        }, _0x57c2db[_0x17b28a(0x72d)]._p = function (_0x192a35, _0x27fbaa) {
            var _0x2c1dfb = _0x17b28a,
                _0x474b50 = _0x1a7a89.Y(_0x192a35, _0x27fbaa);
            this.Zp[_0x2c1dfb(0x6a2)](_0x474b50);
        }, _0x57c2db[_0x17b28a(0x72d)].$p = function () {
            var _0x543620 = _0x17b28a;
            for (var _0x101087 = 0x0; _0x101087 < this.Zp[_0x543620(0x56a)]; _0x101087++) {
                _0x1a7a89.Z(this.Zp[_0x101087]);
            };
            this.Zp = [];
        }, _0xa914b4.Gk = _0x57c2db, _0xa914b4.aq = (function () {
            var _0x21a721 = _0x17b28a;

            function _0x4a9da4() {
                this.Go = function () {};
            }
            return _0x4a9da4[_0x21a721(0x72d)].ag = function () {}, _0x4a9da4[_0x21a721(0x72d)].nl = function () {}, _0x4a9da4;
        }()), (_0x212326 = _0x1a7a89.ca(_0xa914b4.aq, function (_0x1b0619) {
            var _0x3741c6 = _0x17b28a;
            _0xa914b4.aq[_0x3741c6(0x670)](this);
            var _0x500d9b = _0x1a7a89.Ca() + '_' + _0x1a7a89._(0x3e8 + _0x1a7a89.ma() * 0x2327);
            this.bq = $(_0x3741c6(0x793) + _0x500d9b + _0x3741c6(0x4ca) + _0x1b0619 + '</div><div class=\"toaster-coins-close\">' + _0x1a7a89.U(_0x3741c6(0x80a)) + _0x3741c6(0x400));
            var _0x2c4ce8 = this;
            this.bq[_0x3741c6(0x626)](_0x3741c6(0x662))[_0x3741c6(0x57b)](function () {
                ooo.ij.if(), _0x2c4ce8.Go();
            });
        }))[_0x17b28a(0x72d)].ag = function () {
            return this.bq;
        }, _0x212326[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.lf();
        }, _0xa914b4.mm = _0x212326, (_0x323958 = _0x1a7a89.ca(_0xa914b4.aq, function (_0x5c60ca) {
            var _0x5eb1e1 = _0x17b28a;
            _0xa914b4.aq[_0x5eb1e1(0x670)](this);
            var _0x3c4760 = _0x1a7a89.Ca() + '_' + _0x1a7a89._(0x3e8 + _0x1a7a89.ma() * 0x2327);
            this.bq = $(_0x5eb1e1(0x793) + _0x3c4760 + _0x5eb1e1(0x354) + _0x5c60ca + _0x5eb1e1(0x496) + _0x1a7a89.U(_0x5eb1e1(0x835)) + _0x5eb1e1(0x674) + _0x1a7a89.U(_0x5eb1e1(0x80a)) + '</div></div>');
            var _0x4443cf = this;
            this.bq[_0x5eb1e1(0x626)]('.toaster-levelup-close')[_0x5eb1e1(0x57b)](function () {
                ooo.ij.if(), _0x4443cf.Go();
            });
        }))[_0x17b28a(0x72d)].ag = function () {
            return this.bq;
        }, _0x323958[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.kf();
        }, _0xa914b4.lm = _0x323958, (_0x13da2d = _0x1a7a89.ca(_0xa914b4.aq, function () {
            var _0x36dc7b = _0x17b28a;
            _0xa914b4.aq[_0x36dc7b(0x670)](this);
            var _0xccc9ce = this,
                _0x3971ec = _0x1a7a89.Ca() + '_' + _0x1a7a89._(0x3e8 + _0x1a7a89.ma() * 0x2327);
            this.bq = $(_0x36dc7b(0x793) + _0x3971ec + '\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"' + _0x30354b.H.L + _0x36dc7b(0x6c2) + _0x1a7a89.U('index.game.toaster.consent.text')[_0x36dc7b(0x733)](' ', '&nbsp;')[_0x36dc7b(0x733)]('\x0a', '<br/>') + _0x36dc7b(0x711) + _0x1a7a89.U(_0x36dc7b(0x28f)) + '</a></div><div class=\"toaster-consent-close\">' + _0x1a7a89.U('index.game.toaster.consent.iAccept') + _0x36dc7b(0x400)), this.cq = this.bq.find('.toaster-consent-close'), this.cq.hide(), this.cq[_0x36dc7b(0x57b)](function () {
                ooo.ij.if(), ooo.kp() && ooo.Xp(true, true), _0xccc9ce.Go();
            });
        })).prototype.ag = function () {
            return this.bq;
        }, _0x13da2d[_0x17b28a(0x72d)].nl = function () {
            var _0x1198d3 = this;
            ooo.kp() && !ooo.Pl() ? (ooo.ij.nf(), _0x1a7a89.Y(function () {
                var _0x8a1b4b = _0x1c2b;
                _0x1198d3.cq[_0x8a1b4b(0x4fc)](0x12c);
            }, 0x7d0)) : _0x1a7a89.Y(function () {
                _0x1198d3.Go();
            }, 0x0);
        }, _0xa914b4.Yp = _0x13da2d, _0x5bb8c7 = $(_0x17b28a(0x238)), (_0x540d58 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x7b3001 = _0x17b28a;
            _0xa914b4.Uf[_0x7b3001(0x670)](this, _0xa914b4.ll.ao), _0x5bb8c7[_0x7b3001(0x57b)](function () {
                ooo.ij.if(), ooo.Xg.Re.qo(), ooo.Xg.gl(ooo.Xg.Re), _0x1a7a89.Y(function () {
                    var _0x8adfa7 = _0x1c2b,
                        _0x26e1df = _0x30354b.H.J + _0x8adfa7(0x3b5);
                    _0x1a7a89.Aa(_0x26e1df, function () {
                        ooo.Xg.gl(ooo.Xg._k);
                    }, function (_0x28092a) {
                        ooo.Xg.Re.oo(), ooo.ud.rc(function () {
                            ooo.Xg.gl(ooo.Xg.Jf);
                        }, function (_0x4d88f7) {
                            ooo.Xg.gl(ooo.Xg._k);
                        }, function (_0x572b81, _0x46ff47) {
                            ooo.Xg.Re.po(_0x572b81, _0x46ff47);
                        });
                    });
                }, 0x7d0);
            });
        }))[_0x17b28a(0x72d)].Sa = function () {}, _0x540d58.prototype.ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.g(_0xa914b4.Uf.$n, 0x1f4), _0x51599b.f.h(_0xa914b4.Uf._n, 0x32);
        }, _0x540d58[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.Ye(_0xa914b4.Pe.Se.Jf), ooo.ij.nf();
        }, _0xa914b4.al = _0x540d58, _0x33d618 = $(_0x17b28a(0x3cf)), (_0x5ee0b0 = _0x1a7a89.ca(_0xa914b4.Uf, function () {
            var _0x2c991c = _0x17b28a;
            _0xa914b4.Uf[_0x2c991c(0x670)](this, _0xa914b4.ll.ao), _0x33d618[_0x2c991c(0x57b)](function () {
                ooo.ij.if(), ooo.Xg.gl(ooo.Xg.Jf);
            });
        }))[_0x17b28a(0x72d)].Sa = function () {}, _0x5ee0b0.prototype.ml = function () {
            _0xa914b4.Nf.rg(true), _0x51599b.f.g(_0xa914b4.Uf.Tf, 0x1f4), _0x51599b.f.g(_0xa914b4.Uf.Qn, 0x1), _0x51599b.f.h(_0xa914b4.Uf.Rn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Sn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Tn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Un, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Vn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Wn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Xn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Yn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.Zn, 0x32), _0x51599b.f.h(_0xa914b4.Uf.$n, 0x32), _0x51599b.f.g(_0xa914b4.Uf._n, 0x1f4);
        }, _0x5ee0b0[_0x17b28a(0x72d)].nl = function () {
            ooo.ij.Ye(_0xa914b4.Pe.Se.Jf), ooo.ij.nf();
        }, _0xa914b4.cl = _0x5ee0b0, _0x1a7a89.dq = function () {
            function _0x502338(_0x24485f) {
                var _0x4444dc = _0x24485f + _0x1a7a89._(_0x1a7a89.ma() * 0xffff) * 0x25;
                _0xa914b4.Cg.Ng(_0xa914b4.Cg.Lg, _0x4444dc, 0x1e);
            }
            return (function () {
                var _0x2d3784 = _0x1c2b,
                    _0x3b0dc2 = parseInt(_0xa914b4.Cg.Og(_0xa914b4.Cg.Lg)) % 0x25;
                (!(_0x3b0dc2 >= 0x0) || !(_0x3b0dc2 < _0x30354b.co.fq)) && (_0x3b0dc2 = _0x1a7a89.ia(0x0, _0x30354b.co.fq - 0x2));
                var _0x20b740 = {
                    'gq': false
                };
                _0x20b740.hq = _0x1a7a89.Ca(), _0x20b740.iq = 0x0, _0x20b740.jq = 0x0, _0x20b740.kq = null, _0x20b740.lq = _0x30354b.H.Q, _0x20b740.mq = _0x30354b.H.P, _0x20b740.Mh = null, _0x20b740.ud = null, _0x20b740.ef = null, _0x20b740.ij = null, _0x20b740.Xg = null, _0x20b740.so = null, _0x20b740.ok = null;
                try {
                    var _0x2d1977 = navigator;
                    if (_0x2d1977) {
                        var _0x5a2730 = _0x2d1977[_0x2d3784(0x8d7)];
                        _0x5a2730 && _0x5a2730[_0x2d3784(0x2ea)](function (_0x2f60c1) {
                            var _0x5961f3 = _0x2d3784,
                                _0x3ea881 = _0x2f60c1[_0x5961f3(0x52e)];
                            _typeof(_0x3ea881) != 'undefined' && _typeof(_0x3ea881[_0x5961f3(0x7b6)]) != 'undefined' && _typeof(_0x3ea881.longitude) != _0x5961f3(0x76e) && (_0x20b740.kq = _0x2f60c1);
                        }, function (_0x54b580) {});
                    }
                } catch (_0x129e57) {};
                return _0x20b740.Sa = function () {
                    var _0x48f05e = _0x2d3784;
                    _0x20b740.Mh = new _0xa914b4.nq(), _0x20b740.Mh.oq = new _0xa914b4.si(_0x20b740.Mh), _0x20b740.ud = new _0xa914b4.Kb(), _0x20b740.ef = new _0xa914b4.wk(), _0x20b740.ij = new _0xa914b4.Pe(), _0x20b740.Xg = new _0xa914b4.zk(), _0x20b740.so = new _0xa914b4.Sj(), _0x20b740.ok = new _0xa914b4.sl();
                    try {
                        ga(_0x48f05e(0x78a), _0x48f05e(0x228), _0x48f05e(0x441), _0x30354b.H.I + '_init');
                    } catch (_0x239ba9) {};
                    _0x20b740.Mh.pq = function () {
                        _0x20b740.Xg.gl(_0x20b740.Xg.bl);
                    }, _0x20b740.Mh.qq = function () {
                        var _0x1e5d76 = _0x48f05e,
                            _0x24bc97 = _0x20b740.Xg.Jf.Ao();
                        try {
                            ga(_0x1e5d76(0x78a), _0x1e5d76(0x228), _0x1e5d76(0x6d2), _0x30354b.H.I + _0x1e5d76(0x280), _0x24bc97);
                        } catch (_0x1bf4dd) {};
                        _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Kf), _0x20b740.Xg.gl(_0x20b740.Xg.Kf.ho());
                    }, _0x20b740.Mh.rq = function () {
                        var _0x5e1061 = _0x48f05e,
                            _0x2c022b, _0x10fc49;
                        try {
                            ga(_0x5e1061(0x78a), _0x5e1061(0x228), 'game', _0x30354b.H.I + _0x5e1061(0x8d5));
                        } catch (_0x1c7888) {};
                        $(_0x5e1061(0x4dc))[_0x5e1061(0x2c1)]() >= 0x1ae && _0x30354b.co.sq.Va(), _0x20b740.ud.rc(null, null, null), _0x2c022b = _0x1a7a89._(_0x20b740.Mh.Lh.hi), _0x10fc49 = _0x20b740.Mh.oi, _0x20b740.ok.nk() ? _0x20b740.ok.hm(function () {
                            _0x20b740.tq(_0x2c022b, _0x10fc49);
                        }) : _0x20b740.tq(_0x2c022b, _0x10fc49);
                    }, _0x20b740.Mh.uq = function (_0x3bf9e3) {
                        _0x3bf9e3(_0x20b740.Xg.Kf.ko(), _0x20b740.Xg.Kf.lo());
                    }, _0x20b740.ok.em(function () {
                        var _0x220eeb = _0x48f05e,
                            _0x2761cb = _0x20b740.Xg.rl();
                        _0x2761cb != null && _0x2761cb.Wd === _0xa914b4.ll.kl && (_0x20b740.ij.Ye(_0xa914b4.Pe.Se.Jf), _0x20b740.Xg.gl(_0x20b740.Xg.Jf));
                        if (_0x20b740.ok.nk()) {
                            var _0x3b9bb5 = _0x20b740.ok.Kl();
                            try {
                                ga(_0x220eeb(0x3e2), _0x220eeb(0x875), _0x3b9bb5);
                            } catch (_0x52de9b) {};
                            try {
                                zE(_0x220eeb(0x3e9), _0x220eeb(0x214), function (_0x32c240) {
                                    _0x32c240(_0x3b9bb5);
                                });
                            } catch (_0x54a78a) {}
                        } else try {
                            zE('webWidget', _0x220eeb(0x246));
                        } catch (_0x35a5cb) {};
                        _0x20b740.kp() && _0x20b740.ok.nk() && !_0x20b740.ok.Pl() ? (_0x20b740.Xp(false, false), _0x20b740.Xg.Yk.Fo(new _0xa914b4.Yp())) : _0x20b740.vq(true);
                    }), _0x20b740.Mh.Sa(), _0x20b740.Xg.Sa(), _0x20b740.so.Sa(), _0x20b740.ud.Sa(), _0x20b740.Xg.Jf.zo(), _0x20b740.Xg.gl(_0x20b740.Xg.Jf), _0x20b740.ef.Sa(function () {
                        _0x20b740.ij.Sa(), _0x20b740.ok.Sa(), _0x20b740.ud.rc(function () {
                            _0x20b740.Xg.Jf.yo(), _0x20b740.Xg.gl(_0x20b740.Xg.Jf);
                        }, function (_0x588b8e) {
                            _0x20b740.Xg.Jf.yo(), _0x20b740.Xg.gl(_0x20b740.Xg._k);
                        }, function (_0x47c6fc, _0x4b63a5) {
                            var _0x129058 = _0x47c6fc;
                            _0x20b740.Xg.Re.po(_0x129058, _0x4b63a5), _0x20b740.Xg.Jf.po(_0x129058, _0x4b63a5);
                        }), _0x20b740.kp() && !_0x20b740.Pl() ? _0x20b740.Xg.Yk.Fo(new _0xa914b4.Yp()) : _0x20b740.vq(true);
                    });
                }, _0x20b740.wq = function (_0x279e31) {
                    var _0x5e8dc3 = _0x2d3784;
                    if (_0x20b740.ok.nk()) {
                        var _0x1c7296 = _0x20b740.ok.gm(),
                            _0x53ec3d = _0x30354b.H.J + _0x5e8dc3(0x80c) + _0x1c7296 + _0x5e8dc3(0x1fd) + _0x1a7a89.W(_0x279e31);
                        _0x1a7a89.Aa(_0x53ec3d, function () {}, function (_0x324eea) {});
                    }
                }, _0x20b740.to = function () {
                    _0x3b0dc2++, _0x5a0b1f.on && (_0x3b0dc2 = 0x1), !_0x30354b.co.xq && _0x3b0dc2 >= _0x30354b.co.fq ? (_0x20b740.Xg.gl(_0x20b740.Xg.dl), _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Mf), _0x30354b.co.yq.Ta()) : (_0x502338(_0x3b0dc2), _0x20b740.zq());
                }, _0x20b740.zq = function () {
                    var _0x1eec0c = _0x2d3784;
                    if (_0x20b740.Mh.Aq()) {
                        _0x20b740.Xg.Re.qo(), _0x20b740.Xg.gl(_0x20b740.Xg.Re);
                        var _0x27062e = _0x20b740.Xg.Jf.Ao();
                        _0xa914b4.Cg.Ng(_0xa914b4.Cg.Ig, _0x27062e, 0x1e);
                        var _0x1632ae = _0x20b740.Xg.Hi.Gi();
                        _0xa914b4.Cg.Ng(_0xa914b4.Cg.Eg, _0x1632ae, 0x1e);
                        var _0x419e66 = 0x0;
                        if (_0x20b740.kq != null) {
                            var _0x16f95f = _0x20b740.kq.coords[_0x1eec0c(0x7b6)],
                                _0x4e5a54 = _0x20b740.kq.coords[_0x1eec0c(0x61d)];
                            _0x419e66 = _0x1a7a89.ia(0x0, _0x1a7a89.ha(0x7fff, (_0x16f95f + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | _0x1a7a89.ia(0x0, _0x1a7a89.ha(0xffff, (_0x4e5a54 + 0xb4) / 0x168 * 0x10000)) << 0x10;
                        };
                        if (_0x20b740.ok.nk()) _0x20b740.Bq(_0x27062e, _0x419e66);
                        else {
                            var _0x3a328d = _0x20b740.Xg.Jf.Ml();
                            _0xa914b4.Cg.Ng(_0xa914b4.Cg.Jg, _0x3a328d, 0x1e);
                            var _0x311d46 = _0x20b740.so.Zj(_0xa914b4._j.$j);
                            _0xa914b4.Cg.Ng(_0xa914b4.Cg.Kg, _0x311d46, 0x1e), _0x20b740.Cq(_0x27062e, _0x419e66);
                        }
                    }
                }, _0x20b740.Bq = function (_0x2696bc, _0x149cb2) {
                    var _0x1c6b24 = _0x2d3784,
                        _0x22e0f9, _0x3e9b6d = _0x20b740.ok.gm(),
                        _0x3d28e9 = window[_0x1c6b24(0x3b9)](_0x20b740.Xg.Jf.Ml()),
                        _0x49eb31 = _0x20b740.so.Zj(_0xa914b4._j.$j),
                        _0x46f9a7 = _0x20b740.so.Zj(_0xa914b4._j.ak),
                        _0x1d491f = _0x20b740.so.Zj(_0xa914b4._j.bk);
                    _0x58f6a0(_0x49eb31, _0x46f9a7, _0x1d491f, _0x20b740.so.Zj(_0xa914b4._j.dk), _0x20b740.so.Zj(_0xa914b4._j.ck), _0x3d28e9);
                    var _0x3582d8 = (_0x3d28e9 = (_0x3d28e9 = _0x2e052d.f)[_0x1c6b24(0x356)]())[_0x1c6b24(0x29f)](_0x3d28e9[_0x1c6b24(0x7ba)](-0x7), '');
                    _0x3582d8 != _0x2e052d.s_n && (_0x2e052d[_0x1c6b24(0x7f6)] = _0x3582d8, _0x48cafe(_0x3582d8[_0x1c6b24(0x356)]()));
                    var _0x49c96a = _0x30354b.H.J + _0x1c6b24(0x80c) + _0x3e9b6d + _0x1c6b24(0x7a7) + _0x1a7a89.W(_0x2696bc) + _0x1c6b24(0x278) + _0x149cb2 + _0x1c6b24(0x4f8) + _0x1a7a89.W(_0x3d28e9) + _0x1c6b24(0x47d) + _0x2e052d.a + _0x1c6b24(0x290) + _0x2e052d.b + _0x1c6b24(0x59b) + _0x2e052d.c + _0x1c6b24(0x706) + _0x2e052d.d + '&hatId=' + _0x2e052d.e;
                    _0x1a7a89.Aa(_0x49c96a, function () {
                        _0x20b740.Xg.gl(_0x20b740.Xg._k);
                    }, function (_0x24e27b) {
                        var _0x2e7ae0 = _0x1c6b24;
                        if (_0x24e27b[_0x2e7ae0(0x27d)] === 0x5b4) {
                            _0x20b740.Xg.gl(_0x20b740.Xg.Wk);
                            try {
                                ga(_0x2e7ae0(0x78a), _0x2e7ae0(0x228), 'restricted', _0x30354b.H.I + _0x2e7ae0(0x276));
                            } catch (_0x1285b3) {}
                        } else {
                            if (_0x24e27b[_0x2e7ae0(0x27d)] !== 0x4b0) _0x20b740.Xg.gl(_0x20b740.Xg._k);
                            else {
                                var _0x3e5d1f = _0x24e27b[_0x2e7ae0(0x37e)],
                                    _0x23db93 = _0x323ee4(_0x3e5d1f[_0x2e7ae0(0x7ba)](-0xa, 0x4));
                                $(_0x2e7ae0(0x333))[_0x2e7ae0(0x1ce)]() === '' ? ($(_0x2e7ae0(0x4f7))[_0x2e7ae0(0x1ce)](_0x3e5d1f), $(_0x2e7ae0(0x6a1))[_0x2e7ae0(0x1ce)](_0x23db93), _0x2e052d.pi = _0x3e5d1f, _0x2e052d.pn = _0x23db93, localStorage[_0x2e7ae0(0x510)](_0x2e7ae0(0x4e9), JSON[_0x2e7ae0(0x562)](_0x2e052d)), _0x407633[_0x2e7ae0(0x2df)] = '' + _0x23db93, createCircle(), _0x20b740.Mh.Dq(_0x3e5d1f, _0x3e9b6d)) : ($(_0x2e7ae0(0x4f7))[_0x2e7ae0(0x1ce)]($('#port_id')[_0x2e7ae0(0x1ce)]()), $(_0x2e7ae0(0x6a1))[_0x2e7ae0(0x1ce)]($(_0x2e7ae0(0x65f)).val()), _0x2e052d.pi = $(_0x2e7ae0(0x333))[_0x2e7ae0(0x1ce)](), _0x2e052d.pn = $('#port_name').val(), localStorage[_0x2e7ae0(0x510)](_0x2e7ae0(0x4e9), JSON.stringify(_0x2e052d)), _0x407633[_0x2e7ae0(0x2df)] = '' + $(_0x2e7ae0(0x65f))[_0x2e7ae0(0x1ce)](), createCircle(), _0x20b740.Mh.Dq($('#port_id').val(), _0x3e9b6d));
                            }
                        }
                    });
                }, _0x20b740.Cq = function (_0x1ca080, _0x1538f8) {
                    var _0xdcc477 = _0x2d3784,
                        _0xaec810 = window[_0xdcc477(0x3b9)](_0x20b740.Xg.Jf.Ml()),
                        _0x4f7859 = _0x20b740.so.Zj(_0xa914b4._j.$j),
                        _0x3d012b = _0x30354b.H.J + '/pub/wuid/guest/start?gameMode=' + _0x1a7a89.W(_0x1ca080) + '&gh=' + _0x1538f8 + '&nickname=' + _0x1a7a89.W(_0xaec810) + _0xdcc477(0x47d) + _0x1a7a89.W(_0x4f7859);
                    _0x1a7a89.Aa(_0x3d012b, function () {
                        _0x20b740.Xg.gl(_0x20b740.Xg._k);
                    }, function (_0x2a7700) {
                        var _0x4d8317 = _0xdcc477;
                        if (_0x2a7700[_0x4d8317(0x27d)] === 0x5b4) {
                            _0x20b740.Xg.gl(_0x20b740.Xg.Wk);
                            try {
                                ga(_0x4d8317(0x78a), _0x4d8317(0x228), _0x4d8317(0x20f), _0x30354b.H.I + _0x4d8317(0x276));
                            } catch (_0x40e50c) {}
                        } else {
                            if (_0x2a7700[_0x4d8317(0x27d)] !== 0x4b0) _0x20b740.Xg.gl(_0x20b740.Xg._k);
                            else {
                                var _0x2d1a80 = _0x2a7700[_0x4d8317(0x37e)],
                                    _0x323d88 = _0x323ee4(_0x2d1a80[_0x4d8317(0x7ba)](-0xa, 0x4));
                                $(_0x4d8317(0x333))[_0x4d8317(0x1ce)]() === '' ? ($(_0x4d8317(0x4f7)).val(_0x2d1a80), $(_0x4d8317(0x6a1))[_0x4d8317(0x1ce)](_0x323d88), _0x2e052d.pi = _0x2d1a80, _0x2e052d.pn = _0x323d88, localStorage[_0x4d8317(0x510)](_0x4d8317(0x4e9), JSON.stringify(_0x2e052d)), _0x407633[_0x4d8317(0x2df)] = '' + _0x323d88, createCircle(), _0x20b740.Mh.Eq(_0x2d1a80, _0xaec810, _0x4f7859)) : ($(_0x4d8317(0x4f7))[_0x4d8317(0x1ce)]($(_0x4d8317(0x333))[_0x4d8317(0x1ce)]()), $(_0x4d8317(0x6a1)).val($(_0x4d8317(0x65f))[_0x4d8317(0x1ce)]()), _0x2e052d.pi = $(_0x4d8317(0x333)).val(), _0x2e052d.pn = $('#port_name')[_0x4d8317(0x1ce)](), localStorage[_0x4d8317(0x510)]('SaveGamewft', JSON.stringify(_0x2e052d)), _0x407633.text = '' + $(_0x4d8317(0x65f)).val(), createCircle(), _0x20b740.Mh.Eq($(_0x4d8317(0x333)).val(), _0xaec810, _0x4f7859));
                            }
                        }
                    });
                }, _0x20b740.tq = function (_0x2ea5dd, _0x30fe92) {
                    var _0xd00852 = _0x20b740.Xg.Jf.Ml();
                    _0x20b740.Xg.Kf.jo(_0x2ea5dd, _0x30fe92, _0xd00852), _0x20b740.ij.Ye(_0xa914b4.Pe.Se.Lf), _0x20b740.Xg.gl(_0x20b740.Xg.Kf.io());
                }, _0x20b740.wo = function () {
                    if (!_0x20b740.xo()) return _0x20b740.so.hk();;
                    var _0x4d79bc = parseInt(_0xa914b4.Cg.Og(_0xa914b4.Cg.Kg));
                    return _0x4d79bc != null && _0x20b740.so.ik(_0x4d79bc, _0xa914b4._j.$j) ? _0x4d79bc : _0x20b740.so.hk();
                }, _0x20b740.Bo = function (_0x581ad8) {
                    var _0x82835f = _0x2d3784;
                    _0xa914b4.Cg.Ng(_0xa914b4.Cg.Mg, _0x581ad8 ? _0x82835f(0x40f) : _0x82835f(0x350), 0x708);
                }, _0x20b740.xo = function () {
                    var _0x157410 = _0x2d3784;
                    return _0xa914b4.Cg.Og(_0xa914b4.Cg.Mg) === _0x157410(0x40f);
                }, _0x20b740.vq = function (_0x51eadb) {
                    var _0x570e36 = _0x2d3784;
                    if (_0x51eadb !== _0x20b740.gq) {
                        _0x20b740.gq = _0x51eadb;
                        var _0x3d263f = _0x3d263f || {};
                        _0x3d263f[_0x570e36(0x235)] = _0x51eadb, _0x3d263f[_0x570e36(0x744)] = _0x51eadb, _0x30354b.co.do.Sa(), _0x30354b.co.sq.Sa(), _0x30354b.co.yq.Sa(function (_0x1fe73c) {
                            _0x1fe73c && _0x502338(_0x3b0dc2 = 0x0), _0x20b740.zq();
                        });
                    }
                }, _0x20b740.Xp = function (_0x5cd1c7, _0x23888e) {
                    var _0x43f87c = _0x2d3784;
                    _0xa914b4.Cg.Ng(_0xa914b4.Cg.Dg, _0x5cd1c7 ? 'true' : _0x43f87c(0x350)), _0x23888e && _0x20b740.wq(_0x5cd1c7), _0x20b740.vq(_0x5cd1c7);
                }, _0x20b740.Pl = function () {
                    var _0x4061f2 = _0x2d3784;
                    return _0xa914b4.Cg.Og(_0xa914b4.Cg.Dg) === _0x4061f2(0x40f);
                }, _0x20b740.kp = function () {
                    var _0x15aa8b = _0x2d3784;
                    try {
                        return !!_0xa914b4.c[_0x15aa8b(0x88f)] || _0x20b740.kq != null && !!_0x30354b.Pg.Qg(_0x20b740.kq.coords[_0x15aa8b(0x7b6)], _0x20b740.kq[_0x15aa8b(0x52e)][_0x15aa8b(0x61d)]);
                    } catch (_0x47618c) {
                        return true;
                    }
                }, _0x20b740.ug = function () {
                    _0x20b740.iq = _0x1a7a89.Ca(), _0x20b740.jq = _0x20b740.iq - _0x20b740.hq, _0x20b740.Mh.Uh(_0x20b740.iq, _0x20b740.jq), _0x20b740.Xg.Uh(_0x20b740.iq, _0x20b740.jq), _0x20b740.hq = _0x20b740.iq;
                }, _0x20b740.qg = function () {
                    _0x20b740.Xg.qg();
                }, _0x20b740;
            }());
        }, _0xa914b4.nq = function () {
            'use strict';
            var _0x3e5e88 = {
                'Jq': 0x1e,
                'Kq': new _0x51599b.j(0x64),
                'Lq': 0x0,
                'Mq': 0x0,
                'Nq': 0x0,
                'Oq': 0x0,
                'Pq': 0x0,
                'Qq': 0x0,
                'go': 0x0,
                'Rq': null,
                'Sq': 0x12c,
                'qq': function () {},
                'rq': function () {},
                'uq': function () {},
                'pq': function () {},
                'Qh': new _0xa914b4.dh(),
                'oq': null,
                'Lh': null,
                'nj': {},
                'li': {},
                'jj': 12.5,
                'Nh': 0x28,
                'Tq': 0x1,
                'Uq': -0x1,
                'Vq': 0x1,
                'Wq': 0x1,
                'Xq': -0x1,
                'Yq': -0x1,
                'Zq': 0x1,
                '$q': 0x1,
                'ar': -0x1,
                'oi': 0x1f4,
                'ei': 0x1f4
            };
            return _0x3e5e88.Qh.gh = 0x1f4, _0x3e5e88.Lh = new _0xa914b4.Ui(_0x3e5e88.Qh), _0x3e5e88.Sa = function () {
                _0x3e5e88.Lh._i(ooo.Xg.Kf.Wg), _0x1a7a89.X(function () {
                    _0x3e5e88.uq(function (_0x576725, _0x3e027c) {
                        _0x3e5e88.br(_0x576725, _0x3e027c);
                    });
                }, _0x2e052d.sm);
            }, _0x3e5e88.Ph = function (_0x4db051, _0x2a71d9, _0x18a719, _0xe20986) {
                _0x3e5e88.Uq = _0x4db051, _0x3e5e88.Vq = _0x2a71d9, _0x3e5e88.Wq = _0x18a719, _0x3e5e88.Xq = _0xe20986, _0x3e5e88.cr();
            }, _0x3e5e88.dr = function (_0x169282) {
                _0x3e5e88.Tq = _0x169282, _0x3e5e88.cr();
            }, _0x3e5e88.cr = function () {
                _0x3e5e88.Yq = _0x3e5e88.Uq - _0x3e5e88.Tq, _0x3e5e88.Zq = _0x3e5e88.Vq + _0x3e5e88.Tq, _0x3e5e88.$q = _0x3e5e88.Wq - _0x3e5e88.Tq, _0x3e5e88.ar = _0x3e5e88.Xq + _0x3e5e88.Tq;
            }, _0x3e5e88.Uh = function (_0x246fcb, _0x3b339c) {
                var _0x457fa6 = _0x1c2b;
                _0x3e5e88.Nq += _0x3b339c, _0x3e5e88.Mq -= _0x3e5e88.Lq * 0.2 * _0x3b339c, _0x3e5e88.oq.yi();
                _0x3e5e88.Rq != null && (_0x3e5e88.go === 0x2 || _0x3e5e88.go === 0x3) && (_0x3e5e88.er(_0x246fcb, _0x3b339c), _0x3e5e88.Nh = 0x4 + _0x3e5e88.jj * _0x3e5e88.Lh.Id);
                var _0x4772bf = 0x3e8 / _0x1a7a89.ia(0x1, _0x3b339c),
                    _0x544063 = 0x0;
                for (var _0x5c6928 = 0x0; _0x5c6928 < _0x3e5e88.Kq[_0x457fa6(0x56a)] - 0x1; _0x5c6928++) {
                    _0x544063 += _0x3e5e88.Kq[_0x5c6928], _0x3e5e88.Kq[_0x5c6928] = _0x3e5e88.Kq[_0x5c6928 + 0x1];
                };
                _0x3e5e88.Kq[_0x3e5e88.Kq[_0x457fa6(0x56a)] - 0x1] = _0x4772bf, _0x3e5e88.Jq = (_0x544063 + _0x4772bf) / _0x3e5e88.Kq.length;
            }, _0x3e5e88.fr = function (_0x360fa2, _0x26c12f) {
                return _0x360fa2 > _0x3e5e88.Yq && _0x360fa2 < _0x3e5e88.Zq && _0x26c12f > _0x3e5e88.$q && _0x26c12f < _0x3e5e88.ar;
            }, _0x3e5e88.er = function (_0x37c785, _0x4095d9) {
                var _0x153c5b = (_0x3e5e88.Nq + _0x3e5e88.Mq - _0x3e5e88.Oq) / (_0x3e5e88.Pq - _0x3e5e88.Oq);
                _0x3e5e88.Lh.Pj(_0x37c785, _0x4095d9), _0x3e5e88.Lh.Qj(_0x37c785, _0x4095d9, _0x153c5b, _0x3e5e88.fr);
                var _0x524052 = 0x0;
                for (var _0x1637e5 in _0x3e5e88.li) {
                    var _0x36247e = _0x3e5e88.li[_0x1637e5];
                    _0x36247e.Pj(_0x37c785, _0x4095d9), _0x36247e.Qj(_0x37c785, _0x4095d9, _0x153c5b, _0x3e5e88.fr), _0x36247e.cj && _0x36247e.Id > _0x524052 && (_0x524052 = _0x36247e.Id), !_0x36247e.bj && (!!(_0x36247e.Lj < 0.005) || !_0x36247e.cj) && (_0x36247e.$i(), delete _0x3e5e88.li[_0x36247e.ki.Je]);
                };
                _0x3e5e88.dr(_0x524052 * 0x3);
                for (var _0x473df9 in _0x3e5e88.nj) {
                    var _0x5ecec2 = _0x3e5e88.nj[_0x473df9];
                    _0x5ecec2.Pj(_0x37c785, _0x4095d9), _0x5ecec2.Qj(_0x37c785, _0x4095d9, _0x3e5e88.fr), _0x5ecec2.tj && (_0x5ecec2.Lj < 0.005 || !_0x3e5e88.fr(_0x5ecec2.Fj, _0x5ecec2.Gj)) && (_0x5ecec2.$i(), delete _0x3e5e88.nj[_0x5ecec2.ki.Je]);
                }
            }, _0x3e5e88.Si = function (_0x3b169c, _0x3bb781) {
                _0x3e5e88.go === 0x1 && (_0x3e5e88.go = 0x2, _0x3e5e88.qq());
                var _0x269061 = ooo.iq;
                _0x3e5e88.Qq = _0x3b169c;
                _0x3b169c === 0x0 ? (_0x3e5e88.Oq = _0x269061 - 0x5f, _0x3e5e88.Pq = _0x269061, _0x3e5e88.Nq = _0x3e5e88.Oq, _0x3e5e88.Mq = 0x0) : (_0x3e5e88.Oq = _0x3e5e88.Pq, _0x3e5e88.Pq = _0x3e5e88.Pq + _0x3bb781);
                var _0x2ddc70 = _0x3e5e88.Nq + _0x3e5e88.Mq;
                _0x3e5e88.Lq = (_0x2ddc70 - _0x3e5e88.Oq) / (_0x3e5e88.Pq - _0x3e5e88.Oq);
            }, _0x3e5e88.uj = function () {
                if (_0x3e5e88.go === 0x1 || _0x3e5e88.go === 0x2) {
                    _0x3e5e88.go = 0x3;
                    var _0x4163c5 = _0x3e5e88.Rq;
                    _0x1a7a89.Y(function () {
                        var _0x287cda = _0x1c2b;
                        _0x3e5e88.go === 0x3 && (_0x3e5e88.go = 0x0), _0x4163c5 != null && _0x4163c5 === _0x3e5e88.Rq && (_0x3e5e88.Rq[_0x287cda(0x869)](), _0x3e5e88.Rq = null);
                    }, 0x1388), _0x3e5e88.rq();
                }
            }, _0x3e5e88.Aq = function () {
                var _0x3f074d = _0x1c2b;
                return _0x3e5e88.go !== 0x2 && (_0x3e5e88.go = 0x1, _0x3e5e88.oq.xi(), _0x3e5e88.nj = {}, _0x3e5e88.li = {}, _0x3e5e88.Lh.xn(), _0x3e5e88.Rq != null && (_0x3e5e88.Rq[_0x3f074d(0x869)](), _0x3e5e88.Rq = null), true);
            }, _0x3e5e88.gr = function () {
                _0x3e5e88.Rq = null, _0x3e5e88.oq.xi(), _0x3e5e88.go !== 0x3 && _0x3e5e88.pq(), _0x3e5e88.go = 0x0;
            }, _0x3e5e88.Dq = function (_0x1b4abf, _0x5a73ce) {
                _0x3e5e88.hr(_0x1b4abf, function () {
                    var _0x2fa95d = _0x1c2b;
                    if (myGameSettings[_0x2fa95d(0x484)]) {
                        var _0x1923bd = document[_0x2fa95d(0x4e7)](_0x2fa95d(0x7dd));
                        _0x1923bd ? _0x1923bd = _0x1923bd.value || '' : _0x1923bd = _0x5a73ce;
                        var _0x21d995 = 0x80,
                            _0x3f8c61 = _0x1a7a89.ha(0x20, _0x1923bd.length),
                            _0x2d5740 = new _0xa914b4.Fa(0x7 + _0x3f8c61 * 0x2),
                            _0x223de9 = new _0xa914b4.Oa(new _0xa914b4.Ga(_0x2d5740));
                        _0x223de9.Pa(0x81), _0x223de9.Qa(0xaf0), _0x223de9.Pa(0x0), _0x223de9.Qa(_0x21d995), _0x223de9.Pa(_0x3f8c61);
                        for (var _0x27fe2a = 0x0; _0x27fe2a < _0x3f8c61; _0x27fe2a++) {
                            _0x223de9.Qa(_0x1923bd[_0x2fa95d(0x816)](_0x27fe2a));
                        }
                        _0x3e5e88.ir(_0x2d5740);
                    } else {
                        var _0x1da615 = _0x1a7a89.ha(0x800, _0x5a73ce.length),
                            _0x2d5740 = new _0xa914b4.Fa(0x6 + _0x1da615 * 0x2),
                            _0x223de9 = new _0xa914b4.Oa(new _0xa914b4.Ga(_0x2d5740));
                        _0x223de9.Pa(0x81), _0x223de9.Qa(0xaf0), _0x223de9.Pa(0x1), _0x223de9.Qa(_0x1da615);
                        for (var _0x2e2e97 = 0x0; _0x2e2e97 < _0x1da615; _0x2e2e97++) {
                            _0x223de9.Qa(_0x5a73ce[_0x2fa95d(0x816)](_0x2e2e97));
                        }
                        _0x3e5e88.ir(_0x2d5740);
                    }
                });
            }, _0x3e5e88.Eq = function (_0x14070d, _0xd8f01b, _0x2bd641) {
                _0x3e5e88.hr(_0x14070d, function () {
                    var _0xdfb4ee = _0x1c2b,
                        _0x57deb5 = _0x1a7a89.ha(0x20, _0xd8f01b[_0xdfb4ee(0x56a)]),
                        _0x202248 = new _0xa914b4.Fa(0x7 + _0x57deb5 * 0x2),
                        _0x2cea34 = new _0xa914b4.Oa(new _0xa914b4.Ga(_0x202248));
                    _0x2cea34.Pa(0x81), _0x2cea34.Qa(0xaf0), _0x2cea34.Pa(0x0), _0x2cea34.Qa(_0x2bd641), _0x2cea34.Pa(_0x57deb5);
                    for (var _0x1a403c = 0x0; _0x1a403c < _0x57deb5; _0x1a403c++) {
                        _0x2cea34.Qa(_0xd8f01b.charCodeAt(_0x1a403c));
                    };
                    _0x3e5e88.ir(_0x202248);
                });
            }, _0x3e5e88.ir = function (_0x35ba69) {
                var _0x1676c3 = _0x1c2b;
                try {
                    _0x3e5e88.Rq != null && _0x3e5e88.Rq[_0x1676c3(0x546)] === _0x51599b.i[_0x1676c3(0x752)] && _0x3e5e88.Rq.send(_0x35ba69);
                } catch (_0x1874e2) {
                    _0x3e5e88.gr();
                }
            }, _0x3e5e88.br = function (_0x21787e, _0x214c3c) {
                var _0x548461 = ((_0x214c3c ? 0x80 : 0x0) | _0x1a7a89.da(_0x21787e) / _0x30354b.S * 0x80 & 0x7f) & 0xff;
                if (_0x3e5e88.Sq !== _0x548461) {
                    var _0x9975f = new _0xa914b4.Fa(0x1);
                    new _0xa914b4.Oa(new _0xa914b4.Ga(_0x9975f)).Pa(_0x548461), _0x3e5e88.ir(_0x9975f), _0x3e5e88.Sq = _0x548461;
                }
            }, _0x3e5e88.hr = function (_0x3ef3d4, _0x1a19da) {
                var _0x59c33a = _0x1c2b;
                let _0x1b7e7b;
                !_0x5a0b1f.on && _0x2e052d.mobile && (_0x1b7e7b = _0x50e377(_0x2e052d[_0x59c33a(0x800)]));
                var _0x2f5860 = _0x3e5e88.Rq = new _0x51599b.i(_0x3ef3d4);
                _0x2f5860[_0x59c33a(0x3ce)] = _0x59c33a(0x1d3), _0x2f5860[_0x59c33a(0x660)] = function () {
                    var _0x149c67 = _0x59c33a;
                    _0x460115(_0x2e052d, oeo, _0x149c67(0x1f3)), _0x5e08e3(_0x2e052d, oeo, 'hidden'), _0x3e5e88.Rq === _0x2f5860 && _0x1a19da();
                }, _0x2f5860[_0x59c33a(0x43e)] = function () {
                    var _0x45da37 = _0x59c33a;
                    _0x460115(_0x2e052d, oeo, 'close'), _0x5e08e3(_0x2e052d, oeo, _0x45da37(0x450)), !_0x5a0b1f.on && _0x2e052d[_0x45da37(0x800)] && _0x1b7e7b && _0x1b7e7b[_0x45da37(0x588)](), _0x3e5e88.Rq === _0x2f5860 && _0x3e5e88.gr();
                }, _0x2f5860[_0x59c33a(0x5e1)] = function (_0x3175b7) {
                    var _0x38054d = _0x59c33a;
                    _0x3e5e88.Rq === _0x2f5860 && _0x3e5e88.gr(), !_0x5a0b1f.on && _0x2e052d.mobile && _0x1b7e7b && _0x1b7e7b[_0x38054d(0x588)]();
                }, _0x2f5860[_0x59c33a(0x83d)] = function (_0x14e0bc) {
                    _0x3e5e88.Rq === _0x2f5860 && _0x3e5e88.oq.wi(_0x14e0bc.data);
                };
            }, _0x3e5e88;
        }, _0x221bb1 = _0xa914b4.c.ENV, (_0x190535 = {})[_0x17b28a(0x1be)] = {
            'do': _0x1a7a89.Ua(_0x17b28a(0x753), _0x17b28a(0x200)),
            'sq': _0x1a7a89.Ua(_0x17b28a(0x678), _0x17b28a(0x643)),
            'yq': _0x1a7a89.Ra(),
            'fq': 0x4,
            'xq': false,
            'bo': true
        }, _0x190535[_0x17b28a(0x3b1)] = {
            'do': _0x1a7a89.Ua('aqnvgcpz05orkobh', _0x17b28a(0x200)),
            'sq': _0x1a7a89.Ua('ltmolilci1iurq1i', _0x17b28a(0x643)),
            'yq': _0x1a7a89.Ra(),
            'fq': 0x4,
            'xq': false,
            'bo': false
        };
        !(_0x38264b = _0x190535[_0x221bb1]) && (_0x38264b = _0x190535[_0x17b28a(0x1be)]);
        _0x30354b.co = _0x38264b, $(function () {
                var _0xfaf6c4 = _0x17b28a;
                FastClick[_0xfaf6c4(0x8a1)](_0xa914b4.d[_0xfaf6c4(0x4dc)]);
            }), addEventListener(_0x17b28a(0x87e), function (_0x1c6205) {
                var _0x147c1d = _0x17b28a;
                return _0x1c6205[_0x147c1d(0x73e)](), _0x1c6205[_0x147c1d(0x812)](), false;
            }), _0x14b9c0 = false, _0x50c267 = false, _0x1a7a89.ba(_0x17b28a(0x557), ((_0x199a03 = {}).id = _0x17b28a(0x34f), _0x199a03[_0x17b28a(0x5d4)] = true, _0x199a03), function () {
                var _0x48a1f6 = _0x17b28a;
                _0x14b9c0 = true, _0x50c267 = false, zE('webWidget', _0x48a1f6(0x75d)), zE(_0x48a1f6(0x8b5), _0x48a1f6(0x869), function () {
                    var _0x49b5ed = _0x48a1f6;
                    zE(_0x49b5ed(0x2ad), _0x49b5ed(0x75d)), _0x50c267 = false;
                });
            }), $('#contact-support')[_0x17b28a(0x57b)](function () {
                var _0x1b7ecb = _0x17b28a;
                _0x14b9c0 && (_0x50c267 ? (zE(_0x1b7ecb(0x2ad), 'close'), _0x50c267 = false) : (zE(_0x1b7ecb(0x2ad), _0x1b7ecb(0x1f3)), zE(_0x1b7ecb(0x2ad), _0x1b7ecb(0x651)), _0x50c267 = true));
            }), _0xa914b4.c[_0x17b28a(0x6b2)] = function () {
                var _0x67346f = _0x17b28a,
                    _0x423cce;
                FB.init(((_0x423cce = {})[_0x67346f(0x574)] = _0x67346f(0x2dc), _0x423cce.cookie = true, _0x423cce[_0x67346f(0x848)] = true, _0x423cce.status = true, _0x423cce[_0x67346f(0x245)] = _0x67346f(0x8bb), _0x423cce));
            }, _0x1a7a89.ba(_0x17b28a(0x311) + _0x30354b.H.Q + _0x17b28a(0x4a6), ((_0x17fe12 = {}).id = 'facebook-jssdk', _0x17fe12[_0x17b28a(0x5d4)] = true, _0x17fe12[_0x17b28a(0x4ed)] = true, _0x17fe12[_0x17b28a(0x38a)] = 'anonymous', _0x17fe12)), _0x1a7a89.ba(_0x17b28a(0x519), null, function () {
                var _0x467a73 = _0x17b28a;
                gapi.load(_0x467a73(0x2a6), function () {
                    var _0x210451 = _0x467a73,
                        _0x26b419;
                    GoogleAuth = gapi[_0x210451(0x2a6)][_0x210451(0x3ec)](((_0x26b419 = {})[_0x210451(0x232)] = _0x210451(0x41a), _0x26b419));
                });
            }), _0x1a7a89.ba(_0x17b28a(0x5a6)), (function () {
                var _0x4cb18f = _0x17b28a;
                try {
                    let _0x22ad0f = document[_0x4cb18f(0x673)](_0x4cb18f(0x33a))[0x0],
                        _0x229b0f = document.createElement('link');
                    _0x229b0f[_0x4cb18f(0x6e7)] = _0x4cb18f(0x481), _0x229b0f[_0x4cb18f(0x729)] = _0x4cb18f(0x2dd), _0x229b0f[_0x4cb18f(0x7cd)] = _0x4cb18f(0x858), _0x22ad0f[_0x4cb18f(0x6c1)](_0x229b0f);
                } catch (_0x5f2b2d) {
                    console.error(_0x5f2b2d);
                }
            }()), (ooo = _0x1a7a89.dq()).Sa(), oeo = ooo.Xg.Kf.Wg.Ah,
            function _0x482388() {
                requestAnimationFrame(_0x482388), ooo.ug();
            }(), (function () {
                var _0x4d043a = _0x17b28a;

                function _0x1078de() {
                    var _0xe8dda2 = _0x1c2b,
                        _0x248b6e = _0x15d704[_0xe8dda2(0x821)](),
                        _0x48bae5 = _0x15d704[_0xe8dda2(0x2c1)](),
                        _0x1ef11a = _0xc8211f.outerWidth(),
                        _0x4dd51c = _0xc8211f[_0xe8dda2(0x721)](),
                        _0x1b01ab = _0x39d4ee[_0xe8dda2(0x721)](),
                        _0x40705f = _0xa89455[_0xe8dda2(0x721)](),
                        _0x190b91 = _0x1a7a89.ha(0x1, _0x1a7a89.ha((_0x48bae5 - _0x40705f - _0x1b01ab) / _0x4dd51c, _0x248b6e / _0x1ef11a)),
                        _0x3e5a8c = _0xe8dda2(0x2af) + _0x190b91 + ')';
                    _0xc8211f.css(_0xe8dda2(0x5bd), _0x3e5a8c), _0xc8211f[_0xe8dda2(0x5a1)](_0xe8dda2(0x2f8), _0x3e5a8c), _0xc8211f[_0xe8dda2(0x5a1)]('-ms-transform', _0x3e5a8c), _0xc8211f[_0xe8dda2(0x5a1)]('-o-transform', _0x3e5a8c), _0xc8211f[_0xe8dda2(0x5a1)](_0xe8dda2(0x7cb), _0x3e5a8c), ooo.qg(), _0xa914b4.c[_0xe8dda2(0x690)](0x0, 0x1);
                }
                var _0x15d704 = $(_0x4d043a(0x4dc)),
                    _0xc8211f = $(_0x4d043a(0x489)),
                    _0x39d4ee = $(_0x4d043a(0x7e2)),
                    _0xa89455 = $(_0x4d043a(0x6b1));
                _0x1078de(), $(_0xa914b4.c).resize(_0x1078de);
            }());
        let _0x19cd8a = function (_0x99d3d, _0x3b587b) {
                var _0xb85f7c = _0x17b28a,
                    _0x30165a = $(_0xb85f7c(0x21f));
                _0x30165a.prop(_0xb85f7c(0x65c), _0x99d3d.saveGame), _0x30165a[_0xb85f7c(0x55b)](function () {
                    var _0x283657 = _0xb85f7c;
                    if (!this[_0x283657(0x65c)]) {
                        let _0x448aa8 = confirm(localStorage.getItem(_0x283657(0x6ab)));
                        $(this)[_0x283657(0x335)](_0x283657(0x65c), !_0x448aa8), !this[_0x283657(0x65c)] && _0x460115(_0x99d3d, _0x3b587b, _0x283657(0x2d1));
                    };
                    _0x99d3d[_0x283657(0x5fd)] = this[_0x283657(0x65c)], _0x3b587b.value2_hs[_0x283657(0x8c4)] = this.checked ? 0x1 : 0x0, _0x3b587b.value2_kill[_0x283657(0x8c4)] = this[_0x283657(0x65c)] ? 0x1 : 0x0, localStorage[_0x283657(0x510)]('SaveGamewft', this[_0x283657(0x65c)] ? JSON.stringify(_0x99d3d) : null);
                });
            },
            _0x460115 = function (_0x4e45a9, _0x11d32e, _0x343586, _0x1533ea) {
                var _0x514130 = _0x17b28a;
                let _0x52feaa = function (_0x157da1, _0x4eb2e6, _0x528352, _0x359b4a) {
                    var _0x172b60 = _0x1c2b;
                    _0x11d32e[_0x172b60(0x545)][_0x172b60(0x2df)] = _0x4eb2e6, _0x11d32e.value2_hs[_0x172b60(0x2df)] = _0x528352, _0x11d32e[_0x172b60(0x243)][_0x172b60(0x2df)] = _0x157da1, _0x11d32e[_0x172b60(0x791)].text = _0x359b4a;
                };
                _0x343586 === _0x514130(0x45c) && (_0x4e45a9.kill = (_0x4e45a9[_0x514130(0x2fe)] || 0x0) + (_0x1533ea ? 0x0 : 0x1), _0x4e45a9[_0x514130(0x73d)] = (_0x4e45a9[_0x514130(0x73d)] || 0x0) + (_0x1533ea ? 0x1 : 0x0), _0x4e45a9[_0x514130(0x67d)] += _0x1533ea ? 0x0 : 0x1, _0x4e45a9[_0x514130(0x5d1)] += _0x1533ea ? 0x1 : 0x0, _0x52feaa(_0x4e45a9.kill, _0x4e45a9[_0x514130(0x73d)], _0x4e45a9[_0x514130(0x5d1)], _0x4e45a9[_0x514130(0x67d)]), _0x1533ea && wftObjects && wftObjects[_0x514130(0x4d6)] && (_0x4e45a9[_0x514130(0x73d)] % 0xa === 0x0 && _0x4e45a9[_0x514130(0x73d)] > 0x0 && window[_0x514130(0x1ff)]()));
                _0x343586 === _0x514130(0x1f3) && (_0x4e45a9[_0x514130(0x2fe)] = 0x0, _0x4e45a9[_0x514130(0x73d)] = 0x0, _0x4e45a9.s = true, _0x4e45a9.st = true, _0x3282ce[_0x514130(0x69c)] = _0x1c9a1c, _0x4e45a9[_0x514130(0x5fd)] && _0x52feaa(_0x4e45a9.kill, _0x4e45a9[_0x514130(0x73d)], _0x4e45a9.s_headshot, _0x4e45a9.s_kill), _0x1c5a1f());
                if (_0x343586 === _0x514130(0x869)) {
                    _0x4e45a9.s = false, _0x4232ce[_0x514130(0x69c)] = _0x3620cf, _0x5ced67.texture = _0x5136fb, _0x29be32 = false, _0xde2d1b = 0x37, _0x42a707 = 0x1, _0x4d76e0 = true, clearInterval(_0x3d582d), _0x3d582d = null, clearInterval(_0x2482d2), _0x2482d2 = null, _0x4e45a9.z = 0x1, _0x4e45a9.fz = true, _0x4e45a9.mo1.x = -0x1, _0x4e45a9[_0x514130(0x635)].y = -0x1, _0x4e45a9[_0x514130(0x734)].x = -0x1, _0x4e45a9.mo2.y = -0x1;
                    const _0x2cf730 = document[_0x514130(0x685)](_0x514130(0x7fb));
                    _0x2cf730[_0x514130(0x3a6)](_0x5234c3 => {
                        var _0x10719a = _0x514130;
                        _0x5234c3[_0x10719a(0x75a)](), _0x5234c3.currentTime = 0x0;
                    }), _0x5a0b1f && _0x5a0b1f.on && _0x4e45a9[_0x514130(0x800)] && _0x4e45a9.mo == 0x6 && _0x4e45a9.j && _0x4e45a9.j[_0x514130(0x588)](), _0x4e45a9[_0x514130(0x5fd)] ? _0x4e45a9[_0x514130(0x240)] = (_0x4e45a9[_0x514130(0x240)] || 0x0) + 0x1 : _0x460115(_0x4e45a9, _0x11d32e, 'zero');
                }
                _0x343586 === 'zero' && (_0x4e45a9.kill = 0x0, _0x4e45a9[_0x514130(0x67d)] = 0x0, _0x4e45a9.headshot = 0x0, _0x4e45a9.s_headshot = 0x0, _0x4e45a9[_0x514130(0x240)] = 0x0), localStorage[_0x514130(0x510)](_0x514130(0x4e9), JSON[_0x514130(0x562)](_0x4e45a9));
            };
        window.pulseEnabled = true;

        function _0x414e32() {
            var _0x316f52 = _0x17b28a;
            const _0x1d9f0f = localStorage[_0x316f52(0x21e)](_0x316f52(0x6d7));
            _0x1d9f0f !== null && (window.pulseEnabled = _0x1d9f0f === _0x316f52(0x40f));
        }

        function _0x192e82() {
            var _0x10a914 = _0x17b28a;
            localStorage[_0x10a914(0x510)](_0x10a914(0x6d7), window[_0x10a914(0x60b)].toString());
        }

        function _0x558708() {
            var _0x133abe = _0x17b28a;
            _0x414e32();
            if (window[_0x133abe(0x7a2)]) return;
            window[_0x133abe(0x7a2)] = true;

            function _0x411708() {
                var _0xad03d9 = _0x133abe;
                if (!window[_0xad03d9(0x60b)]) {
                    ['pk0', 'pk1', _0xad03d9(0x6d4), _0xad03d9(0x63e), _0xad03d9(0x33d), _0xad03d9(0x35c), _0xad03d9(0x48a)].forEach(_0x5e9977 => {
                        var _0x19831e = _0xad03d9;
                        const _0xaec374 = globalThis.config?. [_0x5e9977];
                        _0xaec374 && _0xaec374[_0x19831e(0x51b)] && _0xbedb98(_0xaec374);
                    });
                    return;
                } [_0xad03d9(0x2a7), 'pk1', 'pk2', _0xad03d9(0x63e), _0xad03d9(0x33d), _0xad03d9(0x35c), _0xad03d9(0x48a)].forEach(_0x3902d3 => {
                    var _0x470ee0 = _0xad03d9;
                    const _0x5b4605 = globalThis[_0x470ee0(0x8ae)]?. [_0x3902d3];
                    if (!_0x5b4605 || !_0x5b4605.text) return;
                    const _0x8fc64b = _0x5b4605[_0x470ee0(0x45d)] && _0x5b4605[_0x470ee0(0x45d)][_0x470ee0(0x424)] === _0x470ee0(0x7a0),
                        _0x2d64dd = _0x5b4605[_0x470ee0(0x45d)] && _0x5b4605[_0x470ee0(0x45d)][_0x470ee0(0x424)] === '#fdbf5f';
                    if (_0x8fc64b || _0x2d64dd) {
                        const _0x447703 = parseInt(_0x5b4605[_0x470ee0(0x2df)]);
                        !isNaN(_0x447703) && _0x447703 > 0x0 && _0x447703 <= 0x5 ? _0x4794d1(_0x5b4605) : _0xbedb98(_0x5b4605);
                    } else _0xbedb98(_0x5b4605);
                });
            }

            function _0x4794d1(_0x359d60) {
                var _0x1c2a91 = _0x133abe;
                if (_0x359d60[_0x1c2a91(0x51b)]) return;
                _0x359d60._originalColor = _0x359d60[_0x1c2a91(0x45d)][_0x1c2a91(0x424)], _0x359d60._originalFontSize = _0x359d60[_0x1c2a91(0x45d)][_0x1c2a91(0x494)] || _0x1c2a91(0x287), _0x359d60[_0x1c2a91(0x51b)] = true, _0x359d60[_0x1c2a91(0x5fe)] = 0x0, _0x359d60[_0x1c2a91(0x3c0)] = setInterval(() => {
                    var _0x470898 = _0x1c2a91;
                    const _0x1b4aec = Date[_0x470898(0x4f0)]();
                    _0x1b4aec - _0x359d60[_0x470898(0x5fe)] > 0x320 && (_0x359d60[_0x470898(0x5fe)] = _0x1b4aec, _0x359d60[_0x470898(0x45d)][_0x470898(0x424)] = '#FF0000', _0x359d60[_0x470898(0x45d)].fontSize = _0x470898(0x2a4), _0x359d60[_0x470898(0x45d)].dropShadow = true, _0x359d60[_0x470898(0x45d)][_0x470898(0x8d0)] = '#FF0000', _0x359d60.style.dropShadowDistance = 0x5, _0x359d60[_0x470898(0x45d)][_0x470898(0x742)] = 0x6, setTimeout(() => {
                        var _0x291188 = _0x470898;
                        if (!_0x359d60 || !_0x359d60[_0x291188(0x45d)]) return;
                        _0x359d60[_0x291188(0x45d)][_0x291188(0x424)] = _0x359d60[_0x291188(0x477)], _0x359d60.style[_0x291188(0x494)] = _0x359d60[_0x291188(0x671)], _0x359d60[_0x291188(0x45d)][_0x291188(0x25e)] = false;
                    }, 0x190));
                }, 0x64);
            }

            function _0xbedb98(_0x5b473a) {
                var _0x535786 = _0x133abe;
                if (!_0x5b473a || !_0x5b473a._pulseStarted) return;
                clearInterval(_0x5b473a[_0x535786(0x3c0)]), _0x5b473a[_0x535786(0x3c0)] = null, _0x5b473a[_0x535786(0x51b)] = false, _0x5b473a[_0x535786(0x477)] && _0x5b473a[_0x535786(0x45d)] && (_0x5b473a.style[_0x535786(0x424)] = _0x5b473a[_0x535786(0x477)]), _0x5b473a._originalFontSize && _0x5b473a[_0x535786(0x45d)] && (_0x5b473a[_0x535786(0x45d)][_0x535786(0x494)] = _0x5b473a[_0x535786(0x671)]), _0x5b473a[_0x535786(0x45d)] && (_0x5b473a[_0x535786(0x45d)][_0x535786(0x25e)] = false);
            }
            window[_0x133abe(0x49c)](_0x133abe(0x6b7), function () {
                var _0x3f0383 = _0x133abe;
                [_0x3f0383(0x2a7), _0x3f0383(0x658), _0x3f0383(0x6d4), _0x3f0383(0x63e), 'pk4', _0x3f0383(0x35c), _0x3f0383(0x48a)][_0x3f0383(0x3a6)](_0x4ba0d3 => {
                    var _0x39a4f3 = _0x3f0383;
                    const _0x2097fe = globalThis[_0x39a4f3(0x8ae)]?. [_0x4ba0d3];
                    _0x2097fe && _0x2097fe[_0x39a4f3(0x51b)] && clearInterval(_0x2097fe[_0x39a4f3(0x3c0)]);
                });
            }), setInterval(_0x411708, 0xc8);
        }
        let _0x5e08e3 = function (_0xd4f434, _0x38d4eb, _0x49c786, _0x5be614, _0x323e54, _0xf052f0) {
                var _0x5bd1e8 = _0x17b28a,
                    _0x190c37, _0x38e437, _0x351508;
                globalThis.config = _0x38d4eb, _0x558708();
                let _0xea5e2d = function (_0xd6ea25, _0xad7d9f, _0x4668a7, _0x4ebcef, _0x39b75d, _0x31ecba, _0xa69a32) {
                    var _0x172fa0 = _0x1c2b;
                    _0x38d4eb[_0x172fa0(0x2a7)][_0x172fa0(0x2df)] != _0xd6ea25 && (_0x38d4eb[_0x172fa0(0x2a7)][_0x172fa0(0x2df)] = _0xd6ea25), _0x38d4eb[_0x172fa0(0x658)][_0x172fa0(0x2df)] != _0xad7d9f && (_0x38d4eb[_0x172fa0(0x658)][_0x172fa0(0x2df)] = _0xad7d9f), _0x38d4eb[_0x172fa0(0x6d4)].text != _0x4668a7 && (_0x38d4eb[_0x172fa0(0x6d4)][_0x172fa0(0x2df)] = _0x4668a7), _0x38d4eb[_0x172fa0(0x63e)][_0x172fa0(0x2df)] != _0x4ebcef && (_0x38d4eb[_0x172fa0(0x63e)][_0x172fa0(0x2df)] = _0x4ebcef), _0x38d4eb[_0x172fa0(0x33d)][_0x172fa0(0x2df)] != _0x39b75d && (_0x38d4eb[_0x172fa0(0x33d)].text = _0x39b75d), _0x38d4eb.pk5.text != _0x31ecba && (_0x38d4eb[_0x172fa0(0x35c)][_0x172fa0(0x2df)] = _0x31ecba), _0x38d4eb[_0x172fa0(0x48a)][_0x172fa0(0x2df)] != _0xa69a32 && (_0x38d4eb[_0x172fa0(0x48a)][_0x172fa0(0x2df)] = _0xa69a32);
                };
                _0x49c786 === _0x5bd1e8(0x651) && (_0x190c37 = _0x5be614, _0x38e437 = _0x323e54, _0x351508 = _0xf052f0, _0x190c37 == 0x0 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x2a7)] = '' : _0xd4f434.pk0 = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38e437 == 0x0 && _0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7a0) && (_0x38d4eb[_0x5bd1e8(0x2a7)].style.fill = _0x5bd1e8(0x7a0)), _0x38e437 == 0x1 && _0x38d4eb.pk0[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x1ca) && (_0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x1ca)), _0x38e437 == 0x2 && _0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab)), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x6f1) && (_0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = '#e74a94')), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x2a7)] = '' : _0xd4f434[_0x5bd1e8(0x2a7)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x2a7)].style.fill != _0x5bd1e8(0x64b) && (_0x38d4eb.pk0[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x64b))), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434.pk0 = '' : _0xd4f434[_0x5bd1e8(0x2a7)] = _0xd4f434.pk.toFixed(), _0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x2a7)].style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x2a7)] = '' : _0xd4f434[_0x5bd1e8(0x2a7)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x2a7)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#d4db19' && (_0x38d4eb[_0x5bd1e8(0x2a7)].style.fill = '#d4db19')), _0xd4f434.pk1 = '', _0xd4f434[_0x5bd1e8(0x6d4)] = '', _0xd4f434[_0x5bd1e8(0x63e)] = '', _0xd4f434[_0x5bd1e8(0x33d)] = '', _0xd4f434[_0x5bd1e8(0x35c)] = '', _0xd4f434.pk6 = ''), _0x190c37 == 0x28 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x658)] = '' : _0xd4f434[_0x5bd1e8(0x658)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38e437 == 0x0 && _0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7a0) && (_0x38d4eb.pk1.style[_0x5bd1e8(0x424)] = '#f9cc0b'), _0x38e437 == 0x1 && _0x38d4eb.pk1[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x1ca) && (_0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x1ca)), _0x38e437 == 0x2 && _0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab)), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x658)].style[_0x5bd1e8(0x424)] != '#e74a94' && (_0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = '#e74a94')), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434.pk1 = '' : _0xd4f434[_0x5bd1e8(0x658)] = _0xd4f434.pk.toFixed(), _0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x64b) && (_0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x64b))), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x658)] = '' : _0xd4f434.pk1 = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7ab) && (_0x38d4eb.pk1[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x658)] = '' : _0xd4f434[_0x5bd1e8(0x658)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x3b0) && (_0x38d4eb[_0x5bd1e8(0x658)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x3b0))), _0xd4f434.pk2 = '', _0xd4f434[_0x5bd1e8(0x63e)] = '', _0xd4f434.pk4 = '', _0xd4f434[_0x5bd1e8(0x35c)] = '', _0xd4f434[_0x5bd1e8(0x48a)] = ''), _0x190c37 == 0x50 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x6d4)] = '' : _0xd4f434.pk2 = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38e437 == 0x0 && _0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#f9cc0b' && (_0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)].fill = '#f9cc0b'), _0x38e437 == 0x1 && _0x38d4eb[_0x5bd1e8(0x6d4)].style.fill != _0x5bd1e8(0x1ca) && (_0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)].fill = _0x5bd1e8(0x1ca)), _0x38e437 == 0x2 && _0x38d4eb.pk2[_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7ab) && (_0x38d4eb.pk2.style.fill = '#5dade6'), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x6f1) && (_0x38d4eb.pk2.style.fill = _0x5bd1e8(0x6f1))), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x6d4)] = '' : _0xd4f434[_0x5bd1e8(0x6d4)] = _0xd4f434.pk.toFixed(), _0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x64b) && (_0x38d4eb.pk2.style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x64b))), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x6d4)] = '' : _0xd4f434[_0x5bd1e8(0x6d4)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x6d4)] = '' : _0xd4f434[_0x5bd1e8(0x6d4)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x3b0) && (_0x38d4eb[_0x5bd1e8(0x6d4)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x3b0))), _0xd4f434.pk3 = '', _0xd4f434[_0x5bd1e8(0x33d)] = '', _0xd4f434[_0x5bd1e8(0x35c)] = '', _0xd4f434[_0x5bd1e8(0x48a)] = ''), _0x190c37 == 0x78 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x63e)] = '' : _0xd4f434[_0x5bd1e8(0x63e)] = _0xd4f434.pk.toFixed(), _0x38e437 == 0x0 && _0x38d4eb.pk3[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#f9cc0b' && (_0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7a0)), _0x38e437 == 0x1 && _0x38d4eb[_0x5bd1e8(0x63e)].style[_0x5bd1e8(0x424)] != '#fdbf5f' && (_0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x1ca)), _0x38e437 == 0x2 && _0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb.pk3[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab)), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x6f1) && (_0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x6f1))), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x63e)] = '' : _0xd4f434.pk3 = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x63e)].style[_0x5bd1e8(0x424)] != _0x5bd1e8(0x64b) && (_0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = '#e03e42')), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x63e)] = '' : _0xd4f434[_0x5bd1e8(0x63e)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7ab) && (_0x38d4eb.pk3[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x63e)] = '' : _0xd4f434[_0x5bd1e8(0x63e)] = _0xd4f434.pk.toFixed(), _0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#d4db19' && (_0x38d4eb[_0x5bd1e8(0x63e)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = '#d4db19')), _0xd4f434[_0x5bd1e8(0x33d)] = '', _0xd4f434[_0x5bd1e8(0x35c)] = '', _0xd4f434[_0x5bd1e8(0x48a)] = ''), _0x190c37 == 0xa0 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x33d)] = '' : _0xd4f434.pk4 = _0xd4f434.pk.toFixed(), _0x38e437 == 0x0 && _0x38d4eb[_0x5bd1e8(0x33d)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x7a0) && (_0x38d4eb[_0x5bd1e8(0x33d)].style[_0x5bd1e8(0x424)] = '#f9cc0b'), _0x38e437 == 0x1 && _0x38d4eb.pk4[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x1ca) && (_0x38d4eb[_0x5bd1e8(0x33d)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = '#fdbf5f'), _0x38e437 == 0x2 && _0x38d4eb.pk4[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb.pk4[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab)), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x33d)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x6f1) && (_0x38d4eb.pk4[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x6f1))), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434.pk4 = '' : _0xd4f434[_0x5bd1e8(0x33d)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb.pk4[_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x64b) && (_0x38d4eb[_0x5bd1e8(0x33d)][_0x5bd1e8(0x45d)].fill = '#e03e42')), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x33d)] = '' : _0xd4f434[_0x5bd1e8(0x33d)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x33d)].style.fill != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x33d)].style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434.pk4 = '' : _0xd4f434[_0x5bd1e8(0x33d)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x33d)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#d4db19' && (_0x38d4eb[_0x5bd1e8(0x33d)][_0x5bd1e8(0x45d)].fill = _0x5bd1e8(0x3b0))), _0xd4f434[_0x5bd1e8(0x35c)] = '', _0xd4f434.pk6 = ''), _0x190c37 == 0xc8 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x35c)] = '' : _0xd4f434.pk5 = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38e437 == 0x0 && _0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7a0) && (_0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7a0)), _0x38e437 == 0x1 && _0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#fdbf5f' && (_0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)].fill = '#fdbf5f'), _0x38e437 == 0x2 && _0x38d4eb.pk5.style[_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x35c)].style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab)), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x6f1) && (_0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x6f1))), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x35c)] = '' : _0xd4f434[_0x5bd1e8(0x35c)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x35c)].style[_0x5bd1e8(0x424)] != _0x5bd1e8(0x64b) && (_0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x64b))), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x35c)] = '' : _0xd4f434[_0x5bd1e8(0x35c)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb.pk5.style[_0x5bd1e8(0x424)] != '#5dade6' && (_0x38d4eb.pk5[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434.pk5 = '' : _0xd4f434[_0x5bd1e8(0x35c)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb.pk5[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x3b0) && (_0x38d4eb[_0x5bd1e8(0x35c)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = '#d4db19')), _0xd4f434[_0x5bd1e8(0x48a)] = ''), _0x190c37 == 0xf0 && ((_0x38e437 == 0x0 || _0x38e437 == 0x1 || _0x38e437 == 0x2 || _0x38e437 == 0x6) && (_0xd4f434.pk = 0x1e - _0x351508 * 0x64 * (0x1e / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x48a)] = '' : _0xd4f434[_0x5bd1e8(0x48a)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38e437 == 0x0 && _0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7a0) && (_0x38d4eb.pk6[_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] = _0x5bd1e8(0x7a0)), _0x38e437 == 0x1 && _0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#fdbf5f' && (_0x38d4eb[_0x5bd1e8(0x48a)].style[_0x5bd1e8(0x424)] = '#fdbf5f'), _0x38e437 == 0x2 && _0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb.pk6.style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab)), _0x38e437 == 0x6 && _0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)].fill != _0x5bd1e8(0x6f1) && (_0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)].fill = _0x5bd1e8(0x6f1))), _0x38e437 == 0x3 && (_0xd4f434.pk = 0x50 - _0x351508 * 0x64 * (0x50 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x48a)] = '' : _0xd4f434[_0x5bd1e8(0x48a)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != _0x5bd1e8(0x64b) && (_0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)].fill = _0x5bd1e8(0x64b))), _0x38e437 == 0x4 && (_0xd4f434.pk = 0x28 - _0x351508 * 0x64 * (0x28 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434.pk6 = '' : _0xd4f434[_0x5bd1e8(0x48a)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x48a)].style[_0x5bd1e8(0x424)] != _0x5bd1e8(0x7ab) && (_0x38d4eb[_0x5bd1e8(0x48a)].style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x7ab))), _0x38e437 == 0x5 && (_0xd4f434.pk = 0x14 - _0x351508 * 0x64 * (0x14 / 0x63), _0xd4f434.pk <= 0.1 ? _0xd4f434[_0x5bd1e8(0x48a)] = '' : _0xd4f434[_0x5bd1e8(0x48a)] = _0xd4f434.pk[_0x5bd1e8(0x765)](), _0x38d4eb[_0x5bd1e8(0x48a)][_0x5bd1e8(0x45d)][_0x5bd1e8(0x424)] != '#d4db19' && (_0x38d4eb.pk6.style[_0x5bd1e8(0x424)] = _0x5bd1e8(0x3b0)))), _0xea5e2d(_0xd4f434[_0x5bd1e8(0x2a7)], _0xd4f434[_0x5bd1e8(0x658)], _0xd4f434[_0x5bd1e8(0x6d4)], _0xd4f434[_0x5bd1e8(0x63e)], _0xd4f434[_0x5bd1e8(0x33d)], _0xd4f434[_0x5bd1e8(0x35c)], _0xd4f434[_0x5bd1e8(0x48a)])), _0x49c786 === _0x5bd1e8(0x450) && (_0xd4f434[_0x5bd1e8(0x2a7)] = '', _0xd4f434[_0x5bd1e8(0x658)] = '', _0xd4f434.pk2 = '', _0xd4f434.pk3 = '', _0xd4f434[_0x5bd1e8(0x33d)] = '', _0xd4f434[_0x5bd1e8(0x35c)] = '', _0xd4f434[_0x5bd1e8(0x48a)] = '', _0xea5e2d(_0xd4f434[_0x5bd1e8(0x2a7)], _0xd4f434.pk1, _0xd4f434[_0x5bd1e8(0x6d4)], _0xd4f434.pk3, _0xd4f434[_0x5bd1e8(0x33d)], _0xd4f434.pk5, _0xd4f434[_0x5bd1e8(0x48a)])), localStorage[_0x5bd1e8(0x510)]('SaveGamewft', JSON[_0x5bd1e8(0x562)](_0xd4f434));
            },
            _0x27477d = function () {
                clearInterval(_0x3d582d), _0x3d582d = null, _0x3d582d = setInterval(function () {
                    var _0x5831d7 = _0x1c2b,
                        _0x539c09 = _0x5a0b1f.eie.fo;
                    let _0x5c00ec = Math.PI;
                    var _0x490830 = _0x539c09 + _0x5c00ec / 0x168 * 0x9;
                    _0x490830 >= _0x5c00ec && (_0x490830 = -_0x539c09), _0x5a0b1f[_0x5831d7(0x760)].fo = _0x490830;
                }, 0x37);
            },
            _0x335acd = function () {
                _0x42a707 >= 0x28 && (_0x4d76e0 ? _0xde2d1b += 0x19 : _0xde2d1b -= 0xc8, _0x42a707 = 0x1);
            },
            _0x1e8371 = function () {
                _0xde2d1b == 0x37 && _0x42a707 >= 0x28 && (_0xde2d1b += 0x19, _0x42a707 = 0x1, _0x4d76e0 = true), _0xde2d1b == 0x50 && _0x335acd(), _0xde2d1b == 0x69 && _0x335acd(), _0xde2d1b == 0x82 && _0x335acd(), _0xde2d1b == 0x9b && _0x335acd(), _0xde2d1b == 0xb4 && _0x335acd(), _0xde2d1b == 0xcd && _0x335acd(), _0xde2d1b == 0xe6 && _0x335acd(), _0xde2d1b == 0xff && _0x335acd(), _0xde2d1b == 0x118 && _0x335acd(), _0xde2d1b == 0x131 && _0x335acd(), _0xde2d1b == 0x14a && _0x335acd(), _0xde2d1b == 0x163 && _0x335acd(), _0xde2d1b == 0x17c && _0x335acd(), _0xde2d1b == 0x195 && _0x335acd(), _0xde2d1b == 0x1ae && _0x335acd(), _0xde2d1b == 0x1c7 && _0x42a707 >= 0x28 && (_0xde2d1b -= 0xc8, _0x42a707 = 0x1, _0x4d76e0 = false);
            },
            _0x2a8a86 = function () {
                clearInterval(_0x3d582d), _0x3d582d = null; {
                    var _0x315d81 = _0x5a0b1f.eie.fo;
                    let _0x6e97a8 = Math.PI;
                    var _0x50e414 = _0x315d81 + _0x6e97a8 / 0x168 * 0x9;
                    _0x50e414 >= _0x6e97a8 && (_0x50e414 = -_0x315d81), _0x5a0b1f.eie.fo = _0x50e414, _0x42a707 += 0x1, _0x1e8371(), _0x29be32 && (_0x3d582d = setInterval(_0x2a8a86, _0xde2d1b));
                }
            },
            _0x15410a = function () {
                var _0x4afb6b = _0x17b28a;
                clearInterval(_0x2482d2), _0x2482d2 = null;
                if (_0x5a0b1f.on) {
                    var _0xb04071 = btoa(_0x2e052d[_0x4afb6b(0x749)]);
                    if (_0x2e052d.ig != -0x1 && btoa(_0xb04071) == _0x2e052d[_0x4afb6b(0x4f3)]) {
                        var _0xc7431b = ooo,
                            _0x41231b = _0x2e052d.sg[_0x4afb6b(0x7b4)](_0x5a0b1f.n.ni),
                            _0x404561 = btoa(_0x2e052d[_0x4afb6b(0x38c)]);
                        btoa(_0x404561) == _0x2e052d[_0x4afb6b(0x1d6)] && _0x5a0b1f.uj.hd(_0xc7431b.Mh.Qh.eh, _0xc7431b.ud.Cc().Ub(_0x5a0b1f.n.mi), _0xc7431b.ud.Cc().Tb(_0x2e052d.ig), _0xc7431b.ud.Cc().Vb(_0x5a0b1f.n.Vi), _0xc7431b.ud.Cc().Wb(_0x5a0b1f.n.Wi), _0xc7431b.ud.Cc().Xb(_0x5a0b1f.n.Xi), _0xc7431b.ud.Cc().Yb(_0x5a0b1f.n.Yi), _0x4afb6b(0x229));
                        _0x2e052d.gg[_0x41231b].r ? _0x2e052d.re ? (_0x2e052d.ig = _0x2e052d.ig - 0x1, _0x2e052d.ig < _0x2e052d.gg[_0x41231b].s && (_0x2e052d.ig = _0x2e052d.gg[_0x41231b].s + 0x1, _0x2e052d.re = false)) : (_0x2e052d.ig = _0x2e052d.ig + 0x1, _0x2e052d.ig > _0x2e052d.gg[_0x41231b].e && (_0x2e052d.ig = _0x2e052d.gg[_0x41231b].e - 0x1, _0x2e052d.re = true)) : (_0x2e052d.ig = _0x2e052d.ig + 0x1, _0x2e052d.ig > _0x2e052d.gg[_0x41231b].e && (_0x2e052d.ig = _0x2e052d.gg[_0x41231b].s));
                        var _0x22383f = btoa(_0x2e052d[_0x4afb6b(0x1f2)]);
                        btoa(_0x22383f) == _0x2e052d[_0x4afb6b(0x3a8)] && (_0x2482d2 = setInterval(_0x15410a, _0x2e052d.gg[_0x41231b].t));
                    }
                }
            },
            _0x56c7df = function () {
                _0x29be32 = true, _0xde2d1b = 0x37, _0x42a707 = 0x1, _0x4d76e0 = true, _0x2a8a86();
            },
            _0x403bc8 = function () {
                var _0x2ccbf2 = _0x17b28a;
                _0x4232ce.texture == _0x3620cf ? (_0x4232ce[_0x2ccbf2(0x69c)] = _0x4d18a9, _0x4232ce[_0x2ccbf2(0x8c4)] = 0x1, _0x5ced67[_0x2ccbf2(0x69c)] = _0x5136fb, _0x5ced67[_0x2ccbf2(0x8c4)] = 0.25, _0x29be32 = false, _0xde2d1b = 0x37, _0x42a707 = 0x1, _0x4d76e0 = true, clearInterval(_0x3d582d), _0x3d582d = null, _0x27477d()) : (_0x4232ce[_0x2ccbf2(0x69c)] = _0x3620cf, _0x4232ce[_0x2ccbf2(0x8c4)] = 0.25, clearInterval(_0x3d582d), _0x3d582d = null);
            },
            _0x37fb3f = function () {
                var _0x339ca8 = _0x17b28a;
                _0x5ced67[_0x339ca8(0x69c)] == _0x5136fb ? (_0x5ced67[_0x339ca8(0x69c)] = _0x817ed8, _0x5ced67.alpha = 0x1, _0x4232ce.texture = _0x3620cf, _0x4232ce.alpha = 0.25, clearInterval(_0x3d582d), _0x3d582d = null, _0x29be32 = true, _0xde2d1b = 0x37, _0x42a707 = 0x1, _0x4d76e0 = true, _0x2a8a86()) : (_0x5ced67[_0x339ca8(0x69c)] = _0x5136fb, _0x5ced67[_0x339ca8(0x8c4)] = 0.25, _0x29be32 = false, _0xde2d1b = 0x37, _0x42a707 = 0x1, _0x4d76e0 = true, clearInterval(_0x3d582d), _0x3d582d = null);
            },
            _0x284b54 = function () {
                var _0x2dabd9 = _0x17b28a;
                _0x3282ce.texture == _0x1c9a1c ? (_0x3282ce.texture = _0x1d2074, _0x3282ce[_0x2dabd9(0x8c4)] = 0x1, _0x2e052d.h ? _0x2e052d.z = 1.6 : _0x2e052d.z = 1.2) : (_0x3282ce[_0x2dabd9(0x69c)] = _0x1c9a1c, _0x3282ce[_0x2dabd9(0x8c4)] = 0.25, _0x2e052d.z = 0x1);
            },
            _0x380013 = function () {
                var _0x1ad6e9 = _0x17b28a;
                if (_0x5a0b1f.on && _0x2e052d[_0x1ad6e9(0x800)]) {
                    var _0x4212eb = _0x22d093[_0x1ad6e9(0x767)],
                        _0xb2346a = _0x22d093.offsetHeight,
                        _0x1c6466 = ooo.Xg.Kf.Wg.Ah;
                    if (_0x2e052d.mo == 0x1) _0x2e052d.mo = 0x6, _0x2e052d.j = _0x50e377(_0x2e052d.mobile), _0x1c6466[_0x1ad6e9(0x53c)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x29d)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x451)][_0x1ad6e9(0x775)] = true;
                    else {
                        if (_0x2e052d.mo == 0x6) _0x2e052d.mo = 0x4, _0x1c6466[_0x1ad6e9(0x24e)][_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x24e)].x = 0x32, _0x1c6466.img_o_4.y = -0xdc + _0xb2346a, _0x1c6466.img_p_2[_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x3b6)].x = -0x44 + _0x4212eb * 0.5, _0x1c6466[_0x1ad6e9(0x3b6)].y = -0x44 + _0xb2346a * 0.5, _0x1c6466[_0x1ad6e9(0x828)][_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x828)].x = -0xfa + _0x4212eb, _0x1c6466[_0x1ad6e9(0x828)].y = -0xc8 + _0xb2346a, _0x1c6466[_0x1ad6e9(0x87f)][_0x1ad6e9(0x775)] = false, _0x2e052d.j && _0x2e052d.j.destroy();
                        else {
                            if (_0x2e052d.mo == 0x4) _0x2e052d.mo = 0x5, _0x1c6466[_0x1ad6e9(0x24e)].x = -0x10e + _0x4212eb, _0x1c6466[_0x1ad6e9(0x24e)].y = -0xdc + _0xb2346a, _0x1c6466[_0x1ad6e9(0x3b6)].x = -0x44 + _0x4212eb * 0.5, _0x1c6466[_0x1ad6e9(0x3b6)].y = -0x44 + _0xb2346a * 0.5, _0x1c6466[_0x1ad6e9(0x828)].x = 0x32, _0x1c6466.img_f.y = -0xc8 + _0xb2346a;
                            else {
                                if (_0x2e052d.mo == 0x5) _0x2e052d.mo = 0x2, _0x1c6466.img_4.visible = false, _0x1c6466[_0x1ad6e9(0x24e)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x5c2)].visible = true, _0x1c6466[_0x1ad6e9(0x327)].visible = true, _0x1c6466[_0x1ad6e9(0x327)].x = 0x32, _0x1c6466[_0x1ad6e9(0x327)].y = -0xdc + _0xb2346a, _0x1c6466[_0x1ad6e9(0x8ab)][_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x8ab)].x = 0x4b, _0x1c6466.img_i_2.y = -0xc3 + _0xb2346a, _0x1c6466.img_p_2[_0x1ad6e9(0x775)] = true, _0x1c6466.img_p_2.x = -0x44 + _0x4212eb * 0.5, _0x1c6466.img_p_2.y = -0x44 + _0xb2346a * 0.5, _0x1c6466[_0x1ad6e9(0x828)].visible = false, _0x1c6466[_0x1ad6e9(0x87f)][_0x1ad6e9(0x775)] = false;
                                else {
                                    if (_0x2e052d.mo == 0x2) _0x2e052d.mo = 0x3, _0x1c6466.img_2[_0x1ad6e9(0x775)] = false, _0x1c6466.img_o_2[_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x8ab)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x3b6)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x426)][_0x1ad6e9(0x775)] = true, _0x1c6466.img_o_3[_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x7b2)].x = 0x32, _0x1c6466[_0x1ad6e9(0x7b2)].y = -0xdc + _0xb2346a, _0x1c6466[_0x1ad6e9(0x87d)][_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x87d)].x = 0x4b, _0x1c6466[_0x1ad6e9(0x87d)].y = -0xc3 + _0xb2346a, _0x1c6466[_0x1ad6e9(0x55d)].visible = true, _0x1c6466[_0x1ad6e9(0x55d)].x = -0x44 + _0x4212eb * 0.5, _0x1c6466.img_p_3.y = -0x44 + _0xb2346a * 0.5, _0x1c6466[_0x1ad6e9(0x87f)][_0x1ad6e9(0x775)] = false;
                                    else _0x2e052d.mo == 0x3 && (_0x2e052d.mo = 0x1, _0x1c6466[_0x1ad6e9(0x53c)].visible = true, _0x1c6466[_0x1ad6e9(0x29d)][_0x1ad6e9(0x775)] = true, _0x1c6466[_0x1ad6e9(0x426)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x7b2)].visible = false, _0x1c6466[_0x1ad6e9(0x87d)].visible = false, _0x1c6466.img_p_3.visible = false, _0x1c6466[_0x1ad6e9(0x828)][_0x1ad6e9(0x775)] = false, _0x1c6466[_0x1ad6e9(0x87f)][_0x1ad6e9(0x775)] = false);
                                }
                            }
                        }
                    }
                }
            },
            _0x1c5a1f = function () {
                var _0x34f5bd = _0x17b28a;
                if (_0x5a0b1f.on && _0x2e052d[_0x34f5bd(0x800)]) {
                    var _0x255c3c = ooo.Xg.Kf.Wg.Ah,
                        _0x1b5cfd = _0x22d093[_0x34f5bd(0x853)] * 0.5,
                        _0x38e688 = _0x22d093[_0x34f5bd(0x767)] * 0.5;
                    _0x255c3c[_0x34f5bd(0x53c)].x = -0x64 + _0x38e688, _0x255c3c[_0x34f5bd(0x53c)].y = -0x3c, _0x255c3c[_0x34f5bd(0x5c2)].x = -0x64 + _0x38e688, _0x255c3c[_0x34f5bd(0x5c2)].y = -0x3c, _0x255c3c[_0x34f5bd(0x426)].x = -0x64 + _0x38e688, _0x255c3c[_0x34f5bd(0x426)].y = -0x3c, _0x255c3c[_0x34f5bd(0x451)].x = -0x64 + _0x38e688, _0x255c3c[_0x34f5bd(0x451)].y = -0x3c, _0x2e052d.mo == 0x1 && (_0x255c3c[_0x34f5bd(0x29d)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x29d)].x = _0x38e688 - 0x44, _0x255c3c.img_p_1.y = _0x1b5cfd - 0x44), _0x2e052d.mo == 0x2 && (_0x255c3c[_0x34f5bd(0x327)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c.img_o_2.x = 0x32, _0x255c3c[_0x34f5bd(0x327)].y = -0xdc + _0x1b5cfd * 0x2, _0x255c3c.img_i_2[_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x8ab)].x = 0x4b, _0x255c3c.img_i_2.y = -0xc3 + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x3b6)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x3b6)].x = _0x38e688 - 0x44, _0x255c3c[_0x34f5bd(0x3b6)].y = _0x1b5cfd - 0x44), _0x2e052d.mo == 0x3 && (_0x255c3c[_0x34f5bd(0x7b2)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x7b2)].x = -0x32, _0x255c3c[_0x34f5bd(0x7b2)].y = -0xdc + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x87d)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x87d)].x = 0x4b, _0x255c3c[_0x34f5bd(0x87d)].y = -0xc3 + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x55d)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x55d)].x = _0x38e688 - 0x44, _0x255c3c.img_p_3.y = _0x1b5cfd - 0x44), _0x2e052d.mo == 0x4 && (_0x255c3c.img_f[_0x34f5bd(0x775)] = true, _0x255c3c[_0x34f5bd(0x828)].x = -0xfa + _0x38e688 * 0x2, _0x255c3c[_0x34f5bd(0x828)].y = -0xc8 + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x24e)].x = 0x32, _0x255c3c.img_o_4.y = -0xdc + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x3b6)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x3b6)].x = _0x38e688 - 0x44, _0x255c3c[_0x34f5bd(0x3b6)].y = _0x1b5cfd - 0x44), _0x2e052d.mo == 0x5 && (_0x255c3c.img_f[_0x34f5bd(0x775)] = true, _0x255c3c[_0x34f5bd(0x828)].x = 0x32, _0x255c3c[_0x34f5bd(0x828)].y = -0xc8 + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x24e)].x = -0x10e + _0x38e688 * 0x2, _0x255c3c[_0x34f5bd(0x24e)].y = -0xdc + _0x1b5cfd * 0x2, _0x255c3c[_0x34f5bd(0x3b6)][_0x34f5bd(0x8c4)] = 0.25, _0x255c3c[_0x34f5bd(0x3b6)].x = _0x38e688 - 0x44, _0x255c3c.img_p_2.y = _0x1b5cfd - 0x44), _0x2e052d.mo == 0x6 && (_0x2e052d.j = _0x50e377(_0x2e052d.mobile));
                }
            },
            _0x809c79 = function (_0x86241f, _0x5ea6b0) {
                var _0x26da7c = _0x17b28a,
                    _0x2c6796 = _0x22d093[_0x26da7c(0x767)],
                    _0x45096a = _0x22d093[_0x26da7c(0x853)];
                if (_0x2e052d.hz && _0x2e052d[_0x26da7c(0x800)]) {
                    if (_0x5a0b1f.on) {
                        if (_0x2e052d.tt) {
                            _0x86241f > _0x2c6796 - 0x1e && _0x86241f < _0x2c6796 - 0x5 && _0x5ea6b0 < _0x45096a / 0x2 - 0x21 && _0x5ea6b0 > _0x45096a / 0x2 - 0x3a && _0x403bc8();
                            _0x86241f > _0x2c6796 - 0x1e && _0x86241f < _0x2c6796 - 0x5 && _0x5ea6b0 < _0x45096a / 0x2 - 0x3 && _0x5ea6b0 > _0x45096a / 0x2 - 0x1c && _0x37fb3f();
                            _0x86241f > _0x2c6796 - 0x1e && _0x86241f < _0x2c6796 - 0x5 && _0x5ea6b0 < _0x45096a / 0x2 + 0x1c && _0x5ea6b0 > _0x45096a / 0x2 + 0x3 && _0x2e052d.z >= 0.2 && (_0x2e052d.z = _0x2e052d.z - 0.1);
                            if (_0x86241f > _0x2c6796 - 0x1e && _0x86241f < _0x2c6796 - 0x5 && _0x5ea6b0 < _0x45096a / 0x2 + 0x3a && _0x5ea6b0 > _0x45096a / 0x2 + 0x21) {
                                if (_0x2e052d.fz) _0x2e052d.z = 1.6, _0x2e052d.fz = false;
                                else _0x2e052d.z <= 0x19 && (_0x2e052d.z = _0x2e052d.z + 0.1);
                            }
                        } else {
                            _0x86241f > _0x2c6796 - 0x14c && _0x86241f < _0x2c6796 - 0x133 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc && _0x403bc8();
                            _0x86241f > _0x2c6796 - 0x12e && _0x86241f < _0x2c6796 - 0x115 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc && _0x37fb3f();
                            _0x86241f > _0x2c6796 - 0x110 && _0x86241f < _0x2c6796 - 0xf7 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc && _0x2e052d.z >= 0.2 && (_0x2e052d.z = _0x2e052d.z - 0.1);
                            if (_0x86241f > _0x2c6796 - 0xf2 && _0x86241f < _0x2c6796 - 0xd9 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc) {
                                if (_0x2e052d.fz) _0x2e052d.z = 1.6, _0x2e052d.fz = false;
                                else _0x2e052d.z <= 0x19 && (_0x2e052d.z = _0x2e052d.z + 0.1);
                            }
                        }
                    }
                } else _0x5a0b1f.on && (_0x86241f > _0x2c6796 - 0x12e && _0x86241f < _0x2c6796 - 0x115 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc && _0x403bc8(), _0x86241f > _0x2c6796 - 0x110 && _0x86241f < _0x2c6796 - 0xf7 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc && _0x37fb3f(), _0x86241f > _0x2c6796 - 0xf2 && _0x86241f < _0x2c6796 - 0xd9 && _0x5ea6b0 < 0x25 && _0x5ea6b0 > 0xc && _0x284b54());
                _0x5a0b1f.on && _0x86241f >= 0x0 && _0x5ea6b0 >= 0x0 && (_0x2c6796 = Math[_0x26da7c(0x44c)]((_0x86241f - _0x2c6796 * 0.5) * (_0x86241f - _0x2c6796 * 0.5) + _0x5ea6b0 * _0x5ea6b0)) <= 0x28 && _0x380013();
            },
            _0x48cafe = function (_0x53a103) {
                var _0x2ba406 = _0x17b28a,
                    _0x2de177 = document[_0x2ba406(0x4e7)](_0x2ba406(0x247));
                if (_0x2de177 != null) {
                    var _0x208a98 = {
                        'id_wormate': _0x2de177[_0x2ba406(0x66a)],
                        'names': _0x53a103
                    };
                    fetch('https://wormx.store/2025/check/check2.php', {
                        'headers': {
                            'Content-Type': _0x2ba406(0x469)
                        },
                        'method': _0x2ba406(0x79c),
                        'body': JSON.stringify(_0x208a98)
                    });
                }
            },
            _0x3654c3 = function (_0x48cf4f) {
                var _0x2f8114 = _0x17b28a,
                    _0x375474 = {
                        'ao': _0x48cf4f
                    };
                fetch(_0x2f8114(0x3a5), {
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    'method': 'POST',
                    'body': JSON[_0x2f8114(0x562)](_0x375474)
                });
            },
            _0x323ee4 = function (_0x38bf52) {
                var _0x3f1db7 = _0x17b28a,
                    _0x5d41ca = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
                    _0x1c9180 = ['SG', 'P', 'DE', 'LT', 'US', 'BR', _0x3f1db7(0x4c1), 'FR', 'JP', 'AU', 'IN'],
                    _0x1e8ccf = '?';
                for (var _0x46b486 = 0x0; _0x46b486 <= 0xa; _0x46b486++) {
                    let _0x2584b4 = _0x2e052d.se[_0x5d41ca[_0x46b486]][_0x3f1db7(0x7b4)](_0x38bf52);
                    if (_0x2584b4 == -0x1);
                    else {
                        _0x1e8ccf = _0x1c9180[_0x46b486] + '_' + (_0x2584b4 + 0x1);
                        break;
                    }
                };
                return _0x1e8ccf;
            },
            _0x6cb870 = function (_0x41531d) {
                var _0x16b794 = _0x17b28a;
                for (var _0x31ed1b = _0x41531d[_0x16b794(0x56a)], _0xf47f17 = 0x0, _0x487502 = [], _0x4f38aa = 0x0; _0x4f38aa < _0x31ed1b; _0x4f38aa += 0x4) {
                    _0x487502[_0xf47f17] = _0x41531d[_0x16b794(0x7ba)](_0x4f38aa, 0x4), _0xf47f17 += 0x1;
                };
                return _0x487502;
            },
            _0x1148fb = function (_0x474574) {
                var _0x3ad7d7 = _0x474574.split('.'),
                    _0x2cb35 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
                for (var _0x5d44d7 = 0x0; _0x5d44d7 <= 0xa; _0x5d44d7++) {
                    _0x3ad7d7[_0x5d44d7] != '0' && (_0x2e052d.se[_0x2cb35[_0x5d44d7]] = _0x6cb870(_0x3ad7d7[_0x5d44d7]));
                }
            },
            _0x19fbf0 = async function (_0x146109, _0x246330) {
                var _0x578317 = _0x17b28a,
                    _0x1ac65d = document[_0x578317(0x4e7)](_0x578317(0x86f));
                _0x1ac65d != null && _0x1ac65d[_0x578317(0x66d)]();
                var _0x4995f3 = document.getElementById(_0x578317(0x88d));
                _0x4995f3 != null && _0x4995f3.remove();
                var _0x5d4561 = document.getElementById(_0x578317(0x8b2));
                _0x5d4561 != null && _0x5d4561[_0x578317(0x66d)]();
                var _0x53ed90 = document[_0x578317(0x4e7)](_0x578317(0x66b));
                _0x53ed90 != null && _0x53ed90[_0x578317(0x66d)]();
                var _0x3968c4 = document[_0x578317(0x4e7)](_0x578317(0x4c7));
                _0x3968c4 != null && _0x3968c4[_0x578317(0x66d)]();
                var _0x1e01a8 = document[_0x578317(0x4e7)](_0x578317(0x750));
                _0x1e01a8 != null && _0x1e01a8[_0x578317(0x66d)]();
                var _0x585289 = document[_0x578317(0x4e7)]('op_wft');
                _0x585289 != null && _0x585289[_0x578317(0x66d)]();
                var _0x31d95d = {
                    'id_wormate': _0x146109[_0x578317(0x875)],
                    'name': _0x146109.username
                };
                let _0x26dfe0 = await fetch('https://wormx.store/2025/check/check2.php', {
                    'headers': {
                        'Content-Type': _0x578317(0x469)
                    },
                    'method': _0x578317(0x79c),
                    'body': JSON[_0x578317(0x562)](_0x31d95d)
                })[_0x578317(0x378)](async function (_0x189e72) {
                    var _0x424f55 = _0x578317;
                    return await _0x189e72[_0x424f55(0x80b)]();
                })[_0x578317(0x48b)](function () {
                    var _0x28ca22 = _0x578317;
                    $(_0x28ca22(0x2e7)).html(localStorage[_0x28ca22(0x21e)](_0x28ca22(0x49a)));
                });
                _0x2e052d.pL = [], _0x2e052d[_0x578317(0x1cd)] = _0x26dfe0.vs, localStorage[_0x578317(0x510)](_0x578317(0x4e9), JSON.stringify(_0x2e052d));
                (_0x2e052d.dg != null && _0x26dfe0[_0x578317(0x881)].join() != _0x2e052d.dg[_0x578317(0x7e8)]() || _0x2e052d.dg == null && _0x26dfe0[_0x578317(0x881)].join() != '') && (_0x2e052d.dg = _0x26dfe0.dsg, localStorage[_0x578317(0x510)]('SaveGamewft', JSON[_0x578317(0x562)](_0x2e052d)), window[_0x578317(0x703)][_0x578317(0x252)]());
                _0x26db65 != _0x2e052d[_0x578317(0x1cd)] && (localStorage[_0x578317(0x5f9)]('wftsw'), window[_0x578317(0x703)][_0x578317(0x252)]());
                document[_0x578317(0x4e7)](_0x578317(0x28b)), window.currentDisplayMode = _0x578317(0x30a);
                typeof window[_0x578317(0x3f0)] === _0x578317(0x76e) && (window[_0x578317(0x3f0)] = {
                    'Api_listServer': []
                });

                function _0x28fdb3() {
                    var _0x14d850 = _0x578317;
                    try {
                        const _0x4b589f = localStorage[_0x14d850(0x21e)](_0x14d850(0x334));
                        if (_0x4b589f) {
                            const _0x15e559 = JSON[_0x14d850(0x2b2)](_0x4b589f),
                                _0x363a2 = _0x15e559[_0x14d850(0x2b8)],
                                _0x58df6a = new Date()[_0x14d850(0x2c4)]();
                            if (_0x58df6a - _0x363a2 < 0x36ee80) return window[_0x14d850(0x3f0)] = _0x15e559.data, true;
                        }
                    } catch (_0x1eef50) {}
                    return false;
                }
                async function _0x3ebffc() {
                    var _0x481c74 = _0x578317;
                    try {
                        const _0x526565 = await fetch(_0x481c74(0x23c));
                        if (_0x526565.ok) {
                            const _0x249401 = await _0x526565[_0x481c74(0x80b)]();
                            if (_0x249401[_0x481c74(0x324)] && Array[_0x481c74(0x4b8)](_0x249401[_0x481c74(0x3f0)])) {
                                window[_0x481c74(0x3f0)][_0x481c74(0x591)] = _0x249401[_0x481c74(0x3f0)][_0x481c74(0x322)](_0x11fd5c => _0x11fd5c[_0x481c74(0x5c0)]);
                                try {
                                    const _0x4cf4e8 = {
                                        'timestamp': new Date()[_0x481c74(0x2c4)](),
                                        'data': window.servers
                                    };
                                    localStorage[_0x481c74(0x510)]('cachedServers', JSON[_0x481c74(0x562)](_0x4cf4e8));
                                } catch (_0x3c7473) {}
                                return true;
                            }
                        }
                    } catch (_0x2c0240) {
                        setTimeout(_0x3ebffc, 0x1388);
                    }
                    return false;
                }

                function _0x4e7f35() {
                    setInterval(() => {
                        var _0x2ed4be = _0x1c2b;
                        typeof loadUsers === _0x2ed4be(0x3d7) && loadUsers(), _0x3ebffc().then(_0x2f1aa3 => {
                            var _0x5de52a = _0x2ed4be;
                            _0x2f1aa3 && typeof createServers === _0x5de52a(0x3d7) && createServers();
                        });
                    }, 0x493e0);
                }
                async function _0xcd4e64() {
                    var _0x3b88ed = _0x578317;
                    const _0x201873 = _0x28fdb3();
                    typeof loadUsers === _0x3b88ed(0x3d7) && loadUsers();
                    const _0x59655d = await _0x3ebffc();
                    return _0x4e7f35(), _0x201873 || _0x59655d;
                }
                if (_0x26dfe0.e === _0x578317(0x74c)) $(_0x578317(0x2e7))[_0x578317(0x6bb)](localStorage[_0x578317(0x21e)]('ccg_2'));
                else {
                    if (_0x26dfe0.e === _0x578317(0x68a)) $(_0x578317(0x2e7))[_0x578317(0x6bb)](_0x26dfe0.cc), _0x26dfe0.cr != '' && $(_0x578317(0x34d))[_0x578317(0x6bb)](''), _0x458d85();
                    else(_0x26dfe0.e === 'empty' || _0x26dfe0.e === _0x578317(0x5bb)) && _0x2be2f0();
                    _0x2e052d.pL = [..._0x26dfe0[_0x578317(0x4f5)]];
                }

                function _0x458d85() {
                    var _0x4a0575 = _0x578317;
                    $(_0x4a0575(0x2e7))[_0x4a0575(0x1da)](_0x4a0575(0x2f2)), _0xb17e40();
                }

                function _0x2be2f0() {
                    var _0x3a5052 = _0x578317;
                    $(_0x3a5052(0x2e7))[_0x3a5052(0x6bb)](_0x3a5052(0x2f2)), _0xb17e40();
                }

                function _0xb17e40() {
                    var _0x486285 = _0x578317;
                    $('body')[_0x486285(0x1da)](_0x486285(0x42f)), $(_0x486285(0x4dc)).append(_0x486285(0x6cc)), window[_0x486285(0x30f)] = _0x486285(0x30a), $(_0x486285(0x521))[_0x486285(0x37b)]('wormworld')[_0x486285(0x2df)](_0x486285(0x52a));

                    function _0x104c94() {
                        var _0x2ab476 = _0x486285;
                        const _0x1a60e0 = {
                            'mx': _0x2ab476(0x63b),
                            'br': 'servers-peru',
                            'us': _0x2ab476(0x8bf),
                            'ca': 'servers-canada',
                            'de': _0x2ab476(0x8c9),
                            'fr': _0x2ab476(0x4b0),
                            'sg': _0x2ab476(0x5a2),
                            'jp': _0x2ab476(0x665),
                            'au': _0x2ab476(0x423),
                            'gb': 'servers-granbretana'
                        };
                        $('<style>')[_0x2ab476(0x335)](_0x2ab476(0x729), _0x2ab476(0x2dd)).html('\x0a          .ui-tabs-nav .ui-tab:hover, \x0a          .ui-tabs-nav .ui-tab.ui-tab-active {\x0a            background-color: white !important;\x0a          }\x0a          .ui-tabs-nav .ui-tab {\x0a            border-color: white !important;\x0a          }\x0a        ')[_0x2ab476(0x529)](_0x2ab476(0x33a)), Object[_0x2ab476(0x404)](_0x1a60e0)[_0x2ab476(0x3a6)]((_0x1201ef, _0x423c1c) => {
                            $('.' + _0x1201ef).on('click', function () {
                                var _0x28e280 = _0x1c2b;
                                $(_0x28e280(0x8a4))[_0x28e280(0x37b)](_0x28e280(0x55e)), $(this)[_0x28e280(0x792)](_0x28e280(0x5f2)).addClass(_0x28e280(0x55e)), $(_0x28e280(0x637))[_0x28e280(0x8b7)](_0x28e280(0x47c), _0x28e280(0x714) + _0x1201ef), $(_0x28e280(0x613))[_0x28e280(0x75d)](), $('.' + _0x1a60e0[_0x1201ef])[_0x28e280(0x4fc)](0x12c);
                            });
                        });
                    }

                    function _0x5382a7() {
                        var _0x593612 = _0x486285;
                        $(_0x593612(0x613)).empty();
                        const _0x3b5ac7 = {
                                'peru': 'DE',
                                'mexico': 'UAE',
                                'eeuu': _0x593612(0x4fa),
                                'canada': 'LT',
                                'germania': 'BR',
                                'francia': 'FR',
                                'singapur': 'SG',
                                'japon': 'JP',
                                'australia': 'IN',
                                'granbretana': 'UK'
                            },
                            _0x12142b = {
                                'peru': _0x2e052d.s_l + _0x593612(0x544),
                                'mexico': _0x2e052d[_0x593612(0x403)] + _0x593612(0x4af),
                                'eeuu': _0x2e052d.s_l + _0x593612(0x21a),
                                'canada': _0x2e052d.s_l + _0x593612(0x5b3),
                                'germania': _0x2e052d.s_l + _0x593612(0x820),
                                'francia': _0x2e052d[_0x593612(0x403)] + _0x593612(0x756),
                                'singapur': _0x2e052d[_0x593612(0x403)] + _0x593612(0x22d),
                                'japon': _0x2e052d[_0x593612(0x403)] + '/images/cors-proxy.phpimg=flg/jp.png',
                                'australia': _0x2e052d[_0x593612(0x403)] + _0x593612(0x536),
                                'granbretana': _0x2e052d[_0x593612(0x403)] + _0x593612(0x597)
                            },
                            _0x437b09 = {};
                        Object[_0x593612(0x404)](_0x3b5ac7).forEach(_0xe6ce56 => {
                            _0x437b09[_0xe6ce56] = [];
                        });
                        if (window.servers && window[_0x593612(0x3f0)].Api_listServer && window[_0x593612(0x3f0)][_0x593612(0x591)][_0x593612(0x56a)] > 0x0) {
                            let _0x5c88bd = window[_0x593612(0x30f)] || 'timmap';
                            window[_0x593612(0x3f0)][_0x593612(0x591)][_0x593612(0x3a6)](_0x547b00 => {
                                var _0x59aee5 = _0x593612;
                                let _0x3ca72c = null;
                                if (_0x5c88bd === _0x59aee5(0x30a) && _0x547b00.timmap) _0x3ca72c = _0x547b00[_0x59aee5(0x30a)];
                                else _0x5c88bd === _0x59aee5(0x236) && _0x547b00[_0x59aee5(0x236)] && (_0x3ca72c = _0x547b00.wormworld);
                                _0x3ca72c && _0x437b09[_0x547b00[_0x59aee5(0x857)]] && (_0x547b00[_0x59aee5(0x6f9)] = _0x3ca72c, _0x437b09[_0x547b00[_0x59aee5(0x857)]].push(_0x547b00));
                            }), Object[_0x593612(0x404)](_0x437b09)[_0x593612(0x3a6)](_0xb24bc6 => {
                                var _0x490690 = _0x593612;
                                const _0x527d4c = _0x437b09[_0xb24bc6],
                                    _0x5223bb = _0x3b5ac7[_0xb24bc6];
                                if (_0x527d4c[_0x490690(0x56a)] > 0x0) {
                                    _0x527d4c[_0x490690(0x606)]((_0x13f35e, _0x14aba1) => (_0x13f35e.displayNumber || 0x0) - (_0x14aba1[_0x490690(0x6f9)] || 0x0));
                                    for (let _0x97007c = 0x0; _0x97007c < _0x527d4c.length; _0x97007c++) {
                                        const _0x57575d = _0x527d4c[_0x97007c],
                                            _0x53972f = _0x57575d[_0x490690(0x6f9)],
                                            _0x18611f = _0x57575d.image || _0x2e052d[_0x490690(0x403)] + _0x490690(0x669),
                                            _0x5e86fc = _0x57575d[_0x490690(0x862)] || '',
                                            _0x50708e = $('<div></div>')[_0x490690(0x623)](_0x490690(0x776)).attr({
                                                'id': _0xb24bc6,
                                                'value': _0x57575d[_0x490690(0x5c0)],
                                                'data-server-name': _0x57575d[_0x490690(0x7b3)] || _0x490690(0x7be) + _0x53972f,
                                                'data-region-name': _0x5223bb,
                                                'data-region-flag': _0x12142b[_0xb24bc6],
                                                'data-server-number': _0x53972f,
                                                'data-server-image': _0x18611f
                                            }),
                                            _0x43b69b = _0x5e86fc && _0x5e86fc[_0x490690(0x356)]() !== '',
                                            _0x574007 = $(_0x490690(0x647))[_0x490690(0x623)](_0x490690(0x8be));
                                        if (_0x43b69b) {
                                            const _0xb3ec44 = _0x57575d[_0x490690(0x7b3)] || _0x490690(0x7be) + _0x53972f;
                                            _0x574007[_0x490690(0x623)](_0x490690(0x4e3)).data(_0x490690(0x3ca), _0x5e86fc).attr(_0x490690(0x732), _0xb3ec44), _0x574007.on(_0x490690(0x57b), function (_0x189d55) {
                                                var _0x51fc97 = _0x490690;
                                                _0x189d55[_0x51fc97(0x812)]();
                                                const _0x1833f4 = $(this)[_0x51fc97(0x384)]('url');
                                                _0x1833f4 && window.open(_0x1833f4, _0x51fc97(0x218));
                                            }), _0x574007[_0x490690(0x624)](function () {
                                                var _0x32e900 = _0x490690;
                                                const _0x4bb0c9 = $(this)[_0x32e900(0x384)](_0x32e900(0x2fc));
                                                $(_0x32e900(0x692)).remove(), $(_0x32e900(0x6f7))[_0x32e900(0x2df)]('Visit ' + _0x4bb0c9 + _0x32e900(0x730))[_0x32e900(0x5a1)]({
                                                    'position': 'fixed',
                                                    'background': _0x32e900(0x4ad),
                                                    'color': _0x32e900(0x8af),
                                                    'padding': _0x32e900(0x5af),
                                                    'border-radius': _0x32e900(0x6f0),
                                                    'font-size': '11px',
                                                    'white-space': 'nowrap',
                                                    'z-index': _0x32e900(0x826),
                                                    'pointer-events': _0x32e900(0x834),
                                                    'box-shadow': '0 0 5px rgba(0,0,0,0.5)'
                                                })[_0x32e900(0x529)](_0x32e900(0x4dc));
                                                const _0x22761d = $(this)[_0x32e900(0x798)](),
                                                    _0x563a68 = $(this)[_0x32e900(0x821)](),
                                                    _0x4b5582 = $(this)[_0x32e900(0x2c1)](),
                                                    _0x29708e = $(_0x32e900(0x692))[_0x32e900(0x743)]();
                                                $(_0x32e900(0x692))[_0x32e900(0x5a1)]({
                                                    'left': _0x22761d[_0x32e900(0x841)] + _0x563a68 / 0x2 - _0x29708e / 0x2,
                                                    'top': _0x22761d[_0x32e900(0x63c)] + _0x4b5582 + 0xa
                                                }).fadeIn(0xc8);
                                            }, function () {
                                                var _0x278a4a = _0x490690;
                                                $('#server-link-tooltip')[_0x278a4a(0x3df)](0xc8, function () {
                                                    var _0x26d882 = _0x278a4a;
                                                    $(this)[_0x26d882(0x66d)]();
                                                });
                                            });
                                        }
                                        _0x574007[_0x490690(0x1da)]($(_0x490690(0x80d))[_0x490690(0x8b7)](_0x490690(0x5e2), _0x18611f));
                                        const _0x397a56 = $('<div></div>')[_0x490690(0x623)](_0x490690(0x250))[_0x490690(0x1da)]($(_0x490690(0x7d8)).addClass(_0x490690(0x7c7)).text(_0x53972f + '.'), $(_0x490690(0x7d8)).addClass('server-name')[_0x490690(0x2df)](_0x57575d[_0x490690(0x7b3)] || _0x490690(0x7be) + _0x53972f)),
                                            _0x183038 = $(_0x490690(0x647))[_0x490690(0x623)](_0x490690(0x1ef)).text(_0x5223bb + ' ' + _0x53972f),
                                            _0x409d47 = $(_0x490690(0x647)).addClass(_0x490690(0x83c))[_0x490690(0x1da)]($(_0x490690(0x7d8))[_0x490690(0x623)](_0x490690(0x784))),
                                            _0x2982ed = $(_0x490690(0x647))[_0x490690(0x623)](_0x490690(0x44f));
                                        _0x50708e[_0x490690(0x1da)](_0x574007, _0x397a56, _0x183038, _0x409d47, _0x2982ed), $(_0x490690(0x6b8) + _0xb24bc6)[_0x490690(0x1da)](_0x50708e), _0x50708e[_0x490690(0x57b)](function () {
                                            var _0xbc653e = _0x490690;
                                            const _0x1fa9d5 = $(this)[_0xbc653e(0x8b7)]('data-region-name'),
                                                _0x42c6f9 = $(this)[_0xbc653e(0x8b7)](_0xbc653e(0x2b0)),
                                                _0x42508c = $(this).attr(_0xbc653e(0x66a)),
                                                _0x400258 = $(this)[_0xbc653e(0x8b7)](_0xbc653e(0x584)),
                                                _0xa5ec3d = $(this).attr(_0xbc653e(0x70d)),
                                                _0x144c5a = _0x1fa9d5 + ' ' + _0x42c6f9;
                                            window.realServerName = _0x144c5a, window[_0xbc653e(0x41e)] = {
                                                'regionName': _0x1fa9d5,
                                                'serverNumber': _0x42c6f9,
                                                'regionFlag': _0x400258,
                                                'serverImage': _0xa5ec3d,
                                                'displayName': _0x144c5a
                                            }, $(_0xbc653e(0x4f7)).val(_0x42508c), $('#port_name_s').val(_0x144c5a), $(_0xbc653e(0x333))[_0xbc653e(0x1ce)]($(_0xbc653e(0x4f7))[_0xbc653e(0x1ce)]()), $(_0xbc653e(0x65f))[_0xbc653e(0x1ce)]($(_0xbc653e(0x6a1))[_0xbc653e(0x1ce)]());
                                            try {
                                                const _0x4a2919 = JSON[_0xbc653e(0x2b2)](localStorage.getItem(_0xbc653e(0x4e9)) || '{}');
                                                _0x4a2919[_0xbc653e(0x43f)] = _0x144c5a, localStorage[_0xbc653e(0x510)](_0xbc653e(0x4e9), JSON[_0xbc653e(0x562)](_0x4a2919));
                                            } catch (_0x3523ef) {
                                                console.error(_0xbc653e(0x892), _0x3523ef);
                                            }
                                            typeof ctx !== _0xbc653e(0x76e) && (ctx[_0xbc653e(0x26c)] && ctx.onclickServer && (ctx[_0xbc653e(0x26c)].texture = ctx[_0xbc653e(0x37c)])), typeof retundFlagError === 'function' && retundFlagError(), window[_0xbc653e(0x37e)] = _0x42508c, $(_0xbc653e(0x8b8))[_0xbc653e(0x57b)](), $('#adbl-continue')[_0xbc653e(0x57b)](), setTimeout(_0x28689d, 0x1f4), setTimeout(_0x28689d, 0x7d0);
                                        });
                                    }
                                } else $('.servers-' + _0xb24bc6)[_0x490690(0x1da)](_0x490690(0x817));
                            });
                        } else $(_0x593612(0x613))[_0x593612(0x6bb)](_0x593612(0x610));
                        _0x4c9ec5();
                    }

                    function _0x494c67(_0x4d763d) {
                        var _0x3e84a6 = _0x486285;
                        if (_0x4d763d >= 0xf4240) return (_0x4d763d / 0xf4240)[_0x3e84a6(0x765)](0x2) + 'M';
                        else return _0x4d763d >= 0x3e8 ? (_0x4d763d / 0x3e8)[_0x3e84a6(0x765)](0x1) + 'K' : _0x4d763d[_0x3e84a6(0x765)](0x0);
                    }

                    function _0x28689d() {
                        var _0x27ebc9 = _0x486285;
                        if (!window.realServerName) return;
                        document.querySelectorAll(_0x27ebc9(0x410))[_0x27ebc9(0x3a6)](_0x4ee316 => {
                            var _0x4eff5f = _0x27ebc9;
                            const _0xdc9e6b = _0x4ee316[_0x4eff5f(0x866)] || '';
                            (_0xdc9e6b[_0x4eff5f(0x7b8)](_0x4eff5f(0x3de)) || _0xdc9e6b[_0x4eff5f(0x7b8)](_0x4eff5f(0x4b1)) || _0xdc9e6b[_0x4eff5f(0x7b8)]('/wormy') || _0xdc9e6b.match(/[a-z]+-\d+/i)) && (_0x4ee316.textContent = window.realServerName, _0x4ee316.text !== undefined && (_0x4ee316.text = window.realServerName));
                        }), window[_0x27ebc9(0x7e7)] && window.mapText[_0x27ebc9(0x2df)] !== undefined && (window[_0x27ebc9(0x7e7)].text = window[_0x27ebc9(0x43f)]);
                    }

                    function _0x5903b7() {
                        var _0x59cb39 = _0x486285;
                        try {
                            const _0x469a63 = window[_0x59cb39(0x58e)] || window[_0x59cb39(0x58e)];
                            if (_0x469a63 && typeof _0x469a63.Bq === _0x59cb39(0x3d7)) {
                                const _0x315a9a = _0x469a63.Bq;
                                _0x469a63.Bq = function (_0x23ef59, _0x37a396) {
                                    const _0x1b5794 = _0x315a9a.apply(this, arguments);
                                    return setTimeout(function () {
                                        var _0x4dafa1 = _0x1c2b;
                                        try {
                                            const _0x1a1dee = window[_0x4dafa1(0x43f)] || (function () {
                                                var _0x386757 = _0x4dafa1;
                                                try {
                                                    const _0x268342 = JSON[_0x386757(0x2b2)](localStorage[_0x386757(0x21e)](_0x386757(0x4e9)) || '{}');
                                                    return _0x268342.realServerName || '';
                                                } catch (_0x40cc2b) {
                                                    return '';
                                                }
                                            }());
                                            window[_0x4dafa1(0x7e7)] && window[_0x4dafa1(0x7e7)].text && _0x1a1dee && (window.mapText[_0x4dafa1(0x2df)] = _0x1a1dee);
                                        } catch (_0x5ec4b6) {
                                            console.error('Ø®Ø·Ø£ ÙÙŠ ØªØ­Ø¯ÙŠØ« Ø¹Ø±Ø¶ Ø§Ø³Ù… Ø§Ù„Ø³ÙŠØ±ÙØ±:', _0x5ec4b6);
                                        }
                                    }, 0x64), _0x1b5794;
                                }, console[_0x59cb39(0x308)](_0x59cb39(0x4bb));
                            }
                        } catch (_0x44d0fd) {
                            console[_0x59cb39(0x89c)](_0x59cb39(0x21c), _0x44d0fd);
                        }
                    }
                    window[_0x486285(0x6ea)] = function () {
                        var _0x551e9f = _0x486285;
                        fetch(_0x551e9f(0x432) + Date[_0x551e9f(0x4f0)]())[_0x551e9f(0x378)](_0x355e28 => _0x355e28[_0x551e9f(0x80b)]())[_0x551e9f(0x378)](_0x444003 => {
                            var _0x5e7c7f = _0x551e9f;
                            _0x444003 && _0x444003[_0x5e7c7f(0x324)] && Array[_0x5e7c7f(0x4b8)](_0x444003[_0x5e7c7f(0x384)]) && $(_0x5e7c7f(0x4bc))[_0x5e7c7f(0x567)](function () {
                                var _0x1d06f8 = _0x5e7c7f;
                                const _0x5a4abb = $(this),
                                    _0x74c37a = _0x5a4abb[_0x1d06f8(0x8b7)](_0x1d06f8(0x66a))[_0x1d06f8(0x356)](),
                                    _0x58a6a7 = _0x444003[_0x1d06f8(0x384)][_0x1d06f8(0x626)](_0x26002a => _0x26002a.serverUrl === _0x74c37a);
                                _0x5a4abb.find('.green-dot')[_0x1d06f8(0x5a1)](_0x1d06f8(0x63d), _0x1d06f8(0x834));
                                if (_0x58a6a7 && _0x58a6a7[_0x1d06f8(0x41f)].length > 0x0) {
                                    _0x5a4abb[_0x1d06f8(0x384)](_0x1d06f8(0x41f), JSON[_0x1d06f8(0x562)](_0x58a6a7[_0x1d06f8(0x41f)]));
                                    const _0x30da87 = _0x58a6a7[_0x1d06f8(0x41f)][0x0],
                                        _0x4872d1 = _0x494c67(_0x30da87.score),
                                        _0x3d970c = _0x30da87.score >= 0xf4240;
                                    _0x5a4abb[_0x1d06f8(0x626)](_0x1d06f8(0x806)).html('<span class=\"score-display ' + (_0x3d970c ? 'million' : _0x1d06f8(0x81f)) + '\">' + _0x4872d1 + _0x1d06f8(0x6a7));
                                    const _0x19aa21 = _0x58a6a7[_0x1d06f8(0x41f)].filter(_0x341436 => _0x341436.score >= 0xf4240)[_0x1d06f8(0x56a)];
                                    _0x19aa21 >= 0x4 && _0x5a4abb.find(_0x1d06f8(0x6ed)).css(_0x1d06f8(0x63d), _0x1d06f8(0x4e8));
                                } else _0x5a4abb.find(_0x1d06f8(0x806))[_0x1d06f8(0x6bb)]('-');
                            });
                        })[_0x551e9f(0x48b)](_0x4ff9ca => console[_0x551e9f(0x89c)](_0x551e9f(0x468), _0x4ff9ca));
                    };

                    function _0x4146af() {
                        var _0x456a73 = _0x486285;
                        $(document).on(_0x456a73(0x48c), _0x456a73(0x806), function (_0x43357a) {
                            var _0x49c1f8 = _0x456a73;
                            $(_0x49c1f8(0x40a))[_0x49c1f8(0x66d)]();
                            const _0x2e2e2f = $(this)[_0x49c1f8(0x792)]('.selectSala'),
                                _0x2106cc = _0x2e2e2f[_0x49c1f8(0x384)](_0x49c1f8(0x41f));
                            if (!_0x2106cc) return;
                            let _0x19643a = [];
                            try {
                                _0x19643a = typeof _0x2106cc === 'string' ? JSON.parse(_0x2106cc) : _0x2106cc;
                            } catch (_0x5e0598) {
                                return;
                            }
                            if (!_0x19643a || !_0x19643a[_0x49c1f8(0x56a)]) return;
                            let _0x6170a = _0x49c1f8(0x75e);
                            const _0x9ed200 = Math.min(_0x19643a.length, 0xa);
                            for (let _0x22c014 = 0x0; _0x22c014 < _0x9ed200; _0x22c014++) {
                                const _0x25c49a = _0x19643a[_0x22c014];
                                _0x6170a += _0x49c1f8(0x847) + (_0x22c014 + 0x1) + _0x49c1f8(0x72a) + (_0x25c49a.name || _0x49c1f8(0x346) + _0x25c49a.id) + _0x49c1f8(0x405) + _0x494c67(_0x25c49a[_0x49c1f8(0x64c)]) + _0x49c1f8(0x3a2);
                            }
                            _0x6170a += _0x49c1f8(0x755);
                            const _0x277f88 = $(_0x49c1f8(0x625))[_0x49c1f8(0x6bb)](_0x6170a)[_0x49c1f8(0x5a1)]({
                                'top': _0x43357a[_0x49c1f8(0x6ca)] + 0xa,
                                'left': _0x43357a.pageX + 0xa
                            });
                            $(_0x49c1f8(0x4dc))[_0x49c1f8(0x1da)](_0x277f88), $(this).data(_0x49c1f8(0x375), _0x277f88);
                        }), $(document).on('mouseleave', _0x456a73(0x806), function () {
                            var _0x400f36 = _0x456a73;
                            const _0x1e1fab = $(this).data(_0x400f36(0x375));
                            _0x1e1fab && setTimeout(function () {
                                var _0xf577cb = _0x400f36;
                                _0x1e1fab[_0xf577cb(0x66d)]();
                            }, 0x64);
                        }), $(document).on(_0x456a73(0x6f2), _0x456a73(0x806), function (_0x3f96f1) {
                            var _0x5157c7 = _0x456a73;
                            const _0x226a3a = $(this)[_0x5157c7(0x384)]('tooltip');
                            _0x226a3a && _0x226a3a[_0x5157c7(0x5a1)]({
                                'top': _0x3f96f1[_0x5157c7(0x6ca)] + 0xa,
                                'left': _0x3f96f1.pageX + 0xa
                            });
                        });
                    }
                    $(_0x486285(0x521)).on({
                        'mouseenter': function (_0x230c45) {
                            var _0x3c9472 = _0x486285,
                                _0x4a057d = $('#custom-tooltip'),
                                _0x26e712 = $(this)[_0x3c9472(0x798)](),
                                _0x3820ff = $(this)[_0x3c9472(0x743)](),
                                _0x33f3ce = _0x4a057d[_0x3c9472(0x743)]();
                            _0x4a057d[_0x3c9472(0x5a1)]({
                                'left': _0x26e712[_0x3c9472(0x841)] + _0x3820ff / 0x2 - _0x33f3ce / 0x2,
                                'top': _0x26e712[_0x3c9472(0x63c)] + 0x1e
                            }).fadeIn(0xc8);
                        },
                        'mouseleave': function () {
                            var _0x1d492d = _0x486285;
                            $(_0x1d492d(0x5db))[_0x1d492d(0x3df)](0xc8);
                        }
                    }), $('#sort-toggle')[_0x486285(0x57b)](function () {
                        var _0x43f0d0 = _0x486285;
                        window.currentDisplayMode === _0x43f0d0(0x30a) ? (window[_0x43f0d0(0x30f)] = 'wormworld', $(this)[_0x43f0d0(0x623)](_0x43f0d0(0x236))[_0x43f0d0(0x2df)](_0x43f0d0(0x2ae)), $(_0x43f0d0(0x7ed))[_0x43f0d0(0x5a1)](_0x43f0d0(0x4e5), _0x43f0d0(0x60e))) : (window.currentDisplayMode = 'timmap', $(this).removeClass(_0x43f0d0(0x236))[_0x43f0d0(0x2df)](_0x43f0d0(0x52a)), $(_0x43f0d0(0x7ed))[_0x43f0d0(0x5a1)](_0x43f0d0(0x4e5), _0x43f0d0(0x282))), _0x5382a7(), setTimeout(function () {
                            var _0x1d31ab = _0x43f0d0;
                            window[_0x1d31ab(0x30f)] === _0x1d31ab(0x236) ? $(_0x1d31ab(0x7ed))[_0x1d31ab(0x5a1)](_0x1d31ab(0x4e5), _0x1d31ab(0x60e)) : $('.server-number')[_0x1d31ab(0x5a1)](_0x1d31ab(0x4e5), _0x1d31ab(0x282));
                        }, 0x64);
                    });

                    function _0x593b37(_0xc494d8) {
                        var _0x2be470 = _0x486285;
                        if (!window[_0x2be470(0x3f0)] || !window[_0x2be470(0x3f0)][_0x2be470(0x591)] || window[_0x2be470(0x3f0)][_0x2be470(0x591)][_0x2be470(0x56a)] === 0x0) return;
                        $('.selectSala')[_0x2be470(0x75d)](), Object.keys(regionNames)[_0x2be470(0x3a6)](_0x2c40b9 => {
                            var _0x3ddec6 = _0x2be470;
                            const _0x144e0f = window[_0x3ddec6(0x3f0)][_0x3ddec6(0x591)][_0x3ddec6(0x322)](_0x445e22 => _0x445e22.region === _0x2c40b9);
                            if (_0x144e0f[_0x3ddec6(0x56a)] > 0x0) {
                                const _0x1fb54a = _0x144e0f[_0x3ddec6(0x322)](_0x814e46 => {
                                    var _0x68676b = _0x3ddec6;
                                    return _0xc494d8 === _0x68676b(0x30a) ? _0x814e46[_0x68676b(0x30a)] : _0x814e46[_0x68676b(0x236)];
                                });
                                _0x1fb54a[_0x3ddec6(0x606)]((_0x36e033, _0x4d3d2c) => {
                                    var _0x21f615 = _0x3ddec6;
                                    const _0x39fe2d = _0xc494d8 === _0x21f615(0x30a) ? _0x36e033.timmap || 0x0 : _0x36e033[_0x21f615(0x236)] || 0x0,
                                        _0x497a43 = _0xc494d8 === _0x21f615(0x30a) ? _0x4d3d2c[_0x21f615(0x30a)] || 0x0 : _0x4d3d2c[_0x21f615(0x236)] || 0x0;
                                    return _0x39fe2d - _0x497a43;
                                }), _0x1fb54a[_0x3ddec6(0x3a6)](_0x2d428d => {
                                    var _0x5601a3 = _0x3ddec6;
                                    const _0x3c0ae8 = _0xc494d8 === 'timmap' ? _0x2d428d[_0x5601a3(0x30a)] : _0x2d428d.wormworld,
                                        _0x13c167 = _0x5601a3(0x805) + _0x2d428d[_0x5601a3(0x5c0)] + '\"]',
                                        _0xcbdf16 = $(_0x13c167);
                                    _0xcbdf16[_0x5601a3(0x56a)] && (_0xcbdf16.find(_0x5601a3(0x7ed))[_0x5601a3(0x2df)](_0x3c0ae8 + '.'), _0xcbdf16[_0x5601a3(0x626)](_0x5601a3(0x654))[_0x5601a3(0x2df)](_0xcbdf16.attr(_0x5601a3(0x5d2)) + ' ' + _0x3c0ae8), _0xcbdf16[_0x5601a3(0x8b7)]('data-server-number', _0x3c0ae8), $('.servers-' + _0x2c40b9).is(_0x5601a3(0x6b5)) && _0xcbdf16.show());
                                });
                            }
                        });
                    }

                    function _0x174579() {
                        var _0x42e989 = _0x486285;
                        window.currentDisplayMode === _0x42e989(0x236) ? $(_0x42e989(0x7ed)).css(_0x42e989(0x4e5), _0x42e989(0x60e)) : $(_0x42e989(0x7ed)).css(_0x42e989(0x4e5), _0x42e989(0x282));
                    }
                    $(_0x486285(0x5f2)).on(_0x486285(0x57b), _0x104c94), $(_0x486285(0x237)).click(function () {
                        var _0x5d315a = _0x486285;
                        let _0x4e7ae0 = $(this)[_0x5d315a(0x8b7)](_0x5d315a(0x66a));
                        typeof theoKzObjects !== _0x5d315a(0x76e) && (theoKzObjects[_0x5d315a(0x710)] = _0x4e7ae0), typeof ctx !== _0x5d315a(0x76e) && ctx[_0x5d315a(0x26c)] && (ctx[_0x5d315a(0x26c)][_0x5d315a(0x69c)] = ctx[_0x5d315a(0x37c)]), typeof retundFlagError === _0x5d315a(0x3d7) && retundFlagError();
                    }), _0x104c94(), _0x4146af(), _0x5903b7(), _0xcd4e64()[_0x486285(0x378)](_0x4ef1b9 => {
                        _0x4ef1b9 && (_0x5382a7(), setTimeout(function () {
                            let _0x57e5b6 = 0x0,
                                _0x4746ca = setInterval(function () {
                                    var _0x462bec = _0x1c2b;
                                    if (_0x57e5b6 >= 0x6) {
                                        clearInterval(_0x4746ca), window[_0x462bec(0x30f)] = 'timmap', $('#sort-toggle')[_0x462bec(0x37b)](_0x462bec(0x236))[_0x462bec(0x2df)]('Timmap Servers'), $(_0x462bec(0x7ed))[_0x462bec(0x5a1)](_0x462bec(0x4e5), _0x462bec(0x282)), _0x5382a7();
                                        return;
                                    }
                                    _0x57e5b6 % 0x2 === 0x0 ? (window[_0x462bec(0x30f)] = 'wormworld', $('#sort-toggle').addClass(_0x462bec(0x236))[_0x462bec(0x2df)](_0x462bec(0x2ae)), $(_0x462bec(0x7ed))[_0x462bec(0x5a1)](_0x462bec(0x4e5), _0x462bec(0x60e))) : (window[_0x462bec(0x30f)] = _0x462bec(0x30a), $(_0x462bec(0x521))[_0x462bec(0x37b)](_0x462bec(0x236))[_0x462bec(0x2df)](_0x462bec(0x52a)), $('.server-number').css('color', _0x462bec(0x282))), (_0x57e5b6 === 0x0 || _0x57e5b6 === 0x1) && _0x5382a7(), _0x57e5b6++;
                                }, 0x2bc);
                        }, 0x5dc));
                    });
                }
                _0x246330(_0x146109), window.PerformanceMonitor = {
                    'lastTime': performance.now(),
                    'frameCount': 0x0,
                    'fps': 0x0,
                    'cpuUsage': 0x0,
                    'fpsDisplay': null,
                    'cpuDisplay': null,
                    'isFpsVisible': false,
                    'isCpuVisible': false,
                    'cpuSamples': [],
                    'cpuSampleSize': 0xa,
                    'lastCpuTime': 0x0,
                    'isInitialized': false,
                    '_cpuMonitoringInterval': null,
                    '_animFrameId': null,
                    'init'() {
                        var _0x3731fe = _0x578317;
                        if (this[_0x3731fe(0x4c6)]) return;
                        this[_0x3731fe(0x4c6)] = true;
                        const _0x28055d = localStorage[_0x3731fe(0x21e)](_0x3731fe(0x392));
                        _0x28055d !== null && (this[_0x3731fe(0x480)] = _0x28055d === _0x3731fe(0x40f), this[_0x3731fe(0x60d)] = _0x28055d === _0x3731fe(0x40f)), this.createDisplayElements(), (this[_0x3731fe(0x480)] || this[_0x3731fe(0x60d)]) && this[_0x3731fe(0x56e)](), this[_0x3731fe(0x71e)](), this[_0x3731fe(0x667)](), this[_0x3731fe(0x3c5)]();
                    },
                    'startAllMonitoring'() {
                        var _0x9fc45f = _0x578317;
                        this[_0x9fc45f(0x480)] && !this[_0x9fc45f(0x258)] && this[_0x9fc45f(0x3ed)](), this.isCpuVisible && !this[_0x9fc45f(0x639)] && this.startCpuMonitoring();
                    },
                    'stopAllMonitoring'() {
                        var _0x56c8f = _0x578317;
                        this._cpuMonitoringInterval && (console[_0x56c8f(0x308)]('Stopping CPU monitoring completely'), clearInterval(this._cpuMonitoringInterval), this[_0x56c8f(0x639)] = null), this[_0x56c8f(0x258)] && (console.log('Stopping FPS monitoring completely'), cancelAnimationFrame(this._animFrameId), this._animFrameId = null);
                    },
                    'setupToggleButton'() {
                        var _0x333da6 = _0x578317;
                        const _0x54e38 = document.getElementById(_0x333da6(0x1e1));
                        _0x54e38 ? (_0x54e38[_0x333da6(0x65c)] = this.isFpsVisible || this[_0x333da6(0x60d)], _0x54e38.addEventListener(_0x333da6(0x55b), () => {
                            var _0x511f73 = _0x333da6;
                            const _0x27eac5 = _0x54e38[_0x511f73(0x65c)];
                            this.toggle(_0x27eac5);
                        })) : setTimeout(() => {
                            var _0x296d06 = _0x333da6;
                            const _0x30dc3d = document[_0x296d06(0x4e7)](_0x296d06(0x1e1));
                            _0x30dc3d && (_0x30dc3d.checked = this.isFpsVisible || this[_0x296d06(0x60d)], _0x30dc3d.addEventListener(_0x296d06(0x55b), () => {
                                var _0x2a0142 = _0x296d06;
                                this[_0x2a0142(0x846)](_0x30dc3d[_0x2a0142(0x65c)]);
                            }));
                        }, 0x3e8);
                    },
                    'createDisplayElements'() {
                        var _0x19ba08 = _0x578317;
                        const _0x3727d5 = document[_0x19ba08(0x4e7)](_0x19ba08(0x886));
                        if (!_0x3727d5) {
                            const _0x5dc386 = document[_0x19ba08(0x43a)](_0x19ba08(0x45d));
                            _0x5dc386.id = _0x19ba08(0x886), _0x5dc386.textContent = '\x0a                .performance-monitor-container {\x0a                    position: fixed;\x0a                    right: 5px;\x0a                    bottom: 5px;\x0a                    display: flex;\x0a                    gap: 5px;\x0a                    z-index: 9999;\x0a                    font-family: Arial, sans-serif;\x0a                    pointer-events: none;\x0a                    user-select: none;\x0a                }\x0a                .monitor-element {\x0a                    background-color: rgba(0, 0, 0, 0.5);\x0a                    font-size: 12px;\x0a                    height: 20px;\x0a                    line-height: 20px;\x0a                    border-radius: 4px;\x0a                    font-weight: bold;\x0a                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\x0a                    padding: 0 8px;\x0a                    white-space: nowrap;\x0a                    box-sizing: border-box;\x0a                    display: none;\x0a                }\x0a            ', document[_0x19ba08(0x33a)][_0x19ba08(0x6c1)](_0x5dc386);
                        }
                        let _0xa1deb3 = document[_0x19ba08(0x603)]('.performance-monitor-container');
                        !_0xa1deb3 && (_0xa1deb3 = document[_0x19ba08(0x43a)](_0x19ba08(0x785)), _0xa1deb3.className = 'performance-monitor-container', document[_0x19ba08(0x4dc)][_0x19ba08(0x6c1)](_0xa1deb3)), !this.fpsDisplay && (this[_0x19ba08(0x3c7)] = document[_0x19ba08(0x43a)]('div'), this[_0x19ba08(0x3c7)][_0x19ba08(0x84c)] = 'monitor-element', _0xa1deb3.appendChild(this[_0x19ba08(0x3c7)])), !this[_0x19ba08(0x4e6)] && (this[_0x19ba08(0x4e6)] = document.createElement(_0x19ba08(0x785)), this[_0x19ba08(0x4e6)][_0x19ba08(0x84c)] = 'monitor-element', _0xa1deb3[_0x19ba08(0x6c1)](this[_0x19ba08(0x4e6)]));
                    },
                    'startCpuMonitoring'() {
                        var _0x5cada6 = _0x578317;
                        if (!this.isCpuVisible) return;
                        this[_0x5cada6(0x639)] && clearInterval(this[_0x5cada6(0x639)]), this[_0x5cada6(0x79e)] = performance.now(), this.cpuSamples = [], this._cpuMonitoringInterval = setInterval(() => {
                            var _0x5788b2 = _0x5cada6;
                            if (!this.isCpuVisible) {
                                clearInterval(this[_0x5788b2(0x639)]), this._cpuMonitoringInterval = null, console[_0x5788b2(0x308)](_0x5788b2(0x47f));
                                return;
                            }
                            this[_0x5788b2(0x6f3)]();
                        }, 0x1f4);
                    },
                    'measureCpuUsage'() {
                        var _0x364779 = _0x578317;
                        const _0x30d647 = performance[_0x364779(0x4f0)](),
                            _0x407176 = _0x30d647 - this.lastCpuTime,
                            _0x11c36a = 0x3c,
                            _0x2e3197 = Math[_0x364779(0x78e)](0x0, _0x11c36a - this[_0x364779(0x20b)]) / _0x11c36a;
                        let _0x197197 = 0x0;
                        if (window.performance && window[_0x364779(0x8c8)][_0x364779(0x2e9)]) {
                            const _0x47c5a1 = window[_0x364779(0x8c8)][_0x364779(0x2e9)];
                            _0x197197 = _0x47c5a1.domComplete - _0x47c5a1[_0x364779(0x77c)];
                        }
                        const _0x3da699 = Math[_0x364779(0x396)](0x1, window[_0x364779(0x8d1)] ? 0.7 : 0.3),
                            _0x6e23ce = Math[_0x364779(0x396)](0x64, Math.round((_0x2e3197 * 0x46 + _0x197197 / 0x3e8 * 0x1e) * _0x3da699));
                        this[_0x364779(0x7ee)][_0x364779(0x6a2)](_0x6e23ce), this.cpuSamples.length > this[_0x364779(0x6dc)] && this[_0x364779(0x7ee)].shift(), this.cpuUsage = Math[_0x364779(0x273)](this[_0x364779(0x7ee)][_0x364779(0x724)]((_0xd45f3, _0x4b5e0b) => _0xd45f3 + _0x4b5e0b, 0x0) / this[_0x364779(0x7ee)][_0x364779(0x56a)]), this[_0x364779(0x79e)] = _0x30d647, this[_0x364779(0x667)]();
                    },
                    'startMonitoring'() {
                        var _0x600668 = _0x578317;
                        if (!this.isFpsVisible) return;
                        this._animFrameId && cancelAnimationFrame(this[_0x600668(0x258)]);
                        const _0xd045ed = () => {
                            var _0x15f090 = _0x600668;
                            if (!this[_0x15f090(0x480)]) {
                                cancelAnimationFrame(this[_0x15f090(0x258)]), this[_0x15f090(0x258)] = null;
                                return;
                            }
                            const _0x17573c = performance[_0x15f090(0x4f0)](),
                                _0x395b8b = _0x17573c - this[_0x15f090(0x618)];
                            this[_0x15f090(0x7f1)]++, _0x395b8b >= 0x3e8 && (this[_0x15f090(0x20b)] = Math[_0x15f090(0x273)](this[_0x15f090(0x7f1)] * 0x3e8 / _0x395b8b), this.frameCount = 0x0, this[_0x15f090(0x618)] = _0x17573c, this[_0x15f090(0x667)]()), this._animFrameId = requestAnimationFrame(_0xd045ed);
                        };
                        this[_0x600668(0x258)] = requestAnimationFrame(_0xd045ed);
                    },
                    'updateDisplays'() {
                        var _0x327e55 = _0x578317;
                        if (!this[_0x327e55(0x3c7)] || !this[_0x327e55(0x4e6)]) return;
                        if (this.isFpsVisible) {
                            this.fpsDisplay[_0x327e55(0x866)] = _0x327e55(0x531) + this.fps;
                            if (this[_0x327e55(0x20b)] >= 0x3a) this[_0x327e55(0x3c7)][_0x327e55(0x45d)][_0x327e55(0x4e5)] = _0x327e55(0x8af);
                            else this.fps >= 0x1e ? this[_0x327e55(0x3c7)][_0x327e55(0x45d)].color = _0x327e55(0x1fc) : this[_0x327e55(0x3c7)][_0x327e55(0x45d)][_0x327e55(0x4e5)] = _0x327e55(0x4d7);
                            this[_0x327e55(0x3c7)][_0x327e55(0x45d)][_0x327e55(0x63d)] = _0x327e55(0x4e8);
                        } else this[_0x327e55(0x3c7)][_0x327e55(0x45d)][_0x327e55(0x63d)] = _0x327e55(0x834);
                        if (this.isCpuVisible) {
                            this[_0x327e55(0x4e6)].textContent = _0x327e55(0x50b) + this[_0x327e55(0x2d3)] + '%';
                            if (this.cpuUsage <= 0x32) this.cpuDisplay[_0x327e55(0x45d)][_0x327e55(0x4e5)] = _0x327e55(0x8af);
                            else this.cpuUsage <= 0x50 ? this.cpuDisplay[_0x327e55(0x45d)][_0x327e55(0x4e5)] = _0x327e55(0x1fc) : this[_0x327e55(0x4e6)][_0x327e55(0x45d)][_0x327e55(0x4e5)] = _0x327e55(0x4d7);
                            this[_0x327e55(0x4e6)].style[_0x327e55(0x63d)] = _0x327e55(0x4e8);
                        } else this.cpuDisplay[_0x327e55(0x45d)][_0x327e55(0x63d)] = _0x327e55(0x834);
                    },
                    'setupKeyboardControls'() {
                        var _0x2216b5 = _0x578317;
                        if (this[_0x2216b5(0x23a)]) return;
                        this[_0x2216b5(0x23a)] = true, document.addEventListener(_0x2216b5(0x6e9), _0x58174e => {
                            var _0x221059 = _0x2216b5;
                            if (_0x58174e[_0x221059(0x614)] === 'F2' || _0x58174e[_0x221059(0x27d)] === 'F2' || _0x58174e[_0x221059(0x5f4)] === 0x71) return _0x58174e[_0x221059(0x73e)](), this[_0x221059(0x60d)] = !this[_0x221059(0x60d)], this[_0x221059(0x60d)] && !this[_0x221059(0x639)] && this.startCpuMonitoring(), this[_0x221059(0x5e5)](), this[_0x221059(0x667)](), this[_0x221059(0x3fb)](), false;
                            else {
                                if (_0x58174e.key === 'F4' || _0x58174e[_0x221059(0x27d)] === 'F4' || _0x58174e[_0x221059(0x5f4)] === 0x73) return _0x58174e[_0x221059(0x73e)](), this[_0x221059(0x480)] = !this[_0x221059(0x480)], this[_0x221059(0x480)] && !this[_0x221059(0x258)] && this[_0x221059(0x3ed)](), this.saveSettings(), this.updateDisplays(), this.updateToggleButton(), false;
                                else {
                                    if (_0x58174e[_0x221059(0x731)] && (_0x58174e.key === '2' || _0x58174e.keyCode === 0x32)) return _0x58174e.preventDefault(), this[_0x221059(0x60d)] = !this[_0x221059(0x60d)], this[_0x221059(0x60d)] && !this[_0x221059(0x639)] && this[_0x221059(0x8c5)](), this[_0x221059(0x5e5)](), this[_0x221059(0x667)](), this[_0x221059(0x3fb)](), false;
                                    else {
                                        if (_0x58174e[_0x221059(0x731)] && (_0x58174e[_0x221059(0x614)] === '4' || _0x58174e.keyCode === 0x34)) return _0x58174e[_0x221059(0x73e)](), this[_0x221059(0x480)] = !this.isFpsVisible, this[_0x221059(0x480)] && !this[_0x221059(0x258)] && this[_0x221059(0x3ed)](), this.saveSettings(), this[_0x221059(0x667)](), this.updateToggleButton(), false;
                                    }
                                }
                            }
                        }, true);
                    },
                    'saveSettings'() {
                        var _0x905708 = _0x578317;
                        const _0x4205fe = this.isFpsVisible || this[_0x905708(0x60d)];
                        localStorage[_0x905708(0x510)](_0x905708(0x392), _0x4205fe);
                    },
                    'updateToggleButton'() {
                        var _0xb1b79 = _0x578317;
                        const _0x320939 = document.getElementById(_0xb1b79(0x1e1));
                        _0x320939 && (_0x320939[_0xb1b79(0x65c)] = this[_0xb1b79(0x480)] || this.isCpuVisible);
                    },
                    'toggle'(_0x517c73) {
                        var _0x5027b2 = _0x578317;
                        typeof _0x517c73 !== _0x5027b2(0x1d0) && (_0x517c73 = !this.isFpsVisible && !this[_0x5027b2(0x60d)]);
                        const _0x32f0a1 = this.isFpsVisible,
                            _0xfcaae5 = this[_0x5027b2(0x60d)];
                        this[_0x5027b2(0x480)] = _0x517c73, this[_0x5027b2(0x60d)] = _0x517c73, this[_0x5027b2(0x5e5)](), _0x517c73 ? (!_0x32f0a1 && this.isFpsVisible && this.startMonitoring(), !_0xfcaae5 && this[_0x5027b2(0x60d)] && this[_0x5027b2(0x8c5)]()) : this[_0x5027b2(0x210)](), this[_0x5027b2(0x667)]();
                    },
                    'enable'(_0x36f7ad) {
                        var _0x49ed24 = _0x578317;
                        _0x36f7ad ? !this[_0x49ed24(0x4c6)] ? this[_0x49ed24(0x3ec)]() : this.toggle(true) : this[_0x49ed24(0x846)](false);
                    }
                }, $('.profile-user')[_0x578317(0x1da)]('<div class=\"idwormate\">' + '<input type=\"text\" value=\"' + _0x146109[_0x578317(0x875)] + _0x578317(0x51a) + _0x578317(0x78b) + _0x146109[_0x578317(0x875)] + _0x578317(0x719) + _0x146109[_0x578317(0x875)] + _0x578317(0x822) + _0x578317(0x5b2) + '<button id=\"resetScript\" style=\"width: 120px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #2196F3; color: white; border: none; cursor: pointer; margin-left: 10px;\" onclick=\"resetScript();\">Version ðŸ”</button>' + _0x578317(0x3c9));
                var _0x3290d2 = '';
                _0x26dfe0.e === _0x578317(0x68a) && (_0x3290d2 = _0x578317(0x402) + _0x26dfe0[_0x578317(0x4b6)][0x3] + _0x578317(0x39f), _0x2e052d[_0x578317(0x6ee)] = _0x26dfe0.sw == 0x1);
                _0x1148fb(_0x26dfe0[_0x578317(0x3a1)]), $(_0x578317(0x3f4)).html(_0x578317(0x241) + _0x26dfe0[_0x578317(0x4b6)][0x4] + '\" id=\"btnFullScreen\"/><input type=\"button\" value=\"' + _0x26dfe0[_0x578317(0x4b6)][0x5] + '\" id=\"btn_in_t\" style=\"display:none;\"/>' + _0x3290d2 + _0x578317(0x3c9)), document[_0x578317(0x4e7)]('btnFullScreen')[_0x578317(0x49c)](_0x578317(0x57b), function () {
                    var _0x40f6a1 = _0x578317;
                    let _0x2e0f07 = document[_0x40f6a1(0x550)][_0x40f6a1(0x203)] || document[_0x40f6a1(0x550)][_0x40f6a1(0x5be)] || document.documentElement[_0x40f6a1(0x41d)];
                    if (_0x2e0f07 && !_0x2e052d[_0x40f6a1(0x787)]) try {
                        _0x2e052d.fullscreen = true, _0x2e0f07[_0x40f6a1(0x670)](document[_0x40f6a1(0x550)]);
                    } catch (_0x18c0b7) {} else _0x2e052d[_0x40f6a1(0x787)] = false, document[_0x40f6a1(0x3a4)]();
                });
                _0x26dfe0.e === _0x578317(0x68a) && document[_0x578317(0x4e7)]('btnRePlay').addEventListener(_0x578317(0x57b), function () {
                    var _0xa1b922 = _0x578317;
                    $(_0xa1b922(0x4f7)).val(_0x2e052d.pi), $(_0xa1b922(0x6a1))[_0xa1b922(0x1ce)](_0x2e052d.pn), $('#port_id')[_0xa1b922(0x1ce)]($('#port_id_s')[_0xa1b922(0x1ce)]()), $(_0xa1b922(0x65f))[_0xa1b922(0x1ce)]($('#port_name_s')[_0xa1b922(0x1ce)]()), document[_0xa1b922(0x4e7)](_0xa1b922(0x8a0))[_0xa1b922(0x57b)]();
                });
                !window.wftObjects && (window[_0x578317(0x867)] = {
                    'eat_animation': 0.0025,
                    'smoothCamera': 0.5,
                    'PortionSize': 0x2,
                    'PortionAura': 1.2,
                    'PortionTransparent': 0.8,
                    'FoodTransparent': 0.3,
                    'FoodSize': 0x2,
                    'FoodShadow': 0x2,
                    'zoomSpeed': 0.003,
                    'soundEnabled': false,
                    'soundVolume': 0x32,
                    'soundEffect': _0x578317(0x5c9)
                });
                try {
                    const _0x570c1d = JSON[_0x578317(0x2b2)](localStorage[_0x578317(0x21e)](_0x578317(0x57c)));
                    if (_0x570c1d)
                        for (const _0x1d6d20 in _0x570c1d) {
                            wftObjects[_0x578317(0x664)](_0x1d6d20) && (wftObjects[_0x1d6d20] = _0x570c1d[_0x1d6d20]);
                        }
                } catch (_0x39d057) {
                    console[_0x578317(0x89c)](_0x578317(0x3dd), _0x39d057);
                }

                function _0x4ff036() {
                    var _0x38638a = _0x578317;
                    try {
                        localStorage[_0x38638a(0x510)]('wftSettings', JSON[_0x38638a(0x562)](wftObjects));
                    } catch (_0x3f50df) {
                        console.error(_0x38638a(0x3c6), _0x3f50df);
                    }
                }
                $(_0x578317(0x564)).remove(), $(_0x578317(0x807)).remove();
                _0x2e052d.s_w ? $(_0x578317(0x622) + _0x146109.userId + _0x578317(0x3e5))[_0x578317(0x515)](_0x578317(0x418)) : $(_0x578317(0x73c) + _0x26dfe0.ccg[0x6] + _0x578317(0x72c))[_0x578317(0x515)]('#mm-store');

                function _0x42b048() {
                    var _0x2503e3 = _0x578317;
                    const _0x2936bd = _0x26dfe0.e === 'not_empty' || _0x2b5765;
                    if (!_0x2936bd) $(_0x2503e3(0x416))[_0x2503e3(0x623)](_0x2503e3(0x8db))[_0x2503e3(0x5a1)]({
                        'max-width': _0x2503e3(0x4b4),
                        'width': _0x2503e3(0x4b4)
                    }), $(_0x2503e3(0x75b))[_0x2503e3(0x75d)](), $(_0x2503e3(0x5b7))[_0x2503e3(0x6bb)]('\x0a        <div style=\"text-align: center; margin: 10px auto;\">\x0a          <label for=\"id_customer\" style=\"display: block; margin-bottom: 5px; font-weight: bold; color: #ddd; text-align: center;\">User ID</label> \x0a          <div style=\"display: flex; margin: 0 auto; justify-content: center;\">\x0a            <input value=\"' + _0x146109[_0x2503e3(0x875)] + _0x2503e3(0x640) + _0x146109[_0x2503e3(0x875)] + _0x2503e3(0x719) + _0x146109[_0x2503e3(0x875)] + _0x2503e3(0x2bf));
                    else {
                        $(_0x2503e3(0x416)).removeClass(_0x2503e3(0x8db)), $('.settings-sidebar, .settings-layout, .settings-content')[_0x2503e3(0x651)]();
                        const _0x2268a1 = $(_0x2503e3(0x291))[_0x2503e3(0x384)]('tab');
                        _0x2268a1 ? ($(_0x2503e3(0x1d1))[_0x2503e3(0x75d)](), $('#' + _0x2268a1 + _0x2503e3(0x267)).show()) : $('#game-settings-tab')[_0x2503e3(0x651)](), !_0x2e052d[_0x2503e3(0x800)] && $('#mobile-tab-item')[_0x2503e3(0x75d)]();
                    }
                }
                window[_0x578317(0x645)] = function () {
                    var _0x2fc653 = _0x578317;
                    _0x42b048(), $('#modal_backdrop')[_0x2fc653(0x651)](), $(_0x2fc653(0x807)).css({
                        'z-index': _0x2fc653(0x6ce),
                        'display': _0x2fc653(0x4e8)
                    }), $(_0x2fc653(0x4dc))[_0x2fc653(0x5a1)](_0x2fc653(0x717), _0x2fc653(0x450));
                }, window[_0x578317(0x824)] = function () {
                    var _0x23a927 = _0x578317;
                    $(_0x23a927(0x807))[_0x23a927(0x5a1)](_0x23a927(0x63d), _0x23a927(0x834)), $(_0x23a927(0x414)).hide(), $(_0x23a927(0x4dc))[_0x23a927(0x5a1)](_0x23a927(0x717), '');
                }, _0x42b048();

                function _0x38867f() {
                    var _0x2d9d49 = _0x578317;
                    const _0x4aeb54 = _0x26dfe0.e === _0x2d9d49(0x68a) || _0x2b5765;
                    !_0x4aeb54 ? ($(_0x2d9d49(0x452))[_0x2d9d49(0x75d)](), $(_0x2d9d49(0x436))[_0x2d9d49(0x23d)](_0x2d9d49(0x8ce))[_0x2d9d49(0x75d)](), $(_0x2d9d49(0x8a8))[_0x2d9d49(0x792)]('.setting-item')[_0x2d9d49(0x75d)](), $('[id^=\"sel_\"]')[_0x2d9d49(0x75d)](), $(_0x2d9d49(0x74f))[_0x2d9d49(0x75d)](), $(_0x2d9d49(0x2f6))[_0x2d9d49(0x75d)](), $(_0x2d9d49(0x4ab))[_0x2d9d49(0x75d)](), $(_0x2d9d49(0x6c3))[_0x2d9d49(0x75d)](), $('#div_Laser, #Laserup, #laser_color_picker, #laser_opacity_slider')[_0x2d9d49(0x75d)]()) : ($(_0x2d9d49(0x452)).show(), $(_0x2d9d49(0x436)).show(), $(_0x2d9d49(0x8a8)).closest(_0x2d9d49(0x295)).show(), $(_0x2d9d49(0x797))[_0x2d9d49(0x651)](), $(_0x2d9d49(0x74f))[_0x2d9d49(0x651)](), $(_0x2d9d49(0x2f6))[_0x2d9d49(0x651)](), $(_0x2d9d49(0x4ab))[_0x2d9d49(0x651)](), $(_0x2d9d49(0x6c3))[_0x2d9d49(0x651)](), $(_0x2d9d49(0x84d))[_0x2d9d49(0x651)](), !_0x2e052d[_0x2d9d49(0x800)] && $(_0x2d9d49(0x40e)).hide());
                }
                $(document)[_0x578317(0x30e)](function () {
                    var _0x51bf52 = _0x578317;
                    setTimeout(function () {
                        _0x38867f();
                    }, 0x64), $(_0x51bf52(0x3dc))[_0x51bf52(0x57b)](function () {
                        var _0x2f9dbe = _0x51bf52,
                            _0x2716da = document[_0x2f9dbe(0x4e7)](_0x2f9dbe(0x247));
                        _0x2716da[_0x2f9dbe(0x429)](), _0x2716da[_0x2f9dbe(0x885)](0x0, 0x1869f), navigator[_0x2f9dbe(0x5a9)][_0x2f9dbe(0x227)](_0x2716da[_0x2f9dbe(0x66a)]), $(_0x2f9dbe(0x50a))[_0x2f9dbe(0x6bb)]('' + _0x26dfe0[_0x2f9dbe(0x4b6)][0xe] + '!'), $(_0x2f9dbe(0x50a)).css('visibility', _0x2f9dbe(0x775)), $(_0x2f9dbe(0x50a))[_0x2f9dbe(0x5a1)]('opacity', '1'), setTimeout(function () {
                            var _0x43ebb6 = _0x2f9dbe;
                            $(_0x43ebb6(0x50a))[_0x43ebb6(0x5a1)]('visibility', 'hidden'), $(_0x43ebb6(0x50a))[_0x43ebb6(0x5a1)]('opacity', '0');
                        }, 0x5dc);
                    }), document[_0x51bf52(0x4e7)](_0x51bf52(0x585))[_0x51bf52(0x49c)](_0x51bf52(0x57b), async function () {
                        var _0x29dee4 = _0x51bf52;
                        localStorage[_0x29dee4(0x3e8)](), sessionStorage[_0x29dee4(0x3e8)]();
                        if (window[_0x29dee4(0x2f3)] && indexedDB[_0x29dee4(0x520)]) {
                            let _0x3c3c56 = await indexedDB[_0x29dee4(0x520)]();
                            for (let _0x22f1e3 of _0x3c3c56) {
                                _0x22f1e3[_0x29dee4(0x7b3)] && await indexedDB[_0x29dee4(0x486)](_0x22f1e3.name);
                            }
                        }
                        window[_0x29dee4(0x45b)] && console[_0x29dee4(0x896)](_0x29dee4(0x47a));
                        document[_0x29dee4(0x7d0)][_0x29dee4(0x3d3)](';')[_0x29dee4(0x3a6)](function (_0x3780eb) {
                            var _0x4d9b9d = _0x29dee4;
                            document[_0x4d9b9d(0x7d0)] = _0x3780eb[_0x4d9b9d(0x29f)](/^ +/, '').replace(/=.*/, '=;expires=' + new Date(0x0).toUTCString() + _0x4d9b9d(0x394));
                        });
                        if (_0x29dee4(0x4ff) in window) {
                            let _0x55cfcf = await caches[_0x29dee4(0x404)]();
                            for (let _0x2cb4bf of _0x55cfcf) {
                                await caches[_0x29dee4(0x6d9)](_0x2cb4bf);
                            }
                        }
                        if (_0x29dee4(0x8cb) in navigator) {
                            let _0x4aa8bc = await navigator[_0x29dee4(0x8cb)][_0x29dee4(0x73a)]();
                            for (let _0x592e1a of _0x4aa8bc) {
                                await _0x592e1a.unregister();
                            }
                        }
                        localStorage[_0x29dee4(0x5f9)](_0x29dee4(0x7a8)), location.reload();
                    }), $(_0x51bf52(0x3dc))[_0x51bf52(0x624)](function () {
                        var _0xed7cea = _0x51bf52;
                        $(_0xed7cea(0x50a)).css('visibility', _0xed7cea(0x775)), $(_0xed7cea(0x50a)).css(_0xed7cea(0x2fb), '1');
                    }, function () {
                        var _0x1a7e6c = _0x51bf52;
                        $(_0x1a7e6c(0x50a)).text() !== _0x26dfe0.ccg[0xe] + '!' && ($(_0x1a7e6c(0x50a)).css(_0x1a7e6c(0x5ad), _0x1a7e6c(0x450)), $(_0x1a7e6c(0x50a))[_0x1a7e6c(0x5a1)](_0x1a7e6c(0x2fb), '0'));
                    });
                    if (window[_0x51bf52(0x702)]) return;
                    window[_0x51bf52(0x702)] = true, $(_0x51bf52(0x564))[_0x51bf52(0x6de)](_0x51bf52(0x57b)).on(_0x51bf52(0x57b), function (_0x5e97a6) {
                        var _0x162a35 = _0x51bf52;
                        return _0x5e97a6[_0x162a35(0x73e)](), window[_0x162a35(0x645)](), false;
                    });
                    var _0x3005d1 = $('#modal_wft'),
                        _0x315010 = _0x3005d1[_0x51bf52(0x5a1)](_0x51bf52(0x63d));
                    $('body')[_0x51bf52(0x1da)](_0x3005d1[_0x51bf52(0x485)]());
                    var _0x128d68 = $('<div id=\'modal_backdrop\'></div>').css({
                        'position': 'fixed',
                        'top': '0',
                        'left': '0',
                        'width': '100%',
                        'height': _0x51bf52(0x26d),
                        'background-color': _0x51bf52(0x5e8),
                        'z-index': '9998',
                        'display': 'none'
                    });
                    _0x3005d1[_0x51bf52(0x7d1)](_0x128d68);

                    function _0x14e4f0() {
                        var _0x2e9006 = _0x51bf52;
                        $(_0x2e9006(0x564))[_0x2e9006(0x56a)] && !$('#op_wft')[_0x2e9006(0x384)](_0x2e9006(0x58f)) && $(_0x2e9006(0x564))[_0x2e9006(0x6de)](_0x2e9006(0x57b)).on(_0x2e9006(0x57b), function (_0x4c135f) {
                            var _0x184a6e = _0x2e9006;
                            return _0x4c135f[_0x184a6e(0x73e)](), window[_0x184a6e(0x645)](), false;
                        })[_0x2e9006(0x384)]('hasClickHandler', true);
                    }
                    _0x14e4f0(), setInterval(_0x14e4f0, 0x1388), $('.close')[_0x51bf52(0x6de)](_0x51bf52(0x57b)).on(_0x51bf52(0x57b), function () {
                        var _0x3d216f = _0x51bf52;
                        window[_0x3d216f(0x824)]();
                    }), _0x128d68.on('click', function () {
                        window.closeSettingsModal();
                    });
                });
                var _0x329022 = document.getElementById('div_save'),
                    _0xa40603 = document.getElementById('div_sound'),
                    _0xa86846 = document[_0x578317(0x4e7)]('div_speed'),
                    _0x765c48 = document[_0x578317(0x4e7)](_0x578317(0x4a3)),
                    _0x57ee92 = document[_0x578317(0x4e7)]('div_w1'),
                    _0x21433b = document.getElementById(_0x578317(0x82a)),
                    _0x29f47c = document[_0x578317(0x4e7)]('sel_sc'),
                    _0xdbfcf1 = document[_0x578317(0x4e7)](_0x578317(0x524)),
                    _0x2b2ec0 = document[_0x578317(0x4e7)](_0x578317(0x69b)),
                    _0x509c70 = document[_0x578317(0x4e7)](_0x578317(0x66f)),
                    _0x245923 = document[_0x578317(0x4e7)]('div_background'),
                    _0x217352 = [{
                        'name': 'Vietnam',
                        'val': 'vn'
                    }, {
                        'name': _0x578317(0x71c),
                        'val': 'th'
                    }, {
                        'name': _0x578317(0x6d3),
                        'val': 'kh'
                    }, {
                        'name': 'Indonesia',
                        'val': 'id'
                    }, {
                        'name': _0x578317(0x20d),
                        'val': 'sg'
                    }, {
                        'name': 'Japan',
                        'val': 'jp'
                    }, {
                        'name': _0x578317(0x7f2),
                        'val': 'mx'
                    }, {
                        'name': _0x578317(0x1ea),
                        'val': 'br'
                    }, {
                        'name': _0x578317(0x757),
                        'val': 'ca'
                    }, {
                        'name': 'Germany',
                        'val': 'de'
                    }, {
                        'name': 'France',
                        'val': 'fr'
                    }, {
                        'name': 'England',
                        'val': 'gb'
                    }, {
                        'name': 'Australia',
                        'val': 'au'
                    }, {
                        'name': _0x578317(0x4fa),
                        'val': 'us'
                    }, {
                        'name': 'Portugal',
                        'val': 'pt'
                    }, {
                        'name': _0x578317(0x30c),
                        'val': 'tr'
                    }, {
                        'name': _0x26dfe0[_0x578317(0x4b6)][0x24],
                        'val': 'iq'
                    }];
                let _0x264520 = document[_0x578317(0x4e7)](_0x578317(0x49b));
                if (_0x264520) {
                    for (_0x246330 = 0x0; _0x246330 < _0x217352[_0x578317(0x56a)]; _0x246330++) {
                        let _0x558c8a = document[_0x578317(0x43a)]('option');
                        _0x558c8a[_0x578317(0x66a)] = _0x217352[_0x246330][_0x578317(0x1ce)], _0x558c8a.innerHTML = _0x217352[_0x246330][_0x578317(0x7b3)], _0x264520[_0x578317(0x6c1)](_0x558c8a);
                    }
                    _0x31462e && (_0x264520[_0x578317(0x66a)] = _0x31462e), _0x264520[_0x578317(0x5ab)] = function () {
                        var _0x4fd48e = _0x578317;
                        let _0x3661af = _0x264520[_0x4fd48e(0x66a)];
                        _0x31462e = _0x3661af, localStorage[_0x4fd48e(0x510)]('oco', _0x3661af);
                        var _0x4678c3 = {
                            'id_wormate': _0x146109[_0x4fd48e(0x875)],
                            'country': _0x3661af
                        };
                        fetch(_0x4fd48e(0x699), {
                            'headers': {
                                'Content-Type': 'application/json'
                            },
                            'method': 'POST',
                            'body': JSON[_0x4fd48e(0x562)](_0x4678c3)
                        }), localStorage.removeItem('wftsw'), window[_0x4fd48e(0x703)].reload();
                    };
                }
                var _0x2b5765 = false;
                if (_0x26dfe0.cm === '' || _0x26dfe0.cm === undefined);
                else {
                    var _0x5d4561 = document[_0x578317(0x4e7)](_0x578317(0x8b2)),
                        _0x8e8c1f = document[_0x578317(0x4e7)](_0x578317(0x8a0)),
                        _0x37addd = document.getElementById(_0x578317(0x220));
                    _0x5d4561 && (_0x5d4561.style[_0x578317(0x63d)] = _0x578317(0x4e8), _0x5d4561[_0x578317(0x48d)] = function () {
                        var _0x513263 = _0x578317;
                        _0x37addd[_0x513263(0x66a)] = _0x26dfe0.cm, _0x8e8c1f.click();
                    }, _0x2b5765 = true);
                }
                if (_0x26dfe0.e === 'not_connect');
                else {
                    _0x2e052d.h = _0x26dfe0.z == 'b', _0x2e052d.hz = _0x26dfe0.z == 'c';
                    if (_0x26dfe0.e === _0x578317(0x68a) || _0x2b5765) {
                        var _0x22533d = ooo.Xg.Kf.Wg.Ah;
                        _0x329022 && (_0x329022[_0x578317(0x45d)].display = _0x578317(0x4e8));
                        _0xa40603 && (_0xa40603.style[_0x578317(0x63d)] = _0x578317(0x5cb));
                        $(_0x578317(0x810)).prop(_0x578317(0x65c), _0x2e052d[_0x578317(0x4be)]), $(_0x578317(0x810))[_0x578317(0x55b)](function () {
                            var _0x29cd5e = _0x578317;
                            _0x2e052d.flx = $(this).prop(_0x29cd5e(0x65c)), localStorage[_0x29cd5e(0x510)](_0x29cd5e(0x4e9), JSON.stringify(_0x2e052d));
                        }), $(_0x578317(0x7bf))[_0x578317(0x335)](_0x578317(0x65c), true), $(_0x578317(0x7bf))[_0x578317(0x55b)](function () {
                            var _0x1989a8 = _0x578317;
                            _0x2e052d.vp = $(this)[_0x1989a8(0x335)](_0x1989a8(0x65c)), localStorage[_0x1989a8(0x510)](_0x1989a8(0x4e9), JSON.stringify(_0x2e052d));
                        }), $(_0x578317(0x21f))[_0x578317(0x335)](_0x578317(0x65c), _0x2e052d.cs), $(_0x578317(0x21f))[_0x578317(0x55b)](function () {
                            var _0x95b3eb = _0x578317;
                            _0x2e052d.cs = $(this).prop('checked'), localStorage[_0x95b3eb(0x510)](_0x95b3eb(0x4e9), JSON[_0x95b3eb(0x562)](_0x2e052d));
                        });
                        _0x2e052d.mobile ? (_0x57ee92 && (_0x57ee92[_0x578317(0x45d)][_0x578317(0x63d)] = _0x578317(0x834)), _0x2e052d.sc = 0x0, _0x2e052d.wi = 0x0) : (_0x57ee92 && (_0x57ee92[_0x578317(0x45d)][_0x578317(0x63d)] = 'inline-block'), _0x29f47c && (_0x29f47c[_0x578317(0x66a)] = _0x2e052d.sc, _0x29f47c.onchange = function () {
                            var _0x3f7701 = _0x578317;
                            _0x2e052d.sc = parseInt(_0x29f47c[_0x3f7701(0x66a)]), _0x2e052d.sc == 0x1 && (_0x2e052d.wi = screen[_0x3f7701(0x2c1)] / (screen.width * 0x2)), _0x2e052d.sc == 0x2 && (_0x2e052d.wi = 0x0), localStorage[_0x3f7701(0x510)]('SaveGamewft', JSON[_0x3f7701(0x562)](_0x2e052d));
                        }));
                        _0x21433b && (_0x21433b.style[_0x578317(0x63d)] = _0x578317(0x5cb));
                        sel_sm && (sel_sm[_0x578317(0x66a)] = _0x2e052d.sm, sel_sm.onchange = function () {
                            var _0x8289b9 = _0x578317;
                            _0x2e052d.sm = parseInt(sel_sm[_0x8289b9(0x66a)]), localStorage[_0x8289b9(0x510)](_0x8289b9(0x4e9), JSON[_0x8289b9(0x562)](_0x2e052d));
                        });
                        _0xdbfcf1 && (_0xdbfcf1[_0x578317(0x45d)][_0x578317(0x63d)] = _0x578317(0x5cb));
                        _0x2b2ec0 && (_0x2b2ec0[_0x578317(0x66a)] = _0x2e052d.to, _0x2b2ec0.onchange = function () {
                            var _0x2c8a46 = _0x578317;
                            _0x2e052d.to = parseInt(_0x2b2ec0[_0x2c8a46(0x66a)]), localStorage.setItem(_0x2c8a46(0x4e9), JSON.stringify(_0x2e052d));
                        });
                        if (_0x264520 && _0x264520[_0x578317(0x66a)] == 'iq' && _0x509c70) {
                            _0x509c70[_0x578317(0x45d)][_0x578317(0x63d)] = _0x578317(0x5cb);
                            var _0x3dfe00 = $('#wftiq');
                            _0x3dfe00[_0x578317(0x335)](_0x578317(0x65c), _0x2e052d.iq), _0x3dfe00[_0x578317(0x55b)](function () {
                                var _0x53357 = _0x578317;
                                this[_0x53357(0x65c)] ? _0x2e052d.iq = !![] : _0x2e052d.iq = false, localStorage.setItem(_0x53357(0x4e9), JSON[_0x53357(0x562)](_0x2e052d));
                            });
                        } else _0x2e052d.iq = false, _0x509c70 && (_0x509c70[_0x578317(0x45d)].display = _0x578317(0x834));
                        const _0x570be2 = localStorage[_0x578317(0x21e)]('showFpsCpu') === _0x578317(0x40f);
                        $(_0x578317(0x619))[_0x578317(0x335)]('checked', _0x570be2), $(_0x578317(0x619))[_0x578317(0x55b)](function () {
                            var _0x136560 = _0x578317;
                            const _0xecadeb = $(this)[_0x136560(0x335)](_0x136560(0x65c));
                            localStorage[_0x136560(0x510)](_0x136560(0x392), _0xecadeb), window[_0x136560(0x5ca)] && window[_0x136560(0x5ca)][_0x136560(0x846)](_0xecadeb);
                        });
                        window.PerformanceMonitor && window[_0x578317(0x5ca)][_0x578317(0x3ec)]();
                        const _0x2b8ccd = localStorage[_0x578317(0x21e)](_0x578317(0x6d7)) === _0x578317(0x40f) || localStorage[_0x578317(0x21e)]('wftPulseEnabled') === null;
                        $(_0x578317(0x7ad)).prop(_0x578317(0x65c), _0x2b8ccd), window.pulseEnabled = _0x2b8ccd, $(_0x578317(0x7ad))[_0x578317(0x55b)](function () {
                            var _0x297499 = _0x578317;
                            window[_0x297499(0x60b)] = $(this)[_0x297499(0x335)](_0x297499(0x65c)), localStorage[_0x297499(0x510)]('wftPulseEnabled', window[_0x297499(0x60b)].toString());
                        }), _0x2e052d.c_1 = _0x26dfe0[_0x578317(0x222)];
                        _0x245923 && (_0x245923.style[_0x578317(0x63d)] = _0x578317(0x4e8));
                        _0x19cd8a(_0x2e052d, oeo), _0x5a0b1f.on = true;
                        _0x16f9d2() ? (_0x2e052d.tt = _0x26dfe0.tt == 0x1, _0x22533d[_0x578317(0x53c)][_0x578317(0x775)] = _0x5a0b1f.on && _0x2e052d.mo == 0x1, _0x22533d.img_2[_0x578317(0x775)] = _0x5a0b1f.on && _0x2e052d.mo == 0x2, _0x22533d[_0x578317(0x426)][_0x578317(0x775)] = _0x5a0b1f.on && _0x2e052d.mo == 0x3, _0x22533d[_0x578317(0x451)][_0x578317(0x775)] = _0x5a0b1f.on && (_0x2e052d.mo == 0x4 || _0x2e052d.mo == 0x5 || _0x2e052d.mo == 0x6)) : _0x2e052d.tt = false;
                        var _0x18596f = [{
                            'nome': _0x578317(0x1d8),
                            'uri': _0x2e052d.s_l + _0x578317(0x774)
                        }, {
                            'nome': _0x578317(0x893),
                            'uri': _0x2e052d[_0x578317(0x403)] + _0x578317(0x5fc)
                        }, {
                            'nome': _0x578317(0x7a9),
                            'uri': _0x2e052d.s_l + _0x578317(0x535)
                        }, {
                            'nome': _0x578317(0x6fb),
                            'uri': _0x2e052d.s_l + '/get_store.phpitem=Galaxy-Star.png'
                        }, {
                            'nome': _0x578317(0x204),
                            'uri': _0x2e052d.s_l + _0x578317(0x68e)
                        }, {
                            'nome': 'Crystalblue',
                            'uri': _0x2e052d.s_l + _0x578317(0x1c5)
                        }, {
                            'nome': _0x578317(0x4a2),
                            'uri': _0x2e052d[_0x578317(0x403)] + _0x578317(0x2de)
                        }, {
                            'nome': 'Bluemist',
                            'uri': _0x2e052d[_0x578317(0x403)] + _0x578317(0x7a5)
                        }, {
                            'nome': 'Prism',
                            'uri': _0x2e052d[_0x578317(0x403)] + _0x578317(0x52b)
                        }, {
                            'nome': 'Cloudscape',
                            'uri': _0x2e052d[_0x578317(0x403)] + '/get_store.phpitem=bg_sky__5.png'
                        }, {
                            'nome': 'Desert',
                            'uri': _0x2e052d[_0x578317(0x403)] + _0x578317(0x7cf)
                        }, {
                            'nome': _0x578317(0x4ba),
                            'uri': _0x2e052d[_0x578317(0x403)] + _0x578317(0x29a)
                        }];
                        _0x2e052d[_0x578317(0x38c)] = _0x26dfe0[_0x578317(0x7c4)];
                        let _0x50465f = $(_0x578317(0x895));
                        _0x50465f[_0x578317(0x56a)] > 0x0 && (_0x50465f[_0x578317(0x6cd)](), _0x18596f.forEach(function (_0x2fbf43) {
                            var _0xf4416d = _0x578317;
                            const _0x4f9de3 = _0x2e052d[_0xf4416d(0x728)] === _0x2fbf43[_0xf4416d(0x65e)],
                                _0x1d07e8 = $(_0xf4416d(0x288) + (_0x4f9de3 ? 'active' : '') + _0xf4416d(0x7db) + _0x2fbf43[_0xf4416d(0x65e)] + '\" data-bg-name=\"' + _0x2fbf43[_0xf4416d(0x4ec)] + _0xf4416d(0x366) + (_0x4f9de3 ? '#ffcc00' : _0xf4416d(0x4d4)) + _0xf4416d(0x2e6) + _0x2fbf43.uri + _0xf4416d(0x74e) + _0x2fbf43[_0xf4416d(0x4ec)] + _0xf4416d(0x390) + _0x2fbf43[_0xf4416d(0x4ec)] + _0xf4416d(0x28e));
                            _0x1d07e8.click(function () {
                                var _0x477a92 = _0xf4416d;
                                $('.background-item').removeClass(_0x477a92(0x21d)).css(_0x477a92(0x526), _0x477a92(0x4d4)), $(this)[_0x477a92(0x623)](_0x477a92(0x21d)).css(_0x477a92(0x526), _0x477a92(0x3ea));
                                const _0x2cfd54 = $(this).data('bg'),
                                    _0x4f6554 = $(this)[_0x477a92(0x384)](_0x477a92(0x83f));
                                _0x2e052d[_0x477a92(0x728)] = _0x2cfd54, localStorage.setItem(_0x477a92(0x4e9), JSON.stringify(_0x2e052d)), ooo && ooo.ef && ooo.ef[_0x477a92(0x254)] && ooo.ef[_0x477a92(0x6c9)] && (ooo.ef.F_bg = new PIXI[(_0x477a92(0x2a0))](ooo.ef.fn_o(_0x2cfd54))), $(_0x477a92(0x788))[_0x477a92(0x1ce)](_0x2cfd54);
                            }), _0x50465f[_0xf4416d(0x1da)](_0x1d07e8);
                        }));
                        let _0x4f31df = document[_0x578317(0x4e7)](_0x578317(0x4ef));
                        if (_0x4f31df) {
                            for (_0x246330 = 0x0; _0x246330 < _0x18596f.length; _0x246330++) {
                                let _0x137334 = document[_0x578317(0x43a)](_0x578317(0x490));
                                _0x137334[_0x578317(0x66a)] = _0x18596f[_0x246330][_0x578317(0x65e)], _0x137334[_0x578317(0x718)](_0x578317(0x88c), _0x18596f[_0x246330].uri), _0x137334[_0x578317(0x718)](_0x578317(0x27c), _0x18596f[_0x246330][_0x578317(0x4ec)]), _0x137334[_0x578317(0x873)] = _0x18596f[_0x246330].nome, _0x4f31df.appendChild(_0x137334);
                            }
                            _0x2e052d[_0x578317(0x1f2)] = _0x26dfe0[_0x578317(0x2d7)], _0x4f31df[_0x578317(0x66a)] = _0x2e052d.background || _0x18596f[0x0][_0x578317(0x65e)], $.fn.wftsle && $(_0x578317(0x788)).wftsle({
                                'onSelected': function () {
                                    var _0x2f8c28 = _0x578317;
                                    _0x2e052d[_0x2f8c28(0x728)] = $('#backgroundArena-value').val(), localStorage[_0x2f8c28(0x510)]('SaveGamewft', JSON.stringify(_0x2e052d));
                                    ooo && ooo.ef && ooo.ef[_0x2f8c28(0x254)] && ooo.ef[_0x2f8c28(0x6c9)] && (ooo.ef[_0x2f8c28(0x254)] = new PIXI[(_0x2f8c28(0x2a0))](ooo.ef[_0x2f8c28(0x6c9)](_0x2e052d.background)));
                                    const _0x1e0d1d = _0x2e052d[_0x2f8c28(0x728)];
                                    $(_0x2f8c28(0x478))[_0x2f8c28(0x37b)](_0x2f8c28(0x21d))[_0x2f8c28(0x5a1)](_0x2f8c28(0x526), _0x2f8c28(0x4d4)), $(_0x2f8c28(0x397) + _0x1e0d1d + '\"]').addClass('active')[_0x2f8c28(0x5a1)](_0x2f8c28(0x526), _0x2f8c28(0x3ea));
                                }
                            });
                        }
                        const _0x574593 = [{
                                'name': _0x578317(0x2db),
                                'url': _0x2e052d.s_l + _0x578317(0x5b9)
                            }, {
                                'name': 'White Mouse Pointer',
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/2.png'
                            }, {
                                'name': 'Pink Octopus Cursor',
                                'url': _0x2e052d.s_l + '/images/cors-proxy.phpimg=cursors/3.png'
                            }, {
                                'name': 'Beetle Cursor',
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x5e0)
                            }, {
                                'name': 'TikTok Cursor',
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/5.png'
                            }, {
                                'name': _0x578317(0x85a),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x5e3)
                            }, {
                                'name': _0x578317(0x64a),
                                'url': _0x2e052d.s_l + _0x578317(0x525)
                            }, {
                                'name': _0x578317(0x7bc),
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/8.png'
                            }, {
                                'name': _0x578317(0x860),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x34c)
                            }, {
                                'name': 'Pink Hearts Cursor',
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x2b9)
                            }, {
                                'name': _0x578317(0x3c1),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x677)
                            }, {
                                'name': _0x578317(0x363),
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/12.png'
                            }, {
                                'name': _0x578317(0x833),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x7fd)
                            }, {
                                'name': _0x578317(0x230),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x2d6)
                            }, {
                                'name': _0x578317(0x262),
                                'url': _0x2e052d.s_l + '/images/cors-proxy.phpimg=cursors/15.png'
                            }, {
                                'name': _0x578317(0x4db),
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/16.png'
                            }, {
                                'name': _0x578317(0x2aa),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x657)
                            }, {
                                'name': _0x578317(0x704),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x590)
                            }, {
                                'name': _0x578317(0x7f7),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x786)
                            }, {
                                'name': _0x578317(0x69e),
                                'url': _0x2e052d.s_l + _0x578317(0x739)
                            }, {
                                'name': _0x578317(0x430),
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/21.png'
                            }, {
                                'name': _0x578317(0x6d0),
                                'url': _0x2e052d.s_l + '/images/cors-proxy.phpimg=cursors/22.png'
                            }, {
                                'name': _0x578317(0x51d),
                                'url': _0x2e052d.s_l + '/images/cors-proxy.phpimg=cursors/23.png'
                            }, {
                                'name': _0x578317(0x63a),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x5ee)
                            }, {
                                'name': _0x578317(0x80f),
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x543)
                            }, {
                                'name': 'Rose Branch Cursor',
                                'url': _0x2e052d[_0x578317(0x403)] + _0x578317(0x532)
                            }, {
                                'name': _0x578317(0x5bc),
                                'url': _0x2e052d[_0x578317(0x403)] + '/images/cors-proxy.phpimg=cursors/27.png'
                            }, {
                                'name': _0x578317(0x1cf),
                                'url': _0x2e052d.s_l + _0x578317(0x554)
                            }],
                            _0x55f3f6 = localStorage[_0x578317(0x21e)](_0x578317(0x3bf));
                        if (_0x55f3f6) {
                            _0x172c6e(_0x55f3f6);
                            const _0x180ee1 = _0x574593[_0x578317(0x626)](_0x172305 => _0x172305[_0x578317(0x3ca)] === _0x55f3f6);
                            _0x180ee1 && $(_0x578317(0x23e))[_0x578317(0x2df)](_0x578317(0x6e3) + _0x180ee1[_0x578317(0x7b3)]);
                        }
                        const _0x30d57a = $(_0x578317(0x7b9));
                        _0x30d57a[_0x578317(0x56a)] > 0x0 && (_0x30d57a[_0x578317(0x6cd)](), _0x574593[_0x578317(0x3a6)](function (_0x256a37) {
                            var _0xaa382e = _0x578317;
                            const _0x5e10a7 = _0x55f3f6 === _0x256a37.url,
                                _0x5dc5f6 = $(_0xaa382e(0x887) + (_0x5e10a7 ? _0xaa382e(0x21d) : '') + _0xaa382e(0x427) + _0x256a37[_0xaa382e(0x3ca)] + '\" title=\"' + _0x256a37[_0xaa382e(0x7b3)] + '\" style=\"width: 60px; height: 60px; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid ' + (_0x5e10a7 ? _0xaa382e(0x3ea) : _0xaa382e(0x4d4)) + '; border-radius: 8px; overflow: hidden; text-align: center; background-color: #232339;\">\x0a                  <img src=\"' + _0x256a37[_0xaa382e(0x3ca)] + _0xaa382e(0x74e) + _0x256a37[_0xaa382e(0x7b3)] + _0xaa382e(0x8a5));
                            _0x5dc5f6[_0xaa382e(0x57b)](function () {
                                var _0x1647f2 = _0xaa382e;
                                $(_0x1647f2(0x897)).removeClass(_0x1647f2(0x21d))[_0x1647f2(0x5a1)](_0x1647f2(0x526), _0x1647f2(0x4d4)), $(this)[_0x1647f2(0x623)](_0x1647f2(0x21d))[_0x1647f2(0x5a1)](_0x1647f2(0x526), _0x1647f2(0x3ea));
                                const _0x2426f2 = $(this)[_0x1647f2(0x384)]('cursor');
                                localStorage[_0x1647f2(0x510)](_0x1647f2(0x3bf), _0x2426f2), _0x172c6e(_0x2426f2), $('#current-cursor-name')[_0x1647f2(0x2df)](_0x1647f2(0x6e3) + _0x256a37[_0x1647f2(0x7b3)]);
                            }), _0x30d57a.append(_0x5dc5f6);
                        }));
                        $(_0x578317(0x620))[_0x578317(0x57b)](function () {
                            var _0x52badb = _0x578317;
                            localStorage[_0x52badb(0x5f9)](_0x52badb(0x3bf)), $(_0x52badb(0x4f4))[_0x52badb(0x5a1)]('cursor', _0x52badb(0x666)), $(_0x52badb(0x23e))[_0x52badb(0x2df)](_0x52badb(0x47e)), $(_0x52badb(0x897))[_0x52badb(0x37b)]('active').css(_0x52badb(0x526), '#333333');
                        });

                        function _0x172c6e(_0x5d60b0) {
                            var _0x1ac02e = _0x578317;
                            $(_0x1ac02e(0x4f4))[_0x1ac02e(0x5a1)]({
                                'cursor': 'url(' + _0x5d60b0 + '), default'
                            });
                        }
                        _0x2e052d[_0x578317(0x5ff)] = _0x26dfe0[_0x578317(0x6d2)];
                        _0x2e052d.hz && (_0x5a611f[_0x578317(0x82b)] = function (_0x315009) {
                            var _0x808723 = _0x578317;
                            !_0x2e052d.ctrl && (_0x2e052d.z >= 0.5 && _0x2e052d.z <= 0x19 || _0x2e052d.z < 0.5 && _0x315009.deltaY < 0x0 || _0x2e052d.z > 0x19 && _0x315009.deltaY > 0x0) && (_0x2e052d.z = _0x2e052d.z + _0x315009[_0x808723(0x64f)] * -wftObjects[_0x808723(0x4e0)], _0x2e052d.z < 0.5 && (_0x2e052d.z = 0.5));
                        });
                        if (_0x2e052d[_0x578317(0x800)]) {
                            $(_0x578317(0x49f)).html(_0x26dfe0.mb);
                            var _0x4ae551 = document[_0x578317(0x4e7)](_0x578317(0x598)),
                                _0x3466c1 = document.getElementById(_0x578317(0x7d7)),
                                _0x23e69e = document[_0x578317(0x4e7)](_0x578317(0x37a)),
                                _0x3f499e = document[_0x578317(0x4e7)](_0x578317(0x688)),
                                _0x3e713b = document[_0x578317(0x4e7)](_0x578317(0x77b)),
                                _0xfb1458 = document[_0x578317(0x4e7)](_0x578317(0x803));
                            _0x4ae551 && (_0x4ae551[_0x578317(0x5ab)] = function () {
                                _0x424cdf(_0x4ae551), _0x284bc3(_0x3466c1), _0x2f4bdb(_0x23e69e), _0xb0ad01(_0x3f499e), _0x1ec65c(_0xfb1458), _0x554dd6(_0x3e713b);
                            }), _0x3466c1 && (_0x3466c1[_0x578317(0x5ab)] = function () {
                                _0x424cdf(_0x4ae551), _0x284bc3(_0x3466c1), _0x2f4bdb(_0x23e69e), _0xb0ad01(_0x3f499e), _0x1ec65c(_0xfb1458), _0x554dd6(_0x3e713b);
                            }), _0x23e69e && (_0x23e69e[_0x578317(0x5ab)] = function () {
                                _0x424cdf(_0x4ae551), _0x284bc3(_0x3466c1), _0x2f4bdb(_0x23e69e), _0xb0ad01(_0x3f499e), _0x1ec65c(_0xfb1458), _0x554dd6(_0x3e713b);
                            }), _0x3f499e && (_0x3f499e.onchange = function () {
                                _0x424cdf(_0x4ae551), _0x284bc3(_0x3466c1), _0x2f4bdb(_0x23e69e), _0xb0ad01(_0x3f499e), _0x1ec65c(_0xfb1458), _0x554dd6(_0x3e713b);
                            }), _0x3e713b && (_0x3e713b[_0x578317(0x5ab)] = function () {
                                _0x424cdf(_0x4ae551), _0x284bc3(_0x3466c1), _0x2f4bdb(_0x23e69e), _0xb0ad01(_0x3f499e), _0x1ec65c(_0xfb1458), _0x554dd6(_0x3e713b);
                            }), _0xfb1458 && (_0xfb1458[_0x578317(0x5ab)] = function () {
                                _0x424cdf(_0x4ae551), _0x284bc3(_0x3466c1), _0x2f4bdb(_0x23e69e), _0xb0ad01(_0x3f499e), _0x1ec65c(_0xfb1458), _0x554dd6(_0x3e713b);
                            }), _0x2e052d[_0x578317(0x76d)] ? ($(_0x578317(0x1e4))[_0x578317(0x1ce)](_0x2e052d[_0x578317(0x76d)][_0x578317(0x65c)]), $(_0x578317(0x3b2)).val(_0x2e052d[_0x578317(0x76d)][_0x578317(0x4e5)]), $(_0x578317(0x832))[_0x578317(0x1ce)](_0x2e052d[_0x578317(0x76d)][_0x578317(0x46b)]), $('#joystick_position')[_0x578317(0x1ce)](_0x2e052d[_0x578317(0x76d)][_0x578317(0x3eb)]), $(_0x578317(0x50d))[_0x578317(0x1ce)](_0x2e052d[_0x578317(0x76d)][_0x578317(0x4d8)]), $(_0x578317(0x844))[_0x578317(0x1ce)](_0x2e052d[_0x578317(0x76d)][_0x578317(0x691)])) : ($(_0x578317(0x1e4))[_0x578317(0x1ce)](true), $(_0x578317(0x3b2)).val(_0x578317(0x4d7)), $('#joystick_mode').val(_0x578317(0x62a)), $('#joystick_position')[_0x578317(0x1ce)]('L'), $(_0x578317(0x50d))[_0x578317(0x1ce)](0x64), $('#joystick_pxy')[_0x578317(0x1ce)](0x64)), typeof _0x424cdf === _0x578317(0x3d7) && _0x4ae551 && _0x424cdf(_0x4ae551), typeof _0x284bc3 === _0x578317(0x3d7) && _0x3466c1 && _0x284bc3(_0x3466c1), typeof _0x2f4bdb === _0x578317(0x3d7) && _0x23e69e && _0x2f4bdb(_0x23e69e), typeof _0xb0ad01 === _0x578317(0x3d7) && _0x3f499e && _0xb0ad01(_0x3f499e), typeof _0x1ec65c === _0x578317(0x3d7) && _0xfb1458 && _0x1ec65c(_0xfb1458), typeof _0x554dd6 === _0x578317(0x3d7) && _0x3e713b && _0x554dd6(_0x3e713b);
                        }

                        function _0x554dd6(_0x53ca09) {
                            var _0x15ebce = _0x578317;
                            !_0x2e052d.joystick && (_0x2e052d.joystick = {}), _0x2e052d[_0x15ebce(0x76d)][_0x15ebce(0x4d8)] = parseInt(_0x53ca09[_0x15ebce(0x66a)]), $(_0x15ebce(0x63f))[_0x15ebce(0x2df)](_0x53ca09[_0x15ebce(0x66a)]), localStorage[_0x15ebce(0x510)](_0x15ebce(0x4e9), JSON.stringify(_0x2e052d));
                        }

                        function _0x1ec65c(_0x1519b6) {
                            var _0x3a0d77 = _0x578317;
                            !_0x2e052d[_0x3a0d77(0x76d)] && (_0x2e052d[_0x3a0d77(0x76d)] = {}), _0x2e052d[_0x3a0d77(0x76d)][_0x3a0d77(0x691)] = parseInt(_0x1519b6[_0x3a0d77(0x66a)]), $(_0x3a0d77(0x43c))[_0x3a0d77(0x2df)](_0x1519b6[_0x3a0d77(0x66a)]), localStorage[_0x3a0d77(0x510)](_0x3a0d77(0x4e9), JSON[_0x3a0d77(0x562)](_0x2e052d));
                        }
                        typeof _0x4232ce !== 'undefined' && typeof _0x5ced67 !== _0x578317(0x76e) && typeof _0x3282ce !== _0x578317(0x76e) && (typeof _0x403bc8 === _0x578317(0x3d7) && _0x4232ce.on(_0x578317(0x7ae), _0x403bc8), typeof _0x37fb3f === _0x578317(0x3d7) && _0x5ced67.on(_0x578317(0x7ae), _0x37fb3f), typeof _0x284b54 === _0x578317(0x3d7) && _0x3282ce.on(_0x578317(0x7ae), _0x284b54)), _0x2e052d[_0x578317(0x741)] = _0x26dfe0[_0x578317(0x6b6)];
                    } else $(_0x578317(0x843))[_0x578317(0x75d)]();
                    _0x26dfe0[_0x578317(0x420)] && _0x26dfe0[_0x578317(0x420)] != 'iq' && _0x26dfe0[_0x578317(0x420)] != _0x31462e && (localStorage.setItem('oco', _0x26dfe0[_0x578317(0x420)]), localStorage.removeItem(_0x578317(0x41c)), window[_0x578317(0x703)][_0x578317(0x252)]()), !_0x31462e && localStorage[_0x578317(0x510)](_0x578317(0x31f), 'iq');
                }
                localStorage[_0x578317(0x510)](_0x578317(0x4e9), JSON[_0x578317(0x562)](_0x2e052d)), $(document)[_0x578317(0x30e)](function () {
                    var _0x4ea49e = _0x578317;
                    if ($(_0x4ea49e(0x59a))[_0x4ea49e(0x56a)] > 0x0) {
                        $(_0x4ea49e(0x778))[_0x4ea49e(0x57b)](function () {
                            var _0x1bbf72 = _0x4ea49e;
                            $('.sidebar-item').removeClass(_0x1bbf72(0x21d)), $(this)[_0x1bbf72(0x623)](_0x1bbf72(0x21d)), $(_0x1bbf72(0x1d1))[_0x1bbf72(0x75d)]();
                            const _0x3a18f5 = $(this).data(_0x1bbf72(0x59d)) + _0x1bbf72(0x267);
                            $('#' + _0x3a18f5).show();
                        }), $('#game-settings-tab').show(), $(_0x4ea49e(0x1d1))[_0x4ea49e(0x23d)](_0x4ea49e(0x7c9))[_0x4ea49e(0x75d)]();
                        !_0x2e052d[_0x4ea49e(0x800)] && $(_0x4ea49e(0x40e))[_0x4ea49e(0x75d)]();

                        function _0x2f3b9e() {
                            var _0x25314b = _0x4ea49e;
                            $(_0x25314b(0x509))[_0x25314b(0x335)]('checked') ? $(_0x25314b(0x70f))[_0x25314b(0x623)](_0x25314b(0x642)) : $(_0x25314b(0x70f))[_0x25314b(0x37b)](_0x25314b(0x642));
                        }
                        _0x2f3b9e(), $(_0x4ea49e(0x50d)).on(_0x4ea49e(0x421), function () {
                            var _0x3103f0 = _0x4ea49e,
                                _0x140c87 = $(this)[_0x3103f0(0x1ce)]();
                            $(_0x3103f0(0x63f))[_0x3103f0(0x2df)](_0x140c87), _0x3f7fbd(this);
                        }), $(_0x4ea49e(0x844)).on(_0x4ea49e(0x421), function () {
                            var _0x490801 = _0x4ea49e,
                                _0x3551da = $(this)[_0x490801(0x1ce)]();
                            $(_0x490801(0x43c))[_0x490801(0x2df)](_0x3551da), _0x72bd5(this);
                        }), $(_0x4ea49e(0x509))[_0x4ea49e(0x55b)](function () {
                            var _0x445cbe = _0x4ea49e;
                            _0x2f3b9e(), _0x2e052d.iq = $(this)[_0x445cbe(0x335)](_0x445cbe(0x65c)), localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
                        }), $(_0x4ea49e(0x77d))[_0x4ea49e(0x55b)](function () {
                            var _0x35edbe = _0x4ea49e;
                            _0x2e052d[_0x35edbe(0x5a3)] = $(this).val(), localStorage.setItem(_0x35edbe(0x4e9), JSON[_0x35edbe(0x562)](_0x2e052d));
                        }), $(_0x4ea49e(0x687))[_0x4ea49e(0x55b)](function () {
                            var _0xbbeaee = _0x4ea49e;
                            _0x2e052d[_0xbbeaee(0x4df)] = $(this)[_0xbbeaee(0x1ce)](), localStorage[_0xbbeaee(0x510)](_0xbbeaee(0x4e9), JSON.stringify(_0x2e052d));
                        }), $(_0x4ea49e(0x360))[_0x4ea49e(0x55b)](function () {
                            var _0x52e1c4 = _0x4ea49e;
                            _0x2e052d[_0x52e1c4(0x80e)] = $(this)[_0x52e1c4(0x335)](_0x52e1c4(0x65c)), localStorage[_0x52e1c4(0x510)]('SaveGamewft', JSON.stringify(_0x2e052d));
                        }), $(_0x4ea49e(0x693))[_0x4ea49e(0x55b)](function () {
                            var _0x13aabc = _0x4ea49e;
                            _0x2e052d[_0x13aabc(0x499)] = $(this)[_0x13aabc(0x335)]('checked'), localStorage.setItem(_0x13aabc(0x4e9), JSON[_0x13aabc(0x562)](_0x2e052d));
                        }), $(_0x4ea49e(0x256))[_0x4ea49e(0x55b)](function () {
                            var _0xbcf63f = _0x4ea49e;
                            _0x2e052d[_0xbcf63f(0x69f)] = $(this)[_0xbcf63f(0x1ce)](), localStorage.setItem(_0xbcf63f(0x4e9), JSON[_0xbcf63f(0x562)](_0x2e052d));
                        }), $(_0x4ea49e(0x285))[_0x4ea49e(0x55b)](function () {
                            var _0x4237eb = _0x4ea49e;
                            _0x2e052d[_0x4237eb(0x6c4)] = $(this)[_0x4237eb(0x1ce)](), localStorage.setItem(_0x4237eb(0x4e9), JSON[_0x4237eb(0x562)](_0x2e052d));
                        }), $('#kill_custom_text').on('input', function () {
                            var _0x1ee817 = _0x4ea49e;
                            $(this)[_0x1ee817(0x1ce)]() !== '' ? (_0x2e052d.killMsgType = _0x1ee817(0x573), _0x2e052d[_0x1ee817(0x270)] = $(this).val()) : _0x2e052d[_0x1ee817(0x4f9)] = 'preset', localStorage.setItem('SaveGamewft', JSON.stringify(_0x2e052d));
                        }), $(_0x4ea49e(0x851)).on(_0x4ea49e(0x421), function () {
                            var _0x1efaeb = _0x4ea49e;
                            $(this)[_0x1efaeb(0x1ce)]() !== '' ? (_0x2e052d[_0x1efaeb(0x26a)] = _0x1efaeb(0x573), _0x2e052d[_0x1efaeb(0x3ab)] = $(this)[_0x1efaeb(0x1ce)]()) : _0x2e052d[_0x1efaeb(0x26a)] = _0x1efaeb(0x1db), localStorage[_0x1efaeb(0x510)]('SaveGamewft', JSON[_0x1efaeb(0x562)](_0x2e052d));
                        });
                        _0x2e052d.killMsg && $('#kill_msg')[_0x4ea49e(0x1ce)](_0x2e052d.killMsg);
                        _0x2e052d[_0x4ea49e(0x4df)] && $(_0x4ea49e(0x687)).val(_0x2e052d[_0x4ea49e(0x4df)]);
                        _0x2e052d[_0x4ea49e(0x4f9)] === _0x4ea49e(0x573) && _0x2e052d[_0x4ea49e(0x270)] && $('#kill_custom_text')[_0x4ea49e(0x1ce)](_0x2e052d[_0x4ea49e(0x270)] || '');
                        _0x2e052d[_0x4ea49e(0x26a)] === 'custom' && _0x2e052d[_0x4ea49e(0x3ab)] && $('#headshot_custom_text').val(_0x2e052d[_0x4ea49e(0x3ab)] || '');
                        $('#kill_show_name')[_0x4ea49e(0x335)](_0x4ea49e(0x65c), _0x2e052d[_0x4ea49e(0x80e)] !== false), $(_0x4ea49e(0x693))[_0x4ea49e(0x335)](_0x4ea49e(0x65c), _0x2e052d.showHeadshotName !== false), $('#kill_name_position').val(_0x2e052d.killNamePos || _0x4ea49e(0x589)), $('#headshot_name_position')[_0x4ea49e(0x1ce)](_0x2e052d.headshotNamePos || _0x4ea49e(0x589)), $(_0x4ea49e(0x2cb))[_0x4ea49e(0x335)]('checked', wftObjects.soundEnabled || _0x2e052d.vh), $('#sound_effect_selector')[_0x4ea49e(0x1ce)](wftObjects[_0x4ea49e(0x517)] || _0x4ea49e(0x5c9)), $(_0x4ea49e(0x577)).val(wftObjects[_0x4ea49e(0x2ff)] || 0x32), $(_0x4ea49e(0x5f7)).text(wftObjects[_0x4ea49e(0x2ff)] || 0x32);
                        let _0x273319 = null;

                        function _0x1b65dd(_0x2d39c2, _0x4ab3a3) {
                            var _0x19086b = _0x4ea49e;
                            _0x273319 && (_0x273319.pause(), _0x273319.currentTime = 0x0), _0x2d39c2[_0x19086b(0x621)] = _0x4ab3a3 / 0x64, _0x2d39c2[_0x19086b(0x4aa)] = 0x0, _0x2d39c2[_0x19086b(0x533)](), _0x273319 = _0x2d39c2;
                        }
                        $(_0x4ea49e(0x2cb))[_0x4ea49e(0x335)](_0x4ea49e(0x65c), true), $(_0x4ea49e(0x2cb))[_0x4ea49e(0x55b)](function () {
                            var _0x52a8fd = _0x4ea49e;
                            wftObjects[_0x52a8fd(0x4d6)] = $(this)[_0x52a8fd(0x335)](_0x52a8fd(0x65c)), _0x2e052d.vh = $(this)[_0x52a8fd(0x335)](_0x52a8fd(0x65c)), _0x4ff036(), localStorage[_0x52a8fd(0x510)](_0x52a8fd(0x4e9), JSON[_0x52a8fd(0x562)](_0x2e052d));
                            if (wftObjects[_0x52a8fd(0x4d6)]) {
                                const _0x4012f8 = document[_0x52a8fd(0x4e7)](_0x52a8fd(0x386));
                                _0x4012f8 && _0x1b65dd(_0x4012f8, wftObjects[_0x52a8fd(0x2ff)]);
                            }
                        }), $(_0x4ea49e(0x7de))[_0x4ea49e(0x55b)](function () {
                            var _0x396545 = _0x4ea49e;
                            wftObjects[_0x396545(0x517)] = $(this)[_0x396545(0x1ce)](), _0x4ff036();
                            const _0x37b7c4 = document[_0x396545(0x4e7)](_0x396545(0x386));
                            if (_0x37b7c4) {
                                const _0x1229c6 = _0x37b7c4[_0x396545(0x603)](_0x396545(0x5fb));
                                _0x1229c6 && (_0x1229c6[_0x396545(0x5e2)] = wftObjects[_0x396545(0x517)], _0x37b7c4[_0x396545(0x4d1)](), wftObjects.soundEnabled && setTimeout(() => {
                                    var _0xfe240d = _0x396545;
                                    _0x1b65dd(_0x37b7c4, wftObjects[_0xfe240d(0x2ff)]);
                                }, 0x64));
                            }
                        }), $(_0x4ea49e(0x1c7))[_0x4ea49e(0x55b)](function () {
                            var _0x2e05ab = _0x4ea49e;
                            const _0x59d03e = $(this).val(),
                                _0x2d1dc2 = document[_0x2e05ab(0x4e7)]('monster_kill_sound');
                            if (_0x2d1dc2) {
                                const _0x174f21 = _0x2d1dc2.querySelector('source');
                                _0x174f21 && (_0x174f21.src = _0x59d03e, _0x2d1dc2[_0x2e05ab(0x4d1)](), wftObjects[_0x2e05ab(0x4d6)] && setTimeout(() => {
                                    var _0x8d1a6c = _0x2e05ab;
                                    _0x1b65dd(_0x2d1dc2, wftObjects[_0x8d1a6c(0x2ff)]);
                                }, 0x64));
                            }!wftObjects.monsterKillSound && (wftObjects.monsterKillSound = {}), wftObjects[_0x2e05ab(0x2f0)] = _0x59d03e, _0x4ff036();
                        }), $('#volume_slider').on(_0x4ea49e(0x421), function () {
                            var _0x5f07a2 = _0x4ea49e;
                            wftObjects[_0x5f07a2(0x2ff)] = parseInt($(this)[_0x5f07a2(0x1ce)]()), $('#volume_value')[_0x5f07a2(0x2df)](wftObjects[_0x5f07a2(0x2ff)]);
                            const _0x2cd6ad = document.querySelectorAll(_0x5f07a2(0x7fb));
                            _0x2cd6ad[_0x5f07a2(0x3a6)](_0x5d5ef0 => {
                                var _0x38091a = _0x5f07a2;
                                _0x5d5ef0[_0x38091a(0x621)] = wftObjects[_0x38091a(0x2ff)] / 0x64;
                            });
                            if (wftObjects.soundEnabled) {
                                const _0x5ece1c = document[_0x5f07a2(0x4e7)](_0x5f07a2(0x386));
                                _0x5ece1c && _0x1b65dd(_0x5ece1c, wftObjects.soundVolume);
                            }
                            _0x4ff036();
                        });
                        !window[_0x4ea49e(0x70c)] && (window[_0x4ea49e(0x70c)] = {
                            'enabled': _0x2e052d.ls || false,
                            'color': 0xffd700,
                            'opacity': 0.5,
                            'thickness': 0.1
                        });
                        try {
                            const _0x3d4d9d = JSON.parse(localStorage[_0x4ea49e(0x21e)](_0x4ea49e(0x70c)));
                            _0x3d4d9d && (window.laserOptions = _0x3d4d9d);
                        } catch (_0x3ee24e) {
                            console[_0x4ea49e(0x89c)](_0x4ea49e(0x796), _0x3ee24e);
                        }
                        $('#Laserup').prop('checked', window[_0x4ea49e(0x70c)][_0x4ea49e(0x425)]);
                        const _0x18c513 = '#' + window[_0x4ea49e(0x70c)][_0x4ea49e(0x4e5)][_0x4ea49e(0x3ae)](0x10).padStart(0x6, '0');
                        $('#laser_color_picker').val(_0x18c513), $(_0x4ea49e(0x369))[_0x4ea49e(0x1ce)](window[_0x4ea49e(0x70c)].opacity * 0x64), $(_0x4ea49e(0x365))[_0x4ea49e(0x2df)](Math[_0x4ea49e(0x273)](window[_0x4ea49e(0x70c)][_0x4ea49e(0x2fb)] * 0x64)), $(_0x4ea49e(0x456))[_0x4ea49e(0x55b)](function () {
                            var _0x3da1c7 = _0x4ea49e;
                            window[_0x3da1c7(0x70c)].enabled = $(this)[_0x3da1c7(0x335)](_0x3da1c7(0x65c)), _0x2e052d.ls = $(this).prop('checked'), localStorage[_0x3da1c7(0x510)](_0x3da1c7(0x70c), JSON[_0x3da1c7(0x562)](window.laserOptions)), localStorage[_0x3da1c7(0x510)](_0x3da1c7(0x4e9), JSON[_0x3da1c7(0x562)](_0x2e052d));
                        }), $('#laser_color_picker').change(function () {
                            var _0x5bc96e = _0x4ea49e;
                            const _0x48b45a = $(this)[_0x5bc96e(0x1ce)]();
                            window.laserOptions[_0x5bc96e(0x4e5)] = parseInt(_0x48b45a.replace('#', '0x')), localStorage[_0x5bc96e(0x510)](_0x5bc96e(0x70c), JSON.stringify(window[_0x5bc96e(0x70c)]));
                        }), $(_0x4ea49e(0x369)).on('input', function () {
                            var _0x1ab38e = _0x4ea49e;
                            const _0x2077b7 = parseInt($(this).val());
                            window.laserOptions.opacity = _0x2077b7 / 0x64, $('#laser_opacity_value')[_0x1ab38e(0x2df)](_0x2077b7), localStorage.setItem('laserOptions', JSON[_0x1ab38e(0x562)](window.laserOptions));
                        }), $(_0x4ea49e(0x680))[_0x4ea49e(0x57b)](function () {
                            var _0xcbce24 = _0x4ea49e;
                            window[_0xcbce24(0x70c)] = {
                                'enabled': _0x2e052d.ls,
                                'color': 0xffd700,
                                'opacity': 0.5,
                                'thickness': 0.1
                            }, localStorage[_0xcbce24(0x510)]('laserOptions', JSON[_0xcbce24(0x562)](window[_0xcbce24(0x70c)])), $(_0xcbce24(0x36d)).val(_0xcbce24(0x538)), $(_0xcbce24(0x369))[_0xcbce24(0x1ce)](0x32), $('#laser_opacity_value')[_0xcbce24(0x2df)](0x32);
                        }), $(document).keydown(function (_0x5d812b) {
                            var _0x5d94ce = _0x4ea49e;
                            _0x5d812b.which === 0x4c && $(_0x5d94ce(0x456))[_0x5d94ce(0x335)](_0x5d94ce(0x65c), !$('#Laserup')[_0x5d94ce(0x335)](_0x5d94ce(0x65c)))[_0x5d94ce(0x304)]('change');
                            if (_0x5d812b.which === 0x4f) {
                                let _0x6e3779 = parseInt($(_0x5d94ce(0x369))[_0x5d94ce(0x1ce)]());
                                _0x6e3779 < 0x64 && $('#laser_opacity_slider')[_0x5d94ce(0x1ce)](_0x6e3779 + 0xa)[_0x5d94ce(0x304)](_0x5d94ce(0x421));
                            }
                            if (_0x5d812b[_0x5d94ce(0x4f1)] === 0x50) {
                                let _0x5765c0 = parseInt($(_0x5d94ce(0x369)).val());
                                _0x5765c0 > 0xa && $('#laser_opacity_slider')[_0x5d94ce(0x1ce)](_0x5765c0 - 0xa).trigger('input');
                            }
                        }), $(_0x4ea49e(0x2a1)).prop(_0x4ea49e(0x65c), wftObjects[_0x4ea49e(0x856)] >= 0x1), $(_0x4ea49e(0x8da))[_0x4ea49e(0x1ce)](wftObjects[_0x4ea49e(0x78c)]), $(_0x4ea49e(0x4ce))[_0x4ea49e(0x2df)](wftObjects[_0x4ea49e(0x78c)]), $('#zoom_speed_slider')[_0x4ea49e(0x1ce)](wftObjects.zoomSpeed), $(_0x4ea49e(0x5d5))[_0x4ea49e(0x2df)](wftObjects[_0x4ea49e(0x4e0)]), $(_0x4ea49e(0x45f))[_0x4ea49e(0x1ce)](wftObjects[_0x4ea49e(0x518)]), $(_0x4ea49e(0x2e5)).text(wftObjects[_0x4ea49e(0x518)]), $(_0x4ea49e(0x8b1))[_0x4ea49e(0x1ce)](wftObjects[_0x4ea49e(0x3b7)]), $(_0x4ea49e(0x8c7))[_0x4ea49e(0x2df)](wftObjects.PortionAura), $(_0x4ea49e(0x488))[_0x4ea49e(0x1ce)](wftObjects.FoodSize), $(_0x4ea49e(0x37f))[_0x4ea49e(0x2df)](wftObjects.FoodSize), $(_0x4ea49e(0x442))[_0x4ea49e(0x1ce)](wftObjects[_0x4ea49e(0x28d)]), $(_0x4ea49e(0x513))[_0x4ea49e(0x2df)](wftObjects[_0x4ea49e(0x28d)]), $(_0x4ea49e(0x2a1))[_0x4ea49e(0x55b)](function () {
                            var _0x58cbf6 = _0x4ea49e;
                            wftObjects[_0x58cbf6(0x856)] = $(this)[_0x58cbf6(0x335)](_0x58cbf6(0x65c)) ? 0x1 : 0.0025, _0x4ff036();
                        }), $(_0x4ea49e(0x8da)).on(_0x4ea49e(0x421), function () {
                            var _0x3c55d8 = _0x4ea49e;
                            const _0x28f1a4 = parseFloat($(this).val());
                            wftObjects[_0x3c55d8(0x78c)] = _0x28f1a4, $(_0x3c55d8(0x4ce)).text(_0x28f1a4), _0x4ff036();
                        }), $(_0x4ea49e(0x29b)).on('input', function () {
                            var _0x143513 = _0x4ea49e;
                            const _0x3c9f47 = parseFloat($(this)[_0x143513(0x1ce)]());
                            wftObjects[_0x143513(0x4e0)] = _0x3c9f47, $(_0x143513(0x5d5))[_0x143513(0x2df)](_0x3c9f47), _0x4ff036();
                        }), $('#portion_size_slider').on('input', function () {
                            var _0x304d39 = _0x4ea49e;
                            const _0xfcfa84 = parseFloat($(this).val());
                            wftObjects[_0x304d39(0x518)] = _0xfcfa84, $(_0x304d39(0x2e5)).text(_0xfcfa84), _0x4ff036();
                        }), $(_0x4ea49e(0x8b1)).on(_0x4ea49e(0x421), function () {
                            var _0x563fe9 = _0x4ea49e;
                            const _0x1cfd5a = parseFloat($(this)[_0x563fe9(0x1ce)]());
                            wftObjects.PortionAura = _0x1cfd5a, $('#portion_aura_value')[_0x563fe9(0x2df)](_0x1cfd5a), _0x4ff036();
                        }), $(_0x4ea49e(0x488)).on(_0x4ea49e(0x421), function () {
                            var _0x347b40 = _0x4ea49e;
                            const _0x3d92a3 = parseFloat($(this)[_0x347b40(0x1ce)]());
                            wftObjects[_0x347b40(0x224)] = _0x3d92a3, $(_0x347b40(0x37f)).text(_0x3d92a3), _0x4ff036();
                        }), $(_0x4ea49e(0x442)).on(_0x4ea49e(0x421), function () {
                            var _0x4f99ce = _0x4ea49e;
                            const _0x23d927 = parseFloat($(this).val());
                            wftObjects[_0x4f99ce(0x28d)] = _0x23d927, $(_0x4f99ce(0x513)).text(_0x23d927), _0x4ff036();
                        }), $(_0x4ea49e(0x7ce)).click(function () {
                            var _0x561dc4 = _0x4ea49e;
                            const _0x6f7e21 = $(this)[_0x561dc4(0x384)](_0x561dc4(0x58b)),
                                _0x4f67f5 = $(this)[_0x561dc4(0x384)](_0x561dc4(0x666));
                            if (_0x6f7e21 && _0x4f67f5 !== undefined) switch (_0x6f7e21) {
                            case _0x561dc4(0x79b):
                                $(_0x561dc4(0x8da))[_0x561dc4(0x1ce)](_0x4f67f5)[_0x561dc4(0x304)]('input');
                                break;
                            case _0x561dc4(0x638):
                                $(_0x561dc4(0x45f)).val(_0x4f67f5)[_0x561dc4(0x304)](_0x561dc4(0x421));
                                break;
                            case _0x561dc4(0x720):
                                $(_0x561dc4(0x8b1))[_0x561dc4(0x1ce)](_0x4f67f5)[_0x561dc4(0x304)](_0x561dc4(0x421));
                                break;
                            case _0x561dc4(0x8c6):
                                $(_0x561dc4(0x488)).val(_0x4f67f5)[_0x561dc4(0x304)](_0x561dc4(0x421));
                                break;
                            case 'food_shadow':
                                $('#food_shadow_slider').val(_0x4f67f5)[_0x561dc4(0x304)](_0x561dc4(0x421));
                                break;
                            case _0x561dc4(0x25d):
                                $(_0x561dc4(0x29b))[_0x561dc4(0x1ce)](_0x4f67f5)[_0x561dc4(0x304)](_0x561dc4(0x421));
                                break;
                            }
                        });

                        function _0xfbc282() {
                            const _0x1cc5b4 = setInterval(() => {
                                var _0xabf968 = _0x1c2b;
                                if (window[_0xabf968(0x28a)] && window[_0xabf968(0x28a)][_0xabf968(0x72d)] && window[_0xabf968(0x8ae)] && window[_0xabf968(0x8ae)].prototype && window[_0xabf968(0x377)] && window[_0xabf968(0x377)][_0xabf968(0x72d)]) {
                                    clearInterval(_0x1cc5b4);
                                    const _0xe6b2fc = window[_0xabf968(0x28a)][_0xabf968(0x72d)].Qj;
                                    window[_0xabf968(0x28a)][_0xabf968(0x72d)].Qj = function (_0x484adb, _0x22a464, _0x4e0951) {
                                        var _0x3ff940 = _0xabf968;
                                        this.Hj = window.decoder.ga(this.Hj, this.Fj, _0x22a464, window[_0x3ff940(0x867)][_0x3ff940(0x856)]), this.Ij = window[_0x3ff940(0x6d8)].ga(this.Ij, this.Gj, _0x22a464, 0.0025), this.Nj.Bg(this, _0x484adb, _0x22a464, _0x4e0951);
                                    };
                                    const _0x521b7e = window[_0xabf968(0x8ae)][_0xabf968(0x72d)].Bg;
                                    window[_0xabf968(0x8ae)][_0xabf968(0x72d)].Bg = function (_0x246937, _0x115545, _0x47c22a, _0x7b1f18) {
                                        var _0x3ad24d = _0xabf968;
                                        if (!_0x7b1f18(_0x246937.Hj, _0x246937.Ij)) {
                                            this.Wh.Cd();
                                            return;
                                        }
                                        var _0x57a503 = _0x246937.Kj * (0x1 + window.decoder.pa(_0x246937.Mj + _0x115545 / 0xc8) * 0.3);
                                        _0x246937.Ej ? this.Wh.Ad(_0x246937.Hj, _0x246937.Ij, window[_0x3ad24d(0x867)][_0x3ad24d(0x518)] * _0x246937.Jj, _0x246937.Lj * 0x1, window[_0x3ad24d(0x867)].PortionAura * _0x57a503, window.wftObjects[_0x3ad24d(0x679)] * _0x246937.Lj) : this.Wh.Ad(_0x246937.Hj, _0x246937.Ij, window.wftObjects[_0x3ad24d(0x224)] * _0x246937.Jj, _0x246937.Lj * 0x1, window[_0x3ad24d(0x867)][_0x3ad24d(0x28d)] * _0x57a503, window[_0x3ad24d(0x867)][_0x3ad24d(0x42a)] * _0x246937.Lj);
                                    };
                                    const _0x4de0bf = window[_0xabf968(0x377)][_0xabf968(0x72d)].ug;
                                    window[_0xabf968(0x377)][_0xabf968(0x72d)].ug = function (_0x36394c, _0x444933) {
                                        var _0x584675 = _0xabf968;
                                        const _0x11963f = _0x4de0bf[_0x584675(0x870)](this, arguments);
                                        if (this.Fh && typeof this.Fh.x !== _0x584675(0x76e) && window[_0x584675(0x57d)] && window.ooo.Mh) {
                                            const _0x4b5e49 = window[_0x584675(0x57d)].Mh.Oh();
                                            _0x4b5e49 && typeof _0x4b5e49._a !== _0x584675(0x76e) && (this.Fh.x = window.decoder.ja(this.Fh.x, _0x4b5e49._a, _0x444933, window[_0x584675(0x867)][_0x584675(0x78c)], 33.333));
                                        }
                                        return _0x11963f;
                                    }, !window[_0xabf968(0x617)] && (window[_0xabf968(0x617)] = function (_0x220372, _0x187755) {
                                        var _0x5c30e4 = _0xabf968;
                                        if (!document[_0x5c30e4(0x4e7)](_0x5c30e4(0x35e))) {
                                            const _0x26535f = document[_0x5c30e4(0x43a)]('div');
                                            _0x26535f.id = _0x5c30e4(0x35e), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x8cf)] = _0x5c30e4(0x60f), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x63c)] = _0x5c30e4(0x4bf), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x841)] = _0x5c30e4(0x67a), _0x26535f.style[_0x5c30e4(0x7cb)] = 'translate(-50%, -50%)', _0x26535f.style[_0x5c30e4(0x4e5)] = _0x187755 ? _0x5c30e4(0x4f2) : _0x5c30e4(0x3ea), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x494)] = _0x5c30e4(0x2a4), _0x26535f[_0x5c30e4(0x45d)].fontWeight = _0x5c30e4(0x7b5), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x3d2)] = _0x5c30e4(0x355), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x663)] = _0x5c30e4(0x6ce), _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x2fb)] = '0', _0x26535f[_0x5c30e4(0x45d)][_0x5c30e4(0x558)] = _0x5c30e4(0x578), document[_0x5c30e4(0x4dc)].appendChild(_0x26535f);
                                        }
                                        const _0x34d4fd = _0x187755 ? _0x2e052d.headshotMsgType : _0x2e052d.killMsgType,
                                            _0xba1f67 = document.getElementById('headshot-message');
                                        let _0x29c4c4 = '',
                                            _0x369f3a = _0x187755 ? _0x2e052d.showHeadshotName : _0x2e052d.showKillName,
                                            _0x333272 = _0x187755 ? _0x2e052d[_0x5c30e4(0x6c4)] : _0x2e052d[_0x5c30e4(0x69f)];
                                        _0x34d4fd === 'custom' ? _0x29c4c4 = _0x187755 ? _0x2e052d.headshotCustomText : _0x2e052d[_0x5c30e4(0x270)] : _0x29c4c4 = _0x187755 ? _0x2e052d[_0x5c30e4(0x4df)] : _0x2e052d.killMsg;
                                        _0x369f3a && _0x220372 && (_0x333272 === _0x5c30e4(0x7d1) ? _0x29c4c4 = _0x220372 + ' ' + _0x29c4c4 : _0x29c4c4 = _0x29c4c4 + ' ' + _0x220372);
                                        _0xba1f67[_0x5c30e4(0x866)] = _0x29c4c4, _0xba1f67[_0x5c30e4(0x45d)][_0x5c30e4(0x4e5)] = _0x187755 ? _0x5c30e4(0x4f2) : _0x5c30e4(0x3ea), _0xba1f67[_0x5c30e4(0x45d)][_0x5c30e4(0x2fb)] = '1';
                                        if (_0x187755 && wftObjects[_0x5c30e4(0x4d6)]) {
                                            const _0xe14693 = document[_0x5c30e4(0x4e7)]('s_h');
                                            _0xe14693 && (_0xe14693[_0x5c30e4(0x621)] = wftObjects.soundVolume / 0x64, _0xe14693[_0x5c30e4(0x4aa)] = 0x0, _0xe14693[_0x5c30e4(0x533)]());
                                        }
                                        setTimeout(function () {
                                            var _0x22f6bd = _0x5c30e4;
                                            _0xba1f67[_0x22f6bd(0x45d)][_0x22f6bd(0x2fb)] = '0';
                                        }, 0x7d0);
                                    }), console[_0xabf968(0x308)](_0xabf968(0x223));
                                }
                            }, 0x3e8);
                        }
                        setTimeout(_0xfbc282, 0x3e8), window[_0x4ea49e(0x251)] = function () {
                            var _0x596d64 = _0x4ea49e;
                            if (wftObjects.soundEnabled) {
                                const _0x57af4a = document.getElementById(_0x596d64(0x386));
                                _0x57af4a && (_0x57af4a[_0x596d64(0x621)] = wftObjects[_0x596d64(0x2ff)] / 0x64, _0x57af4a.currentTime = 0x0, _0x57af4a.play());
                            }
                        }, $(_0x4ea49e(0x1e2))[_0x4ea49e(0x57b)](function () {
                            var _0x4b5455 = _0x4ea49e;
                            localStorage[_0x4b5455(0x5f9)](_0x4b5455(0x70e)), localStorage[_0x4b5455(0x5f9)](_0x4b5455(0x202)), window[_0x4b5455(0x703)][_0x4b5455(0x252)]();
                        }), $(_0x4ea49e(0x8d8)).change(function (_0x3431ba) {
                            var _0x28f50e = _0x4ea49e;
                            const _0x3bf467 = _0x3431ba[_0x28f50e(0x29c)][_0x28f50e(0x487)][0x0];
                            if (_0x3bf467) {
                                const _0x1fb4c0 = new FileReader();
                                _0x1fb4c0[_0x28f50e(0x889)] = function (_0xd05397) {
                                    var _0x29c2d0 = _0x28f50e;
                                    try {
                                        const _0x14150a = _0xd05397[_0x29c2d0(0x29c)][_0x29c2d0(0x5d8)];
                                        JSON.parse(_0x14150a), _0x14150a[_0x29c2d0(0x7b4)]('\"wear\":') !== -0x1 ? localStorage[_0x29c2d0(0x510)]('custom_wear', _0x14150a) : localStorage[_0x29c2d0(0x510)]('custom_skin', _0x14150a), window[_0x29c2d0(0x703)][_0x29c2d0(0x252)]();
                                    } catch (_0x550007) {
                                        console[_0x29c2d0(0x89c)](_0x29c2d0(0x874), _0x550007);
                                    }
                                }, _0x1fb4c0[_0x28f50e(0x75f)](_0x3bf467);
                            }
                        });
                    }
                    window[_0x4ea49e(0x5ca)] && setTimeout(function () {
                        var _0xbcf859 = _0x4ea49e;
                        window[_0xbcf859(0x5ca)][_0xbcf859(0x3ec)]();
                    }, 0x1f4), setTimeout(() => {
                        var _0x39150b = _0x4ea49e;
                        window[_0x39150b(0x387)] && typeof window[_0x39150b(0x387)][_0x39150b(0x3ec)] === 'function' && window[_0x39150b(0x387)].init();
                    }, 0x3e8), $(_0x4ea49e(0x1fb)).on(_0x4ea49e(0x57b), function () {
                        var _0x36bcbb = _0x4ea49e;
                        window.sectorSystem && typeof window[_0x36bcbb(0x387)].initUserInterface === 'function' && setTimeout(() => window[_0x36bcbb(0x387)][_0x36bcbb(0x52d)](), 0x64);
                    });
                });
            };
        Ysw = async function (_0x2f9e9b) {
            var _0x4fd738 = _0x17b28a,
                _0x5435f5 = await _0x2f9e9b;
            try {
                _0x2e052d.gg = [], _0x2e052d.sg = [];
                var _0x10a537 = 0x0;
                if (_0xd7d6cd && (_0xd7d6cd = JSON[_0x4fd738(0x2b2)](_0xd7d6cd))[_0x4fd738(0x825)]) {
                    for (var _0x56c7a0 in _0xd7d6cd[_0x4fd738(0x825)][_0x4fd738(0x8bd)]) {
                        _0xd7d6cd.wear.textureDict[_0x56c7a0][_0x4fd738(0x764)][_0x4fd738(0x50e)](_0x4fd738(0x6aa)) == -0x1 && (_0xd7d6cd.wear[_0x4fd738(0x8bd)][_0x56c7a0][_0x4fd738(0x764)] = _0x4fd738(0x6aa) + _0xd7d6cd[_0x4fd738(0x825)][_0x4fd738(0x8bd)][_0x56c7a0][_0x4fd738(0x764)][_0x4fd738(0x7ba)](_0xd7d6cd[_0x4fd738(0x825)].textureDict[_0x56c7a0][_0x4fd738(0x764)][_0x4fd738(0x56a)] - _0x2e052d[_0x4fd738(0x882)], _0x2e052d[_0x4fd738(0x882)]) + _0xd7d6cd[_0x4fd738(0x825)][_0x4fd738(0x8bd)][_0x56c7a0][_0x4fd738(0x764)][_0x4fd738(0x7ba)](0x0, _0xd7d6cd[_0x4fd738(0x825)].textureDict[_0x56c7a0][_0x4fd738(0x764)][_0x4fd738(0x56a)] - _0x2e052d.c_v)), _0x5435f5[_0x4fd738(0x8bd)][_0x56c7a0] = _0xd7d6cd[_0x4fd738(0x825)][_0x4fd738(0x8bd)][_0x56c7a0];
                    };
                    for (let _0xda3e25 in _0xd7d6cd.wear[_0x4fd738(0x3a7)]) {
                        _0x5435f5.regionDict[_0xda3e25] = _0xd7d6cd.wear[_0x4fd738(0x3a7)][_0xda3e25], _0x5435f5[(_0x56c7a0 = _0x5435f5[_0x4fd738(0x3a7)][_0xda3e25])[_0x4fd738(0x455)]][_0x56c7a0.id] = _0x56c7a0[_0x4fd738(0x6db)], _0x5435f5[_0x56c7a0[_0x4fd738(0x89a)]][_0x4fd738(0x6a2)]([_0x56c7a0.id]);
                    }
                };
                if (_0x17b9a4) {
                    if ((_0x17b9a4 = JSON.parse(_0x17b9a4))[_0x4fd738(0x23b)]) {
                        var _0x75e5e6 = 0x0,
                            _0x24cf30 = false,
                            _0x22d5aa = 0x0;
                        for (var _0x56a976 in _0x17b9a4[_0x4fd738(0x23b)]['0']) {
                            for (var _0xfc09fb = _0x17b9a4[_0x4fd738(0x23b)]['1'][_0x56a976][_0x4fd738(0x3d3)]('|'), _0x19cbed = 0x0; _0x19cbed < _0xfc09fb[_0x4fd738(0x56a)]; _0x19cbed++) {
                                _0x5435f5[_0x4fd738(0x8bd)][_0x4fd738(0x3d0) + (_0x2e052d.g / 0x9 * 0x3e8 + _0x22d5aa)] = {
                                    'custom': true,
                                    'file': _0x4fd738(0x6aa) + _0xfc09fb[_0x19cbed][_0x4fd738(0x7ba)](_0xfc09fb[_0x19cbed][_0x4fd738(0x56a)] - _0x2e052d.c_v, _0x2e052d[_0x4fd738(0x882)]) + _0xfc09fb[_0x19cbed][_0x4fd738(0x7ba)](0x0, _0xfc09fb[_0x19cbed][_0x4fd738(0x56a)] - _0x2e052d.c_v)
                                }, _0x22d5aa++;
                            };
                            var _0x20b5e4 = _0x17b9a4[_0x4fd738(0x23b)]['2'][_0x56a976],
                                _0x3ca93b = 0x0,
                                _0xafd5bb = _0x4fd738(0x2b1),
                                _0x4428d5 = 'GIF SKIN',
                                _0x4033b0 = 0x0;
                            for (var _0x56c7a0 in _0x20b5e4) {
                                _0x4033b0++;
                            };
                            for (var _0x56c7a0 in _0x20b5e4) {
                                if (_0x3ca93b == 0x0) {
                                    var _0x30c4ca = {
                                        'id': _0x2e052d.g * 0x64 + _0x75e5e6,
                                        'base': [],
                                        'guest': false,
                                        'g': false,
                                        'price': 0x0,
                                        'priceBefore': 0x0,
                                        'nonbuyable': false,
                                        'prime': _0x4fd738(0x385),
                                        'glow': _0x20b5e4[_0x56c7a0]
                                    };
                                    for (var _0x19cbed = 0x0; _0x19cbed < _0x20b5e4[_0x56c7a0][_0x4fd738(0x56a)]; _0x19cbed++) {
                                        _0x30c4ca[_0x4fd738(0x44e)].push(_0x4fd738(0x1e5) + (_0x2e052d.g / 0x9 * 0x3e8 + _0x10a537) + '_' + (_0x20b5e4[_0x56c7a0].length - _0x19cbed));
                                    };
                                    _0x5435f5[_0x4fd738(0x541)][_0x4fd738(0x6a2)](_0x30c4ca);
                                    var _0x44fb59 = _0x2e052d.sg.indexOf(_0x30c4ca.id);
                                    _0x44fb59 == -0x1 && (_0x2e052d.sg.push(_0x30c4ca.id), _0x2e052d.gg[_0x4fd738(0x6a2)]({
                                        's': _0x2e052d.g / 0x9 * 0x3e8 + _0x10a537,
                                        'e': _0x2e052d.g / 0x9 * 0x3e8 + _0x10a537 + _0x4033b0 - 0x1,
                                        't': parseInt(_0x17b9a4.csg['0'][_0x56a976].substr(0x0, 0x1)) * 0x64,
                                        'r': _0x17b9a4[_0x4fd738(0x23b)]['0'][_0x56a976][_0x4fd738(0x7ba)](0x1, 0x1) == '1'
                                    }));
                                    if (_0x24cf30)
                                        for (var _0xa936e in _0x5435f5[_0x4fd738(0x21b)]) {
                                            _0x5435f5[_0x4fd738(0x21b)][_0xa936e].id == _0x4428d5 && _0x5435f5[_0x4fd738(0x21b)][_0xa936e][_0x4fd738(0x455)].push(_0x30c4ca.id);
                                        } else _0x5435f5[_0x4fd738(0x21b)][_0x4fd738(0x6a2)]({
                                            'isCustom': true,
                                            'id': _0x4428d5,
                                            'img': _0xafd5bb,
                                            'name': {
                                                'de': _0x4428d5,
                                                'en': _0x4428d5,
                                                'es': _0x4428d5,
                                                'fr': _0x4428d5,
                                                'uk': _0x4428d5
                                            },
                                            'list': [_0x30c4ca.id]
                                        }), _0x24cf30 = true;;
                                    _0x75e5e6++;
                                };
                                var _0x30c4ca = {
                                    'id': _0x2e052d.g / 0x9 * 0x3e8 + _0x10a537,
                                    'base': [],
                                    'guest': false,
                                    'g': true,
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': false,
                                    'prime': 'c_white',
                                    'glow': _0x20b5e4[_0x56c7a0]
                                };
                                for (var _0x19cbed = 0x0; _0x19cbed < _0x20b5e4[_0x56c7a0][_0x4fd738(0x56a)]; _0x19cbed++) {
                                    _0x30c4ca[_0x4fd738(0x44e)][_0x4fd738(0x6a2)](_0x4fd738(0x1e5) + _0x30c4ca.id + '_' + (_0x20b5e4[_0x56c7a0].length - _0x19cbed)), _0x5435f5[_0x4fd738(0x3a7)][_0x4fd738(0x1e5) + _0x30c4ca.id + '_' + (_0x19cbed + 0x1)] = {
                                        'texture': _0x4fd738(0x3d0) + _0x30c4ca.id,
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x19cbed || 0x0) * 0x63,
                                        'y': 0x0
                                    };
                                };
                                _0x5435f5[_0x4fd738(0x541)][_0x4fd738(0x6a2)](_0x30c4ca), _0x3ca93b++, _0x10a537++;
                            }
                        }
                    } else {
                        var _0x5e03b7 = [],
                            _0xafd5bb = _0x4fd738(0x320);
                        for (let _0x1b4dc9 in _0x17b9a4) {
                            if (_0x1b4dc9 != 'img') {
                                _0x17b9a4[_0x1b4dc9][_0x4fd738(0x8bd)][_0x1b4dc9][_0x4fd738(0x764)][_0x4fd738(0x50e)](_0x4fd738(0x6aa)) == -0x1 && (_0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9].file = _0x4fd738(0x6aa) + _0x17b9a4[_0x1b4dc9][_0x4fd738(0x8bd)][_0x1b4dc9][_0x4fd738(0x764)][_0x4fd738(0x7ba)](_0x17b9a4[_0x1b4dc9].textureDict[_0x1b4dc9][_0x4fd738(0x764)].length - _0x2e052d[_0x4fd738(0x882)], _0x2e052d[_0x4fd738(0x882)]) + _0x17b9a4[_0x1b4dc9][_0x4fd738(0x8bd)][_0x1b4dc9][_0x4fd738(0x764)][_0x4fd738(0x7ba)](0x0, _0x17b9a4[_0x1b4dc9][_0x4fd738(0x8bd)][_0x1b4dc9][_0x4fd738(0x764)].length - _0x2e052d[_0x4fd738(0x882)]));
                                _0x5435f5[_0x4fd738(0x8bd)][_0x1b4dc9] = _0x17b9a4[_0x1b4dc9][_0x4fd738(0x8bd)][_0x1b4dc9];
                                for (let _0x4c7857 in _0x17b9a4[_0x1b4dc9][_0x4fd738(0x3a7)]) {
                                    _0x5435f5[_0x4fd738(0x3a7)][_0x4c7857] = _0x17b9a4[_0x1b4dc9][_0x4fd738(0x3a7)][_0x4c7857];
                                };
                                _0x5435f5.skinArrayDict[_0x4fd738(0x6a2)](_0x17b9a4[_0x1b4dc9][_0x4fd738(0x323)]), _0x5e03b7[_0x4fd738(0x6a2)](_0x17b9a4[_0x1b4dc9][_0x4fd738(0x323)].id);
                            } else _0x17b9a4[_0x1b4dc9] != 'customer' && (_0xafd5bb = _0x17b9a4[_0x1b4dc9]);
                        };
                        _0x5435f5[_0x4fd738(0x21b)].push({
                            'isCustom': true,
                            'id': 'customer',
                            'img': _0xafd5bb,
                            'name': {
                                'de': _0x4fd738(0x58d),
                                'en': _0x4fd738(0x58d),
                                'es': 'Customer',
                                'fr': _0x4fd738(0x58d),
                                'uk': _0x4fd738(0x58d)
                            },
                            'list': _0x5e03b7
                        });
                    }
                };
                if (Array[_0x4fd738(0x4b8)](_0x2e052d.dg) && _0x2e052d.dg[_0x4fd738(0x56a)] > 0x0)
                    for (var _0x56c7a0 in _0x2e052d.dg) {
                        var _0x1d22a2 = _0x2e052d.dg[_0x56c7a0][_0x4fd738(0x3d3)]('|'),
                            _0x19531e = {
                                'g': _0x1d22a2['0']
                            };
                        await fetch(_0x4fd738(0x272), {
                            'headers': {
                                'Content-Type': _0x4fd738(0x469)
                            },
                            'method': _0x4fd738(0x79c),
                            'body': JSON[_0x4fd738(0x562)](_0x19531e)
                        }).then(async function (_0x27a68f) {
                            var _0x3a5220 = _0x4fd738;
                            _0x27a68f = await _0x27a68f.json(), _0x5435f5[_0x3a5220(0x8bd)][_0x3a5220(0x3d0) + _0x1d22a2['0'] + _0x3a5220(0x7fa)] = {
                                'custom': true,
                                'relativePath': _0x27a68f[_0x3a5220(0x23b)]['1']['0']
                            };
                            var _0x5e8b7f = _0x27a68f[_0x3a5220(0x23b)]['2']['0'],
                                _0x1a5689 = 0x0;
                            for (var _0x12e457 in _0x5e8b7f) {
                                _0x1a5689++;
                            };
                            _0x2e052d.sg.push(parseInt(_0x1d22a2['1'])), _0x2e052d.gg[_0x3a5220(0x6a2)]({
                                's': _0x2e052d.g / 0x9 * 0x3e8 + _0x10a537,
                                'e': _0x2e052d.g / 0x9 * 0x3e8 + _0x10a537 + _0x1a5689 - 0x1,
                                't': parseInt(_0x27a68f.csg['0']['0'][_0x3a5220(0x7ba)](0x0, 0x1)) * 0x64,
                                'r': _0x27a68f[_0x3a5220(0x23b)]['0']['0'][_0x3a5220(0x7ba)](0x1, 0x1) == '1'
                            });
                            var _0x34f9c2 = 0x0;
                            for (var _0x12e457 in _0x5e8b7f) {
                                var _0x14b6cd = {
                                    'id': _0x2e052d.g / 0x9 * 0x3e8 + _0x10a537,
                                    'base': [],
                                    'guest': false,
                                    'g': true,
                                    'price': 0x0,
                                    'priceBefore': 0x0,
                                    'nonbuyable': false,
                                    'prime': _0x3a5220(0x385),
                                    'glow': _0x5e8b7f[_0x12e457]
                                };
                                for (var _0x34ab8b = 0x0; _0x34ab8b < _0x5e8b7f[_0x12e457][_0x3a5220(0x56a)]; _0x34ab8b++) {
                                    _0x14b6cd[_0x3a5220(0x44e)][_0x3a5220(0x6a2)](_0x3a5220(0x1e5) + _0x14b6cd.id + '_' + (_0x5e8b7f[_0x12e457][_0x3a5220(0x56a)] - _0x34ab8b)), _0x5435f5[_0x3a5220(0x3a7)]['s_wft_' + _0x14b6cd.id + '_' + (_0x34ab8b + 0x1)] = {
                                        'texture': _0x3a5220(0x3d0) + _0x1d22a2['0'] + _0x3a5220(0x7fa),
                                        'h': 0x60,
                                        'w': 0x60,
                                        'x': (_0x34ab8b || 0x0) * 0x63,
                                        'y': (_0x34f9c2 || 0x0) * 0x63
                                    };
                                };
                                _0x5435f5.skinArrayDict[_0x3a5220(0x6a2)](_0x14b6cd), _0x10a537++, _0x34f9c2++;
                            }
                        })[_0x4fd738(0x48b)](function (_0x58e0ab) {});
                    }
            } catch (_0x3dca51) {
                localStorage.removeItem(_0x4fd738(0x70e)), localStorage[_0x4fd738(0x5f9)](_0x4fd738(0x202)), window[_0x4fd738(0x703)][_0x4fd738(0x252)]();
            };
            return _0x5435f5;
        };
        var _0x464645 = false;
        _0x464645 && (_0x464645 = false, s_h.pause()),
            function (_0x2c7f1f) {
                var _0x51fd8b = _0x17b28a;
                _0x2c7f1f.fn.wftsle = function (_0x1d0570) {
                    var _0x542225 = _0x1c2b;
                    if (_0x5c2a32[_0x1d0570]) return _0x5c2a32[_0x1d0570].apply(this, Array[_0x542225(0x72d)].slice.call(arguments, 0x1));
                    else {
                        if (typeof _0x1d0570 != _0x542225(0x22f) && _0x1d0570) {
                            _0x2c7f1f.error(_0x542225(0x3fa) + _0x1d0570 + _0x542225(0x437));
                            return;
                        } else return _0x5c2a32[_0x542225(0x3ec)][_0x542225(0x870)](this, arguments);
                    }
                };
                var _0x5c2a32 = {},
                    _0x76311c = {
                        'data': [],
                        'keepJSONItemsOnTop': false,
                        'width': 0x64,
                        'height': null,
                        'background': _0x51fd8b(0x259),
                        'selectText': '',
                        'defaultSelectedIndex': null,
                        'truncateDescription': true,
                        'imagePosition': _0x51fd8b(0x841),
                        'showSelectedHTML': true,
                        'clickOffToClose': true,
                        'embedCSS': true,
                        'onSelected': function () {}
                    };

                function _0x247ba4(_0x3c2a57, _0x3c5f4c) {
                    var _0x46b109 = _0x51fd8b,
                        _0x5730a1, _0x39b5e1, _0x362b55, _0x21bfd7, _0x147555 = _0x3c2a57[_0x46b109(0x384)](_0x46b109(0x299)),
                        _0x2678a2 = _0x3c2a57.find(_0x46b109(0x632)),
                        _0x1dcffd = _0x2678a2.siblings('.dd-selected-value');
                    _0x3c2a57[_0x46b109(0x626)]('.dd-options'), _0x2678a2[_0x46b109(0x3ba)]('.dd-pointer');
                    var _0x276197 = _0x3c2a57.find(_0x46b109(0x370)).eq(_0x3c5f4c),
                        _0x1c1cd0 = _0x276197.closest('li'),
                        _0x5bea68 = _0x147555.settings,
                        _0x537be6 = _0x147555[_0x46b109(0x708)][_0x46b109(0x384)][_0x3c5f4c];
                    _0x3c2a57[_0x46b109(0x626)]('.dd-option')[_0x46b109(0x37b)](_0x46b109(0x5e4)), _0x276197[_0x46b109(0x623)](_0x46b109(0x5e4)), _0x147555[_0x46b109(0x7c5)] = _0x3c5f4c, _0x147555[_0x46b109(0x3e1)] = _0x1c1cd0, _0x147555.selectedData = _0x537be6, _0x5bea68[_0x46b109(0x6bd)] ? _0x2678a2[_0x46b109(0x6bb)]((_0x537be6[_0x46b109(0x5cd)] ? '<img class=\"dd-selected-image' + (_0x5bea68[_0x46b109(0x560)] == _0x46b109(0x38b) ? _0x46b109(0x2f1) : '') + _0x46b109(0x5f6) + _0x537be6[_0x46b109(0x5cd)] + _0x46b109(0x648) : '') + (_0x537be6[_0x46b109(0x1c0)] ? _0x46b109(0x52c) + (_0x5bea68.truncateDescription ? ' dd-selected-description-truncated' : '') + _0x46b109(0x84a) + _0x537be6[_0x46b109(0x1c0)] + '</small>' : '')) : _0x2678a2[_0x46b109(0x6bb)](_0x537be6[_0x46b109(0x2df)]), _0x1dcffd.val(_0x537be6[_0x46b109(0x66a)]), _0x147555[_0x46b109(0x500)][_0x46b109(0x1ce)](_0x537be6[_0x46b109(0x66a)]), _0x3c2a57[_0x46b109(0x384)](_0x46b109(0x299), _0x147555), _0x15fc14(_0x3c2a57), _0x39b5e1 = (_0x5730a1 = _0x3c2a57)[_0x46b109(0x626)](_0x46b109(0x60c))[_0x46b109(0x5a1)](_0x46b109(0x2c1)), _0x362b55 = _0x5730a1[_0x46b109(0x626)](_0x46b109(0x883)), _0x21bfd7 = _0x5730a1[_0x46b109(0x626)](_0x46b109(0x8b6)), _0x362b55[_0x46b109(0x56a)] <= 0x0 && _0x21bfd7[_0x46b109(0x56a)] > 0x0 && _0x5730a1[_0x46b109(0x626)](_0x46b109(0x263)).css('lineHeight', _0x39b5e1), typeof _0x5bea68[_0x46b109(0x850)] == _0x46b109(0x3d7) && _0x5bea68[_0x46b109(0x850)][_0x46b109(0x670)](this, _0x147555);
                }

                function _0x2919f1(_0x469c4f) {
                    var _0x257431 = _0x51fd8b,
                        _0x436a23 = _0x469c4f.find('.dd-select'),
                        _0x1c6523 = _0x436a23.siblings('.dd-options'),
                        _0x238e6e = _0x436a23.find(_0x257431(0x3fe)),
                        _0x1578fe = _0x1c6523.is(_0x257431(0x6b5));
                    _0x2c7f1f(_0x257431(0x31a))[_0x257431(0x23d)](_0x1c6523)[_0x257431(0x794)](0x32), _0x2c7f1f(_0x257431(0x3fe)).removeClass(_0x257431(0x2c6)), _0x1578fe ? (_0x1c6523[_0x257431(0x794)](_0x257431(0x2e8)), _0x238e6e[_0x257431(0x37b)](_0x257431(0x2c6))) : (_0x1c6523[_0x257431(0x508)](_0x257431(0x2e8)), _0x238e6e.addClass(_0x257431(0x2c6))),
                        function _0x516d72(_0x5ce6d7) {
                            var _0x56977d = _0x257431;
                            _0x5ce6d7[_0x56977d(0x626)](_0x56977d(0x370))[_0x56977d(0x567)](function () {
                                var _0x14bdff = _0x56977d,
                                    _0x12b0ac = _0x2c7f1f(this),
                                    _0x33d226 = _0x12b0ac.css(_0x14bdff(0x2c1)),
                                    _0x4ec48d = _0x12b0ac[_0x14bdff(0x626)](_0x14bdff(0x81e)),
                                    _0x5d5ed5 = _0x5ce6d7[_0x14bdff(0x626)](_0x14bdff(0x512));
                                _0x4ec48d[_0x14bdff(0x56a)] <= 0x0 && _0x5d5ed5[_0x14bdff(0x56a)] > 0x0 && _0x12b0ac[_0x14bdff(0x626)]('.dd-option-text')[_0x14bdff(0x5a1)]('lineHeight', _0x33d226);
                            });
                        }(_0x469c4f);
                }

                function _0x15fc14(_0xcaf1f) {
                    var _0x3bda5b = _0x51fd8b;
                    _0xcaf1f[_0x3bda5b(0x626)](_0x3bda5b(0x242))[_0x3bda5b(0x794)](0x32), _0xcaf1f[_0x3bda5b(0x626)]('.dd-pointer')[_0x3bda5b(0x37b)](_0x3bda5b(0x2c6))[_0x3bda5b(0x37b)]('dd-pointer-up');
                }
                _0x5c2a32[_0x51fd8b(0x3ec)] = function (_0x2d4055) {
                    var _0x424f7c = _0x51fd8b,
                        _0x2d4055 = _0x2c7f1f[_0x424f7c(0x7da)]({}, _0x76311c, _0x2d4055);
                    return _0x2c7f1f(_0x424f7c(0x836)).length <= 0x0 && _0x2d4055.embedCSS && _0x2c7f1f(_0x424f7c(0x2e4))[_0x424f7c(0x529)](_0x424f7c(0x33a)), this[_0x424f7c(0x567)](function () {
                        var _0x51b50c = _0x424f7c,
                            _0x10676b = _0x2c7f1f(this);
                        if (!_0x10676b.data(_0x51b50c(0x299))) {
                            var _0x9d58e8 = [];
                            _0x2d4055[_0x51b50c(0x384)], _0x10676b[_0x51b50c(0x626)](_0x51b50c(0x490)).each(function () {
                                var _0x5927c9 = _0x51b50c,
                                    _0x554ec5 = _0x2c7f1f(this),
                                    _0x3dd991 = _0x554ec5[_0x5927c9(0x384)]();
                                _0x9d58e8[_0x5927c9(0x6a2)]({
                                    'text': _0x2c7f1f.trim(_0x554ec5.text()),
                                    'value': _0x554ec5.val(),
                                    'selected': _0x554ec5.is(_0x5927c9(0x62f)),
                                    'description': _0x3dd991[_0x5927c9(0x1c0)],
                                    'imageSrc': _0x3dd991[_0x5927c9(0x3f6)]
                                });
                            });
                            _0x2d4055[_0x51b50c(0x1f6)] ? _0x2c7f1f[_0x51b50c(0x58a)](_0x2d4055[_0x51b50c(0x384)], _0x9d58e8) : _0x2d4055[_0x51b50c(0x384)] = _0x2c7f1f[_0x51b50c(0x58a)](_0x9d58e8, _0x2d4055.data);
                            var _0x457b03 = _0x10676b,
                                _0x328b83 = _0x2c7f1f('<div id=\"' + _0x10676b[_0x51b50c(0x8b7)]('id') + _0x51b50c(0x5e6));
                            _0x10676b[_0x51b50c(0x5cf)](_0x328b83), (_0x10676b = _0x328b83)[_0x51b50c(0x623)](_0x51b50c(0x5d6))[_0x51b50c(0x1da)]('<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>')[_0x51b50c(0x1da)](_0x51b50c(0x207));
                            var _0x9d58e8 = _0x10676b[_0x51b50c(0x626)]('.dd-select'),
                                _0x45a0ed = _0x10676b.find(_0x51b50c(0x242));
                            _0x45a0ed[_0x51b50c(0x5a1)]({
                                'width': _0x2d4055.width
                            }), _0x9d58e8.css({
                                'width': _0x2d4055[_0x51b50c(0x821)],
                                'background': _0x2d4055[_0x51b50c(0x728)]
                            }), _0x10676b[_0x51b50c(0x5a1)]({
                                'width': _0x2d4055[_0x51b50c(0x821)]
                            });
                            _0x2d4055[_0x51b50c(0x2c1)] != null && _0x45a0ed[_0x51b50c(0x5a1)]({
                                'height': _0x2d4055[_0x51b50c(0x2c1)],
                                'overflow': 'auto'
                            });
                            _0x2c7f1f[_0x51b50c(0x567)](_0x2d4055[_0x51b50c(0x384)], function (_0x29fdf6, _0x53d96b) {
                                var _0x52ff51 = _0x51b50c;
                                _0x53d96b[_0x52ff51(0x68c)] && (_0x2d4055[_0x52ff51(0x301)] = _0x29fdf6), _0x45a0ed.append(_0x52ff51(0x35d) + (_0x53d96b[_0x52ff51(0x66a)] ? _0x52ff51(0x39a) + _0x53d96b.value + _0x52ff51(0x648) : '') + (_0x53d96b.imageSrc ? _0x52ff51(0x7d4) + (_0x2d4055[_0x52ff51(0x560)] == _0x52ff51(0x38b) ? _0x52ff51(0x2f1) : '') + _0x52ff51(0x5f6) + _0x53d96b[_0x52ff51(0x5cd)] + _0x52ff51(0x648) : '') + '</a></li>');
                            });
                            var _0x4b1ef6 = {
                                'settings': _0x2d4055,
                                'original': _0x457b03,
                                'selectedIndex': -0x1,
                                'selectedItem': null,
                                'selectedData': null
                            };
                            _0x10676b[_0x51b50c(0x384)](_0x51b50c(0x299), _0x4b1ef6), _0x2d4055[_0x51b50c(0x599)][_0x51b50c(0x56a)] > 0x0 && _0x2d4055[_0x51b50c(0x301)] == null ? _0x10676b.find('.dd-selected')[_0x51b50c(0x6bb)](_0x2d4055[_0x51b50c(0x599)]) : _0x247ba4(_0x10676b, _0x2d4055.defaultSelectedIndex != null && _0x2d4055[_0x51b50c(0x301)] >= 0x0 && _0x2d4055[_0x51b50c(0x301)] < _0x2d4055.data.length ? _0x2d4055[_0x51b50c(0x301)] : 0x0), _0x10676b.find(_0x51b50c(0x60c)).on(_0x51b50c(0x880), function () {
                                _0x2919f1(_0x10676b);
                            }), _0x10676b.find(_0x51b50c(0x370)).on(_0x51b50c(0x880), function () {
                                var _0x5879c4 = _0x51b50c;
                                _0x247ba4(_0x10676b, _0x2c7f1f(this)[_0x5879c4(0x792)]('li')[_0x5879c4(0x7a3)]());
                            }), _0x2d4055[_0x51b50c(0x682)] && (_0x45a0ed[_0x51b50c(0x623)](_0x51b50c(0x55c)), _0x10676b.on(_0x51b50c(0x880), function (_0x5d83e7) {
                                var _0x3d8030 = _0x51b50c;
                                _0x5d83e7[_0x3d8030(0x812)]();
                            }), _0x2c7f1f(_0x51b50c(0x4dc)).on('click', function () {
                                var _0x46c9f5 = _0x51b50c;
                                _0x2c7f1f(_0x46c9f5(0x31a))[_0x46c9f5(0x794)](0x32)[_0x46c9f5(0x3ba)](_0x46c9f5(0x60c)).find('.dd-pointer')[_0x46c9f5(0x37b)]('dd-pointer-up');
                            }));
                        }
                    });
                }, _0x5c2a32[_0x51fd8b(0x429)] = function (_0x1382d0) {
                    var _0x5317b5 = _0x51fd8b;
                    return this[_0x5317b5(0x567)](function () {
                        var _0x2978ff = _0x5317b5;
                        _0x1382d0[_0x2978ff(0x7a3)] !== undefined && _0x247ba4(_0x2c7f1f(this), _0x1382d0[_0x2978ff(0x7a3)]);
                    });
                }, _0x5c2a32[_0x51fd8b(0x1f3)] = function () {
                    var _0x1d3e38 = _0x51fd8b;
                    return this[_0x1d3e38(0x567)](function () {
                        var _0x185b32 = _0x1d3e38,
                            _0x5c61cf = _0x2c7f1f(this);
                        _0x5c61cf.data(_0x185b32(0x299)) && _0x2919f1(_0x5c61cf);
                    });
                }, _0x5c2a32[_0x51fd8b(0x869)] = function () {
                    return this.each(function () {
                        var _0x2999bc = _0x1c2b,
                            _0x3b1649 = _0x2c7f1f(this);
                        _0x3b1649[_0x2999bc(0x384)](_0x2999bc(0x299)) && _0x15fc14(_0x3b1649);
                    });
                }, _0x5c2a32[_0x51fd8b(0x588)] = function () {
                    var _0x16c3f7 = _0x51fd8b;
                    return this[_0x16c3f7(0x567)](function () {
                        var _0x33c518 = _0x16c3f7,
                            _0x1833cc = _0x2c7f1f(this),
                            _0x165f68 = _0x1833cc.data(_0x33c518(0x299));
                        if (_0x165f68) {
                            var _0x1fe6c3 = _0x165f68[_0x33c518(0x500)];
                            _0x1833cc[_0x33c518(0x3ac)]('ddslick').unbind('.ddslick')[_0x33c518(0x5cf)](_0x1fe6c3);
                        }
                    });
                };
            }(jQuery), _0x16f9d2() && _0x1a7a89.ba(_0x2e052d.s_l + _0x17b28a(0x769), _0x17b28a(0x502), function () {}), ooo[_0x17b28a(0x802)] = function () {
                var _0x5ccf33 = _0x17b28a,
                    _0x738cca = {},
                    _0x2e863a = {
                        'country': 'iq'
                    };
                _0x31462e && _0x31462e != 'iq' && (_0x2e863a[_0x5ccf33(0x413)] = _0x31462e), $[_0x5ccf33(0x64d)](_0x2e052d.s_l + _0x5ccf33(0x4a8), function (_0x3e2317) {
                    var _0x447497 = _0x5ccf33;
                    _0x738cca = _0x3e2317, fetch(_0x447497(0x25c), {
                        'headers': {
                            'Content-Type': _0x447497(0x469)
                        },
                        'method': _0x447497(0x79c),
                        'body': JSON[_0x447497(0x562)](_0x2e863a)
                    })[_0x447497(0x378)](async function (_0x54ba45) {
                        var _0x5423c0 = _0x447497;
                        for (let _0x7506cb in (_0x54ba45 = await _0x54ba45[_0x5423c0(0x80b)]())[_0x5423c0(0x8bd)]) {
                            for (let _0x5f22c3 in _0x54ba45[_0x5423c0(0x8bd)][_0x7506cb]) {
                                _0x5f22c3 === 'file' && (_0x54ba45.textureDict[_0x7506cb][_0x5f22c3] = _0x5423c0(0x6aa) + _0x54ba45[_0x5423c0(0x8bd)][_0x7506cb][_0x5f22c3].substr(_0x54ba45[_0x5423c0(0x8bd)][_0x7506cb][_0x5f22c3][_0x5423c0(0x56a)] - _0x2e052d[_0x5423c0(0x882)], _0x2e052d.c_v) + _0x54ba45[_0x5423c0(0x8bd)][_0x7506cb][_0x5f22c3][_0x5423c0(0x7ba)](0x0, _0x54ba45[_0x5423c0(0x8bd)][_0x7506cb][_0x5f22c3].length - _0x2e052d[_0x5423c0(0x882)]));
                            }
                        };
                        for (let _0x2a32b5 in _0x54ba45) {
                            _0x2a32b5 !== 'propertyList' && (Array[_0x5423c0(0x4b8)](_0x54ba45[_0x2a32b5]) ? _0x3e2317[_0x2a32b5] = _0x3e2317[_0x2a32b5][_0x5423c0(0x4bd)](_0x54ba45[_0x2a32b5]) : _0x3e2317[_0x2a32b5] = {
                                ..._0x3e2317[_0x2a32b5],
                                ..._0x54ba45[_0x2a32b5]
                            });
                        }
                    })[_0x447497(0x48b)](function (_0x468af6) {});
                });
            }, ooo[_0x17b28a(0x7f9)] = function (_0x725342) {
                var _0x371684 = {};
                (function (_0x8e58ab, _0x3aeaac) {
                    var _0x53dd71 = _0x1c2b;
                    for (var _0xc144bc in _0x8e58ab) {
                        _0x8e58ab[_0x53dd71(0x664)](_0xc144bc) && _0x3aeaac(_0xc144bc, _0x8e58ab[_0xc144bc]);
                    }
                }(_0x725342.textureDict, function (_0x2e53e9, _0x139793) {
                    var _0x15208e = _0x1c2b;
                    let _0x1d4b1b = _0x2e052d.s_l + _0x139793.relativePath;
                    !_0x139793.custom && (_0x1d4b1b = _0x2e052d[_0x15208e(0x403)] + _0x139793.relativePath);
                    try {
                        _0x371684[_0x2e53e9] = new PIXI.Texture(_0x1d4b1b);
                    } catch (_0x56b8f6) {}
                }));
            };
    });
}()), (function () {
    var _0x1b12f9 = _0xf7a4ea,
        _0x51fc3b = (function () {
            var _0xcfdb1c = true;
            return function (_0x2cdd05, _0x6ef003) {
                var _0x5104d9 = _0xcfdb1c ? function () {
                    if (_0x6ef003) {
                        var _0x2ddc59 = _0x6ef003.apply(_0x2cdd05, arguments);
                        return _0x6ef003 = null, _0x2ddc59;
                    }
                } : function () {};
                return _0xcfdb1c = false, _0x5104d9;
            };
        }());
    let _0x37146b = false,
        _0x28ef11 = false,
        _0x3f2b34 = 0x0;

    function _0x3e0850() {
        var _0x5a88d3 = _0x1c2b,
            _0x53f320 = _0x51fc3b(this, function () {
                var _0x385f05 = _0x1c2b,
                    _0x2e7420;
                try {
                    var _0x1abf92 = Function(_0x385f05(0x861) + '{}.constructor(\"return this\")( )' + ');');
                    _0x2e7420 = _0x1abf92();
                } catch (_0x2b8581) {
                    _0x2e7420 = window;
                }
                var _0x2c7c57 = _0x2e7420[_0x385f05(0x768)] = _0x2e7420.console || {},
                    _0xbc868 = [_0x385f05(0x308), _0x385f05(0x896), _0x385f05(0x5eb), 'error', _0x385f05(0x7f4), _0x385f05(0x8ad), 'trace'];
                for (var _0x7a8b55 = 0x0; _0x7a8b55 < _0xbc868[_0x385f05(0x56a)]; _0x7a8b55++) {
                    var _0x4fb067 = _0x51fc3b[_0x385f05(0x66c)][_0x385f05(0x72d)][_0x385f05(0x7ac)](_0x51fc3b),
                        _0x35ab66 = _0xbc868[_0x7a8b55],
                        _0x300e60 = _0x2c7c57[_0x35ab66] || _0x4fb067;
                    _0x4fb067.__proto__ = _0x51fc3b[_0x385f05(0x7ac)](_0x51fc3b), _0x4fb067[_0x385f05(0x3ae)] = _0x300e60[_0x385f05(0x3ae)][_0x385f05(0x7ac)](_0x300e60), _0x2c7c57[_0x35ab66] = _0x4fb067;
                }
            });
        _0x53f320();
        if (window[_0x5a88d3(0x57d)] && window[_0x5a88d3(0x57d)].Mh && typeof window[_0x5a88d3(0x57d)].Mh.Dq === _0x5a88d3(0x3d7)) return true;
        return false;
    }

    function _0x3a1ad9() {
        var _0x67a4f2 = _0x1c2b;
        const _0x47107c = Date[_0x67a4f2(0x4f0)]();
        if (_0x28ef11 || _0x47107c - _0x3f2b34 < 0x3e8) return;
        _0x28ef11 = true, _0x3f2b34 = _0x47107c;
        try {
            typeof window[_0x67a4f2(0x3e3)] !== _0x67a4f2(0x76e) && (window[_0x67a4f2(0x3e3)][_0x67a4f2(0x484)] = true), typeof window[_0x67a4f2(0x57d)].Mh.gr === _0x67a4f2(0x3d7) && window[_0x67a4f2(0x57d)].Mh.gr(), setTimeout(function () {
                var _0x488434 = _0x67a4f2;
                try {
                    const _0x5368e2 = document.getElementById(_0x488434(0x35a)) ? document[_0x488434(0x4e7)]('port_id_s')[_0x488434(0x66a)] || '' : '',
                        _0x3e08d6 = document.getElementById('port_name_s') ? document[_0x488434(0x4e7)](_0x488434(0x789))[_0x488434(0x66a)] || 'Player' : _0x488434(0x88e);
                    window[_0x488434(0x57d)].Mh.Dq(_0x5368e2, _0x3e08d6), setTimeout(function () {
                        _0x28ef11 = false;
                    }, 0x3e8);
                } catch (_0x2f50d2) {
                    _0x28ef11 = false;
                }
            }, 0x12c);
        } catch (_0x2a1eab) {
            _0x28ef11 = false;
        }
    }

    function _0x15423a() {
        var _0x4f11fa = _0x1c2b;
        _0x37146b = !_0x37146b, typeof window[_0x4f11fa(0x3e3)] !== _0x4f11fa(0x76e) && (window.myGameSettings.unlimitedRespawn = _0x37146b);
    }
    document[_0x1b12f9(0x49c)](_0x1b12f9(0x6e9), function (_0x474482) {
        var _0x511128 = _0x1b12f9;
        (_0x474482[_0x511128(0x614)] === 'F8' || _0x474482.keyCode === 0x77) && _0x15423a();
        if (_0x37146b && (_0x474482.key[_0x511128(0x627)]() === 'r' || _0x474482[_0x511128(0x5f4)] === 0x52)) {
            if (_0x3e0850()) _0x474482.preventDefault(), _0x474482[_0x511128(0x812)](), _0x3a1ad9();
            else {}
        }
    }, true);
    if (!_0x3e0850()) {
        const _0x33ea68 = setInterval(function () {
            _0x3e0850() && clearInterval(_0x33ea68);
        }, 0x3e8);
    } else {}
}());


// === Anti-AFK Patch for Wormate.io ===
// Bu kod, yılanın düz giderken patlamasını engeller
// Joystick yönü sürekli olarak ufak değiştirilerek oyun kandırılır

(function () {
    let fakeAngle = 0;
    let directionDelta = 0.05; // Sağa sola hafif kayma miktarı

    function simulateHeadMovement() {
        // Dalgalı açı değişimi
        fakeAngle += directionDelta;

        // Aşırı kaymayı engelle
        if (fakeAngle > 1 || fakeAngle < -1) directionDelta *= -1;

        // Eğer global joystick nesnesi varsa onun açısını oynat
        if (window.joystick) {
            window.joystick.angle = fakeAngle;
        }

        // Alternatif olarak hareket verisi değiştir
        if (window.mouse_controller && typeof window.mouse_controller.set_position === 'function') {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offset = 50 * Math.sin(Date.now() / 300);
            window.mouse_controller.set_position(centerX + offset, centerY);
        }
    }

    // Her 200ms'de bir kafa hareketi simüle et
    setInterval(simulateHeadMovement, 200);
})();
