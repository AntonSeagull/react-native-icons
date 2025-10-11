

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPrison = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M18 4v16" />
          <Path d="M14 4v16" />
          <Path d="M6 4v5" />
          <Path d="M6 15v5" />
          <Path d="M10 4v5" />
          <Path d="M11 9h-6v6h6z" />
          <Path d="M10 15v5" />
          <Path d="M8 12h-.01" />
        </G>
      </Svg>
    );
  }

