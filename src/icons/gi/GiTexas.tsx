

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiTexas = (props: IconProps) => {

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
          <Path d="M156.3 41.88V222.6l-130.57 3c35.98 40.7 60.88 78.7 123.07 126 36.4-48.2 78.8-54.7 144.7 100.5l66.8 18c.7-49.4-15.2-97.8 126-155.3l-11.3-93-3-60.7-211.9-39.8V41.88z" fill="#000" />
        </G>
      </Svg>
    );
  }

