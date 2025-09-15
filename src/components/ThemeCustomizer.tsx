import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, RotateCcw } from 'lucide-react';

const ThemeCustomizer = () => {
  const { colors, updateColors, resetToDefaults } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (colorType: 'primary' | 'secondary', value: string) => {
    updateColors({ [colorType]: value });
  };

  const presetThemes = [
    {
      name: 'Default Professional',
      primary: '#2c5282',
      secondary: '#38a169',
    },
    {
      name: 'Elegant Blue',
      primary: '#1e40af',
      secondary: '#0891b2',
    },
    {
      name: 'Modern Green',
      primary: '#047857',
      secondary: '#059669',
    },
    {
      name: 'Sophisticated Purple',
      primary: '#7c3aed',
      secondary: '#a855f7',
    },
    {
      name: 'Corporate Navy',
      primary: '#1e3a8a',
      secondary: '#3b82f6',
    },
    {
      name: 'Warm Orange',
      primary: '#c2410c',
      secondary: '#ea580c',
    }
  ];

  return (
    <>
      {/* Floating Theme Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="hero"
            size="icon"
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-hero"
            aria-label="Customize theme"
          >
            <Palette className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        
        <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Theme Customizer
            </SheetTitle>
            <SheetDescription>
              Customize the primary and secondary colors to match your brand.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-6 py-6">
            {/* Color Pickers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Color Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center space-x-3">
                    <input
                      id="primary-color"
                      type="color"
                      value={colors.primary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="w-12 h-12 rounded-md border border-input cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{colors.primary.toUpperCase()}</div>
                      <div className="text-xs text-muted-foreground">Used for buttons, links, and accents</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex items-center space-x-3">
                    <input
                      id="secondary-color"
                      type="color"
                      value={colors.secondary}
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="w-12 h-12 rounded-md border border-input cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{colors.secondary.toUpperCase()}</div>
                      <div className="text-xs text-muted-foreground">Used for highlights and gradients</div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={resetToDefaults}
                  className="w-full mt-4"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Defaults
                </Button>
              </CardContent>
            </Card>

            {/* Preset Themes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preset Themes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {presetThemes.map((theme, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() => updateColors({ primary: theme.primary, secondary: theme.secondary })}
                      className="justify-between h-auto p-3"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: theme.primary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: theme.secondary }}
                          />
                        </div>
                        <span className="text-sm font-medium">{theme.name}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" className="w-full">
                  Primary Button Preview
                </Button>
                <Button variant="trust" className="w-full">
                  Secondary Button Preview
                </Button>
                <div className="p-4 rounded-lg gradient-hero text-white text-center font-semibold">
                  Hero Gradient Preview
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold gradient-text">
                    Gradient Text Preview
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ThemeCustomizer;