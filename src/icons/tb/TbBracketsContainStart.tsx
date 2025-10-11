

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBracketsContainStart = (props: IconProps) => {

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
          <Path d="M9 4h-4v16h4" />
          <Path d="M18 16h-.01" />
          <Path d="M14 16h-.01" />
          <Path d="M10 16h-.01" />
        </G>
      </Svg>
    );
  }

