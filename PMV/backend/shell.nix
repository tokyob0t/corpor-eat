{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = with pkgs; [
    bun
    vue-language-server
    typescript-language-server
  ];
}
