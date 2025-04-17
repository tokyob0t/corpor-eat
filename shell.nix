{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  name = "corpor-eat-dev-env";

  buildInputs =
    (with pkgs; [
      nodejs_20
      bun
      git
      biome
    ])
    ++ (with pkgs.nodePackages; [
      typescript
      typescript-language-server
    ]);
}
