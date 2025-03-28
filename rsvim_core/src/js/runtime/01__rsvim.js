var Rsvim = (function () {
    function Rsvim() {
        this.opt = new RsvimOpt();
    }
    return Rsvim;
}());
export { Rsvim };
var RsvimOpt = (function () {
    function RsvimOpt() {
    }
    Object.defineProperty(RsvimOpt.prototype, "wrap", {
        get: function () {
            return __InternalRsvimGlobalObject.opt_get_wrap();
        },
        set: function (value) {
            if (typeof value !== "boolean") {
                throw new Error("\"Rsvim.opt.wrap\" must be a boolean value, but found ".concat(value, " (").concat(typeof value, ")"));
            }
            __InternalRsvimGlobalObject.opt_set_wrap(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RsvimOpt.prototype, "lineBreak", {
        get: function () {
            return __InternalRsvimGlobalObject.opt_get_line_break();
        },
        set: function (value) {
            if (typeof value !== "boolean") {
                throw new Error("\"Rsvim.opt.lineBreak\" must be a boolean value, but found ".concat(value, " (").concat(typeof value, ")"));
            }
            __InternalRsvimGlobalObject.opt_set_line_break(value);
        },
        enumerable: false,
        configurable: true
    });
    return RsvimOpt;
}());
export { RsvimOpt };
(function (globalThis) {
    globalThis.Rsvim = new Rsvim();
})(globalThis);
