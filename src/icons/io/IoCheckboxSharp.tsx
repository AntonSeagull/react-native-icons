

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCheckboxSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M48,48V464H464V48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z" />
        </G>
      </Svg>
    );
  }

