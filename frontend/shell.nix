

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
}
