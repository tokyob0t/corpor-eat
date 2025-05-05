{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  name = "corpor-eat-dev-env";

  buildInputs = with pkgs; [
    bun
    git
    biome
    typescript
    vue-language-server
    typescript-language-server
    emmet-language-server
  ];

  shellHook = ''
    if [ ! -d "node_modules" ]; then
      echo "Instalando dependencias..."
      bun install
    fi
  '';
}
