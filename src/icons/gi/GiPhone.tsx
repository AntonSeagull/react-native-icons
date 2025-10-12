

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiPhone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M170.738 311.468c8.07-42.15 99.697-131.543 138.247-138.247 11.314 11.314 33.94 33.942 56.57 33.942l79.195-79.196c0-22.628-35.103-49.413-56.57-56.57C272.583 32.865 32.865 272.583 71.398 388.182c7.156 21.467 33.94 56.57 56.57 56.57l79.195-79.196c0-22.628-25.11-42.772-36.424-54.086z" />
        </G>
      </Svg>
    );
  }

