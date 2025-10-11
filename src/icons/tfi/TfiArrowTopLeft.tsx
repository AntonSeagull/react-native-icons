

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiArrowTopLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12.292 13l-10.317-10.297v7.297h-1v-9.003h9.025v1h-7.316l10.315 10.295-0.707 0.708z" fill="#000000" />
        </G>
      </Svg>
    );
  }

