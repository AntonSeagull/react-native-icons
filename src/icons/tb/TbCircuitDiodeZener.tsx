

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircuitDiodeZener = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M22 12h-6" />
          <Path  d="M2 12h6" />
          <Path  d="M8 7l8 5l-8 5z" />
          <Path  d="M14 7h2v10h2" />
        </G>
      </Svg>
    );
  }

