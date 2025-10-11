

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandGoogleFit = (props: IconProps) => {

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
          <Path  d="M12 8.866l-2.733 -2.734a3.866 3.866 0 0 0 -5.467 5.467l2.733 2.734l5.467 5.467l8.202 -8.201a3.866 3.866 0 0 0 -5.469 -5.466l-8.201 8.2" />
        </G>
      </Svg>
    );
  }

