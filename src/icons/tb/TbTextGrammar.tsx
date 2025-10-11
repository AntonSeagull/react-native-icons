

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextGrammar = (props: IconProps) => {

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
          <Path  d="M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <Path  d="M4 12v-5a3 3 0 1 1 6 0v5" />
          <Path  d="M4 9h6" />
          <Path  d="M20 6v6" />
          <Path  d="M4 16h12" />
          <Path  d="M4 20h6" />
          <Path  d="M14 20l2 2l5 -5" />
        </G>
      </Svg>
    );
  }

