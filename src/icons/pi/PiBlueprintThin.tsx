

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBlueprintThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M232,60H68V40a4,4,0,0,0-4-4H48A28,28,0,0,0,20,64V176a28,28,0,0,0,28,28H232a4,4,0,0,0,4-4V64A4,4,0,0,0,232,60ZM28,64A20,20,0,0,1,48,44H60V148H48a27.94,27.94,0,0,0-20,8.42ZM228,196H48a20,20,0,0,1,0-40H64a4,4,0,0,0,4-4V68H228ZM104,140a4,4,0,0,0,0,8h20v12a4,4,0,0,0,8,0V148h32v12a4,4,0,0,0,8,0V148h20a4,4,0,0,0,0-8H172V116h20a4,4,0,0,0,0-8H172V96a4,4,0,0,0-8,0v12H132V96a4,4,0,0,0-8,0v12H104a4,4,0,0,0,0,8h20v24Zm28-24h32v24H132Z" />
        </G>
      </Svg>
    );
  }

