import fsPromises from 'fs/promises';
import path from 'path';
import SiderBar from "@/components/siderBar";
import {metadata} from "@/app/layout";

export default async function Kontakt() {
    metadata.title="Kontakt";
    return (
        <>
            <title>{metadata.title}</title>
        </>
    );
}