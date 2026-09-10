import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

function ComponentDemo() {
  return (
    <div className="max-w-2xl mx-auto p-8 space-y-10">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>

        {/* Komponen Button */}
        <div className="flex gap-4">
          {/* State: Default */}
          <Button>Simpan</Button>

          {/* State: Loading */}
          <Button disabled>
            <Loader2 className="animate-spin" />
            Menyimpan...
          </Button>
        </div>
      </section>

      {/* Komponen Input */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Input</h2>

        <div className="space-y-4 max-w-md">
          {/* State: Default */}
          <div className="space-y-2">
            <label htmlFor="email">Email</label>

            <Input id="email" placeholder="Masukkan email" />
          </div>

          {/* State: Error */}
          <div className="space-y-2">
            <label htmlFor="email">Email</label>

            <Input
              id="email"
              placeholder="Masukkan email"
              aria-invalid="true"
            />

            <p className="text-sm text-destructive">Email tidak valid.</p>
          </div>
        </div>
      </section>

      {/* Komponen Select */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Select</h2>

        <div className="space-y-4 max-w-md">
          {/* State: Default */}
          <div className="space-y-2">
            <label>Kategori</label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="action">Action</SelectItem>

                <SelectItem value="romance">Romance</SelectItem>

                <SelectItem value="comedy">Comedy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State: Error */}
          <div className="space-y-2">
            <label>Kategori</label>

            <Select>
              <SelectTrigger aria-invalid="true">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="action">Action</SelectItem>

                <SelectItem value="romance">Romance</SelectItem>

                <SelectItem value="comedy">Comedy</SelectItem>
              </SelectContent>
            </Select>

            <p className="text-sm text-destructive">Kategori wajib dipilih.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComponentDemo;
