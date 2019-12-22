import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LinkMixin extends Vue {
    @Prop({ type: String, required: true })
    readonly icon!: string;

    @Prop({ type: String, required: true })
    readonly href!: string;

    @Prop({ type: String, required: true })
    readonly title!: string;
}