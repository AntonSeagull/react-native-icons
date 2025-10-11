

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImarFormatting = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 14h9v2h-9zM14 2h-4.727l-2.871 11h-2.067l2.871-11h-4.205v-2h11zM14.528 16l-2.028-2.028-2.028 2.028-0.972-0.972 2.028-2.028-2.028-2.028 0.972-0.972 2.028 2.028 2.028-2.028 0.972 0.972-2.028 2.028 2.028 2.028z" fill="#000000" />
        </G>
      </Svg>
    );
  }

