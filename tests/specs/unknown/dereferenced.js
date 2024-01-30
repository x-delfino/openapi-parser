module.exports = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    description: "This API references external files that aren't JSON or YAML",
    title: 'Unknown file types',
  },
  paths: {
    '/files/text': {
      get: {
        responses: {
          200: {
            description: 'A text file',
            schema: {
              type: 'file',
              default: 'Hello\nWorld\n',
            },
          },
        },
      },
    },
    '/files/html': {
      get: {
        responses: {
          200: {
            description: 'An HTML page',
            schema: {
              type: 'file',
              default:
                '<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="utf-8">\n    <style>\n        html {\n            color: #888;\n            font-family: sans-serif;\n            height: 100%;\n            width: 100%;\n        }\n    </style>\n</head>\n<body>\n    <h1>Hello World</h1>\n</body>\n</html>\n',
            },
          },
        },
      },
    },
    '/files/blank': {
      get: {
        responses: {
          200: {
            description: 'A blank file',
            schema: {
              type: 'file',
              default: undefined,
            },
          },
        },
      },
    },
    '/files/binary': {
      get: {
        responses: {
          200: {
            description: 'A binary file',
            schema: {
              type: 'file',
              default: {
                type: 'Buffer',
                data: [
                  137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82,
                  0, 0, 0, 32, 0, 0, 0, 32, 8, 6, 0, 0, 0, 115, 122, 122, 244,
                  0, 0, 0, 4, 115, 66, 73, 84, 8, 8, 8, 8, 124, 8, 100, 136, 0,
                  0, 0, 25, 116, 69, 88, 116, 83, 111, 102, 116, 119, 97, 114,
                  101, 0, 119, 119, 119, 46, 105, 110, 107, 115, 99, 97, 112,
                  101, 46, 111, 114, 103, 155, 238, 60, 26, 0, 0, 9, 170, 73,
                  68, 65, 84, 88, 133, 197, 151, 125, 76, 84, 103, 22, 198, 127,
                  247, 206, 64, 7, 44, 227, 0, 149, 15, 97, 176, 34, 139, 174,
                  182, 86, 49, 46, 69, 148, 197, 80, 234, 118, 73, 181, 49, 213,
                  38, 146, 172, 218, 221, 86, 151, 98, 106, 218, 198, 212, 102,
                  179, 180, 221, 173, 154, 102, 187, 182, 113, 171, 181, 113,
                  165, 145, 138, 41, 152, 173, 160, 130, 73, 149, 116, 23, 131,
                  34, 42, 203, 48, 128, 195, 135, 128, 200, 200, 71, 103, 24, 6,
                  24, 135, 59, 115, 239, 187, 127, 32, 179, 69, 112, 179, 127,
                  108, 178, 111, 114, 63, 222, 251, 158, 155, 243, 188, 207,
                  121, 206, 57, 247, 74, 66, 8, 254, 159, 67, 63, 211, 195, 95,
                  231, 189, 149, 168, 73, 186, 95, 161, 73, 166, 255, 181, 67,
                  73, 214, 106, 131, 252, 35, 167, 143, 30, 61, 234, 3, 144, 30,
                  102, 96, 123, 222, 158, 143, 146, 147, 158, 124, 119, 237,
                  154, 52, 121, 254, 188, 120, 38, 215, 255, 125, 157, 60, 129,
                  16, 26, 2, 129, 16, 160, 169, 26, 154, 208, 208, 84, 13, 191,
                  234, 71, 211, 52, 132, 166, 161, 106, 19, 207, 84, 77, 195,
                  229, 114, 209, 216, 210, 70, 75, 235, 237, 65, 191, 207, 187,
                  234, 216, 231, 127, 110, 151, 127, 236, 124, 199, 142, 119,
                  103, 199, 205, 141, 126, 107, 99, 78, 150, 92, 114, 170, 136,
                  47, 142, 28, 102, 206, 19, 145, 220, 106, 105, 102, 87, 254,
                  27, 92, 175, 187, 70, 76, 244, 28, 244, 122, 153, 195, 135,
                  255, 194, 167, 159, 30, 100, 86, 104, 40, 67, 78, 7, 123, 246,
                  188, 195, 217, 242, 50, 226, 226, 98, 145, 16, 252, 225, 195,
                  15, 248, 246, 219, 191, 49, 47, 193, 76, 92, 92, 44, 229, 101,
                  223, 114, 170, 248, 107, 150, 36, 63, 201, 218, 213, 63, 155,
                  51, 236, 246, 252, 94, 146, 164, 160, 41, 0, 20, 89, 125, 33,
                  115, 117, 170, 225, 240, 225, 195, 188, 252, 242, 203, 132,
                  133, 133, 81, 89, 89, 201, 234, 213, 171, 201, 201, 201, 161,
                  181, 181, 21, 33, 4, 37, 37, 37, 44, 90, 180, 136, 212, 212,
                  84, 10, 11, 11, 73, 78, 78, 102, 199, 142, 29, 180, 180, 180,
                  32, 132, 32, 46, 46, 142, 221, 187, 119, 211, 212, 212, 132,
                  170, 170, 88, 44, 22, 70, 71, 71, 217, 185, 115, 39, 199, 142,
                  29, 35, 121, 193, 60, 34, 35, 35, 54, 0, 115, 166, 0, 64, 150,
                  12, 115, 99, 162, 25, 24, 24, 32, 41, 41, 137, 212, 212, 84,
                  110, 222, 188, 137, 78, 167, 99, 246, 236, 217, 1, 179, 186,
                  186, 58, 150, 46, 93, 202, 138, 21, 43, 104, 105, 105, 65,
                  146, 36, 34, 35, 35, 145, 36, 41, 16, 174, 240, 240, 112, 36,
                  73, 66, 85, 85, 26, 26, 26, 152, 55, 111, 30, 209, 209, 209,
                  184, 92, 46, 244, 122, 61, 225, 225, 70, 3, 16, 63, 21, 0, 32,
                  73, 18, 70, 163, 17, 69, 81, 232, 233, 233, 33, 33, 33, 1, 33,
                  196, 20, 45, 44, 88, 176, 128, 190, 190, 62, 238, 222, 189,
                  139, 217, 108, 158, 178, 174, 170, 42, 170, 170, 162, 105, 26,
                  154, 166, 161, 170, 42, 137, 137, 137, 220, 187, 119, 143,
                  251, 247, 239, 19, 18, 18, 50, 225, 72, 32, 1, 97, 211, 0, 8,
                  33, 216, 186, 117, 43, 123, 247, 238, 165, 170, 170, 138, 180,
                  180, 52, 26, 26, 26, 40, 42, 42, 162, 162, 162, 130, 154, 154,
                  26, 54, 111, 222, 76, 97, 97, 33, 95, 125, 245, 21, 25, 25,
                  25, 216, 237, 118, 62, 249, 228, 19, 234, 234, 234, 40, 43,
                  43, 195, 233, 116, 178, 127, 255, 126, 154, 154, 154, 56, 125,
                  250, 52, 75, 150, 44, 193, 102, 179, 81, 80, 80, 192, 154, 53,
                  107, 16, 98, 194, 251, 180, 44, 216, 254, 198, 158, 109, 239,
                  228, 255, 166, 112, 241, 162, 159, 160, 40, 10, 30, 143, 7,
                  163, 209, 136, 16, 130, 193, 193, 65, 52, 77, 35, 56, 56, 24,
                  163, 209, 136, 170, 170, 184, 92, 46, 194, 195, 195, 3, 235,
                  62, 159, 15, 89, 150, 49, 26, 141, 56, 28, 14, 198, 199, 199,
                  17, 66, 96, 50, 153, 240, 249, 124, 252, 240, 195, 15, 1, 118,
                  75, 206, 92, 240, 237, 255, 96, 239, 11, 211, 24, 0, 24, 24,
                  24, 160, 178, 178, 18, 175, 215, 139, 16, 2, 167, 211, 73,
                  109, 109, 45, 138, 162, 96, 52, 26, 1, 184, 121, 243, 38, 253,
                  253, 253, 8, 33, 80, 85, 21, 187, 221, 78, 111, 111, 47, 70,
                  163, 145, 177, 177, 49, 234, 235, 235, 233, 239, 239, 39, 60,
                  60, 28, 175, 215, 203, 149, 43, 87, 232, 233, 233, 153, 72,
                  79, 33, 224, 129, 94, 166, 21, 34, 33, 4, 109, 109, 109, 156,
                  62, 125, 154, 129, 129, 1, 94, 125, 245, 85, 58, 59, 59, 57,
                  119, 238, 28, 54, 155, 141, 221, 187, 119, 83, 81, 81, 193,
                  213, 171, 87, 113, 56, 28, 228, 228, 228, 96, 48, 24, 40, 43,
                  43, 67, 175, 215, 99, 179, 217, 120, 246, 217, 103, 169, 175,
                  175, 167, 173, 173, 141, 131, 7, 15, 50, 54, 54, 134, 205,
                  102, 163, 166, 166, 134, 67, 135, 14, 77, 145, 220, 140, 12,
                  164, 165, 165, 145, 153, 153, 25, 0, 180, 124, 249, 114, 214,
                  173, 91, 135, 36, 73, 8, 33, 168, 170, 170, 98, 195, 134, 13,
                  228, 229, 229, 113, 233, 210, 37, 170, 171, 171, 201, 202,
                  202, 34, 47, 47, 143, 234, 234, 106, 162, 162, 162, 216, 178,
                  101, 11, 122, 253, 196, 254, 34, 34, 34, 200, 205, 205, 37,
                  56, 56, 24, 89, 150, 209, 233, 116, 129, 140, 153, 145, 129,
                  71, 29, 147, 235, 62, 159, 15, 189, 94, 143, 166, 105, 0, 248,
                  253, 126, 244, 122, 61, 63, 214, 211, 228, 189, 78, 167, 67,
                  211, 52, 100, 121, 98, 175, 65, 65, 65, 83, 236, 102, 236, 5,
                  253, 253, 253, 220, 190, 125, 27, 33, 4, 46, 151, 11, 159,
                  207, 71, 91, 91, 27, 118, 187, 157, 193, 193, 65, 178, 178,
                  178, 40, 46, 46, 70, 150, 101, 82, 82, 82, 136, 141, 141, 165,
                  180, 180, 148, 184, 184, 56, 86, 172, 88, 129, 162, 40, 88,
                  173, 86, 156, 78, 39, 118, 187, 157, 152, 152, 24, 44, 22, 11,
                  110, 183, 27, 187, 221, 78, 84, 84, 212, 100, 57, 151, 166, 3,
                  16, 130, 209, 209, 81, 162, 162, 162, 240, 249, 124, 116, 117,
                  117, 17, 25, 25, 73, 72, 72, 8, 102, 179, 153, 206, 206, 78,
                  178, 179, 179, 209, 233, 116, 8, 33, 88, 185, 114, 37, 161,
                  161, 161, 8, 33, 112, 56, 28, 164, 167, 167, 163, 105, 26,
                  125, 125, 125, 100, 100, 100, 208, 218, 218, 74, 76, 76, 12,
                  221, 221, 221, 100, 103, 103, 99, 179, 217, 136, 141, 141,
                  125, 180, 8, 17, 130, 249, 243, 231, 147, 151, 151, 55, 133,
                  246, 215, 95, 127, 61, 160, 120, 33, 4, 153, 153, 153, 83, 66,
                  147, 154, 154, 58, 133, 218, 109, 219, 182, 5, 52, 51, 57,
                  159, 180, 31, 25, 25, 9, 216, 77, 19, 161, 42, 84, 206, 159,
                  63, 79, 118, 118, 54, 101, 101, 101, 8, 33, 176, 90, 173, 236,
                  218, 181, 139, 157, 59, 119, 50, 48, 48, 192, 245, 235, 215,
                  121, 229, 149, 87, 56, 114, 228, 8, 0, 125, 125, 125, 188,
                  253, 246, 219, 228, 231, 231, 211, 217, 217, 201, 216, 216,
                  24, 123, 246, 236, 97, 215, 174, 93, 52, 54, 54, 162, 170, 42,
                  239, 189, 247, 30, 111, 190, 249, 38, 181, 181, 181, 19, 34,
                  124, 20, 0, 159, 79, 37, 45, 45, 141, 141, 27, 55, 226, 112,
                  56, 80, 85, 149, 83, 167, 78, 177, 101, 203, 22, 114, 114,
                  114, 40, 47, 47, 103, 249, 242, 229, 188, 246, 218, 107, 140,
                  140, 140, 32, 73, 18, 151, 46, 93, 34, 61, 61, 157, 252, 252,
                  124, 138, 139, 139, 185, 118, 237, 26, 79, 63, 253, 52, 7, 14,
                  28, 160, 168, 168, 8, 171, 213, 138, 217, 108, 230, 208, 161,
                  67, 156, 60, 121, 18, 157, 78, 247, 104, 6, 252, 126, 63, 189,
                  189, 189, 56, 157, 78, 250, 250, 250, 232, 234, 234, 162, 181,
                  181, 21, 163, 209, 72, 84, 84, 20, 237, 237, 237, 140, 143,
                  143, 35, 203, 50, 170, 170, 226, 247, 251, 185, 117, 235, 22,
                  102, 179, 153, 196, 196, 68, 236, 118, 59, 237, 237, 237, 36,
                  36, 36, 48, 103, 206, 28, 28, 14, 71, 64, 7, 161, 161, 161,
                  120, 189, 94, 84, 85, 13, 164, 225, 244, 16, 168, 234, 148,
                  249, 248, 248, 56, 115, 231, 206, 165, 173, 173, 141, 198,
                  198, 70, 18, 18, 18, 80, 20, 37, 144, 130, 178, 44, 243, 204,
                  51, 207, 208, 221, 221, 77, 71, 71, 7, 11, 23, 46, 100, 217,
                  178, 101, 116, 116, 116, 4, 154, 85, 74, 74, 10, 157, 157,
                  157, 184, 221, 110, 194, 195, 195, 9, 10, 10, 66, 25, 191, 63,
                  246, 72, 0, 22, 139, 133, 171, 87, 175, 114, 249, 242, 101,
                  26, 27, 27, 217, 180, 105, 19, 103, 207, 158, 165, 185, 185,
                  153, 244, 244, 116, 186, 186, 186, 40, 45, 45, 197, 98, 177,
                  112, 241, 226, 69, 94, 124, 241, 69, 44, 22, 11, 37, 37, 37,
                  172, 95, 191, 158, 244, 244, 116, 250, 251, 251, 249, 236,
                  179, 207, 216, 188, 121, 51, 75, 151, 46, 5, 224, 253, 247,
                  223, 39, 55, 55, 151, 214, 142, 46, 173, 185, 229, 86, 51,
                  224, 159, 214, 140, 182, 110, 94, 95, 24, 246, 120, 8, 138,
                  162, 4, 118, 104, 48, 24, 208, 235, 245, 72, 146, 132, 193,
                  96, 32, 40, 40, 8, 77, 211, 208, 235, 245, 4, 7, 7, 19, 18,
                  18, 130, 78, 167, 67, 85, 213, 128, 157, 36, 73, 244, 245, 15,
                  210, 216, 98, 67, 211, 38, 178, 199, 167, 40, 184, 71, 70,
                  208, 84, 149, 130, 130, 223, 125, 120, 175, 167, 187, 112, 90,
                  26, 170, 154, 138, 215, 235, 165, 188, 188, 156, 152, 152, 24,
                  50, 50, 50, 240, 251, 253, 156, 57, 115, 6, 147, 201, 196,
                  134, 13, 27, 16, 66, 112, 246, 236, 89, 36, 73, 34, 55, 55,
                  151, 193, 193, 65, 138, 138, 138, 88, 182, 108, 89, 160, 100,
                  215, 92, 187, 65, 66, 124, 28, 191, 200, 250, 57, 138, 162,
                  160, 40, 10, 67, 67, 67, 12, 13, 13, 113, 178, 164, 236, 238,
                  189, 158, 238, 6, 160, 111, 90, 8, 52, 77, 112, 226, 196, 9,
                  162, 163, 163, 169, 171, 171, 163, 161, 161, 129, 210, 210,
                  82, 130, 131, 131, 233, 232, 232, 224, 226, 197, 139, 84, 86,
                  86, 226, 114, 185, 240, 120, 60, 20, 21, 21, 97, 48, 24, 48,
                  155, 205, 84, 84, 84, 160, 105, 26, 150, 70, 43, 79, 68, 68,
                  144, 248, 100, 66, 64, 43, 99, 99, 99, 184, 221, 110, 46, 215,
                  222, 240, 254, 245, 139, 67, 71, 129, 118, 33, 132, 119, 70,
                  13, 220, 185, 115, 135, 37, 75, 150, 176, 118, 237, 90, 234,
                  235, 235, 177, 90, 173, 172, 92, 185, 146, 117, 235, 214, 81,
                  95, 95, 79, 93, 93, 29, 233, 233, 233, 188, 244, 210, 75, 220,
                  184, 113, 3, 147, 201, 68, 74, 74, 10, 178, 44, 99, 179, 217,
                  248, 190, 186, 134, 159, 46, 76, 194, 239, 247, 163, 170, 42,
                  195, 195, 195, 12, 13, 13, 113, 171, 237, 182, 246, 241, 254,
                  253, 135, 93, 46, 231, 101, 224, 22, 204, 80, 9, 39, 227, 40,
                  203, 50, 110, 183, 155, 176, 176, 48, 102, 205, 154, 133, 223,
                  239, 199, 237, 118, 51, 123, 246, 108, 124, 62, 31, 30, 143,
                  135, 225, 225, 97, 34, 34, 34, 2, 239, 78, 126, 152, 184, 221,
                  110, 252, 126, 63, 66, 8, 220, 110, 247, 68, 79, 232, 27, 96,
                  223, 190, 253, 197, 119, 239, 220, 174, 2, 174, 11, 33, 148,
                  25, 1, 104, 154, 198, 154, 53, 107, 56, 126, 252, 56, 35, 35,
                  35, 228, 230, 230, 146, 152, 152, 72, 97, 97, 33, 0, 155, 54,
                  109, 194, 100, 50, 241, 229, 151, 95, 98, 50, 153, 120, 254,
                  249, 231, 113, 56, 28, 124, 243, 205, 55, 88, 173, 86, 146,
                  147, 147, 209, 52, 13, 69, 81, 240, 122, 189, 56, 157, 78,
                  122, 122, 239, 241, 241, 159, 62, 173, 104, 184, 121, 237, 28,
                  112, 85, 8, 49, 58, 233, 111, 10, 0, 73, 104, 98, 204, 115,
                  159, 172, 172, 44, 22, 46, 92, 136, 36, 73, 196, 199, 199, 19,
                  28, 28, 76, 82, 82, 18, 154, 166, 145, 152, 152, 200, 99, 143,
                  61, 70, 65, 65, 1, 163, 163, 163, 44, 94, 188, 24, 77, 211,
                  120, 238, 185, 231, 200, 204, 204, 164, 187, 187, 27, 167,
                  219, 131, 199, 227, 193, 229, 114, 81, 223, 216, 172, 126,
                  180, 239, 192, 137, 166, 127, 214, 93, 0, 170, 133, 16, 142,
                  31, 251, 156, 2, 64, 136, 160, 191, 55, 217, 58, 68, 210, 124,
                  179, 20, 31, 31, 63, 1, 234, 65, 67, 137, 137, 137, 33, 40,
                  40, 8, 89, 150, 17, 66, 16, 21, 21, 69, 92, 92, 28, 178, 44,
                  163, 215, 235, 89, 181, 106, 21, 146, 36, 113, 229, 202, 21,
                  122, 7, 38, 212, 126, 161, 234, 31, 99, 31, 239, 251, 227,
                  231, 247, 122, 123, 190, 7, 106, 133, 16, 206, 135, 25, 159,
                  246, 107, 182, 237, 183, 239, 156, 95, 185, 252, 169, 95, 62,
                  181, 104, 1, 179, 66, 67, 144, 36, 41, 240, 21, 35, 203, 114,
                  224, 120, 120, 62, 9, 246, 194, 119, 85, 154, 226, 23, 52, 53,
                  183, 180, 125, 125, 252, 104, 225, 232, 168, 251, 202, 131,
                  152, 123, 30, 118, 62, 35, 128, 237, 219, 63, 48, 12, 221,
                  239, 202, 55, 24, 12, 219, 141, 70, 99, 164, 52, 67, 181, 124,
                  212, 240, 249, 125, 227, 157, 29, 237, 214, 27, 181, 151, 191,
                  27, 25, 30, 106, 5, 58, 152, 72, 55, 223, 163, 222, 153, 6,
                  224, 193, 78, 116, 128, 9, 136, 3, 30, 255, 111, 1, 60, 24,
                  42, 208, 11, 12, 76, 42, 253, 63, 141, 127, 1, 173, 193, 47,
                  22, 232, 14, 87, 117, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96,
                  130,
                ],
              },
            },
          },
        },
      },
    },
  },
}
